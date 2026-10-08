---
name: calculadora-velas
description: Fórmulas de formulación química, física de ceras, cálculo de carga de fragancia y costeo financiero unitario y por lote para velas aromáticas artesanales y comerciales.
---

# Formulación Química y Finanzas de Velas Aromáticas

Esta guía canónica establece las fórmulas matemáticas y principios de producción para calcular con precisión exacta los insumos, costos directos, costos indirectos, márgenes y precios de venta de velas aromáticas artesanales, garantizando rentabilidad y cero pérdidas.

---

## 1. Principios de Formulación y Rendimiento

### 1.1 Densidad y Capacidad del Contenedor
La cera en estado líquido y sólido tiene una densidad menor que el agua:
- **Factor de densidad promedio ($\rho$):** Entre `0.86` y `0.90` (valor canónico estándar: `0.86`).
- **Conversión de volumen (ml) a masa (g):**
  $$\text{peso\_cera\_base} (\text{g}) = \text{volumen\_contenedor} (\text{ml}) \times 0.86$$

### 1.2 Carga de Fragancia (Fragrance Load)
El porcentaje de esencia aromática ($L_{\%}$) se calcula sobre el peso de la cera base (práctica estándar de cerería):
- **Rango seguro estándar:** Entre `6%` y `10%` (mínimo `4%` para aromas sutiles, máximo técnico `12%` según la cera para evitar sudoración de aceite).
- **Gramos de fragancia por vela:**
  $$\text{gramos\_esencia} = \text{gramos\_cera} \times \left(\frac{\text{porcentaje\_esencia}}{100}\right)$$
- **Peso total del producto terminado:**
  $$\text{peso\_total} = \text{gramos\_cera} + \text{gramos\_esencia}$$

---

## 2. Costeo de Insumos Directos

### 2.1 Costo de Cera
Calculado en base al precio de adquisición por kilogramo (o paquete):
$$\text{costo\_unitario\_cera} = \left(\frac{\text{precio\_kilo\_cera}}{1000}\right) \times \text{gramos\_cera\_por\_vela}$$

### 2.2 Costo de Fragancia
Calculado en base al costo del frasco de esencia comercial y su contenido neto:
$$\text{costo\_por\_gramo\_esencia} = \frac{\text{precio\_frasco\_esencia}}{\text{gramos\_frasco\_esencia}}$$
$$\text{costo\_unitario\_esencia} = \text{costo\_por\_gramo\_esencia} \times \text{gramos\_esencia\_por\_vela}$$

### 2.3 Costo de Pabilo / Mecha
- Costo por pieza individual (o costo del paquete / número de unidades).
- Incluye el ojalillo metálico y pegamento/adhesivo de fijación.

### 2.4 Costo de Contenedor / Envase
- Costo unitario del vaso de vidrio, lata de aluminio, frasco ámbar o cerámica.

### 2.5 Subtotal de Costos Directos
$$\text{costo\_directo\_unitario} = \text{costo\_cera} + \text{costo\_esencia} + \text{costo\_pabilo} + \text{costo\_contenedor}$$

---

## 3. Costos Indirectos y Ocultos (Prevención de Pérdidas)

El error más común en la cerería artesanal es omitir los costos de empaque, suministros y tiempo. Para asegurar viabilidad comercial:

1. **Empaque y Acabados Unitarios:**
   - Etiqueta frontal y de advertencia / seguridad.
   - Caja individual de cartón o bolsa de tela.
   - Listón, sello de cera, viruta protectora o papel tissue.
2. **Costos Operativos Prorrateados:**
   - Electricidad, gas o energía para fundidor de cera.
   - Envío de insumos prorrateado por vela.
   - Merma técnica de vertido (se recomienda un factor de seguridad del `2%` al `3%`).
3. **Mano de Obra y Tiempo:**
   - Tarifa horaria del artesano multiplicada por el tiempo de vertido, curado, etiquetado y limpieza, dividido entre el tamaño del lote.
4. **Comisiones de Pasarela / Ventas:**
   - Si se vende por plataformas (Stripe, Mercado Pago, Shopify, ferias), considerar entre `3%` y `7%` de comisión variable sobre el precio final.

$$\text{costo\_indirecto\_unitario} = \text{empaque} + \text{etiquetas} + \text{servicios} + \text{mano\_obra} + \text{merma}$$
$$\text{costo\_total\_unitario} = \text{costo\_directo\_unitario} + \text{costo\_indirecto\_unitario}$$

---

## 4. Margen de Beneficio y Fijación de Precios

### 4.1 Margen Comercial sobre Venta (Fórmula Financiera Correcta)
El porcentaje de margen deseado representa la porción del precio final que es ganancia neta:
$$\text{precio\_venta} = \frac{\text{costo\_total\_unitario}}{1 - \left(\frac{\text{margen\_porcentaje}}{100}\right)}$$

> **Nota Crítica de Negocio:** Un recargo ("markup") del 50% sobre el costo equivale solo a un margen comercial real del 33.3%. La calculadora debe usar la fórmula de margen sobre venta para que el usuario nunca quede corto.

### 4.2 Tramos de Rentabilidad Recomendados
- **Margen Mínimo de Supervivencia:** `35%` (Umbral base estipulado en la documentación).
- **Margen Sostenible / Mayorista:** `50%` (Permite absorber distribuidores o imprevistos).
- **Margen Saludable para Retail:** `60% - 65%` (Recomendado para venta directa al consumidor final).
- **Margen Premium / Boutiques:** `70% - 85%` (Para marcas de alta perfumería artesanal con packaging de lujo).

### 4.3 Ganancia Neta por Vela y por Lote
$$\text{ganancia\_unitaria} = \text{precio\_venta} - \text{costo\_total\_unitario}$$
$$\text{ganancia\_total\_lote} = \text{ganancia\_unitaria} \times \text{cantidad\_velas}$$

---

## 5. Reglas de Implementación en Código

1. **Variables y Atributos:** Estrictamente en `snake_case` (`costo_cera_unitario`, `precio_venta_sugerido`, `margen_beneficio`).
2. **Funciones de Cálculo:** En `camelCase` puro (`calcularCostoTotal()`, `calcularPrecioSugerido()`, `calcularProporcionFragancia()`).
3. **Reactividad Total:** El usuario nunca debe presionar un botón para calcular. Los resultados deben recalcularse en cada cambio de input (`onChange`) a 60 FPS con estados locales fluidos.
4. **Formato Monetario:** Formatear siempre con 2 decimales y símbolo monetario localizado (ej. `$145.50 MXN`).
