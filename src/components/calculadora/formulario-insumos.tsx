'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { ControlPaso } from '@/components/ui/control-paso';
import { InsumosDirectos, ResultadoFinanciero } from '@/tipos/calculadora';
import { formatearMoneda } from '@/lib/motor-costos';
import { Droplets, Flame, Package, HelpCircle } from 'lucide-react';

interface FormularioInsumosProps {
  insumos: InsumosDirectos;
  resultado: ResultadoFinanciero;
  alCambiarInsumo: <K extends keyof InsumosDirectos>(campo: K, valor: InsumosDirectos[K]) => void;
  alConvertirVolumen: (volumen_ml: number) => void;
  monedaSimbolo?: string;
  monedaLocale?: string;
}

export function FormularioInsumos({
  insumos,
  resultado,
  alCambiarInsumo,
  alConvertirVolumen,
  monedaSimbolo = 'Bs',
  monedaLocale = 'es-BO',
}: FormularioInsumosProps) {
  const [mostrarConversorVolumen, setMostrarConversorVolumen] = React.useState(false);
  const [volumenInput, setVolumenInput] = React.useState('232');

  const manejarAplicarVolumen = () => {
    const ml = parseFloat(volumenInput);
    if (!isNaN(ml) && ml > 0) {
      alConvertirVolumen(ml);
      setMostrarConversorVolumen(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. SECCIÓN DE CERA */}
      <Card id="tutorial-cera" className="border-artesanal-borde bg-artesanal-tarjeta backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-artesanal-verde-100 text-artesanal-verde-800 dark:bg-artesanal-verde-950/70 dark:text-artesanal-verde-300">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Cera Base (Soja, Palma o Coco)</CardTitle>
                <p className="text-xs text-artesanal-piedra">Materia prima principal de la vela</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMostrarConversorVolumen(!mostrarConversorVolumen)}
              className="text-xs font-medium text-artesanal-verde-700 dark:text-artesanal-verde-300 hover:underline decoration-dotted flex items-center gap-1"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              {mostrarConversorVolumen ? 'Cerrar conversor' : '¿Solo sabes los ml del vaso?'}
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {mostrarConversorVolumen && (
            <div className="rounded-2xl border border-artesanal-verde-200 bg-artesanal-verde-50/70 dark:bg-artesanal-verde-950/40 dark:border-artesanal-verde-900 p-4 space-y-2">
              <p className="text-xs text-artesanal-verde-900 dark:text-artesanal-verde-200 font-medium">
                La cera líquida tiene una densidad menor al agua (~0.86). Ingresa los ml de agua que caben en tu vaso:
              </p>
              <div className="flex gap-2">
                <Input
                  type="number"
                  value={volumenInput}
                  onChange={(e) => setVolumenInput(e.target.value)}
                  prefijo="ml"
                  className="bg-artesanal-tarjeta"
                  placeholder="Ej. 230"
                />
                <button
                  type="button"
                  onClick={manejarAplicarVolumen}
                  className="rounded-2xl bg-artesanal-verde-600 px-4 py-2 text-xs font-bold text-white hover:bg-artesanal-verde-700 active:scale-95 transition-all shadow-xs"
                >
                  Convertir a Gramos (×0.86)
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-artesanal-piedra mb-1.5">
                Costo del kilo de cera ({monedaSimbolo})
              </label>
              <Input
                type="number"
                min="0"
                step="1"
                prefijo={monedaSimbolo}
                sufijo="/kg"
                value={insumos.costo_kilo_cera || ''}
                onChange={(e) => alCambiarInsumo('costo_kilo_cera', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
              />
            </div>
            <div>
              <ControlPaso
                etiqueta="Cera requerida por vela"
                valor={insumos.gramos_cera_por_vela}
                alCambiar={(nuevoGramos) => alCambiarInsumo('gramos_cera_por_vela', nuevoGramos)}
                min={0}
                max={1500}
                paso={10}
                sufijo="g"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-xs text-artesanal-piedra border-t border-artesanal-borde/60">
            <span>Costo de cera por vela:</span>
            <span className="font-semibold text-artesanal-carbon">
              {formatearMoneda(resultado.costo_cera_unitario, monedaSimbolo, monedaLocale)}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* 2. SECCIÓN DE FRAGANCIA */}
      <Card id="tutorial-esencia" className="border-artesanal-borde bg-artesanal-tarjeta backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-artesanal-verde-100 text-artesanal-verde-800 dark:bg-artesanal-verde-950/70 dark:text-artesanal-verde-300">
              <Droplets className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-lg">Esencia Aromática / Fragancia</CardTitle>
              <p className="text-xs text-artesanal-piedra">Calculada sobre el peso de la cera base</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-artesanal-piedra mb-1.5">
                Costo del frasco comercial ({monedaSimbolo})
              </label>
              <Input
                type="number"
                min="0"
                step="1"
                prefijo={monedaSimbolo}
                value={insumos.costo_frasco_esencia || ''}
                onChange={(e) => alCambiarInsumo('costo_frasco_esencia', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-artesanal-piedra mb-1.5">
                Contenido del frasco
              </label>
              <Input
                type="number"
                min="0"
                step="1"
                sufijo="g / ml"
                value={insumos.gramos_frasco_esencia || ''}
                onChange={(e) => alCambiarInsumo('gramos_frasco_esencia', parseFloat(e.target.value) || 0)}
                placeholder="0"
              />
            </div>
          </div>

          {/* Selector y Slider de carga de fragancia */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-artesanal-carbon">
                  Carga de fragancia:
                </span>
                <span className="rounded-xl bg-artesanal-verde-100 px-2.5 py-0.5 text-artesanal-verde-900 dark:bg-artesanal-verde-950 dark:text-artesanal-verde-200 font-mono text-sm font-bold">
                  {insumos.porcentaje_esencia}%
                </span>
              </div>
              <span className="text-xs text-artesanal-piedra">
                {resultado.gramos_esencia_por_vela}g de esencia por vela
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              <div className="sm:col-span-8">
                <Slider
                  min={0}
                  max={15}
                  step={0.5}
                  value={[insumos.porcentaje_esencia]}
                  onValueChange={([val]) => alCambiarInsumo('porcentaje_esencia', val)}
                />
              </div>
              <div className="sm:col-span-4">
                <ControlPaso
                  valor={insumos.porcentaje_esencia}
                  alCambiar={(nuevoPorcentaje) => alCambiarInsumo('porcentaje_esencia', nuevoPorcentaje)}
                  min={0}
                  max={15}
                  paso={0.5}
                  sufijo="%"
                />
              </div>
            </div>

            <div className="flex justify-between text-[10px] text-artesanal-piedra font-medium">
              <span>4% (Sutil)</span>
              <span>8% (Equilibrado recomendado)</span>
              <span>12% (Intenso máx.)</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-xs text-artesanal-piedra border-t border-artesanal-borde/60">
            <span>Costo de esencia por vela:</span>
            <span className="font-semibold text-artesanal-carbon">
              {formatearMoneda(resultado.costo_esencia_unitario, monedaSimbolo, monedaLocale)}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* 3. SECCIÓN DE ENVASE Y PABILO */}
      <Card id="tutorial-envase" className="border-artesanal-borde bg-artesanal-tarjeta backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-artesanal-verde-100 text-artesanal-verde-800 dark:bg-artesanal-verde-950/70 dark:text-artesanal-verde-300">
              <Package className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-lg">Envase y Pabilo (Mecha)</CardTitle>
              <p className="text-xs text-artesanal-piedra">Contenedor, mecha con ojalillo y fijación</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-artesanal-piedra mb-1.5">
                Costo del vaso / frasco / lata
              </label>
              <Input
                type="number"
                min="0"
                step="0.5"
                prefijo={monedaSimbolo}
                value={insumos.costo_contenedor_unitario || ''}
                onChange={(e) => alCambiarInsumo('costo_contenedor_unitario', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-artesanal-piedra mb-1.5">
                Costo de mecha y ojalillo
              </label>
              <Input
                type="number"
                min="0"
                step="0.1"
                prefijo={monedaSimbolo}
                value={insumos.costo_pabilo_unitario || ''}
                onChange={(e) => alCambiarInsumo('costo_pabilo_unitario', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-xs text-artesanal-piedra border-t border-artesanal-borde/60">
            <span>Subtotal de insumos directos (cera + esencia + envase + mecha):</span>
            <span className="font-bold text-artesanal-carbon text-sm">
              {formatearMoneda(resultado.subtotal_costo_directo, monedaSimbolo, monedaLocale)}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
