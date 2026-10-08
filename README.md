# 🕯️ Calculadora Artesanal de Velas Aromáticas

> Herramienta moderna de formulación química, balance de esencias y costeo financiero unitario y por lote para artesanos cereros. Creado con diseño sensorial de alta factura, reactividad en tiempo real y cero pérdidas.

Hecho con dedicación por **[Deus Ex Umbra](https://github.com/Deus-Ex-Umbra)**.

---

## ✨ Características Principales

- ⚖️ **Formulación Química Precisa:**
  - Cálculo de masa real de cera considerando la densidad relativa (\~0.86 g/ml).
  - Dosificación de esencia en porcentaje sobre cera pura para máxima compatibilidad olfativa.
  - Prevención de desbordes en el curado del envase.

- 💰 **Ingeniería Financiera y Margen Real:**
  - Desglose exhaustivo de costos directos (cera, esencia, envase, mecha) e indirectos (empaque, etiquetas, mano de obra, energía, comisión de pasarelas).
  - Cálculo de precio basado en **Margen sobre Venta**:
    $$\text{Precio} = \frac{\text{Costo Total}}{1 - \text{Margen}}$$
  - Selector de escenarios de margen (35% Artesanal, 50% Recomendado, 65% Premium, 80% Lujo).

- 🎨 **Diseño Sensorial de Alta Factura (High-Craft):**
  - **Cult UI:** Tarjetas Spotlight con seguimiento de cursor y bordes luminosos animados.
  - **Skipper UI:** Barra flotante inferior para dispositivos móviles y micro-interacciones táctiles.
  - **Watermelon UI:** Contadores numéricos elásticos y ráfaga de confeti al alcanzar metas óptimas.
  - **Skiper4 Spring Switch:** Conmutador interactivo de tema claro (Soja Marfil) y oscuro (Cera Nocturna / Esmeralda Botánico).
  - **Motion Primitives:** Transiciones suaves de diseño con físicas naturales.

- 🌎 **Localización para Latinoamérica:**
  - Detección automática de país y moneda según zona horaria e IP.
  - Selector manual con banderas vectoriales SVG reales para toda la región (Bolivia, Argentina, Chile, Colombia, México, Perú, etc.).
  - Configuración predeterminada adaptada al mercado boliviano (Bs).

- 🧭 **Tour Guiado Interactivo:**
  - Recorrido paso a paso integrado con **Driver.js** para familiarizar al usuario en 8 etapas clave.

- 📲 **Exportación Directa a WhatsApp:**
  - Generación instantánea de cotizaciones comerciales formateadas con un solo clic.

---

## 🛠️ Tecnologías

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes Base:** [Shadcn UI](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) / Motion Primitives
- **Efectos y Delicias:** `canvas-confetti`, `driver.js`, `lucide-react`

---

## 🚀 Comandos de Ejecución

El proyecto está configurado de forma predeterminada para operar en el puerto **`9998`**:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en http://localhost:9998
npm run iniciar:desarrollo

# Compilar proyecto optimizado para producción
npm run compilar

# Servir versión compilada de producción en el puerto 9998
npm run iniciar:produccion
```

---

## 👤 Autor

Desarrollado por **Deus Ex Umbra**:
- **GitHub:** [https://github.com/Deus-Ex-Umbra](https://github.com/Deus-Ex-Umbra)
- **Repositorio:** [https://github.com/Deus-Ex-Umbra/VelasAromaticasProyecto](https://github.com/Deus-Ex-Umbra/VelasAromaticasProyecto)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
