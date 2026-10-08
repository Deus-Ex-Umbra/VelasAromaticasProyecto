'use client';

import * as React from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import { HelpCircle, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TutorialDriverProps {
  className?: string;
}

export function TutorialDriver({ className }: TutorialDriverProps) {
  const iniciarTutorial = React.useCallback(() => {
    const guia = driver({
      showProgress: true,
      animate: true,
      smoothScroll: true,
      allowClose: true,
      nextBtnText: 'Siguiente →',
      prevBtnText: '← Anterior',
      doneBtnText: '¡Listo, a calcular!',
      progressText: 'Paso {{current}} de {{total}}',
      steps: [
        {
          element: '#tutorial-moneda',
          popover: {
            title: '1. Moneda y País',
            description:
              'Detectamos tu ubicación en LATAM con banderas oficiales. Por defecto inicia en Bolivia (Bs), pero puedes alternar a tu país cuando quieras.',
            side: 'bottom',
            align: 'end',
          },
        },
        {
          element: '#tutorial-tema',
          popover: {
            title: '2. Modo Claro y Bosque Nocturno',
            description:
              'Botón interactivo con física de resortes (Skiper4) para trabajar con comodidad en cualquier iluminación de tu taller.',
            side: 'bottom',
            align: 'end',
          },
        },
        {
          element: '#tutorial-modo',
          popover: {
            title: '3. Modo Vela o Modo Lote',
            description:
              'Alterna entre el costeo de una vela individual o un lote completo con control de piezas mediante botones + y -.',
            side: 'bottom',
            align: 'center',
          },
        },
        {
          element: '#tutorial-cera',
          popover: {
            title: '4. Cera Base y Conversor ml',
            description:
              'Ingresa el precio por kilo y los gramos. ¿No sabes cuántos gramos son? Pulsa "¿Solo sabes los ml del vaso?" para aplicar la densidad de cera (×0.86).',
            side: 'right',
            align: 'start',
          },
        },
        {
          element: '#tutorial-esencia',
          popover: {
            title: '5. Carga de Esencia Aromática',
            description:
              'Ajusta el porcentaje de fragancia (4% a 12%) con el deslizador o botones + / -. El motor calculará exactamente los gramos y costo necesario.',
            side: 'right',
            align: 'start',
          },
        },
        {
          element: '#tutorial-indirectos',
          popover: {
            title: '6. Costos Ocultos e Indirectos (Cero Pérdidas)',
            description:
              'Despliega este bloque para incluir cajas, bolsas kraft, etiquetas, energía, mano de obra artesanal y cobro por QR/pasarela.',
            side: 'top',
            align: 'start',
          },
        },
        {
          element: '#tutorial-margen',
          popover: {
            title: '7. Margen de Beneficio Real sobre Venta',
            description:
              'Elige tramos estratégicos (Supervivencia 35%, Mayorista 50%, Retail 65%, Boutique 80%). Calculamos sobre el precio final, garantizando que nunca pierdas dinero.',
            side: 'top',
            align: 'start',
          },
        },
        {
          element: '#tutorial-resultados',
          popover: {
            title: '8. Panel de Resultados y Cotización',
            description:
              'Tarjeta viva con luz ámbar interactiva, contador amortiguado a 60 FPS, desglose visual y un botón para copiar la cotización limpia directo a WhatsApp.',
            side: 'left',
            align: 'start',
          },
        },
      ],
    });

    guia.drive();
  }, []);

  return (
    <button
      type="button"
      onClick={iniciarTutorial}
      className={cn(
        'inline-flex items-center gap-2 rounded-2xl border border-artesanal-verde-300/80 bg-artesanal-verde-50 px-3.5 py-2 text-xs font-semibold text-artesanal-verde-900 shadow-xs transition-all hover:bg-artesanal-verde-100 hover:border-artesanal-verde-500 active:scale-95 dark:bg-artesanal-verde-950/60 dark:border-artesanal-verde-800 dark:text-artesanal-verde-200 dark:hover:bg-artesanal-verde-900/60',
        className
      )}
      title="Iniciar recorrido guiado de la calculadora"
    >
      <HelpCircle className="h-4 w-4 text-artesanal-verde-700 dark:text-artesanal-verde-300" />
      <span>Tutorial Guiado</span>
    </button>
  );
}
