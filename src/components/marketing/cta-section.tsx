import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800" />
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-cta-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-cta-300" />
              <span className="text-sm font-medium text-white/90">
                Comece agora mesmo
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-[family-name:var(--font-jakarta)] max-w-3xl mx-auto">
              Seu próximo contrato está a{" "}
              <span className="text-cta-300">30 segundos</span> de distância
            </h2>

            <p className="mt-6 text-lg text-primary-100 max-w-xl mx-auto leading-relaxed">
              Junte-se a milhares de brasileiros que já simplificaram a criação
              de documentos com inteligência artificial.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="cta"
                size="xl"
                href="/registro"
                className="shadow-lg shadow-cta-600/30"
              >
                Criar minha conta grátis
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/modelos"
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                Ver modelos disponíveis
              </Button>
            </div>

            <p className="mt-6 text-sm text-primary-200/60">
              3 documentos grátis por mês · Sem cartão de crédito · Cancele quando quiser
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
