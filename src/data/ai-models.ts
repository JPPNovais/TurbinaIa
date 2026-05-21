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
    name: 'ChatGPT Plus (GPT-5.5 Instant)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'US$ 20/mês (aprox. R$ 100/mês no Brasil); Plano gratuito e ChatGPT Go (R$ 39,99/mês no Brasil) disponíveis com limitações',
    pros: [
      'Altíssima velocidade de processamento',
      'Excelente análise de arquivos e dados complexos',
      'Ecossistema rico de plugins (GPTs personalizados)',
      'Capacidades multimodais aprimoradas para texto e imagem',
      'Recursos de memória para respostas mais personalizadas e contínuas',
      'Novas ferramentas para gerenciamento de finanças pessoais e conexão de contas',
      'Recursos de criação e acompanhamento de tarefas (codinome "Salute")',
      'Blocos de código e matemática editáveis inline'
    ],
    cons: [
      'Preço em dólar pode ser alto para o mercado brasileiro, mesmo com preço regionalizado para Plus',
      'Limitação de mensagens por hora no plano gratuito e no plano Go',
      'Pode alucinar em códigos complexos',
      'Plano ChatGPT Go pode ter raciocínio limitado para tarefas complexas'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.6,
      coding: 4.6,
      speed: 4.9,
      value: 4.6
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'A ferramenta de inteligência artificial mais famosa do mundo, agora com o GPT-5.5 Instant como modelo padrão. É ideal para tarefas de produtividade diária, escrita comercial, geração de ideias e análises quantitativas de arquivos. Recebeu atualizações significativas em personalização, análise de dados, gerenciamento de tarefas e finanças.'
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
    name: 'Llama 4 (Meta AI)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: '100% Gratuito (Código aberto/Open Source para uso local) / Pago via API (a partir de US$ 0.15/milhão de tokens de entrada para Llama 4 Maverick)',
    pros: [
      'Código aberto, pode rodar localmente no seu computador',
      'Arquitetura Mixture of Experts (MoE) para melhor qualidade e eficiência',
      'Janela de contexto massiva (Llama 4 Scout suporta até 10 milhões de tokens)',
      'Suporte multimodal (texto, áudio, imagem)',
      'Melhor raciocínio e compreensão em múltiplos idiomas (Llama 3.1 já suportava 8 idiomas)',
      'Custos de infraestrutura potencialmente mais baixos para API devido à MoE'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade',
      'Requer re-treinamento para migrar fine-tunes da versão anterior (Llama 3.1)',
      'Ainda sem acesso nativo à internet na versão bruta',
      'Capacidades analíticas podem variar dependendo do tamanho do modelo e implementação'
    ],
    score: {
      reasoning: 4.6,
      writing: 4.3,
      coding: 4.5,
      speed: 4.7,
      value: 4.9
    },
    affiliateUrl: 'https://meta.ai',
    description: 'O principal modelo de código aberto do mundo, agora na versão Llama 4. Apresenta uma arquitetura Mixture of Experts, janela de contexto de milhões de tokens e suporte multimodal, tornando-o ideal para desenvolvedores e empresas que buscam alta capacidade e flexibilidade sem depender de APIs pagas ou para quem precisa de privacidade de dados.'
  },
  {
    id: 'midjourney-v6',
    name: 'Midjourney v8.1',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'A partir de US$ 10/mês (Sem plano gratuito)',
    pros: [
      'Qualidade fotorrealista imbatível no mercado',
      'V8.1 é 4-5 vezes mais rápido que versões anteriores',
      'Excelente interpretação de iluminação, texturas e estilos artísticos',
      'Melhor interpretação de prompt e retenção de detalhes em V8.1',
      'Editor web moderno disponível para assinantes, permite edição de imagens existentes',
      'Geração de imagens em alta definição (2K) disponível em V8.1',
      'V7 introduziu ferramentas de texto-para-vídeo e capacidades 3D aprimoradas'
    ],
    cons: [
      'Interface principal ainda roda dentro do Discord, embora o editor web seja uma alternativa',
      'Não possui plano de testes gratuito',
      'Ainda pode apresentar dificuldades com renderização de textos muito complexos dentro da imagem',
      'V7 teve avaliações mistas iniciais sobre aderência a prompts e anatomia humana'
    ],
    score: {
      reasoning: 3.8,
      writing: 2.5,
      coding: 1.0,
      speed: 5.0,
      value: 4.5
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'A referência absoluta em geração de imagens artísticas e fotos realistas, agora na versão v8.1. Ideal para designers, publicitários e criadores de conteúdo que buscam estética visual de altíssimo nível, com velocidade aprimorada e recursos de edição na web.'
  },
  {
    id: 'dalle-3',
    name: 'DALL-E 3',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus / Grátis no Bing Copilot (limitações aplicadas) / API a partir de US$ 0.04/imagem (1024x1024)',
    pros: [
      'Excelente entendimento do prompt (segue instruções de texto à risca)',
      'Renderiza textos e palavras dentro das imagens com alta precisão',
      'Totalmente integrado com o ChatGPT (permite refinar imagens conversando)',
      'Acessível gratuitamente via Bing Copilot e com limitações no ChatGPT gratuito'
    ],
    cons: [
      'Estilo de imagem tende a parecer muito cartunesco ou digital 3D',
      'Opções de edição avançada de imagem limitadas',
      'Resolução de saída padrão de 1024x1024, resoluções maiores custam mais'
    ],
    score: {
      reasoning: 4.2,
      writing: 1.0,
      coding: 1.0,
      speed: 4.6,
      value: 4.5
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'Integrado diretamente ao ChatGPT Plus. É a ferramenta mais fácil para iniciantes, pois você pode descrever o que quer em português natural e o ChatGPT otimiza o prompt para você. Excelente para seguir instruções de texto e renderizar palavras com precisão nas imagens.'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion 3',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código aberto (Gratuito local / Pago via API, a partir de US$ 0.035/imagem 1024x1024)',
    pros: [
      'Controle absoluto sobre a geração (ferramentas como ControlNet)',
      'Permite treinar modelos com seu próprio rosto ou produto',
      'Pode rodar 100% grátis localmente no seu computador',
      'Arquitetura MMDiT aprimora a compreensão de texto e precisão ortográfica'
    ],
    cons: [
      'Curva de aprendizado muito acentuada (interface complexa)',
      'Exige uma placa de vídeo dedicada (Nvidia de preferência) muito potente para uso local eficiente',
      'Configuração inicial trabalhosa',
      'Custo via API pode ser considerado menos competitivo para alguns usos comerciais'
    ],
    score: {
      reasoning: 3.2,
      writing: 1.5,
      coding: 1.0,
      speed: 4.0,
      value: 4.7
    },
    affiliateUrl: 'https://stability.ai',
    description: 'A ferramenta favorita de profissionais que precisam de controle milimétrico sobre a imagem. Permite alterar poses de personagens, copiar designs exatos de produtos e criar animações complexas, agora com melhor compreensão de texto na versão 3.'
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