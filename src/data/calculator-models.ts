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
    inputPricePerM: 3.50,
    outputPricePerM: 10.50,
    contextWindow: '1M tokens',
    description: 'O modelo flagship da Google (fevereiro 2024), com raciocínio avançado e até 1M de contexto (preço para até 1M tokens).',
  },
  {
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.35,
    outputPricePerM: 1.05,
    contextWindow: '1M tokens',
    description: 'O novo modelo Flash padrão da Google (setembro 2024), oferecendo um bom equilíbrio entre velocidade e capacidade, com até 1M de contexto.',
  },
  // OpenAI
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 5.00,
    outputPricePerM: 15.00,
    contextWindow: '128K tokens',
    description: 'Modelo flagship da OpenAI (maio 2024), versátil e otimizado para a maioria das tarefas, com 128K de contexto.',
  },
  {
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'Um modelo econômico da OpenAI (maio 2024), otimizado para tarefas de alta demanda e baixo custo, com forte raciocínio e 128K de contexto.',
  },
  {
    name: 'GPT-5.4',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'Modelo de produção recomendado pela OpenAI (maio 2026), oferecendo excelente equilíbrio entre custo e capacidade, com 1M de contexto.',
  },
  // Anthropic
  {
    name: 'Claude Opus 4.8',
    provider: 'Anthropic',
    inputPricePerM: 5.00,
    outputPricePerM: 25.00,
    contextWindow: '1M tokens',
    description: 'O modelo mais inteligente da Anthropic (maio 28, 2026) para raciocínio complexo e tarefas agênticas, com 1M de contexto. Mesmos preços do Opus 4.7, com melhorias.',
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
    description: 'Modelo eficiente da DeepSeek para alta velocidade (maio 2026), com 1M de contexto.',
  },
  {
    name: 'DeepSeek-V4 Pro',
    provider: 'DeepSeek',
    inputPricePerM: 0.435,
    outputPricePerM: 0.87,
    contextWindow: '1M tokens',
    description: 'Modelo avançado da DeepSeek para raciocínio complexo (abril 2026), com 1M de contexto, e com preço promocional tornando-se oficial após maio de 2026.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.1 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.90,
    outputPricePerM: 0.90,
    contextWindow: '131K tokens',
    description: 'Modelo open-source poderoso via API Together AI (Llama 3.1 70B Instruct, julho 2024).',
  },
  {
    name: 'Meta-Llama-3.1-8B-Instruct-Turbo (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.18,
    outputPricePerM: 0.18,
    contextWindow: '131K tokens',
    description: 'Versão leve e econômica da família Llama 3.1 Instruct via API Together AI (julho 2024), com 131K de contexto.',
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
    description: 'Modelo robusto da Cohere (agosto 2024), otimizado para RAG e tarefas empresariais, com 128K de contexto.',
  },
];