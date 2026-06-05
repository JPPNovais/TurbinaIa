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
    description: 'O modelo Pro atual da Google (lançado em Maio de 2026), com raciocínio avançado e contexto de até 2M tokens. Preço base para até 200K tokens. Acima de 200K tokens, os preços são $4.00/M input e $18.00/M output.',
  },
  {
    name: 'Gemini 3 Flash',
    provider: 'Google',
    inputPricePerM: 0.50,
    outputPricePerM: 3.00,
    contextWindow: '1M tokens',
    description: 'O modelo Flash padrão da Google (lançado em Maio de 2026), oferecendo um bom equilíbrio entre velocidade e capacidade, com até 1M de contexto.',
  },
  // OpenAI
  {
    name: 'GPT-5.5',
    provider: 'OpenAI',
    inputPricePerM: 5.00,
    outputPricePerM: 30.00,
    contextWindow: '1M tokens',
    description: 'O mais recente modelo flagship da OpenAI (lançado em Abril de 2026), uma nova classe de inteligência com raciocínio avançado, capacidades multimodais e 1M de contexto.',
  },
  {
    name: 'GPT-5.4',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'Um modelo mais acessível da OpenAI para codificação e trabalho profissional (lançado em Abril de 2026), com 1M de contexto.',
  },
  {
    name: 'GPT-5.4 Mini',
    provider: 'OpenAI',
    inputPricePerM: 0.75,
    outputPricePerM: 4.50,
    contextWindow: '1M tokens',
    description: 'O mais forte modelo mini da OpenAI (lançado em Abril de 2026), otimizado para tarefas de alta demanda e baixo custo, com forte raciocínio e 1M de contexto.',
  },
  // Anthropic
  {
    name: 'Claude Opus 4.8',
    provider: 'Anthropic',
    inputPricePerM: 5.00,
    outputPricePerM: 25.00,
    contextWindow: '1M tokens',
    description: 'A versão mais recente do modelo Opus da Anthropic para raciocínio complexo e tarefas agênticas (lançado em Maio de 2026), com 1M de contexto.',
  },
  {
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'A versão mais recente do modelo Sonnet da Anthropic (lançado em Maio de 2026), um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com 1M de contexto.',
  },
  {
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    inputPricePerM: 1.00,
    outputPricePerM: 5.00,
    contextWindow: '200K tokens',
    description: 'A versão mais recente do modelo Haiku da Anthropic (lançado em Maio de 2026), o mais rápido e econômico, com 200K de contexto.',
  },
  // DeepSeek
  {
    name: 'DeepSeek-V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '1M tokens',
    description: 'Modelo eficiente da DeepSeek para alta velocidade (lançado em Abril de 2026), com 1M de contexto.',
  },
  {
    name: 'DeepSeek-V4 Pro',
    provider: 'DeepSeek',
    inputPricePerM: 1.74,
    outputPricePerM: 3.48,
    contextWindow: '1M tokens',
    description: 'Modelo avançado da DeepSeek para raciocínio complexo (lançado em Abril de 2026), com 1M de contexto.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88,
    outputPricePerM: 0.88,
    contextWindow: '131K tokens',
    description: 'Versão avançada do modelo open-source Llama 3 (Llama 3.3 70B Instruct), poderoso via API Together AI (preços verificados em Junho de 2026).',
  },
  {
    name: 'Meta-Llama-3.1-8B-Instruct-Turbo (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.18,
    outputPricePerM: 0.18,
    contextWindow: '131K tokens',
    description: 'Versão leve e econômica da família Llama 3.1 Instruct via API Together AI (preços verificados em Junho de 2026), com 131K de contexto.',
  },
  // Mistral AI
  {
    name: 'Mistral Large',
    provider: 'Mistral AI',
    inputPricePerM: 2.00,
    outputPricePerM: 6.00,
    contextWindow: '32K tokens',
    description: 'Modelo flagship da Mistral AI (Mistral Large), com raciocínio e capacidades multimodais, suportando 32K de contexto (preços verificados em Junho de 2026).',
  },
  {
    name: 'Mistral Small',
    provider: 'Mistral AI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '32K tokens',
    description: 'Um modelo econômico da Mistral AI (Mistral Small), ideal para projetos sensíveis ao custo, com 32K de contexto (preços verificados em Junho de 2026).',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'Modelo robusto da Cohere (lançado em Agosto de 2024), otimizado para RAG e tarefas empresariais, com 128K de contexto.',
  },
];