---
name: migrador-frontend
description: Skill orquestador para migrar interfaces legacy hacia Next.js 14+ y Shadcn.
---

# Migrador Frontend (Legacy -> Next.js)

Esta skill se usa para extraer la lógica de interfaz antigua (`bumanss/`) y convertirla a la nueva arquitectura frontend en `new-bumand/bumand-frontend/`.

## Flujo de Trabajo
1. **Auditar Prototipos y UI Legacy**: 
   - **Obligatorio**: Usa `view_file` para inspeccionar la copia local del prototipo en `_prototipos/bumand_prototipo_v27_fix_error.html` (y similares). Lee las variables CSS y la estructura del DOM.
   - Opcionalmente, usa la herramienta `browser_subagent` para renderizar el prototipo en un navegador local y capturar un pantallazo para entender el flujo visual sin tener que leer 3000 líneas de código a ciegas.
   - **Optimización**: Delega la investigación y el análisis de la estructura de UI, o capturas visuales, a subagentes en paralelo si existen múltiples componentes o páginas para auditar, con el fin de optimizar el tiempo de desarrollo.
2. **Aplicar Diseño**: Usa las skills `antigravity-design` e `interface-design` para replicar los colores, tipografías (ej. Bricolage Grotesque) y elevar la calidad visual (cuadrícula 4px).
3. **Migración a Next.js**: Traslada la lógica hacia `new-bumand/bumand-frontend/`. 
   - Respeta estrictamente `02-frontend.md`.
   - Coloca rutas en `src/app/` (ej. `page.tsx`).
   - Usa componentes reutilizables en `src/componentes/`.
4. **Validación**: Verifica que el resultado final sea TypeScript estricto y Tailwind puro.
