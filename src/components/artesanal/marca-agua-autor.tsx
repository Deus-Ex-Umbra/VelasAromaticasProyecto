'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MarcaAguaAutorProps {
  className?: string;
  flotante?: boolean;
}

export function MarcaAguaAutor({
  className,
  flotante = true,
}: MarcaAguaAutorProps) {
  const contenido = (
    <motion.a
      href="https://github.com/Deus-Ex-Umbra"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'group flex items-center gap-2.5 rounded-full border border-artesanal-borde/80 bg-artesanal-tarjeta/90 px-3 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors hover:border-artesanal-verde-500 hover:shadow-[0_6px_20px_rgba(5,150,105,0.18)] focus:outline-none',
        flotante && 'fixed bottom-5 right-5 z-40',
        className
      )}
    >
      <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-emerald-950 p-0.5 border border-artesanal-borde/70 shadow-xs">
        <Image
          src="/deus_ex_umbra.svg"
          alt="Deus Ex Umbra Logo"
          width={22}
          height={22}
          className="h-full w-full object-contain dark:invert"
        />
      </div>

      <div className="flex items-center gap-1">
        <span className="font-serif text-[11px] font-bold text-artesanal-carbon group-hover:text-artesanal-verde-700 dark:group-hover:text-artesanal-verde-300 transition-colors">
          Deus Ex Umbra
        </span>
        <ExternalLink className="h-3 w-3 text-artesanal-piedra opacity-60 group-hover:opacity-100 group-hover:text-artesanal-verde-600 transition-all" />
      </div>
    </motion.a>
  );

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          {contenido}
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="flex items-center gap-2 bg-artesanal-tarjeta text-artesanal-carbon border-artesanal-borde shadow-xl px-3.5 py-2 rounded-2xl"
        >
          <span className="text-xs font-medium">
            Hecho por <strong className="font-bold text-artesanal-verde-700 dark:text-artesanal-verde-300">Deus Ex Umbra</strong>
          </span>
          <span className="text-[10px] text-artesanal-piedra bg-artesanal-verde-50 dark:bg-artesanal-verde-950/80 px-2 py-0.5 rounded-full border border-artesanal-verde-200/60 dark:border-artesanal-verde-800">
            github.com/Deus-Ex-Umbra
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
