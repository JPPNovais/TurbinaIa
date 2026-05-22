export interface AITool {
  id: string;
  name: string;
  developer: string;
  category: string;
  emoji: string;
  tagline: string;
  description: string;
  useCases: string[];
  pricing: 'Grátis' | 'Freemium' | 'Pago';
  pricingDetails: string;
  url: string;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface AIToolCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

export const CATEGORIES: AIToolCategory[] = [
  {
    id: 'texto-redacao',
    name: 'Texto & Redação',
    emoji: '✍️',
    description: 'IAs para escrever, editar e criar conteúdo textual',
  },
  {
    id: 'codigo-dev',
    name: 'Código & Dev',
    emoji: '💻',
    description: 'Assistentes de programação e desenvolvimento de software',
  },
  {
    id: 'imagens',
    name: 'Imagens',
    emoji: '🎨',
    description: 'Geração e edição de imagens com IA',
  },
  {
    id: 'video',
    name: 'Vídeo',
    emoji: '🎬',
    description: 'Criação e edição de vídeos com inteligência artificial',
  },
  {
    id: 'audio-voz',
    name: 'Áudio & Voz',
    emoji: '🎵',
    description: 'Síntese de voz, música e edição de áudio',
  },
  {
    id: 'pesquisa-analise',
    name: 'Pesquisa & Análise',
    emoji: '🔍',
    description: 'Busca inteligente, análise de dados e pesquisa aprofundada',
  },
  {
    id: 'automacao',
    name: 'Automação',
    emoji: '⚡',
    description: 'Fluxos de trabalho automatizados e integrações com IA',
  },
];

export const AI_TOOLS: AITool[] = [
  // Texto & Redação
  {
    id: 'chatgpt-plus',
    name: 'ChatGPT Plus',
    developer: 'OpenAI',
    category: 'Texto & Redação',
    emoji: '✍️',
    tagline: 'O assistente de IA mais popular do mundo',
    description:
      'ChatGPT Plus é a versão premium do modelo GPT-4o da OpenAI, com acesso a plugins, navegação web e geração de imagens. É o assistente conversacional mais versátil disponível, excelente para redação, análise e brainstorming.',
    useCases: [
      'Escrever e revisar textos e e-mails',
      'Criar roteiros, histórias e conteúdo criativo',
      'Analisar documentos e resumir informações',
      'Responder perguntas complexas com contexto longo',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com GPT-4o mini; Plus a US$ 20/mês com GPT-4o e o1',
    url: 'https://chatgpt.com',
    tags: ['redação', 'texto', 'gpt', 'openai', 'chatbot', 'assistente', 'copywriting'],
    isFeatured: true,
  },
  {
    id: 'claude',
    name: 'Claude',
    developer: 'Anthropic',
    category: 'Texto & Redação',
    emoji: '✍️',
    tagline: 'IA focada em segurança com janela de contexto gigante',
    description:
      'Claude é o assistente de IA da Anthropic, reconhecido por suas capacidades de raciocínio avançado, escrita de alta qualidade e janela de contexto de até 200.000 tokens. Destaca-se em análises longas, redação técnica e tarefas que exigem precisão.',
    useCases: [
      'Analisar documentos extensos (PDFs, contratos)',
      'Redação técnica e acadêmica de qualidade',
      'Programação e revisão de código',
      'Brainstorming e criação de conteúdo',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com Claude 3.5 Haiku; Pro a US$ 20/mês com Claude 4',
    url: 'https://claude.ai',
    tags: ['redação', 'texto', 'anthropic', 'assistente', 'análise', 'longo contexto'],
    isFeatured: true,
  },
  {
    id: 'gemini-advanced',
    name: 'Gemini Advanced',
    developer: 'Google',
    category: 'Texto & Redação',
    emoji: '✍️',
    tagline: 'IA do Google com acesso a toda a suíte Google',
    description:
      'Gemini Advanced é o modelo de IA multimodal do Google, integrado ao Gmail, Docs, Drive e Meet. Oferece as capacidades do modelo Gemini 1.5 Pro com acesso a busca em tempo real e integração nativa com os serviços Google.',
    useCases: [
      'Redigir e-mails e documentos no Google Workspace',
      'Pesquisar e sumarizar informações atualizadas',
      'Criar apresentações e análises de planilhas',
      'Gerar conteúdo multimodal (texto + imagem)',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com Gemini 1.5 Flash; Advanced a US$ 19,99/mês',
    url: 'https://gemini.google.com',
    tags: ['google', 'redação', 'texto', 'assistente', 'workspace', 'multimodal'],
  },
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    developer: 'Microsoft',
    category: 'Texto & Redação',
    emoji: '✍️',
    tagline: 'IA integrada ao Windows e Office 365',
    description:
      'Microsoft Copilot é o assistente de IA da Microsoft, baseado nos modelos GPT-4 da OpenAI e integrado nativamente ao Word, Excel, PowerPoint, Outlook e Teams. É a escolha ideal para quem já usa o ecossistema Microsoft.',
    useCases: [
      'Criar e editar documentos no Word',
      'Automatizar análises no Excel com linguagem natural',
      'Gerar apresentações no PowerPoint',
      'Resumir e-mails e reuniões no Outlook/Teams',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com Bing; Microsoft 365 Copilot a partir de US$ 30/usuário/mês',
    url: 'https://copilot.microsoft.com',
    tags: ['microsoft', 'office', 'word', 'excel', 'powerpoint', 'redação', 'produtividade'],
  },
  {
    id: 'jasper-ai',
    name: 'Jasper AI',
    developer: 'Jasper',
    category: 'Texto & Redação',
    emoji: '✍️',
    tagline: 'Plataforma de marketing e copywriting com IA',
    description:
      'Jasper é uma plataforma de geração de conteúdo focada em marketing, com mais de 50 templates para blogs, anúncios, e-mails e redes sociais. Oferece tom de voz personalizado e integração com SEO para times de conteúdo.',
    useCases: [
      'Criar artigos de blog otimizados para SEO',
      'Escrever copy para anúncios (Google, Meta)',
      'Gerar sequências de e-mail marketing',
      'Manter consistência de tom de voz da marca',
    ],
    pricing: 'Pago',
    pricingDetails: 'Creator a partir de US$ 49/mês; Pro a partir de US$ 69/mês',
    url: 'https://www.jasper.ai',
    tags: ['marketing', 'copywriting', 'seo', 'blog', 'anúncios', 'conteúdo', 'redação'],
  },

  // Código & Dev
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    developer: 'GitHub / Microsoft',
    category: 'Código & Dev',
    emoji: '💻',
    tagline: 'O assistente de código mais usado por desenvolvedores',
    description:
      'GitHub Copilot é um assistente de programação baseado em modelos OpenAI, integrado ao VS Code, JetBrains e mais. Sugere linhas e funções completas em tempo real enquanto você digita, acelerando significativamente o desenvolvimento.',
    useCases: [
      'Autocompletar código em tempo real',
      'Gerar funções e classes a partir de comentários',
      'Explicar e documentar código existente',
      'Sugerir correções de bugs e refatorações',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis para estudantes e projetos open source; Individual a US$ 10/mês',
    url: 'https://github.com/features/copilot',
    tags: ['código', 'programação', 'vscode', 'autocompletar', 'developer', 'github'],
    isFeatured: true,
  },
  {
    id: 'cursor',
    name: 'Cursor',
    developer: 'Anysphere',
    category: 'Código & Dev',
    emoji: '💻',
    tagline: 'Editor de código com IA nativa e contexto completo do projeto',
    description:
      'Cursor é um editor de código (fork do VS Code) com IA profundamente integrada que entende todo o contexto do seu projeto. Permite editar arquivos inteiros, refatorar bases de código e conversar sobre o código com Claude, GPT-4 e Gemini.',
    useCases: [
      'Refatorar e editar múltiplos arquivos ao mesmo tempo',
      'Perguntar sobre a base de código inteira em linguagem natural',
      'Depurar erros com contexto completo do projeto',
      'Gerar código a partir de especificações em texto',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com uso limitado; Pro a US$ 20/mês com uso ilimitado',
    url: 'https://cursor.com',
    tags: ['editor', 'código', 'ide', 'programação', 'vscode', 'refatoração'],
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'codeium',
    name: 'Codeium',
    developer: 'Codeium',
    category: 'Código & Dev',
    emoji: '💻',
    tagline: 'Autocompletar de código grátis para mais de 70 linguagens',
    description:
      'Codeium é uma ferramenta gratuita de autocompletar código que suporta mais de 70 linguagens de programação e se integra a todos os principais editores. É uma alternativa gratuita robusta ao GitHub Copilot para desenvolvedores individuais.',
    useCases: [
      'Autocompletar código em qualquer linguagem',
      'Integrar com VS Code, JetBrains, Vim e outros',
      'Busca inteligente dentro do código',
      'Gerar testes unitários automaticamente',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis para uso individual; Teams a partir de US$ 12/usuário/mês',
    url: 'https://codeium.com',
    tags: ['código', 'autocompletar', 'grátis', 'programação', 'múltiplas linguagens'],
  },
  {
    id: 'replit-ai',
    name: 'Replit AI',
    developer: 'Replit',
    category: 'Código & Dev',
    emoji: '💻',
    tagline: 'IDE online com IA para criar apps do zero no browser',
    description:
      'Replit é um ambiente de desenvolvimento online com IA integrada que permite criar, executar e fazer deploy de aplicações diretamente no browser. O Replit AI ajuda a construir apps completos a partir de descrições em linguagem natural.',
    useCases: [
      'Criar aplicações web completas sem configurar ambiente',
      'Prototipar apps rapidamente com IA',
      'Aprender a programar com assistência de IA',
      'Colaborar em código em tempo real',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com recursos limitados; Core a partir de US$ 25/mês',
    url: 'https://replit.com',
    tags: ['ide online', 'programação', 'deploy', 'aprendizado', 'prototipagem'],
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    developer: 'Tabnine',
    category: 'Código & Dev',
    emoji: '💻',
    tagline: 'IA de código focada em privacidade e execução local',
    description:
      'Tabnine é um assistente de código com IA que pode rodar localmente no seu computador, garantindo que o código nunca saia do seu ambiente. É a escolha preferida de empresas com requisitos rígidos de segurança e privacidade.',
    useCases: [
      'Autocompletar código com total privacidade',
      'Rodar modelos de IA localmente (sem enviar código para nuvem)',
      'Personalizar o modelo com o código da empresa',
      'Integrar com políticas de segurança corporativas',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis básico; Pro a US$ 12/mês; Enterprise com preço customizado',
    url: 'https://www.tabnine.com',
    tags: ['código', 'privacidade', 'local', 'segurança', 'empresarial', 'autocompletar'],
  },

  // Imagens
  {
    id: 'dall-e-3',
    name: 'DALL-E 3',
    developer: 'OpenAI',
    category: 'Imagens',
    emoji: '🎨',
    tagline: 'Geração de imagens fotorrealistas a partir de texto',
    description:
      'DALL-E 3 é o modelo de geração de imagens da OpenAI, integrado ao ChatGPT Plus. Transforma descrições textuais em imagens de alta qualidade com excelente fidelidade ao prompt, sem distorções de texto nas imagens.',
    useCases: [
      'Criar ilustrações para artigos e posts',
      'Gerar conceitos visuais para projetos criativos',
      'Produzir imagens de produtos para e-commerce',
      'Visualizar ideias arquitetônicas ou de design',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Disponível via ChatGPT Plus (US$ 20/mês) ou API (US$ 0,04–0,12/imagem)',
    url: 'https://openai.com/dall-e-3',
    tags: ['imagem', 'geração', 'arte', 'ilustração', 'fotorrealismo', 'openai'],
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    developer: 'Midjourney Inc.',
    category: 'Imagens',
    emoji: '🎨',
    tagline: 'A IA preferida para arte de alta qualidade estética',
    description:
      'Midjourney é uma ferramenta de geração de imagens via Discord reconhecida pela qualidade artística excepcional de suas saídas. É a escolha favorita de designers, artistas e criativos que buscam resultados com alto valor estético.',
    useCases: [
      'Criar arte conceitual para games e filmes',
      'Gerar ilustrações com estilo artístico único',
      'Produzir capas de álbuns e materiais gráficos',
      'Criar mockups e visualizações de produtos',
    ],
    pricing: 'Pago',
    pricingDetails: 'Basic a partir de US$ 10/mês; Standard a US$ 30/mês',
    url: 'https://www.midjourney.com',
    tags: ['imagem', 'arte', 'design', 'ilustração', 'discord', 'artístico'],
    isFeatured: true,
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    developer: 'Stability AI',
    category: 'Imagens',
    emoji: '🎨',
    tagline: 'Geração de imagens open source para rodar localmente',
    description:
      'Stable Diffusion é um modelo de geração de imagens open source que pode ser rodado localmente no seu próprio hardware. É altamente customizável com milhares de modelos e LoRAs disponíveis na comunidade.',
    useCases: [
      'Gerar imagens sem custo recorrente (hardware próprio)',
      'Personalizar com modelos fine-tuned da comunidade',
      'Criar variações infinitas com total controle',
      'Integrar em aplicações próprias via API',
    ],
    pricing: 'Grátis',
    pricingDetails: 'Open source e gratuito; hospedagem em nuvem disponível com custo',
    url: 'https://stability.ai',
    tags: ['imagem', 'open source', 'local', 'gratuito', 'customizável', 'comunidade'],
  },
  {
    id: 'ideogram',
    name: 'Ideogram 2.0',
    developer: 'Ideogram AI',
    category: 'Imagens',
    emoji: '🎨',
    tagline: 'A melhor IA para gerar imagens com texto legível',
    description:
      'Ideogram 2.0 se destaca por sua capacidade única de gerar imagens com textos precisos e legíveis — algo que outras IAs costumam fazer mal. Ideal para criar logotipos, pôsteres, capas e qualquer design que combine imagem e tipografia.',
    useCases: [
      'Criar pôsteres e capas com texto integrado',
      'Gerar logotipos e identidades visuais',
      'Produzir thumbnails para YouTube com texto',
      'Criar material gráfico para redes sociais',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com 25 imagens/mês; Basic a US$ 8/mês',
    url: 'https://ideogram.ai',
    tags: ['imagem', 'texto em imagem', 'logo', 'pôster', 'tipografia', 'design'],
    isNew: true,
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    developer: 'Adobe',
    category: 'Imagens',
    emoji: '🎨',
    tagline: 'IA generativa integrada ao Photoshop e Creative Cloud',
    description:
      'Adobe Firefly é a família de modelos de IA generativa da Adobe, treinada em imagens licenciadas e integrada ao Photoshop, Illustrator e outros apps Creative Cloud. Inclui o Generative Fill e Generative Expand do Photoshop.',
    useCases: [
      'Usar Generative Fill para editar fotos no Photoshop',
      'Criar variações de assets para design gráfico',
      'Expandir imagens com Generative Expand',
      'Gerar texturas e padrões para projetos criativos',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com 25 créditos/mês; incluso no Creative Cloud (a partir de US$ 59,99/mês)',
    url: 'https://firefly.adobe.com',
    tags: ['adobe', 'photoshop', 'design', 'edição', 'creative cloud', 'imagem'],
  },

  // Vídeo
  {
    id: 'sora',
    name: 'Sora',
    developer: 'OpenAI',
    category: 'Vídeo',
    emoji: '🎬',
    tagline: 'Geração de vídeos de até 20 segundos com alta fidelidade',
    description:
      'Sora é o modelo de geração de vídeo da OpenAI, capaz de criar vídeos realistas e criativos de até 20 segundos a partir de prompts de texto ou imagens. Disponível para assinantes ChatGPT Pro e Plus.',
    useCases: [
      'Criar clipes cinematográficos a partir de descrições',
      'Gerar vídeos conceituais para apresentações',
      'Produzir conteúdo visual para redes sociais',
      'Prototipar cenas para produções audiovisuais',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Disponível no ChatGPT Plus (US$ 20/mês) e Pro (US$ 200/mês)',
    url: 'https://sora.com',
    tags: ['vídeo', 'geração', 'openai', 'cinematográfico', 'animação'],
    isFeatured: true,
  },
  {
    id: 'runway-gen3',
    name: 'Runway Gen-3',
    developer: 'Runway',
    category: 'Vídeo',
    emoji: '🎬',
    tagline: 'Geração e edição de vídeo profissional com IA',
    description:
      'Runway Gen-3 Alpha é uma das ferramentas de geração de vídeo mais avançadas disponíveis, usada por profissionais de cinema e publicidade. Oferece geração texto-para-vídeo, imagem-para-vídeo e edição com IA.',
    useCases: [
      'Gerar clipes de vídeo de alta qualidade',
      'Animar imagens estáticas em vídeo',
      'Criar efeitos visuais para produções',
      'Editar vídeos com ferramentas de IA',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com 125 créditos; Standard a US$ 15/mês; Pro a US$ 35/mês',
    url: 'https://runwayml.com',
    tags: ['vídeo', 'geração', 'edição', 'efeitos', 'cinematográfico', 'profissional'],
  },
  {
    id: 'kling-ai',
    name: 'Kling AI',
    developer: 'Kuaishou',
    category: 'Vídeo',
    emoji: '🎬',
    tagline: 'Vídeos de até 2 minutos com movimentos realistas',
    description:
      'Kling AI é um modelo de geração de vídeo da empresa chinesa Kuaishou, capaz de gerar vídeos de até 2 minutos com física e movimentos de câmera realistas. Recebeu forte atenção internacional por seus resultados impressionantes.',
    useCases: [
      'Gerar vídeos longos com narrativa coerente',
      'Criar cenas com movimento de câmera profissional',
      'Animar personagens com física realista',
      'Produzir conteúdo para campanhas de marketing',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com créditos diários; planos pagos a partir de US$ 9,99/mês',
    url: 'https://klingai.com',
    tags: ['vídeo', 'geração', 'longo', 'realista', 'animação', 'kuaishou'],
    isNew: true,
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    developer: 'HeyGen',
    category: 'Vídeo',
    emoji: '🎬',
    tagline: 'Avatares de IA que falam qualquer idioma com seu rosto',
    description:
      'HeyGen permite criar vídeos com avatares realistas de IA ou clonar sua própria aparência. É amplamente usado para criar vídeos de marketing personalizados, traduzir vídeos para outros idiomas e criar conteúdo de treinamento corporativo.',
    useCases: [
      'Criar apresentações em vídeo sem aparecer na câmera',
      'Traduzir vídeos para outros idiomas com lip sync',
      'Produzir vídeos de treinamento corporativo',
      'Personalizar mensagens de vídeo em escala',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com 1 crédito/mês; Creator a US$ 29/mês',
    url: 'https://www.heygen.com',
    tags: ['vídeo', 'avatar', 'apresentação', 'tradução', 'corporativo', 'lip sync'],
  },

  // Áudio & Voz
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    developer: 'ElevenLabs',
    category: 'Áudio & Voz',
    emoji: '🎵',
    tagline: 'A melhor síntese de voz em português e inglês',
    description:
      'ElevenLabs é a plataforma líder em síntese de voz com IA, capaz de clonar vozes com apenas alguns minutos de áudio. Oferece vozes extremamente naturais em mais de 29 idiomas, incluindo português brasileiro de alta qualidade.',
    useCases: [
      'Criar narrações para vídeos e podcasts',
      'Clonar sua voz para produção de conteúdo',
      'Dublar vídeos para outros idiomas',
      'Gerar audiobooks e conteúdo de áudio em escala',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com 10 mil caracteres/mês; Starter a US$ 5/mês',
    url: 'https://elevenlabs.io',
    tags: ['voz', 'narração', 'clone de voz', 'podcast', 'dublagem', 'tts', 'português'],
    isFeatured: true,
  },
  {
    id: 'suno-ai',
    name: 'Suno AI',
    developer: 'Suno',
    category: 'Áudio & Voz',
    emoji: '🎵',
    tagline: 'Crie músicas completas com letra em segundos',
    description:
      'Suno AI é uma ferramenta de geração de música com IA que cria músicas completas — com instrumentação, vocal e letra — a partir de uma descrição textual. Gera músicas em praticamente qualquer gênero e idioma, incluindo português.',
    useCases: [
      'Criar trilhas sonoras para vídeos e projetos',
      'Gerar jingles para campanhas de marketing',
      'Compor músicas personalizadas como presente',
      'Prototipar ideias musicais rapidamente',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com 50 créditos/dia; Pro a US$ 10/mês',
    url: 'https://suno.com',
    tags: ['música', 'geração', 'composição', 'trilha sonora', 'jingle', 'letra'],
    isNew: true,
  },
  {
    id: 'descript',
    name: 'Descript',
    developer: 'Descript',
    category: 'Áudio & Voz',
    emoji: '🎵',
    tagline: 'Edite áudio e vídeo editando o texto da transcrição',
    description:
      'Descript é um editor de áudio e vídeo que transcreve automaticamente o conteúdo e permite editar o arquivo multimídia simplesmente editando o texto. Inclui remoção de silêncios, geração de legendas e clonagem de voz.',
    useCases: [
      'Editar podcasts editando a transcrição de texto',
      'Remover automaticamente silêncios e vícios de linguagem',
      'Gerar legendas automáticas para vídeos',
      'Clonar sua voz para corrigir erros no áudio',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com 1h de transcrição/mês; Hobbyist a US$ 24/mês',
    url: 'https://www.descript.com',
    tags: ['podcast', 'edição de áudio', 'transcrição', 'legenda', 'vídeo', 'edição'],
  },
  {
    id: 'whisper',
    name: 'Whisper',
    developer: 'OpenAI',
    category: 'Áudio & Voz',
    emoji: '🎵',
    tagline: 'Transcrição de áudio open source e altamente precisa',
    description:
      'Whisper é o modelo de reconhecimento automático de fala (ASR) da OpenAI, disponível como open source. Suporta transcrição e tradução em mais de 99 idiomas com precisão excepcional, mesmo em áudios com sotaque ou ruído de fundo.',
    useCases: [
      'Transcrever reuniões, entrevistas e podcasts',
      'Converter áudios de WhatsApp em texto',
      'Gerar legendas para vídeos em múltiplos idiomas',
      'Traduzir áudios em idiomas estrangeiros',
    ],
    pricing: 'Grátis',
    pricingDetails: 'Open source e gratuito; API da OpenAI a US$ 0,006/minuto',
    url: 'https://openai.com/research/whisper',
    tags: ['transcrição', 'reconhecimento de voz', 'open source', 'áudio', 'legendas', 'stt'],
  },

  // Pesquisa & Análise
  {
    id: 'perplexity-ai',
    name: 'Perplexity AI',
    developer: 'Perplexity AI',
    category: 'Pesquisa & Análise',
    emoji: '🔍',
    tagline: 'Motor de busca com IA que cita as fontes',
    description:
      'Perplexity AI é um motor de busca conversacional que combina LLMs com busca em tempo real e sempre cita as fontes. É a melhor alternativa ao Google para pesquisas que exigem respostas precisas, atualizadas e verificáveis.',
    useCases: [
      'Pesquisar informações com fontes verificáveis',
      'Monitorar notícias e tendências em tempo real',
      'Fazer pesquisas acadêmicas e de mercado',
      'Comparar produtos, serviços e tecnologias',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com buscas ilimitadas; Pro a US$ 20/mês com modelos avançados',
    url: 'https://www.perplexity.ai',
    tags: ['busca', 'pesquisa', 'fontes', 'tempo real', 'notícias', 'análise'],
    isFeatured: true,
  },
  {
    id: 'notebooklm',
    name: 'Google NotebookLM',
    developer: 'Google',
    category: 'Pesquisa & Análise',
    emoji: '🔍',
    tagline: 'IA que analisa seus próprios documentos como fonte',
    description:
      'Google NotebookLM é um assistente de pesquisa que usa exclusivamente os documentos que você carrega como fonte de conhecimento. Gera resumos, respondes perguntas e cria podcasts de áudio a partir de seus PDFs, Docs e sites.',
    useCases: [
      'Estudar e resumir PDFs e documentos longos',
      'Fazer perguntas sobre artigos científicos',
      'Gerar podcast de áudio a partir de documentos',
      'Organizar e sintetizar pesquisas e notas',
    ],
    pricing: 'Grátis',
    pricingDetails: 'Gratuito; NotebookLM Plus disponível via Google One AI Premium',
    url: 'https://notebooklm.google.com',
    tags: ['pesquisa', 'documentos', 'pdf', 'estudo', 'resumo', 'análise', 'google'],
    isNew: true,
  },
  {
    id: 'you-com',
    name: 'You.com',
    developer: 'You.com',
    category: 'Pesquisa & Análise',
    emoji: '🔍',
    tagline: 'Buscador com IA que prioriza privacidade do usuário',
    description:
      'You.com é um motor de busca alimentado por IA que combina resultados da web com respostas geradas por LLMs, priorizando a privacidade do usuário. Oferece modo de pesquisa profunda e agentes de IA para tarefas complexas.',
    useCases: [
      'Pesquisar na web com privacidade preservada',
      'Usar agentes de IA para tarefas de pesquisa complexas',
      'Gerar código, textos e análises diretamente na busca',
      'Pesquisa profunda com múltiplas fontes sintetizadas',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com recursos básicos; Pro a US$ 15/mês',
    url: 'https://you.com',
    tags: ['busca', 'privacidade', 'pesquisa', 'agentes', 'web', 'análise'],
  },

  // Automação
  {
    id: 'make-com',
    name: 'Make.com',
    developer: 'Make',
    category: 'Automação',
    emoji: '⚡',
    tagline: 'Automação visual com IA e 1.500+ integrações',
    description:
      'Make (antigo Integromat) é uma plataforma de automação no-code com interface visual intuitiva que conecta mais de 1.500 apps. Permite criar fluxos complexos com lógica condicional, iteradores e módulos de IA integrados.',
    useCases: [
      'Automatizar fluxos de trabalho entre diferentes apps',
      'Integrar ferramentas de IA em processos de negócio',
      'Criar automações de marketing e CRM',
      'Processar dados e sincronizar sistemas automaticamente',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com 1.000 operações/mês; Core a partir de US$ 9/mês',
    url: 'https://www.make.com',
    tags: ['automação', 'no-code', 'integração', 'workflow', 'zapier', 'api'],
    isFeatured: true,
  },
  {
    id: 'zapier-ai',
    name: 'Zapier AI',
    developer: 'Zapier',
    category: 'Automação',
    emoji: '⚡',
    tagline: 'Automatize tarefas entre apps com agentes de IA',
    description:
      'Zapier é a plataforma de automação mais popular, com mais de 7.000 integrações. Sua funcionalidade de IA permite criar automações em linguagem natural, usar agentes de IA e incluir etapas de processamento com LLMs nos fluxos.',
    useCases: [
      'Criar automações entre apps em linguagem natural',
      'Processar e classificar e-mails com IA automaticamente',
      'Sincronizar leads entre CRM e ferramentas de marketing',
      'Usar agentes de IA para tarefas recorrentes',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Grátis com 100 tarefas/mês; Starter a partir de US$ 19,99/mês',
    url: 'https://zapier.com',
    tags: ['automação', 'integração', 'workflow', 'no-code', 'agentes', 'produtividade'],
  },
  {
    id: 'n8n',
    name: 'n8n',
    developer: 'n8n GmbH',
    category: 'Automação',
    emoji: '⚡',
    tagline: 'Automação open source com opção de auto-hospedagem',
    description:
      'n8n é uma ferramenta de automação de fluxos de trabalho open source que pode ser hospedada no seu próprio servidor. Oferece mais de 400 integrações, suporte nativo a código (JS/Python) e módulos de IA para criar agentes complexos.',
    useCases: [
      'Criar automações complexas com código personalizado',
      'Hospedar fluxos de automação no próprio servidor',
      'Construir agentes de IA com ferramentas e memória',
      'Automatizar processos sem custo recorrente (self-hosted)',
    ],
    pricing: 'Freemium',
    pricingDetails: 'Open source e auto-hospedagem gratuita; Cloud a partir de US$ 24/mês',
    url: 'https://n8n.io',
    tags: ['automação', 'open source', 'self-hosted', 'workflow', 'agentes', 'código'],
    isNew: true,
  },
];
