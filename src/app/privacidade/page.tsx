import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_NAME, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${SITE_NAME}`,
  description: `Política de Privacidade do ${SITE_NAME}. Saiba como coletamos, usamos e protegemos seus dados pessoais.`,
};

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-3xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)] mb-2">
            Política de Privacidade
          </h1>
          <p className="text-sm text-surface-400 mb-10">
            Última atualização: 26 de fevereiro de 2026
          </p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                1. Informações que Coletamos
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Ao utilizar o Documind ({SITE_URL}), podemos coletar as
                seguintes informações: (a) dados de cadastro como nome, email
                e senha; (b) dados de uso como documentos gerados e
                funcionalidades utilizadas; (c) dados de pagamento processados
                de forma segura por nosso provedor de pagamentos; (d) dados
                técnicos como endereço IP e tipo de navegador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                2. Como Usamos seus Dados
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Utilizamos seus dados para: (a) fornecer e melhorar nossos
                serviços; (b) processar pagamentos e gerenciar assinaturas;
                (c) enviar comunicações relevantes sobre o serviço; (d)
                garantir a segurança da plataforma; (e) cumprir obrigações
                legais. Não vendemos ou compartilhamos seus dados pessoais
                com terceiros para fins de marketing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                3. Proteção dos Dados
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais
                para proteger seus dados pessoais contra acesso não
                autorizado, alteração, divulgação ou destruição. Utilizamos
                criptografia para transmissão de dados e armazenamento seguro
                de senhas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                4. Seus Direitos (LGPD)
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD),
                você tem direito a: (a) acessar seus dados pessoais; (b)
                corrigir dados incompletos ou desatualizados; (c) solicitar a
                exclusão de seus dados; (d) revogar o consentimento para
                tratamento de dados; (e) solicitar a portabilidade dos dados.
                Para exercer esses direitos, entre em contato pelo email{" "}
                <a
                  href="mailto:contato@documind.com.br"
                  className="text-primary-600 hover:underline"
                >
                  contato@documind.com.br
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                5. Cookies
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Utilizamos cookies essenciais para o funcionamento da
                plataforma, incluindo cookies de sessão para manter você
                logado. Não utilizamos cookies de rastreamento de terceiros
                para publicidade.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                6. Retenção de Dados
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Mantemos seus dados pelo tempo necessário para fornecer o
                serviço. Ao excluir sua conta, seus dados pessoais serão
                removidos em até 30 dias, exceto quando a retenção for
                necessária por obrigação legal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                7. Alterações nesta Política
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente.
                Notificaremos sobre alterações significativas por email ou
                aviso na plataforma. Recomendamos a revisão periódica desta
                página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-surface-900 mb-3">
                8. Contato
              </h2>
              <p className="text-surface-600 leading-relaxed">
                Para questões sobre privacidade e proteção de dados, entre em
                contato:{" "}
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
