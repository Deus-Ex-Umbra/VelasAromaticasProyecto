'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface TarjetaSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  colorLuz?: string;
  tamanoRadio?: number;
  className?: string;
  children: React.ReactNode;
}

export function TarjetaSpotlight({
  colorLuz = 'rgba(245, 158, 11, 0.16)', // Ámbar cálido simulando llama de vela
  tamanoRadio = 380,
  className,
  children,
  ...props
}: TarjetaSpotlightProps) {
  const contenedorRef = React.useRef<HTMLDivElement>(null);
  const [posicionRaton, setPosicionRaton] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [estaDentro, setEstaDentro] = React.useState<boolean>(false);

  const manejarMovimientoRaton = (evento: React.MouseEvent<HTMLDivElement>) => {
    if (!contenedorRef.current) return;
    const rectangulo = contenedorRef.current.getBoundingClientRect();
    setPosicionRaton({
      x: evento.clientX - rectangulo.left,
      y: evento.clientY - rectangulo.top,
    });
  };

  return (
    <div
      ref={contenedorRef}
      onMouseMove={manejarMovimientoRaton}
      onMouseEnter={() => setEstaDentro(true)}
      onMouseLeave={() => setEstaDentro(false)}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-artesanal-borde bg-artesanal-tarjeta p-7 text-artesanal-carbon shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300',
        className
      )}
      {...props}
    >
      {/* Capa de luz de reflector interactivo (Cult UI Spotlight) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: estaDentro
            ? `radial-gradient(${tamanoRadio}px circle at ${posicionRaton.x}px ${posicionRaton.y}px, ${colorLuz}, transparent 80%)`
            : undefined,
        }}
      />
      {/* Luz tenue permanente de fondo tipo aura de vela */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-artesanal-ambar-200/20 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
