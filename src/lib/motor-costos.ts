import type {
  InsumosDirectos,
  CostosIndirectos,
  ConfiguracionVela,
  ResultadoFinanciero,
  TramoMargen,
} from '../tipos/calculadora';

export const FACTOR_DENSIDAD_CERA_ESTANDAR = 0.86;
export const MARGEN_MINIMO_SUPERVIVENCIA = 35;
export const MARGEN_SOSTENIBLE_MAYORISTA = 50;
export const MARGEN_RECOMENDADO_RETAIL = 60;
export const MARGEN_PREMIUM_BOUTIQUE = 75;

export const TRAMOS_MARGEN_PREDEFINIDOS: TramoMargen[] = [
  {
    porcentaje: 35,
    etiqueta: '35% — Supervivencia',
    descripcion: 'Punto de equilibrio mínimo para evitar pérdidas',
    categoria: 'minimo',
  },
  {
    porcentaje: 50,
    etiqueta: '50% — Sostenible / Mayorista',
    descripcion: 'Permite absorber distribuidores y variaciones de insumos',
    categoria: 'saludable',
  },
  {
    porcentaje: 65,
    etiqueta: '65% — Retail Recomendado',
    descripcion: 'Saludable para venta directa al cliente final',
    categoria: 'saludable',
    recomendado: true,
  },
  {
    porcentaje: 80,
    etiqueta: '80% — Alta Perfumería / Boutique',
    descripcion: 'Para velas de autor con packaging de lujo y alta exclusividad',
    categoria: 'premium',
  },
];

// Valores por defecto contextualizados al mercado de Bolivia (en Bolivianos Bs)
export const VALORES_DEFECTO_INSUMOS: InsumosDirectos = {
  costo_kilo_cera: 55,       // Bs 55 por kilo de cera de soja estándar en Bolivia
  gramos_cera_por_vela: 200, // 200 gramos para vaso estándar
  costo_frasco_esencia: 70,  // Bs 70 el frasco comercial de 100g de fragancia
  gramos_frasco_esencia: 100,// 100 gramos/ml
  porcentaje_esencia: 8,     // 8% de carga aromática estándar
  costo_pabilo_unitario: 1.5,// Bs 1.50 mecha con ojalillo metálico
  costo_contenedor_unitario: 10, // Bs 10.00 frasco de vidrio ámbar / vaso cerámico
};

export const VALORES_DEFECTO_INDIRECTOS: CostosIndirectos = {
  costo_empaque_unitario: 3.5, // Bs 3.50 caja kraft individual / bolsa
  costo_etiquetas_unitario: 1.5, // Bs 1.50 etiqueta vinil de diseño + advertencia
  servicios_energia_unitario: 1.0, // Bs 1.00 gas / electricidad para fundido
  mano_obra_unitaria: 5.0, // Bs 5.00 tiempo y curado por vela
  porcentaje_merma: 2.5, // 2.5% merma técnica de vertido y flete
  porcentaje_comision_pasarela: 2.0, // 2.0% cobro por QR / pasarela de pago
};

export const VALORES_DEFECTO_CONFIGURACION: ConfiguracionVela = {
  cantidad_lote: 12,
  margen_beneficio_porcentaje: 60,
  volumen_contenedor_ml: 232,
};

/**
 * Convierte volumen en mililitros de un contenedor a gramos de cera usando la densidad estándar.
 */
export function calcularPesoCeraDesdeVolumen(
  volumen_ml: number,
  factor_densidad = FACTOR_DENSIDAD_CERA_ESTANDAR
): number {
  if (volumen_ml <= 0) return 0;
  return Math.round(volumen_ml * factor_densidad);
}

/**
 * Calcula los gramos de esencia aromática según la carga de fragancia sobre la cera base.
 */
export function calcularGramosFragancia(
  gramos_cera: number,
  porcentaje_esencia: number
): number {
  if (gramos_cera <= 0 || porcentaje_esencia <= 0) return 0;
  const gramos = gramos_cera * (porcentaje_esencia / 100);
  return Number(gramos.toFixed(2));
}

/**
 * Realiza el cálculo financiero integral y de formulación con reactividad a 60 FPS.
 */
export function calcularResultadoFinanciero(
  insumos: InsumosDirectos,
  indirectos: CostosIndirectos,
  configuracion: ConfiguracionVela
): ResultadoFinanciero {
  // 1. Rendimiento y formulación física
  const gramos_esencia = calcularGramosFragancia(
    insumos.gramos_cera_por_vela,
    insumos.porcentaje_esencia
  );
  const peso_total_vela = Number((insumos.gramos_cera_por_vela + gramos_esencia).toFixed(2));

  // 2. Costos directos unitarios
  const costo_unitario_cera = insumos.gramos_cera_por_vela > 0 && insumos.costo_kilo_cera > 0
    ? (insumos.costo_kilo_cera / 1000) * insumos.gramos_cera_por_vela
    : 0;

  const costo_por_gramo_esencia = insumos.gramos_frasco_esencia > 0 && insumos.costo_frasco_esencia > 0
    ? insumos.costo_frasco_esencia / insumos.gramos_frasco_esencia
    : 0;

  const costo_unitario_esencia = costo_por_gramo_esencia * gramos_esencia;

  const subtotal_directo = Number(
    (
      costo_unitario_cera +
      costo_unitario_esencia +
      insumos.costo_pabilo_unitario +
      insumos.costo_contenedor_unitario
    ).toFixed(2)
  );

  // 3. Costos indirectos unitarios
  const costos_fijos_indirectos =
    indirectos.costo_empaque_unitario +
    indirectos.costo_etiquetas_unitario +
    indirectos.servicios_energia_unitario +
    indirectos.mano_obra_unitaria;

  const costo_merma = Number((subtotal_directo * (indirectos.porcentaje_merma / 100)).toFixed(2));
  const costo_base_sin_comision = subtotal_directo + costos_fijos_indirectos + costo_merma;

  // 4. Margen sobre venta y precio final sugerido
  // Fórmula: Precio = Costo Base / (1 - (Margen% + Comision%) / 100)
  const suma_porcentajes = configuracion.margen_beneficio_porcentaje + indirectos.porcentaje_comision_pasarela;
  const factor_divisor = Math.max(0.05, 1 - (suma_porcentajes / 100));

  const precio_venta_sugerido = Number((costo_base_sin_comision / factor_divisor).toFixed(2));
  const costo_comision_unitaria = Number(
    (precio_venta_sugerido * (indirectos.porcentaje_comision_pasarela / 100)).toFixed(2)
  );

  const costo_indirecto_total = Number(
    (costos_fijos_indirectos + costo_merma + costo_comision_unitaria).toFixed(2)
  );

  const costo_total_unitario = Number((subtotal_directo + costo_indirecto_total).toFixed(2));
  const ganancia_neta_unitaria = Number((precio_venta_sugerido - costo_total_unitario).toFixed(2));

  const cantidad_lote = Math.max(1, configuracion.cantidad_lote || 1);
  const costo_total_lote = Number((costo_total_unitario * cantidad_lote).toFixed(2));
  const ganancia_total_lote = Number((ganancia_neta_unitaria * cantidad_lote).toFixed(2));

  // 5. Desglose porcentual
  const precio_referencia = precio_venta_sugerido > 0 ? precio_venta_sugerido : 1;
  const porcentaje_cera = Number(((costo_unitario_cera / precio_referencia) * 100).toFixed(1));
  const porcentaje_esencia = Number(((costo_unitario_esencia / precio_referencia) * 100).toFixed(1));
  const porcentaje_contenedor_pabilo = Number(
    (((insumos.costo_contenedor_unitario + insumos.costo_pabilo_unitario) / precio_referencia) * 100).toFixed(1)
  );
  const porcentaje_indirectos = Number(((costo_indirecto_total / precio_referencia) * 100).toFixed(1));
  const porcentaje_ganancia = Number(((ganancia_neta_unitaria / precio_referencia) * 100).toFixed(1));

  // 6. Nivel de rentabilidad
  let nivel: 'riesgo' | 'minimo' | 'saludable' | 'premium' = 'minimo';
  if (configuracion.margen_beneficio_porcentaje < MARGEN_MINIMO_SUPERVIVENCIA) {
    nivel = 'riesgo';
  } else if (configuracion.margen_beneficio_porcentaje < MARGEN_SOSTENIBLE_MAYORISTA) {
    nivel = 'minimo';
  } else if (configuracion.margen_beneficio_porcentaje < MARGEN_PREMIUM_BOUTIQUE) {
    nivel = 'saludable';
  } else {
    nivel = 'premium';
  }

  return {
    gramos_esencia_por_vela: gramos_esencia,
    peso_total_vela_gramos: peso_total_vela,
    costo_cera_unitario: Number(costo_unitario_cera.toFixed(2)),
    costo_esencia_unitario: Number(costo_unitario_esencia.toFixed(2)),
    costo_pabilo_unitario: insumos.costo_pabilo_unitario,
    costo_contenedor_unitario: insumos.costo_contenedor_unitario,
    subtotal_costo_directo: subtotal_directo,
    costo_indirecto_unitario: costo_indirecto_total,
    costo_merma_unitario: costo_merma,
    costo_comision_unitaria: costo_comision_unitaria,
    costo_total_unitario: costo_total_unitario,
    costo_total_lote: costo_total_lote,
    precio_venta_sugerido: precio_venta_sugerido,
    ganancia_neta_unitaria: ganancia_neta_unitaria,
    ganancia_total_lote: ganancia_total_lote,
    porcentaje_cera: porcentaje_cera,
    porcentaje_esencia: porcentaje_esencia,
    porcentaje_contenedor_pabilo: porcentaje_contenedor_pabilo,
    porcentaje_indirectos: porcentaje_indirectos,
    porcentaje_ganancia: porcentaje_ganancia,
    nivel_rentabilidad: nivel,
  };
}

/**
 * Formatea un número con dos decimales y símbolo monetario adaptable.
 */
export function formatearMoneda(
  cantidad: number,
  moneda = 'Bs',
  locale = 'es-BO'
): string {
  const formateado = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cantidad || 0);

  return `${moneda} ${formateado}`;
}
