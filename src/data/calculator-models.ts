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
    inputPricePerM: 7.00, // Reduced price for up to 128K tokens
    outputPricePerM: 21.00, // Reduced price for up to 128K tokens
    contextWindow: '1M tokens',
    description: 'O modelo Pro atual da Google (lançado em Maio de 2024, preços atualizados em Outubro de 2024), com raciocínio avançado e contexto de até 1M tokens. Preço base para até 128K tokens. Acima de 128K, preços podem ser maiores.',
  },
  {
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.075,
    outputPricePerM: 0.30,
    contextWindow: '1M tokens',
    description: 'O modelo Flash padrão da Google (lançado em Maio de 2024, preços atualizados em Agosto de 2024), oferecendo um bom equilíbrio entre velocidade e capacidade, com até 1M de contexto.',
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
    description: 'A versão mais recente do modelo Opus da Anthropic para raciocínio complexo e tarefas agênticas, com 1M de contexto.',
  },
  {
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'A versão mais recente do modelo Sonnet da Anthropic (junho 2026), um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com 1M de contexto.',
  },
  {
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    inputPricePerM: 1.00,
    outputPricePerM: 5.00,
    contextWindow: '200K tokens',
    description: 'A versão mais recente do modelo Haiku da Anthropic (junho 2026), o mais rápido e econômico, com 200K de contexto.',
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
    description: 'Versão avançada do modelo open-source Llama 3 (Llama 3.3 70B Instruct), poderoso via API Together AI.',
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
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '262K tokens',
    description: 'Modelo flagship mais recente da Mistral AI (Mistral Large 3), com raciocínio e capacidades multimodais, suportando 262K de contexto.',
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