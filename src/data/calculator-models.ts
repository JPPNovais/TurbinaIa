export interface CalculatorModel {
  name: string;
  provider: string;
  inputPricePerM: number;
  outputPricePerM: number;
  contextWindow: string;
  description: string;
  /**
   * Preço mais alto cobrado quando o prompt (tokens de entrada) passa de
   * `aboveTokens` — vale para a requisição inteira, entrada e saída.
   * Omitir quando o modelo tem preço único.
   */
  longContext?: {
    aboveTokens: number;
    inputPricePerM: number;
    outputPricePerM: number;
  };
}

export const AI_MODELS: CalculatorModel[] = [
  // Google
  {
    name: 'Gemini 4 Argon',
    provider: 'Google',
    inputPricePerM: 2.00,
    outputPricePerM: 10.00,
    contextWindow: '1M tokens',
    description: 'O principal modelo de raciocínio da Google, voltado a engenharia de software, matemática e agentes de várias etapas. Disponível na API paga (não está no tier gratuito). Preço promocional de US$ 2,00/US$ 10,00 por milhão de tokens até 30 de novembro de 2026; a partir de 1º de dezembro de 2026 passa a US$ 4,00/US$ 20,00. O preço de saída inclui os tokens de raciocínio.',
  },
  {
    name: 'Gemini 3.1 Pro (Preview)',
    provider: 'Google',
    inputPricePerM: 2.00,
    outputPricePerM: 12.00,
    contextWindow: '1M tokens',
    description: 'Modelo Pro da geração 3 da Google, ainda em versão Preview na API. Para prompts de até 200 mil tokens custa US$ 2,00/US$ 12,00 por milhão; acima disso, US$ 4,00/US$ 18,00 (a calculadora aplica a faixa automaticamente). O preço de saída inclui os tokens de raciocínio.',
    longContext: { aboveTokens: 200_000, inputPricePerM: 4.00, outputPricePerM: 18.00 },
  },
  {
    name: 'Gemini 3.8 Flash',
    provider: 'Google',
    inputPricePerM: 0.75,
    outputPricePerM: 3.75,
    contextWindow: '1M tokens',
    description: 'Modelo Flash mais recente da Google (lançado em 2 de setembro de 2026), com foco em programação e tarefas agênticas e 1M de tokens de contexto. Substituiu o Gemini 3.7 Flash, cujas chamadas são redirecionadas para ele. Preço promocional de US$ 0,75/US$ 3,75 até 31 de dezembro de 2026; a partir de 1º de janeiro de 2027, US$ 1,50/US$ 7,50.',
  },
  {
    name: 'Gemini 3.6 Flash',
    provider: 'Google',
    inputPricePerM: 0.75,
    outputPricePerM: 3.75,
    contextWindow: '1M tokens',
    description: 'Geração anterior do Flash da Google, ainda disponível na API, com 1M de tokens de contexto. Mesmo preço promocional do 3.8 Flash (US$ 0,75/US$ 3,75) até 31 de dezembro de 2026; a partir de 1º de janeiro de 2027, US$ 1,50/US$ 7,50.',
  },
  // OpenAI
  {
    name: 'GPT-6 Astra',
    provider: 'OpenAI',
    inputPricePerM: 10.00,
    outputPricePerM: 50.00,
    contextWindow: '1.05M tokens',
    description: 'Lançado em 3 de setembro de 2026 e, desde 14 de setembro, modelo padrão do ChatGPT Plus, Pro, Business e Enterprise. É o modelo mais caro da OpenAI na API. Prompts acima de 272 mil tokens custam US$ 20,00/US$ 75,00 por milhão. Entrada em cache: US$ 1,00/M; saída máxima de 128K tokens.',
    longContext: { aboveTokens: 272_000, inputPricePerM: 20.00, outputPricePerM: 75.00 },
  },
  {
    name: 'GPT-6.1 Sol',
    provider: 'OpenAI',
    inputPricePerM: 2.00,
    outputPricePerM: 10.00,
    contextWindow: '1.05M tokens',
    description: 'Lançado no DevDay de 29 de setembro de 2026, é o Sol mais recente: fica cerca de 1 ponto atrás do GPT-6 Astra no benchmark DeepSWE v1.1 custando um quinto do preço. Entrada em cache a US$ 0,10/M. Prompts acima de 272 mil tokens custam US$ 4,00/US$ 15,00 por milhão.',
    longContext: { aboveTokens: 272_000, inputPricePerM: 4.00, outputPricePerM: 15.00 },
  },
  {
    name: 'GPT-6 Sol',
    provider: 'OpenAI',
    inputPricePerM: 2.00,
    outputPricePerM: 10.00,
    contextWindow: '1.05M tokens',
    description: 'Lançado em 22 de setembro de 2026, voltado a programação complexa e fluxos agênticos; a própria OpenAI indica o GPT-6.1 Sol como versão mais nova pelo mesmo preço. Prompts acima de 272 mil tokens custam US$ 4,00/US$ 15,00 por milhão.',
    longContext: { aboveTokens: 272_000, inputPricePerM: 4.00, outputPricePerM: 15.00 },
  },
  {
    name: 'GPT-6 Luna',
    provider: 'OpenAI',
    inputPricePerM: 0.10,
    outputPricePerM: 0.50,
    contextWindow: '1.05M tokens',
    description: 'Lançado em 22 de setembro de 2026, é o modelo mais barato da OpenAI, voltado a tarefas de alto volume como resumo e extração de dados. É o substituto indicado para o GPT-4o e o GPT-4o Mini. Prompts acima de 272 mil tokens custam US$ 0,20/US$ 0,75 por milhão.',
    longContext: { aboveTokens: 272_000, inputPricePerM: 0.20, outputPricePerM: 0.75 },
  },
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'Modelo multimodal da geração anterior da OpenAI, já marcado como descontinuado: a API desliga o GPT-4o em 14 de janeiro de 2027, com o GPT-6 Luna como substituto indicado.',
  },
  {
    name: 'GPT-4o Mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'Versão econômica da geração anterior da OpenAI, já marcada como descontinuada: desliga em 14 de janeiro de 2027. O GPT-6 Luna, substituto indicado, custa menos e tem contexto muito maior.',
  },
  // Anthropic
  {
    name: 'Claude Fable 5.1',
    provider: 'Anthropic',
    inputPricePerM: 10.00,
    outputPricePerM: 50.00,
    contextWindow: '1M tokens',
    description: 'O modelo mais capaz da Anthropic com acesso geral, para raciocínio exigente e trabalho agêntico longo, com 1M de tokens de contexto e até 128K de saída. O raciocínio fica sempre ligado e é cobrado como saída.',
  },
  {
    name: 'Claude Opus 5.5',
    provider: 'Anthropic',
    inputPricePerM: 4.00,
    outputPricePerM: 20.00,
    contextWindow: '1M tokens',
    description: 'O Opus atual da Anthropic, lançado em 22 de setembro de 2026 no lugar do Opus 5, com cerca de 20% de corte no preço (o Opus 5 custava US$ 5,00/US$ 25,00). Contexto de 1M de tokens e até 128K de saída; leitura de cache a US$ 0,20/M.',
  },
  {
    name: 'Claude Sonnet 5.5',
    provider: 'Anthropic',
    inputPricePerM: 2.00,
    outputPricePerM: 10.00,
    contextWindow: '1M tokens',
    description: 'O modelo intermediário da Anthropic, lançado em 28 de setembro de 2026 no lugar do Sonnet 5, pelo mesmo preço de API (US$ 2,00/US$ 10,00). Contexto de 1M de tokens e até 128K de saída.',
  },
  {
    name: 'Claude Haiku 5.5',
    provider: 'Anthropic',
    inputPricePerM: 0.10,
    outputPricePerM: 0.50,
    contextWindow: '1M tokens',
    description: 'O modelo mais rápido e barato da Anthropic, lançado em 7 de outubro de 2026 no lugar do Haiku 4.5, com 1M de tokens de contexto. O preço de US$ 0,10/US$ 0,50 vale para prompts de até 100 mil tokens; acima disso, US$ 0,50/US$ 2,50 por milhão.',
    longContext: { aboveTokens: 100_000, inputPricePerM: 0.50, outputPricePerM: 2.50 },
  },
  // DeepSeek
  {
    name: 'DeepSeek V4.1 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '1M tokens',
    description: 'Lançado em 10 de setembro de 2026 no lugar do V4 Flash, com 1M de tokens de contexto e compreensão de imagens. O preço mostrado é o do horário fora de pico; no pico (01h–04h e 06h–10h UTC, de segunda a sexta) dobra para US$ 0,30/US$ 1,20.',
  },
  // Meta (via API)
  {
    name: 'Muse Glimmer 30B (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.35,
    outputPricePerM: 1.50,
    contextWindow: '128K tokens',
    description: 'Modelo aberto da Meta lançado em 10 de agosto de 2026, servido pela Together AI. É o substituto indicado do Llama 3.3 70B, que saiu da API serverless da Together em 22 de outubro de 2026. Entrada em cache a US$ 0,04/M.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '256K tokens',
    description: 'O modelo principal da Mistral AI em versão estável, com raciocínio avançado, capacidades multimodais e 256K de contexto.',
  },
  {
    name: 'Mistral Medium 3.5',
    provider: 'Mistral AI',
    inputPricePerM: 1.50,
    outputPricePerM: 7.50,
    contextWindow: '256K tokens',
    description: 'O modelo intermediário da Mistral AI (abril de 2026), equilibrando inteligência e custo, com 256K de contexto.',
  },
  {
    name: 'Mistral Small 4',
    provider: 'Mistral AI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '256K tokens',
    description: 'O modelo compacto da Mistral AI, com bom equilíbrio entre desempenho e custo para tarefas do dia a dia e 256K de contexto.',
  },
  // Cohere
  {
    name: 'Command A',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '256K tokens',
    description: 'O modelo principal da Cohere, otimizado para fluxos agênticos, RAG e uso multilíngue, com 256K de contexto.',
  },
  {
    name: 'Command R+ (08-2024)',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'Versão de agosto de 2024 do Command R+, hoje listada pela Cohere como modelo legado, mantido para clientes existentes. Para projetos novos, a própria Cohere indica o Command A.',
  },
];
