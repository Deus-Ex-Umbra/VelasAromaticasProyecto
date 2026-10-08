---
name: migrador-movil
description: Skill orquestador para migrar lógica móvil legacy hacia Flutter Clean Architecture.
---

# Migrador Móvil (Legacy -> Flutter)

Usa esta skill para leer la lógica antigua relacionada a móvil en `bumanss/` y reescribirla en el nuevo polyrepo `new-bumand/bumand-movil/`.

## Flujo de Trabajo
1. **Auditar Prototipos (Referencia Visual)**:
   - Usa `view_file` sobre `_prototipos/bumand_prototipo_v27_fix_error.html` para entender la paleta de colores y el esquema de la interfaz, ya que el diseño móvil debe ser análogo a la versión web. 
   - Puedes usar `browser_subagent` para sacar capturas visuales de los flujos de usuario plasmados allí.
   - **Optimización**: Invoca subagentes en paralelo para investigar casos de uso, capturar pantallas de flujos de interfaz múltiples o analizar archivos del legacy simultáneamente, acelerando así el tiempo de desarrollo.
2. **Extracción de Casos de Uso**: Analiza cómo operaba la app vieja en `bumanss/`.
3. **Aplicar Reglas Flutter**: Lee `new-bumand/bumand-movil/.agents/rules/03-movil.md`.
4. **División Arquitectónica**: Todo código nuevo no debe ser un monolito. Debe dividirse en:
   - `lib/core/` para temas, red, utilidades.
   - `lib/caracteristicas/` para cada feature independiente.
5. **Reescritura Segura**: Traduce la lógica asegurando Null Safety total en Dart.
4. **Reescritura Segura**: Traduce la lógica asegurando Null Safety total en Dart.
