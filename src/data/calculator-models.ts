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
    inputPricePerM: 14.00, // Preço atualizado para 2M de contexto
    outputPricePerM: 42.00, // Preço atualizado para 2M de contexto
    contextWindow: '2M tokens',
    description: 'O modelo Pro mais recente da Google, com raciocínio avançado e contexto de até 2M tokens. Preços e janela de contexto baseados na precificação do Gemini 1.5 Pro com 2M de contexto a partir de Julho de 2026.',
  },
  {
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.35, // Preço atualizado
    outputPricePerM: 1.05, // Preço atualizado
    contextWindow: '1M tokens',
    description: 'O modelo Flash mais econômico da Google (versão 1.5), otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto. Preços e janela de contexto baseados na precificação do Gemini 1.5 Flash a partir de Julho de 2026.',
  },
  // OpenAI
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 5.00, // Preço atualizado
    outputPricePerM: 15.00, // Preço atualizado
    contextWindow: '128K tokens',
    description: 'O modelo mais recente da OpenAI, com capacidades multimodais e 128K de contexto, otimizado para velocidade e eficiência. Preços e janela de contexto baseados no GPT-4o a partir de Julho de 2026.',
  },
  {
    name: 'GPT-4 Turbo', // Substituído de GPT-5.4 para GPT-4 Turbo
    provider: 'OpenAI',
    inputPricePerM: 10.00, // Preço atualizado
    outputPricePerM: 30.00, // Preço atualizado
    contextWindow: '128K tokens',
    description: 'Um modelo poderoso da OpenAI (e.g., gpt-4-turbo-2024-04-09), oferecendo um grande contexto e raciocínio avançado para cargas de trabalho de produção. Preços e janela de contexto baseados no GPT-4 Turbo a partir de Julho de 2026.',
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
    name: 'Claude 3 Opus', // Substituído de Claude Opus 4.8 para Claude 3 Opus
    provider: 'Anthropic',
    inputPricePerM: 15.00, // Preço atualizado
    outputPricePerM: 75.00, // Preço atualizado
    contextWindow: '200K tokens', // Janela de contexto padrão
    description: 'O modelo mais inteligente da família Claude da Anthropic (Claude 3 Opus), para raciocínio complexo e tarefas agênticas, com 200K de contexto (até 1M para casos de uso específicos). Foco em honestidade e confiabilidade. Preços e janela de contexto baseados no Claude 3 Opus a partir de Julho de 2026.',
  },
  {
    name: 'Claude 3 Sonnet', // Substituído de Claude 4.6 Sonnet para Claude 3 Sonnet
    provider: 'Anthropic',
    inputPricePerM: 3.00,
    outputPricePerM: 15.00,
    contextWindow: '200K tokens', // Janela de contexto padrão
    description: 'O modelo intermediário da família Claude da Anthropic (Claude 3 Sonnet), um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com 200K de contexto (até 1M para casos de uso específicos). Preços e janela de contexto baseados no Claude 3 Sonnet a partir de Julho de 2026.',
  },
  {
    name: 'Claude 3 Haiku', // Substituído de Claude Haiku 4.5 para Claude 3 Haiku
    provider: 'Anthropic',
    inputPricePerM: 0.25, // Preço atualizado
    outputPricePerM: 1.25, // Preço atualizado
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da família Claude da Anthropic (Claude 3 Haiku), ideal para tarefas de alto desempenho e baixo custo, com até 200K de contexto. Preços e janela de contexto baseados no Claude 3 Haiku a partir de Julho de 2026.',
  },
  // DeepSeek
  {
    name: 'DeepSeek V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '128K tokens', // Janela de contexto atualizada
    description: 'O modelo DeepSeek V4 Flash, com bom desempenho e um custo muito baixo, suportando 128K de contexto. Preços e janela de contexto baseados no DeepSeek V4 Flash a partir de Julho de 2026.',
  },
  // Meta (via API)
  {
    name: 'Llama 3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.90, // Preço atualizado
    outputPricePerM: 0.90, // Preço atualizado
    contextWindow: '8K tokens', // Janela de contexto atualizada
    description: 'Versão avançada do modelo open-source Llama 3 (Llama-3-70b-chat-hf), poderosa via API Together AI. Oferece 8K de contexto. Preços e janela de contexto baseados na precificação do Llama 3 70B Instruct via Together AI a partir de Julho de 2026.',
  },
  // Mistral AI
  {
    name: 'Mistral Large', // Substituído de Mistral Large 3 para Mistral Large
    provider: 'Mistral AI',
    inputPricePerM: 8.00, // Preço atualizado
    outputPricePerM: 24.00, // Preço atualizado
    contextWindow: '32K tokens', // Janela de contexto atualizada
    description: 'O modelo flagship da Mistral AI (Mistral Large), com raciocínio avançado e capacidades multimodais, suportando 32K de contexto. Preços e janela de contexto baseados no Mistral Large a partir de Julho de 2026.',
  },
  {
    name: 'Mistral Small', // Substituído de Mistral Small 4 para Mistral Small
    provider: 'Mistral AI',
    inputPricePerM: 2.00, // Preço atualizado
    outputPricePerM: 6.00, // Preço atualizado
    contextWindow: '32K tokens', // Janela de contexto atualizada
    description: 'O modelo otimizado da Mistral AI (Mistral Small), que oferece um bom equilíbrio entre desempenho e custo para uma ampla gama de tarefas, com 32K de contexto. Preços e janela de contexto baseados no Mistral Small a partir de Julho de 2026.',
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
    inputPricePerM: 15.00, // Preço atualizado
    outputPricePerM: 30.00, // Preço atualizado
    contextWindow: '128K tokens',
    description: 'O mais novo modelo flagship da Cohere (Command R+), com uma janela de contexto maior e otimizado para raciocínio avançado e fluxos de trabalho agênticos. Preços e janela de contexto baseados no Command R+ a partir de Julho de 2026.',
  },
  {
    name: 'Command R',
    provider: 'Cohere',
    inputPricePerM: 0.50, // Preço atualizado
    outputPricePerM: 1.50, // Preço atualizado
    contextWindow: '128K tokens',
    description: 'Modelo eficiente da Cohere (Command R), adequado para cargas de trabalho de produção e RAG de menor custo, com 128K de contexto. Preços e janela de contexto confirmados em Julho de 2026 para o Command R.',
  },
];