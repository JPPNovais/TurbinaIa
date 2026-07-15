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
    contextWindow: '2M tokens',
    description: 'O modelo Pro mais recente da Google, com raciocínio avançado e contexto de até 2M tokens. Preços e janela de contexto baseados na precificação do Gemini 1.5 Pro a partir de Julho de 2026.',
  },
  {
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.075,
    outputPricePerM: 0.30,
    contextWindow: '1M tokens',
    description: 'O modelo Flash mais econômico da Google (versão 1.5), otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto. Preços e janela de contexto baseados na precificação do Gemini 1.5 Flash a partir de Julho de 2026.',
  },
  // OpenAI
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O modelo mais recente da OpenAI, com capacidades multimodais e 128K de contexto, otimizado para velocidade e eficiência. Preços e janela de contexto baseados no GPT-4o a partir de Julho de 2026.',
  },
  {
    name: 'GPT-5.4',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'O modelo mais recente da família GPT-5 da OpenAI, oferecendo raciocínio avançado, capacidades multimodais e 1M de contexto. É o modelo recomendado para cargas de trabalho de produção. Preços e janela de contexto baseados no GPT-5.4 a partir de Julho de 2026.',
  },
  {
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'A versão mais econômica do GPT-4o da OpenAI, ideal para tarefas de baixo custo e alta escala, com 128K de contexto, mantendo alto desempenho. Preços e janela de contexto baseados no GPT-4o mini a partir de Julho de 2026.',
  },
  // Anthropic
  {
    name: 'Claude Opus 4.8',
    provider: 'Anthropic',
    inputPricePerM: 5.00,
    outputPricePerM: 25.00,
    contextWindow: '1M tokens',
    description: 'O modelo mais inteligente da família Claude da Anthropic (versão Opus 4.8), para raciocínio complexo e tarefas agênticas, com até 1M de contexto. Foco em honestidade e confiabilidade. Preços e janela de contexto baseados no Claude Opus 4.8 a partir de Julho de 2026.',
  },
  {
    name: 'Claude 4.6 Sonnet',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'O modelo intermediário da família Claude da Anthropic (versão Sonnet 4.6), um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com até 1M de contexto. Preços e janela de contexto baseados no Claude Sonnet 4.6 a partir de Julho de 2026.',
  },
  {
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    inputPricePerM: 1.00,
    outputPricePerM: 5.00,
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da família Claude da Anthropic (versão Haiku 4.5), ideal para tarefas de alto desempenho e baixo custo, com até 200K de contexto. Preços e janela de contexto baseados no Claude Haiku 4.5 a partir de Julho de 2026.',
  },
  // DeepSeek
  {
    name: 'DeepSeek V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '1M tokens',
    description: 'O modelo DeepSeek V4 Flash, com bom desempenho e um custo muito baixo, suportando 1M de contexto. Preços e janela de contexto baseados no DeepSeek V4 Flash a partir de Julho de 2026.',
  },
  // Meta (via API)
  {
    name: 'Llama 3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88,
    outputPricePerM: 0.88,
    contextWindow: '131K tokens',
    description: 'Versão avançada do modelo open-source Llama 3 (Llama 3.3 70B Instruct), poderosa via API Together AI. Oferece 131K de contexto. Preços e janela de contexto baseados na precificação do Llama 3.3 70B Instruct via Together AI a partir de Julho de 2026.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '256K tokens',
    description: 'O modelo flagship da Mistral AI (versão Large 3), com raciocínio avançado e capacidades multimodais. Preços e janela de contexto baseados no Mistral Large 3 a partir de Julho de 2026.',
  },
  {
    name: 'Mistral Small 4',
    provider: 'Mistral AI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '256K tokens',
    description: 'O modelo otimizado da Mistral AI (versão Small 4), que oferece um bom equilíbrio entre desempenho e custo para uma ampla gama de tarefas, com 256K de contexto. Preços e janela de contexto baseados no Mistral Small 4 a partir de Julho de 2026.',
  },
  {
    name: 'Mixtral 8x7B',
    provider: 'Mistral AI',
    inputPricePerM: 0.70,
    outputPricePerM: 0.70,
    contextWindow: '32K tokens',
    description: 'Modelo Sparse Mixture-of-Experts da Mistral AI, com excelente desempenho e eficiência, suportando 32K de contexto. Preços e janela de contexto baseados no Mixtral 8x7B a partir de Julho de 2026.',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O mais novo modelo flagship da Cohere (versão R+), com uma janela de contexto maior e otimizado para raciocínio avançado e fluxos de trabalho agênticos. Preços e janela de contexto baseados no Command R+ a partir de Julho de 2026.',
  },
  {
    name: 'Command R',
    provider: 'Cohere',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'Modelo eficiente da Cohere (versão R), adequado para cargas de trabalho de produção e RAG de menor custo, com 128K de contexto. Preços e janela de contexto confirmados em Julho de 2026 para o Command R.',
  },
];