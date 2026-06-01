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
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    inputPricePerM: 7.00,
    outputPricePerM: 21.00,
    contextWindow: '1M tokens',
    description: 'O modelo flagship da Google (junho 2026), com raciocínio avançado e até 1M de contexto (preço para até 1M tokens).',
  },
  {
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.30,
    outputPricePerM: 2.50,
    contextWindow: '1M tokens',
    description: 'O novo modelo Flash padrão da Google (junho 2026), oferecendo um bom equilíbrio entre velocidade e capacidade.',
  },
  // OpenAI
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'Modelo flagship da OpenAI (maio 2024), versátil e otimizado para a maioria das tarefas, com 128K de contexto.',
  },
  {
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'O modelo mais econômico da OpenAI (maio 2024), otimizado para tarefas de alta demanda e baixo custo, com 128K de contexto.',
  },
  {
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    inputPricePerM: 5.00,
    outputPricePerM: 15.00,
    contextWindow: '128K tokens',
    description: 'Modelo anterior da OpenAI (abril 2024), com bom raciocínio e capacidades criativas, suportando 128K de contexto.',
  },
  // Anthropic
  {
    name: 'Claude Opus 4.7',
    provider: 'Anthropic',
    inputPricePerM: 5.00,
    outputPricePerM: 25.00,
    contextWindow: '1M tokens',
    description: 'O modelo mais inteligente da Anthropic (maio 2026) para raciocínio complexo e tarefas agênticas, com 1M de contexto.',
  },
  {
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'Modelo equilibrado da Anthropic (maio 2026) entre inteligência e velocidade para cargas de trabalho empresariais, com 1M de contexto.',
  },
  {
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    inputPricePerM: 1.00,
    outputPricePerM: 5.00,
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da Anthropic (maio 2026).',
  },
  // DeepSeek
  {
    name: 'DeepSeek-V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '1M tokens',
    description: 'Modelo eficiente da DeepSeek para alta velocidade (junho 2026), com 1M de contexto.',
  },
  {
    name: 'DeepSeek-V4 Pro',
    provider: 'DeepSeek',
    inputPricePerM: 0.435,
    outputPricePerM: 0.87,
    contextWindow: '1M tokens',
    description: 'Modelo avançado da DeepSeek para raciocínio complexo (junho 2026), com 1M de contexto.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.1 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88,
    outputPricePerM: 0.88,
    contextWindow: '131K tokens',
    description: 'Modelo open-source poderoso via API Together AI (Llama 3.1 70B Instruct, maio 2026).',
  },
  {
    name: 'Meta-Llama-3.1-8B-Instruct-Turbo (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.18,
    outputPricePerM: 0.18,
    contextWindow: '131K tokens',
    description: 'Versão leve e econômica da família Llama 3.1 Instruct via API Together AI (maio 2026), com 131K de contexto.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '262K tokens',
    description: 'Modelo flagship mais recente da Mistral AI com raciocínio e capacidades multimodais (dezembro 2025), suportando 262K de contexto.',
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
    description: 'Modelo robusto da Cohere (maio 2026), otimizado para RAG e tarefas empresariais, com 128K de contexto.',
  },
];