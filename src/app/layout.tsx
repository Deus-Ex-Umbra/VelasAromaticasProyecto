import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Calculadora Artesanal de Velas — Costos, Margen y Precio de Venta',
  description:
    'Herramienta de formulación de cera, carga de fragancia y costeo financiero para cereros y artesanos. Sin registros, sin botones y con cero pérdidas.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-artesanal-soja text-artesanal-carbon selection:bg-artesanal-ambar-200 selection:text-artesanal-ambar-900">
        {children}
      </body>
    </html>
  );
}
