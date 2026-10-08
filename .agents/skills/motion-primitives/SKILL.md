---
name: motion-primitives
description: Primitivas fundamentales de animación basadas en Motion Primitives (motion-primitives.com) para Web (Motion/Framer Motion) y Flutter (animaciones escalonadas, revelación de texto, morphing y layoutId).
---

# Motion Primitives — Guía Canónica de Primitivas de Animación

Motion Primitives provee bloques de construcción elementales para coreografiar la interfaz de usuario con elegancia y consistencia cinemática. Inspirado en motion-primitives.com, estandariza cómo los elementos entran, se transforman, se reorganizan y salen de la pantalla.

## Principios Centrales de Motion Primitives

1. **Revelación Escalonada de Listas y Cuadrículas (Stagger Children):**
   - Los elementos secundarios (tarjetas de estadísticas, filas de historial, tarjetas de devocionales) no aparecen todos de golpe ni de forma síncrona.
   - Entran en cascada progresiva con un retardo de `0.05s` a `0.08s` entre cada elemento, combinando una elevación desde `y: 16` hasta `y: 0` y opacidad de `0` a `1`.
   - En Web: `variants` con `staggerChildren: 0.08` y `delayChildren: 0.1` en `motion.div`.
   - En Flutter: Lista animada (`AnimationController` orquestador con `Interval(start, end, curve)` por cada ítem).

2. **Indicador de Pestaña Deslizante con Continuidad Fisiológica (`layoutId`):**
   - Cuando el usuario cambia entre pestañas o elementos de navegación, el fondo activo o la pastilla indicadora no desaparece y reaparece en el nuevo ítem, sino que se deforma y desliza fluidamente hacia la nueva posición.
   - En Web: `<motion.div layoutId="pastilla_activa" />`.
   - En Flutter: `AnimatedPositioned` o `Hero` con transición fluida de contenedor.

3. **Efectos de Texto Vivo (Animated Text / Text Morph / Blur In):**
   - Títulos y subtítulos principales emergen con un desenfoque progresivo (`filter: blur(8px) -> blur(0px)`) y ligero escalamiento.
   - Títulos dinámicos de sección que comunican transiciones visuales seguras al cambiar de módulo.

4. **Transición Suave de Despliegue (Accordion & Expandable Cards):**
   - Expansión de contenido con medición automática de altura (`height: "auto"`) y desbordamiento oculto durante la animación para evitar saltos bruscos.

5. **Reglas para BUMAND:**
   - Componentes estándar: `ContenedorEscalonado`, `ElementoEscalonado`, `TextoReveladoSuave`, `PestañasDeslizantes`.
   - Nombres en riguroso español y snake_case para variables/props.
   - Rendimiento optimizado utilizando aceleración por hardware GPU (`transform: translate3d`).
