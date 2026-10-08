# Reglas de Frontend (Next.js App Router Estricto)

## 1. Rol y Arquitectura Base
- Este proyecto usa exclusivamente **Next.js 14+ con App Router (`app/`)**. Todo componente es un **Server Component** por defecto para maximizar el SEO y rendimiento.
- Solo debes usar `'use client'` al principio del archivo cuando necesites reactividad (ej. `useState`, `useEffect`, `onClick`).
- **Directorio `src/` Obligatorio**: Toda la aplicación debe vivir dentro de la carpeta `src/` para separar el código fuente de los archivos de configuración (`next.config.ts`, `tailwind.config.ts`).

## 2. Estructura de Carpetas (Mezcla de Estándar y Español)
Dado que el framework obliga ciertas convenciones en inglés, la estructura convivirá así:

- `public/` (Estándar Next.js: Imágenes, fuentes, íconos).
- `src/app/` (Estándar Next.js: El enrutador).
  - Las subcarpetas para rutas DEBEN estar en español y en kebab-case (ej. `src/app/panel-control/`).
  - Las agrupaciones lógicas de rutas usarán paréntesis (ej. `src/app/(autenticacion)/`).
  - Los archivos de renderizado nativos **DEBEN** conservar su nombre en inglés por convención de Next.js: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `route.ts`.
- `src/components/` (UI y Módulos). Shadcn UI se instalará aquí (ej. `src/components/ui/button.tsx`).
- `src/contextos/` (Providers y estado global).
- `src/hooks/` (Deben obligatoriamente iniciar con la palabra `use` para respetar React, ej. `useAutenticacion.ts`).
- `src/lib/` (Estándar Shadcn/Next: Utilidades compartidas, validadores, utilidades de Tailwind `utils.ts`).
- `src/tipos/` (Tipados globales, DTOs e Interfaces en TypeScript).

## 3. Estándar de Código y Nombrado
- **snake_case:** Variables y Atributos (ej. `cargando_estado`, `becario_id`).
- **camelCase:** Métodos y funciones (ej. `manejarEnvio()`).
- **PascalCase (ESPAÑOL):** Clases, Interfaces, DTOs, Entidades y Componentes UI (ej. `BotonSecundario`, `TablaPacientes`).
- **UPPER_SNAKE_CASE:** Constantes.
- **kebab-case:** Nombres de carpetas y archivos (ej. `factura.controlador.ts`, `panel-administrativo.tsx`, `autenticacion-contexto.tsx`), y rutas de red REST.
- **Excepción Nativa:** En `src/app/`, el archivo principal siempre se llamará `page.tsx` o `layout.tsx`. Las clases de Tailwind van en inglés porque son nativas del framework CSS.

## 4. Estilos y Componentes UI
- Estilos exclusivamente a través de **Tailwind CSS**. 
- Todo componente reutilizable (Botones, Tablas, Formularios) debe generarse usando CLI de **Shadcn UI** (`npx shadcn@latest add <componente>`) adaptándolo al esquema de colores institucional definido en las skills de diseño.

## 5. Cero Comentarios Básicos
- PROHIBIDO generar código con comentarios obvios. El código debe ser autodocumentado. Solo agrega comentarios si hay mutaciones complejas de estado o uso oscuro de APIs web.
