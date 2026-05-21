export interface AIModel {
  id: string;
  name: string;
  developer: string;
  category: 'Texto & Código' | 'Geração de Imagem' | 'Automação';
  pricing: string;
  pros: string[];
  cons: string[];
  score: {
    reasoning: number;      // Raciocínio Lógico
    writing: number;        // Escrita Criativa
    coding: number;         // Programação
    speed: number;          // Velocidade de Resposta
    value: number;          // Custo-benefício
  };
  affiliateUrl: string;
  description: string;
}

export const aiModels: AIModel[] = [
  {
    id: 'chatgpt-plus',
    name: 'ChatGPT Plus (GPT-4o)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'US$ 20/mês (Plano gratuito disponível com limitações)',
    pros: [
      'Altíssima velocidade de processamento',
      'Excelente análise de arquivos e dados complexos',
      'Ecossistema rico de plugins (GPTs personalizados)'
    ],
    cons: [
      'Preço em dólar pode ser alto para o mercado brasileiro',
      'Limitação de mensagens por hora no plano gratuito',
      'Pode alucinar em códigos complexos'
    ],
    score: {
      reasoning: 4.8,
      writing: 4.5,
      coding: 4.5,
      speed: 4.9,
      value: 4.5
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'A ferramenta de inteligência artificial mais famosa do mundo. O GPT-4o é ideal para tarefas de produtividade diária, escrita comercial, geração de ideias e análises quantitativas de arquivos.'
  },
  {
    id: 'claude-sonnet',
    name: 'Claude 3.5 Sonnet',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'US$ 20/mês (Plano gratuito disponível)',
    pros: [
      'Melhor inteligência artificial para programação da atualidade',
      'Estilo de escrita extremamente natural e humanizado',
      'Excelente interpretação de contexto e lógica analítica'
    ],
    cons: [
      'Plano gratuito muito restritivo (bloqueia rápido por limite)',
      'Sem geração de imagem nativa',
      'Menor ecossistema de integrações em comparação com a OpenAI'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.8,
      coding: 4.9,
      speed: 4.4,
      value: 4.6
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Consensualmente eleito por desenvolvedores como o melhor modelo para escrever e corrigir códigos de programação. Também se destaca na redação de artigos e relatórios por soar menos artificial.'
  },
  {
    id: 'gemini-pro',
    name: 'Gemini 1.5 Pro',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Grátis no AI Studio / R$ 96/mês no plano Advanced',
    pros: [
      'Janela de contexto gigantesca (2 milhões de tokens)',
      'Integração perfeita com o ecossistema Google (Docs, Drive, Gmail)',
      'Nível gratuito do Google AI Studio é muito generoso'
    ],
    cons: [
      'Velocidade de resposta ligeiramente menor para prompts muito longos',
      'Interface do Gemini Advanced às vezes simplifica respostas técnicas',
      'Filtros de segurança às vezes são excessivamente rígidos'
    ],
    score: {
      reasoning: 4.7,
      writing: 4.4,
      coding: 4.3,
      speed: 4.2,
      value: 4.8
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'O Gemini se destaca por conseguir ler livros inteiros ou horas de vídeo de uma só vez devido à sua enorme janela de contexto. É excelente para análise integrada de múltiplos formatos de mídia (multimodal).'
  },
  {
    id: 'llama-3',
    name: 'Llama 3 (Meta AI)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: '100% Gratuito (Código aberto/Open Source)',
    pros: [
      'Código aberto, pode rodar localmente no seu computador',
      'Excelente velocidade e respostas diretas',
      'Completamente gratuito sem limites de uso comercial online'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade',
      'Capacidades analíticas ligeiramente menores que os modelos pagos fechados',
      'Sem acesso nativo à internet na versão bruta'
    ],
    score: {
      reasoning: 4.2,
      writing: 4.0,
      coding: 4.0,
      speed: 4.7,
      value: 5.0
    },
    affiliateUrl: 'https://meta.ai',
    description: 'O principal modelo de código aberto do mundo. Ideal para desenvolvedores que desejam criar aplicações próprias sem pagar por tokens de API ou para empresas com rígidas políticas de privacidade de dados.'
  },
  {
    id: 'midjourney-v6',
    name: 'Midjourney v6',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'A partir de US$ 10/mês (Sem plano gratuito)',
    pros: [
      'Qualidade fotorrealista imbatível no mercado',
      'Excelente interpretação de iluminação, texturas e estilos artísticos',
      'Editor web moderno disponível para assinantes'
    ],
    cons: [
      'Interface principal ainda roda dentro do Discord (ruim para iniciantes)',
      'Não possui plano de testes gratuito',
      'Dificuldade para renderizar textos escritos dentro da imagem'
    ],
    score: {
      reasoning: 3.5, // N/A em imagem, nota genérica para inteligência do prompt
      writing: 2.0,
      coding: 1.0,
      speed: 4.3,
      value: 4.4
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'A referência absoluta em geração de imagens artísticas e fotos realistas. Ideal para designers, publicitários e criadores de conteúdo que buscam estética visual de altíssimo nível.'
  },
  {
    id: 'dalle-3',
    name: 'DALL-E 3',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus / Grátis no Bing Copilot',
    pros: [
      'Excelente entendimento do prompt (segue instruções de texto à risca)',
      'Renderiza textos e palavras dentro das imagens com alta precisão',
      'Totalmente integrado com o ChatGPT (permite refinar imagens conversando)'
    ],
    cons: [
      'Estilo de imagem tende a parecer muito cartunesco ou digital 3D',
      'Opções de edição avançada de imagem limitadas',
      'Resolução de saída padrão de 1024x1024'
    ],
    score: {
      reasoning: 4.2,
      writing: 1.0,
      coding: 1.0,
      speed: 4.6,
      value: 4.5
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'Integrado diretamente ao ChatGPT Plus. É a ferramenta mais fácil para iniciantes, pois você pode descrever o que quer em português natural e o ChatGPT otimiza o prompt para você.'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion 3',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código aberto (Gratuito local / Pago via API)',
    pros: [
      'Controle absoluto sobre a geração (ferramentas como ControlNet)',
      'Permite treinar modelos com seu próprio rosto ou produto',
      'Pode rodar 100% grátis localmente no seu computador'
    ],
    cons: [
      'Curva de aprendizado muito acentuada (interface complexa)',
      'Exige uma placa de vídeo dedicada (Nvidia de preferência) muito potente',
      'Configuração inicial trabalhosa'
    ],
    score: {
      reasoning: 3.0,
      writing: 1.0,
      coding: 1.0,
      speed: 4.0,
      value: 4.7
    },
    affiliateUrl: 'https://stability.ai',
    description: 'A ferramenta favorita de profissionais que precisam de controle milimétrico sobre a imagem. Permite alterar poses de personagens, copiar designs exatos de produtos e criar animações complexas.'
  },
  {
    id: 'make-automation',
    name: 'Make.com',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis generoso / Planos pagos a partir de US$ 9/mês',
    pros: [
      'Interface visual de arrastar e soltar muito intuitiva',
      'Integração nativa com ChatGPT, Claude, Google e centenas de APIs',
      'Permite criar roteiros condicionais complexos (se isso, faça aquilo)'
    ],
    cons: [
      'Pode se tornar caro se o volume de execuções mensais (operações) for muito alto',
      'Requer conceitos básicos de lógica de programação (JSON, arrays) para fluxos avançados',
      'Documentação de alguns aplicativos integrados é escassa'
    ],
    score: {
      reasoning: 4.5,
      writing: 3.0,
      coding: 3.8,
      speed: 4.8,
      value: 4.9
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Uma plataforma de integração B2B que permite conectar sistemas e IAs sem programar. É a ferramenta principal para criar "Agentes autônomos" que automatizam rotinas de empresas e geram lucro passivo.'
  }
];
