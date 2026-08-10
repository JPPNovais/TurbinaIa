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
    contextWindow: '200K tokens',
    description: 'O modelo Pro mais recente da Google (Gemini 3.1 Pro), com raciocínio avançado. Preços atualizados a partir de Agosto de 2026 para contextos até 200K tokens (preços diferenciados para contextos maiores).',
  },
  {
    name: 'Gemini 3.6 Flash',
    provider: 'Google',
    inputPricePerM: 1.50,
    outputPricePerM: 7.50,
    contextWindow: '1M tokens',
    description: 'O modelo Flash mais recente da Google (Gemini 3.6 Flash), otimizado para tarefas de alta frequência e baixo custo, com até 1M de contexto. Preços atualizados a partir de Agosto de 2026.',
  },
  // OpenAI
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O modelo flagship da OpenAI (GPT-4o), com capacidades avançadas e multimodalidade. Preços e janela de contexto atualizados a partir de Agosto de 2026.',
  },
  {
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    inputPricePerM: 10.00,
    outputPricePerM: 30.00,
    contextWindow: '128K tokens',
    description: 'O modelo GPT-4 Turbo da OpenAI, que equilibra inteligência e custo, com visão e capacidades de função. Preços e janela de contexto atualizados a partir de Agosto de 2026.',
  },
  {
    name: 'GPT-4o Mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '128K tokens',
    description: 'O modelo econômico da família GPT-4 da OpenAI (GPT-4o Mini), ideal para tarefas de baixo custo e alta escala. Preços e janela de contexto atualizados a partir de Agosto de 2026.',
  },
  // Anthropic
  {
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    inputPricePerM: 5.00,
    outputPricePerM: 25.00,
    contextWindow: '200K tokens',
    description: 'O modelo mais inteligente da família Claude da Anthropic (Claude 3 Opus), construído para raciocínio exigente e trabalho agêntico de longo prazo, com 200K de contexto (capaz de lidar com mais de 1M de tokens). Preços atualizados a partir de Agosto de 2026.',
  },
  {
    name: 'Claude 3 Sonnet',
    provider: 'Anthropic',
    inputPricePerM: 2.00,
    outputPricePerM: 10.00,
    contextWindow: '200K tokens',
    description: 'O modelo intermediário da família Claude da Anthropic (Claude 3 Sonnet), um equilíbrio entre inteligência e velocidade para cargas de trabalho empresariais, com 200K de contexto. Preços atualizados a partir de Agosto de 2026 (preço aumenta para $3.00/M entrada e $15.00/M saída após 31 de Agosto de 2026).',
  },
  {
    name: 'Claude 3 Haiku',
    provider: 'Anthropic',
    inputPricePerM: 0.25,
    outputPricePerM: 1.25,
    contextWindow: '200K tokens',
    description: 'O modelo mais rápido e econômico da família Claude da Anthropic (Claude 3 Haiku), ideal para tarefas de alto desempenho e baixo custo, com até 200K de contexto. Preços atualizados a partir de Agosto de 2026.',
  },
  // DeepSeek
  {
    name: 'DeepSeek V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '1M tokens',
    description: 'O modelo DeepSeek V4 Flash, com bom desempenho e um custo muito baixo, suportando 1M de contexto. Preços atualizados a partir de Agosto de 2026. Os preços de entrada são para cache miss; para cache hit, o custo é de $0.0028/M tokens.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 1.04,
    outputPricePerM: 1.04,
    contextWindow: '131K tokens',
    description: 'Versão avançada do modelo open-source Llama 3.3 (Llama-3.3-70b-instruct), poderosa via API Together AI. Oferece 131K de contexto. Preços atualizados a partir de Agosto de 2026.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '128K tokens',
    description: 'O modelo flagship da Mistral AI (Mistral Large 3), com raciocínio avançado e capacidades multimodais. Preços e janela de contexto atualizados a partir de Agosto de 2026.',
  },
  {
    name: 'Mistral Small 4',
    provider: 'Mistral AI',
    inputPricePerM: 0.15,
    outputPricePerM: 0.60,
    contextWindow: '256K tokens',
    description: 'O modelo otimizado da Mistral AI (Mistral Small 4), que oferece um bom equilíbrio entre desempenho e custo para uma ampla gama de tarefas. Preços e janela de contexto atualizados a partir de Agosto de 2026.',
  },
  {
    name: 'Mistral Medium 3.5',
    provider: 'Mistral AI',
    inputPricePerM: 1.50,
    outputPricePerM: 7.50,
    contextWindow: '262K tokens',
    description: 'O modelo intermediário da Mistral AI (Mistral Medium 3.5), oferecendo um equilíbrio entre inteligência e custo. Preços e janela de contexto atualizados a partir de Agosto de 2026.',
  },
  // Cohere
  {
    name: 'Command A',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '256K tokens',
    description: 'O mais novo modelo flagship da Cohere (Command A), com uma janela de contexto de 256K tokens, otimizado para raciocínio avançado, fluxos de trabalho agênticos e capacidades multilingues. Preços e janela de contexto atualizados a partir de Agosto de 2026.',
  },
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50,
    outputPricePerM: 10.00,
    contextWindow: '128K tokens',
    description: 'O modelo flagship da Cohere (Command R+), com uma janela de contexto de 128K tokens e otimizado para raciocínio avançado e fluxos de trabalho agênticos. Preços e janela de contexto atualizados a partir de Agosto de 2026.',
  },
  // Add new relevant model to reach 15 total (OpenAI GPT-3.5 Turbo)
  {
    name: 'GPT-3.5 Turbo',
    provider: 'OpenAI',
    inputPricePerM: 0.50,
    outputPricePerM: 1.50,
    contextWindow: '16K tokens',
    description: 'Um modelo econômico e eficiente da OpenAI, otimizado para chat e diversas tarefas de linguagem, com 16K de contexto. Preços e janela de contexto atualizados a partir de Agosto de 2026.',
  },
];