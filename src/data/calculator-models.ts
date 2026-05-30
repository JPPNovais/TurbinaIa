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
    name: 'Gemini 1.5 Flash (128K context)',
    provider: 'Google',
    inputPricePerM: 0.0375, // Preço para Gemini 1.5 Flash com 128K de contexto.
    outputPricePerM: 0.15, // Preço para Gemini 1.5 Flash com 128K de contexto.
    contextWindow: '128K tokens', // Janela de contexto para a versão econômica do Gemini 1.5 Flash.
    description: 'Modelo econômico e de alta velocidade da nova geração Gemini 1.5 Flash, otimizado para janelas de contexto menores.',
  },
  // OpenAI
  {
    name: 'GPT-5.4', // Substituído de 'GPT-4o'
    provider: 'OpenAI',
    inputPricePerM: 2.50, // Preço atualizado do GPT-5.4.
    outputPricePerM: 15.00, // Preço atualizado do GPT-5.4.
    contextWindow: '128K tokens', // Janela de contexto para o GPT-5.4 (baseado em GPT-5.2).
    description: 'Modelo de nova geração da OpenAI, equilibrado para performance e custo.',
  },
  {
    name: 'GPT-5.4 Nano', // Substituído de 'GPT-4o mini'
    provider: 'OpenAI',
    inputPricePerM: 0.20, // Preço atualizado do GPT-5.4 Nano.
    outputPricePerM: 1.25, // Preço atualizado do GPT-5.4 Nano.
    contextWindow: '32K tokens', // Janela de contexto para o GPT-5.4 Nano.
    description: 'Modelo mais econômico da OpenAI, otimizado para tarefas de alta demanda e baixo custo.',
  },
  {
    name: 'GPT-5.5', // Substituído de 'GPT-4 Turbo'
    provider: 'OpenAI',
    inputPricePerM: 5.00, // Preço atualizado do GPT-5.5.
    outputPricePerM: 30.00, // Preço atualizado do GPT-5.5.
    contextWindow: '1.05M tokens', // Janela de contexto atualizada para o GPT-5.5.
    description: 'Modelo flagship da OpenAI com raciocínio avançado e 1.05M de contexto (versão 5.5).',
  },
  // Anthropic
  {
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    inputPricePerM: 15.00, // Preço atualizado do Claude 3 Opus.
    outputPricePerM: 75.00, // Preço atualizado do Claude 3 Opus.
    contextWindow: '200K tokens', // Janela de contexto atualizada do Claude 3 Opus.
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
    description: 'O modelo rápido e econômico da Anthropic.',
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
    inputPricePerM: 0.435, // Preço atualizado para DeepSeek-V4 Pro (preço promocional se tornando oficial).
    outputPricePerM: 0.87, // Preço atualizado para DeepSeek-V4 Pro (preço promocional se tornando oficial).
    contextWindow: '1M tokens', // Janela de contexto para DeepSeek-V4 Pro.
    description: 'Modelo avançado da DeepSeek para raciocínio complexo (versão V4 Pro).',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B Instruct (via Together AI)', // Atualizado de 'Llama 3 70B Instruct'
    provider: 'Meta (via API)',
    inputPricePerM: 0.88, // Preço atualizado para Llama 3.3 70B Instruct via Together AI.
    outputPricePerM: 0.88, // Preço atualizado para Llama 3.3 70B Instruct via Together AI.
    contextWindow: '131K tokens', // Janela de contexto atualizada para Llama 3.3 70B Instruct via Together AI.
    description: 'Modelo open-source poderoso via API Together AI (Llama 3.3 70B Instruct).',
  },
  {
    name: 'Meta-Llama-3.1-8B-Instruct-Turbo (via Together AI)', // Atualizado de 'Llama 3 8B Instruct'
    provider: 'Meta (via API)',
    inputPricePerM: 0.18, // Preço atualizado do Meta-Llama-3.1-8B-Instruct-Turbo via Together AI.
    outputPricePerM: 0.18, // Preço atualizado do Meta-Llama-3.1-8B-Instruct-Turbo via Together AI.
    contextWindow: '8K tokens', // Janela de contexto atualizada para Meta-Llama-3.1-8B-Instruct-Turbo via Together AI.
    description: 'Versão leve e econômica da família Llama 3 Instruct via API Together AI.',
  },
  // Mistral AI
  {
    name: 'Mistral Large',
    provider: 'Mistral AI',
    inputPricePerM: 2.00, // Preço atualizado do Mistral Large.
    outputPricePerM: 6.00, // Preço atualizado do Mistral Large.
    contextWindow: '128K tokens', // Janela de contexto atualizada do Mistral Large.
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