# Plan de Implementación: Calculadora Artesanal de Velas

**Fecha:** 2026-10-08  
**Ruta del archivo:** `docs/superpowers/plans/2026-10-08-calculadora-velas-artesanal-plan.md`  
**Diseño de referencia:** `docs/superpowers/specs/2026-10-08-calculadora-velas-artesanal-design.md`  

---

## Tareas de Implementación

### Tarea 1: Inicialización y Configuración de Next.js 14+ y Tailwind CSS
- [x] Configurar `package.json` con Next.js 14+, React 18/19, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Canvas Confetti.
- [x] Configurar `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs` y `tailwind.config.ts` con la paleta sensorial artesanal (Soja `#FAF8F5`, Ámbar `#F59E0B`, Carbón `#1C1917`, Esmeralda `#059669`).
- [x] Instalar dependencias mediante `npm install`.
- [x] Crear estructura de directorios en `src/` (`app/`, `components/`, `hooks/`, `lib/`, `tipos/`).
- **Verificación:** Ejecutar verificación de instalación de módulos y validación de tipos básicos.

### Tarea 2: Tipos y Motor Matemático Financiero (`motor-costos.ts`)
- [x] Crear `src/tipos/calculadora.ts` con interfaces completas en español (`InsumosDirectos`, `CostosIndirectos`, `ConfiguracionVela`, `ResultadoFinanciero`, `TramoMargen`).
- [x] Crear `src/lib/motor-costos.ts` implementando las fórmulas de:
  - Conversión de volumen ml a peso de cera (factor $0.86$).
  - Gramos de esencia según porcentaje ($4\% - 12\%$) sobre la cera base.
  - Costeo unitario de insumos directos (cera, fragancia, pabilo, contenedor).
  - Costos indirectos (empaque, etiquetas, servicios, mano de obra, merma, pasarela).
  - Precio de venta sugerido mediante **Margen sobre Venta**: $\text{Precio} = \frac{\text{Costo Total}}{1 - \text{Margen}}$.
  - Ganancia líquida unitaria y por lote.
- [x] Crear script de verificación matemática rápida y ejecutarlo para comprobar exactitud.
- **Verificación:** Ejecutar script de prueba y validar que con 200g cera, 8% fragancia, frasco $25, cera $150/kg, el costo y precio con margen del 50% correspondan exactamente.

### Tarea 3: Primitivas y Componentes de Alta Factura (Cult, Skipper, Watermelon, Motion)
- [x] Implementar `src/lib/utils.ts` con función `cn()` (`clsx` + `tailwind-merge`).
- [x] Crear primitivas de UI en `src/components/ui/` (`card.tsx`, `input.tsx`, `slider.tsx`, `badge.tsx`, `accordion.tsx`, `switch.tsx`).
- [x] Crear componentes de alta factura en `src/components/artesanal/`:
  - `tarjeta-spotlight.tsx` (Cult UI): Luz radial ámbar siguiendo el cursor del ratón.
  - `borde-luminoso.tsx` (Cult UI): Destello perimetral animado cuando el margen >= 50%.
  - `contador-animado.tsx` (Watermelon UI): Números saltantes elásticos con `framer-motion`.
  - `insignia-margen-viva.tsx` (Watermelon UI): Pulso en tiempo real con colores según el tramo financiero.
  - `barra-flotante-resumen.tsx` (Skipper UI): Dock flotante translúcido inferior con precio y ganancia.
  - `selector-modo.tsx` (Motion Primitives): Alternador "Por Vela" / "Por Lote" con pastilla deslizante `layoutId`.
  - `rafaga-celebracion.tsx` (Watermelon UI): Partículas doradas al alcanzar tramos recomendados.
- **Verificación:** Revisar que todos los componentes exporten tipos correctos y cumplan con las reglas de español absoluto y naming conventions.

### Tarea 4: Módulos del Formulario y Lógica de Negocio Reactiva
- [x] Crear hook `src/hooks/useCalculadoraVelas.ts`:
  - Manejo de estados de insumos directos e indirectos.
  - Reactividad instantánea en cada cambio (cero botones de calcular).
  - Persistencia automática en `localStorage`.
  - Función de restablecer valores a los valores artesanos recomendados.
- [x] Crear componentes en `src/components/calculadora/`:
  - `formulario-insumos.tsx`: Bloque de Cera (con botón conversor ml $\to$ g), Fragancia con slider dinámico, Mecha y Envase.
  - `acordeon-indirectos.tsx`: Desplegable suave para costos ocultos (empaque, etiquetas, servicios, tiempo, flete/merma, comisión).
  - `selector-margen.tsx`: Tramos predefinidos (35% supervivencia, 50% mayorista, 65% saludable, 80% premium) y control deslizante.
  - `desglose-grafico.tsx`: Barra segmentada que ilustra la proporción de costos vs ganancia neta.
  - `modal-copia-receta.tsx`: Botón para copiar el desglose limpio al portapapeles para WhatsApp o notas.
- **Verificación:** Validar la interactividad y la respuesta fluida ante cambios en los controles.

### Tarea 5: Ensamble del Dashboard en `src/app/page.tsx` y Verificación Final
- [x] Configurar `src/app/layout.tsx` con metadatos, fuentes y estructura base.
- [x] Configurar `src/app/globals.css` con estilos de luz ambiental cálida.
- [x] Montar la página principal `src/app/page.tsx` con el Layout Dual Cohesivo (60% formulario, 40% panel sticky de resultados + dock flotante).
- [x] Ejecutar compilación de producción con `npm run build`.
- [x] Verificar que no existan errores de tipos, problemas de hidratación o advertencias.
- **Verificación:** Ejecutar `npm run build` y confirmar salida exitosa sin errores.
