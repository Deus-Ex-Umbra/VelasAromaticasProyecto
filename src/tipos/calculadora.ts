/**
 * Tipos de datos para el motor de formulación y finanzas de velas artesanales.
 * Cumple con el estándar de nombrado en Español absoluto y snake_case para atributos.
 */

export interface InsumosDirectos {
  // Cera
  costo_kilo_cera: number;
  gramos_cera_por_vela: number;

  // Fragancia / Esencia
  costo_frasco_esencia: number;
  gramos_frasco_esencia: number;
  porcentaje_esencia: number; // Típicamente entre 4% y 12%

  // Elementos individuales
  costo_pabilo_unitario: number;
  costo_contenedor_unitario: number;
}

export interface CostosIndirectos {
  costo_empaque_unitario: number;      // Cajas, bolsas, papel kraft, viruta
  costo_etiquetas_unitario: number;    // Etiqueta frontal y advertencia
  servicios_energia_unitario: number;  // Gas, electricidad prorrateada
  mano_obra_unitaria: number;          // Tiempo de vertido, curado y etiquetado
  porcentaje_merma: number;            // Factor de seguridad (ej. 2% a 3%)
  porcentaje_comision_pasarela: number;// Comisión de venta (ej. 3.5% a 6%)
}

export interface ConfiguracionVela {
  cantidad_lote: number;              // Cantidad de piezas a producir
  margen_beneficio_porcentaje: number; // Margen comercial sobre venta deseado (ej. 35%, 50%, 65%)
  volumen_contenedor_ml?: number;     // Capacidad del envase en mililitros (opcional para conversión)
}

export interface ResultadoFinanciero {
  // Formulación física
  gramos_esencia_por_vela: number;
  peso_total_vela_gramos: number;

  // Costeo directo unitario
  costo_cera_unitario: number;
  costo_esencia_unitario: number;
  costo_pabilo_unitario: number;
  costo_contenedor_unitario: number;
  subtotal_costo_directo: number;

  // Costeo indirecto unitario
  costo_indirecto_unitario: number;
  costo_merma_unitario: number;
  costo_comision_unitaria: number;

  // Costo total de producción
  costo_total_unitario: number;
  costo_total_lote: number;

  // Precio y rendimiento
  precio_venta_sugerido: number;
  ganancia_neta_unitaria: number;
  ganancia_total_lote: number;

  // Desglose porcentual para gráficos
  porcentaje_cera: number;
  porcentaje_esencia: number;
  porcentaje_contenedor_pabilo: number;
  porcentaje_indirectos: number;
  porcentaje_ganancia: number;

  // Evaluación de rentabilidad
  nivel_rentabilidad: 'riesgo' | 'minimo' | 'saludable' | 'premium';
}

export interface TramoMargen {
  porcentaje: number;
  etiqueta: string;
  descripcion: string;
  categoria: 'riesgo' | 'minimo' | 'saludable' | 'premium';
  recomendado?: boolean;
}
