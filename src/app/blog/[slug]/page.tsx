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
  relatedTemplate?: {
    slug: string;
    label: string;
  };
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
    relatedTemplate: { slug: "contrato-de-aluguel-residencial", label: "Gerar contrato de aluguel" },
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
    relatedTemplate: { slug: "contrato-de-prestacao-de-servico", label: "Gerar contrato de prestação de serviço" },
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
    relatedTemplate: { slug: "procuracao-simples", label: "Gerar procuração simples" },
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
    relatedTemplate: { slug: "contrato-de-aluguel-residencial", label: "Gerar contrato de aluguel" },
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
    relatedTemplate: { slug: "contrato-de-freelancer", label: "Gerar contrato de freelancer" },
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
    relatedTemplate: { slug: "recibo-de-pagamento", label: "Gerar recibo de pagamento" },
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
    relatedTemplate: { slug: "distrato-de-locacao", label: "Gerar distrato de locação" },
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
    relatedTemplate: { slug: "contrato-de-compra-e-venda-de-imovel", label: "Gerar contrato de compra e venda" },
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
    relatedTemplate: { slug: "termo-de-confidencialidade-nda", label: "Gerar termo de confidencialidade" },
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
    relatedTemplate: { slug: "contrato-de-trabalho-clt", label: "Gerar contrato CLT" },
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
    relatedTemplate: { slug: "declaracao-de-residencia", label: "Gerar declaração de residência" },
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
    relatedTemplate: { slug: "contrato-de-emprestimo-entre-pessoas", label: "Gerar contrato de empréstimo" },
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
  {
    slug: "contrato-estagio-lei-11788",
    title: "Contrato de estágio: tudo que a Lei 11.788 exige",
    metaDescription:
      "Entenda as regras da Lei do Estágio (11.788/08): carga horária, bolsa-auxílio, direitos do estagiário e como fazer o contrato corretamente.",
    category: "Trabalhista",
    readTime: "6 min",
    date: "10 de março de 2026",
    dateISO: "2026-03-10",
    relatedTemplate: { slug: "contrato-de-estagio", label: "Gerar contrato de estágio" },
    content: `O estágio é uma etapa fundamental na formação profissional, mas muitas empresas ainda erram na hora de formalizar a contratação. A Lei 11.788/2008 (Lei do Estágio) define regras claras que, se descumpridas, podem gerar vínculo empregatício e multas para a empresa.

## O que é estágio segundo a lei

O estágio é um ato educativo supervisionado, desenvolvido no ambiente de trabalho, que visa à preparação produtiva do estudante. Ele NÃO é um emprego — é uma extensão da formação acadêmica.

### Estágio obrigatório vs. não obrigatório

- **Obrigatório**: exigido pela grade curricular do curso. Pode ou não ter bolsa-auxílio.
- **Não obrigatório**: opcional, mas a empresa DEVE pagar bolsa-auxílio e vale-transporte.

## Requisitos para contratar um estagiário

### 1. O estagiário deve estar matriculado e frequentando

O estudante precisa estar matriculado em instituição de ensino superior, técnico, médio ou EJA. Sem matrícula ativa, não há estágio válido.

### 2. Termo de compromisso obrigatório

O contrato de estágio (chamado Termo de Compromisso de Estágio — TCE) deve ser assinado por três partes: empresa, estagiário e instituição de ensino.

### 3. Compatibilidade com o curso

As atividades do estágio devem ter relação com a formação do estudante. Um estudante de Direito não pode estagiar como auxiliar de limpeza.

### 4. Supervisor na empresa

A empresa deve designar um funcionário com formação na área para supervisionar até 10 estagiários simultaneamente.

## Regras de carga horária

A lei é rígida quanto à jornada:

- **Ensino superior e técnico**: máximo de 6 horas diárias e 30 horas semanais
- **Ensino médio e EJA**: máximo de 4 horas diárias e 20 horas semanais
- **Período de provas**: a jornada deve ser reduzida pela metade

## Direitos do estagiário

### Bolsa-auxílio
Obrigatória para estágio não obrigatório. O valor é livre — não há piso definido por lei, mas deve ser compatível com o mercado.

### Vale-transporte
Obrigatório para estágio não obrigatório, nas mesmas regras da CLT.

### Recesso remunerado
O estagiário tem direito a 30 dias de recesso a cada 12 meses, remunerado quando houver bolsa. Em estágios menores, o recesso é proporcional.

### Seguro contra acidentes pessoais
A empresa deve contratar seguro obrigatório contra acidentes pessoais para o estagiário.

## O que incluir no contrato de estágio

### Dados das três partes
Empresa (CNPJ, endereço), estagiário (CPF, matrícula) e instituição de ensino (dados e representante).

### Atividades e área de atuação
Descrição detalhada das atividades compatíveis com o curso do estagiário.

### Jornada e horário
Carga horária diária e semanal, respeitando os limites da lei.

### Vigência
Data de início e término. O estágio na mesma empresa pode durar no máximo 2 anos (exceto PCD).

### Valor da bolsa e benefícios
Valor mensal da bolsa-auxílio e vale-transporte.

### Dados do seguro
Número da apólice e cobertura do seguro contra acidentes pessoais.

## Riscos de não fazer o contrato corretamente

Se a empresa não cumprir os requisitos da Lei 11.788, o estágio pode ser descaracterizado e a Justiça do Trabalho pode reconhecer **vínculo empregatício**. Isso significa pagar todos os direitos da CLT retroativamente: 13º, férias, FGTS, INSS.

## Gere seu contrato de estágio no Documind

O Documind gera contratos de estágio completos, com todas as cláusulas exigidas pela Lei 11.788. Preencha os dados da empresa, do estagiário e da instituição de ensino, e a IA monta o TCE em minutos.`,
  },
  {
    slug: "home-office-contrato-trabalho-remoto",
    title: "Trabalho remoto: como fazer o contrato de home office",
    metaDescription:
      "Guia completo sobre contrato de trabalho remoto (home office): cláusulas obrigatórias, ajuda de custo, controle de jornada e o que a CLT exige.",
    category: "Trabalhista",
    readTime: "5 min",
    date: "9 de março de 2026",
    dateISO: "2026-03-09",
    relatedTemplate: { slug: "acordo-de-trabalho-home-office", label: "Gerar acordo de home office" },
    content: `O trabalho remoto (teletrabalho ou home office) ganhou enorme relevância nos últimos anos. Desde a Reforma Trabalhista de 2017 e as atualizações da Lei 14.442/2022, a CLT possui regras específicas para essa modalidade. Formalizar o acordo é essencial para evitar disputas trabalhistas.

## O que diz a CLT sobre teletrabalho

O artigo 75-B da CLT define teletrabalho como a prestação de serviços fora das dependências do empregador, de maneira preponderante ou híbrida, usando tecnologias de informação e comunicação.

### O que mudou com a Lei 14.442/2022

- O comparecimento eventual à empresa NÃO descaracteriza o teletrabalho
- É permitido o modelo **híbrido** (parte presencial, parte remoto)
- Estagiários e aprendizes podem fazer teletrabalho
- Prioridade para empregados com deficiência e pais de crianças até 4 anos

## Cláusulas obrigatórias do contrato

### 1. Modalidade de trabalho

Especifique se o trabalho é 100% remoto, híbrido (quantos dias presenciais) ou eventual. A CLT exige que essa informação conste no contrato.

### 2. Responsabilidade por equipamentos

Defina quem fornece computador, monitor, cadeira ergonômica, internet e energia. A empresa pode fornecer os equipamentos ou reembolsar o funcionário.

### 3. Ajuda de custo ou reembolso

Se o funcionário usar seus próprios equipamentos, a empresa deve prever reembolso ou ajuda de custo mensal. Esse valor NÃO tem natureza salarial (não incide INSS, FGTS ou IRPF).

### 4. Controle de jornada

A empresa pode escolher entre:
- **Controle por ponto eletrônico**: funcionário registra entrada e saída
- **Controle por tarefa**: sem jornada fixa, o funcionário é avaliado por entregas (nesse caso, não tem hora extra)

### 5. Ergonomia e saúde

A empresa deve orientar o funcionário sobre postura, iluminação e pausas. O funcionário deve assinar um termo de responsabilidade sobre o ambiente de trabalho.

### 6. Proteção de dados

Cláusulas sobre segurança da informação: uso de VPN, proibição de acesso em redes públicas, política de senhas e sigilo de informações corporativas.

### 7. Comunicação e disponibilidade

Defina os canais de comunicação (Slack, Teams, email), horários de disponibilidade e regras sobre resposta fora do expediente.

### 8. Retorno ao presencial

A CLT permite que a empresa convoque o retorno ao presencial com prazo mínimo de 15 dias. Essa possibilidade deve constar no contrato.

## Dúvidas frequentes

### O funcionário em home office tem direito a hora extra?

Depende. Se há controle de jornada (ponto), sim. Se o contrato prevê "controle por tarefa" (art. 62, III da CLT), não há direito a hora extra.

### A empresa pode exigir câmera ligada o dia todo?

Não há consenso jurídico, mas a tendência é considerar isso invasão de privacidade. O ideal é limitar a câmera a reuniões.

### Quem paga a internet e a luz?

O contrato deve prever isso. A prática mais comum é a empresa pagar uma ajuda de custo fixa mensal.

## Modelo de acordo no Documind

Com o Documind, você gera um acordo de trabalho remoto completo, com todas as cláusulas exigidas pela CLT. Preencha os dados do funcionário e da empresa, escolha o modelo híbrido ou 100% remoto, e a IA monta o documento em minutos.`,
  },
  {
    slug: "autorizacao-uso-imagem-modelo",
    title: "Autorização de uso de imagem: modelo e quando é obrigatória",
    metaDescription:
      "Saiba quando a autorização de uso de imagem é obrigatória, como fazer o documento corretamente e quais os riscos de usar fotos sem permissão.",
    category: "Pessoal",
    readTime: "4 min",
    date: "8 de março de 2026",
    dateISO: "2026-03-08",
    relatedTemplate: { slug: "autorizacao-de-uso-de-imagem", label: "Gerar autorização de uso de imagem" },
    content: `A autorização de uso de imagem é um documento essencial para qualquer pessoa ou empresa que deseja usar fotos, vídeos ou gravações de outra pessoa. Sem ela, o uso da imagem é considerado ilegal e pode gerar processos por danos morais.

## O que diz a lei sobre direito de imagem

O direito de imagem é garantido pela Constituição Federal (art. 5º, X) e pelo Código Civil (art. 20). A imagem de uma pessoa não pode ser usada comercialmente sem sua autorização expressa, salvo em casos de interesse público.

### Quando a autorização é obrigatória

- Fotos e vídeos para redes sociais de empresas
- Campanhas publicitárias e de marketing
- Eventos corporativos filmados ou fotografados
- Depoimentos e cases de clientes
- Fotos de funcionários em materiais institucionais
- Gravações para cursos e conteúdo online
- Ensaios fotográficos profissionais

### Quando NÃO precisa de autorização

- Cobertura jornalística e informativa
- Imagens em locais públicos onde a pessoa não é o foco
- Interesse público (políticos, celebridades em atos públicos)
- Fins acadêmicos e científicos (com anonimização)

## O que incluir na autorização

### 1. Dados do autorizante

Nome completo, CPF, RG e endereço de quem está cedendo o direito de imagem. Se for menor de idade, os dados do responsável legal.

### 2. Dados do autorizado

Nome ou razão social, CPF/CNPJ de quem vai usar a imagem.

### 3. Finalidade específica

Descreva exatamente para que a imagem será usada: "publicação em redes sociais da empresa", "material publicitário impresso e digital", "vídeo institucional", etc. Quanto mais específico, melhor.

### 4. Meios de divulgação

Liste os canais onde a imagem poderá ser veiculada: Instagram, YouTube, site, materiais impressos, TV, etc.

### 5. Prazo de uso

Defina por quanto tempo a imagem poderá ser usada. Pode ser por tempo determinado (ex: 2 anos) ou indeterminado. A autorização por prazo indeterminado pode ser revogada a qualquer momento.

### 6. Remuneração

Declare se o uso da imagem é gratuito ou se há pagamento. Se gratuito, a cláusula de gratuidade deve ser expressa.

### 7. Território

Defina onde a imagem poderá ser usada: "território nacional", "mundial", "apenas no estado de São Paulo", etc.

### 8. Direito de revogação

O autorizante pode revogar a autorização a qualquer momento, mas isso não afeta os usos já realizados.

## Riscos de usar imagem sem autorização

### Processo por danos morais

O valor da indenização varia, mas tribunais brasileiros já condenaram empresas a pagar de R$5.000 a R$50.000 por uso indevido de imagem.

### Obrigação de retirar o conteúdo

Além da indenização, a Justiça pode determinar a remoção imediata de todo material que contenha a imagem, gerando prejuízo operacional.

### Dano à reputação da empresa

Processos por uso indevido de imagem geram publicidade negativa e podem afetar a credibilidade da marca.

## Dica para empresas

Crie o hábito de coletar a autorização ANTES de qualquer sessão de fotos ou gravação. Mantenha um arquivo organizado com todas as autorizações assinadas.

## Gere sua autorização no Documind

Com o Documind, você cria autorizações de uso de imagem profissionais em minutos. Preencha os dados, defina a finalidade e o prazo, e a IA gera o documento completo pronto para assinatura.`,
  },
  {
    slug: "contrato-de-comodato-modelo",
    title: "Contrato de comodato: o que é, modelo e como fazer em 2026",
    metaDescription:
      "Saiba o que é contrato de comodato, como funciona o empréstimo gratuito de imóvel, cláusulas essenciais e modelo pronto para usar.",
    category: "Imobiliário",
    readTime: "6 min",
    date: "12 de março de 2026",
    dateISO: "2026-03-12",
    content: `## O que é contrato de comodato?

O contrato de comodato é um acordo pelo qual uma pessoa (comodante) empresta gratuitamente um bem infungível — como um imóvel, veículo ou equipamento — a outra pessoa (comodatário), que se compromete a devolvê-lo após o prazo combinado ou quando solicitado. Esse tipo de contrato está previsto nos artigos 579 a 585 do Código Civil brasileiro e é amplamente utilizado em situações familiares, empresariais e entre amigos.

A principal característica do comodato é a **gratuidade**. Se houver qualquer tipo de pagamento ou contraprestação financeira, o contrato deixa de ser comodato e passa a ser locação, regido por legislação diferente. Por isso, é fundamental entender as diferenças antes de formalizar qualquer acordo.

Na prática, o comodato é muito comum quando pais emprestam um imóvel para filhos morarem, quando uma empresa cede um equipamento para um funcionário ou quando alguém empresta um veículo para um parente por tempo determinado. Em todos esses casos, a formalização por escrito protege ambas as partes.

### Natureza jurídica do comodato

O comodato é classificado como um contrato real, unilateral, gratuito e temporário. Ele se aperfeiçoa com a entrega efetiva do bem ao comodatário, e não apenas com a assinatura do documento. Isso significa que o contrato só produz efeitos a partir do momento em que o bem é efetivamente entregue.

É unilateral porque gera obrigações principalmente para o comodatário, que deve conservar e devolver o bem. E é temporário porque sempre tem prazo — determinado ou indeterminado — para a devolução.

## Diferença entre comodato e aluguel

A confusão entre comodato e aluguel é muito comum, mas as diferenças são fundamentais e têm consequências jurídicas importantes.

No **aluguel** (locação), existe o pagamento de um valor periódico pelo uso do bem, chamado de aluguel. A relação é regulada pela Lei do Inquilinato (Lei 8.245/91) no caso de imóveis urbanos, com regras específicas sobre reajuste, garantias, despejo e renovação.

No **comodato**, não há qualquer pagamento. O empréstimo é gratuito. O comodatário pode, no entanto, ser responsável por despesas de conservação e manutenção do bem, como contas de água, luz, IPTU e pequenos reparos — isso não descaracteriza a gratuidade do comodato.

### Quando o comodato vira locação?

Se em qualquer momento o comodante passar a cobrar valores pelo uso do bem, mesmo que informalmente, o contrato pode ser descaracterizado e considerado como locação. Isso pode trazer consequências como a aplicação da Lei do Inquilinato e a necessidade de cumprir suas exigências legais.

Por isso, se a intenção é cobrar pelo uso, é melhor fazer diretamente um contrato de aluguel, com todas as cláusulas de proteção previstas em lei.

## Cláusulas essenciais do contrato de comodato

Para que o contrato de comodato seja válido e proteja ambas as partes, algumas cláusulas são indispensáveis:

### Identificação das partes

O contrato deve conter os dados completos do comodante e do comodatário: nome completo, CPF, RG, endereço e estado civil. No caso de pessoa jurídica, incluir CNPJ, razão social e dados do representante legal.

### Descrição detalhada do bem

O bem emprestado deve ser descrito com o máximo de detalhes possível. No caso de um imóvel, incluir endereço completo, número de matrícula no cartório de registro de imóveis, área total, número de cômodos e estado de conservação. Para veículos, incluir marca, modelo, ano, cor, placa e Renavam.

### Prazo do comodato

O contrato pode ter prazo determinado ou indeterminado. Com prazo determinado, o comodatário deve devolver o bem na data estipulada. Com prazo indeterminado, o comodante pode solicitar a devolução a qualquer momento, concedendo prazo razoável para desocupação.

### Finalidade de uso

É importante especificar para que o bem será utilizado. Por exemplo, se um imóvel é emprestado para uso residencial, o comodatário não pode utilizá-lo para fins comerciais sem autorização expressa.

### Responsabilidades de conservação

Definir claramente quem arca com despesas de manutenção, impostos (IPTU), contas de consumo e eventuais reparos. Normalmente, o comodatário assume as despesas ordinárias de conservação.

### Condições de devolução

Estabelecer como o bem deve ser devolvido: no mesmo estado em que foi recebido, com vistoria conjunta, prazo para reparos de danos causados pelo uso, entre outros detalhes.

## Direitos e deveres do comodante

O comodante, como proprietário do bem, tem direitos e obrigações específicas:

**Direitos do comodante:**
- Receber o bem de volta no prazo estipulado ou quando solicitar
- Exigir que o bem seja conservado adequadamente
- Pedir indenização por danos causados pelo comodatário
- Revogar o comodato se o comodatário descumprir as condições

**Deveres do comodante:**
- Entregar o bem em condições de uso
- Informar sobre vícios ou defeitos conhecidos do bem
- Respeitar o prazo determinado no contrato
- Não cobrar pelo uso do bem

## Direitos e deveres do comodatário

O comodatário também tem direitos e responsabilidades bem definidas:

**Direitos do comodatário:**
- Usar o bem conforme acordado durante o prazo do contrato
- Ser ressarcido por benfeitorias necessárias realizadas com autorização
- Exigir que o comodante respeite o prazo acordado

**Deveres do comodatário:**
- Conservar o bem como se fosse seu
- Utilizar o bem apenas para a finalidade acordada
- Devolver o bem no prazo e nas condições estabelecidas
- Arcar com as despesas ordinárias de conservação
- Não emprestar o bem a terceiros sem autorização

### Responsabilidade por danos

O artigo 582 do Código Civil é claro: o comodatário responde pela conservação do bem como se fosse dono. Se o bem sofrer danos por negligência ou mau uso, o comodatário deve indenizar o comodante. Em caso de risco simultâneo ao bem emprestado e a um bem próprio do comodatário, este deve priorizar a salvação do bem emprestado.

## Quando usar o contrato de comodato

O comodato é indicado em diversas situações práticas:

- **Entre familiares**: pais que emprestam imóvel para filhos, avós que cedem casa para netos
- **Entre amigos**: empréstimo de veículo ou equipamento por período determinado
- **Entre empresas**: cessão de equipamentos, máquinas ou espaço para parceiros comerciais
- **Empregador e empregado**: empréstimo de notebook, celular ou veículo corporativo
- **Associações e ONGs**: cessão de espaço ou equipamento para atividades sociais

### Comodato de imóvel rural

No caso de imóveis rurais, o comodato tem particularidades. É importante verificar se não há configuração de parceria rural ou arrendamento, que possuem legislação específica (Estatuto da Terra). Se o comodatário cultiva a terra e divide a produção, pode se configurar parceria agrícola, não comodato.

## Como registrar o contrato de comodato

Embora o contrato de comodato não exija registro em cartório para ter validade entre as partes, o registro é altamente recomendado por várias razões:

**Reconhecimento de firma**: o reconhecimento das assinaturas em cartório dá maior segurança jurídica ao documento e facilita sua utilização como prova em eventuais disputas.

**Registro no cartório de títulos e documentos**: o registro no cartório dá publicidade ao contrato e garante sua oposição contra terceiros. Isso é especialmente importante quando o comodato envolve imóveis de alto valor.

**Registro no cartório de registro de imóveis**: para imóveis, a averbação na matrícula do imóvel é a forma mais segura de dar publicidade ao comodato e proteger o comodatário contra eventuais alienações do bem.

### Custos do registro

Os custos variam conforme o estado e o cartório, mas geralmente incluem:
- Reconhecimento de firma: R$ 10 a R$ 30 por assinatura
- Registro em cartório de títulos e documentos: R$ 50 a R$ 200
- Averbação na matrícula do imóvel: valores tabelados conforme o estado

## Modelo básico de contrato de comodato

Um contrato de comodato deve conter, no mínimo, os seguintes elementos estruturais:

1. Título do documento
2. Qualificação completa das partes (comodante e comodatário)
3. Descrição detalhada do bem
4. Finalidade do empréstimo
5. Prazo de vigência
6. Responsabilidades de cada parte
7. Condições de devolução
8. Cláusula de rescisão
9. Foro de eleição
10. Local, data e assinaturas

### Cuidados ao elaborar

Ao redigir o contrato, tenha atenção especial para:
- Não incluir qualquer menção a pagamento ou contraprestação
- Descrever o bem com o máximo de detalhes
- Definir claramente as responsabilidades de conservação
- Incluir cláusula sobre benfeitorias (autorizadas ou não)
- Prever a possibilidade de rescisão antecipada

## Dica: use o Documind

Embora o Documind ainda não tenha um modelo específico de contrato de comodato, você pode utilizar outros modelos relacionados para se inspirar na estrutura e nas cláusulas. Explore os modelos de contratos imobiliários disponíveis na plataforma e adapte conforme sua necessidade. Em breve, novos modelos serão adicionados para atender a ainda mais tipos de documentos.`,
  },
  {
    slug: "modelo-de-contrato-de-servico-pj",
    title: "Contrato de prestação de serviço PJ: modelo e cláusulas essenciais",
    metaDescription:
      "Modelo de contrato de prestação de serviço PJ com cláusulas essenciais. Saiba como evitar vínculo empregatício e proteger sua empresa.",
    category: "Comercial",
    readTime: "5 min",
    date: "13 de março de 2026",
    dateISO: "2026-03-13",
    relatedTemplate: { slug: "contrato-de-prestacao-de-servico", label: "Gerar contrato de prestação de serviço" },
    content: `## O que é um contrato de prestação de serviço PJ?

O contrato de prestação de serviço PJ é o documento que formaliza a relação entre uma empresa contratante e um profissional que atua como pessoa jurídica. Diferente do contrato CLT, essa modalidade não cria vínculo empregatício, desde que sejam respeitadas certas condições previstas na legislação trabalhista brasileira.

Esse tipo de contratação cresceu enormemente nos últimos anos, impulsionado pela reforma trabalhista de 2017, pelo crescimento do trabalho remoto e pela busca das empresas por maior flexibilidade operacional. No entanto, a chamada "pejotização" — quando se disfarça uma relação de emprego como prestação de serviço PJ — é ilegal e pode gerar graves consequências jurídicas.

Por isso, ter um contrato bem redigido é fundamental para definir claramente a natureza da relação e proteger ambas as partes. Neste artigo, vamos abordar tudo o que você precisa saber sobre o contrato de serviço PJ.

### Quando usar a contratação PJ

A contratação PJ é adequada quando:
- O profissional tem autonomia para definir como executar o trabalho
- Não há subordinação hierárquica direta
- O profissional pode prestar serviço para outros clientes
- Não há obrigatoriedade de cumprir horário fixo
- O profissional assume os riscos da sua atividade

## PJ vs CLT: entenda as diferenças fundamentais

Antes de optar pela contratação PJ, é essencial compreender as diferenças em relação ao regime CLT, pois a escolha errada pode gerar passivos trabalhistas milionários.

### Regime CLT

No regime CLT, o trabalhador tem carteira assinada e recebe todos os benefícios previstos em lei: 13º salário, férias remuneradas com 1/3, FGTS, INSS patronal, vale-transporte e, em muitos casos, vale-alimentação e plano de saúde. A empresa tem controle sobre horário, local e forma de execução do trabalho, configurando a subordinação.

O custo total para a empresa pode chegar a 70-100% sobre o salário bruto, considerando todos os encargos e benefícios obrigatórios.

### Regime PJ

No regime PJ, o profissional emite nota fiscal pelos serviços prestados e é responsável por seus próprios tributos (ISS, PIS, COFINS, IRPJ, CSLL) e contribuição previdenciária. Não há 13º, férias, FGTS ou qualquer benefício trabalhista obrigatório.

O profissional tem liberdade para definir seus horários, métodos de trabalho e pode atender múltiplos clientes simultaneamente. O valor do contrato geralmente é maior do que o salário CLT equivalente, justamente para compensar a ausência de benefícios.

### Os 4 elementos do vínculo empregatício

Para que exista vínculo empregatício, é necessária a presença simultânea de quatro elementos:

1. **Pessoalidade**: o serviço só pode ser executado por aquela pessoa específica
2. **Habitualidade**: o trabalho é prestado de forma contínua e regular
3. **Subordinação**: o profissional recebe ordens sobre como, quando e onde trabalhar
4. **Onerosidade**: existe pagamento pelo serviço

Se esses quatro elementos estiverem presentes na relação PJ, a Justiça do Trabalho pode reconhecer o vínculo empregatício, obrigando a empresa a pagar todas as verbas trabalhistas retroativas.

## Cláusulas essenciais do contrato PJ

Um contrato de prestação de serviço PJ bem elaborado deve conter as seguintes cláusulas:

### Qualificação das partes

Identificação completa de ambas as empresas: razão social, CNPJ, endereço, representante legal com CPF e cargo. É fundamental que o prestador tenha CNPJ ativo e regular.

### Objeto do contrato

Descrição detalhada dos serviços a serem prestados. Quanto mais específico, melhor. Evite descrições genéricas como "serviços administrativos" — prefira "elaboração de relatórios financeiros mensais, análise de balanço patrimonial e assessoria em planejamento tributário".

### Prazo e vigência

Defina claramente o prazo do contrato: determinado (com data de início e fim) ou indeterminado (com cláusula de rescisão). Contratos por projeto geralmente têm prazo determinado vinculado à entrega do projeto.

### Valor e forma de pagamento

Especifique o valor dos honorários, periodicidade de pagamento (mensal, por entrega, por hora), prazo para pagamento após emissão da nota fiscal e dados bancários para depósito. Inclua também regras sobre reajuste anual.

### Obrigações do contratante

- Fornecer informações e materiais necessários para execução do serviço
- Efetuar pagamentos nos prazos acordados
- Designar um responsável para comunicação e aprovações
- Respeitar a autonomia do prestador

### Obrigações do prestador

- Executar os serviços com qualidade e dentro dos prazos
- Emitir nota fiscal a cada pagamento
- Manter regularidade fiscal e tributária
- Comunicar impedimentos ou atrasos com antecedência
- Garantir sigilo sobre informações confidenciais

### Cláusula de não exclusividade

Uma das cláusulas mais importantes para afastar o vínculo empregatício. Deve ficar claro que o prestador PJ pode atender outros clientes e que não há exclusividade na relação, salvo acordo específico e remunerado separadamente.

### Cláusula de autonomia

Reforce que o prestador tem liberdade para definir seus horários, local de trabalho e métodos de execução. Evite estipular horários fixos ou exigir presença diária na empresa contratante.

### Possibilidade de substituição

Prever que o prestador pode designar outro profissional de sua equipe para executar os serviços, caso necessário. Isso afasta o elemento da pessoalidade e reforça a natureza empresarial da relação.

## Obrigações tributárias na contratação PJ

Tanto o contratante quanto o prestador PJ têm obrigações tributárias que devem ser observadas:

### Para o prestador PJ

O prestador deve emitir nota fiscal de serviços a cada pagamento recebido. Os tributos variam conforme o regime tributário adotado:

**Simples Nacional**: alíquota única que varia de 6% a 33% conforme o faturamento e a atividade (Anexos III, IV ou V).

**Lucro Presumido**: ISS (2% a 5%), PIS (0,65%), COFINS (3%), IRPJ (4,8%) e CSLL (2,88%), totalizando aproximadamente 13% a 16%.

**Lucro Real**: indicado para empresas com margem de lucro baixa ou prejuízo fiscal.

### Para o contratante

A empresa contratante deve fazer a retenção de tributos na fonte quando previsto em lei:
- ISS retido na fonte (em alguns municípios)
- IRRF de 1,5% para serviços profissionais
- PIS, COFINS e CSLL retidos (para pagamentos acima de R$ 215,05 no Lucro Presumido/Real)

### INSS na contratação PJ

Uma dúvida frequente é sobre a retenção de INSS. Na contratação PJ, não há retenção de 11% como ocorre com contribuintes individuais. O prestador PJ recolhe sua contribuição previdenciária através do pró-labore como sócio da sua empresa.

## Como evitar vínculo empregatício

Para que a contratação PJ seja legítima e segura, siga estas recomendações práticas:

**Não exija horário fixo**: permita que o prestador defina seus horários. Se precisar de disponibilidade em determinados períodos, negocie isso como "horário preferencial", não obrigatório.

**Não exija exclusividade gratuita**: se precisar de exclusividade, formalize isso como cláusula específica com remuneração adicional.

**Permita substituição**: aceite que outro profissional da empresa do prestador possa executar os serviços eventualmente.

**Não aplique punições disciplinares**: advertências, suspensões e outras medidas disciplinares são próprias da relação de emprego.

**Pagamento por nota fiscal**: sempre exija nota fiscal e faça o pagamento em nome da pessoa jurídica, nunca da pessoa física.

**Evite integração excessiva**: o prestador PJ não deve participar de reuniões obrigatórias, usar crachá da empresa ou estar sujeito às mesmas regras dos empregados CLT.

### O que a jurisprudência diz

Os tribunais trabalhistas brasileiros têm sido rigorosos na análise de contratos PJ. Casos em que o profissional PJ trabalha no escritório da empresa, cumpre horário fixo, recebe ordens diretas e não presta serviço para outros clientes são frequentemente requalificados como relação de emprego.

A multa por fraude trabalhista pode incluir: pagamento retroativo de todos os direitos CLT (13º, férias, FGTS com multa de 40%), além de multas administrativas aplicadas pelo Ministério do Trabalho.

## Rescisão do contrato PJ

O contrato deve prever claramente as condições de rescisão:

### Rescisão sem justa causa

Qualquer parte pode rescindir o contrato mediante aviso prévio (geralmente 30 dias). Defina se há multa rescisória e como será calculada.

### Rescisão por justa causa

Liste as situações que configuram justa causa para rescisão imediata: descumprimento de cláusulas contratuais, inadimplência, conduta inadequada, violação de confidencialidade, entre outras.

### Obrigações pós-rescisão

Defina o prazo para pagamento de valores pendentes após a rescisão, devolução de materiais e equipamentos, e continuidade de obrigações de confidencialidade.

## Gere seu contrato no Documind

Com o Documind, você cria contratos de prestação de serviço profissionais em poucos minutos. Basta preencher os dados das partes, descrever o serviço e definir os valores — a inteligência artificial gera o documento completo com todas as cláusulas essenciais para proteger sua empresa e afastar o risco de vínculo empregatício.`,
  },
  {
    slug: "como-fazer-procuracao-online",
    title: "Como fazer procuração online: guia completo e passo a passo",
    metaDescription:
      "Aprenda como fazer procuração online de forma rápida e segura. Guia com tipos, passo a passo, validação digital e custos atualizados.",
    category: "Pessoal",
    readTime: "4 min",
    date: "14 de março de 2026",
    dateISO: "2026-03-14",
    relatedTemplate: { slug: "procuracao-simples", label: "Gerar procuração simples" },
    content: `## O que é procuração e para que serve?

A procuração é um documento jurídico pelo qual uma pessoa (outorgante) concede poderes a outra (outorgado ou procurador) para agir em seu nome em determinadas situações. É um dos documentos mais utilizados no dia a dia dos brasileiros, seja para resolver questões bancárias, representação em processos judiciais, transações imobiliárias ou simples atos administrativos.

Com o avanço da tecnologia e da digitalização dos serviços públicos e privados, a procuração online tornou-se uma realidade cada vez mais acessível. Hoje, é possível criar, assinar e até mesmo registrar procurações sem sair de casa, utilizando certificados digitais e plataformas especializadas.

Neste guia completo, vamos explicar tudo o que você precisa saber para fazer uma procuração online: os tipos existentes, o passo a passo, as formas de validação digital e os custos envolvidos.

### Quando você precisa de uma procuração

As situações mais comuns que exigem procuração incluem:
- Representação em órgãos públicos (INSS, Receita Federal, DETRAN)
- Movimentação bancária por terceiros
- Compra e venda de imóveis ou veículos
- Representação em assembleias de condomínio
- Matrícula escolar ou universitária
- Recebimento de encomendas e documentos
- Representação em processos judiciais

## Tipos de procuração

Existem diferentes tipos de procuração, e escolher o correto é fundamental para que o documento tenha validade e atenda à sua necessidade.

### Procuração particular simples

É a mais comum e pode ser feita por qualquer pessoa sem necessidade de cartório. Serve para atos simples do dia a dia, como retirar documentos, representar em reuniões ou resolver questões administrativas. Não precisa de reconhecimento de firma para ter validade entre as partes, mas algumas instituições podem exigir.

### Procuração particular com firma reconhecida

Igual à procuração particular, mas com as assinaturas reconhecidas em cartório. Isso confere maior segurança jurídica e é exigida por muitas instituições, como bancos, cartórios de registro de imóveis e órgãos públicos.

### Procuração pública (por escritura pública)

Lavrada em cartório de notas por um tabelião. É obrigatória para determinados atos, como compra e venda de imóveis, casamento por procuração e alguns atos junto a órgãos públicos. Tem fé pública e não pode ser contestada facilmente.

### Procuração ad judicia

Procuração específica para representação em processos judiciais. Concede poderes ao advogado para atuar em nome do outorgante perante o Poder Judiciário. Pode ser particular, mas geralmente segue modelo próprio previsto no Código de Processo Civil.

### Procuração com poderes especiais

Quando o procurador precisa de poderes específicos além dos gerais, como vender imóveis, fazer acordos, receber valores ou tomar decisões que afetam o patrimônio do outorgante. Os poderes especiais devem ser descritos expressamente no documento.

## Como fazer procuração online: passo a passo

Fazer uma procuração online tornou-se um processo acessível e relativamente simples. Veja as principais formas:

### Opção 1: Procuração digital com certificado digital

A forma mais segura de fazer procuração online é utilizando certificado digital (e-CPF ou e-CNPJ). Com o certificado digital, você pode:

1. **Redigir a procuração** em formato digital (Word ou PDF)
2. **Assinar digitalmente** utilizando seu certificado digital ICP-Brasil
3. **Enviar por e-mail** ao procurador e às instituições que necessitam

A assinatura digital com certificado ICP-Brasil tem a mesma validade jurídica que a assinatura manuscrita com firma reconhecida, conforme a Medida Provisória 2.200-2/2001.

### Opção 2: Procuração online via e-Notariado

O e-Notariado é a plataforma oficial dos cartórios brasileiros para prática de atos notariais eletrônicos. Através dele, é possível lavrar procurações públicas de forma 100% online:

1. Acesse o site do e-Notariado (e-notariado.org.br)
2. Crie sua conta e valide sua identidade
3. Solicite a lavratura da procuração pública
4. Realize uma videoconferência com o tabelião
5. Assine digitalmente o documento
6. Receba a procuração eletrônica com validade jurídica plena

Essa opção é ideal para quem precisa de procuração pública mas não pode ir ao cartório presencialmente.

### Opção 3: Plataformas de criação de documentos

Plataformas como o Documind permitem criar procurações particulares de forma rápida e prática:

1. Escolha o modelo de procuração
2. Preencha os dados do outorgante e do procurador
3. Defina os poderes concedidos
4. Gere o documento em PDF
5. Imprima e assine (ou assine digitalmente)

### Opção 4: Procuração por e-mail ou plataforma digital

Para situações que não exigem reconhecimento de firma, é possível enviar uma procuração assinada digitalmente por e-mail. Algumas instituições aceitam procurações com assinatura eletrônica simples, especialmente após a Lei 14.063/2020, que regulamentou o uso de assinaturas eletrônicas no Brasil.

## Validação digital de procurações

A validade jurídica de uma procuração digital depende do tipo de assinatura utilizada:

### Assinatura eletrônica simples

Inclui aceite em plataforma, senha, biometria ou confirmação por e-mail. Tem validade jurídica limitada, aceita principalmente em relações privadas e alguns serviços públicos que a admitem expressamente.

### Assinatura eletrônica avançada

Utiliza certificados não emitidos pela ICP-Brasil, mas que permitem identificar o signatário de forma confiável. Aceita em interações com entes públicos de menor criticidade.

### Assinatura eletrônica qualificada

Utiliza certificado digital ICP-Brasil (e-CPF ou e-CNPJ). Tem a mesma validade da assinatura manuscrita com firma reconhecida. É aceita universalmente por órgãos públicos e privados.

### Qual assinatura usar?

Para procurações simples do dia a dia, a assinatura eletrônica simples pode ser suficiente. Para atos que envolvam patrimônio, representação judicial ou órgãos públicos, prefira a assinatura qualificada com certificado ICP-Brasil ou a procuração pública via e-Notariado.

## Custos para fazer procuração

Os custos variam conforme o tipo de procuração e a forma de elaboração:

### Procuração particular

- Elaboração: gratuita (se feita por conta própria) ou R$ 50 a R$ 200 (se feita por advogado)
- Reconhecimento de firma: R$ 10 a R$ 30 por assinatura
- Cópia autenticada: R$ 5 a R$ 15 por página

### Procuração pública presencial

- Escritura pública: R$ 100 a R$ 500 (varia por estado e complexidade)
- Os valores são tabelados por cada estado

### Procuração pública online (e-Notariado)

- Mesmo valor da procuração pública presencial
- Pode haver taxa adicional de tecnologia (geralmente pequena)

### Certificado digital

- e-CPF A1 (software, validade 1 ano): R$ 100 a R$ 200
- e-CPF A3 (token ou cartão, validade 1 a 3 anos): R$ 150 a R$ 400

## Elementos obrigatórios da procuração

Independente de ser online ou presencial, toda procuração deve conter:

1. **Identificação do outorgante**: nome completo, nacionalidade, estado civil, profissão, CPF, RG e endereço
2. **Identificação do outorgado**: mesmos dados do outorgante
3. **Poderes concedidos**: descrição clara e específica dos atos que o procurador pode praticar
4. **Finalidade**: para que situação ou órgão a procuração será utilizada
5. **Prazo de validade**: determinado ou indeterminado (se omitido, vale até revogação)
6. **Local e data**: onde e quando a procuração foi emitida
7. **Assinatura do outorgante**: manuscrita ou digital

### Cuidados importantes

- Nunca conceda poderes amplos demais — seja específico
- Defina prazo de validade sempre que possível
- Guarde uma cópia do documento para seu controle
- A procuração pode ser revogada a qualquer momento pelo outorgante
- Informe o procurador sobre os limites dos poderes concedidos

## Revogação da procuração

A procuração pode ser revogada a qualquer momento pelo outorgante, independente do prazo estipulado. Para revogar:

1. Elabore um instrumento de revogação por escrito
2. Notifique o procurador sobre a revogação
3. Notifique as instituições onde a procuração foi utilizada
4. Se a procuração foi registrada em cartório, averbe a revogação

A revogação só produz efeito perante terceiros após a devida comunicação. Até ser notificado, o procurador pode continuar praticando atos válidos.

## Gere sua procuração no Documind

Com o Documind, você cria procurações simples de forma rápida e profissional. Basta informar os dados do outorgante e do procurador, definir os poderes e a finalidade — em minutos você tem o documento pronto para impressão e assinatura. Experimente agora e simplifique sua vida jurídica.`,
  },
  {
    slug: "notificacao-extrajudicial-modelo",
    title: "Notificação extrajudicial: modelo, quando usar e como enviar",
    metaDescription:
      "Saiba o que é notificação extrajudicial, quando usar, como redigir e enviar. Modelo pronto e dicas para garantir validade jurídica.",
    category: "Pessoal",
    readTime: "5 min",
    date: "15 de março de 2026",
    dateISO: "2026-03-15",
    content: `## O que é notificação extrajudicial?

A notificação extrajudicial é um documento formal utilizado para comunicar, cobrar, exigir ou informar algo a outra parte sem precisar recorrer ao Poder Judiciário. É uma das ferramentas mais importantes do direito brasileiro para a resolução de conflitos de forma amigável e preventiva.

Trata-se de uma comunicação escrita, geralmente enviada por carta registrada com aviso de recebimento (AR), por cartório de títulos e documentos ou, em alguns casos, por meios eletrônicos. O objetivo é criar prova inequívoca de que a outra parte foi formalmente comunicada sobre determinado assunto.

A notificação extrajudicial serve como um passo anterior à ação judicial. Em muitos casos, a lei exige que a parte notifique a outra antes de ingressar com processo, como nos casos de rescisão contratual, cobrança de dívidas e constituição em mora.

### Importância prática

Além de ser requisito legal em diversas situações, a notificação extrajudicial é uma ferramenta estratégica poderosa. Ela demonstra boa-fé, cria registro documental da tentativa de resolução amigável e, frequentemente, resolve o problema sem necessidade de processo judicial — economizando tempo, dinheiro e desgaste emocional para ambas as partes.

## Quando usar a notificação extrajudicial

A notificação extrajudicial pode ser utilizada em diversas situações. Veja as mais comuns:

### Cobrança de dívidas

Uma das aplicações mais frequentes é a cobrança de valores em atraso. A notificação extrajudicial constitui o devedor em mora (atraso formal) e serve como prova de que ele foi avisado sobre a dívida e teve oportunidade de pagá-la antes de uma ação judicial.

Para títulos como cheques e duplicatas, a notificação por cartório é inclusive requisito para o protesto do título.

### Rescisão de contrato

Quando uma das partes deseja encerrar um contrato — seja de locação, prestação de serviço, parceria comercial ou qualquer outro — a notificação extrajudicial é o meio adequado para comunicar formalmente a decisão, respeitando os prazos de aviso prévio contratual.

### Descumprimento contratual

Se a outra parte está descumprindo cláusulas de um contrato, a notificação serve para registrar formalmente a infração e conceder prazo para regularização antes de medidas mais severas.

### Invasão de propriedade

Em casos de esbulho possessório (invasão de terreno ou imóvel), a notificação extrajudicial é o primeiro passo para exigir a desocupação voluntária antes de uma ação de reintegração de posse.

### Direito do consumidor

Consumidores podem usar a notificação para exigir reparo de produtos com defeito, cancelamento de cobranças indevidas, cumprimento de garantia ou devolução de valores pagos indevidamente.

### Questões condominiais

Síndicos e condôminos utilizam notificações para comunicar infrações ao regimento interno, cobrar taxas condominiais em atraso ou informar sobre decisões assembleares que afetam moradores específicos.

### Direitos autorais e propriedade intelectual

Para comunicar uso indevido de marca, imagem, texto ou qualquer criação intelectual protegida, exigindo a cessação do uso e eventual indenização.

## Como redigir uma notificação extrajudicial

A redação da notificação extrajudicial deve ser clara, objetiva e formal. Veja os elementos essenciais:

### Cabeçalho

Inclua o título "NOTIFICAÇÃO EXTRAJUDICIAL", local e data de emissão.

### Identificação das partes

**Notificante** (quem envia): nome completo ou razão social, CPF/CNPJ, endereço completo.

**Notificado** (quem recebe): mesmos dados, incluindo endereço para entrega.

### Narração dos fatos

Descreva de forma clara e cronológica os fatos que motivam a notificação. Mencione datas, valores, cláusulas contratuais e qualquer informação relevante. Evite linguagem emocional ou acusatória — seja factual e direto.

### Fundamentação legal

Cite os dispositivos legais que embasam sua pretensão. Por exemplo, artigos do Código Civil, do Código de Defesa do Consumidor, da Lei do Inquilinato ou de qualquer outra legislação aplicável. Isso dá mais peso ao documento e demonstra conhecimento jurídico.

### Pretensão

Deixe claro o que você espera que o notificado faça: pagar um valor, cumprir uma obrigação, cessar uma conduta, desocupar um imóvel, entregar um documento, etc.

### Prazo

Estabeleça um prazo razoável para cumprimento da pretensão. O prazo deve ser compatível com a complexidade da obrigação. Para pagamento de valores, 5 a 15 dias é comum. Para desocupação de imóvel, 30 dias ou mais pode ser necessário.

### Consequências do não cumprimento

Informe quais medidas serão adotadas caso o notificado não atenda à notificação dentro do prazo: ação judicial, protesto de título, comunicação a órgãos de proteção ao crédito, entre outras.

### Assinatura

Assine o documento. Se possível, inclua a assinatura de um advogado, o que confere maior seriedade à notificação (embora não seja obrigatório).

## Como enviar a notificação extrajudicial

A forma de envio é crucial para garantir que a notificação tenha validade como prova. Existem três formas principais:

### Via cartório de títulos e documentos

É a forma mais segura e com maior força probatória. O cartório envia a notificação ao destinatário e emite uma certidão confirmando a entrega ou a tentativa de entrega. O procedimento é simples:

1. Leve a notificação ao cartório de títulos e documentos
2. Pague a taxa (geralmente R$ 50 a R$ 150, dependendo do estado)
3. O cartório entrega a notificação ao destinatário
4. Você recebe a certidão de diligência (entrega realizada ou não)

Mesmo que o destinatário se recuse a receber, o cartório certifica a tentativa, o que já produz efeitos jurídicos em muitos casos.

### Via correios com AR (Aviso de Recebimento)

Envie a notificação por carta registrada com aviso de recebimento. Quando o destinatário receber, o AR é assinado e devolvido ao remetente como comprovante de entrega.

Passos:
1. Imprima duas vias da notificação
2. Vá aos Correios e envie como carta registrada com AR
3. Guarde o comprovante de postagem
4. Quando receber o AR assinado, arquive-o como prova

**Custo**: aproximadamente R$ 15 a R$ 30, dependendo do peso e destino.

### Via meio eletrônico

Com a evolução das assinaturas digitais, é possível enviar notificações por e-mail, desde que se possa comprovar o envio e o recebimento. Plataformas de assinatura digital com registro de logs são as mais indicadas.

No entanto, a notificação por e-mail tem menor força probatória do que a enviada por cartório ou correio com AR. É recomendada apenas para situações de menor gravidade ou como complemento a outros meios.

## Efeitos jurídicos da notificação

A notificação extrajudicial produz importantes efeitos jurídicos:

### Constituição em mora

A notificação constitui o devedor em mora, o que é requisito para cobrança de juros moratórios, multa e correção monetária em muitos tipos de obrigação (artigo 397 do Código Civil).

### Interrupção de prescrição

Em alguns casos, a notificação pode servir como marco para contagem de prazos prescricionais, especialmente quando combinada com outros atos jurídicos.

### Prova de boa-fé

Demonstra que o notificante tentou resolver a questão de forma amigável antes de recorrer ao Judiciário. Isso pode ser valorizado pelo juiz na fixação de honorários e custas processuais.

### Requisito processual

Em algumas situações, a notificação prévia é requisito obrigatório para ajuizamento de ação judicial. Por exemplo, ação de despejo por falta de pagamento, ação de resolução contratual e cobrança de seguro.

## Modelo de notificação extrajudicial

Um modelo básico de notificação extrajudicial deve seguir esta estrutura:

1. Título: "NOTIFICAÇÃO EXTRAJUDICIAL"
2. Local e data
3. Dados do notificante
4. Dados do notificado
5. Texto: "Pelo presente instrumento, fica V.Sa. NOTIFICADO(A) sobre os seguintes fatos:"
6. Narração dos fatos (em parágrafos numerados)
7. Fundamentação legal
8. Pretensão e prazo
9. Consequências do não cumprimento
10. Fecho: "Nestes termos, fica V.Sa. devidamente notificado(a)."
11. Assinatura do notificante

### Erros comuns a evitar

- Linguagem agressiva ou ameaçadora (pode configurar constrangimento ilegal)
- Falta de prazo para cumprimento
- Ausência de fundamentação legal
- Envio sem comprovante de recebimento
- Notificação genérica demais, sem especificar a pretensão
- Ameaça de medidas que não se pretende tomar

## Dica: use o Documind

Embora o Documind ainda não tenha um modelo específico de notificação extrajudicial, a plataforma oferece diversos modelos de documentos jurídicos que podem servir como base para sua comunicação formal. Explore os modelos disponíveis e aproveite a praticidade da inteligência artificial para gerar documentos profissionais em minutos.`,
  },
  {
    slug: "contrato-de-locacao-comercial-pontos-criticos",
    title: "Contrato de locação comercial: 10 pontos críticos que você precisa saber",
    metaDescription:
      "Conheça os 10 pontos mais importantes de um contrato de locação comercial: ação renovatória, luvas, garantias, ponto comercial e mais.",
    category: "Imobiliário",
    readTime: "7 min",
    date: "16 de março de 2026",
    dateISO: "2026-03-16",
    relatedTemplate: { slug: "contrato-de-aluguel-comercial", label: "Gerar contrato de aluguel comercial" },
    content: `## Por que o contrato de locação comercial é diferente?

O contrato de locação comercial possui particularidades que o tornam muito mais complexo do que o contrato residencial. Enquanto na locação residencial o objetivo é moradia e a proteção recai sobre o inquilino como parte mais vulnerável, na locação comercial entram em jogo fatores como ponto comercial, fundo de comércio, investimentos em reformas e a própria sobrevivência do negócio.

A Lei do Inquilinato (Lei 8.245/91) dedica capítulos específicos à locação não residencial, com regras próprias sobre renovação compulsória, retomada do imóvel e proteção ao ponto comercial. Desconhecer essas regras pode custar caro — tanto para o locador quanto para o locatário.

Neste artigo, apresentamos os 10 pontos mais críticos que você precisa conhecer antes de assinar um contrato de locação comercial.

## 1. Prazo do contrato e suas implicações

O prazo do contrato de locação comercial é um dos pontos mais estratégicos e deve ser cuidadosamente negociado.

### Contrato de prazo determinado

A maioria dos contratos comerciais é firmada por prazo determinado, geralmente de 3 a 5 anos. Durante esse período, nenhuma das partes pode rescindir o contrato sem pagar multa, salvo acordo ou previsão contratual.

Para o inquilino, um prazo mais longo oferece segurança para investir no ponto comercial. Para o locador, garante renda previsível por período estendido.

### Contrato de prazo indeterminado

Após o vencimento do prazo determinado, se nenhuma das partes se manifestar, o contrato passa automaticamente a vigorar por prazo indeterminado. Nesse caso, o locador pode pedir a retomada com 30 dias de antecedência, o que é arriscado para o comerciante.

### A importância do prazo de 5 anos

O prazo mínimo de 5 anos é fundamental para que o locatário tenha direito à ação renovatória (que veremos no próximo tópico). Se o contrato tiver prazo inferior, o inquilino não pode exigir judicialmente a renovação.

## 2. Ação renovatória: o direito de renovar o contrato

A ação renovatória é um dos direitos mais importantes do locatário comercial. Prevista nos artigos 51 a 57 da Lei do Inquilinato, permite que o inquilino renove compulsoriamente o contrato, mesmo contra a vontade do locador.

### Requisitos para a ação renovatória

Para ter direito à renovação compulsória, o locatário deve cumprir cumulativamente:

1. **Contrato escrito** com prazo determinado
2. **Prazo mínimo de 5 anos** (podem ser contratos sucessivos que somem 5 anos)
3. **Exploração da mesma atividade** há pelo menos 3 anos ininterruptos
4. **Propositura da ação** no período entre 1 ano e 6 meses antes do término do contrato

### Quando o locador pode recusar a renovação

Mesmo com todos os requisitos, o locador pode contestar a renovação em situações específicas:
- Reforma substancial do imóvel por determinação do poder público
- Uso próprio do imóvel (ou para cônjuge, ascendentes ou descendentes)
- Proposta de aluguel mais vantajosa de terceiro (desde que o inquilino não cubra a oferta)
- Transferência do fundo de comércio existente há mais de um ano

## 3. Ponto comercial e fundo de comércio

O ponto comercial é o local onde o empresário estabelece sua atividade e conquista sua clientela. Ele tem valor econômico próprio, muitas vezes superior ao próprio aluguel, e merece proteção especial.

### O que é fundo de comércio

O fundo de comércio (ou estabelecimento empresarial) é o conjunto de bens organizados pelo empresário para exercer sua atividade: equipamentos, estoque, marca, clientela, ponto comercial, entre outros. A localização é um dos elementos mais valiosos.

### Proteção contratual do ponto

O contrato deve prever claramente:
- A atividade que será exercida no imóvel
- A possibilidade de cessão do ponto junto com o fundo de comércio
- As condições para sublocação
- A indenização em caso de retomada do imóvel pelo locador que resulte em perda do ponto

### Indenização pela perda do ponto

Se o locador retomar o imóvel e não der a destinação declarada no prazo de 3 meses, o locatário tem direito à indenização por perdas e danos, incluindo lucros cessantes e o valor do ponto comercial.

## 4. Luvas: o que são e quando são cobradas

As "luvas" são um valor pago pelo novo inquilino ao antigo pela cessão do ponto comercial ou pelo direito de ocupar determinado imóvel comercial. Também podem ser cobradas pelo locador como condição para celebrar o contrato.

### Legalidade das luvas

A cobrança de luvas é legal no Brasil, mas existem limites. Não é permitido cobrar luvas na renovação compulsória via ação renovatória. Nas demais situações — novo contrato, cessão de ponto, trespasse — as luvas são livremente negociadas entre as partes.

### Como calcular o valor das luvas

Não existe fórmula fixa. O valor depende de fatores como:
- Localização do imóvel
- Fluxo de clientes na região
- Estado de conservação e reformas realizadas
- Tempo de existência do negócio no local
- Rentabilidade do ponto

## 5. Garantias locatícias

As garantias são fundamentais no contrato comercial e geralmente envolvem valores mais altos do que na locação residencial.

### Tipos de garantia admitidos

A Lei do Inquilinato prevê quatro tipos de garantia (e o contrato só pode exigir uma delas):

**Caução**: depósito em dinheiro (limitado a 3 meses de aluguel), bens móveis ou imóveis.

**Fiança**: um terceiro (fiador) se responsabiliza pelo pagamento em caso de inadimplência. Na locação comercial, é comum exigir fiadores com patrimônio compatível com o valor total do contrato.

**Seguro-fiança**: apólice contratada junto a seguradora que garante o pagamento dos aluguéis. Custo anual de 1 a 3 aluguéis.

**Cessão fiduciária de quotas de fundo de investimento**: pouco utilizada, mas prevista em lei.

### Garantia mais comum na locação comercial

Na prática, a fiança e o seguro-fiança são as garantias mais utilizadas. Para contratos de alto valor, o seguro-fiança é preferível por oferecer coberturas adicionais como danos ao imóvel e multas contratuais.

## 6. Reajuste do aluguel

O reajuste do valor do aluguel é tema sensível e deve estar claramente previsto no contrato.

### Reajuste anual por índice

A prática mais comum é o reajuste anual pelo IGP-M (Índice Geral de Preços – Mercado) ou pelo IPCA (Índice Nacional de Preços ao Consumidor Amplo). Nos últimos anos, muitos contratos migraram do IGP-M para o IPCA, que tende a ser mais estável.

### Revisão judicial do aluguel

A cada 3 anos, qualquer das partes pode solicitar judicialmente a revisão do valor do aluguel para adequá-lo ao preço de mercado (artigo 19 da Lei do Inquilinato). Isso pode resultar em aumento ou diminuição do valor.

### Aluguel percentual

Em shopping centers e centros comerciais, é comum o aluguel misto: uma parte fixa (aluguel mínimo) e uma parte variável (percentual sobre o faturamento da loja). Essa estrutura deve estar detalhada no contrato.

## 7. Responsabilidade por reformas e benfeitorias

As reformas e benfeitorias são fonte constante de conflitos em locações comerciais e devem ser tratadas com extremo cuidado no contrato.

### Classificação das benfeitorias

**Necessárias**: indispensáveis para conservação do imóvel (reparos estruturais, conserto de telhado). O locatário tem direito à indenização, mesmo sem autorização prévia.

**Úteis**: aumentam ou facilitam o uso do imóvel (ar-condicionado central, divisórias). O locatário tem direito à indenização se houver autorização prévia do locador.

**Voluptuárias**: são de mero luxo ou recreio (decoração especial, jardim ornamental). Não geram direito à indenização, mas podem ser retiradas se não danificarem o imóvel.

### Cláusula de renúncia a benfeitorias

Muitos contratos comerciais incluem cláusula de renúncia a benfeitorias, pela qual o locatário abre mão de indenização por qualquer melhoria realizada no imóvel. Essa cláusula é válida e comum, mas deve ser negociada com cautela pelo inquilino.

## 8. Cláusula de destinação e exclusividade

### Destinação do imóvel

O contrato deve especificar a atividade que será exercida no imóvel. Mudanças de atividade sem autorização podem configurar infração contratual e justificar o despejo.

### Cláusula de exclusividade

Em shopping centers e galerias comerciais, é comum negociar cláusula de exclusividade, pela qual o locador se compromete a não alugar outros espaços no mesmo empreendimento para concorrentes diretos. Essa cláusula é valiosa e deve ser registrada formalmente.

## 9. Sublocação e cessão

### Sublocação

O locatário pode sublocar o imóvel a terceiros? Somente se o contrato permitir ou se o locador autorizar por escrito. Na locação comercial, a sublocação é mais comum do que na residencial, especialmente em espaços compartilhados e coworkings.

### Cessão do contrato

A cessão do contrato de locação — transferência integral para um novo locatário — também depende de autorização do locador, salvo se o contrato permitir expressamente. Na venda do fundo de comércio (trespasse), o novo proprietário assume o contrato de locação.

## 10. Multa e rescisão antecipada

### Multa por rescisão antecipada

O contrato deve prever multa proporcional ao período restante em caso de rescisão antecipada. A Lei do Inquilinato (artigo 4º) determina que a multa seja proporcional ao período de cumprimento do contrato.

### Direito de rescisão pelo locatário

Mesmo com contrato vigente, o locatário pode rescindir o contrato desde que pague a multa proporcional. Para contratos sem prazo determinado, basta notificar com 30 dias de antecedência.

### Despejo por falta de pagamento

O atraso no pagamento do aluguel é a causa mais comum de despejo comercial. O locador pode ajuizar ação de despejo cumulada com cobrança dos valores em atraso. O processo de despejo comercial costuma ser mais rápido que o residencial.

## Gere seu contrato no Documind

Com o Documind, você cria contratos de aluguel comercial completos e profissionais em minutos. A inteligência artificial gera todas as cláusulas essenciais, incluindo reajuste, garantias, benfeitorias e condições de rescisão. Preencha os dados e tenha seu contrato pronto para assinatura.`,
  },
  {
    slug: "rescisao-contrato-trabalho-direitos",
    title: "Rescisão de contrato de trabalho: direitos, cálculos e prazos",
    metaDescription:
      "Guia completo sobre rescisão de contrato de trabalho: tipos, cálculos de verbas rescisórias, prazos, FGTS e seguro-desemprego.",
    category: "Trabalhista",
    readTime: "6 min",
    date: "11 de março de 2026",
    dateISO: "2026-03-11",
    relatedTemplate: { slug: "termo-de-rescisao-contrato-trabalho", label: "Gerar termo de rescisão" },
    content: `## O que é rescisão de contrato de trabalho?

A rescisão de contrato de trabalho é o ato formal que encerra o vínculo empregatício entre empregador e empregado. É um dos momentos mais importantes da relação trabalhista, pois envolve o pagamento de verbas rescisórias, cumprimento de prazos legais e respeito a direitos que, se não observados, podem gerar ações judiciais e multas para a empresa.

No Brasil, a Consolidação das Leis do Trabalho (CLT) e a legislação complementar estabelecem regras específicas para cada tipo de rescisão, com direitos e obrigações diferentes para empregador e empregado. A Reforma Trabalhista de 2017 (Lei 13.467/2017) trouxe mudanças significativas, incluindo a criação de uma nova modalidade: a rescisão por acordo mútuo.

Compreender cada tipo de rescisão, os direitos envolvidos e os cálculos corretos é fundamental para evitar erros que podem custar caro. Neste guia, abordaremos tudo o que você precisa saber sobre o tema.

## Tipos de rescisão de contrato de trabalho

Existem cinco modalidades principais de rescisão, cada uma com regras específicas:

### 1. Demissão sem justa causa

É a modalidade em que o empregador decide encerrar o contrato sem que o empregado tenha cometido falta grave. É a rescisão que gera mais direitos para o trabalhador.

**Direitos do empregado:**
- Saldo de salário (dias trabalhados no mês)
- Aviso prévio (trabalhado ou indenizado)
- Férias vencidas + 1/3 constitucional
- Férias proporcionais + 1/3 constitucional
- 13º salário proporcional
- Multa de 40% sobre o saldo do FGTS
- Saque do FGTS
- Guias para seguro-desemprego

O aviso prévio é de 30 dias, acrescido de 3 dias por ano trabalhado na empresa, até o máximo de 90 dias (Lei 12.506/2011).

### 2. Demissão por justa causa

Ocorre quando o empregado comete falta grave prevista no artigo 482 da CLT. As hipóteses incluem: ato de improbidade, incontinência de conduta, negociação habitual sem permissão, condenação criminal, desídia, embriaguez habitual, violação de segredo, indisciplina, insubordinação, abandono de emprego, ofensas físicas, entre outras.

**Direitos do empregado (limitados):**
- Saldo de salário
- Férias vencidas + 1/3 (se houver)

O empregado perde o direito ao aviso prévio, 13º proporcional, férias proporcionais, multa de 40% do FGTS, saque do FGTS e seguro-desemprego.

**Importante**: a justa causa deve ser comprovada pelo empregador. Se não for bem documentada, o trabalhador pode revertê-la na Justiça do Trabalho, o que obriga a empresa a pagar todas as verbas da demissão sem justa causa, além de possível indenização por dano moral.

### 3. Pedido de demissão pelo empregado

Quando o próprio empregado decide encerrar o contrato. Nessa modalidade, o trabalhador abre mão de alguns direitos.

**Direitos do empregado:**
- Saldo de salário
- Férias vencidas + 1/3
- Férias proporcionais + 1/3
- 13º salário proporcional

**O empregado não recebe:**
- Aviso prévio indenizado (mas deve cumprir ou será descontado)
- Multa de 40% do FGTS
- Saque do FGTS (o saldo fica na conta vinculada)
- Seguro-desemprego

### 4. Rescisão por acordo mútuo (artigo 484-A da CLT)

Modalidade criada pela Reforma Trabalhista de 2017. Permite que empregador e empregado encerrem o contrato por acordo, com condições intermediárias.

**Direitos do empregado:**
- Saldo de salário
- Férias vencidas e proporcionais + 1/3
- 13º salário proporcional
- Metade do aviso prévio (se indenizado)
- Multa de 20% sobre o saldo do FGTS (metade dos 40%)
- Saque de até 80% do saldo do FGTS

**O empregado não recebe:**
- Seguro-desemprego

Essa modalidade é vantajosa quando ambas as partes desejam encerrar a relação de forma amigável, sem que o empregado precise "ser demitido" ou o empregador tenha que arcar com o custo total da demissão sem justa causa.

### 5. Rescisão indireta

É a "justa causa do empregador". Ocorre quando o empregador comete falta grave, e o empregado pode considerar o contrato rescindido. As hipóteses estão no artigo 483 da CLT e incluem: exigência de serviços superiores às forças do empregado, tratamento com rigor excessivo, não cumprimento das obrigações contratuais, entre outras.

**Direitos do empregado:**
- Mesmos direitos da demissão sem justa causa
- Possibilidade de indenização por danos morais e materiais

A rescisão indireta é reconhecida judicialmente e exige comprovação robusta das faltas cometidas pelo empregador.

## Cálculo das verbas rescisórias

O cálculo correto das verbas rescisórias é essencial para evitar erros e futuras reclamações trabalhistas. Veja como calcular cada verba:

### Saldo de salário

É o valor proporcional aos dias trabalhados no mês da rescisão.

**Fórmula**: Salário mensal ÷ 30 × dias trabalhados

Exemplo: salário de R$ 3.000, rescisão no dia 15 = R$ 3.000 ÷ 30 × 15 = R$ 1.500

### Aviso prévio

Se indenizado (não trabalhado), o valor é o salário integral acrescido de 3 dias por ano trabalhado.

**Fórmula**: Salário ÷ 30 × dias de aviso prévio

Exemplo: salário de R$ 3.000, 5 anos de empresa = aviso de 30 + 15 = 45 dias = R$ 3.000 ÷ 30 × 45 = R$ 4.500

O aviso prévio indenizado projeta o tempo de serviço para cálculo das demais verbas.

### Férias vencidas + 1/3

Se houver período aquisitivo completo sem gozo de férias.

**Fórmula**: Salário + 1/3 do salário

Exemplo: R$ 3.000 + R$ 1.000 = R$ 4.000

### Férias proporcionais + 1/3

Proporcionais ao período trabalhado no período aquisitivo em curso.

**Fórmula**: (Salário ÷ 12 × meses trabalhados) + 1/3

Exemplo: 7 meses = (R$ 3.000 ÷ 12 × 7) + 1/3 = R$ 1.750 + R$ 583,33 = R$ 2.333,33

### 13º salário proporcional

Proporcionais aos meses trabalhados no ano da rescisão (conta-se mês com mais de 15 dias trabalhados).

**Fórmula**: Salário ÷ 12 × meses trabalhados

Exemplo: rescisão em março, 3 meses = R$ 3.000 ÷ 12 × 3 = R$ 750

### Multa do FGTS

Incide sobre o saldo total da conta vinculada do FGTS, incluindo os depósitos do mês da rescisão e do aviso prévio.

**Sem justa causa**: 40% do saldo total
**Por acordo**: 20% do saldo total

## Prazos para pagamento

A CLT estabelece prazos rígidos para o pagamento das verbas rescisórias:

### Prazo legal

Independente do tipo de rescisão, o empregador tem até **10 dias corridos** após o término do contrato para efetuar o pagamento de todas as verbas rescisórias e entregar os documentos ao empregado (artigo 477, §6º da CLT).

### Documentos que devem ser entregues

- Termo de Rescisão do Contrato de Trabalho (TRCT)
- Guia para saque do FGTS (quando aplicável)
- Requerimento do seguro-desemprego (quando aplicável)
- Carteira de trabalho atualizada (física ou digital)
- Perfil Profissiográfico Previdenciário (PPP)
- Comprovante de depósito do FGTS do mês da rescisão

### Multa por atraso

Se o empregador não pagar dentro do prazo, fica sujeito à multa prevista no artigo 477, §8º da CLT: pagamento de um salário do empregado como penalidade, além de possíveis correções monetárias e juros.

## FGTS na rescisão

O Fundo de Garantia do Tempo de Serviço (FGTS) tem regras específicas conforme o tipo de rescisão:

### Saque do FGTS

- **Sem justa causa**: saque integral do saldo
- **Por acordo**: saque de até 80% do saldo
- **Pedido de demissão**: sem direito a saque (saldo fica retido)
- **Justa causa**: sem direito a saque

### Multa rescisória

- **Sem justa causa**: 40% sobre o saldo total
- **Por acordo**: 20% sobre o saldo total
- **Pedido de demissão e justa causa**: sem multa

### Chave de conectividade

Para sacar o FGTS, o empregado precisa da "chave de conectividade" fornecida pelo empregador no momento da rescisão. Sem ela, o saque não pode ser realizado.

## Seguro-desemprego

O seguro-desemprego é um benefício temporário pago ao trabalhador demitido sem justa causa. As regras são:

### Requisitos

**Primeira solicitação**: ter trabalhado pelo menos 12 meses nos últimos 18 meses antes da demissão.

**Segunda solicitação**: ter trabalhado pelo menos 9 meses nos últimos 12 meses antes da demissão.

**A partir da terceira**: ter trabalhado pelo menos 6 meses antes da demissão.

### Número de parcelas

- 6 a 11 meses trabalhados: 3 parcelas
- 12 a 23 meses trabalhados: 4 parcelas
- 24 meses ou mais trabalhados: 5 parcelas

### Valor das parcelas

O cálculo é baseado na média dos últimos 3 salários anteriores à demissão, aplicando-se faixas e percentuais definidos pelo governo, com teto atualizado anualmente.

### Prazo para requerer

O trabalhador deve solicitar o seguro-desemprego entre o 7º e o 120º dia após a demissão. Pode ser feito online pelo portal gov.br, pelo aplicativo Carteira de Trabalho Digital ou presencialmente nas unidades do SINE.

## Gere seu termo de rescisão no Documind

Com o Documind, você cria termos de rescisão de contrato de trabalho de forma rápida e profissional. Basta informar os dados do empregador, do empregado e as condições da rescisão — a inteligência artificial gera o documento completo com todas as informações necessárias. Simplifique o processo e evite erros.`,
  },
  {
    slug: "contrato-social-simples-mei-me",
    title: "Contrato social simples: como fazer para MEI, ME e EPP",
    metaDescription:
      "Saiba como elaborar o contrato social da sua empresa: cláusulas essenciais, capital social, divisão de quotas e alteração contratual.",
    category: "Comercial",
    readTime: "6 min",
    date: "10 de março de 2026",
    dateISO: "2026-03-10",
    content: `## O que é contrato social?

O contrato social é o documento que formaliza a constituição de uma empresa e estabelece as regras de funcionamento entre os sócios. É o equivalente à "certidão de nascimento" da pessoa jurídica — sem ele, a empresa não existe formalmente perante a lei.

O contrato social define quem são os sócios, qual o capital investido por cada um, como os lucros serão divididos, quem administra a empresa e quais as regras para entrada e saída de sócios. É registrado na Junta Comercial do estado onde a empresa será sediada e tem validade jurídica perante terceiros.

Apesar de parecer um documento burocrático, o contrato social é uma ferramenta de proteção fundamental. Sem ele, conflitos entre sócios podem se tornar insolúveis, a responsabilidade dos sócios pode se confundir com a da empresa, e decisões importantes ficam sem respaldo legal.

### Quem precisa de contrato social?

Toda empresa que tenha dois ou mais sócios precisa de contrato social. No caso de empresas individuais (EIRELI, SLU — Sociedade Limitada Unipessoal), o documento equivalente é chamado de "ato constitutivo". Já o MEI (Microempreendedor Individual) é registrado de forma simplificada e não necessita de contrato social formal, mas precisa do Certificado de Condição de Microempreendedor Individual (CCMEI).

## Tipos de empresa e seus documentos constitutivos

Para entender qual documento você precisa, é importante conhecer os principais tipos de empresa no Brasil:

### MEI — Microempreendedor Individual

O MEI é a forma mais simples de formalização. Faturamento máximo de R$ 81.000 por ano (valor de 2026), com permissão para contratar apenas um funcionário. O registro é feito online pelo Portal do Empreendedor, sem necessidade de contrato social.

**Documento**: Certificado de Condição de Microempreendedor Individual (CCMEI)

O MEI não precisa de contrato social, mas deve manter seus dados atualizados no portal e cumprir as obrigações fiscais (DAS mensal e declaração anual DASN-SIMEI).

### ME — Microempresa

A Microempresa é indicada para negócios com faturamento de até R$ 360.000 por ano. Pode ter um ou mais sócios e contratar funcionários sem limitação. O registro exige contrato social (ou ato constitutivo, se for unipessoal) registrado na Junta Comercial.

**Documento**: Contrato Social (se houver sócios) ou Ato Constitutivo (se unipessoal)

### EPP — Empresa de Pequeno Porte

A EPP atende empresas com faturamento entre R$ 360.000 e R$ 4.800.000 por ano. As regras para o contrato social são as mesmas da ME, apenas com enquadramento tributário diferente no Simples Nacional.

**Documento**: Contrato Social ou Ato Constitutivo

### Sociedade Limitada (LTDA)

É o tipo societário mais comum no Brasil. Os sócios têm responsabilidade limitada ao valor de suas quotas no capital social (após integralização total). O contrato social é obrigatório e deve seguir as regras do Código Civil (artigos 1.052 a 1.087).

### Sociedade Limitada Unipessoal (SLU)

Criada pela Lei da Liberdade Econômica (Lei 13.874/2019), permite a constituição de empresa limitada com apenas um sócio, sem exigência de capital mínimo. Substituiu a EIRELI como opção para empreendedores individuais.

## Cláusulas essenciais do contrato social

Um contrato social completo deve conter, no mínimo, as seguintes cláusulas:

### Qualificação dos sócios

Dados completos de cada sócio: nome completo, nacionalidade, estado civil (incluindo regime de bens se casado), profissão, número do CPF e RG, endereço residencial. Para sócios pessoas jurídicas, incluir razão social, CNPJ e dados do representante legal.

### Denominação social e nome fantasia

A **razão social** (denominação social) é o nome oficial da empresa, registrado na Junta Comercial. Deve incluir o tipo societário (ex: "Empresa Exemplo Ltda").

O **nome fantasia** é o nome comercial, usado no dia a dia e na comunicação com clientes. Pode ser diferente da razão social.

### Objeto social

Descrição detalhada das atividades que a empresa exercerá. Deve estar alinhado com os códigos CNAE (Classificação Nacional de Atividades Econômicas) escolhidos no registro. É importante ser abrangente o suficiente para cobrir atividades correlatas, mas sem exagerar.

### Sede e foro

Endereço completo da sede da empresa e o foro (comarca) eleito para resolução de eventuais disputas judiciais.

### Capital social

O capital social é o valor investido pelos sócios para iniciar as atividades da empresa. Pode ser integralizado em dinheiro, bens móveis ou imóveis. O contrato deve especificar:
- Valor total do capital social
- Número de quotas e valor de cada quota
- Participação de cada sócio (em quotas e percentual)
- Forma e prazo de integralização

### Divisão de quotas

As quotas representam a participação de cada sócio no capital social. A divisão pode ser igual ou desigual, conforme o investimento e a negociação entre os sócios.

Exemplo: capital social de R$ 100.000, dividido em 100.000 quotas de R$ 1,00 cada.
- Sócio A: 60.000 quotas (60%)
- Sócio B: 40.000 quotas (40%)

A divisão de quotas influencia diretamente no poder de voto, distribuição de lucros e responsabilidade dos sócios.

### Administração da sociedade

Defina quem será o administrador (ou administradores) da empresa e quais seus poderes. O administrador pode ser um dos sócios ou um profissional contratado. Os poderes comuns incluem:
- Representar a empresa perante terceiros
- Assinar contratos e documentos
- Movimentar contas bancárias
- Contratar e demitir funcionários

### Distribuição de lucros e pró-labore

Estabeleça como os lucros serão distribuídos entre os sócios. A distribuição pode ser proporcional às quotas ou em percentuais diferentes (se previsto no contrato social e aceito por todos os sócios).

O pró-labore é a remuneração mensal do sócio que trabalha na empresa. Deve ser definido em valor fixo e está sujeito a INSS e IRRF.

### Deliberações sociais

Defina as regras para tomada de decisões: quórum mínimo para deliberações ordinárias e extraordinárias, forma de convocação de reuniões ou assembleias, e assuntos que exigem unanimidade.

### Cessão de quotas e entrada de novos sócios

Estabeleça as regras para:
- Cessão de quotas entre sócios ou para terceiros
- Direito de preferência dos demais sócios
- Aprovação necessária para entrada de novos sócios
- Avaliação das quotas para cessão

### Retirada e exclusão de sócios

Preveja as condições para:
- Retirada voluntária de sócio
- Exclusão de sócio por justa causa
- Cálculo dos haveres (valor a ser pago ao sócio que sai)
- Prazo para pagamento dos haveres

### Dissolução da sociedade

Defina as hipóteses de dissolução da empresa e como será feita a liquidação do patrimônio.

## Alteração contratual

O contrato social pode ser alterado sempre que houver mudança nas condições da empresa. As alterações mais comuns são:

### Tipos de alteração

- Mudança de endereço da sede
- Alteração do objeto social (novas atividades)
- Aumento ou redução do capital social
- Entrada ou saída de sócios
- Mudança na administração
- Alteração na distribuição de quotas

### Como fazer a alteração

1. Elaborar a Alteração Contratual com as mudanças desejadas
2. Todos os sócios devem assinar (ou a maioria, conforme previsto no contrato)
3. Registrar a alteração na Junta Comercial
4. Atualizar os dados no CNPJ (Receita Federal)
5. Comunicar órgãos municipais e estaduais, se necessário

### Consolidação do contrato social

Após várias alterações, é recomendável fazer a consolidação do contrato social — um novo documento que incorpora todas as alterações em texto único. Isso facilita a leitura e compreensão do documento por terceiros (bancos, clientes, fornecedores).

## Capital social: como definir o valor

A definição do capital social é uma das decisões mais importantes na constituição da empresa:

### Critérios para definição

- **Investimento inicial necessário**: equipamentos, estoque, aluguel, capital de giro
- **Credibilidade**: capital social muito baixo pode transmitir insegurança para clientes e fornecedores
- **Responsabilidade**: na sociedade limitada, a responsabilidade dos sócios é limitada ao capital social (após integralização total)
- **Tributação**: o capital social não é tributado no momento da integralização

### Capital social mínimo

A lei brasileira não exige capital social mínimo para a maioria dos tipos de empresa (exceto em atividades regulamentadas, como instituições financeiras e seguradoras). No entanto, um capital social simbólico (R$ 1.000, por exemplo) pode dificultar a obtenção de crédito e contratos com grandes empresas.

### Integralização

O capital pode ser integralizado de uma vez ou em parcelas, conforme previsto no contrato social. Enquanto o capital não estiver totalmente integralizado, os sócios respondem solidariamente pelo valor faltante.

## Dica: use o Documind

Embora o Documind ainda não tenha um modelo específico de contrato social, a plataforma oferece diversos modelos de contratos comerciais que podem auxiliar na formalização de parcerias e relações empresariais. Explore os modelos disponíveis e aproveite a inteligência artificial para gerar documentos profissionais em minutos.`,
  },
  {
    slug: "termo-de-entrega-de-chaves-imovel",
    title: "Termo de entrega de chaves de imóvel: modelo e como fazer",
    metaDescription:
      "Modelo de termo de entrega de chaves de imóvel com checklist de vistoria. Saiba como documentar a devolução e evitar problemas.",
    category: "Imobiliário",
    readTime: "4 min",
    date: "9 de março de 2026",
    dateISO: "2026-03-09",
    relatedTemplate: { slug: "termo-de-vistoria-de-imovel", label: "Gerar termo de vistoria" },
    content: `## O que é o termo de entrega de chaves?

O termo de entrega de chaves é o documento que formaliza a devolução de um imóvel locado ao proprietário ou à imobiliária. Ele registra oficialmente o momento em que o inquilino entrega as chaves e encerra sua responsabilidade sobre o imóvel, desde que todas as obrigações contratuais tenham sido cumpridas.

Esse documento é fundamental tanto para o locador quanto para o locatário. Para o locador, comprova que retomou a posse do imóvel e pode verificar seu estado de conservação. Para o locatário, é a prova de que devolveu o imóvel e não pode mais ser responsabilizado por eventos posteriores à entrega.

Sem o termo de entrega de chaves, podem surgir disputas sobre a data exata da devolução, o estado do imóvel no momento da entrega e a responsabilidade por aluguéis e encargos subsequentes. Por isso, nunca entregue ou receba chaves sem este documento.

### Quando o termo é necessário

O termo de entrega de chaves é necessário em toda devolução de imóvel, independente do motivo:
- Fim do prazo contratual
- Rescisão antecipada pelo inquilino
- Rescisão por acordo entre as partes
- Despejo judicial
- Término de contrato de comodato

## O que incluir no termo de entrega de chaves

Para que o termo seja completo e proteja ambas as partes, deve conter os seguintes elementos:

### Identificação das partes

Dados completos do locador (proprietário) e do locatário (inquilino): nome completo, CPF, RG e endereço. Se houver imobiliária intermediando, incluir seus dados também (razão social, CNPJ, representante).

### Identificação do imóvel

Endereço completo do imóvel, incluindo complemento (apartamento, bloco, sala), número de matrícula no cartório de registro de imóveis e referência ao contrato de locação (número, data de início e término).

### Data e hora da entrega

Registre a data e hora exatas da entrega das chaves. A partir desse momento, o locatário não é mais responsável pelo imóvel (aluguel, contas de consumo, danos).

### Quantidade e tipo de chaves

Liste todas as chaves entregues: chave da porta principal, portão, garagem, caixa de correio, porta de serviço, controle remoto de portão eletrônico, cartão de acesso, etc.

### Leituras dos medidores

Registre as leituras dos medidores de água, luz e gás no momento da entrega. Isso evita disputas sobre contas de consumo referentes ao período após a devolução.

### Estado geral do imóvel

Descreva brevemente o estado geral do imóvel ou faça referência ao laudo de vistoria de saída (que idealmente deve ser realizado antes ou no momento da entrega).

### Pendências e ressalvas

Se houver pendências (contas em atraso, reparos necessários, multas), liste-as no termo. Se ambas as partes concordam que não há pendências, registre isso também.

### Assinaturas e testemunhas

O termo deve ser assinado por ambas as partes (locador e locatário) e, preferencialmente, por duas testemunhas. A presença de testemunhas reforça a validade do documento em caso de disputa judicial.

## A vistoria de saída

A vistoria de saída é o complemento essencial do termo de entrega de chaves. É nela que se documenta detalhadamente o estado do imóvel no momento da devolução.

### Comparação com a vistoria de entrada

A vistoria de saída deve ser comparada com a vistoria de entrada (realizada no início da locação). Itens que estavam em bom estado na entrada e apresentam danos na saída são de responsabilidade do inquilino, que deve repará-los ou indenizar o proprietário.

### O que verificar na vistoria de saída

**Paredes e teto**: estado da pintura, manchas, furos, rachaduras, mofo.

**Pisos**: riscos, manchas, tacos soltos, cerâmicas quebradas.

**Portas e janelas**: funcionamento, trincos, fechaduras, vidros.

**Instalações hidráulicas**: torneiras, chuveiros, vasos sanitários, sifões, vazamentos.

**Instalações elétricas**: tomadas, interruptores, luminárias, disjuntores.

**Cozinha e banheiros**: azulejos, rejuntes, gabinetes, bancadas, boxes.

**Área externa**: jardim, muros, portões, calçadas, garagem.

### Documentação fotográfica

Fotografe e filme todos os ambientes durante a vistoria de saída. As imagens devem ser datadas (a maioria dos celulares faz isso automaticamente) e podem ser anexadas ao termo de vistoria. Essa documentação é a prova mais eficaz em caso de disputa.

### Prazo para a vistoria

A vistoria de saída deve ser realizada, preferencialmente, no mesmo dia da entrega das chaves, com a presença de ambas as partes. Se não for possível, agende para a data mais próxima e registre isso no termo de entrega.

## Responsabilidades após a entrega

A entrega das chaves marca a transferência de responsabilidade:

### Aluguel e encargos

O aluguel é devido até a data da efetiva entrega das chaves (não até o fim do contrato, se houver rescisão antecipada). Contas de água, luz e gás são proporcionais — daí a importância de registrar as leituras dos medidores.

### IPTU

O IPTU é de responsabilidade de quem detém a posse do imóvel. Após a entrega das chaves, o locatário não é mais responsável por parcelas vincendas.

### Condomínio

Taxas condominiais vincendas após a entrega são de responsabilidade do proprietário. No entanto, multas por infrações cometidas pelo inquilino durante a locação podem ser cobradas mesmo após a devolução.

### Seguro

Se o inquilino possuía seguro do imóvel, deve cancelá-lo após a entrega. O proprietário deve providenciar novo seguro, se desejar.

## Danos no imóvel: como resolver

Se a vistoria de saída identificar danos de responsabilidade do inquilino:

### Negociação amigável

O primeiro passo é negociar diretamente. O inquilino pode realizar os reparos por conta própria (antes da entrega definitiva) ou concordar com o desconto no valor do depósito caução ou na última parcela de aluguel.

### Orçamento dos reparos

Solicite ao menos três orçamentos de profissionais qualificados para os reparos necessários. Isso dá transparência ao processo e evita alegações de valores inflados.

### Retenção da caução

Se o contrato previa caução em dinheiro, o locador pode reter o valor necessário para os reparos, devolvendo o saldo ao inquilino. A retenção deve ser justificada com orçamentos e documentação dos danos.

### Medida judicial

Em último caso, se não houver acordo, a parte prejudicada pode buscar reparação judicial. O termo de entrega de chaves e o laudo de vistoria serão provas fundamentais nesse processo.

## Modelo de termo de entrega de chaves

O termo deve seguir esta estrutura básica:

1. Título: "TERMO DE ENTREGA DE CHAVES"
2. Dados do locador
3. Dados do locatário
4. Dados do imóvel
5. Referência ao contrato de locação
6. Data e hora da entrega
7. Relação de chaves entregues
8. Leituras dos medidores
9. Referência ao laudo de vistoria
10. Declaração de pendências (ou ausência delas)
11. Assinaturas das partes e testemunhas

### Dicas práticas

- Faça o termo em duas vias (uma para cada parte)
- Inclua cópia das leituras dos medidores como anexo
- Tire fotos no momento da entrega com ambas as partes presentes
- Se houver imobiliária, solicite que ela conduza o processo
- Guarde o termo por pelo menos 5 anos (prazo prescricional)

## Gere seu termo de vistoria no Documind

Com o Documind, você cria termos de vistoria de imóvel completos e profissionais. Documente o estado do imóvel na entrada ou saída da locação com um documento estruturado e pronto para assinatura. A inteligência artificial gera o formulário com todos os itens de verificação necessários.`,
  },
  {
    slug: "acordo-de-pensao-alimenticia-modelo",
    title: "Acordo de pensão alimentícia: modelo, como fazer e homologar",
    metaDescription:
      "Aprenda a fazer acordo de pensão alimentícia: cálculo do valor, modelo extrajudicial, homologação judicial e consequências do não pagamento.",
    category: "Pessoal",
    readTime: "5 min",
    date: "8 de março de 2026",
    dateISO: "2026-03-08",
    content: `## O que é pensão alimentícia?

A pensão alimentícia é uma obrigação legal de prestar assistência financeira a quem não pode se sustentar por conta própria. No Brasil, é regulada pelo Código Civil (artigos 1.694 a 1.710) e pela Lei de Alimentos (Lei 5.478/68). Ao contrário do que muitos pensam, a pensão alimentícia não se destina apenas a filhos menores — ela pode ser devida a ex-cônjuges, pais idosos, e até mesmo entre parentes próximos.

O termo "alimentos" no direito abrange muito mais do que comida. Inclui moradia, saúde, educação, vestuário, lazer e tudo o que é necessário para uma vida digna. A fixação do valor leva em conta dois critérios fundamentais: a **necessidade** de quem recebe e a **possibilidade** de quem paga.

A pensão pode ser fixada judicialmente (por sentença ou decisão interlocutória) ou extrajudicialmente (por acordo entre as partes, preferencialmente homologado em juízo). Neste artigo, vamos focar no acordo de pensão alimentícia e em como fazê-lo de forma correta e segura.

### Quem tem direito a receber pensão

O direito à pensão alimentícia pode existir em diversas relações:
- **Filhos menores**: é o caso mais comum. Os pais têm obrigação de sustento até os 18 anos, podendo se estender até os 24 se o filho estiver cursando ensino superior
- **Filhos maiores incapazes**: se o filho é portador de deficiência ou doença que o impeça de trabalhar, a obrigação pode ser permanente
- **Ex-cônjuge ou ex-companheiro**: quando há dependência econômica comprovada após o divórcio ou dissolução da união estável
- **Pais idosos**: filhos podem ser obrigados a pagar pensão aos pais que não podem se sustentar
- **Outros parentes**: na falta de parentes mais próximos, a obrigação pode recair sobre parentes mais distantes

## Acordo extrajudicial vs judicial

Existem duas formas de fixar a pensão alimentícia, e cada uma tem suas vantagens e limitações.

### Acordo extrajudicial

O acordo extrajudicial é feito diretamente entre as partes, sem necessidade de processo judicial. Pode ser formalizado por escrito, com assinatura de ambas as partes e, preferencialmente, de um advogado.

**Vantagens:**
- Rapidez na resolução
- Menor custo (sem custas judiciais)
- Flexibilidade para negociação
- Preservação do relacionamento entre as partes

**Limitações:**
- Não tem força executiva direta (se não for homologado)
- Em caso de descumprimento, será necessário ajuizar ação para cobrar
- Não permite prisão civil do devedor (sem homologação judicial)

### Acordo judicial (homologado)

O acordo judicial pode ser feito de duas formas: durante um processo de alimentos já em curso, ou por meio de uma ação específica para homologação do acordo extrajudicial.

**Vantagens:**
- Tem força de título executivo judicial
- Permite execução direta em caso de descumprimento
- Pode levar à prisão civil do devedor inadimplente
- Segurança jurídica plena para ambas as partes

**Como homologar:**
1. As partes celebram o acordo por escrito
2. Um advogado (pode ser um para ambas as partes, desde que não haja conflito) peticiona ao juiz
3. O Ministério Público se manifesta (obrigatório quando envolve menores)
4. O juiz homologa o acordo por sentença
5. O acordo passa a ter força de sentença judicial

## Como calcular o valor da pensão alimentícia

O cálculo da pensão é um dos pontos mais sensíveis e frequentemente geradores de conflito. Não existe um percentual fixo na lei — o valor é determinado caso a caso.

### O binômio necessidade x possibilidade

A base do cálculo é o equilíbrio entre:
- **Necessidade do alimentando**: quanto custa manter a vida digna de quem receberá (moradia, alimentação, saúde, educação, vestuário, lazer)
- **Possibilidade do alimentante**: quanto o pagador pode arcar sem comprometer sua própria subsistência

### A "regra" dos 30%

Embora não exista previsão legal, a jurisprudência consolidou a prática de fixar a pensão em torno de 30% dos rendimentos líquidos do alimentante quando se trata de um filho. Esse percentual pode variar para mais ou menos conforme as circunstâncias:
- Mais de um filho: o percentual total pode ser dividido
- Alimentante com renda muito alta: o percentual pode ser menor
- Alimentante com renda muito baixa: pode ser fixado um valor mínimo (geralmente 30% do salário mínimo)

### Pensão para autônomos e profissionais liberais

Quando o alimentante é autônomo, profissional liberal ou empresário, o cálculo é mais complexo. Nesses casos, consideram-se:
- Declaração de Imposto de Renda
- Movimentação bancária
- Padrão de vida demonstrado (veículos, imóveis, viagens)
- Sinais exteriores de riqueza

### Pensão in natura

A pensão não precisa ser necessariamente em dinheiro. As partes podem acordar que o alimentante pague diretamente despesas específicas como escola, plano de saúde, aluguel ou outras necessidades. Isso é chamado de pensão in natura.

## Modelo de acordo de pensão alimentícia

Um acordo de pensão alimentícia bem elaborado deve conter:

### Identificação das partes

Dados completos do alimentante (quem paga) e do alimentando (quem recebe). No caso de menores, incluir os dados do representante legal (geralmente o genitor que detém a guarda).

### Valor e forma de pagamento

Especifique:
- Valor fixo em reais ou percentual sobre os rendimentos
- Data de vencimento mensal
- Forma de pagamento (depósito bancário, PIX, desconto em folha)
- Dados bancários para depósito
- Índice de reajuste anual (IPCA, INPC ou salário mínimo)

### Pensão complementar

Além do valor fixo mensal, é comum incluir obrigações complementares:
- Pagamento de plano de saúde
- Custeio de escola e material escolar
- 50% de despesas médicas extraordinárias
- 50% de atividades extracurriculares

### Décimo terceiro e férias

Preveja se haverá pagamento de parcela extra no mês de dezembro (como um "13º de pensão") ou valores adicionais durante as férias escolares.

### Prazo de vigência

Defina até quando a pensão será devida:
- Até a maioridade do filho (18 anos)
- Até a conclusão do ensino superior (geralmente 24 anos)
- Enquanto perdurar a necessidade (para ex-cônjuge ou pais idosos)
- Prazo determinado (em casos de pensão compensatória)

### Cláusula de revisão

Preveja as hipóteses de revisão do valor:
- Mudança significativa na renda do alimentante
- Mudança nas necessidades do alimentando
- Inflação acumulada
- Novo casamento ou nascimento de outro filho do alimentante

## Homologação do acordo

Para que o acordo tenha plena eficácia, a homologação judicial é altamente recomendada, especialmente quando envolve filhos menores.

### Passo a passo da homologação

1. **Redija o acordo**: pode ser feito com auxílio de advogado ou mediador
2. **Contrate advogado**: obrigatório para petição judicial. Ambas as partes podem usar o mesmo advogado se não houver conflito
3. **Petição ao juiz**: o advogado apresenta o acordo ao juiz da Vara de Família
4. **Manifestação do Ministério Público**: obrigatória quando há menor envolvido. O promotor verifica se o acordo atende ao interesse da criança
5. **Sentença homologatória**: o juiz analisa o acordo e, se estiver de acordo com a lei, homologa por sentença
6. **Registro**: a sentença é registrada e passa a ter força executiva

### Custos da homologação

- Honorários advocatícios: R$ 1.500 a R$ 5.000 (varia conforme o profissional e a região)
- Custas judiciais: isentas para beneficiários de justiça gratuita; caso contrário, varia por estado
- Prazo: geralmente 30 a 90 dias, dependendo da comarca

### Homologação em cartório

Desde 2007 (Lei 11.441), é possível homologar acordos de pensão em cartório de notas (escritura pública), desde que não haja menor ou incapaz envolvido. É mais rápido e prático que o processo judicial.

## Revisão do valor da pensão

A pensão alimentícia pode ser revisada a qualquer momento, desde que haja mudança nas circunstâncias que justifique a alteração.

### Quando pedir revisão

- Perda de emprego ou redução significativa de renda do alimentante
- Aumento substancial das necessidades do alimentando (doença grave, mudança de escola)
- Melhoria significativa na renda do alimentante
- Maioridade do filho com ingresso no mercado de trabalho
- Novo casamento do alimentante com aumento de despesas familiares

### Como pedir revisão

Se as partes concordarem, podem fazer um novo acordo (e homologá-lo). Se não houver consenso, será necessário ajuizar ação revisional de alimentos perante a Vara de Família.

## Consequências do não pagamento

O não pagamento da pensão alimentícia é uma das poucas hipóteses de prisão civil no Brasil.

### Prisão civil

O devedor de pensão alimentícia pode ser preso por até 3 meses (em regime fechado ou semiaberto). A prisão é uma medida coercitiva — o objetivo é forçar o pagamento, não punir. Assim que o devedor paga o débito, é liberado.

### Protesto do nome

A Lei 13.105/2015 (Código de Processo Civil) permite o protesto da certidão de dívida alimentar, o que inclui o nome do devedor nos cadastros de inadimplentes (SPC/Serasa).

### Penhora de bens e salário

O juiz pode determinar a penhora de bens do devedor e até o desconto direto em folha de pagamento (limitado a determinado percentual dos rendimentos).

### Multa e juros

Sobre o valor em atraso incidem correção monetária, juros de mora de 1% ao mês e multa de até 10% por atraso no pagamento.

## Dica: use o Documind

Embora o Documind ainda não tenha um modelo específico de acordo de pensão alimentícia, a plataforma oferece diversos modelos de documentos pessoais e jurídicos que podem ajudar na organização das suas necessidades documentais. Explore os modelos disponíveis e aproveite a inteligência artificial para criar documentos profissionais em poucos minutos.`,
  },
  {
    slug: "contrato-de-parceria-comercial-sociedade",
    title: "Contrato de parceria comercial: como firmar uma sociedade segura",
    metaDescription:
      "Saiba como fazer um contrato de parceria comercial seguro: tipos de parceria, divisão de lucros, responsabilidades e cláusula de saída.",
    category: "Comercial",
    readTime: "5 min",
    date: "7 de março de 2026",
    dateISO: "2026-03-07",
    relatedTemplate: { slug: "contrato-de-parceria-comercial", label: "Gerar contrato de parceria" },
    content: `## O que é uma parceria comercial?

A parceria comercial é uma associação entre duas ou mais pessoas ou empresas com o objetivo de desenvolver um negócio, projeto ou atividade em conjunto, compartilhando recursos, responsabilidades e resultados. Diferente de uma sociedade formal (que exige constituição de pessoa jurídica), a parceria pode ser estabelecida por meio de contrato entre as partes, sem necessidade de criação de nova empresa.

No cenário empresarial brasileiro, as parcerias comerciais são extremamente comuns e abrangem desde pequenos empreendedores que se unem para ampliar seus serviços até grandes corporações que firmam joint ventures para explorar novos mercados. O que todas têm em comum é a necessidade de um contrato bem elaborado para proteger os interesses de todos os envolvidos.

Um contrato de parceria comercial mal redigido — ou, pior, inexistente — é uma das principais causas de litígios empresariais no Brasil. Disputas sobre divisão de lucros, responsabilidades, uso de marca e condições de saída podem destruir relacionamentos profissionais e causar prejuízos financeiros significativos.

### Por que formalizar a parceria?

Mesmo entre amigos ou familiares, a formalização é essencial porque:
- Documenta as expectativas e compromissos de cada parte
- Previne conflitos ao definir regras claras
- Protege o patrimônio pessoal dos parceiros
- Facilita a resolução de disputas
- Demonstra profissionalismo perante clientes e fornecedores
- Serve como prova em caso de litígio judicial

## Tipos de parceria comercial

Existem diversas modalidades de parceria, e a escolha do formato adequado impacta diretamente nos direitos e obrigações das partes.

### Parceria operacional

Os parceiros unem esforços para prestar serviços ou desenvolver produtos em conjunto, sem criar uma nova empresa. Cada um mantém sua pessoa jurídica e emite nota fiscal de sua parte. É o modelo mais simples e flexível.

Exemplo: uma agência de marketing digital se associa a uma produtora de vídeo para oferecer pacotes completos aos clientes.

### Joint venture

É uma parceria mais estruturada, geralmente entre empresas maiores, para explorar oportunidades específicas de negócio. Pode ou não envolver a criação de uma nova entidade jurídica. As joint ventures são reguladas pelo contrato entre as partes e, quando constituem nova empresa, também pelo contrato social.

Exemplo: duas construtoras se unem para executar uma obra de grande porte.

### Consórcio empresarial

Regulado pela Lei 6.404/76, o consórcio é a associação de empresas para executar um empreendimento específico, sem que se constitua nova pessoa jurídica. Cada consorciada responde por suas obrigações conforme previsto no contrato de consórcio.

Exemplo: empresas de tecnologia se unem em consórcio para participar de licitação pública.

### Parceria de referência (indicação)

Uma parte indica clientes para outra em troca de comissão ou benefícios recíprocos. É um modelo simples, mas que deve ser formalizado para evitar disputas sobre valores e condições.

### Franquia

Embora seja uma modalidade específica regulada pela Lei de Franquias (Lei 13.966/2019), a franquia é essencialmente uma parceria comercial em que o franqueador cede o uso de sua marca, know-how e modelo de negócio ao franqueado.

## Cláusulas essenciais do contrato de parceria

Um contrato de parceria comercial completo deve abordar os seguintes pontos:

### Identificação das partes

Dados completos de todos os parceiros: nome/razão social, CPF/CNPJ, endereço, representante legal. Se os parceiros forem pessoas jurídicas, incluir dados da empresa e do responsável pela assinatura.

### Objeto da parceria

Descrição detalhada da atividade ou projeto que será desenvolvido em conjunto. Quanto mais específico, melhor. Defina claramente o escopo da parceria para evitar interpretações divergentes.

### Prazo de vigência

A parceria pode ter prazo determinado (para projetos específicos) ou indeterminado (para atividades contínuas). Em ambos os casos, defina as condições para renovação ou encerramento.

### Contribuições de cada parte

Especifique o que cada parceiro contribui para a parceria:
- Capital financeiro (valores e forma de aporte)
- Recursos humanos (equipe, horas de trabalho)
- Recursos materiais (equipamentos, espaço, veículos)
- Propriedade intelectual (marca, tecnologia, know-how)
- Carteira de clientes
- Licenças e certificações

### Divisão de lucros e prejuízos

Esta é geralmente a cláusula mais sensível e deve ser tratada com extremo cuidado:

**Percentuais de participação**: defina claramente o percentual de cada parceiro nos lucros (e prejuízos). A divisão não precisa ser igualitária — pode refletir a contribuição de cada um.

**Periodicidade de apuração**: mensal, trimestral, semestral ou anual.

**Método de cálculo**: como os lucros serão apurados (receita bruta menos despesas operacionais, por exemplo).

**Forma de distribuição**: depósito bancário, reinvestimento parcial, etc.

**Prejuízos**: como os prejuízos serão divididos e se há limite de responsabilidade para cada parceiro.

### Governança e tomada de decisões

Defina como as decisões serão tomadas:
- Quem tem poder de decisão sobre operações do dia a dia
- Quais decisões exigem aprovação de todos os parceiros
- Como resolver impasses (voto de minerva, mediação, arbitragem)
- Periodicidade de reuniões entre os parceiros

### Responsabilidades operacionais

Distribua claramente as responsabilidades:
- Quem cuida do comercial e vendas
- Quem executa os serviços ou produz os produtos
- Quem gerencia as finanças e a contabilidade
- Quem cuida do marketing e comunicação
- Quem se relaciona com clientes e fornecedores

## Cláusula de não concorrência

A cláusula de não concorrência é fundamental para proteger a parceria contra conflitos de interesse.

### O que deve prever

- **Durante a parceria**: os parceiros não podem exercer atividades concorrentes ou que prejudiquem os negócios da parceria
- **Após o encerramento**: defina um período (geralmente 1 a 2 anos) durante o qual os ex-parceiros não podem competir diretamente
- **Abrangência geográfica**: especifique a região onde a não concorrência se aplica
- **Atividades vedadas**: liste especificamente quais atividades são consideradas concorrentes

### Limites legais

A cláusula de não concorrência deve ser razoável em prazo e abrangência. Cláusulas excessivamente restritivas podem ser anuladas pela Justiça. O prazo máximo geralmente aceito é de 2 anos, e a abrangência geográfica deve ser compatível com a atuação efetiva da parceria.

## Propriedade intelectual

A questão da propriedade intelectual é frequentemente negligenciada em contratos de parceria, mas pode gerar disputas significativas.

### Pontos a definir

- A quem pertence a marca criada para a parceria
- Quem é titular de produtos, softwares ou conteúdos desenvolvidos em conjunto
- Como a propriedade intelectual pré-existente de cada parceiro é protegida
- O que acontece com a PI após o encerramento da parceria
- Licenciamento de uso durante e após a parceria

## Cláusula de saída

A cláusula de saída define como um parceiro pode se desligar da parceria. É uma das cláusulas mais importantes e frequentemente esquecidas.

### Elementos essenciais

**Aviso prévio**: prazo mínimo para comunicar a intenção de sair (geralmente 30 a 90 dias).

**Apuração de haveres**: como será calculado o valor devido ao parceiro que sai (ou que deve ao parceiro que fica).

**Transição**: como será feita a transição de responsabilidades, clientes e projetos em andamento.

**Não concorrência pós-saída**: período em que o parceiro que sai não pode concorrer.

**Uso de marca e nome**: o parceiro que sai perde o direito de usar a marca e nome da parceria.

### Hipóteses de exclusão

Preveja também as situações em que um parceiro pode ser excluído compulsoriamente:
- Descumprimento grave de obrigações contratuais
- Conduta antiética ou ilegal
- Incapacidade de contribuir com sua parte
- Insolvência ou falência
- Conflito de interesses não sanado

## Resolução de conflitos

Defina antecipadamente como os conflitos serão resolvidos:

### Mediação

A mediação é o primeiro passo recomendado. Um mediador neutro ajuda as partes a chegarem a um acordo. É mais rápido, mais barato e preserva o relacionamento entre os parceiros.

### Arbitragem

Se a mediação falhar, a arbitragem é uma alternativa mais rápida que o Poder Judiciário. Um árbitro (ou tribunal arbitral) analisa o caso e profere decisão vinculante. É especialmente recomendada para parcerias de alto valor.

### Foro judicial

Em último caso, defina o foro competente para disputas judiciais. Geralmente é a comarca onde a parceria tem sede.

## Cuidados práticos ao firmar parceria

### Pesquise seu parceiro

Antes de firmar qualquer parceria, faça due diligence (diligência prévia):
- Consulte a situação cadastral do CNPJ na Receita Federal
- Verifique certidões negativas de débitos
- Consulte processos judiciais em andamento
- Peça referências de outros parceiros ou clientes
- Analise a saúde financeira da empresa

### Comece com um projeto piloto

Se possível, teste a parceria com um projeto menor antes de firmar compromissos de longo prazo. Isso permite avaliar a compatibilidade de trabalho e valores entre os parceiros.

### Revise periodicamente

O contrato de parceria deve ser revisado periodicamente (anualmente, por exemplo) para ajustar termos que não estejam funcionando bem ou incorporar novas atividades.

## Gere seu contrato no Documind

Com o Documind, você cria contratos de parceria comercial profissionais em minutos. Preencha os dados dos parceiros, defina o objeto, a divisão de lucros e as responsabilidades — a inteligência artificial gera o documento completo com todas as cláusulas essenciais para proteger sua parceria. Experimente agora.`,
  },
  {
    slug: "vistoria-de-imovel-checklist-completo",
    title: "Vistoria de imóvel: checklist completo para entrada e saída",
    metaDescription:
      "Checklist completo de vistoria de imóvel para entrada e saída: paredes, hidráulica, elétrica, pisos e mais. Proteja-se com documentação.",
    category: "Imobiliário",
    readTime: "5 min",
    date: "6 de março de 2026",
    dateISO: "2026-03-06",
    relatedTemplate: { slug: "termo-de-vistoria-de-imovel", label: "Gerar termo de vistoria" },
    content: `## Por que a vistoria de imóvel é tão importante?

A vistoria de imóvel é o registro formal do estado de conservação de um imóvel em um determinado momento. Realizada na entrada e na saída de uma locação, ela funciona como um "retrato" do imóvel que permite comparar seu estado antes e depois da ocupação pelo inquilino.

Sem uma vistoria bem documentada, surgem disputas intermináveis entre locador e locatário sobre quem é responsável por danos no imóvel. O locador pode alegar que o inquilino causou estragos que já existiam antes da locação. O inquilino pode negar responsabilidade por danos que efetivamente causou. Sem provas documentais, ambas as partes ficam desprotegidas.

A Lei do Inquilinato (Lei 8.245/91) não torna a vistoria obrigatória por lei, mas ela é uma prática consagrada no mercado imobiliário e reconhecida pela jurisprudência como meio de prova fundamental. Imobiliárias profissionais e administradoras de imóveis sempre realizam vistorias detalhadas como parte do processo de locação.

### Vistoria de entrada vs vistoria de saída

A **vistoria de entrada** é realizada antes ou no momento em que o inquilino recebe as chaves. Documenta o estado atual do imóvel e serve como base de comparação para a vistoria de saída.

A **vistoria de saída** é realizada quando o inquilino devolve o imóvel. O estado do imóvel é comparado com a vistoria de entrada para identificar danos de responsabilidade do inquilino.

A regra é clara: o inquilino deve devolver o imóvel no mesmo estado em que recebeu, considerando o desgaste natural do uso. Pintura que descasca após 3 anos de uso normal é desgaste natural. Parede com buracos de pregos ou manchas é dano de responsabilidade do inquilino.

## Quem deve participar da vistoria?

A vistoria deve ser realizada preferencialmente com a presença de ambas as partes:

### Na vistoria de entrada

- **Locador** (proprietário) ou seu representante (imobiliária, administradora)
- **Locatário** (inquilino)
- Opcionalmente, um profissional especializado (vistoriador)

### Na vistoria de saída

- **Locador** ou representante
- **Locatário**
- As mesmas testemunhas da vistoria de entrada (se possível)

A presença de ambas as partes é fundamental para que não haja contestação posterior. Se uma das partes não puder comparecer, deve enviar representante com procuração ou autorizar a realização por escrito, concordando com os termos que forem registrados.

### Vistoriador profissional

Em imóveis de alto valor ou com muitos detalhes, é recomendável contratar um vistoriador profissional. Esse profissional utiliza metodologia padronizada, equipamentos adequados e produz relatórios detalhados com fotografias de alta qualidade. O custo varia de R$ 200 a R$ 800, dependendo do tamanho do imóvel e da região.

## Checklist completo: paredes e teto

A verificação de paredes e teto é uma das mais importantes e deve ser extremamente detalhada.

### O que verificar

**Pintura:**
- Cor e estado da pintura (nova, conservada, descascando, manchada)
- Tipo de pintura (látex, acrílica, esmalte)
- Marcas de infiltração (manchas amareladas ou escuras)
- Bolhas ou descascamento
- Marcas de quadros ou móveis encostados

**Superfície:**
- Rachaduras (superficiais ou estruturais)
- Furos (de pregos, buchas, parafusos)
- Trincas no reboco
- Mofo ou bolor (especialmente em cantos e atrás de móveis)
- Umidade aparente

**Teto:**
- Estado da pintura
- Manchas de infiltração
- Trincas ou rachaduras
- Forro de gesso (se houver): estado, emendas, manchas

### Como registrar

Para cada cômodo, anote separadamente o estado de cada parede (norte, sul, leste, oeste ou por referência: "parede da janela", "parede da porta") e do teto. Fotografe cada irregularidade encontrada com close-up e foto geral do ambiente para contexto.

## Checklist completo: pisos

Os pisos merecem atenção especial, pois reparos podem ser caros.

### Tipos de piso e o que verificar

**Cerâmica/porcelanato:**
- Peças trincadas ou quebradas
- Peças soltas (teste batendo levemente — som oco indica descolamento)
- Estado do rejunte (completo, faltando, manchado, com mofo)
- Manchas permanentes

**Piso laminado/vinílico:**
- Riscos visíveis
- Peças levantadas ou com bolhas
- Manchas de água (indicam infiltração)
- Estado das juntas e rodapés

**Madeira/taco:**
- Tacos soltos ou quebrados
- Estado do verniz ou resina
- Riscos profundos
- Manchas de umidade
- Cupins (verificar bordas e cantos)

**Cimento queimado/concreto:**
- Rachaduras
- Desníveis
- Manchas

### Rodapés

Verifique também o estado dos rodapés em cada cômodo: trincas, descolamento, manchas e peças faltantes.

## Checklist completo: instalações hidráulicas

Problemas hidráulicos são os mais comuns em imóveis e podem causar danos significativos.

### Cozinha

- Torneira da pia: funcionamento, vazamento, estado da manopla
- Sifão e tubulação: vazamentos, estado das conexões
- Registro de água: funciona corretamente?
- Gabinete sob a pia: sinais de umidade

### Banheiros

- Chuveiro: funcionamento, vazamento, pressão da água
- Torneira da pia: funcionamento, vazamento
- Vaso sanitário: funcionamento da descarga, vazamento na base, estado do assento
- Sifão: estado e vazamentos
- Box: estado dos vidros, trilhos e roldanas (se houver)
- Registros de água quente e fria: funcionamento
- Ralos: escoamento adequado, estado da grelha

### Área de serviço

- Tanque: estado, torneira, escoamento
- Ponto de máquina de lavar: torneira, escoamento
- Ralos: funcionamento

### Verificação de vazamentos

Teste cada ponto de água individualmente. Abra torneiras e chuveiros e verifique pressão e escoamento. Dê descarga e observe se há vazamento na base do vaso. Verifique embaixo de pias e tanques se há sinais de umidade.

## Checklist completo: instalações elétricas

As instalações elétricas devem ser verificadas com cuidado, preferencialmente com um equipamento testador de tomada.

### O que verificar

**Tomadas:**
- Todas funcionam? (use um testador de tomada ou carregador de celular)
- Espelhos estão firmes e sem trincas?
- Sinais de aquecimento (escurecimento ao redor)?

**Interruptores:**
- Todos funcionam?
- Quais luzes cada interruptor controla?
- Estado dos espelhos

**Lustres e luminárias:**
- Estão presentes e funcionando?
- Lâmpadas inclusas?
- Estado dos soquetes

**Quadro de distribuição:**
- Localização
- Estado dos disjuntores
- Identificação dos circuitos

**Interfone/porteiro eletrônico:**
- Funciona?
- Som audível?
- Abertura da porta funciona?

### Teste prático

Ligue todos os pontos de luz e teste todas as tomadas. Verifique se o chuveiro elétrico funciona em todas as temperaturas. Teste campainhas e interfone. Essa verificação simples pode evitar surpresas desagradáveis após a mudança.

## Checklist completo: portas e janelas

### Portas

- Abrem e fecham corretamente (sem atrito ou emperramento)?
- Fechaduras e maçanetas funcionam?
- Estado da madeira ou material (riscos, amassados, marcas)
- Dobradiças sem ferrugem e bem fixadas?
- Batentes sem danos?
- Olho mágico funciona (porta de entrada)?

### Janelas

- Abrem e fecham suavemente?
- Trincos e fechos funcionam?
- Vidros inteiros e sem trincas?
- Borrachas de vedação presentes e em bom estado?
- Roldanas e trilhos (janelas de correr) funcionam?
- Telas mosquiteiras presentes e em bom estado?

### Persianas e cortinas

Se o imóvel possui persianas ou cortinas inclusas:
- Mecanismo funciona?
- Estado do material?
- Lâminas ou panos sem danos?

## Checklist completo: cozinha e banheiros

### Cozinha

- Estado da bancada (mármore, granito, inox)
- Armários: portas, dobradiças, puxadores, interior
- Azulejos: trincas, rejunte, manchas
- Exaustor ou coifa: funcionamento, estado

### Banheiros

- Espelho: fixação, estado
- Porta-toalha e acessórios: fixação, estado
- Saboneteira e papeleira: presentes? estado?
- Gabinete da pia: estado geral
- Azulejos: trincas, rejunte, manchas, mofo

## Documentação fotográfica: como fazer

A documentação fotográfica é tão importante quanto o formulário escrito. Siga estas orientações:

### Metodologia

1. **Foto geral de cada cômodo**: tire uma foto ampla mostrando o ambiente completo
2. **Foto de cada parede**: individualmente, com boa iluminação
3. **Close-up de irregularidades**: rachaduras, manchas, furos, danos
4. **Equipamentos e instalações**: torneiras, interruptores, maçanetas
5. **Medidores**: registro de luz, água e gás (com leitura visível)

### Dicas técnicas

- Use boa iluminação (abra cortinas, acenda luzes)
- Ative a marcação de data/hora nas fotos
- Fotografe com referência de tamanho (régua, moeda) para danos menores
- Grave vídeos curtos complementares mostrando funcionamento de portas, janelas e descargas
- Armazene as fotos em nuvem (Google Drive, iCloud) para preservação

### Organização

Organize as fotos por cômodo e nomeie-as de forma clara:
- "Sala - Parede Norte - Vista geral"
- "Cozinha - Pia - Vazamento no sifão"
- "Quarto 1 - Janela - Trinco quebrado"

## Disputas: como resolver divergências

Se houver discordância entre as partes sobre o estado do imóvel:

### Na vistoria de entrada

O inquilino tem o direito de contestar itens do laudo de vistoria. Anote as divergências no próprio documento e, se necessário, solicite prazo para verificação complementar. Não assine um laudo com o qual não concorde.

### Na vistoria de saída

Se o locador alegar danos que o inquilino contesta:
- Compare com as fotos da vistoria de entrada
- Solicite orçamentos de reparo (ao menos 3)
- Tente negociação amigável
- Se não houver acordo, um perito pode ser chamado para avaliar
- Em último caso, a questão será resolvida judicialmente

## Gere seu termo de vistoria no Documind

Com o Documind, você cria termos de vistoria de imóvel completos e organizados por cômodo. A inteligência artificial gera um formulário estruturado com todos os itens de verificação necessários — basta preencher, anexar as fotos e ter um documento profissional pronto para assinatura de ambas as partes.`,
  },
  {
    slug: "orcamento-profissional-como-fazer",
    title: "Orçamento profissional: como fazer e conquistar mais clientes",
    metaDescription:
      "Aprenda a criar orçamentos profissionais que conquistam clientes: estrutura, validade, condições de pagamento e dicas de apresentação.",
    category: "Comercial",
    readTime: "4 min",
    date: "5 de março de 2026",
    dateISO: "2026-03-05",
    relatedTemplate: { slug: "modelo-de-orcamento-profissional", label: "Gerar orçamento profissional" },
    content: `## Por que o orçamento é sua primeira impressão?

O orçamento profissional é muito mais do que uma lista de preços — é o primeiro documento formal que seu potencial cliente recebe de você. Ele comunica não apenas valores, mas também profissionalismo, organização e credibilidade. Um orçamento bem elaborado pode ser a diferença entre fechar ou perder um contrato.

Pesquisas do mercado brasileiro de serviços indicam que empresas e profissionais autônomos que enviam orçamentos estruturados e visualmente profissionais têm taxa de conversão até 35% superior em comparação com aqueles que enviam propostas informais por WhatsApp ou e-mail sem formatação.

O orçamento profissional funciona como um mini-contrato preliminar: ele define expectativas, delimita o escopo do trabalho, estabelece prazos e condições de pagamento. Quando bem feito, reduz drasticamente as chances de mal-entendidos e disputas futuras com o cliente.

Neste guia, vamos ensinar como criar orçamentos que impressionam clientes e aumentam suas chances de fechar negócios.

### Orçamento vs proposta comercial

Antes de prosseguir, é importante distinguir orçamento de proposta comercial, embora no uso cotidiano os termos sejam usados como sinônimos:

**Orçamento**: foco nos valores e itens/serviços oferecidos. É mais direto e técnico.

**Proposta comercial**: além dos valores, inclui apresentação da empresa, portfólio, cases de sucesso, diferenciais competitivos e argumentos de venda. É mais completa e persuasiva.

Na prática, o ideal é combinar elementos de ambos: apresentar seus diferenciais brevemente e, em seguida, detalhar os itens e valores.

## Estrutura de um orçamento profissional

Um orçamento profissional completo deve conter os seguintes elementos:

### Cabeçalho e identidade visual

O cabeçalho é a primeira coisa que o cliente vê. Deve conter:
- Logo da empresa ou marca pessoal
- Nome da empresa ou profissional
- CNPJ ou CPF
- Endereço, telefone e e-mail
- Site e redes sociais (se relevante)

A identidade visual transmite profissionalismo. Use cores consistentes com sua marca, fontes legíveis e um layout limpo. Mesmo que você seja um profissional autônomo, invista em uma identidade visual básica — ela faz diferença na percepção do cliente.

### Dados do cliente

Identificação completa do destinatário:
- Nome da empresa ou pessoa
- CNPJ ou CPF
- Nome do responsável pelo contato
- Departamento (se aplicável)
- Endereço

Personalizar o orçamento com os dados do cliente mostra que você dedicou tempo e atenção à proposta, não apenas copiou um modelo genérico.

### Número e data do orçamento

Numere seus orçamentos sequencialmente (ORC-2026-001, ORC-2026-002...) para facilitar o controle e referência futura. Inclua a data de emissão, que também marca o início do prazo de validade.

### Descrição dos serviços ou produtos

Esta é a parte mais importante do orçamento. Para cada item, inclua:

**Descrição detalhada**: o que será feito/entregue. Evite termos vagos como "serviços de consultoria" — prefira "consultoria em marketing digital com foco em SEO, incluindo análise do site atual, pesquisa de palavras-chave e plano de ação para 3 meses".

**Quantidade**: unidades, horas, metros quadrados, pacotes, etc.

**Valor unitário**: preço de cada unidade/hora/item.

**Valor total**: quantidade × valor unitário.

### Detalhamento de escopo

Para serviços complexos, detalhe exatamente o que está incluído e, tão importante quanto, o que NÃO está incluído. Isso evita o temido "scope creep" (aumento progressivo do escopo sem aumento do valor).

Exemplo:
**Incluído:** design de até 5 páginas, 2 rodadas de revisão, hospedagem por 12 meses.
**Não incluído:** produção de conteúdo textual, tradução, fotos profissionais, manutenção mensal após o lançamento.

### Valores e totais

Apresente os valores de forma clara:
- Subtotal (soma dos itens)
- Descontos (se houver, especifique o motivo)
- Impostos (ISS, ICMS, se aplicável)
- **Valor total em destaque**

Dica: se o valor total é alto, divida em etapas ou parcelas para tornar mais palatável. "Investimento de R$ 12.000 em 4 parcelas de R$ 3.000" é psicologicamente mais acessível que "R$ 12.000 à vista".

## Validade do orçamento

A validade é uma cláusula essencial que muitos profissionais esquecem de incluir.

### Por que definir validade

- Protege contra oscilações de preço de materiais e insumos
- Cria senso de urgência para o cliente decidir
- Permite atualizar preços quando o orçamento vencer
- Evita que o cliente use um orçamento antigo como referência

### Prazo recomendado

O prazo de validade mais comum é de **15 a 30 dias**. Para serviços simples e valores pequenos, 15 dias é suficiente. Para projetos complexos que exigem análise interna do cliente, 30 dias é mais adequado.

Para obras e reformas, onde o preço de materiais flutua significativamente, 7 a 15 dias é recomendável.

### O que acontece após o vencimento

Informe no orçamento que, após o prazo de validade, os valores estão sujeitos a atualização. Isso evita discussões quando o cliente volta meses depois querendo aceitar um orçamento antigo.

## Condições de pagamento

As condições de pagamento devem ser claras e detalhadas:

### Formas de pagamento aceitas

Liste todas as formas aceitas:
- Transferência bancária (inclua dados bancários)
- PIX (inclua chave)
- Boleto bancário
- Cartão de crédito (com ou sem acréscimo de parcelas)
- Cheque (com condições específicas)

### Parcelamento

Se oferece parcelamento, especifique:
- Número máximo de parcelas
- Se há juros ou é sem juros
- Data de vencimento das parcelas
- Se há desconto para pagamento à vista

### Sinal e cronograma

Para projetos maiores, é comum estabelecer um cronograma de pagamento vinculado a entregas:
- 30% na aprovação do orçamento (sinal)
- 30% na entrega da primeira etapa
- 40% na conclusão do projeto

### Consequências do atraso

Mencione, de forma profissional, que atrasos no pagamento podem resultar em:
- Suspensão da execução do serviço
- Cobrança de juros e multa
- Rescisão do contrato

## Prazos de execução

O cliente precisa saber quando terá o serviço concluído:

### Como definir prazos

- Analise cuidadosamente o escopo antes de se comprometer
- Considere imprevistos e adicione uma margem de segurança (10-20%)
- Para projetos complexos, divida em etapas com prazos individuais
- Deixe claro que o prazo começa a contar após a aprovação do orçamento e pagamento do sinal

### Cronograma de etapas

Para projetos maiores, inclua um cronograma simplificado:
1. Etapa 1 — Planejamento: 5 dias úteis
2. Etapa 2 — Execução: 15 dias úteis
3. Etapa 3 — Revisão: 5 dias úteis
4. Etapa 4 — Entrega final: 3 dias úteis

### Dependências do cliente

Deixe claro que o prazo depende do fornecimento de materiais e informações pelo cliente. Atrasos do cliente no envio de conteúdo, fotos, aprovações ou pagamentos impactam proporcionalmente o prazo de entrega.

## Dicas de apresentação e formatação

A forma como você apresenta o orçamento influencia diretamente na percepção do cliente.

### Formatação profissional

- Use PDF (nunca envie em formato editável como Word)
- Mantenha margens adequadas e espaçamento entre seções
- Use negrito para valores e informações importantes
- Inclua numeração de páginas para documentos longos
- Destaque visualmente o valor total

### Linguagem

- Seja claro e direto, evitando jargões técnicos que o cliente não entende
- Use tom profissional, mas acessível
- Evite erros de português (revise antes de enviar)
- Personalize a introdução com referência à conversa ou reunião prévia

### Envio

- Envie por e-mail com mensagem de apresentação personalizada
- Nomeie o arquivo de forma profissional: "Orcamento_NomeCliente_Data.pdf"
- Se combinar envio por WhatsApp, envie como documento (não como foto)
- Faça follow-up após 3-5 dias se não receber resposta

### Acompanhamento (follow-up)

O follow-up é parte essencial do processo de vendas:
- 3 dias após envio: mensagem educada perguntando se recebeu e se tem dúvidas
- 7 dias: contato perguntando sobre a decisão
- 15 dias: último contato antes do vencimento, reforçando a validade
- Após vencimento: informe que pode atualizar o orçamento quando desejar

## Erros comuns ao fazer orçamentos

Evite estes erros que prejudicam suas chances de fechar negócio:

### Falta de detalhamento

Orçamentos vagos geram desconfiança. O cliente precisa entender exatamente o que está comprando. Quanto mais detalhado, maior a percepção de valor e transparência.

### Não definir escopo

Sem limites claros, o cliente pode esperar entregas que não estavam previstas. A ausência de definição de escopo é a principal causa de conflitos entre profissionais e clientes.

### Ignorar a concorrência

Conheça os preços praticados pelo mercado na sua região. Preços muito abaixo geram desconfiança. Preços muito acima exigem justificativa clara de valor agregado.

### Demora no envio

Quanto mais rápido você envia o orçamento após a solicitação, maiores as chances de conversão. O ideal é enviar em até 24 horas. Clientes que pedem orçamento para múltiplos profissionais tendem a fechar com quem responde primeiro com qualidade.

### Não fazer follow-up

Enviar o orçamento e esperar passivamente é um dos maiores erros. O follow-up educado e profissional demonstra interesse e proatividade, além de manter seu nome na mente do cliente.

## Gere seu orçamento no Documind

Com o Documind, você cria orçamentos profissionais em minutos. Preencha os dados da sua empresa e do cliente, adicione os itens e valores, defina as condições de pagamento — e a inteligência artificial gera um documento formatado, profissional e pronto para envio. Impressione seus clientes desde o primeiro contato.`,
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

          {/* CTA — links to specific template when available */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200">
            <h3 className="text-lg font-bold text-surface-900 mb-2">
              {post.relatedTemplate
                ? `Gere seu ${post.relatedTemplate.label.replace("Gerar ", "")} com o Documind`
                : "Gere seu documento com o Documind"}
            </h3>
            <p className="text-sm text-surface-600 mb-4">
              Crie contratos e documentos profissionais em segundos com nossa IA. Comece grátis!
            </p>
            <div className="flex flex-wrap gap-3">
              {post.relatedTemplate && (
                <Link
                  href={`/registro?redirect=/dashboard/gerar/${post.relatedTemplate.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors"
                >
                  {post.relatedTemplate.label}
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              )}
              <Link
                href="/modelos"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-surface-200 text-surface-700 font-semibold text-sm hover:bg-surface-50 transition-colors"
              >
                Ver todos os modelos
              </Link>
            </div>
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
