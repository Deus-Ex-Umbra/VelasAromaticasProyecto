'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface BordeLuminosoProps {
  className?: string;
  tamano?: number;
  duracion?: number;
  anchoBorde?: number;
  colorDesde?: string;
  colorHasta?: string;
}

export function BordeLuminoso({
  className,
  tamano = 160,
  duracion = 12,
  anchoBorde = 2,
  colorDesde = '#F59E0B',
  colorHasta = '#FDE68A',
}: BordeLuminosoProps) {
  return (
    <div
      style={
        {
          '--tamano': `${tamano}px`,
          '--duracion': `${duracion}s`,
          '--ancho-borde': `${anchoBorde}px`,
          '--color-desde': colorDesde,
          '--color-hasta': colorHasta,
        } as React.CSSProperties
      }
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--ancho-borde)*1px)_solid_transparent]',
        // Máscara perimetral
        '![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]',
        // Efecto pseudo con gradiente móvil
        'after:absolute after:aspect-square after:w-[calc(var(--tamano))] after:animate-[girar_var(--duracion)_linear_infinite] after:[background:linear-gradient(to_left,var(--color-desde),var(--color-hasta),transparent)] after:[offset-anchor:calc(var(--tamano)/2)_calc(var(--tamano)/2)] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--tamano)))]',
        className
      )}
    />
  );
}
