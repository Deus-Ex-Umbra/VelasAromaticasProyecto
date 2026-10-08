---
name: analisis-new-bumand
description: "Skill especializada para explorar, buscar y analizar código dentro del subdirectorio new-bumand de forma limpia y eficiente, ignorando carpetas de compilación y dependencias."
---

# 🔍 Análisis y Exploración en `new-bumand`

Esta skill debe activarse siempre que necesites realizar exploraciones, búsquedas o análisis de código en el ecosistema en proceso de migración o nuevo desarrollo, ubicado específicamente en:
**`c:\Users\yang_\Desktop\Bumands-Proyecto\new-bumand`**

## 🎯 Objetivo Principal

Asegurar que todas las interacciones (búsqueda de archivos, lectura de código, análisis de estructura) dentro de `new-bumand` sean eficientes, precisas y libres de ruido generado por binarios, cachés y dependencias descargadas.

## 🚫 Reglas Estrictas de Exclusión

Al realizar comandos de búsqueda (como `grep_search`, `find`, `rg`), listado de directorios (`list_dir`), o exploración de código, **DEBES EXCLUIR SIEMPRE** las siguientes carpetas, a menos que el usuario o la tarea requiera explícitamente analizar el código compilado o binario final:

1. **Ecosistema Node/JS/TS (Frontend y Backend):**
   - `node_modules`
   - `dist`
   - `build`
   - `.next`

2. **Ecosistema Flutter/Dart (Móvil):**
   - `.dart_tool`
   - `build`
   - `.pub-cache`
   - `ios/Pods` y `ios/.symlinks`
   - `android/.gradle`

3. **Carpetas genéricas del sistema o IDE:**
   - `.git`
   - `.vscode`
   - `.idea`
   - Archivos temporales o de caché.

## 🛠️ Buenas Prácticas de Búsqueda

- **Uso de `grep_search`:** Siempre usa el parámetro de exclusión (o aprovecha que herramientas como `ripgrep` ignoran por defecto si está configurado en `.gitignore`, pero asegúrate de no sobrepasar los límites de resultados si buscas en todo `new-bumand`).
- **Navegación:** Enfoca tus análisis de forma directa en `new-bumand/bumand-backend`, `new-bumand/bumand-frontend` o `new-bumand/bumand-movil` dependiendo del stack.
- **Eficiencia:** Evita leer archivos de log (`.log`) a menos que estés diagnosticando un error específico de ejecución.

## 💡 Cuándo permitir la inclusión de dependencias o compilados

Solo debes mirar en las carpetas excluidas (como `dist` o `build`) cuando:
- Se requiere verificar si el build se generó correctamente.
- El usuario pide analizar el resultado final de una compilación (ej. inspeccionar el bundle de Next.js o el binario de NestJS).
- Ocurre un error de resolución interno dentro de una librería y necesitas inspeccionar `node_modules`.
