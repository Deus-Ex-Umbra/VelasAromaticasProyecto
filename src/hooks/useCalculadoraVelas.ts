'use client';

import * as React from 'react';
import {
  InsumosDirectos,
  CostosIndirectos,
  ConfiguracionVela,
  ResultadoFinanciero,
} from '@/tipos/calculadora';
import {
  VALORES_DEFECTO_INSUMOS,
  VALORES_DEFECTO_INDIRECTOS,
  VALORES_DEFECTO_CONFIGURACION,
  calcularResultadoFinanciero,
  calcularPesoCeraDesdeVolumen,
} from '@/lib/motor-costos';
import { dispararRafagaCelebracion } from '@/components/artesanal/rafaga-celebracion';

const CLAVE_ALMACENAMIENTO_LOCAL = 'calculadora_velas_artesanal_v1';

export function useCalculadoraVelas() {
  const [insumos, setInsumos] = React.useState<InsumosDirectos>(VALORES_DEFECTO_INSUMOS);
  const [indirectos, setIndirectos] = React.useState<CostosIndirectos>(VALORES_DEFECTO_INDIRECTOS);
  const [configuracion, setConfiguracion] = React.useState<ConfiguracionVela>(VALORES_DEFECTO_CONFIGURACION);
  const [inicializado, setInicializado] = React.useState(false);

  // Carga inicial desde localStorage
  React.useEffect(() => {
    try {
      const guardado = localStorage.getItem(CLAVE_ALMACENAMIENTO_LOCAL);
      if (guardado) {
        const datos = JSON.parse(guardado);
        if (datos.insumos) setInsumos(datos.insumos);
        if (datos.indirectos) setIndirectos(datos.indirectos);
        if (datos.configuracion) setConfiguracion(datos.configuracion);
      }
    } catch {
      // Ignorar errores de parseo en navegador
    } finally {
      setInicializado(true);
    }
  }, []);

  // Persistencia automática tras cualquier cambio
  React.useEffect(() => {
    if (!inicializado) return;
    try {
      localStorage.setItem(
        CLAVE_ALMACENAMIENTO_LOCAL,
        JSON.stringify({ insumos, indirectos, configuracion })
      );
    } catch {
      // Manejar cuota de localStorage si fuera necesario
    }
  }, [insumos, indirectos, configuracion, inicializado]);

  // Cálculo reactivo continuo (60 FPS con memoización)
  const resultado: ResultadoFinanciero = React.useMemo(() => {
    return calcularResultadoFinanciero(insumos, indirectos, configuracion);
  }, [insumos, indirectos, configuracion]);

  // Actualizadores atómicos
  const actualizarInsumo = React.useCallback(
    <K extends keyof InsumosDirectos>(campo: K, valor: InsumosDirectos[K]) => {
      setInsumos((previo) => ({ ...previo, [campo]: valor }));
    },
    []
  );

  const actualizarIndirecto = React.useCallback(
    <K extends keyof CostosIndirectos>(campo: K, valor: CostosIndirectos[K]) => {
      setIndirectos((previo) => ({ ...previo, [campo]: valor }));
    },
    []
  );

  const actualizarConfiguracion = React.useCallback(
    <K extends keyof ConfiguracionVela>(campo: K, valor: ConfiguracionVela[K]) => {
      setConfiguracion((previo) => {
        const nuevo = { ...previo, [campo]: valor };
        // Si el usuario sube a margen saludable o premium, dispara confeti
        if (
          campo === 'margen_beneficio_porcentaje' &&
          typeof valor === 'number' &&
          valor >= 60 &&
          previo.margen_beneficio_porcentaje < 60
        ) {
          dispararRafagaCelebracion();
        }
        return nuevo;
      });
    },
    []
  );

  // Conversión auxiliar de volumen de frasco a gramos de cera
  const aplicarConversionVolumen = React.useCallback((volumen_ml: number) => {
    const gramos_calculados = calcularPesoCeraDesdeVolumen(volumen_ml);
    setInsumos((previo) => ({
      ...previo,
      gramos_cera_por_vela: gramos_calculados,
    }));
    setConfiguracion((previo) => ({
      ...previo,
      volumen_contenedor_ml: volumen_ml,
    }));
  }, []);

  // Restablecer a valores de fábrica del taller
  const restablecerValoresPorDefecto = React.useCallback(() => {
    setInsumos(VALORES_DEFECTO_INSUMOS);
    setIndirectos(VALORES_DEFECTO_INDIRECTOS);
    setConfiguracion(VALORES_DEFECTO_CONFIGURACION);
    try {
      localStorage.removeItem(CLAVE_ALMACENAMIENTO_LOCAL);
    } catch {
      // Ignorar
    }
  }, []);

  return {
    insumos,
    indirectos,
    configuracion,
    resultado,
    actualizarInsumo,
    actualizarIndirecto,
    actualizarConfiguracion,
    aplicarConversionVolumen,
    restablecerValoresPorDefecto,
  };
}
