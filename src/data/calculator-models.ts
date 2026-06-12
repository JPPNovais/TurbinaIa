export interface CalculatorModel {
  name: string;
  provider: string;
  inputPricePerM: number;
  outputPricePerM: number;
  contextWindow: string;
  description: string;
}

export const AI_MODELS: CalculatorModel[] = [
  // Google
  {
    name: 'Gemini 3.1 Pro',
    provider: 'Google',
    inputPricePerM: 2.00, // Price for up to 200K tokens
    outputPricePerM: 12.00, // Price for up to 200K tokens
    contextWindow: '2M tokens',
    description: 'O modelo Pro atual da Google (lançado em Fevereiro de 2026), com raciocínio avançado e contexto de até 2M tokens. Preço base para até 200K tokens. Acima de 200K tokens, os preços são $4.00/M input e $18.00/M output.',
  },
  {
    name: 'Gemini 3.1 Flash-Lite',
    provider: 'Google',
    inputPricePerM: 0.25,
    outputPricePerM: 1.50,
    contextWindow: '1M tokens',
    description: 'O modelo Flash mais econômico da Google (lançado em Maio de 2026), otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto.',
  },
  // OpenAI
  {
    name: 'GPT-5.5',
    provider: 'OpenAI',
    inputPricePerM: 5.00,
    outputPricePerM: 30.00,
    contextWindow: '1M+ tokens',
    description: 'O mais recente modelo flagship da OpenAI (lançado em Abril de 2026), construindo sobre o GPT-5.4 com raciocínio avançado, capacidades multimodais e 1M+ de contexto.',
  },
  {
    name: 'GPT-5.4',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'O modelo de produção recomendado da OpenAI (lançado em Maio de 2026), com capacidades avançadas e 1M de contexto. Preços atualizados em Junho de 2026.',
  },
  {
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'A versão mais acessível do GPT-4o (lançado em Julho de 2024), otimizado para tarefas de alta demanda e baixo custo, mantendo 128K de contexto.',
  },
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O modelo multimodal da OpenAI (lançado em Maio de 2024), oferece raciocínio avançado, capacidades multimodais e 128K de contexto. Preços mantidos em Junho de 2026.',
  },
  // Anthropic
  {
    name: 'Claude Opus 4.7',
    provider: 'Anthropic',
    inputPricePerM: 5.00,
    outputPricePerM: 25.00,
    contextWindow: '1M tokens',
    description: 'A versão mais recente do modelo Opus da Anthropic para raciocínio complexo e tarefas agênticas (lançado em Abril de 2026), com 1M de contexto.',
  },
  {
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'A versão mais recente do modelo Sonnet da Anthropic (lançado em Fevereiro de 2026), um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com 1M de contexto.',
  },
  {
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    inputPricePerM: 1.00,
    outputPricePerM: 5.00,
    contextWindow: '200K tokens',
    description: 'A versão mais recente do modelo Haiku da Anthropic (lançado em Outubro de 2025), o mais rápido e econômico, com 200K de contexto.',
  },
  // DeepSeek
  {
    name: 'DeepSeek-V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '1M tokens',
    description: 'Modelo MoE eficiente e econômico da DeepSeek (lançado em Abril de 2026), com 1M de contexto, oferecendo bom desempenho a baixo custo.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B Instruct Turbo (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88,
    outputPricePerM: 0.88,
    contextWindow: '131K tokens',
    description: 'Versão avançada do modelo open-source Llama 3 (Llama 3.3 70B Instruct Turbo), poderoso via API Together AI (preços verificados em Junho de 2026), com 131K de contexto.',
  },
  {
    name: 'Llama 3.1 8B Instruct Turbo (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.18,
    outputPricePerM: 0.18,
    contextWindow: '16K tokens',
    description: 'Versão leve e econômica da família Llama 3 Instruct via API Together AI (preços verificados em Junho de 2026), com 16K de contexto.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '262K tokens',
    description: 'Modelo flagship da Mistral AI (Mistral Large 3), com raciocínio e capacidades multimodais, suportando 262K de contexto (preços verificados em Junho de 2026).',
  },
  {
    name: 'Mistral Small 4',
    provider: 'Mistral AI',
    inputPricePerM: 0.10,
    outputPricePerM: 0.30,
    contextWindow: '256K tokens',
    description: 'Um modelo econômico da Mistral AI (Mistral Small 4), ideal para projetos sensíveis ao custo, com 256K de contexto (preços verificados em Junho de 2026).',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'Modelo robusto da Cohere (lançado em Agosto de 2024), otimizado para RAG e tarefas empresariais, com 128K de contexto. Preços atualizados em Junho de 2026.',
  },
];