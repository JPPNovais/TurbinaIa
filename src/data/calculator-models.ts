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
    name: 'Gemini 2.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.30, 
    outputPricePerM: 2.50, 
    contextWindow: '1M tokens', 
    description: 'Modelo mid-tier legado da Google da família Gemini 2.5, com bom equilíbrio entre custo e capacidade.',
  },
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
    description: 'Novo modelo Flash padrão da Google (maio 2026), oferecendo um bom equilíbrio entre velocidade e capacidade.',
  },
  // OpenAI
  {
    name: 'GPT-4.1', 
    provider: 'OpenAI',
    inputPricePerM: 2.00, 
    outputPricePerM: 8.00, 
    contextWindow: '1M tokens', 
    description: 'Modelo de produção recomendado da OpenAI (maio 2026), com fortes capacidades de codificação, seguimento de instruções e contexto longo.',
  },
  {
    name: 'GPT-4.1 Nano', 
    provider: 'OpenAI',
    inputPricePerM: 0.10, 
    outputPricePerM: 0.40, 
    contextWindow: '1M tokens', 
    description: 'Modelo mais econômico da OpenAI (maio 2026), otimizado para tarefas de alta demanda e baixo custo, com 1M de contexto.',
  },
  {
    name: 'GPT-5', 
    provider: 'OpenAI',
    inputPricePerM: 1.25, 
    outputPricePerM: 10.00, 
    contextWindow: '128K tokens', 
    description: 'Modelo mais capaz da OpenAI (maio 2026), para fluxos de trabalho agênticos e raciocínio complexo.',
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
    description: 'Modelo eficiente da DeepSeek para alta velocidade (versão V4 Flash).',
  },
  {
    name: 'DeepSeek-V4 Pro',
    provider: 'DeepSeek',
    inputPricePerM: 0.435, 
    outputPricePerM: 0.87, 
    contextWindow: '1M tokens', 
    description: 'Modelo avançado da DeepSeek para raciocínio complexo (versão V4 Pro).',
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
    name: 'Mistral Large',
    provider: 'Mistral AI',
    inputPricePerM: 2.00, 
    outputPricePerM: 6.00, 
    contextWindow: '131K tokens', 
    description: 'Modelo flagship da Mistral AI com raciocínio e capacidades multimodais.',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50, 
    outputPricePerM: 10.00, 
    contextWindow: '128K tokens', 
    description: 'Modelo robusto da Cohere, otimizado para RAG e tarefas empresariais.',
  },
];