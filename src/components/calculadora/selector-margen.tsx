'use client';

import * as React from 'react';
import { Slider } from '@/components/ui/slider';
import { ControlPaso } from '@/components/ui/control-paso';
import { TRAMOS_MARGEN_PREDEFINIDOS } from '@/lib/motor-costos';
import { InsigniaMargenViva } from '@/components/artesanal/insignia-margen-viva';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';

interface SelectorMargenProps {
  margenActual: number;
  alCambiarMargen: (nuevoMargen: number) => void;
}

export function SelectorMargen({
  margenActual,
  alCambiarMargen,
}: SelectorMargenProps) {
  return (
    <div id="tutorial-margen" className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="font-serif text-lg font-bold text-artesanal-carbon">
            Margen de Beneficio Deseado
          </h4>
          <p className="text-xs text-artesanal-piedra">
            Porcentaje de ganancia neta líquida sobre el precio final de venta
          </p>
        </div>
        <InsigniaMargenViva margen={margenActual} />
      </div>

      {/* Slider y Stepper con + y - */}
      <div className="space-y-3 rounded-2xl bg-artesanal-ambar-50/50 dark:bg-artesanal-ambar-950/20 p-4 border border-artesanal-borde">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          <div className="sm:col-span-7 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-artesanal-piedra">
              Ajuste fino del margen:
            </span>
            <Slider
              min={20}
              max={85}
              step={1}
              value={[margenActual]}
              onValueChange={([val]) => alCambiarMargen(val)}
            />
          </div>
          <div className="sm:col-span-5">
            <ControlPaso
              etiqueta="Margen exacto"
              valor={margenActual}
              alCambiar={alCambiarMargen}
              min={20}
              max={85}
              paso={1}
              sufijo="%"
            />
          </div>
        </div>

        <div className="flex justify-between text-[10px] text-artesanal-piedra font-medium">
          <span>20% (Riesgo)</span>
          <span>35% (Base mínima)</span>
          <span>50% (Mayorista)</span>
          <span>65% (Retail óptimo)</span>
          <span>85% (Boutique)</span>
        </div>
      </div>

      {/* Tramos rápidos recomendados */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {TRAMOS_MARGEN_PREDEFINIDOS.map((tramo) => {
          const estaSeleccionado = margenActual === tramo.porcentaje;

          return (
            <button
              key={tramo.porcentaje}
              type="button"
              onClick={() => alCambiarMargen(tramo.porcentaje)}
              className={cn(
                'relative flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all duration-200 active:scale-95',
                estaSeleccionado
                  ? 'border-artesanal-ambar-600 bg-artesanal-ambar-100/70 text-artesanal-carbon shadow-sm ring-2 ring-artesanal-ambar-500/20 dark:bg-artesanal-ambar-950/80 dark:border-artesanal-ambar-500'
                  : 'border-artesanal-borde bg-artesanal-tarjeta hover:border-artesanal-ambar-400 hover:bg-artesanal-ambar-50/50 text-artesanal-piedra dark:hover:bg-artesanal-ambar-950/30'
              )}
            >
              {tramo.recomendado && (
                <span className="absolute -top-2 rounded-full bg-artesanal-ambar-600 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider shadow-xs">
                  Recomendado
                </span>
              )}
              <span className="font-mono text-base font-bold text-artesanal-carbon">
                {tramo.porcentaje}%
              </span>
              <span className="text-[11px] font-medium leading-tight mt-0.5">
                {tramo.porcentaje === 35 && 'Supervivencia'}
                {tramo.porcentaje === 50 && 'Mayorista'}
                {tramo.porcentaje === 65 && 'Retail Directo'}
                {tramo.porcentaje === 80 && 'Boutique'}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex items-start gap-2 rounded-2xl bg-artesanal-ambar-50/80 dark:bg-artesanal-ambar-950/40 p-3 text-xs text-artesanal-ambar-950 dark:text-artesanal-ambar-200 border border-artesanal-ambar-200/60 dark:border-artesanal-ambar-900">
        <Info className="h-4 w-4 shrink-0 text-artesanal-ambar-700 dark:text-artesanal-ambar-400 mt-0.5" />
        <p>
          <strong>Cálculo Financiero Preciso:</strong> Usamos la fórmula real de margen sobre venta <em>[Precio = Costo / (1 - Margen%)]</em>. Un recargo simple del 50% solo te daría un 33% de ganancia real; con nuestra fórmula tu margen en Bolivia y LATAM es exacto y blindado.
        </p>
      </div>
    </div>
  );
}
