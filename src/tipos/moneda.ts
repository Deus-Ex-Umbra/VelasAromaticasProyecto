import { CodigoPaisLatam } from '@/components/ui/bandera-pais';

export interface MonedaLatam {
  codigo: string;          // Ej: BOB, MXN, COP, PEN, ARS, CLP, USD
  codigoPais: CodigoPaisLatam;
  simbolo: string;         // Ej: Bs, $, S/
  nombre: string;          // Ej: Boliviano, Peso Mexicano
  pais: string;            // Ej: Bolivia, México
  locale: string;          // es-BO, es-MX, etc.
}

export const MONEDAS_LATAM: MonedaLatam[] = [
  {
    codigo: 'BOB',
    codigoPais: 'BO',
    simbolo: 'Bs',
    nombre: 'Boliviano',
    pais: 'Bolivia',
    locale: 'es-BO',
  },
  {
    codigo: 'MXN',
    codigoPais: 'MX',
    simbolo: '$',
    nombre: 'Peso Mexicano',
    pais: 'México',
    locale: 'es-MX',
  },
  {
    codigo: 'COP',
    codigoPais: 'CO',
    simbolo: '$',
    nombre: 'Peso Colombiano',
    pais: 'Colombia',
    locale: 'es-CO',
  },
  {
    codigo: 'PEN',
    codigoPais: 'PE',
    simbolo: 'S/',
    nombre: 'Sol Peruano',
    pais: 'Perú',
    locale: 'es-PE',
  },
  {
    codigo: 'CLP',
    codigoPais: 'CL',
    simbolo: '$',
    nombre: 'Peso Chileno',
    pais: 'Chile',
    locale: 'es-CL',
  },
  {
    codigo: 'ARS',
    codigoPais: 'AR',
    simbolo: '$',
    nombre: 'Peso Argentino',
    pais: 'Argentina',
    locale: 'es-AR',
  },
  {
    codigo: 'USD',
    codigoPais: 'USD',
    simbolo: '$',
    nombre: 'Dólar Estadounidense',
    pais: 'Internacional / LATAM',
    locale: 'en-US',
  },
];

export const MONEDA_DEFECTO_BOLIVIA: MonedaLatam = MONEDAS_LATAM[0];
