---
name: migrador-backend
description: Skill orquestador para migrar cÃ³digo legacy hacia el nuevo backend NestJS.
---

# Migrador Backend (Legacy -> NestJS)

Esta skill define el flujo estricto para extraer cÃ³digo del repositorio antiguo (`bumanss/`) y trasladarlo al nuevo entorno (`new-bumand/bumand-backend/`).

## Flujo de Trabajo
1. **Analizar Origen**: Usa `view_file` o `grep_search` en la carpeta `bumanss/` para entender cómo funcionaba el endpoint, controlador o modelo en el sistema viejo. **Optimización**: Prioriza el uso de subagentes en paralelo para investigar múltiples endpoints, archivos o dependencias simultáneamente.
2. **Consultar Reglas**: Antes de escribir, verifica las convenciones en `new-bumand/bumand-backend/.agents/rules/01-backend.md` (Ej: inyecciÃ³n de dependencias, tipado, cero comentarios).
3. **RefactorizaciÃ³n Limpia**: No copies y pegues ciegamente. Reescribe la lÃ³gica usando TypeORM y arquitectura modular de NestJS.
4. **Validar**: Genera el cÃ³digo en el nuevo repositorio y confirma que cumple con los estÃ¡ndares agÃ©nticos.
