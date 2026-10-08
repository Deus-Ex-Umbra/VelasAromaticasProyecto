'use client';

import * as React from 'react';
import {
  InsumosDirectos,
  CostosIndirectos,
  ConfiguracionVela,
  ResultadoFinanciero,
} from '@/tipos/calculadora';
import { formatearMoneda } from '@/lib/motor-costos';
import { Check, Copy } from 'lucide-react';

interface ModalCopiaRecetaProps {
  insumos: InsumosDirectos;
  indirectos: CostosIndirectos;
  configuracion: ConfiguracionVela;
  resultado: ResultadoFinanciero;
  esLote: boolean;
  monedaSimbolo?: string;
  monedaLocale?: string;
}

export function ModalCopiaReceta({
  insumos,
  indirectos,
  configuracion,
  resultado,
  esLote,
  monedaSimbolo = 'Bs',
  monedaLocale = 'es-BO',
}: ModalCopiaRecetaProps) {
  const [copiado, setCopiado] = React.useState(false);

  const textoCotizacion = React.useMemo(() => {
    const encabezado = esLote
      ? `🕯️ *COTIZACIÓN DE LOTE DE VELAS ARTESANALES (${configuracion.cantidad_lote} UNIDADES)*`
      : `🕯️ *FICHA DE COSTOS Y PRECIO — VELA ARTESANAL*`;

    return `${encabezado}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧪 *FÓRMULA Y RECETA (POR VELA):*
• Cera base: ${insumos.gramos_cera_por_vela} g (${formatearMoneda(resultado.costo_cera_unitario, monedaSimbolo, monedaLocale)})
• Fragancia aromática: ${resultado.gramos_esencia_por_vela} g al ${insumos.porcentaje_esencia}% (${formatearMoneda(resultado.costo_esencia_unitario, monedaSimbolo, monedaLocale)})
• Contenedor / Frasco: ${formatearMoneda(insumos.costo_contenedor_unitario, monedaSimbolo, monedaLocale)}
• Mecha y pabilo con ojalillo: ${formatearMoneda(insumos.costo_pabilo_unitario, monedaSimbolo, monedaLocale)}
• Peso neto total por vela: ${resultado.peso_total_vela_gramos} g

📦 *COSTOS INDIRECTOS (POR VELA):*
• Empaque, cajas y etiquetas: ${formatearMoneda(indirectos.costo_empaque_unitario + indirectos.costo_etiquetas_unitario, monedaSimbolo, monedaLocale)}
• Servicios, mano de obra y merma: ${formatearMoneda(indirectos.servicios_energia_unitario + indirectos.mano_obra_unitaria + resultado.costo_merma_unitario, monedaSimbolo, monedaLocale)}
• Subtotal indirectos: ${formatearMoneda(resultado.costo_indirecto_unitario, monedaSimbolo, monedaLocale)}

💰 *BALANCE FINANCIERO Y PRECIO:*
• Costo total de producción: ${formatearMoneda(esLote ? resultado.costo_total_lote : resultado.costo_total_unitario, monedaSimbolo, monedaLocale)}
• Margen comercial sobre venta: ${configuracion.margen_beneficio_porcentaje}%
• 🏷️ *PRECIO DE VENTA SUGERIDO:* ${formatearMoneda(esLote ? resultado.precio_venta_sugerido * configuracion.cantidad_lote : resultado.precio_venta_sugerido, monedaSimbolo, monedaLocale)}
• 🌿 *GANANCIA NETA LÍQUIDA:* ${formatearMoneda(esLote ? resultado.ganancia_total_lote : resultado.ganancia_neta_unitaria, monedaSimbolo, monedaLocale)}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ *Calculado con precisión artesanal — Cero pérdidas*`;
  }, [insumos, indirectos, configuracion, resultado, esLote, monedaSimbolo, monedaLocale]);

  const manejarCopiar = async () => {
    try {
      await navigator.clipboard.writeText(textoCotizacion);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-serif text-sm font-bold text-artesanal-carbon">
          Resumen Listo para Cotización
        </h4>
        <button
          type="button"
          onClick={manejarCopiar}
          className="inline-flex items-center gap-1.5 rounded-xl bg-artesanal-carbon px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-artesanal-verde-600 active:scale-95"
        >
          {copiado ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span>¡Copiado al portapapeles!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copiar para WhatsApp / Notas</span>
            </>
          )}
        </button>
      </div>

      <pre className="max-h-36 overflow-y-auto rounded-2xl border border-artesanal-borde bg-artesanal-verde-50/50 dark:bg-artesanal-verde-950/20 p-3 text-[11px] font-mono text-artesanal-carbon leading-relaxed whitespace-pre-wrap select-all">
        {textoCotizacion}
      </pre>
    </div>
  );
}
