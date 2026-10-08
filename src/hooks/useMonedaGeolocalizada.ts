'use client';

import * as React from 'react';
import { MonedaLatam, MONEDAS_LATAM, MONEDA_DEFECTO_BOLIVIA } from '@/tipos/moneda';

const CLAVE_STORAGE_MONEDA = 'calculadora_velas_moneda_latam';

const MAPA_ZONA_HORARIA: Record<string, string> = {
  'America/La_Paz': 'BOB',
  'America/Mexico_City': 'MXN',
  'America/Monterrey': 'MXN',
  'America/Bogota': 'COP',
  'America/Lima': 'PEN',
  'America/Santiago': 'CLP',
  'America/Argentina/Buenos_Aires': 'ARS',
  'America/Cordoba': 'ARS',
};

const MAPA_CODIGO_PAIS: Record<string, string> = {
  BO: 'BOB',
  MX: 'MXN',
  CO: 'COP',
  PE: 'PEN',
  CL: 'CLP',
  AR: 'ARS',
};

export function useMonedaGeolocalizada() {
  const [moneda, setMoneda] = React.useState<MonedaLatam>(MONEDA_DEFECTO_BOLIVIA);
  const [cargando, setCargando] = React.useState(true);

  React.useEffect(() => {
    // 1. Verificar preferencia guardada
    try {
      const guardada = localStorage.getItem(CLAVE_STORAGE_MONEDA);
      if (guardada) {
        const encontrada = MONEDAS_LATAM.find((m) => m.codigo === guardada);
        if (encontrada) {
          setMoneda(encontrada);
          setCargando(false);
          return;
        }
      }
    } catch {
      // Ignorar errores en almacenamiento
    }

    // 2. Detección rápida por Zona Horaria
    try {
      const zona = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const codigoMonedaZona = MAPA_ZONA_HORARIA[zona];
      if (codigoMonedaZona) {
        const monedaZona = MONEDAS_LATAM.find((m) => m.codigo === codigoMonedaZona);
        if (monedaZona) {
          setMoneda(monedaZona);
        }
      }
    } catch {
      // Fallback
    }

    // 3. Detección por IP (asíncrona y con timeout de 2 segundos)
    const controladorAbortar = new AbortController();
    const temporizador = setTimeout(() => controladorAbortar.abort(), 2000);

    fetch('https://ipapi.co/json/', { signal: controladorAbortar.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((datos) => {
        if (datos && datos.country_code) {
          const codigoDetectado = MAPA_CODIGO_PAIS[datos.country_code];
          if (codigoDetectado) {
            const monedaEncontrada = MONEDAS_LATAM.find((m) => m.codigo === codigoDetectado);
            if (monedaEncontrada) {
              setMoneda(monedaEncontrada);
            }
          }
        }
      })
      .catch(() => {
        // En caso de bloqueo por adblock o desconexión, se conserva la detectada o Bolivia por defecto
      })
      .finally(() => {
        clearTimeout(temporizador);
        setCargando(false);
      });
  }, []);

  const cambiarMoneda = React.useCallback((nuevaMoneda: MonedaLatam) => {
    setMoneda(nuevaMoneda);
    try {
      localStorage.setItem(CLAVE_STORAGE_MONEDA, nuevaMoneda.codigo);
    } catch {
      // Ignorar
    }
  }, []);

  return {
    moneda,
    cambiarMoneda,
    todasMonedas: MONEDAS_LATAM,
    cargando,
  };
}
