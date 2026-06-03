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
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    inputPricePerM: 1.25, // Base price for up to 128K tokens, higher for larger contexts
    outputPricePerM: 10.00, // Base price for up to 128K tokens, higher for larger contexts
    contextWindow: '1M tokens',
    description: 'O modelo Pro atual da Google (maio 2026), com raciocínio avançado e contexto de até 1M tokens. Preço base para até 128K tokens. Acima de 128K, preços podem ser maiores.',
  },
  {
    name: 'Gemini 2.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.30,
    outputPricePerM: 2.50,
    contextWindow: '1M tokens',
    description: 'O modelo Flash padrão da Google (maio 2026), oferecendo um bom equilíbrio entre velocidade e capacidade, com até 1M de contexto.',
  },
  // OpenAI
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O mais recente modelo flagship da OpenAI (maio 2024), uma nova classe de inteligência com capacidades multimodais e 128K de contexto.',
  },
  {
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'Um modelo econômico da OpenAI (julho 2024), otimizado para tarefas de alta demanda e baixo custo, com forte raciocínio e 128K de contexto.',
  },
  // Anthropic
  {
    name: 'Claude Opus 4.8',
    provider: 'Anthropic',
    inputPricePerM: 5.00,
    outputPricePerM: 25.00,
    contextWindow: '1M tokens',
    description: 'O modelo mais inteligente da Anthropic (lançado em maio 28, 2026) para raciocínio complexo e tarefas agênticas, com 1M de contexto.',
  },
  {
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'Modelo equilibrado da Anthropic (junho 2026) entre inteligência e velocidade para cargas de trabalho empresariais, com 1M de contexto.',
  },
  {
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    inputPricePerM: 1.00,
    outputPricePerM: 5.00,
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da Anthropic (junho 2026), com 200K de contexto.',
  },
  // DeepSeek
  {
    name: 'DeepSeek-V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '1M tokens',
    description: 'Modelo eficiente da DeepSeek para alta velocidade (abril 2026), com 1M de contexto.',
  },
  {
    name: 'DeepSeek-V4 Pro',
    provider: 'DeepSeek',
    inputPricePerM: 1.74,
    outputPricePerM: 3.48,
    contextWindow: '1M tokens',
    description: 'Modelo avançado da DeepSeek para raciocínio complexo (abril 2026), com 1M de contexto. Preço após promoção que terminou em 31 de maio de 2026.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88,
    outputPricePerM: 0.88,
    contextWindow: '131K tokens',
    description: 'Modelo open-source poderoso via API Together AI (junho 2026).',
  },
  {
    name: 'Meta-Llama-3.1-8B-Instruct-Turbo (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.18,
    outputPricePerM: 0.18,
    contextWindow: '128K tokens',
    description: 'Versão leve e econômica da família Llama 3.1 Instruct via API Together AI (junho 2026), com 128K de contexto.',
  },
  // Mistral AI
  {
    name: 'Mistral Large',
    provider: 'Mistral AI',
    inputPricePerM: 2.00,
    outputPricePerM: 6.00,
    contextWindow: '128K tokens',
    description: 'Modelo flagship mais recente da Mistral AI com raciocínio e capacidades multimodais (junho 2026), suportando 128K de contexto.',
  },
  {
    name: 'Mistral Small 4',
    provider: 'Mistral AI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '256K tokens',
    description: 'Um modelo econômico da Mistral AI (março 2026), ideal para projetos sensíveis ao custo, com 256K de contexto.',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'Modelo robusto da Cohere (agosto 2024), otimizado para RAG e tarefas empresariais, com 128K de contexto.',
  },
];