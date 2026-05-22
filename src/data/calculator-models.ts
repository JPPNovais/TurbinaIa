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
    inputPricePerM: 0.30, // Preço atualizado com base nas informações de maio de 2026 para Gemini 2.5 Flash.
    outputPricePerM: 2.50, // Preço atualizado com base nas informações de maio de 2026 para Gemini 2.5 Flash.
    contextWindow: '1M tokens',
    description: 'Flash rápido com raciocínio nativo e excelente custo-benefício (versão 2.5).',
  },
  {
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    inputPricePerM: 2.50, // Preço atualizado para contextos acima de 200K tokens para Gemini 2.5 Pro.
    outputPricePerM: 15.00, // Preço atualizado para contextos acima de 200K tokens para Gemini 2.5 Pro.
    contextWindow: '2M tokens',
    description: 'Topo de linha da Google com 2M de contexto e raciocínio avançado (versão 2.5).',
  },
  {
    name: 'Gemini 3.1 Flash-Lite', // 'Gemini 2.0 Flash' foi substituído por um modelo Flash mais recente e relevante.
    provider: 'Google',
    inputPricePerM: 0.25, // Preço atual do Gemini 3.1 Flash-Lite.
    outputPricePerM: 1.50, // Preço atual do Gemini 3.1 Flash-Lite.
    contextWindow: '128K tokens', // Janela de contexto comum para modelos 'Lite'.
    description: 'Modelo econômico e de alta velocidade da nova geração Gemini 3.1, com suporte multimodal.',
  },
  // OpenAI
  {
    name: 'GPT-4 Turbo', // 'GPT-4.1' foi substituído por 'GPT-4 Turbo'.
    provider: 'OpenAI',
    inputPricePerM: 10.00, // Preço atualizado do GPT-4 Turbo.
    outputPricePerM: 30.00, // Preço atualizado do GPT-4 Turbo.
    contextWindow: '128K tokens', // Janela de contexto atual do GPT-4 Turbo.
    description: 'Melhor fidelidade a instruções longas e contexto de 128K tokens.',
  },
  {
    name: 'GPT-4o mini', // 'GPT-4.1 mini' foi substituído por 'GPT-4o mini' como sucessor direto.
    provider: 'OpenAI',
    inputPricePerM: 0.15, // Preço atualizado do GPT-4o mini.
    outputPricePerM: 0.60, // Preço atualizado do GPT-4o mini.
    contextWindow: '128K tokens', // Janela de contexto atual do GPT-4o mini.
    description: 'Versão compacta do GPT-4o — rápida e econômica para tarefas do dia a dia.',
  },
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    inputPricePerM: 2.50, // Preço atual confirmado.
    outputPricePerM: 10.00, // Preço atual confirmado.
    contextWindow: '128k tokens', // Janela de contexto atual confirmada.
    description: 'Modelo multimodal de ponta — texto, áudio e visão em tempo real.',
  },
  {
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    inputPricePerM: 0.15, // Preço atual confirmado.
    outputPricePerM: 0.60, // Preço atual confirmado.
    contextWindow: '128k tokens', // Janela de contexto atual confirmada.
    description: 'Rápido e incrivelmente barato para tarefas rotineiras.',
  },
  // Anthropic
  {
    name: 'Claude 3 Opus', // 'Claude Sonnet 4.6' foi substituído por 'Claude 3 Opus'.
    provider: 'Anthropic',
    inputPricePerM: 15.00, // Preço atualizado do Claude 3 Opus.
    outputPricePerM: 75.00, // Preço atualizado do Claude 3 Opus.
    contextWindow: '200k tokens', // Janela de contexto atual do Claude 3 Opus.
    description: 'O modelo mais inteligente da Anthropic para raciocínio complexo e tarefas agênticas.',
  },
  {
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    inputPricePerM: 3.00, // Preço atual confirmado.
    outputPricePerM: 15.00, // Preço atual confirmado.
    contextWindow: '200k tokens', // Janela de contexto atual confirmada.
    description: 'Referência em geração de código e raciocínio lógico.',
  },
  {
    name: 'Claude 3 Haiku', // 'Claude 3.5 Haiku' foi substituído por 'Claude 3 Haiku'.
    provider: 'Anthropic',
    inputPricePerM: 0.25, // Preço atualizado do Claude 3 Haiku.
    outputPricePerM: 1.25, // Preço atualizado do Claude 3 Haiku.
    contextWindow: '200k tokens', // Janela de contexto atual do Claude 3 Haiku.
    description: 'O modelo rápido e econômico da Anthropic com 200k contexto.',
  },
  // DeepSeek
  {
    name: 'DeepSeek V2', // 'DeepSeek V3' foi substituído por 'DeepSeek V2'.
    provider: 'DeepSeek',
    inputPricePerM: 0.10, // Preço atualizado do DeepSeek V2.
    outputPricePerM: 0.20, // Preço atualizado do DeepSeek V2.
    contextWindow: '128k tokens', // Janela de contexto atual do DeepSeek V2.
    description: 'Performance de GPT-4 por uma fração do custo com 128K tokens de contexto.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.1 70B',
    provider: 'Meta (via API)',
    inputPricePerM: 0.34, // Preço atualizado do Llama 3.1 70B Instruct.
    outputPricePerM: 0.39, // Preço atualizado do Llama 3.1 70B Instruct.
    contextWindow: '131K tokens', // Janela de contexto atualizada do Llama 3.1 70B Instruct.
    description: 'Open source poderoso — pode ser usado local ou via API.',
  },
  {
    name: 'Llama 3.1 8B', // Novo modelo adicionado, substituindo 'DeepSeek R1'.
    provider: 'Meta (via API)',
    inputPricePerM: 0.02, // Preço do Llama 3.1 8B Instruct.
    outputPricePerM: 0.05, // Preço do Llama 3.1 8B Instruct.
    contextWindow: '16K tokens', // Janela de contexto do Llama 3.1 8B Instruct.
    description: 'Versão leve e econômica da família Llama 3.1.',
  },
];