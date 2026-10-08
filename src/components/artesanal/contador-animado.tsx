'use client';

import * as React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface ContadorAnimadoProps {
  valor: number;
  moneda?: string;
  decimales?: number;
  className?: string;
}

export function ContadorAnimado({
  valor,
  moneda = '$',
  decimales = 2,
  className = '',
}: ContadorAnimadoProps) {
  // Resorte elástico estilo Watermelon UI
  const resorte = useSpring(valor, {
    stiffness: 140,
    damping: 24,
    mass: 0.8,
  });

  React.useEffect(() => {
    resorte.set(valor);
  }, [valor, resorte]);

  const textoAnimado = useTransform(resorte, (actual) => {
    return new Intl.NumberFormat('es-MX', {
      minimumFractionDigits: decimales,
      maximumFractionDigits: decimales,
    }).format(actual || 0);
  });

  return (
    <span className={`inline-flex items-baseline font-mono tracking-tight ${className}`}>
      {moneda && <span className="mr-1 text-[0.8em] font-sans opacity-80">{moneda}</span>}
      <motion.span>{textoAnimado}</motion.span>
    </span>
  );
}
