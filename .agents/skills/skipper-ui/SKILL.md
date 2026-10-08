---
name: skipper-ui
description: Patrones de diseño de interfaces fluidas, micro-interacciones táctiles, barras de comandos flotantes y navegación por gestos inspirados en Skipper UI para Web (Next.js/React) y Móvil (Flutter).
---

# Skipper UI — Guía Canónica de Interacciones Táctiles y Fluidas

Skipper UI se enfoca en la respuesta táctil, micro-interacciones orgánicas, láminas inferiores deslizantes (bottom sheets), barras flotantes de acción rápida (floating command bars) y retroalimentación háptica visual. Su objetivo es convertir software transaccional rígido en una experiencia placentera, continua y libre de fricción.

## Principios Centrales de Skipper UI

1. **Inercia y Elasticidad Orgánica:**
   - Todo elemento que se desplaza o desliza debe responder con amortiguación basada en física de resortes (`spring physics`), sin desaceleraciones lineales bruscas.
   - En Web: Usar `transition: { type: "spring", stiffness: 350, damping: 25 }` con Motion / Framer Motion.
   - En Flutter: Usar `Curves.easeOutBack`, `Curves.elasticOut` o `SpringSimulation`.

2. **Barras Flotantes de Comandos Rápidos (Floating Command Dock):**
   - Acceso inmediato con el pulgar o cursor centrado a acciones prioritarias (ej. Registrar Asistencia, Declarar Pasaje, Añadir Devocional).
   - El dock flota sobre el contenido con efecto de cristal esmerilado (`backdrop-blur-md` en Web, `BackdropFilter` con `ImageFilter.blur` en Flutter).
   - Al interactuar, los iconos crecen suavemente con un factor de escala sutil (1.1x).

3. **Láminas Deslizantes Táctiles (Bottom Sheets & Drawers):**
   - Transiciones que nacen desde la parte inferior de la pantalla hacia arriba con tirador indicador (`drag handle`).
   - Soporte visual de arrastre con feedback de cierre progresivo.

4. **Micro-interacciones de Botón y Pulsación:**
   - Reducción de escala al presionar (`active:scale-95` o `whileTap={{ scale: 0.96 }}`).
   - Elevación y sombra reactiva al pasar el cursor o interactuar.

5. **Reglas para BUMAND:**
   - Todos los componentes y variables deben mantener la convención institucional: `snake_case` para variables y estados, `PascalCase` para componentes y widgets, `camelCase` para métodos, y nombres en **Español Absoluto**.
   - Colores institucionales respetados: Azul Marino Diaconía (`#063A6B`), Turquesa BUMAND (`#17B4C4`), Dorado Diaconía (`#F8C766`), Crema Fondo (`#F8F9FA`).
