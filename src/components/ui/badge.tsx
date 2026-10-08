import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variante?: 'default' | 'secundario' | 'salvia' | 'ambar' | 'peligro';
}

export function Badge({
  className,
  variante = 'default',
  ...props
}: BadgeProps) {
  const estilosVariante = {
    default: 'bg-artesanal-carbon text-white hover:bg-artesanal-carbon/90',
    secundario: 'bg-artesanal-borde/70 text-artesanal-carbon hover:bg-artesanal-borde',
    salvia: 'bg-artesanal-ambar-100 text-artesanal-ambar-800 border border-amber-300',
    ambar: 'bg-artesanal-ambar-100 text-artesanal-ambar-800 border border-amber-300',
    peligro: 'bg-red-50 text-red-700 border border-red-200',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors',
        estilosVariante[variante],
        className
      )}
      {...props}
    />
  );
}
