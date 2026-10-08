'use client';

import confetti from 'canvas-confetti';

/**
 * Dispara una ráfaga elegante de micro-chispas doradas y esmeraldas (Watermelon UI Juicy Feedback).
 */
export function dispararRafagaCelebracion() {
  const conteo = 45;
  const opcionesBase = {
    origin: { y: 0.7 },
    disableForReducedMotion: true,
    colors: ['#F59E0B', '#D97706', '#FDE68A', '#059669', '#10B981'],
    shapes: ['circle' as const, 'square' as const],
    scalar: 0.85,
    ticks: 120,
    gravity: 0.9,
    drift: 0,
  };

  // Disparo centralizado sutil y artesanal
  confetti({
    ...opcionesBase,
    particleCount: Math.floor(conteo * 0.6),
    spread: 60,
    startVelocity: 30,
  });

  setTimeout(() => {
    confetti({
      ...opcionesBase,
      particleCount: Math.floor(conteo * 0.4),
      spread: 90,
      startVelocity: 22,
    });
  }, 100);
}
