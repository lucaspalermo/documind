import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/marketing/cta-section";
import { SITE_NAME } from "@/lib/utils";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "como-fazer-contrato-de-aluguel",
    title: "Como fazer um contrato de aluguel completo em 2026",
    metaDescription:
      "Guia completo sobre como criar um contrato de aluguel residencial com todas as cláusulas essenciais para proteger locador e locatário.",
    category: "Imobiliário",
    readTime: "5 min",
    date: "26 de fevereiro de 2026",
    content: `O contrato de aluguel é um dos documentos mais importantes para quem vai alugar ou disponibilizar um imóvel. Um bom contrato protege tanto o locador (proprietário) quanto o locatário (inquilino) e evita conflitos futuros.

## O que não pode faltar no contrato de aluguel

### 1. Identificação completa das partes
O contrato deve conter nome completo, CPF, RG, estado civil e endereço de ambas as partes. No caso de pessoas jurídicas, incluir CNPJ e razão social.

### 2. Descrição detalhada do imóvel
Inclua o endereço completo, características do imóvel (número de quartos, vagas de garagem, etc.), estado de conservação e número de matrícula no registro de imóveis.

### 3. Valor do aluguel e reajuste
Defina claramente o valor mensal, a data de vencimento, a forma de pagamento e o índice de reajuste anual (geralmente IGP-M ou IPCA).

### 4. Prazo de locação
Especifique a data de início e término do contrato. Contratos residenciais costumam ter prazo mínimo de 30 meses, conforme a Lei do Inquilinato.

### 5. Garantia locatícia
Escolha uma modalidade de garantia: caução (até 3 meses de aluguel), fiador, seguro-fiança ou título de capitalização. Lembre-se: a lei permite apenas uma modalidade por contrato.

### 6. Responsabilidades de manutenção
Defina quem é responsável por reparos estruturais (geralmente o proprietário) e manutenção do dia a dia (geralmente o inquilino).

### 7. Cláusula de rescisão
Estabeleça as condições para rescisão antecipada, incluindo multas proporcionais ao tempo restante do contrato.

## Dica: use o Documind

Com o Documind, você gera um contrato de aluguel completo em menos de 2 minutos. Nossa IA preenche automaticamente todas as cláusulas essenciais com base nos seus dados. Experimente gratuitamente!`,
  },
  {
    slug: "contrato-prestacao-servico-o-que-incluir",
    title: "Contrato de prestação de serviço: o que você precisa incluir",
    metaDescription:
      "Saiba quais cláusulas são obrigatórias em um contrato de prestação de serviço para proteger prestador e contratante.",
    category: "Comercial",
    readTime: "4 min",
    date: "25 de fevereiro de 2026",
    content: `O contrato de prestação de serviço é essencial para formalizar qualquer relação de trabalho entre um prestador de serviço e um contratante. Sem ele, ambas as partes ficam desprotegidas em caso de conflitos.

## Cláusulas essenciais

### 1. Objeto do contrato
Descreva detalhadamente qual serviço será prestado, incluindo escopo, entregas esperadas e padrões de qualidade.

### 2. Prazo de execução
Defina datas de início e término, além de marcos intermediários (milestones) quando aplicável.

### 3. Valor e forma de pagamento
Especifique o valor total ou por hora, condições de pagamento, datas de vencimento e método de pagamento aceito.

### 4. Responsabilidades das partes
Liste claramente o que cada parte deve fornecer para a execução do serviço (materiais, acesso, informações, etc.).

### 5. Confidencialidade
Inclua uma cláusula de sigilo para proteger informações sensíveis compartilhadas durante a prestação do serviço.

### 6. Rescisão e multas
Defina as condições para cancelamento do contrato e as penalidades aplicáveis.

### 7. Propriedade intelectual
Especifique quem detém os direitos sobre o trabalho produzido.

## Simplifique com o Documind

No Documind, você preenche os dados do serviço e nossa IA gera um contrato completo com todas essas cláusulas. Rápido, profissional e sem complicação.`,
  },
  {
    slug: "procuracao-simples-como-fazer",
    title: "Procuração simples: como fazer e quando usar",
    metaDescription:
      "Guia prático sobre procuração simples: quando é necessária, como criar uma válida e quais os cuidados ao conceder poderes a terceiros.",
    category: "Pessoal",
    readTime: "3 min",
    date: "24 de fevereiro de 2026",
    content: `A procuração é um documento pelo qual uma pessoa (outorgante) concede poderes a outra (outorgado) para agir em seu nome. A procuração simples, também chamada de particular, não precisa ser feita em cartório na maioria dos casos.

## Quando usar uma procuração simples

- Representação em reuniões de condomínio
- Recebimento de correspondências ou encomendas
- Matrícula em instituições de ensino
- Movimentações bancárias simples
- Representação em órgãos públicos

## O que incluir na procuração

### Dados do outorgante (quem concede)
Nome completo, CPF, RG, estado civil, endereço e profissão.

### Dados do outorgado (quem recebe os poderes)
Os mesmos dados pessoais do outorgante.

### Poderes concedidos
Descreva de forma clara e específica quais atos o outorgado pode praticar.

### Prazo de validade
Defina por quanto tempo a procuração será válida. Sem prazo definido, ela vale por tempo indeterminado.

### Local e data
Sempre inclua o local e a data de emissão.

## Procuração em minutos

Use o Documind para gerar sua procuração simples com todos os campos necessários. Basta preencher os dados e baixar o PDF pronto para assinatura.`,
  },
  {
    slug: "direitos-inquilino-aluguel",
    title: "Direitos do inquilino: o que a Lei do Inquilinato garante",
    metaDescription:
      "Conheça seus direitos como inquilino segundo a Lei 8.245/91. Saiba o que o proprietário pode e não pode fazer durante a locação.",
    category: "Imobiliário",
    readTime: "6 min",
    date: "23 de fevereiro de 2026",
    content: `A Lei do Inquilinato (Lei 8.245/91) é o principal instrumento legal que rege as relações de locação no Brasil. Conhecer seus direitos é fundamental para evitar abusos.

## Principais direitos do inquilino

### 1. Receber o imóvel em boas condições
O proprietário deve entregar o imóvel em condições de uso. Antes de assinar o contrato, faça uma vistoria detalhada e documente o estado do imóvel com fotos.

### 2. Preferência na compra do imóvel
Se o proprietário decidir vender o imóvel, o inquilino tem direito de preferência, podendo comprá-lo nas mesmas condições oferecidas a terceiros.

### 3. Indenização por benfeitorias necessárias
Reparos essenciais realizados pelo inquilino devem ser reembolsados pelo proprietário, mesmo sem autorização prévia.

### 4. Sublocação (com autorização)
O inquilino pode sublocar o imóvel, desde que haja autorização expressa do proprietário no contrato.

### 5. Renovação do contrato comercial
Locatários comerciais com contrato de pelo menos 5 anos no mesmo ponto têm direito à renovação compulsória.

### 6. Multa proporcional por rescisão
Em caso de rescisão antecipada, a multa deve ser proporcional ao tempo restante do contrato.

## Proteja-se com um bom contrato

Um contrato de aluguel bem elaborado é a melhor proteção. No Documind, você gera contratos com todas as cláusulas previstas na Lei do Inquilinato.`,
  },
  {
    slug: "contrato-freelancer-autonomo",
    title: "Contrato para freelancer: proteja seu trabalho",
    metaDescription:
      "Descubra por que todo freelancer precisa de um contrato e quais cláusulas incluir para garantir pagamento e proteger seus direitos.",
    category: "Comercial",
    readTime: "4 min",
    date: "22 de fevereiro de 2026",
    content: `Trabalhar como freelancer oferece liberdade, mas também traz riscos. Sem um contrato, você fica exposto a calotes, mudanças de escopo e disputas sobre entregas.

## Por que todo freelancer precisa de contrato

- Garantia de pagamento pelo trabalho realizado
- Definição clara do escopo (evita "só mais uma coisinha")
- Proteção da propriedade intelectual
- Respaldo legal em caso de conflitos
- Profissionalismo e credibilidade

## Cláusulas essenciais

### Escopo detalhado
Descreva exatamente o que será entregue, incluindo quantidade de revisões permitidas.

### Cronograma e entregas
Defina prazos para cada etapa do projeto e as condições de aprovação.

### Forma de pagamento
Especifique valores, datas e método de pagamento. Considere pedir uma entrada antes de iniciar.

### Cancelamento
Estabeleça regras claras para cancelamento, incluindo pagamento pelo trabalho já realizado.

### Propriedade intelectual
Defina quando os direitos são transferidos (geralmente após pagamento integral).

## Gere seu contrato de freelancer

Com o Documind, você cria um contrato de freelancer profissional em minutos. Preencha os dados do projeto e deixe a IA fazer o resto.`,
  },
  {
    slug: "recibo-pagamento-modelo",
    title: "Modelo de recibo de pagamento: como emitir corretamente",
    metaDescription:
      "Aprenda a criar recibos de pagamento válidos com todos os dados obrigatórios para comprovação financeira e fiscal.",
    category: "Pessoal",
    readTime: "3 min",
    date: "21 de fevereiro de 2026",
    content: `O recibo de pagamento é um documento que comprova a transferência de valores entre duas partes. Ele é fundamental para controle financeiro e pode ser usado como prova em disputas.

## Quando emitir um recibo

- Pagamentos de aluguel
- Prestação de serviços informais
- Empréstimos entre pessoas
- Compra e venda de bens usados
- Pagamentos de freelancers

## O que incluir no recibo

### Dados do pagador
Nome completo e CPF/CNPJ de quem está pagando.

### Dados do recebedor
Nome completo e CPF/CNPJ de quem está recebendo o valor.

### Valor
O valor pago em números e por extenso para evitar fraudes.

### Descrição
Descreva claramente a que se refere o pagamento.

### Data e local
Local e data em que o pagamento foi realizado.

### Assinatura
O recibo deve ser assinado por quem recebeu o pagamento.

## Gere recibos profissionais

No Documind, você gera recibos de pagamento formatados profissionalmente em segundos. Basta preencher os dados e baixar o PDF.`,
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Artigo não encontrado" };

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const categoryColors: Record<string, string> = {
    "Imobiliário": "bg-blue-50 text-blue-700",
    Comercial: "bg-purple-50 text-purple-700",
    Trabalhista: "bg-emerald-50 text-emerald-700",
    Pessoal: "bg-amber-50 text-amber-700",
  };

  // Simple markdown-ish rendering
  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-surface-500 hover:text-surface-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  categoryColors[post.category] || "bg-surface-100 text-surface-600"
                }`}
              >
                {post.category}
              </span>
              <span className="text-xs text-surface-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime} de leitura
              </span>
              <span className="text-xs text-surface-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-surface-900 font-[family-name:var(--font-jakarta)] leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {paragraphs.map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-surface-900 mt-10 mb-4 font-[family-name:var(--font-jakarta)]"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="text-lg font-bold text-surface-900 mt-6 mb-2"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="list-disc list-inside space-y-1.5 text-surface-600">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-surface-600 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200">
            <h3 className="text-lg font-bold text-surface-900 mb-2">
              Gere seu documento com o Documind
            </h3>
            <p className="text-sm text-surface-600 mb-4">
              Crie contratos e documentos profissionais em segundos com nossa IA. Comece grátis!
            </p>
            <Link
              href="/registro"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors"
            >
              Criar conta grátis
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
