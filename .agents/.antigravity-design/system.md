# Sistema de Diseño BUMAND (Memoria de Diseño e Interfaz)

Este documento define las reglas de diseño institucional, tokens visuales, jerarquía y espaciado para todo el ecosistema BUMAND (Web con Next.js/Tailwind/Shadcn y Móvil con Flutter).

---

## 1. Paleta Cromática Institucional

| Token | Código HEX | Rol Semántico | Uso Principal |
| :--- | :--- | :--- | :--- |
| `azul-diaconia` | `#063A6B` | Primario | Cabeceras, títulos principales, botones primarios, identidad institucional. |
| `turquesa-bumand` | `#17B4C4` | Secundario / Acento | Botones de acción clave, resaltes, badges de estado activo, iconos interactivos. |
| `dorado-sol` | `#F8C766` | Acento Cálido | Alertas positivas, métricas destacadas, detalles en contrastes oscuros. |
| `naranja-alerta` | `#E2694B` | Estado / Advertencia | Estados observados, badges de revisión pendiente, advertencias de tolerancia. |
| `arena-borde` | `#E3DCCB` | Bordes y Divisiones | Bordes de tarjetas (1px solid), separadores tenues, líneas de tabla. |
| `fondo-neutro` | `#F8F9FA` | Superficie Base | Fondo general de páginas y paneles administrativos. |
| `blanco-puro` | `#FFFFFF` | Superficie Elevada | Fondos de tarjetas, modales, hojas de diálogo y paneles de navegación. |
| `texto-primario` | `#1E293B` | Tipografía Principal | Textos de párrafos, etiquetas, títulos secundarios. |
| `texto-mutado` | `#64748B` | Tipografía Secundaria | Metadatos, marcas temporales, leyendas auxiliares. |

---

## 2. Escala de Espaciado (Grilla Base 4px)

Todo espaciado vertical, horizontal, padding y margin DEBE utilizar exclusivamente múltiplos de 4px:

- **4px (`p-1`, `gap-1`):** Microespaciado entre iconos y texto compacto.
- **8px (`p-2`, `gap-2`):** Espaciado entre elementos de formulario compactos y chips/badges.
- **12px (`p-3`, `gap-3`):** Relleno interno de celdas de tabla e inputs estándar.
- **16px (`p-4`, `gap-4`):** Separación estándar entre campos de formulario y tarjetas hijas.
- **20px (`p-5`, `gap-5`):** Relleno interno de tarjetas estándar.
- **24px (`p-6`, `gap-6`):** Padding de contenedores principales y separación entre secciones.
- **32px (`p-8`, `gap-8`):** Separación macro entre módulos o vistas completas.

> **Regla Inflexible:** Prohibido usar espaciados arbitrarios (como 7px, 11px, 14px, 17px o 22px).

---

## 3. Altura Estandarizada de Controles Interactivos

- **Botones Estándar (`Button`):** Altura fija de **36px** (compacto/tabla) o **40px** (formulario/primario). Altura grande: **44px** (solo acciones clave o móviles).
- **Campos de Entrada (`Input`, `Select`):** Altura fija de **40px**.
- **Radio de Esquinas (`border-radius`):**
  - Botones y Controles: `rounded-lg` (8px) o `rounded-xl` (12px).
  - Tarjetas (`Card`): `rounded-xl` (12px) con borde tenue `border-[#E3DCCB]`.
  - Badges: `rounded-full` con padding `px-2.5 py-0.5`.

---

## 4. Tratamiento de Superficies y Elevación

- **Tarjetas:** Fondo blanco `#FFFFFF`, borde sutil `border border-[#E3DCCB]`, sombra suave `shadow-sm` (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`).
- **Modales y Diálogos:** Fondo blanco, esquinas `rounded-2xl`, sombra `shadow-xl`, desenfoque de fondo sutil (`backdrop-blur-sm`).
- **Estados Interactivos (Hover / Focus):**
  - Botón primario `#063A6B`: hover a `#052F57`.
  - Botón secundario `#17B4C4`: hover a `#139AA7`.
  - Anillos de foco: `ring-2 ring-[#17B4C4] ring-offset-2`.

---

## 5. Tipografía

- **Titulares y Cifras (Display):** Inter o Geist Sans, peso semi-bold (600) o bold (700). Color `#063A6B`.
- **Cuerpo y Formularios:** Sans-serif neutral, peso regular (400) o medium (500). Color `#1E293B`.
- **Códigos, Fechas y Trazas:** Monoespaciado (Geist Mono o Roboto Mono), tamaño `11px` o `12px` en mayúsculas con `tracking-wider`.
