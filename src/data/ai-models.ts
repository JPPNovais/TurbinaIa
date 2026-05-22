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
    name: 'ChatGPT Plus (GPT-5.5)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'US$ 20/mês (aprox. R$ 100/mês no Brasil, com preço regionalizado); Plano ChatGPT Go: R$ 39,99/mês no Brasil, com acesso a modelos GPT-5 e recursos premium limitados. Plano gratuito com GPT-5.5 Instant. ChatGPT Pro: US$ 100/mês (5x limites do Plus) ou US$ 200/mês (20x limites do Plus, 1M contexto, 250 Deep Research/mês), com acesso a GPT-5.5 Pro e o1-pro. API GPT-5.5: US$ 5/milhão de tokens de entrada e US$ 30/milhão de tokens de saída (contexto de 1 milhão de tokens).',
    pros: [
      'Altíssima velocidade de processamento',
      'Excelente análise de arquivos e dados complexos',
      'Ecossistema rico de plugins (GPTs personalizados)',
      'Capacidades multimodais aprimoradas para texto, áudio e imagem',
      'Recursos de memória para respostas mais personalizadas e contínuas',
      'Blocos de código interativos e editáveis inline',
      'Melhor experiência do usuário e interface intuitiva',
      'Integração perfeita com ChatGPT Images 2.0 para geração de imagens',
      'Modo de voz avançado',
      'Deep Research expandido (250 execuções/mês no plano Pro de US$ 200)',
      'Janela de contexto expandida para 1 milhão de tokens no modo Thinking para API e plano Pro',
      'Acesso a GPT-5.5 Thinking para raciocínio complexo e análise de múltiplos formatos de mídia',
      'Versão GPT-5.5 Instant como modelo padrão para usuários gratuitos, mais inteligente e precisa'
    ],
    cons: [
      'Preço em dólar pode ser alto para o mercado brasileiro, mesmo com preço regionalizado para Plus',
      'Limitação de mensagens por hora no plano gratuito e no plano Go',
      'Pode alucinar em códigos complexos, embora GPT-5.5 busque reduzir alucinações',
      'Plano ChatGPT Go pode ter raciocínio limitado para tarefas complexas',
      'Alto custo operacional para uso da API (US$ 30/milhão de tokens de saída)',
      'Data de corte de conhecimento para treinamento do modelo em torno de abril de 2026, embora com acesso à web para informações atuais',
      'Limites de uso para o plano Plus'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.7,
      coding: 5.0,
      speed: 5.0,
      value: 4.6
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'A ferramenta de inteligência artificial mais famosa do mundo. O plano Plus oferece acesso ao GPT-5.5 Thinking, ideal para tarefas complexas de produtividade diária, escrita comercial, geração de ideias e análises quantitativas de arquivos, com capacidades multimodais aprimoradas. O modelo gratuito usa o GPT-5.5 Instant, mais rápido e preciso. Recebeu atualizações significativas em personalização, análise de dados e recursos de memória, e agora conta com blocos de código interativos, um modo de voz avançado e integração com ChatGPT Images 2.0. O ChatGPT Go é um plano regionalizado no Brasil com acesso a recursos premium limitados do GPT-5.'
  },
  {
    id: 'claude-sonnet',
    name: 'Claude Sonnet 4.6',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'US$ 20/mês (para plano Pro, com maiores limites de uso); Plano gratuito disponível em Claude.ai e no app iOS. API: US$ 3/milhão de tokens de entrada e US$ 15/milhão de tokens de saída.',
    pros: [
      'Melhor inteligência artificial para programação em sua categoria, superando Claude 3 Opus em codificação (64% de problemas resolvidos vs 38%)',
      'Estilo de escrita extremamente natural e humanizado, com melhor compreensão de nuances e humor',
      'Excelente interpretação de contexto e lógica analítica, superando Claude 3 Opus em inteligência',
      'Opera o dobro da velocidade do Claude 3 Opus',
      'Capacidades de uso de computador (em beta público)',
      'Capacidades de visão avançadas, superando Claude 3 Opus em benchmarks de visão, interpretando gráficos e transcrevendo texto de imagens imperfeitas',
      'Recurso "Artifacts" para criar e editar conteúdo (código, documentos, designs) em tempo real em um workspace colaborativo',
      'Janela de contexto de 200K tokens'
    ],
    cons: [
      'Plano gratuito muito restritivo (bloqueia rápido por limite)',
      'Sem geração de imagem nativa',
      'Menor ecossistema de integrações em comparação com a OpenAI',
      'Data de corte de conhecimento mais recente (fevereiro de 2026 para Sonnet 4.6), mas ainda um ponto de corte'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.9,
      coding: 5.0,
      speed: 4.8,
      value: 4.7
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Lançado em fevereiro de 2026, Claude Sonnet 4.6 é a versão mais recente da linha Sonnet da Anthropic. Ele oferece um equilíbrio ideal entre velocidade e inteligência para fluxos de trabalho de codificação e tarefas profissionais em larga escala. Baseado nos avanços do Claude 3.5 Sonnet (lançado em junho de 2024), continua a se destacar em programação, escrita natural, raciocínio complexo e capacidades de visão aprimoradas. Mantém os recursos "Artifacts" para um workspace colaborativo e habilidades de uso de computador em beta público, com uma janela de contexto de 200K tokens.'
  },
  {
    id: 'gemini-pro',
    name: 'Gemini 3.5 Flash',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Grátis no AI Studio. Plano Google AI Pro (anteriormente Gemini Advanced) para consumidores: US$ 19.99/mês. API para Gemini 3.5 Flash: US$ 1.50/milhão de tokens de entrada e US$ 9.00/milhão de tokens de saída. Tokens de entrada em cache: US$ 0.15/milhão. Gemini 3.5 Pro será lançado em junho de 2026.',
    pros: [
      'Janela de contexto de 1 milhão de tokens',
      'Integração perfeita com o ecossistema Google (Docs, Drive, Gmail) e agentes de IA proativos como Gemini Spark e Daily Brief',
      'Nível gratuito do Google AI Studio é muito generoso',
      'Saídas 4x mais rápidas que modelos de ponta comparáveis',
      'Qualidade geral aprimorada, com maiores ganhos em codificação e agentes',
      'Redução significativa de preços da API, tornando-o altamente competitivo',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição',
      'Recurso de "Context Caching" para reduzir custos e latência em prompts que reutilizam tokens',
      'Agentes de IA proativos como "Daily Brief" e "Gemini Spark" para automação de tarefas em segundo plano e integração com apps Google',
      'Code execution capabilities na API Gemini'
    ],
    cons: [
      'Pode ter raciocínio ligeiramente inferior para tarefas de raciocínio abstrato e recuperação de contexto muito longo em comparação com as versões Pro',
      'Interface do Gemini Advanced (agora Google AI Pro) às vezes simplifica respostas técnicas, embora com novo design "Neural Expressive"',
      'Filtros de segurança às vezes são excessivamente rígidos',
      'Data de corte de conhecimento para treinamento do modelo em janeiro de 2026'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.5,
      coding: 5.0,
      speed: 5.0,
      value: 5.0
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 3.5 Flash da Google, lançado em 19 de maio de 2026, é o modelo inicial da série Gemini 3.5. É o modelo mais forte da série Flash para agentes e codificação, superando o Gemini 3.1 Pro em benchmarks importantes e operando 4x mais rápido que modelos de ponta comparáveis. Possui uma janela de contexto de 1 milhão de tokens, é nativamente multimodal (texto, imagem, áudio, vídeo) e apresenta recursos como Gemini Spark para automação proativa e o novo design "Neural Expressive". O Gemini 3.5 Pro, com foco em raciocínio complexo, será lançado em junho de 2026.'
  },
  {
    id: 'llama-4',
    name: 'Llama 4 (Scout/Maverick)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: '100% Gratuito (Código "open-weight" para uso local, requer hardware) / Pago via API (Llama 4 Maverick: a partir de US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída com provedores gerenciados).',
    pros: [
      'Código "open-weight", pode rodar localmente no seu computador',
      'Arquitetura Mixture of Experts (MoE) para melhor qualidade e eficiência',
      'Janela de contexto massiva (Llama 4 Scout suporta até 10 milhões de tokens)',
      'Suporte multimodal nativo (texto e imagem)',
      'Melhor raciocínio e compreensão em múltiplos idiomas',
      'Custos de API significativamente mais baixos para Llama 4 em comparação com Llama 3.1',
      'Modelos como Llama 4 Scout podem rodar em uma única GPU H100 (com quantização INT4)',
      'Desempenho comparável ou superior aos principais modelos fechados em benchmarks específicos (ex: Llama 4 Maverick supera GPT-4o e Gemini 2.0 Flash)',
      'Ferramentas de proteção como Llama Guard 4 e Prompt Guard 2 para segurança e detecção de prompt injections',
      'SDK em Python e TypeScript e compatibilidade com OpenAI SDK para API'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade',
      'Requer re-treinamento para migrar fine-tunes da versão anterior devido à arquitetura MoE',
      'Ainda sem acesso nativo à internet na versão bruta',
      'Capacidades analíticas podem variar dependendo do tamanho do modelo e implementação',
      'Pode ser mais complexo operacionalmente devido à arquitetura MoE',
      'Não é "open-source" no sentido estrito, mas "open-weight", com política de uso aceitável',
      'Recebeu feedback misto e controvérsias sobre a representatividade dos benchmarks'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.5,
      coding: 4.9,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://meta.ai',
    description: 'Lançado em abril de 2025, o Llama 4 (Scout e Maverick) representa a mais recente geração de modelos "open-weight" da Meta. Com arquitetura Mixture of Experts (MoE) e suporte multimodal nativo (texto e imagem), ele oferece janelas de contexto massivas (Llama 4 Scout até 10 milhões de tokens) e custos de API reduzidos. Projetado para alta capacidade e flexibilidade, rivaliza com modelos proprietários de ponta em várias métricas de desempenho. É ideal para desenvolvedores e empresas que buscam controle e inovação em cargas de trabalho multimodais e de longo contexto.'
  },
  {
    id: 'gpt-image-2',
    name: 'GPT Image 2',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (com GPT-5.5 Thinking) e com limites no plano gratuito; Grátis no Copilot (com limitações). API: US$ 8.00/milhão de tokens de imagem de entrada e US$ 30.00/milhão de tokens de imagem de saída. Preços por imagem variam: US$ 0.006 (baixa qualidade, 1024x1024) a US$ 0.211 (alta qualidade, 1024x1024).',
    pros: [
      'Excelente entendimento do prompt (segue instruções de texto à risca), com raciocínio pré-geração',
      'Renderiza textos e palavras dentro das imagens com altíssima precisão, incluindo vários idiomas',
      'Totalmente integrado com o ChatGPT (permite refinar imagens conversando)',
      'Acessível gratuitamente via Copilot e com limitações no ChatGPT gratuito',
      'Geração significativamente mais rápida que DALL-E 3 (~8x mais rápido, e 2x mais rápido que GPT Image 1.5)',
      'Arquitetura multimodal nativa, processando texto e imagens na mesma rede neural',
      'Capacidades de edição aprimoradas, com preservação de detalhes em edições localizadas',
      'Qualidade de imagem aprimorada e alta resolução (até 2K nativo, 4K via provedores de terceiros)',
      'Modo "Thinking" para planejamento visual e web search grounding',
      'Consistência em múltiplas imagens (até 10 quadros de um único prompt)'
    ],
    cons: [
      'Resoluções maiores ou qualidades mais altas podem ter custos elevados via API',
      'Ainda em evolução, com potencial para futuras melhorias em consistência de caracteres e conceitos abstratos',
      'Data de corte de conhecimento em dezembro de 2025'
    ],
    score: {
      reasoning: 4.8,
      writing: 1.0,
      coding: 1.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'GPT Image 2, lançado em 21 de abril de 2026, é o modelo de geração de imagens carro-chefe da OpenAI. Integrado ao ChatGPT Plus e disponível gratuitamente via Copilot, ele se destaca por sua velocidade, arquitetura multimodal nativa e capacidade aprimorada de compreender e renderizar prompts complexos, incluindo texto legível em vários idiomas dentro das imagens. Introduz um modo "Thinking" para raciocínio pré-geração e web search grounding, além de oferecer consistência em gerações de múltiplas imagens. É ideal para iniciantes e profissionais que buscam alta qualidade e eficiência na criação de imagens.'
  },
  {
    id: 'midjourney-v6',
    name: 'Midjourney v8.1',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'A partir de US$ 10/mês (Plano Básico, ou US$ 96/ano); Planos Standard US$ 30/mês (ou US$ 288/ano), Pro US$ 60/mês (ou US$ 576/ano), Mega US$ 120/mês (ou US$ 1152/ano). Sem plano gratuito.',
    pros: [
      'Qualidade fotorrealista imbatível no mercado para estilos artísticos e composição cinematográfica',
      'V8.1 é 4-5 vezes mais rápido que versões anteriores em trabalhos padrão; modo HD é 3x mais rápido e 3x mais barato que V8.0',
      'Excelente interpretação de iluminação, texturas e estilos artísticos',
      'Melhor interpretação de prompt e retenção de detalhes em V8.1',
      'Editor web moderno disponível para assinantes, com recursos de edição, organização e unificação de ferramentas',
      'Geração nativa de imagens em 2K (2048x2048) por padrão no modo HD, sem necessidade de upscaling',
      'Modo Raw para maior aderência ao prompt e estética mais natural',
      'Geração de vídeo a partir de imagens (image-to-video) de 5 a 21 segundos',
      'Melhor renderização de mãos e texto dentro das imagens (em comparação com versões anteriores)'
    ],
    cons: [
      'Interface principal ainda roda dentro do Discord, embora o editor web seja uma alternativa e tenha recebido atualizações',
      'Não possui plano de testes gratuito',
      'Ainda pode apresentar dificuldades com renderização de textos muito complexos dentro da imagem, comparado a modelos especializados',
      'Sem API pública oficial',
      'Geração de vídeo é limitada a image-to-video, não suporta texto-para-vídeo diretamente'
    ],
    score: {
      reasoning: 4.0,
      writing: 2.5,
      coding: 1.0,
      speed: 5.0,
      value: 4.5
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney v8.1, lançada em 30 de abril de 2026, é a versão mais rápida e avançada para geração de imagens artísticas e fotorrealistas. Oferece imagens nativas em 2K por padrão no modo HD, interpretação de prompts aprimorada, melhor renderização de texto e mãos, e estética alinhada com as versões anteriores aclamadas. Com um editor web aprimorado para edição e organização, e a capacidade de transformar imagens em vídeos dinâmicos, é ideal para designers e criadores que buscam qualidade visual de altíssimo nível.'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion 3.5',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código aberto (Gratuito para uso local com licença comunitária Stability AI, exige hardware); Pago via API (SD3.5 Large Turbo: US$ 0.040/imagem (4 créditos) | SD3.5 Large: US$ 0.065/imagem (6.5 créditos)). Licença Brand Studio: a partir de US$ 50/mês (5.000 créditos/mês) para uso profissional.',
    pros: [
      'Controle absoluto sobre a geração (ferramentas como ControlNet)',
      'Permite treinar modelos com seu próprio rosto ou produto',
      'Pode rodar 100% grátis localmente no seu computador (para uso não comercial e comercial até US$ 1M de receita anual)',
      'Arquitetura aprimorada Multimodal Diffusion Transformer (MMDiT) para melhor compreensão de texto e precisão ortográfica',
      'Ideal para geração em volume e necessidades de privacidade',
      'Múltiplas variantes (Medium, Large, Large Turbo) otimizadas para diferentes necessidades de hardware e velocidade',
      'SD3.5 Medium é eficiente para hardware de consumidor (9.9GB VRAM)',
      'Otimizado para GPUs NVIDIA RTX (com TensorRT) e AMD Radeon para melhor desempenho e menor consumo de VRAM',
      'Qualidade de imagem superior e aderência ao prompt líder de mercado'
    ],
    cons: [
      'Curva de aprendizado muito acentuada (interface complexa)',
      'Exige uma placa de vídeo dedicada muito potente para uso local eficiente (SD3.5 Large requer 16-24GB VRAM)',
      'Configuração inicial trabalhosa para uso local avançado',
      'Modelos maiores (SD3.5 Large) podem ser mais lentos na renderização em comparação com variantes Turbo ou modelos menores'
    ],
    score: {
      reasoning: 4.0,
      writing: 1.8,
      coding: 1.0,
      speed: 4.5,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'Stable Diffusion 3.5, lançado em outubro de 2024, é a geração mais avançada da Stability AI e o padrão ouro para IA visual open-source em abril de 2026. Construído com arquitetura Multimodal Diffusion Transformer (MMDiT), oferece controle milimétrico sobre a geração de imagens, com notáveis melhorias na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista. Disponível em diversas variantes otimizadas para diferentes hardwares, é ideal para profissionais que buscam personalização, eficiência e uso local (open-weight), aproximando a qualidade de modelos comerciais, mas exigindo investimento em aprendizado e, para as versões maiores, hardware potente.'
  },
  {
    id: 'make-automation',
    name: 'Make.com',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis (1.000 créditos/mês, 2 cenários ativos). Planos pagos (faturamento anual com ~15% de desconto): Core US$ 9/mês (10.000 créditos/mês); Pro US$ 16/mês (10.000+ créditos/mês, execução prioritária); Teams US$ 29/mês por usuário (10.000+ créditos/mês, colaboração). O custo final depende do consumo de créditos (cada operação é um crédito).',
    pros: [
      'Interface visual de arrastar e soltar muito intuitiva',
      'Integração nativa com ChatGPT (GPT-5.5), Claude (Opus 4.7), Google Gemini AI (3.1 Pro) e centenas de APIs',
      'Permite criar roteiros condicionais complexos (se isso, faça aquilo), aprimorado com novos módulos If-else e Merge',
      'Oferece agentes de IA (Make AI Agents) e toolkit de IA para automação inteligente e adaptativa',
      'Registros detalhados de execução para facilitar a depuração e visibilidade com Make Grid',
      'Integração com milhares de aplicativos (mais de 3.000)',
      'Make Grid para visualização e orquestração em tempo real de automações e agentes',
      'Módulos "If-else" e "Merge" para controle de fluxo aprimorado',
      'Histórico de uso de créditos detalhado para monitoramento e otimização de custos',
      'Make AI Web Search para buscas em tempo real em cenários, sem necessidade de APIs externas'
    ],
    cons: [
      'Pode se tornar caro se o volume de execuções mensais (créditos) for muito alto e complexo (cada operação conta como um crédito)',
      'Requer conceitos básicos de lógica de programação (JSON, arrays) para fluxos avançados',
      'Documentação de alguns aplicativos integrados é escassa',
      'Curva de aprendizado acentuada para fluxos avançados',
      'Custo por usuário nos planos Teams pode escalar rapidamente para equipes maiores (preço por usuário)'
    ],
    score: {
      reasoning: 4.7,
      writing: 3.0,
      coding: 4.0,
      speed: 4.8,
      value: 4.8
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Make.com é uma plataforma de automação visual B2B que permite conectar sistemas e integrar as principais IAs (OpenAI, Google Gemini, Anthropic Claude, etc.) sem programação. Lançou os "Make AI Agents" em abril de 2025, transformando-se em uma plataforma de orquestração de fluxos de trabalho inteligentes que tomam decisões adaptativas. Oferece uma interface intuitiva, o "Make Grid" para visualização em tempo real das automações, e "Make AI Web Search" para dados em tempo real. Possui funcionalidades avançadas para automação de rotinas empresariais, desde a geração de conteúdo até a triagem de emails, com novos módulos de controle de fluxo "If-else" e "Merge".'
  }
];