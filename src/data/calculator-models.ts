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
    inputPricePerM: 0.075, // Preço atualizado para Gemini 1.5 Flash.
    outputPricePerM: 0.30, // Preço atualizado para Gemini 1.5 Flash.
    contextWindow: '1M tokens', // Janela de contexto confirmada para Gemini 1.5 Flash.
    description: 'Modelo equilibrado para velocidade e capacidade da nova geração Gemini 1.5 Flash.',
  },
  {
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    inputPricePerM: 1.25, // Preço atualizado para Gemini 1.5 Pro (1M de contexto).
    outputPricePerM: 5.00, // Preço atualizado para Gemini 1.5 Pro (1M de contexto).
    contextWindow: '1M tokens', // Janela de contexto atualizada para Gemini 1.5 Pro.
    description: 'Topo de linha da Google com 1M de contexto (preço para 1M tokens) e raciocínio avançado (versão 1.5).',
  },
  {
    name: 'Gemini 1.5 Flash-8B',
    provider: 'Google',
    inputPricePerM: 0.0375, // Preço atualizado do Gemini 1.5 Flash-8B para 128K de contexto.
    outputPricePerM: 0.15, // Preço atualizado do Gemini 1.5 Flash-8B para 128K de contexto.
    contextWindow: '128K tokens', // Janela de contexto para a versão econômica do Gemini 1.5 Flash-8B.
    description: 'Modelo econômico e de alta velocidade da nova geração Gemini 1.5 Flash-8B, otimizado para janelas de contexto menores.',
  },
  // OpenAI
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 2.50, // Preço atualizado do GPT-4o.
    outputPricePerM: 10.00, // Preço atualizado do GPT-4o.
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
    name: 'GPT-5.5',
    provider: 'OpenAI',
    inputPricePerM: 5.00, // Preço atualizado do GPT-5.5.
    outputPricePerM: 30.00, // Preço atualizado do GPT-5.5.
    contextWindow: '1M tokens', // Janela de contexto para o GPT-5.5.
    description: 'Flagship geral da OpenAI para tarefas complexas e codificação (nova geração GPT-5.5).',
  },
  // Anthropic
  {
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    inputPricePerM: 5.00, // Preço atualizado do Claude 3 Opus.
    outputPricePerM: 25.00, // Preço atualizado do Claude 3 Opus.
    contextWindow: '1M tokens', // Janela de contexto atualizada do Claude 3 Opus.
    description: 'O modelo mais inteligente da Anthropic para raciocínio complexo e tarefas agênticas.',
  },
  {
    name: 'Claude 3 Sonnet',
    provider: 'Anthropic',
    inputPricePerM: 3.00, // Preço atualizado do Claude 3 Sonnet.
    outputPricePerM: 15.00, // Preço atualizado do Claude 3 Sonnet.
    contextWindow: '1M tokens', // Janela de contexto atualizada do Claude 3 Sonnet.
    description: 'Referência em geração de código e raciocínio lógico.',
  },
  {
    name: 'Claude 3 Haiku (v4.5)',
    provider: 'Anthropic',
    inputPricePerM: 1.00, // Preço atualizado do Claude 3 Haiku (v4.5).
    outputPricePerM: 5.00, // Preço atualizado do Claude 3 Haiku (v4.5).
    contextWindow: '200K tokens', // Janela de contexto atual do Claude 3 Haiku (v4.5).
    description: 'O modelo rápido e econômico da Anthropic (versão 4.5).',
  },
  // DeepSeek
  {
    name: 'DeepSeek-V4 Flash',
    provider: 'DeepSeek',
    inputPricePerM: 0.14, // Preço atualizado para DeepSeek-V4 Flash.
    outputPricePerM: 0.28, // Preço atualizado para DeepSeek-V4 Flash.
    contextWindow: '128K tokens', // Janela de contexto para DeepSeek-V4 Flash.
    description: 'Modelo eficiente da DeepSeek para alta velocidade (versão V4 Flash).',
  },
  {
    name: 'DeepSeek-V4 Pro',
    provider: 'DeepSeek',
    inputPricePerM: 1.74, // Preço atualizado para DeepSeek-V4 Pro.
    outputPricePerM: 3.48, // Preço atualizado para DeepSeek-V4 Pro.
    contextWindow: '128K tokens', // Janela de contexto para DeepSeek-V4 Pro.
    description: 'Modelo avançado da DeepSeek para raciocínio complexo (versão V4 Pro).',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.88, // Preço atualizado para Llama 3.3 70B Instruct via Together AI.
    outputPricePerM: 0.88, // Preço atualizado para Llama 3.3 70B Instruct via Together AI.
    contextWindow: '131K tokens', // Janela de contexto atualizada para Llama 3.3 70B Instruct via Together AI.
    description: 'Modelo open-source poderoso via API Together AI (Llama 3.3 70B Instruct-Turbo).',
  },
  {
    name: 'Llama 3.1 8B Instruct (via Together AI)',
    provider: 'Meta (via API)',
    inputPricePerM: 0.18, // Preço atualizado do Llama 3.1 8B Instruct via Together AI.
    outputPricePerM: 0.18, // Preço atualizado do Llama 3.1 8B Instruct via Together AI.
    contextWindow: '8K tokens', // Janela de contexto atualizada para Llama 3.1 8B Instruct via Together AI.
    description: 'Versão leve e econômica da família Llama 3.1 Instruct via API Together AI.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    inputPricePerM: 0.50, // Preço atualizado do Mistral Large 3.
    outputPricePerM: 1.50, // Preço atualizado do Mistral Large 3.
    contextWindow: '262K tokens', // Janela de contexto atualizada do Mistral Large 3.
    description: 'Modelo flagship da Mistral AI (versão Large 3) com raciocínio e capacidades multimodais.',
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