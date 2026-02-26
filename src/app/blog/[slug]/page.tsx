import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/marketing/cta-section";
import { SITE_NAME, SITE_URL } from "@/lib/utils";
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
  dateISO: string;
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
    dateISO: "2026-02-26",
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
    dateISO: "2026-02-25",
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
    dateISO: "2026-02-24",
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
    dateISO: "2026-02-23",
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
    dateISO: "2026-02-22",
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
    dateISO: "2026-02-21",
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
  {
    slug: "distrato-de-aluguel-como-fazer",
    title: "Distrato de aluguel: como fazer a rescisão corretamente",
    metaDescription:
      "Saiba como encerrar um contrato de aluguel de forma legal, com modelo de distrato e cálculo de multa proporcional.",
    category: "Imobiliário",
    readTime: "5 min",
    date: "20 de fevereiro de 2026",
    dateISO: "2026-02-20",
    content: `O distrato de aluguel é o documento que formaliza o encerramento de um contrato de locação. Ele é essencial para garantir que ambas as partes — locador e locatário — estejam de acordo com os termos da rescisão.

## Quando fazer um distrato de aluguel

- Quando o inquilino deseja sair antes do prazo do contrato
- Quando o proprietário precisa do imóvel de volta
- Quando ambas as partes concordam em encerrar a locação
- No término natural do contrato, para formalizar a devolução

## O que incluir no distrato

### 1. Identificação das partes
Nome completo, CPF e endereço de locador e locatário, exatamente como no contrato original.

### 2. Referência ao contrato original
Cite o contrato que está sendo encerrado, incluindo a data de assinatura e o endereço do imóvel.

### 3. Data de encerramento
Defina claramente a data em que a locação se encerra e o imóvel deve ser devolvido.

### 4. Situação financeira
Declare se existem débitos pendentes (aluguéis, condomínio, IPTU) e como serão quitados.

### 5. Multa por rescisão antecipada
Se aplicável, calcule a multa proporcional ao tempo restante do contrato, conforme previsto na cláusula de rescisão.

### 6. Caução e garantias
Descreva como a garantia será devolvida (caução, fiança) e em qual prazo.

### 7. Estado do imóvel
Registre o resultado da vistoria de saída e eventuais reparos necessários.

## Como calcular a multa proporcional

A multa é calculada proporcionalmente ao tempo restante do contrato. Exemplo: contrato de 30 meses com multa de 3 aluguéis. Se o inquilino sai no mês 20, restam 10 meses. Multa = 3 × (10/30) = 1 aluguel.

## Gere seu distrato com o Documind

No Documind, você cria o distrato de aluguel com todos os campos necessários em minutos. A IA calcula automaticamente a multa proporcional e gera o documento pronto para assinatura.`,
  },
  {
    slug: "contrato-compra-venda-imovel",
    title: "Contrato de compra e venda de imóvel: guia completo",
    metaDescription:
      "Tudo que você precisa saber sobre o contrato de compra e venda de imóvel: cláusulas essenciais, cuidados na negociação e documentação necessária.",
    category: "Imobiliário",
    readTime: "7 min",
    date: "19 de fevereiro de 2026",
    dateISO: "2026-02-19",
    content: `O contrato de compra e venda de imóvel é um dos documentos mais importantes na vida de qualquer pessoa. Ele formaliza a transação e protege tanto o comprador quanto o vendedor contra fraudes e problemas futuros.

## Tipos de contrato imobiliário

### Promessa de compra e venda
Usado quando a transação ainda não será concluída imediatamente. Estabelece as condições e prazos para a transferência definitiva.

### Contrato definitivo de compra e venda
Formaliza a transferência efetiva do imóvel. Deve ser registrado em cartório para ter efeito perante terceiros.

## Cláusulas essenciais

### 1. Identificação completa das partes
Nome, CPF/CNPJ, RG, estado civil, endereço e profissão de comprador e vendedor. Se casado, o cônjuge deve constar.

### 2. Descrição detalhada do imóvel
Endereço completo, área total, número de matrícula no registro de imóveis, número de contribuinte (IPTU) e descrição das características.

### 3. Valor e forma de pagamento
Valor total da venda, condições de pagamento (à vista, financiado, parcelado), datas dos pagamentos e dados bancários.

### 4. Sinal ou arras
Valor do sinal dado para garantir o negócio. As arras confirmatórias garantem o direito de arrependimento com penalidade.

### 5. Prazo para escritura e registro
Data limite para lavratura da escritura pública e registro no cartório de registro de imóveis.

### 6. Ônus e pendências
Declaração de que o imóvel está livre de ônus (hipotecas, penhoras, dívidas de condomínio ou IPTU).

### 7. Cláusula de evicção
Proteção ao comprador caso terceiros reivindiquem direitos sobre o imóvel.

## Documentos necessários

- Certidão de matrícula atualizada do imóvel
- Certidões negativas de débitos (IPTU, condomínio)
- Certidões negativas dos vendedores (federal, estadual, trabalhista)
- Comprovante de quitação de tributos

## Cuidados importantes

- Sempre verifique a matrícula do imóvel antes de assinar
- Confirme se o vendedor é realmente o proprietário
- Verifique se há ações judiciais envolvendo o vendedor
- Não pague sem contrato assinado

## Crie seu contrato no Documind

Com o Documind, você gera contratos de compra e venda com todas as cláusulas de proteção. Nossa IA verifica os dados e gera um documento profissional em minutos.`,
  },
  {
    slug: "termo-confidencialidade-nda",
    title: "Termo de confidencialidade (NDA): quando e como usar",
    metaDescription:
      "Entenda o que é um NDA (Non-Disclosure Agreement), quando ele é obrigatório e quais cláusulas incluir para proteger informações sigilosas.",
    category: "Comercial",
    readTime: "4 min",
    date: "18 de fevereiro de 2026",
    dateISO: "2026-02-18",
    content: `O Termo de Confidencialidade, também conhecido como NDA (Non-Disclosure Agreement), é um contrato que protege informações sigilosas compartilhadas entre partes em uma relação comercial ou profissional.

## Quando usar um NDA

- Antes de apresentar uma ideia de negócio a investidores
- Ao contratar freelancers ou consultores externos
- Em negociações de parceria ou fusão de empresas
- Quando funcionários têm acesso a informações estratégicas
- Ao compartilhar dados técnicos com fornecedores

## Tipos de NDA

### Unilateral
Apenas uma parte se compromete a manter sigilo. Comum em relações empregador-empregado.

### Bilateral (mútuo)
Ambas as partes se comprometem com o sigilo. Usado em parcerias e negociações entre empresas.

## Cláusulas essenciais

### 1. Definição de informação confidencial
Descreva claramente o que é considerado confidencial: dados financeiros, segredos industriais, listas de clientes, código-fonte, etc.

### 2. Exceções
Liste o que NÃO é considerado confidencial: informações públicas, conhecimento prévio, informações obtidas de terceiros.

### 3. Obrigações das partes
Detalhe o que cada parte deve fazer para proteger as informações: não divulgar, não copiar, restringir acesso.

### 4. Prazo de vigência
Defina por quanto tempo o sigilo deve ser mantido. Geralmente de 2 a 5 anos, podendo ser indeterminado.

### 5. Penalidades por violação
Estabeleça multas e indenizações em caso de descumprimento.

### 6. Devolução de materiais
Ao término do contrato, todos os documentos e cópias devem ser devolvidos ou destruídos.

## Gere seu NDA no Documind

Crie termos de confidencialidade profissionais em minutos com o Documind. Preencha os dados e a IA gera um NDA completo com todas as proteções necessárias.`,
  },
  {
    slug: "contrato-trabalho-clt",
    title: "Contrato de trabalho CLT: o que a empresa deve incluir",
    metaDescription:
      "Guia completo sobre as cláusulas obrigatórias do contrato de trabalho pela CLT, direitos do empregado e deveres do empregador.",
    category: "Trabalhista",
    readTime: "5 min",
    date: "17 de fevereiro de 2026",
    dateISO: "2026-02-17",
    content: `O contrato de trabalho é o documento que formaliza a relação entre empregador e empregado conforme a Consolidação das Leis do Trabalho (CLT). Mesmo quando não é escrito, o vínculo empregatício pode ser reconhecido pela Justiça.

## Tipos de contrato de trabalho

### Por prazo indeterminado
O mais comum. Não tem data de término e pode ser rescindido por qualquer das partes.

### Por prazo determinado
Tem data de início e fim. Usado para trabalhos temporários, com duração máxima de 2 anos.

### Contrato de experiência
Tipo especial de contrato por prazo determinado, com duração máxima de 90 dias.

## Cláusulas obrigatórias

### 1. Identificação das partes
Dados completos do empregador (razão social, CNPJ) e do empregado (nome, CPF, CTPS).

### 2. Função e atividades
Cargo, descrição das atividades e local de trabalho.

### 3. Remuneração
Salário base, benefícios, adicionais (noturno, insalubridade, periculosidade) e data de pagamento.

### 4. Jornada de trabalho
Horário de entrada e saída, intervalo para refeição e descanso semanal remunerado.

### 5. Prazo do contrato
Se determinado ou indeterminado. No caso de experiência, especificar os 45 ou 90 dias.

### 6. Benefícios
Vale-transporte, vale-refeição, plano de saúde e outros benefícios oferecidos.

## Direitos garantidos pela CLT

- 13º salário
- Férias remuneradas + 1/3
- FGTS (8% do salário)
- Aviso prévio (30 dias + 3 por ano)
- Seguro-desemprego (em caso de demissão sem justa causa)
- Licença-maternidade e paternidade

## Gere contratos de trabalho no Documind

O Documind gera contratos de trabalho CLT completos, com todas as cláusulas exigidas por lei. Preencha os dados da empresa e do funcionário, e a IA monta o documento em minutos.`,
  },
  {
    slug: "declaracao-de-residencia-modelo",
    title: "Declaração de residência: modelo e como fazer",
    metaDescription:
      "Aprenda a criar uma declaração de residência válida, quando ela é aceita como comprovante e quais dados são obrigatórios.",
    category: "Pessoal",
    readTime: "3 min",
    date: "16 de fevereiro de 2026",
    dateISO: "2026-02-16",
    content: `A declaração de residência é um documento em que uma pessoa afirma, sob as penas da lei, que reside em determinado endereço. Ela é usada quando não se tem um comprovante de residência formal em seu nome.

## Quando usar uma declaração de residência

- Quando as contas do endereço estão no nome de outra pessoa
- Para quem mora de aluguel sem contrato formal
- Quando se mora com familiares
- Para abertura de contas bancárias
- Para matrícula em escolas e faculdades
- Para cadastro em serviços públicos

## Validade legal

A declaração de residência tem respaldo no artigo 1º da Lei 7.115/83. Declarar falsamente um endereço é crime de falsidade ideológica (artigo 299 do Código Penal), com pena de 1 a 5 anos de reclusão.

## O que incluir na declaração

### Dados do declarante
Nome completo, CPF, RG, nacionalidade, estado civil e profissão.

### Endereço completo
Rua, número, complemento, bairro, cidade, estado e CEP.

### Finalidade
Para que fim a declaração será utilizada (abertura de conta, matrícula, etc.).

### Referência legal
Citar a Lei 7.115/83, que dá validade à declaração particular.

### Local, data e assinatura
A declaração deve ser assinada pelo declarante com firma reconhecida (quando exigido).

## Dica importante

Algumas instituições podem exigir que a declaração tenha firma reconhecida em cartório. Verifique antes de apresentar o documento.

## Crie sua declaração no Documind

Com o Documind, gere declarações de residência com todos os dados e referências legais necessárias. Rápido, profissional e pronto para imprimir.`,
  },
  {
    slug: "contrato-emprestimo-entre-pessoas",
    title: "Contrato de empréstimo entre pessoas físicas: como fazer",
    metaDescription:
      "Saiba como formalizar um empréstimo entre amigos ou familiares com contrato válido para evitar problemas e garantir o pagamento.",
    category: "Pessoal",
    readTime: "4 min",
    date: "15 de fevereiro de 2026",
    dateISO: "2026-02-15",
    content: `Emprestar dinheiro para amigos ou familiares é comum, mas sem um contrato formal, pode gerar conflitos e até perda do valor emprestado. Um contrato de empréstimo entre pessoas físicas (mútuo) dá segurança jurídica para ambas as partes.

## Por que fazer um contrato de empréstimo

- Formaliza o acordo e evita mal-entendidos
- Serve como prova em caso de inadimplência
- Define prazos e condições de pagamento
- Protege a amizade e a relação familiar
- Pode ser usado em ações judiciais de cobrança

## Cláusulas essenciais

### 1. Identificação das partes
Dados completos do mutuante (quem empresta) e do mutuário (quem recebe): nome, CPF, RG e endereço.

### 2. Valor do empréstimo
O valor emprestado em números e por extenso.

### 3. Forma de pagamento
Como o valor será devolvido: parcela única, parcelas mensais, datas de vencimento.

### 4. Juros (se aplicável)
A taxa de juros acordada. Entre pessoas físicas, o limite legal é de 1% ao mês (12% ao ano), conforme o Código Civil.

### 5. Multa por atraso
Percentual de multa por parcela em atraso (máximo de 2%) e juros moratórios.

### 6. Prazo para pagamento
Data de início e fim do empréstimo.

### 7. Garantia (opcional)
Se houver garantia (veículo, imóvel, cheque), descreva detalhadamente.

## Dicas importantes

- Sempre faça o contrato por escrito, mesmo entre familiares
- Peça assinatura de duas testemunhas para dar força executiva ao documento
- Guarde comprovantes das transferências bancárias
- Valores acima de R$5.000 devem ser declarados no Imposto de Renda

## Crie o contrato no Documind

O Documind gera contratos de empréstimo entre pessoas físicas com todas as cláusulas de proteção. Preencha os valores e prazos, e a IA monta o documento completo em minutos.`,
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
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.dateISO,
      section: post.category,
    },
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    inLanguage: "pt-BR",
    articleSection: post.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  // Simple markdown-ish rendering
  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
