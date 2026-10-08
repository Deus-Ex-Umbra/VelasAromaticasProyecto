---
name: watermelon-ui
description: Micro-delicias interactivas, estados de éxito jugosos (juicy UI), ráfagas de confeti y partículas celebratorias, contadores elásticos y retroalimentación viva inspirados en Watermelon UI para Web y Flutter.
---

# Watermelon UI — Guía Canónica de Micro-Delicias y Estados Jugosos (Juicy UI)

Watermelon UI rescata el concepto de "Juicy UI": interfaces que se sienten vivas, vibrantes y reactivas al tacto. Cada logro del usuario (marcar asistencia puntual dentro de geocerca, liquidar viáticos, completar una reflexión devocional) es recompensado con una retroalimentación física y visualmente satisfactoria.

## Principios Centrales de Watermelon UI

1. **Ráfagas Celebratorias y Partículas (Confetti Burst):**
   - Al completar con éxito una acción clave (ej. marcación de entrada/salida confirmada por Haversine, envío de pasajes con 80% calculado o registro de devocional), se dispara una lluvia o ráfaga de confeti y partículas geométricas con los colores de la marca.
   - En Web: Partículas dinámicas en Canvas ligero o elementos DOM con físicas de dispersión radial, gravedad y rotación libre.
   - En Flutter: `CustomPainter` animado con partículas que experimentan velocidad inicial, aceleración por gravedad y rotación angular.

2. **Contadores Elásticos y Números Saltantes (Bouncy Number Ticker):**
   - Cuando una cifra cambia (ej. horas acreditadas de `64.5` a `68.5`, o viáticos calculados a `Bs 276.00`), los dígitos no cambian bruscamente; se deslizan verticalmente con una transición elástica amortiguada.
   - En Web: `motion.span` con transición `spring` o carrusel vertical de números.
   - En Flutter: `AnimatedSwitcher` con `SlideTransition` y curva elástica.

3. **Insignias y Pulso de Estado Vivo (Living Pulse Badges):**
   - Puntos de estado con ondas expansivas concéntricas continuas (`ping` y `pulse`) que indican actividad en tiempo real (ej. "En Línea", "Geocerca Activa", "GPS Bloqueado").

4. **Botones de Satisfacción Máxima (Juicy Buttons):**
   - Al hacer clic o toque, el botón no solo reacciona con un color más oscuro; sufre una compresión elástica seguida de un rebote instantáneo y un anillo de onda expansiva hacia el exterior.

5. **Reglas para BUMAND:**
   - Todo componente en español: `RafagaCelebracion`, `ContadorAnimado`, `BotonJuicy`, `IndicadorPulsoVivo`.
   - Rendimiento garantizado a 60 FPS sin bloquear el hilo principal.
   - Paleta de confeti: Dorado Diaconía (`#F8C766`), Turquesa BUMAND (`#17B4C4`), Azul Marino (`#063A6B`), Esmeralda (`#10B981`) y Coral (`#E2694B`).
