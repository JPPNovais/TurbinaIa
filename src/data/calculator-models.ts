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
    inputPricePerM: 2.00,
    outputPricePerM: 12.00,
    contextWindow: '2M tokens',
    description: 'O modelo flagship da Google (maio 2026), com raciocínio avançado e até 2M de contexto (preço para até 200K tokens).',
  },
  {
    name: 'Gemini 3 Flash',
    provider: 'Google',
    inputPricePerM: 0.50,
    outputPricePerM: 3.00,
    contextWindow: '1M tokens',
    description: 'O novo modelo Flash padrão da Google (maio 2026), oferecendo um bom equilíbrio entre velocidade e capacidade.',
  },
  // OpenAI
  {
    name: 'GPT-5.4',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'Modelo de produção recomendado da OpenAI (maio 2026), oferecendo um excelente equilíbrio entre custo e capacidade com 1M de contexto.',
  },
  {
    name: 'GPT-5.4 Nano',
    provider: 'OpenAI',
    inputPricePerM: 0.20,
    outputPricePerM: 1.25,
    contextWindow: '32K tokens',
    description: 'O modelo mais econômico da OpenAI (maio 2026), otimizado para tarefas de alta demanda e baixo custo, com 32K de contexto.',
  },
  {
    name: 'GPT-5.5',
    provider: 'OpenAI',
    inputPricePerM: 5.00,
    outputPricePerM: 30.00,
    contextWindow: '1M tokens',
    description: 'O mais novo modelo flagship da OpenAI (abril 2026), com raciocínio complexo, codificação e capacidades criativas, suportando 1M de contexto.',
  },
  // Anthropic
  {
    name: 'Claude Opus 4.8',
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
    description: 'Modelo eficiente da DeepSeek para alta velocidade (versão V4 Flash), com 1M de contexto.',
  },
  {
    name: 'DeepSeek-V4 Pro',
    provider: 'DeepSeek',
    inputPricePerM: 0.435,
    outputPricePerM: 0.87,
    contextWindow: '1M tokens',
    description: 'Modelo avançado da DeepSeek para raciocínio complexo (versão V4 Pro), com 1M de contexto.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88,
    outputPricePerM: 0.88,
    contextWindow: '131K tokens',
    description: 'Modelo open-source poderoso via API Together AI (Llama 3.3 70B Instruct).',
  },
  {
    name: 'Meta-Llama-3.1-8B-Instruct-Turbo (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.18,
    outputPricePerM: 0.18,
    contextWindow: '8K tokens',
    description: 'Versão leve e econômica da família Llama 3 Instruct via API Together AI.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '262K tokens',
    description: 'Modelo flagship mais recente da Mistral AI com raciocínio e capacidades multimodais, suportando 262K de contexto.',
  },
  {
    name: 'Mistral Small 4',
    provider: 'Mistral AI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.45,
    contextWindow: '256K tokens',
    description: 'Um modelo econômico da Mistral AI, ideal para projetos sensíveis ao custo, com 256K de contexto.',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'Modelo robusto da Cohere, otimizado para RAG e tarefas empresariais, com 128K de contexto.',
  },
];