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
    name: 'Gemini 3 Flash', // Substituindo Gemini 2.5 Flash, que foi superado pelo Gemini 3 Flash.
    provider: 'Google',
    inputPricePerM: 0.50, // Preço atualizado para Gemini 3 Flash.
    outputPricePerM: 3.00, // Preço atualizado para Gemini 3 Flash.
    contextWindow: '1M tokens', // Janela de contexto para Gemini 3 Flash.
    description: 'Modelo equilibrado para velocidade e capacidade da nova geração Gemini 3.',
  },
  {
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    inputPricePerM: 2.50, // Preço atualizado para contextos acima de 200K tokens para Gemini 2.5 Pro.
    outputPricePerM: 15.00, // Preço atualizado para contextos acima de 200K tokens para Gemini 2.5 Pro.
    contextWindow: '1M tokens', // Janela de contexto atualizada para Gemini 2.5 Pro.
    description: 'Topo de linha da Google com 1M de contexto (preço para >200K tokens) e raciocínio avançado (versão 2.5).',
  },
  {
    name: 'Gemini 3.1 Flash-Lite',
    provider: 'Google',
    inputPricePerM: 0.25, // Preço atual do Gemini 3.1 Flash-Lite.
    outputPricePerM: 1.50, // Preço atual do Gemini 3.1 Flash-Lite.
    contextWindow: '128K tokens', // Janela de contexto mantida para o modelo 'Lite'.
    description: 'Modelo econômico e de alta velocidade da nova geração Gemini 3.1, com suporte multimodal.',
  },
  // OpenAI
  {
    name: 'GPT-5.4', // Substituindo GPT-4 Turbo por um modelo mais recente e avançado.
    provider: 'OpenAI',
    inputPricePerM: 2.50, // Preço atualizado do GPT-5.4.
    outputPricePerM: 15.00, // Preço atualizado do GPT-5.4.
    contextWindow: '128K tokens', // Janela de contexto assumida para o GPT-5.4.
    description: 'Modelo flagship da OpenAI com raciocínio avançado e capacidade multimodal.',
  },
  {
    name: 'GPT-4o mini',
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
    contextWindow: '128K tokens', // Janela de contexto atual confirmada.
    description: 'Modelo multimodal de ponta — texto, áudio e visão em tempo real.',
  },
  // Anthropic
  {
    name: 'Claude 4.6 Opus', // 'Claude 3 Opus' substituído por Claude 4.6 Opus, a versão mais recente e relevante.
    provider: 'Anthropic',
    inputPricePerM: 5.00, // Preço atualizado do Claude 4.6 Opus.
    outputPricePerM: 25.00, // Preço atualizado do Claude 4.6 Opus.
    contextWindow: '1M tokens', // Janela de contexto atualizada do Claude 4.6 Opus.
    description: 'O modelo mais inteligente da Anthropic para raciocínio complexo e tarefas agênticas.',
  },
  {
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    inputPricePerM: 3.00, // Preço atual confirmado.
    outputPricePerM: 15.00, // Preço atual confirmado.
    contextWindow: '1M tokens', // Janela de contexto atualizada do Claude 3.5 Sonnet.
    description: 'Referência em geração de código e raciocínio lógico.',
  },
  {
    name: 'Claude 4.5 Haiku', // 'Claude 3 Haiku' substituído por Claude 4.5 Haiku, a versão mais recente e relevante.
    provider: 'Anthropic',
    inputPricePerM: 1.00, // Preço atualizado do Claude 4.5 Haiku.
    outputPricePerM: 5.00, // Preço atualizado do Claude 4.5 Haiku.
    contextWindow: '200K tokens', // Janela de contexto atual do Claude 4.5 Haiku.
    description: 'O modelo rápido e econômico da Anthropic com 200k contexto.',
  },
  // DeepSeek
  {
    name: 'DeepSeek V3.2', // 'DeepSeek V2' substituído por DeepSeek V3.2.
    provider: 'DeepSeek',
    inputPricePerM: 0.14, // Preço atualizado do DeepSeek V3.2.
    outputPricePerM: 0.28, // Preço atualizado do DeepSeek V3.2.
    contextWindow: '128K tokens', // Janela de contexto mantida para o DeepSeek V3.2.
    description: 'Performance de GPT-4 por uma fração do custo com 128K tokens de contexto.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B', // Llama 3.1 70B substituído por Llama 3.3 70B.
    provider: 'Meta (via API)',
    inputPricePerM: 0.23, // Preço atualizado do Llama 3.3 70B via Deepinfra.
    outputPricePerM: 0.40, // Preço atualizado do Llama 3.3 70B via Deepinfra.
    contextWindow: '128K tokens', // Janela de contexto atualizada do Llama 3.3 70B.
    description: 'Open source poderoso — pode ser usado local ou via API (preço via Deepinfra).',
  },
  {
    name: 'Llama 3.1 8B',
    provider: 'Meta (via API)',
    inputPricePerM: 0.02, // Preço do Llama 3.1 8B Instruct.
    outputPricePerM: 0.05, // Preço do Llama 3.1 8B Instruct.
    contextWindow: '16K tokens', // Janela de contexto do Llama 3.1 8B Instruct.
    description: 'Versão leve e econômica da família Llama 3.1.',
  },
  {
    name: 'Llama 3.1 405B', // Novo modelo adicionado.
    provider: 'Meta (via API)',
    inputPricePerM: 3.50, // Preço do Llama 3.1 405B Instruct.
    outputPricePerM: 3.50, // Preço do Llama 3.1 405B Instruct.
    contextWindow: '128K tokens', // Janela de contexto do Llama 3.1 405B Instruct.
    description: 'Versão de grande escala do Llama 3.1 para tarefas complexas.',
  },
];