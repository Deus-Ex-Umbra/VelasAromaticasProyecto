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

          // Paleta Verde Botánica y Esmeralda
          verde: {
            50: "#F0FDF4",
            100: "#DCFCE7",
            200: "#BBF7D0",
            300: "#86EFAC",
            400: "#4ADE80",
            500: "#22C55E",
            600: "#16A34A",
            700: "#15803D",
            800: "#166534",
            900: "#14532D",
            950: "#052E16",
          },
          esmeralda: {
            DEFAULT: "#059669",
            claro: "#D1FAE5",
            oscuro: "#064E3B",
            profundo: "#0B1511",
          },
          salvia: {
            DEFAULT: "#059669",
            claro: "#D1FAE5",
            oscuro: "#065F46",
          },
          // Acentos cálidos de llama de vela
          ambar: {
            DEFAULT: "#F59E0B",
            50: "#FFFBEB",
            100: "#FEF3C7",
            200: "#FDE68A",
            300: "#FCD34D",
            400: "#FBBF24",
            500: "#F59E0B",
            600: "#D97706",
            700: "#B45309",
            800: "#92400E",
            900: "#78350F",
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
