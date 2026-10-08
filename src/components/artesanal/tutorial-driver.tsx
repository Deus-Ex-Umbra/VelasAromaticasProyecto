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
    // Asegurar que el acordeón de costos indirectos esté abierto
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('abrir-acordeon-indirectos'));
    }

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
            title: '2. Cera Soja Marfil y Cera Nocturna',
            description:
              'Botón interactivo con física de resortes (Skiper4) para alternar entre el tono marfil de cera de soja y la calidez tenue nocturna.',
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
          element: '#tutorial-envase',
          popover: {
            title: '6. Envase y Pabilo (Mecha)',
            description:
              'Ingresa el costo del frasco, vaso o lata y de la mecha con su ojalillo. Son costos directos indispensables en cada vela terminada.',
            side: 'right',
            align: 'start',
          },
        },
        {
          element: '#tutorial-indirectos',
          popover: {
            title: '7. Costos Ocultos e Indirectos',
            description:
              'Empaque (cajas, viruta), etiquetas de seguridad, energía de fundición y mano de obra artesanal. Esenciales para no trabajar a pérdida.',
            side: 'top',
            align: 'start',
          },
        },
        {
          element: '#tutorial-merma',
          popover: {
            title: '8. Merma Técnica (% Opcional - Acepta 0%)',
            description:
              '<strong>¿Por qué la merma es pérdida?</strong> Al fundir cera y medir aromas, siempre queda un residuo pegado en las jarras, espátulas y pipetas (del 2% al 5%). Si compras 1 kg de cera, en la realidad no obtienes 1.000 g netos de velas.<br><br><strong>¿Cómo tomarla?</strong> Como un pequeño seguro (2% a 3%) para que esa cera residual no salga de tu ganancia. Si reutilizas tus restos o no la manejas, <strong>déjala en 0%</strong>.',
            side: 'top',
            align: 'start',
          },
        },
        {
          element: '#tutorial-comision',
          popover: {
            title: '9. Comisión QR / Pasarela (% Opcional - Acepta 0%)',
            description:
              '<strong>¿Por qué acepta 0%?</strong> Si cobras en efectivo o por transferencia bancaria directa sin recargo, se queda en <strong>0%</strong>.<br><br><strong>¿Cuándo usarla?</strong> Si cobras mediante tarjeta, terminal POS o pasarelas digitales que descuentan comisión (ej. 2% al 5%), este campo protege tu precio para que el banco descuente su parte sin tocar tu ganancia real.',
            side: 'top',
            align: 'start',
          },
        },
        {
          element: '#tutorial-margen',
          popover: {
            title: '10. Margen de Beneficio Real sobre Venta',
            description:
              'Elige tramos estratégicos (Supervivencia 35%, Mayorista 50%, Retail 65%, Boutique 80%). Calculamos sobre el precio final, garantizando que nunca pierdas dinero.',
            side: 'top',
            align: 'start',
          },
        },
        {
          element: '#tutorial-resultados',
          popover: {
            title: '11. Panel de Resultados y Cotización',
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
        'inline-flex items-center gap-2 rounded-2xl border border-artesanal-ambar-300/80 bg-artesanal-ambar-50 px-3.5 py-2 text-xs font-semibold text-artesanal-ambar-900 shadow-xs transition-all hover:bg-artesanal-ambar-100 hover:border-artesanal-ambar-500 active:scale-95 dark:bg-artesanal-ambar-950/60 dark:border-artesanal-ambar-800 dark:text-artesanal-ambar-200 dark:hover:bg-artesanal-ambar-900/60',
        className
      )}
      title="Iniciar recorrido guiado de la calculadora"
    >
      <HelpCircle className="h-4 w-4 text-artesanal-ambar-700 dark:text-artesanal-ambar-300" />
      <span>Tutorial Guiado</span>
    </button>
  );
}
