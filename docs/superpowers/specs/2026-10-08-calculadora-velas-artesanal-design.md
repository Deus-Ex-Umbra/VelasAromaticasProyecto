# Especificación de Diseño: Calculadora Artesanal de Velas

**Fecha:** 2026-10-08  
**Estado:** Aprobación de Diseño Inicial  
**Objetivo:** Crear una aplicación web en Next.js (App Router) con diseño sensorial artesanal, integrando Shadcn UI, Cult UI, Skipper UI, Watermelon UI y Motion Primitives para costeo exacto y cálculo de precio de venta en velas aromáticas artesanales con cero pérdidas y cero botones de recálculo manual.

---

## 1. Contexto y Diagnóstico

### 1.1 Problema Identificado (Análisis de Blucen y Solución Actual)
- **Fragmentación:** La herramienta de referencia fragmenta el proceso en tres pestañas desconectadas (*Insumos*, *Rendimiento*, *Precios*), haciendo perder el contexto de la fórmula al artesano.
- **Falta de reactividad:** Exige presionar botones manuales para calcular.
- **Peligro financiero:** No educa sobre la diferencia crucial entre *Margen sobre Venta* vs *Markup (sobre costo)*, provocando que artesanos vendan con márgenes reales por debajo del punto de equilibrio.
- **Fricción comercial:** Banners invasivos que fuerzan el inicio de sesión.

### 1.2 Solución Propuesta
Una interfaz fluida, cálida y de alta factura visual (estética de taller artesanal: soja, vidrio ámbar, papel craft y llama de vela).
- **Cero registros ni login:** 100% libre y utilizable al instante.
- **Cero botones de calcular:** Cálculo reactivo en milisegundos con estados controlados en React.
- **Disposición:** Panel Dual Cohesivo (60% formulario de formulación a la izquierda, 40% panel de resultados y tarjeta spotlight sticky a la derecha, complementado con Dock Flotante Skipper UI en móvil).

---

## 2. Arquitectura Técnica y Estándares

### 2.1 Pila Tecnológica
- **Framework:** Next.js 14+ con App Router en TypeScript estricto.
- **Ubicación del código:** Directorio `src/` obligatorio (`src/app/`, `src/components/`, `src/lib/`, `src/tipos/`, `src/hooks/`).
- **Estilos:** Tailwind CSS con tokens sensoriales artesanales personalizados.
- **Librerías de UI y Animación:**
  - Radix UI / Shadcn UI primitivas (`Input`, `Slider`, `Card`, `Badge`, `Accordion`, `Switch`, `Tooltip`).
  - `framer-motion` (Motion Primitives, Cult UI y transiciones de resortes Skipper UI).
  - `lucide-react` (iconografía ligera y precisa).
  - `canvas-confetti` (partículas de micro-delicia Watermelon UI).

### 2.2 Convenciones de Nomenclatura del Sistema Agéntico
- **Español Absoluto** para nombres de dominio, variables, funciones y componentes.
- `snake_case`: Variables, estados y atributos de objetos (`costo_cera`, `gramos_cera`, `precio_sugerido`, `margen_beneficio`).
- `camelCase`: Métodos y funciones (`calcularCostoTotal()`, `calcularPrecioSugerido()`, `formatearMoneda()`).
- `PascalCase`: Componentes React, Interfaces y Tipos (`CalculadoraVelas`, `TarjetaSpotlight`, `FormularioInsumos`, `ResultadoFinanciero`).
- `UPPER_SNAKE_CASE`: Constantes (`FACTOR_DENSIDAD_CERA = 0.86`, `MARGEN_MINIMO_SUPERVIVENCIA = 35`).
- `kebab-case`: Archivos y carpetas (`motor-costos.ts`, `tarjeta-spotlight.tsx`, `barra-flotante-resumen.tsx`).

---

## 3. Paleta Sensorial Artesanal (Design Tokens)

- **Fondo Base (Soja Marfil):** `#FAF8F5` (modo claro) / `#121110` (modo nocturno refinado)
- **Superficie de Tarjeta:** `#FFFFFF` con borde suave `#EFECE6` y halo cálido
- **Acento Primario (Llama Ámbar):** `#D97706` y `#F59E0B`
- **Halo Cálido (Glow):** `rgba(245, 158, 11, 0.15)`
- **Salvia / Salud Financiera:** `#059669` (Esmeralda botánica suave)
- **Texto Principal:** `#1C1917` (Piedra oscura / carbón cálido)
- **Texto Secundario:** `#78716C` (Piedra neutra)

---

## 4. Orquestación de Librerías de Interacción

### 4.1 Cult UI (Atmósfera y Alta Factura)
- `TarjetaSpotlight`: Tarjeta que detecta coordenadas del puntero del cursor (`x`, `y`) y proyecta un halo radial suave ámbar simulando el resplandor de una vela.
- `BordeLuminoso`: Estela de luz perimetral animada con rotación cónica suave sobre la tarjeta de precio cuando el margen supera el 50%.

### 4.2 Skipper UI (Fluidez Táctil y Ergonomía Móvil)
- `BarraFlotanteResumen`: Dock inferior translúcido flotante (`backdrop-blur-lg`) con precio sugerido, ganancia neta y botón de acción rápida para dispositivos móviles y scroll continuo.
- **Física de Resortes:** Micro-interacciones con amortiguación suave (`stiffness: 350, damping: 25`) y contracción táctil (`active:scale-95`).

### 4.3 Watermelon UI (Micro-delicias y Cifras Vivas)
- `ContadorAnimado`: Ticker elástico de números rodantes para que el precio de venta y la ganancia neta se actualicen sin saltos bruscos.
- `InsigniaMargenViva`: Badge dinámico con pulso vivo que cambia de color según el tramo de margen:
  - `< 35%`: Peligro (Ámbar/Rojo oscuro, "Riesgo de Pérdida").
  - `35% - 49%`: Precaución (Amarillo ámbar, "Mínimo Viable").
  - `50% - 69%`: Óptimo (Esmeralda botánica, "Saludable / Mayorista").
  - `>= 70%`: Excelencia (Dorado botánico, "Margen Premium").
- `RafagaCelebracion`: Chispas sutiles doradas al alcanzar tramos recomendados de rentabilidad.

### 4.4 Motion Primitives (Continuidad Cinemática)
- `SelectorModo`: Pastilla indicadora deslizante con `layoutId="pastilla_activa"` para conmutar fluidamente entre *"Por Vela (1 unidad)"* y *"Por Lote (N unidades)"*.
- `ContenedorEscalonado`: Entrada fluida en cascada (`staggerChildren: 0.08s`) de los bloques de insumos.
- `AcordeonSuave`: Despliegue con medición automática de altura para costos indirectos.

---

## 5. Motor Matemático y Financiero (`src/lib/motor-costos.ts`)

### Fórmulas Inmutables:
1. **Conversor Opcional de Volumen a Masa de Cera:**
   $$\text{peso\_cera} = \text{volumen\_contenedor\_ml} \times 0.86$$
2. **Carga de Fragancia (en base al peso de cera):**
   $$\text{gramos\_fragancia} = \text{gramos\_cera} \times \left(\frac{\text{porcentaje\_fragancia}}{100}\right)$$
   $$\text{peso\_total\_vela} = \text{gramos\_cera} + \text{gramos\_fragancia}$$
3. **Costos Directos Unitarios:**
   $$\text{costo\_cera} = \left(\frac{\text{precio\_kilo\_cera}}{1000}\right) \times \text{gramos\_cera}$$
   $$\text{costo\_fragancia} = \left(\frac{\text{precio\_frasco\_fragancia}}{\text{gramos\_frasco\_fragancia}}\right) \times \text{gramos\_fragancia}$$
   $$\text{costo\_directo} = \text{costo\_cera} + \text{costo\_fragancia} + \text{costo\_pabilo} + \text{costo\_envase}$$
4. **Costos Indirectos y Ocultos:**
   $$\text{costo\_indirecto} = \text{empaque} + \text{etiqueta} + \text{servicios} + \text{mano\_obra} + \text{merma\_flete} + \text{comision\_plataforma}$$
   $$\text{costo\_total\_unitario} = \text{costo\_directo} + \text{costo\_indirecto}$$
5. **Margen Comercial Real (Sobre Venta):**
   $$\text{precio\_venta\_sugerido} = \frac{\text{costo\_total\_unitario}}{1 - \left(\frac{\text{margen\_porcentaje}}{100}\right)}$$
   $$\text{ganancia\_neta\_unitaria} = \text{precio\_venta\_sugerido} - \text{costo\_total\_unitario}$$
   $$\text{ganancia\_total\_lote} = \text{ganancia\_neta\_unitaria} \times \text{cantidad\_lote}$$

---

## 6. Estructura de Archivos del Proyecto

```text
c:\Users\yang_\Desktop\VelasCalculadora\
├── .agents/                        # Contexto, reglas y skills agénticas
├── docs/                           # Documentación, audio y transcripción
│   └── superpowers/specs/         # Especificaciones de diseño
├── public/                         # Assets estáticos
└── src/
    ├── app/
    │   ├── layout.tsx              # Tipografía e infraestructura base
    │   ├── page.tsx                # Pantalla principal (Dashboard Artesanal)
    │   └── globals.css             # Tailwind y variables CSS de luz ámbar
    ├── components/
    │   ├── ui/                     # Primitivas Shadcn UI
    │   ├── artesanal/              # Componentes de interacción especializada
    │   │   ├── tarjeta-spotlight.tsx       # Cult UI
    │   │   ├── borde-luminoso.tsx          # Cult UI
    │   │   ├── contador-animado.tsx        # Watermelon UI
    │   │   ├── insignia-margen-viva.tsx    # Watermelon UI
    │   │   ├── barra-flotante-resumen.tsx  # Skipper UI
    │   │   ├── selector-modo.tsx           # Motion Primitives (layoutId)
    │   │   └── rafaga-celebracion.tsx      # Watermelon UI
    │   └── calculadora/            # Módulos de la calculadora
    │       ├── formulario-insumos.tsx      # Cera, Fragancia, Mecha, Envase
    │       ├── acordeon-indirectos.tsx     # Empaque, servicios, merma, comisión
    │       ├── selector-margen.tsx         # Tramos 35%, 50%, 65%, 80%
    │       ├── desglose-grafico.tsx        # Barra segmentada de distribución
    │       └── modal-copia-receta.tsx      # Exportar a WhatsApp / Portapapeles
    ├── hooks/
    │   ├── useCalculadoraVelas.ts  # Estado reactivo y persistencia localStorage
    │   └── usePosicionRaton.ts     # Cálculo de coordenadas para Spotlight
    ├── lib/
    │   ├── motor-costos.ts         # Funciones puras de cálculo matemático
    │   └── utils.ts                # Utilidades de clases (clsx, tailwind-merge)
    └── tipos/
        └── calculadora.ts          # Interfaces y tipos en TypeScript estricto
```

---

## 7. Plan de Verificación y Criterios de Aceptación

1. **Exactitud Matemática:** Validar contra los valores canónicos del archivo `calculadora-velas/SKILL.md` (vela de 200g, 8% esencia = 16g fragancia, margen 50% duplica el costo, margen 35% produce el precio de supervivencia exacto).
2. **Interactividad Fluida:** Cada cambio en inputs numéricos o deslizadores debe reflejarse en tiempo real sin requerir recálculo manual.
3. **Diseño Visual:**
   - La tarjeta principal proyecta un halo ámbar al mover el cursor por encima.
   - El contador rodante elástico anima las cifras monetarias con suavidad.
   - En pantallas pequeñas, el dock flotante inferior permanece anclado permitiendo monitorear precios sin importar el scroll.
4. **Compilación y Build:** `npm run build` debe completar sin ningún error de TypeScript ni warnings de linting.
