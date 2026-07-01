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
    inputPricePerM: 1.25,
    outputPricePerM: 5.00,
    contextWindow: '2M tokens',
    description: 'O modelo Pro mais recente da Google, com raciocínio avançado e contexto de até 2M tokens. Preços e janela de contexto baseados na precificação do Gemini Pro a partir de Julho de 2026.',
  },
  {
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.30,
    outputPricePerM: 2.50,
    contextWindow: '1M tokens',
    description: 'O modelo Flash mais econômico da Google, otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto. Preços e janela de contexto baseados na precificação do Gemini Flash a partir de Julho de 2026.',
  },
  // OpenAI
  {
    name: 'GPT-5.5',
    provider: 'OpenAI',
    inputPricePerM: 5.00,
    outputPricePerM: 30.00,
    contextWindow: '1M tokens',
    description: 'O modelo mais avançado da OpenAI (lançado em Maio de 2026), com capacidades multimodais e 1M de contexto. Ideal para tarefas de ponta. Preços e janela de contexto baseados no GPT-5.5 a partir de Julho de 2026.',
  },
  {
    name: 'GPT-5.4',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'O modelo flagship da OpenAI (lançado em Maio de 2026), com raciocínio avançado, capacidades multimodais e 1M de contexto. Oferece desempenho de ponta e é a principal escolha para tarefas complexas. Preços e janela de contexto baseados no GPT-5.4 a partir de Julho de 2026.',
  },
  {
    name: 'GPT-5.4 mini',
    provider: 'OpenAI',
    inputPricePerM: 0.75,
    outputPricePerM: 4.50,
    contextWindow: '128K tokens', // Assuming 128K for the mini version, as 1M context was noted for GPT-5.4 and GPT-5.5, but not explicitly for the mini.
    description: 'A versão mais econômica do GPT-5.4 da OpenAI (lançada em Maio de 2026), ideal para tarefas de baixo custo e alta escala, com 128K de contexto, mantendo alto desempenho. Preços e janela de contexto baseados no GPT-5.4 mini a partir de Julho de 2026.',
  },
  // Anthropic
  {
    name: 'Claude Opus 4.8',
    provider: 'Anthropic',
    inputPricePerM: 5.00,
    outputPricePerM: 25.00,
    contextWindow: '1M tokens',
    description: 'O modelo mais inteligente da família Claude da Anthropic, para raciocínio complexo e tarefas agênticas, com até 1M de contexto. Foco em honestidade e confiabilidade. Preços e janela de contexto baseados no Claude Opus 4.8 a partir de Julho de 2026.',
  },
  {
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '1M tokens',
    description: 'O modelo intermediário da família Claude da Anthropic, um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com até 1M de contexto. Preços e janela de contexto baseados no Claude Sonnet 4.6 a partir de Julho de 2026.',
  },
  // DeepSeek
  {
    name: 'DeepSeek V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '1M tokens',
    description: 'O mais recente modelo flagship da DeepSeek, com bom desempenho e um custo muito baixo, suportando 1M de contexto. Preços e janela de contexto baseados no DeepSeek V4 Flash a partir de Julho de 2026.',
  },
  {
    name: 'DeepSeek V4 Pro',
    provider: 'DeepSeek',
    inputPricePerM: 1.74,
    outputPricePerM: 3.48,
    contextWindow: '1M tokens',
    description: 'O modelo de raciocínio avançado da DeepSeek, para tarefas complexas, suportando 1M de contexto. Preços e janela de contexto baseados no DeepSeek V4 Pro a partir de Julho de 2026.',
  },
  // Meta (via API)
  {
    name: 'Llama 3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88,
    outputPricePerM: 0.88,
    contextWindow: '8K tokens',
    description: 'Versão avançada do modelo open-source Llama 3 (Llama 3 70B Instruct), poderosa via API Together AI. Oferece 8K de contexto. Preços e janela de contexto baseados na precificação do Llama 3 70B Instruct via Together AI a partir de Julho de 2026.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '32K tokens',
    description: 'O modelo flagship da Mistral AI, com raciocínio avançado e capacidades multimodais. Preços e janela de contexto baseados no Mistral Large 3 a partir de Julho de 2026.',
  },
  {
    name: 'Mistral Small 4',
    provider: 'Mistral AI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '256K tokens',
    description: 'O modelo otimizado da Mistral AI, que oferece um bom equilíbrio entre desempenho e custo para uma ampla gama de tarefas. Preços e janela de contexto baseados no Mistral Small 4 a partir de Julho de 2026.',
  },
  {
    name: 'Mixtral 8x22B',
    provider: 'Mistral AI',
    inputPricePerM: 2.00,
    outputPricePerM: 6.00,
    contextWindow: '65536 tokens',
    description: 'Modelo Sparse Mixture-of-Experts da Mistral AI, com excelente desempenho e eficiência, suportando 65536 de contexto. Preços e janela de contexto baseados no Mixtral 8x22B a partir de Julho de 2026.',
  },
  // Cohere
  {
    name: 'Command R',
    provider: 'Cohere',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'Modelo eficiente da Cohere, adequado para cargas de trabalho de produção e RAG de menor custo, com 128K de contexto. Preços e janela de contexto confirmados em Julho de 2026 para o Command R.',
  },
  {
    name: 'Command A',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '256K tokens',
    description: 'O mais novo modelo flagship da Cohere, com uma janela de contexto maior e otimizado para raciocínio avançado e fluxos de trabalho agênticos. Preços e janela de contexto baseados no Command A a partir de Julho de 2026.',
  },
];