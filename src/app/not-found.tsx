import Link from 'next/link';

export default function PaginaNoEncontrada() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-artesanal-soja text-artesanal-carbon">
      <h2 className="text-2xl font-serif font-bold text-artesanal-verde-800 dark:text-artesanal-verde-200">
        Página no encontrada
      </h2>
      <p className="mt-2 text-sm text-artesanal-piedra">
        No pudimos encontrar la página solicitada en la Calculadora de Velas.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-xl bg-artesanal-verde-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-artesanal-verde-700 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
