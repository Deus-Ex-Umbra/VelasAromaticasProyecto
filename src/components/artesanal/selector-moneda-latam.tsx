'use client';

import * as React from 'react';
import { MonedaLatam, MONEDAS_LATAM } from '@/tipos/moneda';
import { BanderaPais } from '@/components/ui/bandera-pais';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SelectorMonedaLatamProps {
  monedaActual: MonedaLatam;
  alCambiarMoneda: (moneda: MonedaLatam) => void;
  className?: string;
}

export function SelectorMonedaLatam({
  monedaActual,
  alCambiarMoneda,
  className,
}: SelectorMonedaLatamProps) {
  const [abierto, setAbierto] = React.useState(false);
  const referencia = React.useRef<HTMLDivElement>(null);

  // Cerrar al hacer clic fuera
  React.useEffect(() => {
    function manejarClicFuera(evento: MouseEvent) {
      if (referencia.current && !referencia.current.contains(evento.target as Node)) {
        setAbierto(false);
      }
    }
    document.addEventListener('mousedown', manejarClicFuera);
    return () => document.removeEventListener('mousedown', manejarClicFuera);
  }, []);

  return (
    <div id="tutorial-moneda" ref={referencia} className={cn('relative inline-block text-left', className)}>
      <button
        type="button"
        onClick={() => setAbierto(!abierto)}
        className="flex items-center gap-2 rounded-2xl border border-artesanal-borde bg-artesanal-tarjeta px-3 py-1.5 text-xs font-semibold text-artesanal-carbon shadow-xs transition-all hover:bg-artesanal-ambar-50 dark:hover:bg-artesanal-ambar-950/40 active:scale-95"
        title="Cambiar moneda de LATAM"
      >
        <BanderaPais codigo={monedaActual.codigoPais} ancho={20} alto={14} />
        <span className="font-mono font-bold text-artesanal-ambar-700 dark:text-artesanal-ambar-300">
          {monedaActual.simbolo}
        </span>
        <span className="hidden sm:inline text-artesanal-piedra">({monedaActual.codigo})</span>
        <ChevronDown className="h-3.5 w-3.5 text-artesanal-piedra opacity-70" />
      </button>

      {abierto && (
        <div className="absolute right-0 mt-2 w-60 rounded-3xl border border-artesanal-borde bg-artesanal-tarjeta p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.18)] z-50 backdrop-blur-xl">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-artesanal-piedra border-b border-artesanal-borde">
            Monedas de Latinoamérica
          </div>
          <div className="py-1 space-y-0.5 max-h-64 overflow-y-auto">
            {MONEDAS_LATAM.map((item) => {
              const estaSeleccionada = item.codigo === monedaActual.codigo;

              return (
                <button
                  key={item.codigo}
                  type="button"
                  onClick={() => {
                    alCambiarMoneda(item);
                    setAbierto(false);
                  }}
                  className={cn(
                    'flex w-full items-center justify-between px-3 py-2 text-xs rounded-xl font-medium transition-colors text-left',
                    estaSeleccionada
                      ? 'bg-artesanal-ambar-100 text-artesanal-ambar-900 font-bold dark:bg-artesanal-ambar-950/80 dark:text-artesanal-ambar-200'
                      : 'text-artesanal-carbon hover:bg-artesanal-ambar-50 dark:hover:bg-artesanal-ambar-950/40'
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <BanderaPais codigo={item.codigoPais} ancho={20} alto={14} />
                    <span>{item.pais}</span>
                  </span>
                  <span className="font-mono font-bold text-artesanal-ambar-700 dark:text-artesanal-ambar-300 opacity-90">
                    {item.simbolo}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
