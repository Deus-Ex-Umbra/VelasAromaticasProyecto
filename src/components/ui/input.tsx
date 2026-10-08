import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefijo?: string;
  sufijo?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefijo, sufijo, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {prefijo && (
          <span className="absolute left-3.5 text-sm font-medium text-artesanal-piedra select-none pointer-events-none">
            {prefijo}
          </span>
        )}
        <input
          type={type}
          className={cn(
            'flex h-11 w-full rounded-2xl border border-artesanal-borde bg-artesanal-tarjeta px-3.5 py-2 text-sm text-artesanal-carbon shadow-sm transition-all duration-200 placeholder:text-artesanal-piedra/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-artesanal-ambar-500 focus-visible:border-artesanal-ambar-500/40 disabled:cursor-not-allowed disabled:opacity-50',
            prefijo && 'pl-8',
            sufijo && 'pr-12',
            className
          )}
          ref={ref}
          {...props}
        />
        {sufijo && (
          <span className="absolute right-3.5 text-xs font-semibold text-artesanal-piedra/80 uppercase select-none pointer-events-none">
            {sufijo}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
