'use client';

import * as React from 'react';
import { ResultadoFinanciero } from '@/tipos/calculadora';
import { formatearMoneda } from '@/lib/motor-costos';

interface DesgloseGraficoProps {
  resultado: ResultadoFinanciero;
  monedaSimbolo?: string;
  monedaLocale?: string;
}

export function DesgloseGrafico({
  resultado,
  monedaSimbolo = 'Bs',
  monedaLocale = 'es-BO',
}: DesgloseGraficoProps) {
  const segmentos = [
    {
      etiqueta: 'Cera',
      porcentaje: resultado.porcentaje_cera,
      monto: resultado.costo_cera_unitario,
      color: 'bg-amber-600',
      colorTexto: 'text-amber-800 dark:text-amber-300',
    },
    {
      etiqueta: 'Esencia',
      porcentaje: resultado.porcentaje_esencia,
      monto: resultado.costo_esencia_unitario,
      color: 'bg-amber-400',
      colorTexto: 'text-amber-700 dark:text-amber-400',
    },
    {
      etiqueta: 'Envase + Mecha',
      porcentaje: resultado.porcentaje_contenedor_pabilo,
      monto: resultado.costo_contenedor_unitario + resultado.costo_pabilo_unitario,
      color: 'bg-stone-500',
      colorTexto: 'text-stone-700 dark:text-stone-300',
    },
    {
      etiqueta: 'Indirectos',
      porcentaje: resultado.porcentaje_indirectos,
      monto: resultado.costo_indirecto_unitario,
      color: 'bg-stone-400',
      colorTexto: 'text-stone-600 dark:text-stone-400',
    },
    {
      etiqueta: 'Ganancia Neta',
      porcentaje: resultado.porcentaje_ganancia,
      monto: resultado.ganancia_neta_unitaria,
      color: 'bg-amber-500',
      colorTexto: 'text-amber-800 dark:text-amber-300',
    },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold uppercase tracking-wider text-artesanal-piedra">
          Distribución del Precio de Venta
        </span>
        <span className="font-mono text-xs font-bold text-artesanal-carbon">
          Total: {formatearMoneda(resultado.precio_venta_sugerido, monedaSimbolo, monedaLocale)}
        </span>
      </div>

      {/* Barra segmentada apilada */}
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-artesanal-borde p-0.5 shadow-inner">
        {segmentos.map((segmento, indice) => {
          const ancho = Math.max(0, Math.min(100, segmento.porcentaje));
          if (ancho <= 0) return null;

          return (
            <div
              key={indice}
              style={{ width: `${ancho}%` }}
              className={`h-full transition-all duration-500 ${segmento.color} first:rounded-l-full last:rounded-r-full hover:opacity-90`}
              title={`${segmento.etiqueta}: ${segmento.porcentaje}% (${formatearMoneda(segmento.monto, monedaSimbolo, monedaLocale)})`}
            />
          );
        })}
      </div>

      {/* Leyendas con montos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs">
        {segmentos.map((segmento, indice) => (
          <div key={indice} className="flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-full ${segmento.color} shrink-0`} />
            <div className="truncate">
              <span className="font-medium text-artesanal-carbon">{segmento.etiqueta}: </span>
              <span className="font-mono text-artesanal-piedra">{segmento.porcentaje}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
