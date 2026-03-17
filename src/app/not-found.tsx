import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Pagina nao encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            A pagina que voce procura nao existe ou foi movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Voltar ao inicio
            </Link>
            <Link
              href="/modelos"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Ver modelos
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
