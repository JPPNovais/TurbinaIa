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
    description: 'O modelo Pro mais recente da Google, com raciocínio avançado e contexto de até 1M tokens. Preços e janela de contexto baseados na precificação do Gemini 1.5 Pro a partir de Julho de 2024.',
  },
  {
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.075,
    outputPricePerM: 0.30,
    contextWindow: '1M tokens',
    description: 'O modelo Flash mais econômico da Google, otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto. Preços e janela de contexto baseados na precificação do Gemini 1.5 Flash a partir de Julho de 2024.',
  },
  // OpenAI
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O modelo mais recente da OpenAI, com capacidades multimodais e 128K de contexto, otimizado para velocidade e eficiência. Preços e janela de contexto baseados no GPT-4o a partir de Julho de 2024.',
  },
  {
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    inputPricePerM: 10.00,
    outputPricePerM: 30.00,
    contextWindow: '128K tokens',
    description: 'O modelo Turbo da OpenAI com raciocínio avançado, capacidades multimodais e 128K de contexto. Oferece desempenho de ponta para tarefas complexas. Preços e janela de contexto baseados no GPT-4 Turbo a partir de Julho de 2024.',
  },
  {
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'A versão mais econômica do GPT-4o da OpenAI, ideal para tarefas de baixo custo e alta escala, com 128K de contexto, mantendo alto desempenho. Preços e janela de contexto baseados no GPT-4o mini a partir de Julho de 2024.',
  },
  // Anthropic
  {
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    inputPricePerM: 15.00,
    outputPricePerM: 75.00,
    contextWindow: '200K tokens',
    description: 'O modelo mais inteligente da família Claude da Anthropic, para raciocínio complexo e tarefas agênticas, com até 200K de contexto. Foco em honestidade e confiabilidade. Preços e janela de contexto baseados no Claude 3 Opus a partir de Julho de 2024.',
  },
  {
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '200K tokens',
    description: 'O modelo intermediário da família Claude da Anthropic, um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com até 200K de contexto. Preços e janela de contexto baseados no Claude 3.5 Sonnet a partir de Julho de 2024.',
  },
  {
    name: 'Claude 3 Haiku',
    provider: 'Anthropic',
    inputPricePerM: 0.25,
    outputPricePerM: 1.25,
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da família Claude da Anthropic, ideal para tarefas de alto desempenho e baixo custo, com até 200K de contexto. Preços e janela de contexto baseados no Claude 3 Haiku a partir de Julho de 2024.',
  },
  // DeepSeek
  {
    name: 'DeepSeek V2',
    provider: 'DeepSeek',
    inputPricePerM: 0.10,
    outputPricePerM: 0.20,
    contextWindow: '128K tokens',
    description: 'O mais recente modelo flagship da DeepSeek, com bom desempenho e um custo muito baixo, suportando 128K de contexto. Preços e janela de contexto baseados no DeepSeek V2 a partir de Julho de 2024.',
  },
  // Meta (via API)
  {
    name: 'Llama 3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88,
    outputPricePerM: 0.88,
    contextWindow: '8K tokens',
    description: 'Versão avançada do modelo open-source Llama 3 (Llama 3 70B Instruct), poderosa via API Together AI. Oferece 8K de contexto. Preços e janela de contexto baseados na precificação do Llama 3 70B Instruct via Together AI a partir de Julho de 2024.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '32K tokens',
    description: 'O modelo flagship da Mistral AI, com raciocínio avançado e capacidades multimodais. Preços e janela de contexto baseados no Mistral Large 3 a partir de Julho de 2024.',
  },
  {
    name: 'Mistral Small 4',
    provider: 'Mistral AI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '256K tokens',
    description: 'O modelo otimizado da Mistral AI, que oferece um bom equilíbrio entre desempenho e custo para uma ampla gama de tarefas. Preços e janela de contexto baseados no Mistral Small 4 a partir de Julho de 2024.',
  },
  {
    name: 'Mixtral 8x7B',
    provider: 'Mistral AI',
    inputPricePerM: 0.70,
    outputPricePerM: 0.70,
    contextWindow: '32K tokens',
    description: 'Modelo Sparse Mixture-of-Experts da Mistral AI, com excelente desempenho e eficiência, suportando 32K de contexto. Preços e janela de contexto baseados no Mixtral 8x7B a partir de Julho de 2024.',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O mais novo modelo flagship da Cohere, com uma janela de contexto maior e otimizado para raciocínio avançado e fluxos de trabalho agênticos. Preços e janela de contexto baseados no Command R+ a partir de Julho de 2024.',
  },
  {
    name: 'Command R',
    provider: 'Cohere',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'Modelo eficiente da Cohere, adequado para cargas de trabalho de produção e RAG de menor custo, com 128K de contexto. Preços e janela de contexto confirmados em Julho de 2024 para o Command R.',
  },
];