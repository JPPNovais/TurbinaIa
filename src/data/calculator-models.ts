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
    inputPricePerM: 0.30, // Preço atualizado para Gemini 2.5 Flash.
    outputPricePerM: 2.50, // Preço atualizado para Gemini 2.5 Flash.
    contextWindow: '1M tokens', // Janela de contexto consistente com modelos Flash.
    description: 'Modelo mid-tier legado da Google da família Gemini 2.5, com bom equilíbrio entre custo e capacidade.',
  },
  {
    name: 'Gemini 3.1 Pro',
    provider: 'Google',
    inputPricePerM: 2.00, // Preço atualizado para Gemini 3.1 Pro (até 200K de contexto).
    outputPricePerM: 12.00, // Preço atualizado para Gemini 3.1 Pro (até 200K de contexto).
    contextWindow: '2M tokens', // Janela de contexto total para Gemini 3.1 Pro.
    description: 'O modelo flagship da Google (maio 2026), com raciocínio avançado e até 2M de contexto (preço para até 200K tokens).',
  },
  {
    name: 'Gemini 3 Flash',
    provider: 'Google',
    inputPricePerM: 0.50, // Preço atualizado para Gemini 3 Flash.
    outputPricePerM: 3.00, // Preço atualizado para Gemini 3 Flash.
    contextWindow: '1M tokens', // Janela de contexto assumida para Gemini 3 Flash.
    description: 'Novo modelo Flash padrão da Google (maio 2026), oferecendo um bom equilíbrio entre velocidade e capacidade.',
  },
  // OpenAI
  {
    name: 'GPT-4.1', // Substituído de 'GPT-5.4' para o nome atual em maio 2026.
    provider: 'OpenAI',
    inputPricePerM: 2.00, // Preço atualizado do GPT-4.1.
    outputPricePerM: 8.00, // Preço atualizado do GPT-4.1.
    contextWindow: '1M tokens', // Janela de contexto atualizada para GPT-4.1.
    description: 'Modelo de produção recomendado da OpenAI (maio 2026), com fortes capacidades de codificação, seguimento de instruções e contexto longo.',
  },
  {
    name: 'GPT-4.1 Nano', // Substituído de 'GPT-5.4 Nano' para o nome atual em maio 2026.
    provider: 'OpenAI',
    inputPricePerM: 0.10, // Preço atualizado do GPT-4.1 Nano.
    outputPricePerM: 0.40, // Preço atualizado do GPT-4.1 Nano.
    contextWindow: '1M tokens', // Janela de contexto atualizada para GPT-4.1 Nano.
    description: 'Modelo mais econômico da OpenAI (maio 2026), otimizado para tarefas de alta demanda e baixo custo, com 1M de contexto.',
  },
  {
    name: 'GPT-5', // Substituído de 'GPT-5.5' para o nome atual em maio 2026.
    provider: 'OpenAI',
    inputPricePerM: 1.25, // Preço atualizado do GPT-5.
    outputPricePerM: 10.00, // Preço atualizado do GPT-5.
    contextWindow: '128K tokens', // Janela de contexto atualizada para GPT-5.
    description: 'Modelo mais capaz da OpenAI (maio 2026), para fluxos de trabalho agênticos e raciocínio complexo.',
  },
  // Anthropic
  {
    name: 'Claude Opus 4.7', // Atualizado de 'Claude 3 Opus'.
    provider: 'Anthropic',
    inputPricePerM: 5.00, // Preço atualizado do Claude Opus 4.7.
    outputPricePerM: 25.00, // Preço atualizado do Claude Opus 4.7.
    contextWindow: '1M tokens', // Janela de contexto atualizada do Claude Opus 4.7.
    description: 'O modelo mais inteligente da Anthropic (maio 2026) para raciocínio complexo e tarefas agênticas, com 1M de contexto.',
  },
  {
    name: 'Claude Sonnet 4.6', // Atualizado de 'Claude 3 Sonnet'.
    provider: 'Anthropic',
    inputPricePerM: 3.00, // Preço atualizado do Claude Sonnet 4.6.
    outputPricePerM: 15.00, // Preço atualizado do Claude Sonnet 4.6.
    contextWindow: '1M tokens', // Janela de contexto atualizada do Claude Sonnet 4.6.
    description: 'Modelo equilibrado da Anthropic (maio 2026) entre inteligência e velocidade para cargas de trabalho empresariais, com 1M de contexto.',
  },
  {
    name: 'Claude Haiku 4.5', // Atualizado de 'Claude 3 Haiku'.
    provider: 'Anthropic',
    inputPricePerM: 1.00, // Preço atualizado do Claude Haiku 4.5.
    outputPricePerM: 5.00, // Preço atualizado do Claude Haiku 4.5.
    contextWindow: '200K tokens', // Janela de contexto atualizada do Claude Haiku 4.5.
    description: 'O modelo mais rápido e econômico da Anthropic (maio 2026).',
  },
  // DeepSeek
  {
    name: 'DeepSeek-V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14, // Preço atualizado para DeepSeek-V4 Flash (cache miss).
    outputPricePerM: 0.28, // Preço atualizado para DeepSeek-V4 Flash.
    contextWindow: '1M tokens', // Janela de contexto para DeepSeek-V4 Flash.
    description: 'Modelo eficiente da DeepSeek para alta velocidade (versão V4 Flash).',
  },
  {
    name: 'DeepSeek-V4 Pro',
    provider: 'DeepSeek',
    inputPricePerM: 0.435, // Preço atualizado para DeepSeek-V4 Pro.
    outputPricePerM: 0.87, // Preço atualizado para DeepSeek-V4 Pro.
    contextWindow: '1M tokens', // Janela de contexto para DeepSeek-V4 Pro.
    description: 'Modelo avançado da DeepSeek para raciocínio complexo (versão V4 Pro).',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88, // Preço mantido, não foram encontrados dados de preços específicos para Maio de 2026 para Llama 3.3 via Together AI.
    outputPricePerM: 0.88, // Preço mantido, não foram encontrados dados de preços específicos para Maio de 2026 para Llama 3.3 via Together AI.
    contextWindow: '131K tokens', // Janela de contexto mantida.
    description: 'Modelo open-source poderoso via API Together AI (Llama 3.3 70B Instruct).',
  },
  {
    name: 'Meta-Llama-3.1-8B-Instruct-Turbo (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.18, // Preço mantido, não foram encontrados dados de preços específicos para Maio de 2026 para Llama 3.1 via Together AI.
    outputPricePerM: 0.18, // Preço mantido, não foram encontrados dados de preços específicos para Maio de 2026 para Llama 3.1 via Together AI.
    contextWindow: '8K tokens', // Janela de contexto mantida.
    description: 'Versão leve e econômica da família Llama 3 Instruct via API Together AI.',
  },
  // Mistral AI
  {
    name: 'Mistral Large',
    provider: 'Mistral AI',
    inputPricePerM: 2.00, // Preço atualizado do Mistral Large.
    outputPricePerM: 6.00, // Preço atualizado do Mistral Large.
    contextWindow: '131K tokens', // Janela de contexto atualizada para Mistral Large (referente a Mistral Large 2.1/2411).
    description: 'Modelo flagship da Mistral AI com raciocínio e capacidades multimodais.',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 2.50, // Preço atualizado do Command R+.
    outputPricePerM: 10.00, // Preço atualizado do Command R+.
    contextWindow: '128K tokens', // Janela de contexto atualizada do Command R+.
    description: 'Modelo robusto da Cohere, otimizado para RAG e tarefas empresariais.',
  },
];