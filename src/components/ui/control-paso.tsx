'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ControlPasoProps {
  valor: number;
  alCambiar: (nuevoValor: number) => void;
  min?: number;
  max?: number;
  paso?: number;
  sufijo?: string;
  className?: string;
  etiqueta?: string;
}

export function ControlPaso({
  valor,
  alCambiar,
  min = 0,
  max = 1000,
  paso = 1,
  sufijo = '',
  className,
  etiqueta,
}: ControlPasoProps) {
  const decrementar = () => {
    const siguiente = Math.max(min, Number((valor - paso).toFixed(2)));
    alCambiar(siguiente);
  };

  const incrementar = () => {
    const siguiente = Math.min(max, Number((valor + paso).toFixed(2)));
    alCambiar(siguiente);
  };

  const manejarCambioDirecto = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const parseado = parseFloat(evento.target.value);
    if (!isNaN(parseado)) {
      alCambiar(parseado);
    } else if (evento.target.value === '') {
      alCambiar(0);
    }
  };

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {etiqueta && (
        <span className="text-xs font-semibold uppercase tracking-wider text-artesanal-piedra">
          {etiqueta}
        </span>
      )}
      <div className="flex items-center rounded-2xl border border-artesanal-borde bg-artesanal-tarjeta p-1 shadow-xs transition-all focus-within:ring-2 focus-within:ring-artesanal-ambar-500/40 focus-within:border-artesanal-ambar-500">
        <motion.button
          type="button"
          onClick={decrementar}
          disabled={valor <= min}
          whileTap={{ scale: 0.88 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-artesanal-ambar-50 text-artesanal-ambar-900 transition-colors hover:bg-artesanal-ambar-100 disabled:opacity-30 disabled:pointer-events-none dark:bg-artesanal-ambar-950/60 dark:text-artesanal-ambar-200"
          aria-label="Disminuir cantidad"
        >
          <Minus className="h-4 w-4" />
        </motion.button>

        <div className="relative flex flex-1 items-center justify-center px-2">
          <input
            type="number"
            value={valor === 0 ? '' : valor}
            onChange={manejarCambioDirecto}
            min={min}
            max={max}
            step={paso}
            placeholder="0"
            className="w-full bg-transparent font-mono text-center text-sm font-bold text-artesanal-carbon focus:outline-none placeholder:text-artesanal-piedra/40"
          />
          {sufijo && (
            <span className="text-xs font-medium text-artesanal-piedra select-none pointer-events-none ml-1">
              {sufijo}
            </span>
          )}
        </div>

        <motion.button
          type="button"
          onClick={incrementar}
          disabled={valor >= max}
          whileTap={{ scale: 0.88 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-artesanal-ambar-50 text-artesanal-ambar-900 transition-colors hover:bg-artesanal-ambar-100 disabled:opacity-30 disabled:pointer-events-none dark:bg-artesanal-ambar-950/60 dark:text-artesanal-ambar-200"
          aria-label="Aumentar cantidad"
        >
          <Plus className="h-4 w-4" />
        </motion.button>
      </div>
    </div>
  );
}
