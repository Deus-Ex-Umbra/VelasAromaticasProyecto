'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InsigniaMargenVivaProps {
  margen: number;
  className?: string;
}

export function InsigniaMargenViva({ margen, className }: InsigniaMargenVivaProps) {
  let configuracion = {
    texto: 'Saludable / Mayorista',
    icono: ShieldCheck,
    fondo: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    colorPunto: 'bg-emerald-500',
    onda: 'bg-emerald-400',
  };

  if (margen < 35) {
    configuracion = {
      texto: 'Riesgo de Pérdida (<35%)',
      icono: ShieldAlert,
      fondo: 'bg-red-50 text-red-700 border-red-300',
      colorPunto: 'bg-red-500',
      onda: 'bg-red-400',
    };
  } else if (margen < 50) {
    configuracion = {
      texto: 'Mínimo Viable (35-49%)',
      icono: TrendingUp,
      fondo: 'bg-amber-50 text-amber-800 border-amber-300',
      colorPunto: 'bg-amber-500',
      onda: 'bg-amber-400',
    };
  } else if (margen >= 70) {
    configuracion = {
      texto: 'Margen Premium (≥70%)',
      icono: Sparkles,
      fondo: 'bg-yellow-50 text-yellow-900 border-yellow-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]',
      colorPunto: 'bg-amber-500',
      onda: 'bg-amber-400',
    };
  }

  const Icono = configuracion.icono;

  return (
    <motion.div
      key={configuracion.texto}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold shadow-sm transition-all',
        configuracion.fondo,
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
            configuracion.onda
          )}
        />
        <span
          className={cn(
            'relative inline-flex h-2 w-2 rounded-full',
            configuracion.colorPunto
          )}
        />
      </span>
      <Icono className="h-3.5 w-3.5 shrink-0" />
      <span>{configuracion.texto}</span>
    </motion.div>
  );
}
