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
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    inputPricePerM: 0.70, // Preço atualizado para Gemini 1.5 Flash (1M de contexto).
    outputPricePerM: 2.10, // Preço atualizado para Gemini 1.5 Flash (1M de contexto).
    contextWindow: '1M tokens', // Janela de contexto confirmada para Gemini 1.5 Flash.
    description: 'Modelo equilibrado para velocidade e capacidade da nova geração Gemini 1.5 Flash.',
  },
  {
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    inputPricePerM: 7.00, // Preço atualizado para Gemini 1.5 Pro (1M de contexto).
    outputPricePerM: 21.00, // Preço atualizado para Gemini 1.5 Pro (1M de contexto).
    contextWindow: '1M tokens', // Janela de contexto atualizada para Gemini 1.5 Pro (com suporte a 2M em preview).
    description: 'Topo de linha da Google com 1M de contexto (preço para 1M tokens) e raciocínio avançado (versão 1.5).',
  },
  {
    name: 'Gemini 1.5 Flash (128K)',
    provider: 'Google',
    inputPricePerM: 0.35, // Preço atualizado do Gemini 1.5 Flash para 128K de contexto.
    outputPricePerM: 1.05, // Preço atualizado do Gemini 1.5 Flash para 128K de contexto.
    contextWindow: '128K tokens', // Janela de contexto para a versão econômica do Gemini 1.5 Flash.
    description: 'Modelo econômico e de alta velocidade da nova geração Gemini 1.5 Flash, otimizado para janelas de contexto menores.',
  },
  // OpenAI
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 5.00, // Preço atualizado do GPT-4o.
    outputPricePerM: 15.00, // Preço atualizado do GPT-4o.
    contextWindow: '128K tokens', // Janela de contexto para o GPT-4o.
    description: 'Modelo flagship da OpenAI com raciocínio avançado e capacidade multimodal.',
  },
  {
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15, // Preço atualizado do GPT-4o mini.
    outputPricePerM: 0.60, // Preço atualizado do GPT-4o mini.
    contextWindow: '128K tokens', // Janela de contexto para o GPT-4o mini.
    description: 'Versão compacta do GPT-4o — rápida e econômica para tarefas do dia a dia.',
  },
  {
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    inputPricePerM: 10.00, // Preço atualizado do GPT-4 Turbo.
    outputPricePerM: 30.00, // Preço atualizado do GPT-4 Turbo.
    contextWindow: '128K tokens', // Janela de contexto para o GPT-4 Turbo.
    description: 'Modelo avançado da OpenAI, com raciocínio superior e capacidades de visão.',
  },
  // Anthropic
  {
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    inputPricePerM: 15.00, // Preço atualizado do Claude 3 Opus.
    outputPricePerM: 75.00, // Preço atualizado do Claude 3 Opus.
    contextWindow: '200K tokens', // Janela de contexto atualizada do Claude 3 Opus (com capacidade para mais).
    description: 'O modelo mais inteligente da Anthropic para raciocínio complexo e tarefas agênticas.',
  },
  {
    name: 'Claude 3 Sonnet',
    provider: 'Anthropic',
    inputPricePerM: 3.00, // Preço atualizado do Claude 3 Sonnet.
    outputPricePerM: 15.00, // Preço atualizado do Claude 3 Sonnet.
    contextWindow: '200K tokens', // Janela de contexto atualizada do Claude 3 Sonnet.
    description: 'Referência em geração de código e raciocínio lógico.',
  },
  {
    name: 'Claude 3 Haiku',
    provider: 'Anthropic',
    inputPricePerM: 0.25, // Preço atualizado do Claude 3 Haiku.
    outputPricePerM: 1.25, // Preço atualizado do Claude 3 Haiku.
    contextWindow: '200K tokens', // Janela de contexto atual do Claude 3 Haiku.
    description: 'O modelo rápido e econômico da Anthropic com 200k contexto.',
  },
  // DeepSeek
  {
    name: 'DeepSeek-V2 (1M context)',
    provider: 'DeepSeek',
    inputPricePerM: 0.50, // Preço atualizado para DeepSeek-V2 (1M de contexto).
    outputPricePerM: 1.00, // Preço atualizado para DeepSeek-V2 (1M de contexto).
    contextWindow: '1M tokens', // Janela de contexto confirmada para DeepSeek-V2.
    description: 'Versão otimizada do DeepSeek-V2 com foco em custo-benefício para janelas de contexto grandes.',
  },
  {
    name: 'DeepSeek-V2 (128K context)',
    provider: 'DeepSeek',
    inputPricePerM: 1.00, // Preço atualizado para DeepSeek-V2 (128K de contexto).
    outputPricePerM: 2.00, // Preço atualizado para DeepSeek-V2 (128K de contexto).
    contextWindow: '128K tokens', // Janela de contexto confirmada para DeepSeek-V2.
    description: 'Versão Pro do DeepSeek-V2 com raciocínio de ponta para janelas de contexto padrão.',
  },
  // Meta (via API)
  {
    name: 'Llama 3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.90, // Preço atualizado para Llama 3 70B Instruct via Together AI.
    outputPricePerM: 0.90, // Preço atualizado para Llama 3 70B Instruct via Together AI.
    contextWindow: '8K tokens', // Janela de contexto atualizada para Llama 3 70B Instruct via Together AI.
    description: 'Open source poderoso via API Together AI (Llama 3 70B Instruct).',
  },
  {
    name: 'Llama 3 8B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.15, // Preço atualizado do Llama 3 8B Instruct via Together AI.
    outputPricePerM: 0.15, // Preço atualizado do Llama 3 8B Instruct via Together AI.
    contextWindow: '8K tokens', // Janela de contexto atualizada para Llama 3 8B Instruct via Together AI.
    description: 'Versão leve e econômica da família Llama 3 Instruct via API Together AI.',
  },
  // Mistral AI
  {
    name: 'Mistral Large',
    provider: 'Mistral AI',
    inputPricePerM: 8.64, // Preço atualizado do Mistral Large (8 EUR/M tokens convertido para USD, 1 EUR = 1.08 USD).
    outputPricePerM: 25.92, // Preço atualizado do Mistral Large (24 EUR/M tokens convertido para USD, 1 EUR = 1.08 USD).
    contextWindow: '32K tokens', // Janela de contexto atualizada do Mistral Large.
    description: 'Modelo flagship da Mistral AI, com raciocínio e capacidades multimodais.',
  },
  // Cohere
  {
    name: 'Command R+',
    provider: 'Cohere',
    inputPricePerM: 15.00, // Preço atualizado do Command R+.
    outputPricePerM: 45.00, // Preço atualizado do Command R+.
    contextWindow: '128K tokens', // Janela de contexto atualizada do Command R+.
    description: 'Modelo robusto da Cohere, otimizado para RAG e tarefas empresariais.',
  },
];