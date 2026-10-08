# Flujo de Trabajo Superpoderes (Antigravity IDE)

Esta regla define el ciclo de desarrollo central que el agente DEBE seguir para garantizar calidad sistemática. Se basa en el ecosistema "Superpowers" adaptado al español y a Antigravity.

## Ciclo de Desarrollo Básico

1. **Lluvia de ideas:** Antes de programar algo nuevo, el agente debe discutir enfoques, hacer preguntas aclaratorias y generar una especificación.
2. **Planificación:** Convertir la especificación en tareas pequeñas (2-5 min) con rutas de archivos exactas.
3. **Ejecución:** Ejecutar las tareas paso a paso, haciendo pausas para la revisión humana (checkpoints).
4. **Revisión:** Revisar el código completado contra el plan antes de darlo por terminado.
5. **Finalización:** Compilar, verificar el tipado estricto (TypeScript/Flutter) y solicitar confirmación.

## Integración con Habilidades (Skills)
- ANTES de realizar cualquier acción, el agente debe verificar si hay una habilidad (`skill`) que aplique al problema (ej. `diseno-interfaz`, `diseno-antigravity`).
- Nunca inventar si existe un procedimiento establecido en una skill.
- Todas las interacciones deben ser estrictamente en **Español**, sin mencionar herramientas externas de IA que no sean Antigravity.
