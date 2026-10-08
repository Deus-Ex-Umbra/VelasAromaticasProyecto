import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        artesanal: {
          // Fondos principales
          fondo: "var(--color-fondo)",
          tarjeta: "var(--color-tarjeta)",
          borde: "var(--color-borde)",
          carbon: "var(--color-texto-principal)",
          piedra: "var(--color-texto-secundario)",

          // Paleta Cálida Artesanal de Velas: Cera de Soja, Abejas, Miel y Llama Ámbar
          ambar: {
            DEFAULT: "#F59E0B",
            50: "#FFFDF5",
            100: "#FEF7DA",
            200: "#FDEAA8",
            300: "#FCDA72",
            400: "#FBBF24",
            500: "#F59E0B",
            600: "#D97706",
            700: "#B45309",
            800: "#92400E",
            900: "#78350F",
            950: "#451A03",
          },
          miel: {
            claro: "#FEF3C7",
            DEFAULT: "#D97706",
            oscuro: "#92400E",
          },
          cera: {
            soja: "#FAF8F5",
            marfil: "#FDFBF7",
            tostada: "#332A22",
            nocturna: "#14110E",
          },
          // Redirigir cualquier clase secundaria a tonos cálidos de vela
          verde: {
            50: "#FFFDF5",
            100: "#FEF7DA",
            200: "#FDEAA8",
            300: "#FCDA72",
            400: "#FBBF24",
            500: "#F59E0B",
            600: "#D97706",
            700: "#B45309",
            800: "#92400E",
            900: "#78350F",
            950: "#451A03",
          },
          salvia: {
            DEFAULT: "#D97706",
            claro: "#FEF7DA",
            oscuro: "#92400E",
          },
          esmeralda: {
            DEFAULT: "#D97706",
            claro: "#FEF7DA",
            oscuro: "#78350F",
            profundo: "#14110E",
          },
        },
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "border-beam": "border-beam calc(var(--duracion, 10)*1s) infinite linear",
        "pulso-suave": "pulso-suave 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "llama-titilante": "llama-titilante 3s ease-in-out infinite alternate",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "pulso-suave": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        "llama-titilante": {
          "0%": { opacity: "0.9", transform: "scale(0.99)" },
          "100%": { opacity: "1", transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
