---
name: interfaz-velas-artesanal
description: Guía de integración de diseño de alta factura para el proyecto de velas, unificando Shadcn UI, Skipper UI, Cult UI, Watermelon UI y Motion Primitives con estética artesanal cálida.
---

# Interfaz Artesanal para Velas — Shadcn UI, Skipper, Cult, Watermelon y Motion Primitives

Esta habilidad define la arquitectura visual, tokens sensoriales y patrones de interacción para la calculadora de velas, asegurando una experiencia táctil, placentera y elegante que supera por completo los formularios rígidos tradicionales.

---

## 1. Paleta Sensorial Artesanal (Tokens de Color)

Inspirada en el taller de velas: cera vegetal, aceites esenciales, vidrio ámbar, papel craft y el brillo cálido de la llama.

- **Fondo Base (Soja Marfil):** `#FAF8F5` (Claro) / `#121110` (Oscuro sofisticado)
- **Superficie de Tarjeta:** `#FFFFFF` con borde suave `#EFECE6` y desenfoque vítreo (`backdrop-blur-md`)
- **Acento Primario (Llama Ámbar):** `#D97706` (Ámbar 600) y `#F59E0B` (Ámbar 500)
- **Resplandor de Fuego (Luz Cálida):** `#FDE68A` (Ámbar 200) al 15% - 25% para el spotlight de cursor
- **Métricas Positivas (Salvia / Éxito):** `#059669` (Esmeralda botánica suave)
- **Texto Principal:** `#1C1917` (Piedra oscura / carbón)
- **Texto Secundario:** `#78716C` (Piedra neutra cálida)

---

## 2. Orquestación de Librerías de UI

### 2.1 Shadcn UI (Estructura y Accesibilidad)
- Componentes base primitivos: `Input`, `Slider`, `Switch`, `Badge`, `Card`, `Accordion`, `Tooltip`.
- Adaptados con bordes redondeados orgánicos (`rounded-2xl` y `rounded-xl`), eliminando esquinas duras industriales.

### 2.2 Cult UI (Atmósfera y Alta Factura Visual)
- **Tarjeta con Reflector de Llama (Spotlight Card):**
  - La tarjeta de resultados principales proyecta un halo radial sutil siguiendo la posición del cursor (`rgba(245, 158, 11, 0.15)`), simulando la luz titilante de una vela encendida.
- **Borde Luminoso en Movimiento (Border Beam):**
  - Recorre suavemente el perímetro de la tarjeta de "Precio Sugerido" cuando el margen es óptimo (>50%).

### 2.3 Skipper UI (Respuesta Táctica y Fluidez)
- **Barra de Resumen Flotante (Floating Bottom Dock):**
  - En dispositivos móviles y escritorio, un dock flotante inferior con fondo translúcido (`bg-white/80 dark:bg-stone-900/80 backdrop-blur-lg`) mantiene el Precio Sugerido y la Ganancia Neta siempre visibles mientras el artesano hace scroll por los costos.
- **Micro-interacciones Elásticas:**
  - Sliders de porcentaje con física de resortes (`spring({ stiffness: 400, damping: 30 })`).
  - Botones con compresión física al toque (`active:scale-95`).

### 2.4 Watermelon UI (Micro-delicias y Cifras Vivas)
- **Contador Elástico de Precios (Bouncy Number Ticker):**
  - Al modificar los gramos de cera o el porcentaje de fragancia, los dígitos del precio y de la ganancia no saltan en seco: se desplazan verticalmente con un ticker amortiguado.
- **Insignia de Margen con Pulso Vivo:**
  - Badge que cambia dinámicamente de color y pulsa suavemente:
    - Rojo/Ámbar: `< 35%` ("Riesgo de pérdida")
    - Amarillo: `35% - 49%` ("Mínimo viable")
    - Verde esmeralda: `50% - 69%` ("Saludable")
    - Dorado: `>= 70%` ("Margen Premium")
- **Chispas Celebratorias (Sparkle Burst):**
  - Micro-animación de destellos dorados sutiles al alcanzar márgenes recomendados sin ser invasiva.

### 2.5 Motion Primitives (Continuidad Cinemática)
- **Pestañas Deslizantes con `layoutId`:**
  - Alternador de modo ("Por Vela" vs "Por Lote") con una pastilla de fondo que flota y se estira con física orgánica entre ambas opciones.
- **Despliegue Escalonado (`staggerChildren`):**
  - Los grupos de campos (Cera, Fragancia, Contenedor, Indirectos) se revelan en cascada suave al cargar la página.
- **Acordeones con Animación de Altura Automática:**
  - La sección de costos indirectos se expande suavemente sin provocar parpadeos ni saltos de scroll.

---

## 3. Patrones de Experiencia de Usuario (Anti-Fricción)

1. **Cero Pantallas Ocultas:** Todo el costeo ocurre en una sola página limpia. Se terminaron las pestañas de navegación que obligan a saltar entre "Insumos", "Rendimiento" y "Precio".
2. **Reactividad Instantánea:** Todo cálculo se actualiza inmediatamente mientras el usuario escribe o mueve los deslizadores.
3. **Valores Predeterminados Realistas:** La calculadora viene precargada con valores típicos de una vela estándar de vaso (ej. vaso de 200g, 8% de fragancia, $150/kg cera) para que el artesano entienda el funcionamiento al primer segundo sin enfrentarse a campos vacíos o con ceros.
4. **Acción Rápida de Copiar / Compartir:** Botón con un clic para copiar el desglose al portapapeles en formato limpio listo para enviar por WhatsApp o guardar en notas.
