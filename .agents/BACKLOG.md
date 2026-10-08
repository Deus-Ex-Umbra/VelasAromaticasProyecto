# BACKLOG — Calculadora Artesanal de Costos y Precios de Velas

> **Propósito del Documento:** Guía rectora del proyecto para definir qué características se deben implementar y qué aspectos quedan explícitamente excluidos para mantener la calculadora simple, placentera, reactiva y libre de fricción.

---

## 1. Visión y Diagnóstico del Proyecto

### 1.1 El Problema (Análisis de Blucen)
La calculadora de referencia en [blucen.com/calculadora](https://blucen.com/calculadora) solía ser una herramienta directa, pero sus recientes actualizaciones provocaron una severa degradación en la experiencia de usuario:
1. **Pestañas fragmentadas:** Divide el flujo en tres pestañas aisladas (*Insumos*, *Rendimiento*, *Precio de venta*), obligando a alternar pantallas y perder el contexto de la receta.
2. **Duplicidad y redundancia:** Solicita capturar los datos en un acordeón inicial (*"Calcula cera y esencia desde tus compras"*) y luego vuelve a exigir los mismos campos abajo en forma de costos manuales (*"Piezas producidas"*, *"Insumos de producción"*).
3. **Falta de reactividad:** Exige pulsar botones manuales (*"Calcular costos de la receta"*, *"Calcular precio"*) en lugar de actualizar resultados al instante.
4. **Confusión financiera:** Mezcla *"Margen sobre venta (%)"* con *"Aumento sobre costo (%)"* sin guiar al usuario sobre cuál utilizar para evitar pérdidas.
5. **Fricción comercial:** Inserta banners intrusivos de registro y cuenta (*"Haz tu calculadora más inteligente: Inicia sesión"*), entorpeciendo el trabajo en el taller.

### 1.2 La Solución (Nuestra Propuesta)
Una aplicación web construida en **Next.js (App Router)**, desplegada en **Vercel**, con diseño sensorial cálido y artesanal inspirado en **Cult UI**, **Skipper UI**, **Watermelon UI**, **Motion Primitives** y **Shadcn UI**. El artesano puede calcular el costo exacto y el precio de venta de su vela en **menos de 30 segundos**, con **cero botones de calcular** y **cero pérdidas**.

---

## 2. QUÉ AÑADIR (In Scope)

### 2.1 Motor de Formulación y Finanzas (Basado en `audio-documentacion.ogg` y `solicitud.md`)
- [x] **Costeo Directo de Cera:**
  - Costo por kilo de cera (o paquete) y peso de cera en gramos por vela.
  - Cálculo automático del costo proporcional exacto por gramo.
- [x] **Costeo y Carga de Fragancia (%):**
  - Costo del frasco de esencia comercial y tamaño del frasco (g o ml).
  - Selector/Slider intuitivo de carga de fragancia (rango 4% a 12%, por defecto 8% o 10%).
  - Cálculo instantáneo de los gramos requeridos de esencia y su costo por vela.
- [x] **Costeo de Pabilo / Mecha:**
  - Costo unitario del pabilo con ojalillo metálico y soporte de fijación.
- [x] **Costeo de Contenedor / Envase:**
  - Costo del frasco de vidrio, lata o recipiente cerámico.
- [x] **Costos Indirectos y Ocultos (Cero Pérdidas):**
  - **Empaque individual:** Caja de cartón, bolsa, viruta o papel tissue.
  - **Identidad:** Etiquetas frontales y de advertencia de seguridad.
  - **Servicios:** Luz, gas o electricidad para fundir cera.
  - **Mano de obra / Tiempo:** Tarifa estimada por vela.
  - **Envío y logística:** Flete de insumos prorrateado por pieza.
  - **Comisiones de pasarela de pago:** Porcentaje estimado (ej. 3% a 6% para Stripe, Mercado Pago, terminales).
- [x] **Fijación Financiera por Margen sobre Venta:**
  - Fórmula matemática correcta de margen comercial: $\text{Precio} = \frac{\text{Costo Total}}{1 - \text{Margen}}$.
  - Selector de margen con tramos clave:
    - `35%`: Mínimo de supervivencia (indicado en el audio).
    - `50%`: Margen sostenible / mayorista.
    - `60%`: Margen recomendado para venta directa (retail).
    - `70% - 100%`: Margen premium o alta gama.
- [x] **Resultados Transparentes en Tiempo Real:**
  - Costo total de producción por vela ($).
  - Precio de venta al público sugerido ($).
  - Ganancia neta líquida en dinero por vela ($) y por lote ($).
  - Desglose porcentual visual (gráfico de torta o barra segmentada elegante de costos vs ganancia).

---

### 2.2 Experiencia de Usuario e Interacción (UI / UX de Alta Factura)

#### A. Cult UI (Atmósfera y Alta Factura Visual)
- [ ] **Tarjeta Spotlight con Halo de Llama:**
  - La tarjeta principal de resultados detecta el movimiento del cursor y proyecta un resplandor cálido ámbar (`rgba(245, 158, 11, 0.15)`), simulando la iluminación suave de una vela encendida.
- [ ] **Borde Luminoso en Movimiento (Border Beam):**
  - Destello perimetral animado en la tarjeta de precio sugerido cuando el margen seleccionado supera el 50%.

#### B. Skipper UI (Fluidez Táctil y Ergonomía Móvil)
- [ ] **Barra Resumen Flotante (Floating Command Dock):**
  - Un dock inferior flotante translúcido (`backdrop-blur-lg`) que mantiene el Precio de Venta y la Ganancia Neta siempre a la vista mientras el usuario se desplaza por los campos de costos en pantallas móviles.
- [ ] **Física Elástica en Controles:**
  - Sliders de porcentaje y entradas numéricas con micro-rebote físico al soltar o presionar (`active:scale-95`).

#### C. Watermelon UI (Micro-Delicias y Números Vivos)
- [ ] **Contador Numérico Elástico (Bouncy Number Ticker):**
  - Al modificar los gramos de cera o el porcentaje de esencia, los números del precio no parpadean en seco: ruedan verticalmente con una transición amortiguada.
- [ ] **Insignia de Rentabilidad con Pulso Vivo:**
  - Badge dinámico que pulsa en tiempo real:
    - Rojo/Ámbar: `< 35%` ("Riesgo de pérdida")
    - Amarillo: `35% - 49%` ("Mínimo viable")
    - Verde Esmeralda: `50% - 69%` ("Saludable")
    - Dorado: `>= 70%` ("Margen Premium")
- [ ] **Chispas Sutiles de Éxito:**
  - Micro-ráfaga de destellos dorados al alcanzar una ganancia saludable.

#### D. Motion Primitives (Continuidad Cinemática)
- [ ] **Conmutador de Modo con `layoutId`:**
  - Alternador fluido entre modo *"Por Vela"* (1 pieza) y *"Por Lote"* ($N$ piezas) con pastilla indicadora deslizante orgánica.
- [ ] **Revelación Escalonada (`staggerChildren`):**
  - Animación suave de entrada al cargar la página para cada bloque de insumos.
- [ ] **Acordeones Suaves con Altura Automática:**
  - El panel de costos indirectos se expande y colapsa sin saltos de scroll bruscos.

---

### 2.3 Utilidades y Herramientas Adicionales
- [ ] **Conversor Auxiliar de Volumen a Peso:**
  - Si el usuario solo conoce la capacidad del frasco en mililitros (ml), un botón rápido aplica el factor de densidad $\times 0.86$ para obtener los gramos de cera necesarios.
- [ ] **Copia Rápida de Cotización / Receta:**
  - Botón para copiar al portapapeles un resumen limpio de la receta en texto, ideal para enviar al cliente por WhatsApp o guardar en notas.
- [ ] **Persistencia Local (`localStorage`):**
  - Guarda automáticamente los valores ingresados para que el artesano no pierda su receta al recargar el navegador.
- [ ] **Valores Predeterminados Realistas:**
  - La calculadora abre con un ejemplo completo de vela estándar de vaso (200g cera, 8% esencia, frasco de $25 MXN, cera $150/kg) para entender su uso al primer vistazo.

---

## 3. QUÉ NO AÑADIR (Out of Scope / Anti-Features)

Para evitar la complejidad que arruinó la versión de Blucen, las siguientes funciones quedan **terminantemente excluidas**:

1. ❌ **NO Registro ni Inicio de Sesión Obligatorio:**
   - La calculadora debe ser 100% de acceso libre, instantánea y utilizable sin crear cuentas, correos o contraseñas.
2. ❌ **NO Backend Pesado ni Base de Datos Remota:**
   - No se requiere NestJS, PostgreSQL ni APIs complejas. Toda la lógica se ejecuta en el navegador (cliente) para garantizar respuesta a 60 FPS y costos de hosting $0 en Vercel.
3. ❌ **NO Navegación en Múltiples Pestañas Desconectadas:**
   - Prohibido separar la aplicación en pestañas de "Insumos", "Rendimiento" y "Precios". Todo el flujo vive en una sola interfaz cohesiva con vista previa en vivo.
4. ❌ **NO Botones Manuales de Recálculo:**
   - Prohibido añadir botones de *"Calcular receta"* o *"Calcular precio"*. El cálculo es reactivo e instantáneo en cada pulsación de teclado o movimiento de slider.
5. ❌ **NO Carritos de Compra ni Tienda de Suministros Integrada:**
   - No es un e-commerce para vender ceras o esencias. Es una herramienta pura de costeo para emprendedores y creadores.
6. ❌ **NO Formularios Kilométricos Visibles de Golpe:**
   - Los costos indirectos deben estar agrupados de forma limpia en un desplegable secundario para no abrumar al usuario novato que solo desea costear su cera y esencia rápidamente.
7. ❌ **NO Jerga Financiera Confusa sin Explicación:**
   - No mostrar campos simultáneos de *"Markup"* y *"Margen"* compitiendo entre sí. La interfaz usará siempre Margen sobre Venta con explicaciones pedagógicas claras.

---

## 4. Pila Tecnológica y Arquitectura

- **Framework:** Next.js 14+ (App Router, estricto dentro de `src/`).
- **Despliegue:** Vercel (Edge / Static).
- **Estilos:** Tailwind CSS con tokens sensoriales artesanales.
- **Componentes Base:** Shadcn UI (Radix UI).
- **Animaciones y Micro-interacciones:** Framer Motion / Motion Primitives.
- **Sistemas de Interacción:** Cult UI (Spotlight), Skipper UI (Dock inferior y física de resortes), Watermelon UI (Contador elástico y pulso vivo).
- **Estándar de Nomenclatura del Sistema Agéntico:**
  - Código en **Español Absoluto**.
  - `snake_case` para variables y estados (`costo_cera`, `precio_sugerido`).
  - `camelCase` para métodos y funciones (`calcularCostoUnitario()`).
  - `PascalCase` para Componentes e Interfaces (`CalculadoraVelas`, `PanelResultados`).
  - `kebab-case` para archivos y carpetas (`calculadora-velas.tsx`, `motor-costos.ts`).
  - `UPPER_SNAKE_CASE` para constantes (`MARGEN_MINIMO_BASE = 35`).

---

## 5. Roadmap de Implementación (Fases)

### Fase 1: Motor Matemático y Validación Financiera
- [x] Implementar `src/lib/motor-costos.ts` con tipados en `src/tipos/calculadora.ts`.
- [x] Pruebas unitarias de las fórmulas (densidad 0.86, carga de fragancia 8%, prorrateo indirecto, margen sobre venta al 35%, 50%, 65%).

### Fase 2: Configuración del Proyecto y Sistema de Diseño
- [x] Inicializar proyecto Next.js en el directorio de trabajo con soporte para `src/`.
- [x] Configurar Tailwind con la paleta sensorial (Soja Marfil `#FAF8F5`, Ámbar `#F59E0B`, Carbón `#1C1917`, Esmeralda `#059669`).
- [x] Instalar componentes esenciales de Shadcn UI (Input, Slider, Card, Badge, Accordion, Switch, Tooltip).

### Fase 3: Componentes de Interacción de Alta Factura
- [x] Crear componente `TarjetaSpotlight` (Cult UI) con halo de llama interactivo.
- [x] Crear componente `ContadorAnimado` / Ticker elástico (Watermelon UI).
- [x] Crear componente `BarraFlotanteResumen` (Skipper UI) para móvil y vista persistente.
- [x] Crear pestañas fluidas con `layoutId` (Motion Primitives) para alternar "Por Vela" / "Por Lote".
- [x] Crear componente `BordeLuminoso` (Cult UI) y ráfaga de confeti (Watermelon UI).

### Fase 4: Ensamble del Flujo y Despliegue en Vercel
- [x] Construir la pantalla principal en `src/app/page.tsx` con formulario integrado y reactivo.
- [x] Incorporar el acordeón de costos indirectos (empaque, etiquetas, mano de obra, energía, pasarela).
- [x] Añadir selector de escenarios de margen (35%, 50%, 65%, 80%) y comparador de ganancias.
- [x] Implementar botón de copia rápida de cotización para WhatsApp.
- [x] Añadir persistencia en `localStorage`.
- [x] Probar compilación limpia (`npm run build`) y validar configuración de despliegue para Vercel.
