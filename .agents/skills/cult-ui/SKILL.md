---
name: cult-ui
description: Componentes de alta factura visual (high-craft), tarjetas con reflector de cursor (spotlight), bordes luminosos animados (border beam), mallas de gradiente y micro-texturas inspirados en Cult UI para Web y Flutter.
---

# Cult UI — Guía Canónica de Componentes de Alta Factura (High-Craft)

Cult UI aporta una estética técnica de vanguardia para productos de software de nivel superior. Combina el minimalismo oscuro/claro, la iluminación dinámica reactiva a la posición del cursor, y bordes resplandecientes que destacan componentes clave y métricas ejecutivas.

## Principios Centrales de Cult UI

1. **Tarjetas con Reflector de Cursor (Spotlight Cards):**
   - La tarjeta detecta las coordenadas del cursor (`x`, `y`) relativas a su caja y proyecta una fuente de luz radial suave (`radial-gradient`) que revela los bordes y el fondo sutilmente.
   - En Web: `onMouseMove` calculando `rect.left` y `rect.top` proyectado en una capa con opacidad dinámica y `mix-blend-mode`.
   - En Flutter: Usar `Listener` con `onPointerHover` o `onPointerMove`, renderizando un `RadialGradient` centrado en el offset del puntero.

2. **Bordes Luminosos en Movimiento (Border Beam / Glowing Border):**
   - Una estela luminosa recorre el perímetro de una tarjeta o badge para atraer la atención hacia hitos importantes (ej. "80% de Pasajes Listo", "Geocerca Confirmada").
   - En Web: Gradiente cónico con rotación infinita suave (`@keyframes girar`) o `motion.div` con máscara perimetral.
   - En Flutter: `CustomPainter` con `SweepGradient` o `LinearGradient` rotando mediante un `AnimationController`.

3. **Mallas de Gradiente Orgánico y Fondos de Aura:**
   - Gradientes difusos con desenfoque gaussiano profundo (`blur-3xl`) detrás de tarjetas y paneles para dar profundidad tridimensional sin saturar la vista.
   - Colores con paleta BUMAND: halos en turquesa `#17B4C4` al 15% y oro `#F8C766` al 10%.

4. **Insignias y Badges Shimmer (Resplandor Deslizante):**
   - Textos o badges con una banda de luz blanca/dorada que cruza diagonalmente cada pocos segundos para denotar estados activos o certificados.

5. **Reglas para BUMAND:**
   - Todo el código en español absoluto: `TarjetaLuzPuntero`, `BordeLuminoso`, `InsigniaResplandor`.
   - Nombres de archivos en `kebab-case`.
   - Compatibilidad total con modo claro institucional (`#F8F9FA` base, acentos en `#063A6B` y `#17B4C4`).
