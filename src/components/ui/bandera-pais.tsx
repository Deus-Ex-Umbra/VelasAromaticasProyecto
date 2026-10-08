import * as React from 'react';
import { cn } from '@/lib/utils';

export type CodigoPaisLatam = 'BO' | 'MX' | 'CO' | 'PE' | 'CL' | 'AR' | 'USD';

interface BanderaPaisProps {
  codigo: CodigoPaisLatam | string;
  className?: string;
  ancho?: number;
  alto?: number;
}

export function BanderaPais({
  codigo,
  className,
  ancho = 20,
  alto = 15,
}: BanderaPaisProps) {
  const normalizado = codigo.toUpperCase();

  const contenedorClases = cn(
    'inline-flex shrink-0 overflow-hidden rounded-[3px] border border-black/10 shadow-xs align-middle',
    className
  );

  switch (normalizado) {
    case 'BO': // Bolivia: Rojo, Amarillo, Verde horizontal
    case 'BOB':
      return (
        <span className={contenedorClases} style={{ width: ancho, height: alto }}>
          <svg viewBox="0 0 30 20" className="h-full w-full">
            <rect width="30" height="6.67" fill="#DA291C" />
            <rect y="6.67" width="30" height="6.67" fill="#F4E400" />
            <rect y="13.34" width="30" height="6.67" fill="#007A33" />
          </svg>
        </span>
      );

    case 'MX': // México: Verde, Blanco (con águila), Rojo vertical
    case 'MXN':
      return (
        <span className={contenedorClases} style={{ width: ancho, height: alto }}>
          <svg viewBox="0 0 30 20" className="h-full w-full">
            <rect width="10" height="20" fill="#006847" />
            <rect x="10" width="10" height="20" fill="#FFFFFF" />
            <rect x="20" width="10" height="20" fill="#CE1126" />
            {/* Escudo estilizado central */}
            <circle cx="15" cy="10" r="2.2" fill="#8B572A" />
            <circle cx="15" cy="10" r="1.5" fill="#006847" />
          </svg>
        </span>
      );

    case 'CO': // Colombia: Amarillo (50%), Azul (25%), Rojo (25%)
    case 'COP':
      return (
        <span className={contenedorClases} style={{ width: ancho, height: alto }}>
          <svg viewBox="0 0 30 20" className="h-full w-full">
            <rect width="30" height="10" fill="#FCD116" />
            <rect y="10" width="30" height="5" fill="#003893" />
            <rect y="15" width="30" height="5" fill="#CE1126" />
          </svg>
        </span>
      );

    case 'PE': // Perú: Rojo, Blanco, Rojo vertical
    case 'PEN':
      return (
        <span className={contenedorClases} style={{ width: ancho, height: alto }}>
          <svg viewBox="0 0 30 20" className="h-full w-full">
            <rect width="10" height="20" fill="#D91023" />
            <rect x="10" width="10" height="20" fill="#FFFFFF" />
            <rect x="20" width="10" height="20" fill="#D91023" />
          </svg>
        </span>
      );

    case 'CL': // Chile: Blanco con cantón azul y estrella blanca / Rojo inferior
    case 'CLP':
      return (
        <span className={contenedorClases} style={{ width: ancho, height: alto }}>
          <svg viewBox="0 0 30 20" className="h-full w-full">
            <rect width="30" height="10" fill="#FFFFFF" />
            <rect y="10" width="30" height="10" fill="#D52B1E" />
            <rect width="10" height="10" fill="#0039A6" />
            {/* Estrella blanca solitaria */}
            <polygon
              points="5,2.5 5.8,4.8 8.2,4.8 6.3,6.2 7,8.5 5,7.1 3,8.5 3.7,6.2 1.8,4.8 4.2,4.8"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case 'AR': // Argentina: Celeste, Blanco con Sol de Mayo, Celeste
    case 'ARS':
      return (
        <span className={contenedorClases} style={{ width: ancho, height: alto }}>
          <svg viewBox="0 0 30 20" className="h-full w-full">
            <rect width="30" height="6.67" fill="#74ACDF" />
            <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
            <rect y="13.34" width="30" height="6.67" fill="#74ACDF" />
            {/* Sol de Mayo dorado */}
            <circle cx="15" cy="10" r="2.2" fill="#F6B40E" />
            <circle cx="15" cy="10" r="1.3" fill="#85340A" opacity="0.3" />
          </svg>
        </span>
      );

    default: // USD / Internacional (Globo / Estados Unidos)
      return (
        <span className={contenedorClases} style={{ width: ancho, height: alto }}>
          <svg viewBox="0 0 30 20" className="h-full w-full">
            <rect width="30" height="20" fill="#BF0A30" />
            <line x1="0" y1="2.3" x2="30" y2="2.3" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="0" y1="5.4" x2="30" y2="5.4" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="0" y1="8.5" x2="30" y2="8.5" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="0" y1="11.5" x2="30" y2="11.5" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="0" y1="14.6" x2="30" y2="14.6" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="0" y1="17.7" x2="30" y2="17.7" stroke="#FFFFFF" strokeWidth="1.5" />
            <rect width="12" height="10" fill="#002868" />
            <circle cx="3.5" cy="3" r="0.8" fill="#FFFFFF" />
            <circle cx="8.5" cy="3" r="0.8" fill="#FFFFFF" />
            <circle cx="6" cy="5.5" r="0.8" fill="#FFFFFF" />
            <circle cx="3.5" cy="8" r="0.8" fill="#FFFFFF" />
            <circle cx="8.5" cy="8" r="0.8" fill="#FFFFFF" />
          </svg>
        </span>
      );
  }
}
