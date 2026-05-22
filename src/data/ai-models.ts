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
    pricing: 'US$ 20/mês (aprox. R$ 100/mês no Brasil, com preço regionalizado); Plano gratuito com GPT-5.5 Instant e ChatGPT Go (R$ 39,99/mês no Brasil) disponíveis com limitações. ChatGPT Pro: US$ 100/mês ou US$ 200/mês, com acesso a modelos como o1-pro.',
    pros: [
      'Altíssima velocidade de processamento',
      'Excelente análise de arquivos e dados complexos',
      'Ecossistema rico de plugins (GPTs personalizados)',
      'Capacidades multimodais aprimoradas para texto, áudio e imagem',
      'Recursos de memória para respostas mais personalizadas e contínuas',
      'Blocos de código interativos e editáveis inline',
      'Melhor experiência do usuário e interface intuitiva',
      'Integração perfeita com DALL-E para geração de imagens',
      'Modo de voz avançado',
      'Deep Research expandido',
      'Janela de contexto expandida para 256k tokens no modo Thinking',
      'Acesso a GPT-5.5 Thinking para raciocínio complexo e análise de múltiplos formatos de mídia',
      'Versão GPT-5.5 Instant como modelo padrão para usuários gratuitos, mais inteligente e precisa'
    ],
    cons: [
      'Preço em dólar pode ser alto para o mercado brasileiro, mesmo com preço regionalizado para Plus',
      'Limitação de mensagens por hora no plano gratuito e no plano Go',
      'Pode alucinar em códigos complexos',
      'Plano ChatGPT Go pode ter raciocínio limitado para tarefas complexas',
      'Alto custo operacional para uso da API',
      'Data de corte de conhecimento (embora em constante atualização, ainda existe um ponto de corte para o treinamento base do modelo)',
      'Limites de uso para o plano Plus'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.7,
      coding: 4.8,
      speed: 4.9,
      value: 4.5
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'A ferramenta de inteligência artificial mais famosa do mundo. O plano Plus oferece acesso ao GPT-5.5 Thinking, ideal para tarefas complexas de produtividade diária, escrita comercial, geração de ideias e análises quantitativas de arquivos, com capacidades multimodais aprimoradas. O modelo gratuito usa o GPT-5.5 Instant, mais rápido e preciso. Recebeu atualizações significativas em personalização, análise de dados, e agora conta com blocos de código interativos e um modo de voz avançado.'
  },
  {
    id: 'claude-sonnet',
    name: 'Claude 3.5 Sonnet',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'US$ 20/mês (para plano Pro, com maiores limites de uso); Plano gratuito disponível em Claude.ai e no app iOS. API: US$ 3/milhão de tokens de entrada e US$ 15/milhão de tokens de saída.',
    pros: [
      'Melhor inteligência artificial para programação da atualidade, superando Claude 3 Opus em codificação (64% de problemas resolvidos vs 38%)',
      'Estilo de escrita extremamente natural e humanizado, com melhor compreensão de nuances e humor',
      'Excelente interpretação de contexto e lógica analítica, superando Claude 3 Opus em inteligência',
      'Opera o dobro da velocidade do Claude 3 Opus',
      'Capacidades de uso de computador (em beta público)',
      'Capacidades de visão avançadas, superando Claude 3 Opus em benchmarks de visão, interpretando gráficos e transcrevendo texto de imagens imperfeitas',
      'Recurso "Artifacts" para criar e editar conteúdo (código, documentos, designs) em tempo real em um workspace colaborativo'
    ],
    cons: [
      'Plano gratuito muito restritivo (bloqueia rápido por limite)',
      'Sem geração de imagem nativa',
      'Menor ecossistema de integrações em comparação com a OpenAI',
      'Data de corte de conhecimento em abril de 2024'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.8,
      coding: 5.0,
      speed: 4.6,
      value: 4.7
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Lançado em junho de 2024, Claude 3.5 Sonnet é o modelo mais recente da Anthropic, redefinindo o padrão de inteligência para tarefas de raciocínio, codificação e compreensão. Supera o Claude 3 Opus em inteligência e opera o dobro da velocidade. É reconhecido por sua excelência em programação, escrita natural e capacidades de visão aprimoradas. Introduz o recurso "Artifacts" para um workspace colaborativo e habilidades experimentais de uso de computador. Possui uma janela de contexto de 200K tokens e data de corte de conhecimento em abril de 2024.'
  },
  {
    id: 'gemini-pro',
    name: 'Gemini 1.5 Pro',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Grátis no AI Studio. API para Gemini 1.5 Pro: A partir de US$ 1.25/milhão de tokens de entrada e US$ 2.50/milhão de tokens de saída para prompts até 128K tokens; US$ 2.50/milhão de tokens de entrada e US$ 5.00/milhão de tokens de saída para prompts maiores. O plano Gemini Advanced para consumidores inclui acesso ao Gemini 1.5 Pro e em breve ao Gemini 3.5 Pro, a US$ 19.99/mês. Gemini 3.5 Flash também está disponível com preços competitivos.',
    pros: [
      'Janela de contexto de 1 milhão de tokens (disponível para todos os desenvolvedores), escalável até 2 milhões de tokens para alguns usuários',
      'Integração perfeita com o ecossistema Google (Docs, Drive, Gmail) e agentes de IA proativos',
      'Nível gratuito do Google AI Studio é muito generoso',
      'Saídas 2x mais rápidas e 3x menor latência',
      'Qualidade geral aprimorada, com maiores ganhos em matemática, contexto longo e visão',
      'Redução significativa de preços da API para prompts menores',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição',
      'Recurso de "Context Caching" para reduzir custos e latência em prompts que reutilizam tokens',
      'Agentes de IA proativos como "Daily Brief" e "Gemini Spark" para automação de tarefas em segundo plano e integração com apps Google',
      'Code execution capabilities na API Gemini'
    ],
    cons: [
      'Velocidade de resposta pode ser ligeiramente menor para prompts muito longos em comparação com o Gemini 1.5 Flash',
      'Interface do Gemini Advanced às vezes simplifica respostas técnicas',
      'Filtros de segurança às vezes são excessivamente rígidos',
      'Data de corte de conhecimento para treinamento do modelo em torno de novembro de 2023 / agosto de 2024, embora com acesso à web para informações atuais'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.5,
      coding: 4.6,
      speed: 4.7,
      value: 4.9
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 1.5 Pro da Google é um modelo multimodal poderoso, com uma janela de contexto de 1 milhão de tokens (escalável para 2 milhões para desenvolvedores), capaz de processar horas de vídeo, audio, imagens e grandes bases de código em uma única requisição. É ideal para análise integrada de múltiplos formatos de mídia, com raciocínio aprimorado, saídas mais rápidas e preços de API significativamente reduzidos. Novas funcionalidades incluem agentes de IA proativos e execução de código. A Google também lançou o Gemini 3.5 Flash e anunciou o Gemini 3.5 Pro, com foco em inteligência de fronteira para agentes e tarefas de codificação.'
  },
  {
    id: 'llama-3',
    name: 'Llama 4 (Maverick/Scout)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: '100% Gratuito (Código aberto/Open Weight para uso local, requer hardware) / Pago via API (Llama 4 Maverick: a partir de US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída com provedores gerenciados). Llama 4 Scout oferece uma janela de contexto de 10M.',
    pros: [
      'Código "open-weight", pode rodar localmente no seu computador',
      'Arquitetura Mixture of Experts (MoE) para melhor qualidade e eficiência',
      'Janela de contexto massiva (Llama 4 Scout suporta até 10 milhões de tokens)',
      'Suporte multimodal nativo (texto e imagem)',
      'Melhor raciocínio e compreensão em múltiplos idiomas',
      'Custos de API significativamente mais baixos para Llama 4 em comparação com Llama 3.1',
      'Modelos como Llama 4 Scout podem rodar em uma única GPU H100 (com quantização INT4)',
      'Desempenho comparável ou superior aos principais modelos fechados em benchmarks específicos (ex: Llama 4 Behemoth, embora ainda em treino)',
      'Ferramentas de proteção como Llama Guard 4 e Prompt Guard 2 para segurança e detecção de prompt injections',
      'SDK em Python e TypeScript e compatibilidade com OpenAI SDK para API'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade',
      'Requer re-treinamento para migrar fine-tunes da versão anterior',
      'Ainda sem acesso nativo à internet na versão bruta',
      'Capacidades analíticas podem variar dependendo do tamanho do modelo e implementação',
      'Pode ser mais complexo operacionalmente devido à arquitetura MoE',
      'Não é "open-source" no sentido estrito, mas "open-weight", com política de uso aceitável'
    ],
    score: {
      reasoning: 4.8,
      writing: 4.4,
      coding: 4.7,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://meta.ai',
    description: 'Lançado em abril de 2025, o Llama 4 (Scout e Maverick) representa a mais recente geração de modelos "open-weight" da Meta, com arquitetura Mixture of Experts (MoE) e suporte multimodal nativo (texto e imagem). Com janelas de contexto massivas (Llama 4 Scout até 10 milhões de tokens), é projetado para alta capacidade e flexibilidade. Oferece melhor raciocínio, compreensão multilíngue e custos de API reduzidos, rivalizando com modelos proprietários de ponta em várias métricas. É ideal para desenvolvedores e empresas que buscam controle e inovação em cargas de trabalho multimodais e de longo contexto.'
  },
  {
    id: 'gpt-image-1-5',
    name: 'GPT Image 1.5',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (com GPT-5.5 Thinking); Grátis no Copilot (com limitações); API: A partir de US$ 0.009/imagem (para GPT Image 1.5 Low Quality) até US$ 0.20/imagem (para alta resolução). (GPT Image 1.5 é o modelo carro-chefe mais recente da OpenAI para geração de imagens, substituindo DALL-E 3 em maio de 2026).',
    pros: [
      'Excelente entendimento do prompt (segue instruções de texto à risca)',
      'Renderiza textos e palavras dentro das imagens com alta precisão',
      'Totalmente integrado com o ChatGPT (permite refinar imagens conversando)',
      'Acessível gratuitamente via Copilot e com limitações no ChatGPT gratuito',
      'Geração 4 vezes mais rápida que DALL-E 3',
      'Arquitetura multimodal nativa, processando texto e imagens na mesma rede neural',
      'Capacidades de edição aprimoradas',
      'Qualidade de imagem aprimorada e alta resolução'
    ],
    cons: [
      'Resoluções maiores ou qualidades mais altas podem ter custos elevados via API',
      'Ainda em evolução, com potencial para futuras melhorias em multimodalidade e velocidade'
    ],
    score: {
      reasoning: 4.3,
      writing: 1.0,
      coding: 1.0,
      speed: 4.8,
      value: 4.5
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'GPT Image 1.5 é o modelo de geração de imagens carro-chefe da OpenAI, lançado em substituição ao DALL-E 3 em maio de 2026. Integrado ao ChatGPT Plus e disponível gratuitamente via Copilot, ele se destaca pela sua velocidade (4x mais rápido que DALL-E 3), arquitetura multimodal nativa e capacidade aprimorada de compreender e renderizar prompts complexos, incluindo texto legível dentro das imagens. É ideal para iniciantes e profissionais que buscam alta qualidade e eficiência na criação de imagens.'
  },
  {
    id: 'midjourney-v6',
    name: 'Midjourney v8.1',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'A partir de US$ 10/mês (Plano Básico, ou US$ 96/ano); Planos Standard US$ 30/mês (ou US$ 288/ano), Pro US$ 60/mês (ou US$ 576/ano), Mega US$ 120/mês (ou US$ 1152/ano). Sem plano gratuito.',
    pros: [
      'Qualidade fotorrealista imbatível no mercado',
      'V8.1 é 4-5 vezes mais rápido que versões anteriores',
      'Excelente interpretação de iluminação, texturas e estilos artísticos',
      'Melhor interpretação de prompt e retenção de detalhes em V8.1',
      'Editor web moderno disponível para assinantes, com recursos de edição e organização de imagens',
      'Geração nativa de imagens em 2K (2048x2048) por padrão no modo HD, sem necessidade de upscaling',
      'Modo Raw para maior aderência ao prompt e estética mais natural',
      'Geração de vídeo a partir de imagens (image-to-video) de 5 a 21 segundos',
      'Melhor renderização de mãos e texto dentro das imagens (em comparação com versões anteriores)'
    ],
    cons: [
      'Interface principal ainda roda dentro do Discord, embora o editor web seja uma alternativa',
      'Não possui plano de testes gratuito',
      'Ainda pode apresentar dificuldades com renderização de textos muito complexos dentro da imagem',
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
    description: 'Midjourney v8.1, lançada em abril de 2026, é a versão mais rápida e avançada para geração de imagens artísticas e fotorrealistas. Oferece imagens nativas em 2K por padrão no modo HD, interpretação de prompts aprimorada, melhor renderização de texto e mãos, e estética alinhada com as versões anteriores aclamadas. É ideal para designers e criadores que buscam qualidade visual de altíssimo nível, com recursos de edição na web e a capacidade de transformar imagens em vídeos dinâmicos.'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion 3.5',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código aberto (Gratuito para uso local com licença comunitária Stability AI, exige hardware); Pago via API (a partir de US$ 0.040/imagem para SD3.5 Large Turbo, US$ 0.065/imagem para SD3.5 Large); Licença Creator: a partir de US$ 20/mês para uso comercial (com limites).',
    pros: [
      'Controle absoluto sobre a geração (ferramentas como ControlNet)',
      'Permite treinar modelos com seu próprio rosto ou produto',
      'Pode rodar 100% grátis localmente no seu computador',
      'Arquitetura aprimorada Multimodal Diffusion Transformer (MMDiT) para melhor compreensão de texto e precisão ortográfica',
      'Ideal para geração em volume e necessidades de privacidade',
      'Múltiplas variantes (Medium, Large, Large Turbo) otimizadas para diferentes necessidades de hardware e velocidade',
      'SD3.5 Medium é eficiente para hardware de consumidor (9.9GB VRAM)',
      'Otimizado para GPUs NVIDIA RTX (com TensorRT) e AMD Radeon para melhor desempenho e menor consumo de VRAM',
      'Qualidade de imagem superior e aderência ao prompt líder de mercado'
    ],
    cons: [
      'Curva de aprendizado muito acentuada (interface complexa)',
      'Exige uma placa de vídeo dedicada (Nvidia de preferência) muito potente para uso local eficiente',
      'Configuração inicial trabalhosa',
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
    description: 'Stable Diffusion 3.5, lançado em outubro de 2024, é a geração mais avançada da Stability AI. Construído com arquitetura Multimodal Diffusion Transformer (MMDiT), ele oferece controle milimétrico sobre a geração de imagens, com notáveis melhorias na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista. Disponível em diversas variantes otimizadas para diferentes hardwares, é ideal para profissionais que buscam personalização, eficiência e uso local (open-weight), aproximando a qualidade de modelos comerciais, mas exigindo investimento em aprendizado e, para as versões maiores, hardware potente.'
  },
  {
    id: 'make-automation',
    name: 'Make.com',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis (1.000 créditos/mês, 2 cenários ativos) / Planos pagos a partir de US$ 10.59/mês (Core, 10.000 créditos/mês, faturado anualmente); Pro US$ 18.82/mês; Teams US$ 34.12/mês. Faturamento anual oferece ~15% de desconto. O custo final depende do consumo de créditos.',
    pros: [
      'Interface visual de arrastar e soltar muito intuitiva',
      'Integração nativa com ChatGPT, Claude, Google Gemini AI, Perplexity AI, Anthropic Claude, Deepseek e centenas de APIs',
      'Permite criar roteiros condicionais complexos (se isso, faça aquilo), aprimorado com novos módulos If-else e Merge',
      'Oferece agentes de IA e toolkit de IA para automação inteligente e adaptativa',
      'Registros detalhados de execução para facilitar a depuração e visibilidade com Make Grid',
      'Integração com milhares de aplicativos',
      'Make Grid para visualização e orquestração em tempo real de automações e agentes',
      'Módulos "If-else" e "Merge" para controle de fluxo aprimorado',
      'Histórico de uso de créditos detalhado para monitoramento e otimização de custos',
      'Make AI Web Search para buscas em tempo real em cenários'
    ],
    cons: [
      'Pode se tornar caro se o volume de execuções mensais (créditos) for muito alto e complexo',
      'Requer conceitos básicos de lógica de programação (JSON, arrays) para fluxos avançados',
      'Documentação de alguns aplicativos integrados é escassa',
      'Curva de aprendizado acentuada para fluxos avançados',
      'Custo por usuário nos planos Teams pode escalar rapidamente para equipes maiores'
    ],
    score: {
      reasoning: 4.7,
      writing: 3.0,
      coding: 4.0,
      speed: 4.8,
      value: 4.8
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Make.com é uma plataforma de automação visual B2B que permite conectar sistemas e integrar as principais IAs (OpenAI, Google Gemini, Anthropic Claude, etc.) sem programação. Com a introdução dos "Agentes de IA", a plataforma evoluiu para orquestrar fluxos de trabalho inteligentes que tomam decisões adaptativas. Oferece uma interface intuitiva, a ferramenta Make Grid para visualização em tempo real das automações, e funcionalidades avançadas para automação de rotinas empresariais, desde a geração de conteúdo até a triagem de emails.'
  }
];