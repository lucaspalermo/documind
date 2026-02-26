import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_NAME, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Termos de Uso | ${SITE_NAME}`,
  description: `Termos de Uso da plataforma ${SITE_NAME}. Leia nossos termos antes de utilizar nossos serviços.`,
  alternates: {
    canonical: `${SITE_URL}/termos`,
  },
};

export default function TermosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-3xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)] mb-2">
            Termos de Uso
          </h1>
          <p className="text-sm text-surface-400 mb-10">
            Última atualização: 26 de fevereiro de 2026
          </p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                1. Aceitação dos Termos
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Ao acessar ou utilizar a plataforma Documind ({SITE_URL}), você
                concorda em cumprir e ficar vinculado a estes Termos de Uso. Se
                você não concordar com algum destes termos, não utilize nossos
                serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                2. Descrição do Serviço
              </h2>
              <p className="text-surface-600 leading-relaxed">
                O Documind é uma plataforma online que utiliza inteligência
                artificial para auxiliar na geração de documentos e contratos.
                Os documentos gerados são modelos e não substituem a consulta
                com um advogado para situações jurídicas complexas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                3. Cadastro e Conta
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Para utilizar determinadas funcionalidades, é necessário criar
                uma conta. Você é responsável por manter a confidencialidade
                de suas credenciais de acesso e por todas as atividades que
                ocorram em sua conta. Informe-nos imediatamente sobre qualquer
                uso não autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                4. Planos e Pagamentos
              </h2>
              <p className="text-surface-600 leading-relaxed">
                O Documind oferece planos gratuitos e pagos. Os planos pagos
                são cobrados mensalmente conforme o valor vigente no momento da
                contratação. O cancelamento pode ser feito a qualquer momento,
                sem multa ou fidelidade. Após o cancelamento, o acesso às
                funcionalidades premium permanece ativo até o final do período
                já pago.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                5. Uso Aceitável
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Você concorda em utilizar a plataforma apenas para fins lícitos
                e de acordo com estes termos. É proibido: (a) usar o serviço
                para atividades ilegais; (b) tentar acessar áreas restritas
                do sistema; (c) reproduzir, duplicar ou revender nosso serviço
                sem autorização; (d) utilizar robôs ou scripts automatizados
                para acessar a plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                6. Propriedade Intelectual
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Todo o conteúdo da plataforma, incluindo textos, designs,
                logos e software, é de propriedade do Documind e protegido
                por leis de propriedade intelectual. Os documentos gerados
                por você são de sua propriedade.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                7. Limitação de Responsabilidade
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Os documentos gerados pela plataforma são modelos que utilizam
                inteligência artificial e não constituem assessoria jurídica.
                Recomendamos a consulta com um profissional do direito para
                situações que exijam orientação jurídica específica. O
                Documind não se responsabiliza por danos decorrentes do uso
                dos documentos gerados sem a devida revisão profissional.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                8. Alterações nos Termos
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer
                momento. Alterações significativas serão comunicadas por email
                ou por aviso na plataforma. O uso continuado do serviço após
                as alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                9. Contato
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato pelo email{" "}
                <a
                  href="mailto:contato@documind.com.br"
                  className="text-primary-600 hover:underline"
                >
                  contato@documind.com.br
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
