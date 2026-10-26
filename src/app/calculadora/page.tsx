import type { Metadata } from 'next';
import Link from 'next/link';
import CalculatorClient from './CalculatorClient';
import Breadcrumbs from '@/components/Breadcrumbs';
import ToolFaq, { toolFaqJsonLd, type ToolFaqItem } from '@/components/ToolFaq';
import { AI_MODELS, type CalculatorModel } from '@/data/calculator-models';
import { USD_BRL } from '@/data/exchange-rate';
import { DEFAULT_SCENARIO, DEFAULT_USD_BRL, formatMoney, requestCostUsd } from '@/lib/api-cost';
import { formatDateLong } from '@/lib/date';
import { getPageLastModified, toLocalDateString } from '@/lib/page-dates';

// Os números do texto, da tabela e do FAQ saem de src/data/calculator-models.ts
// (atualizado pela automação), com a mesma conta da ferramenta.

const OG_TITLE = 'Calculadora de Custos de APIs de IA';
const OG_DESC = `Calcule o custo da API do ChatGPT, Claude e Gemini: informe tokens e volume e compare ${AI_MODELS.length} modelos por mês, em reais ou dólares.`;
const OG_IMAGE = `https://www.turbinaia.com.br/api/og?title=${encodeURIComponent(OG_TITLE)}&desc=${encodeURIComponent(OG_DESC)}&badge=${encodeURIComponent('Calculadora Gratuita')}`;

export const metadata: Metadata = {
  title: 'Calculadora de Custo de API de IA: ChatGPT, Claude e Gemini',
  description: OG_DESC,
  keywords: ['calculadora custo API', 'preço API ChatGPT', 'custo API Claude', 'preço API Gemini', 'custo por token', 'quanto custa API OpenAI'],
  alternates: { canonical: '/calculadora' },
  openGraph: {
    title: OG_TITLE + ' | Turbina IA',
    description: OG_DESC,
    url: 'https://www.turbinaia.com.br/calculadora',
    siteName: 'Turbina IA',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE + ' | Turbina IA',
    description: OG_DESC,
    images: [OG_IMAGE],
  },
};

// Provedoras dos três assistentes mais buscados, na ordem do texto
const MAIN_PROVIDERS = [
  { provider: 'OpenAI', assistant: 'ChatGPT' },
  { provider: 'Anthropic', assistant: 'Claude' },
  { provider: 'Google', assistant: 'Gemini' },
];

const usd = (value: number) => formatMoney(value, 'USD');
const brl = (value: number) => formatMoney(value * DEFAULT_USD_BRL, 'BRL');
const monthlyUsd = (model: CalculatorModel) =>
  requestCostUsd(model, DEFAULT_SCENARIO.input, DEFAULT_SCENARIO.output) * DEFAULT_SCENARIO.requests;
const byMonthlyCost = (a: CalculatorModel, b: CalculatorModel) => monthlyUsd(a) - monthlyUsd(b);
const modelsOf = (provider: string) => AI_MODELS.filter((model) => model.provider === provider);
const tokens = (n: number) => n.toLocaleString('pt-BR');
// ["a", "b", "c"] → "a, b e c"
const listPt = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} e ${items[items.length - 1]}`);

/** company já com o artigo: "da OpenAI", "do Google". */
function providerPriceAnswer(provider: string, company: string): string {
  const models = modelsOf(provider).sort(byMonthlyCost);
  if (models.length === 0) return `A calculadora acima mostra os preços atuais ${company} assim que eles entram na tabela.`;
  const inputs = models.map((m) => m.inputPricePerM);
  const outputs = models.map((m) => m.outputPricePerM);
  const cheapest = models[0];
  const priciest = models[models.length - 1];
  const tiered = models.filter((m) => m.longContext);
  const tierNote = tiered.length
    ? ` Alguns cobram mais caro quando o prompt é muito longo: o ${tiered[0].name}, por exemplo, passa a ${usd(tiered[0].longContext!.inputPricePerM)} na entrada e ${usd(tiered[0].longContext!.outputPricePerM)} na saída acima de ${tokens(tiered[0].longContext!.aboveTokens)} tokens.`
    : '';
  return (
    `Na API ${company}, o preço por milhão de tokens vai de ${usd(Math.min(...inputs))} a ${usd(Math.max(...inputs))} na entrada ` +
    `e de ${usd(Math.min(...outputs))} a ${usd(Math.max(...outputs))} na saída. O mais barato é o ${cheapest.name}` +
    (models.length > 1 ? ` e o mais caro, o ${priciest.name}.` : '.') +
    tierNote +
    ` No exemplo de um chatbot com 10 mil conversas por mês, isso dá de ${usd(monthlyUsd(cheapest))} a ${usd(monthlyUsd(priciest))} por mês.`
  );
}

export default function CalculatorPage() {
  const lastModified = getPageLastModified('/calculadora');
  const updatedOn = lastModified ? toLocalDateString(lastModified) : undefined;

  const mainModels = MAIN_PROVIDERS.flatMap(({ provider }) => modelsOf(provider)).sort(byMonthlyCost);
  const exampleCheapest = mainModels[0];
  const examplePriciest = mainModels[mainModels.length - 1];
  const ranking = [...AI_MODELS].sort(byMonthlyCost);
  // Passo a passo do exemplo com um modelo intermediário (o Sonnet, se existir)
  const stepModel = AI_MODELS.find((m) => /sonnet/i.test(m.name)) ?? mainModels[Math.floor(mainModels.length / 2)];
  const stepInput = (DEFAULT_SCENARIO.input / 1_000_000) * stepModel.inputPricePerM;
  const stepOutput = (DEFAULT_SCENARIO.output / 1_000_000) * stepModel.outputPricePerM;
  const tieredModels = AI_MODELS.filter((m) => m.longContext);

  const faqs: ToolFaqItem[] = [
    {
      question: 'Como calcular o custo da API do ChatGPT, do Claude ou do Gemini?',
      answer:
        `Some os tokens de entrada ÷ 1.000.000 × preço de entrada com os tokens de saída ÷ 1.000.000 × preço de saída, e multiplique pelo número de requisições. ` +
        `Exemplo com o ${stepModel.name}: ${tokens(DEFAULT_SCENARIO.input)} tokens de entrada custam ${usd(stepInput)}, ${tokens(DEFAULT_SCENARIO.output)} de saída custam ${usd(stepOutput)}, ` +
        `total de ${usd(stepInput + stepOutput)} por conversa — ou ${usd((stepInput + stepOutput) * DEFAULT_SCENARIO.requests)} em 10 mil conversas por mês.`,
    },
    { question: 'Quanto custa a API do ChatGPT?', answer: providerPriceAnswer('OpenAI', 'da OpenAI (modelos do ChatGPT)') },
    { question: 'Quanto custa a API do Claude?', answer: providerPriceAnswer('Anthropic', 'da Anthropic (modelos Claude)') },
    { question: 'Quanto custa a API do Gemini?', answer: providerPriceAnswer('Google', 'do Google (modelos Gemini)') },
    {
      question: 'Qual API de IA é mais barata?',
      answer:
        `Para um chatbot com ${tokens(DEFAULT_SCENARIO.input)} tokens de entrada e ${tokens(DEFAULT_SCENARIO.output)} de saída por conversa, os mais baratos da tabela hoje são ` +
        listPt(ranking.slice(0, 3).map((m) => `${m.name} (${usd(monthlyUsd(m))})`)) +
        `, em 10 mil conversas por mês. O mais caro, ${ranking[ranking.length - 1].name}, custa ${usd(monthlyUsd(ranking[ranking.length - 1]))} pelo mesmo volume. Preço baixo não garante qualidade: compare também no [comparador de IAs](/comparador).`,
    },
    {
      question: 'O preço da API muda com o tamanho do prompt?',
      answer: tieredModels.length
        ? `Em alguns modelos, sim: acima de um limite de tokens de entrada, a requisição inteira passa a ser cobrada numa faixa mais cara. Na tabela atual: ` +
          tieredModels.map((m) => `${m.name} acima de ${tokens(m.longContext!.aboveTokens)} tokens`).join('; ') +
          `. A calculadora aplica essa faixa automaticamente quando você aumenta os tokens de entrada.`
        : 'Nos modelos da tabela atual, não: o preço por token é o mesmo para qualquer tamanho de prompt.',
    },
    {
      question: 'Quantos tokens tem uma palavra em português?',
      answer:
        'Em média, um pouco mais de um token por palavra: em português, algo entre 1,3 e 1,6 tokens, conforme o modelo. Uma página de texto (cerca de 500 palavras) dá uns 700 tokens. Acentos e palavras longas aumentam a conta; para o número exato, use o contador de tokens da própria provedora.',
    },
    {
      question: 'A assinatura do ChatGPT Plus, do Claude Pro ou do Google AI Pro inclui a API?',
      answer:
        'Não. As assinaturas dão acesso aos aplicativos de chat; a API é cobrada à parte, por token, em uma conta de desenvolvedor de cada empresa (OpenAI, Anthropic ou Google). Por isso esta calculadora mostra o custo de uso via API, não o preço dos planos. Para comparar os planos, use o [comparador de IAs](/comparador).',
    },
    {
      question: 'A calculadora de custos de IA é gratuita?',
      answer: 'Sim. É 100% gratuita e não exige cadastro. Basta informar os tokens e o volume de requisições para ver o custo de cada modelo na hora.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: OG_TITLE,
    description: OG_DESC,
    url: 'https://www.turbinaia.com.br/calculadora',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    inLanguage: 'pt-BR',
    ...(updatedOn ? { dateModified: updatedOn } : {}),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
    publisher: { '@type': 'Organization', name: 'Turbina IA', url: 'https://www.turbinaia.com.br' },
    featureList: [
      'Simulação de custo por volume de tokens',
      `Comparação de ${AI_MODELS.length} modelos de IA`,
      'Conversão USD/BRL pelo câmbio PTAX do Banco Central',
      'Faixas de preço para prompts longos',
    ],
  };

  const intro = (
    <section className="calculadora-intro" aria-labelledby="como-calcular">
      {updatedOn && (
        <p className="tool-updated" style={{ textAlign: 'center' }}>
          Atualizado em <time dateTime={updatedOn}>{formatDateLong(updatedOn)}</time> · preços conferidos nas páginas oficiais das provedoras
        </p>
      )}
      <nav aria-label="Nesta página">
        <ul className="tool-toc" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
          <li className="tool-toc-label">Nesta página:</li>
          <li><a href="#calcular">Calcular agora</a></li>
          <li><a href="#precos-por-modelo">Preços por modelo</a></li>
          <li><a href="#dicas-para-economizar">Como economizar</a></li>
          <li><a href="#perguntas-frequentes">Perguntas frequentes</a></li>
        </ul>
      </nav>
      <h2 id="como-calcular" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
        Como calcular o custo da API do ChatGPT, do Claude e do Gemini
      </h2>
      <p>
        Para calcular o custo da API do <strong>ChatGPT</strong> (OpenAI), do <strong>Claude</strong> (Anthropic) ou do{' '}
        <strong>Gemini</strong> (Google), você precisa de três números: quantos <strong>tokens de entrada</strong> cada
        requisição envia (instruções, histórico e pergunta), quantos <strong>tokens de saída</strong> o modelo devolve e o{' '}
        <strong>preço por milhão de tokens</strong> do modelo escolhido. As três empresas cobram do mesmo jeito; o que muda é a
        tabela de preços.
      </p>
      <p className="calculadora-formula">
        <strong>Custo por requisição</strong> = (tokens de entrada ÷ 1.000.000 × preço de entrada) + (tokens de saída ÷
        1.000.000 × preço de saída)
      </p>
      <p>
        Depois, multiplique pelo número de requisições do mês e converta pelo câmbio do dia. Um chatbot que envia{' '}
        {tokens(DEFAULT_SCENARIO.input)} tokens e recebe {tokens(DEFAULT_SCENARIO.output)} por conversa, com 10 mil conversas
        por mês, custa de <strong>{usd(monthlyUsd(exampleCheapest))}</strong> no {exampleCheapest.name} a{' '}
        <strong>{usd(monthlyUsd(examplePriciest))}</strong> no {examplePriciest.name} (cerca de{' '}
        {brl(monthlyUsd(exampleCheapest))} a {brl(monthlyUsd(examplePriciest))}). A calculadora abaixo faz essa conta para{' '}
        {AI_MODELS.length} modelos com os seus números; para comparar a qualidade das respostas, use o{' '}
        <Link href="/comparador" prefetch={false}>comparador de IAs</Link>.
      </p>
    </section>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolFaqJsonLd(faqs)) }} />
      <main style={{ minHeight: '80vh' }}>
      {/* Interactive Calculator */}
      <CalculatorClient
        breadcrumb={<Breadcrumbs items={[{ name: 'Calculadora de Custos' }]} currentPath="/calculadora" />}
        intro={intro}
      />

      {/* SEO Explanations Content */}
      <section className="container" style={{ marginTop: '3rem', marginBottom: '6rem', maxWidth: '800px' }}>
        <hr style={{ border: '0', height: '1px', background: 'var(--border-color)', margin: '4rem 0' }} />

        <section id="precos-por-modelo" style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            Preço da API do ChatGPT, do Claude e do Gemini por milhão de tokens
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Preços em dólar por 1 milhão de tokens (tier padrão, sem desconto de cache ou de lote) e o custo do exemplo acima:{' '}
            {tokens(DEFAULT_SCENARIO.input)} tokens de entrada e {tokens(DEFAULT_SCENARIO.output)} de saída por conversa, 10 mil
            conversas por mês.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table className="calculadora-table">
              <thead>
                <tr>
                  <th scope="col">Modelo</th>
                  <th scope="col">Provedora</th>
                  <th scope="col">Entrada</th>
                  <th scope="col">Saída</th>
                  <th scope="col">Exemplo / mês</th>
                </tr>
              </thead>
              <tbody>
                {[...MAIN_PROVIDERS.flatMap(({ provider }) => modelsOf(provider)), ...AI_MODELS.filter((m) => !MAIN_PROVIDERS.some((p) => p.provider === m.provider))].map((model) => (
                  <tr key={model.name}>
                    <th scope="row">{model.name}</th>
                    <td>{model.provider}</td>
                    <td>{usd(model.inputPricePerM)}</td>
                    <td>{usd(model.outputPricePerM)}</td>
                    <td>{usd(monthlyUsd(model))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
            Câmbio de referência: R$ {DEFAULT_USD_BRL.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (PTAX
            de venda do Banco Central de {formatDateLong(USD_BRL.date)}, arredondada). Promoções com data para acabar e faixas de prompt longo estão
            descritas em cada modelo na calculadora.
          </p>
        </section>

        <hr style={{ border: '0', height: '1px', background: 'var(--border-color)', margin: '3rem 0' }} />

        <article style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            Como funciona a precificação de APIs de Inteligência Artificial?
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            A maioria das provedoras de modelos de linguagem de grande porte (LLMs) como OpenAI, Google, Anthropic e DeepSeek
            utiliza um modelo de cobrança baseado em <strong>tokens</strong>. Você paga uma tarifa por milhão (1M) de tokens enviados para a API (entrada/prompt) e outra tarifa por milhão de tokens gerados pelo modelo (saída/resposta).
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            O que é um Token?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Um token é uma fração de palavra. Em média, <strong>100 tokens equivalem a aproximadamente 75 palavras</strong> em inglês.
            Em português e outros idiomas latinos, a contagem de tokens costuma ser ligeiramente maior por conta de acentuações e estrutura silábica.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Tokens de Entrada:</strong> Incluem o prompt que você digita, instruções do sistema, histórico anterior do chat e quaisquer arquivos ou imagens anexados.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Tokens de Saída:</strong> É o texto produzido pela IA como resposta — e, nos modelos de raciocínio, também os tokens de &quot;pensamento&quot;. Geralmente custam de 3 a 6 vezes mais que os de entrada, por causa do poder computacional necessário para gerar texto token a token.
            </li>
          </ul>

          <h3 id="dicas-para-economizar" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            Dicas para economizar custos de API
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Se você está desenvolvendo um aplicativo ou integrando IA em seus sistemas internos, os custos podem escalar rapidamente.
            Aqui estão algumas das melhores práticas para otimização de orçamento:
          </p>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'decimal' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Use modelos compactos (linhas Flash, Luna, Haiku e Mini):</strong> custam de 3 a 100 vezes menos que os modelos de topo da mesma empresa e dão conta da maior parte das tarefas de classificação, resumo, extração e formatação de dados. Reserve os modelos caros para o que realmente exige raciocínio.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Implemente Caching de Contexto:</strong> OpenAI, Anthropic, Google e DeepSeek cobram bem menos (em geral, até 90% a menos) por tokens de entrada repetidos quando você usa o cache para instruções longas ou bases de conhecimento fixas.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Limite o tamanho da resposta:</strong> Use o parâmetro de limite de tokens de saída nas requisições para evitar que o modelo se estenda desnecessariamente, poupando os tokens mais caros.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Otimize o histórico do chat:</strong> Em chats contínuos, limpe ou resuma as mensagens antigas para evitar reenviar um histórico gigantesco a cada nova interação — e para não cair na faixa de preço de prompt longo.
            </li>
          </ol>

          <p style={{ marginBottom: '1rem' }}>
            Para escolher o modelo mais adequado além do custo, use o nosso <Link href="/comparador">comparador de IAs</Link>. Se precisar de ajuda para escrever prompts mais eficientes e reduzir tokens desnecessários, explore a <Link href="/prompts">biblioteca de prompts</Link>.
          </p>
        </article>

        <hr style={{ border: '0', height: '1px', background: 'var(--border-color)', margin: '3rem 0' }} />

        <ToolFaq title="Perguntas Frequentes sobre Custos de APIs de IA" faqs={faqs} />
      </section>
    </main>
    </>
  );
}
