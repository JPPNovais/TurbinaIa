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
    name: 'Gemini 2.5 Flash', // Atualizado para a versão 2.5 estável de maio de 2026.
    provider: 'Google',
    inputPricePerM: 0.30, // Preço atualizado para Gemini 2.5 Flash.
    outputPricePerM: 2.50, // Preço atualizado para Gemini 2.5 Flash.
    contextWindow: '1M tokens', // Janela de contexto para Gemini 2.5 Flash.
    description: 'Modelo equilibrado para velocidade e capacidade da nova geração Gemini 2.5.',
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
    name: 'Gemini 2.5 Flash-Lite', // Atualizado para a versão 2.5 estável de maio de 2026.
    provider: 'Google',
    inputPricePerM: 0.10, // Preço atualizado do Gemini 2.5 Flash-Lite.
    outputPricePerM: 0.40, // Preço atualizado do Gemini 2.5 Flash-Lite.
    contextWindow: '128K tokens', // Janela de contexto para o modelo 'Lite'.
    description: 'Modelo econômico e de alta velocidade da nova geração Gemini 2.5, com suporte multimodal.',
  },
  // OpenAI
  {
    name: 'GPT-5.4', // GPT-5.4 é listado como disponível em maio de 2026.
    provider: 'OpenAI',
    inputPricePerM: 2.50, // Preço atualizado do GPT-5.4.
    outputPricePerM: 15.00, // Preço atualizado do GPT-5.4.
    contextWindow: '1M tokens', // Janela de contexto para o GPT-5.4.
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
  {
    name: 'GPT-5.5', // Adicionado como o modelo flagship mais recente da OpenAI para maio de 2026.
    provider: 'OpenAI',
    inputPricePerM: 5.00, // Preço do GPT-5.5.
    outputPricePerM: 30.00, // Preço do GPT-5.5.
    contextWindow: '1M tokens', // Janela de contexto do GPT-5.5.
    description: 'Modelo flagship mais recente da OpenAI, com raciocínio superior e 1M de contexto.',
  },
  // Anthropic
  {
    name: 'Claude 4.7 Opus', // Atualizado para a versão 4.7, conforme referências de maio de 2026.
    provider: 'Anthropic',
    inputPricePerM: 5.00, // Preço atualizado do Claude 4.7 Opus.
    outputPricePerM: 25.00, // Preço atualizado do Claude 4.7 Opus.
    contextWindow: '1M tokens', // Janela de contexto atualizada do Claude 4.7 Opus.
    description: 'O modelo mais inteligente da Anthropic para raciocínio complexo e tarefas agênticas (versão 4.7).',
  },
  {
    name: 'Claude 4.6 Sonnet', // Atualizado para a versão 4.6, conforme referências de maio de 2026.
    provider: 'Anthropic',
    inputPricePerM: 3.00, // Preço atualizado do Claude 4.6 Sonnet.
    outputPricePerM: 15.00, // Preço atualizado do Claude 4.6 Sonnet.
    contextWindow: '1M tokens', // Janela de contexto atualizada do Claude 4.6 Sonnet.
    description: 'Referência em geração de código e raciocínio lógico (versão 4.6).',
  },
  {
    name: 'Claude 4.5 Haiku', // Atualizado para a versão 4.5, conforme referências de maio de 2026.
    provider: 'Anthropic',
    inputPricePerM: 1.00, // Preço atualizado do Claude 4.5 Haiku.
    outputPricePerM: 5.00, // Preço atualizado do Claude 4.5 Haiku.
    contextWindow: '200K tokens', // Janela de contexto atual do Claude 4.5 Haiku.
    description: 'O modelo rápido e econômico da Anthropic com 200k contexto (versão 4.5).',
  },
  // DeepSeek
  {
    name: 'DeepSeek V3.2', // Preço e nome mantidos, conforme ausência de dados mais recentes específicos para V3.2 ou V4 em maio de 2026.
    provider: 'DeepSeek',
    inputPricePerM: 0.14,
    outputPricePerM: 0.28,
    contextWindow: '128K tokens',
    description: 'Performance de GPT-4 por uma fração do custo com 128K tokens de contexto.',
  },
  // Meta (via API)
  {
    name: 'Llama 3.3 70B', // Atualizado para Llama 3.3 70B, com preços da Together AI.
    provider: 'Meta (via API)',
    inputPricePerM: 0.88, // Preço atualizado do Llama 3.3 70B via Together AI.
    outputPricePerM: 0.88, // Preço atualizado do Llama 3.3 70B via Together AI.
    contextWindow: '128K tokens', // Janela de contexto atualizada do Llama 3.3 70B.
    description: 'Open source poderoso — pode ser usado local ou via API (preço via Together AI).',
  },
  {
    name: 'Llama 3.1 8B',
    provider: 'Meta (via API)',
    inputPricePerM: 0.02, // Preço do Llama 3.1 8B Instruct.
    outputPricePerM: 0.05, // Preço do Llama 3.1 8B Instruct.
    contextWindow: '16K tokens', // Janela de contexto do Llama 3.1 8B Instruct.
    description: 'Versão leve e econômica da família Llama 3.1.',
  },
  // Mistral AI
  {
    name: 'Mistral Large 3', // Adicionado como modelo flagship da Mistral AI.
    provider: 'Mistral AI',
    inputPricePerM: 0.50, // Preço do Mistral Large 3.
    outputPricePerM: 1.50, // Preço do Mistral Large 3.
    contextWindow: '262K tokens', // Janela de contexto do Mistral Large 3.
    description: 'Modelo flagship da Mistral AI, com raciocínio e capacidades multimodais.',
  },
  // Cohere
  {
    name: 'Command R+', // Adicionado como modelo de ponta da Cohere.
    provider: 'Cohere',
    inputPricePerM: 2.50, // Preço do Command R+.
    outputPricePerM: 10.00, // Preço do Command R+.
    contextWindow: '128K tokens', // Janela de contexto do Command R+.
    description: 'Modelo robusto da Cohere, otimizado para RAG e tarefas empresariais.',
  },
];