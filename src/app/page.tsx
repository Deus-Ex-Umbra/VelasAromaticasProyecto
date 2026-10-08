'use client';

import * as React from 'react';
import { useCalculadoraVelas } from '@/hooks/useCalculadoraVelas';
import { useMonedaGeolocalizada } from '@/hooks/useMonedaGeolocalizada';
import { FormularioInsumos } from '@/components/calculadora/formulario-insumos';
import { AcordeonIndirectos } from '@/components/calculadora/acordeon-indirectos';
import { SelectorMargen } from '@/components/calculadora/selector-margen';
import { DesgloseGrafico } from '@/components/calculadora/desglose-grafico';
import { ModalCopiaReceta } from '@/components/calculadora/modal-copia-receta';
import { TarjetaSpotlight } from '@/components/artesanal/tarjeta-spotlight';
import { BordeLuminoso } from '@/components/artesanal/borde-luminoso';
import { ContadorAnimado } from '@/components/artesanal/contador-animado';
import { BarraFlotanteResumen } from '@/components/artesanal/barra-flotante-resumen';
import { SelectorModo, ModoCalculo } from '@/components/artesanal/selector-modo';
import { SelectorMonedaLatam } from '@/components/artesanal/selector-moneda-latam';
import { ConmutadorTemaSkiper4 } from '@/components/artesanal/conmutador-tema-skiper4';
import { ControlPaso } from '@/components/ui/control-paso';
import { MarcaAguaAutor } from '@/components/artesanal/marca-agua-autor';
import { TutorialDriver } from '@/components/artesanal/tutorial-driver';
import { formatearMoneda } from '@/lib/motor-costos';
import { Flame, TrendingUp, DollarSign, RotateCcw } from 'lucide-react';

export default function PaginaPrincipal() {
  const {
    insumos,
    indirectos,
    configuracion,
    resultado,
    actualizarInsumo,
    actualizarIndirecto,
    actualizarConfiguracion,
    aplicarConversionVolumen,
    restablecerValoresPorDefecto,
  } = useCalculadoraVelas();

  const { moneda, cambiarMoneda } = useMonedaGeolocalizada();
  const [modo, setModo] = React.useState<ModoCalculo>('vela');
  const esLote = modo === 'lote';

  const precioMostrado = esLote
    ? resultado.precio_venta_sugerido * configuracion.cantidad_lote
    : resultado.precio_venta_sugerido;

  const gananciaMostrada = esLote
    ? resultado.ganancia_total_lote
    : resultado.ganancia_neta_unitaria;

  const costoMostrado = esLote
    ? resultado.costo_total_lote
    : resultado.costo_total_unitario;

  const manejarCopiarDirecto = () => {
    const texto = `🕯️ Cotización Vela: Precio ${formatearMoneda(precioMostrado, moneda.simbolo, moneda.locale)} | Ganancia: ${formatearMoneda(gananciaMostrada, moneda.simbolo, moneda.locale)} (${configuracion.margen_beneficio_porcentaje}% margen).`;
    navigator.clipboard?.writeText(texto);
  };

  return (
    <main className="min-h-screen pb-24 md:pb-16 pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* CABECERA ARTESANAL DE VELAS Y CERA */}
      <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-artesanal-borde pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-artesanal-ambar-600 text-white shadow-sm">
              <Flame className="h-4 w-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-artesanal-ambar-700 dark:text-artesanal-ambar-300">
              Taller de Cerería Artesanal • Cera, Esencia & Llama
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-artesanal-carbon tracking-tight">
            Calculadora de Costos, Formulación y Precios
          </h1>
          <p className="text-xs sm:text-sm text-artesanal-piedra mt-1">
            Reactividad instantánea a 60 FPS • Sin registros • Margen comercial exacto sobre venta
          </p>
        </div>

        {/* CONTROLES SUPERIORES: SELECTOR DE MONEDA LATAM, BOTÓN DE TEMA SKIPER4 Y RESTABLECER */}
        <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
          {/* Selector de Moneda de Latinoamérica con autodetección por IP */}
          <SelectorMonedaLatam
            monedaActual={moneda}
            alCambiarMoneda={cambiarMoneda}
          />

          {/* Botón de tema claro / oscuro (Skiper4) */}
          <ConmutadorTemaSkiper4 />

          {/* Tutorial guiado paso a paso con Driver.js */}
          <TutorialDriver />

          {/* Botón para limpiar campos */}
          <button
            type="button"
            onClick={restablecerValoresPorDefecto}
            title="Limpiar todos los campos"
            className="flex items-center gap-1.5 rounded-full border border-artesanal-borde bg-artesanal-tarjeta px-3 py-1.5 text-xs font-semibold text-artesanal-piedra hover:text-artesanal-carbon hover:border-artesanal-ambar-500 shadow-xs transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Limpiar</span>
          </button>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL: PANEL DUAL COHESIVO 60 / 40 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* COLUMNA IZQUIERDA (60%): FORMULARIOS DE INSUMOS E INDIRECTOS */}
        <section className="lg:col-span-7 space-y-6">
          {/* Bloque 1: Insumos directos de la receta */}
          <FormularioInsumos
            insumos={insumos}
            resultado={resultado}
            alCambiarInsumo={actualizarInsumo}
            alConvertirVolumen={aplicarConversionVolumen}
            monedaSimbolo={moneda.simbolo}
            monedaLocale={moneda.locale}
          />

          {/* Bloque 2: Costos indirectos y ocultos (prevención de pérdidas) */}
          <AcordeonIndirectos
            indirectos={indirectos}
            resultado={resultado}
            alCambiarIndirecto={actualizarIndirecto}
            monedaSimbolo={moneda.simbolo}
            monedaLocale={moneda.locale}
          />

          {/* Bloque 3: Selector interactivo de margen comercial */}
          <div className="rounded-3xl border border-artesanal-borde bg-artesanal-tarjeta backdrop-blur-sm p-6 shadow-sm">
            <SelectorMargen
              margenActual={configuracion.margen_beneficio_porcentaje}
              alCambiarMargen={(nuevoMargen) =>
                actualizarConfiguracion('margen_beneficio_porcentaje', nuevoMargen)
              }
            />
          </div>
        </section>

        {/* COLUMNA DERECHA (40%): TARJETA SPOTLIGHT STICKY CON RESULTADOS EN VIVO */}
        <aside className="lg:col-span-5 lg:sticky lg:top-8 space-y-5">
          {/* Selector de Modo: Por Vela vs Por Lote */}
          <SelectorModo
            modo={modo}
            alCambiarModo={setModo}
            cantidadLote={configuracion.cantidad_lote}
          />

          {esLote && (
            <div className="rounded-2xl bg-artesanal-ambar-50/70 dark:bg-artesanal-ambar-950/40 border border-artesanal-ambar-200/70 dark:border-artesanal-ambar-900 p-3.5 space-y-1">
              <ControlPaso
                etiqueta="Cantidad de velas a producir en este lote"
                valor={configuracion.cantidad_lote}
                alCambiar={(nuevaCantidad) =>
                  actualizarConfiguracion('cantidad_lote', Math.max(1, nuevaCantidad))
                }
                min={2}
                max={1000}
                paso={1}
                sufijo="piezas"
              />
            </div>
          )}

          {/* TARJETA SPOTLIGHT CON REFLECTOR DE CURSOR (Cult UI) */}
          <TarjetaSpotlight id="tutorial-resultados" className="relative">
            {/* Si el margen es saludable (>=50%), añade Borde Luminoso de Llama Cálida */}
            {configuracion.margen_beneficio_porcentaje >= 50 && (
              <BordeLuminoso duracion={8} colorDesde="#F59E0B" colorHasta="#FCD34D" />
            )}

            <div className="space-y-6">
              {/* Etiqueta y Título de Precio */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-artesanal-piedra mb-1">
                  <span>{esLote ? `Precio Sugerido del Lote (${configuracion.cantidad_lote}u)` : 'Precio de Venta Sugerido'}</span>
                  <span className="rounded-full bg-artesanal-ambar-100 text-artesanal-ambar-900 dark:bg-artesanal-ambar-950 dark:text-artesanal-ambar-200 px-2.5 py-0.5 font-bold">
                    Margen {configuracion.margen_beneficio_porcentaje}%
                  </span>
                </div>
                {/* Contador Elástico Watermelon UI */}
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-artesanal-carbon tracking-tight">
                  <ContadorAnimado valor={precioMostrado} moneda={moneda.simbolo} decimales={2} />
                </div>
                <p className="text-[11px] text-artesanal-piedra mt-1">
                  {esLote
                    ? `Equivale a ${formatearMoneda(resultado.precio_venta_sugerido, moneda.simbolo, moneda.locale)} por vela individual`
                    : 'Precio recomendado al cliente final sin sacrificar tu ganancia neta'}
                </p>
              </div>

              {/* Métricas clave en cuadrícula */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-artesanal-borde">
                <div className="rounded-2xl bg-artesanal-ambar-50/80 dark:bg-artesanal-ambar-950/50 p-3.5 border border-artesanal-ambar-200 dark:border-artesanal-ambar-900">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-artesanal-ambar-800 dark:text-artesanal-ambar-300 uppercase tracking-wider">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>Ganancia Neta</span>
                  </div>
                  <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-artesanal-ambar-700 dark:text-artesanal-ambar-300">
                    <ContadorAnimado valor={gananciaMostrada} moneda={moneda.simbolo} />
                  </div>
                  <span className="text-[10px] text-artesanal-ambar-700 dark:text-artesanal-ambar-400 font-medium">
                    {esLote ? 'Líquido por el lote' : 'Líquido por cada vela'}
                  </span>
                </div>

                <div className="rounded-2xl bg-artesanal-borde/20 p-3.5 border border-artesanal-borde">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-artesanal-piedra uppercase tracking-wider">
                    <DollarSign className="h-3.5 w-3.5" />
                    <span>Costo Total</span>
                  </div>
                  <div className="mt-1 font-mono text-xl sm:text-2xl font-bold text-artesanal-carbon">
                    <ContadorAnimado valor={costoMostrado} moneda={moneda.simbolo} />
                  </div>
                  <span className="text-[10px] text-artesanal-piedra font-medium">
                    {esLote ? `Para ${configuracion.cantidad_lote} velas` : 'Insumos + Indirectos'}
                  </span>
                </div>
              </div>

              {/* Desglose gráfico segmentado */}
              <DesgloseGrafico
                resultado={resultado}
                monedaSimbolo={moneda.simbolo}
                monedaLocale={moneda.locale}
              />

              {/* Botón de copiar cotización limpia */}
              <div className="pt-2 border-t border-artesanal-borde">
                <ModalCopiaReceta
                  insumos={insumos}
                  indirectos={indirectos}
                  configuracion={configuracion}
                  resultado={resultado}
                  esLote={esLote}
                  monedaSimbolo={moneda.simbolo}
                  monedaLocale={moneda.locale}
                />
              </div>
            </div>
          </TarjetaSpotlight>
        </aside>
      </div>

      {/* PIE DE PÁGINA CON CRÉDITOS Y MARCA DEL AUTOR */}
      <footer className="mt-16 pt-8 border-t border-artesanal-borde flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-artesanal-piedra">
        <p>
          Calculadora Artesanal de Velas • Formulación exacta y cero pérdidas
        </p>
        <div className="flex items-center gap-3">
          <span className="text-[11px]">Creado por:</span>
          <MarcaAguaAutor flotante={false} />
        </div>
      </footer>

      {/* DOCK FLOTANTE TRANSLÚCIDO PARA MÓVILES (Skipper UI) */}
      <BarraFlotanteResumen
        precioVenta={precioMostrado}
        gananciaNeta={gananciaMostrada}
        margen={configuracion.margen_beneficio_porcentaje}
        esLote={esLote}
        cantidadLote={configuracion.cantidad_lote}
        monedaSimbolo={moneda.simbolo}
        onCopiar={manejarCopiarDirecto}
      />
    </main>
  );
}
