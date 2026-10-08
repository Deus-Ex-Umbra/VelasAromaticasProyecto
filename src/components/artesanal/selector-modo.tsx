'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Flame, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ModoCalculo = 'vela' | 'lote';

interface SelectorModoProps {
  modo: ModoCalculo;
  alCambiarModo: (nuevoModo: ModoCalculo) => void;
  cantidadLote: number;
}

export function SelectorModo({
  modo,
  alCambiarModo,
  cantidadLote,
}: SelectorModoProps) {
  const opciones = [
    {
      id: 'vela' as ModoCalculo,
      etiqueta: 'Por Vela Individual',
      icono: Flame,
    },
    {
      id: 'lote' as ModoCalculo,
      etiqueta: `Por Lote (${cantidadLote} velas)`,
      icono: Layers,
    },
  ];

  return (
    <div id="tutorial-modo" className="flex rounded-2xl bg-artesanal-borde/50 p-1.5 shadow-inner">
      {opciones.map((opcion) => {
        const estaActivo = modo === opcion.id;
        const Icono = opcion.icono;

        return (
          <button
            key={opcion.id}
            onClick={() => alCambiarModo(opcion.id)}
            className={cn(
              'relative flex flex-1 items-center justify-center gap-2 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-colors duration-200 focus-visible:outline-none',
              estaActivo
                ? 'text-artesanal-carbon'
                : 'text-artesanal-piedra hover:text-artesanal-carbon'
            )}
          >
            {estaActivo && (
              <motion.div
                layoutId="pastilla_modo_activo"
                className="absolute inset-0 rounded-xl bg-artesanal-tarjeta shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-artesanal-borde"
                transition={{
                  type: 'spring',
                  stiffness: 450,
                  damping: 32,
                }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <Icono className={cn('h-4 w-4', estaActivo ? 'text-artesanal-ambar-600' : 'text-artesanal-piedra')} />
              {opcion.etiqueta}
            </span>
          </button>
        );
      })}
    </div>
  );
}
