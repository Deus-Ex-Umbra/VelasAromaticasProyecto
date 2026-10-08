'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConmutadorTemaSkiper4Props {
  className?: string;
}

export function ConmutadorTemaSkiper4({ className }: ConmutadorTemaSkiper4Props) {
  const [esOscuro, setEsOscuro] = React.useState<boolean>(false);
  const [montado, setMontado] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMontado(true);
    // Leer tema inicial
    const temaGuardado = localStorage.getItem('tema_calculadora_velas');
    const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (temaGuardado === 'dark' || (!temaGuardado && prefiereOscuro)) {
      setEsOscuro(true);
      document.documentElement.classList.add('dark');
    } else {
      setEsOscuro(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const alternarTema = () => {
    const nuevoEstado = !esOscuro;
    setEsOscuro(nuevoEstado);

    if (nuevoEstado) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('tema_calculadora_velas', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('tema_calculadora_velas', 'light');
    }
  };

  if (!montado) {
    return <div className="h-9 w-9 rounded-2xl border border-artesanal-borde bg-artesanal-tarjeta opacity-0" />;
  }

  return (
    <motion.button
      id="tutorial-tema"
      type="button"
      onClick={alternarTema}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'group relative flex h-9 w-9 items-center justify-center rounded-2xl border border-artesanal-borde bg-artesanal-tarjeta text-artesanal-carbon shadow-xs transition-colors duration-200 hover:border-artesanal-ambar-400 hover:text-artesanal-ambar-700 dark:hover:text-artesanal-ambar-300 focus:outline-none',
        className
      )}
      aria-label={esOscuro ? 'Cambiar a modo cera clara' : 'Cambiar a modo cera nocturna'}
      title={esOscuro ? 'Modo Cera Nocturna activo (clic para cera clara)' : 'Modo Cera Soja Marfil activo (clic para cera nocturna)'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {esOscuro ? (
          <motion.div
            key="luna"
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="flex items-center justify-center text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.3)]"
          >
            <Moon className="h-4 w-4" />
          </motion.div>
        ) : (
          <motion.div
            key="sol"
            initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="flex items-center justify-center text-artesanal-ambar-600 drop-shadow-[0_0_6px_rgba(217,119,6,0.2)]"
          >
            <Sun className="h-4 w-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
