'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Sparkles } from 'lucide-react';
import { ContadorAnimado } from './contador-animado';

interface BarraFlotanteResumenProps {
  precioVenta: number;
  gananciaNeta: number;
  margen: number;
  esLote: boolean;
  cantidadLote: number;
  monedaSimbolo?: string;
  onCopiar: () => void;
}

export function BarraFlotanteResumen({
  precioVenta,
  gananciaNeta,
  margen,
  esLote,
  cantidadLote,
  monedaSimbolo = 'Bs',
  onCopiar,
}: BarraFlotanteResumenProps) {
  const [copiado, setCopiado] = React.useState(false);

  const manejarCopiar = () => {
    onCopiar();
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none md:hidden">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="pointer-events-auto flex items-center justify-between gap-4 w-full max-w-md rounded-full border border-artesanal-borde/80 bg-artesanal-tarjeta/95 px-5 py-3 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.25)] backdrop-blur-xl"
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-artesanal-piedra">
            {esLote ? `Precio Lote (${cantidadLote}u)` : 'Precio Sugerido'}
          </span>
          <div className="text-lg font-bold text-artesanal-carbon">
            <ContadorAnimado valor={precioVenta} moneda={monedaSimbolo} />
          </div>
        </div>

        <div className="h-7 w-[1px] bg-artesanal-borde" />

        <div className="flex flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-artesanal-verde-700 dark:text-artesanal-verde-300">
            Ganancia ({margen}%)
          </span>
          <div className="text-base font-bold text-artesanal-salvia">
            <ContadorAnimado valor={gananciaNeta} moneda={monedaSimbolo} />
          </div>
        </div>

        <button
          onClick={manejarCopiar}
          className="group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-artesanal-carbon text-white shadow-md transition-all active:scale-90 hover:bg-artesanal-ambar-600"
          title="Copiar cotización"
        >
          <AnimatePresence mode="wait">
            {copiado ? (
              <motion.div
                key="copiado"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Sparkles className="h-4 w-4 text-amber-300" />
              </motion.div>
            ) : (
              <motion.div
                key="compartir"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Share2 className="h-4 w-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>
    </div>
  );
}
