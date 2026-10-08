'use client';

import * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { CostosIndirectos, ResultadoFinanciero } from '@/tipos/calculadora';
import { formatearMoneda } from '@/lib/motor-costos';
import { ShieldCheck } from 'lucide-react';

interface AcordeonIndirectosProps {
  indirectos: CostosIndirectos;
  resultado: ResultadoFinanciero;
  alCambiarIndirecto: <K extends keyof CostosIndirectos>(
    campo: K,
    valor: CostosIndirectos[K]
  ) => void;
  monedaSimbolo?: string;
  monedaLocale?: string;
}

export function AcordeonIndirectos({
  indirectos,
  resultado,
  alCambiarIndirecto,
  monedaSimbolo = 'Bs',
  monedaLocale = 'es-BO',
}: AcordeonIndirectosProps) {
  return (
    <div id="tutorial-indirectos" className="rounded-3xl border border-artesanal-borde bg-artesanal-tarjeta backdrop-blur-sm p-2 sm:p-4 shadow-sm">
      <Accordion type="single" collapsible defaultValue="indirectos">
        <AccordionItem value="indirectos" className="border-none">
          <AccordionTrigger className="hover:no-underline py-2 px-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-artesanal-ambar-100 text-artesanal-ambar-800 dark:bg-artesanal-ambar-950/70 dark:text-artesanal-ambar-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-artesanal-carbon">
                    Costos Indirectos y Ocultos
                  </h4>
                  <span className="rounded-full bg-artesanal-ambar-100 px-2.5 py-0.5 text-[11px] font-semibold text-artesanal-ambar-800 dark:bg-artesanal-ambar-950 dark:text-artesanal-ambar-200">
                    Cero Pérdidas
                  </span>
                </div>
                <p className="text-xs text-artesanal-piedra">
                  Empaque, etiquetas, energía, tiempo y pasarela ({formatearMoneda(resultado.costo_indirecto_unitario, monedaSimbolo, monedaLocale)}/vela)
                </p>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="pt-4 px-2 space-y-4">
            <p className="text-xs text-artesanal-piedra leading-relaxed bg-artesanal-ambar-50/70 dark:bg-artesanal-ambar-950/40 p-3 rounded-2xl border border-artesanal-ambar-200/60 dark:border-artesanal-ambar-900">
              💡 <strong>Regla de Oro en Cerería:</strong> Omitir el tiempo, la caja craft o la energía es la causa #1 de quiebra artesanal. Añádelos aquí para garantizar que tu beneficio sea 100% ganancia real.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-artesanal-piedra mb-1.5">
                  Empaque unitario (Caja, bolsa, viruta)
                </label>
                <Input
                  type="number"
                  min="0"
                  step="0.5"
                  prefijo={monedaSimbolo}
                  value={indirectos.costo_empaque_unitario || ''}
                  onChange={(e) =>
                    alCambiarIndirecto('costo_empaque_unitario', parseFloat(e.target.value) || 0)
                  }
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-artesanal-piedra mb-1.5">
                  Etiquetas (Marca y Seguridad)
                </label>
                <Input
                  type="number"
                  min="0"
                  step="0.5"
                  prefijo={monedaSimbolo}
                  value={indirectos.costo_etiquetas_unitario || ''}
                  onChange={(e) =>
                    alCambiarIndirecto('costo_etiquetas_unitario', parseFloat(e.target.value) || 0)
                  }
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-artesanal-piedra mb-1.5">
                  Servicios y energía por vela
                </label>
                <Input
                  type="number"
                  min="0"
                  step="0.5"
                  prefijo={monedaSimbolo}
                  value={indirectos.servicios_energia_unitario || ''}
                  onChange={(e) =>
                    alCambiarIndirecto('servicios_energia_unitario', parseFloat(e.target.value) || 0)
                  }
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-artesanal-piedra mb-1.5">
                  Mano de obra y tiempo por vela
                </label>
                <Input
                  type="number"
                  min="0"
                  step="1"
                  prefijo={monedaSimbolo}
                  value={indirectos.mano_obra_unitaria || ''}
                  onChange={(e) =>
                    alCambiarIndirecto('mano_obra_unitaria', parseFloat(e.target.value) || 0)
                  }
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-artesanal-piedra mb-1.5">
                  Merma técnica / flete insumos (%)
                </label>
                <Input
                  type="number"
                  min="0"
                  max="15"
                  step="0.5"
                  sufijo="%"
                  value={indirectos.porcentaje_merma || ''}
                  onChange={(e) =>
                    alCambiarIndirecto('porcentaje_merma', parseFloat(e.target.value) || 0)
                  }
                  placeholder="0%"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-artesanal-piedra mb-1.5">
                  Comisión QR / Pasarela / Venta (%)
                </label>
                <Input
                  type="number"
                  min="0"
                  max="20"
                  step="0.1"
                  sufijo="%"
                  value={indirectos.porcentaje_comision_pasarela || ''}
                  onChange={(e) =>
                    alCambiarIndirecto('porcentaje_comision_pasarela', parseFloat(e.target.value) || 0)
                  }
                  placeholder="0%"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between pt-3 text-xs text-artesanal-piedra border-t border-artesanal-borde gap-2">
              <span>
                Total indirectos: <strong>{formatearMoneda(resultado.costo_indirecto_unitario, monedaSimbolo, monedaLocale)}</strong>
                {resultado.costo_comision_unitaria > 0 && ` (incluye ${formatearMoneda(resultado.costo_comision_unitaria, monedaSimbolo, monedaLocale)} de comisión)`}
              </span>
              <span className="font-semibold text-artesanal-carbon">
                Costo Total Unitario: {formatearMoneda(resultado.costo_total_unitario, monedaSimbolo, monedaLocale)}
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
