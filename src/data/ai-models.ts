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
    pricing: 'US$ 20/mês para o plano ChatGPT Plus (inclui GPT-4o e DALL-E 3); Plano gratuito disponível com acesso ao GPT-4o e recursos limitados. API GPT-4o: a partir de US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída para GPT-4o Mini (substitui GPT-3.5 Turbo como modelo base); GPT-4o padrão tem custos mais elevados na API.',
    pros: [
      'Capacidades multimodais unificadas (texto, áudio e imagem)',
      'Interações de voz em tempo real com baixa latência',
      'Visão avançada e raciocínio visual',
      'Disponível para usuários gratuitos com algumas restrições',
      'Melhor experiência do usuário e interface intuitiva',
      'Geração de imagens integrada (DALL-E 3) e possibilidade de refinar imagens por conversação',
      'Significativamente mais rápido que modelos anteriores',
      'Melhor desempenho em idiomas diferentes do inglês'
    ],
    cons: [
      'Custo operacional da API pode ser alto para projetos menores',
      'Data de corte de conhecimento para treinamento do modelo em outubro de 2023',
      'Pode alucinar e apresentar vieses, como outros modelos generativos de IA',
      'A maior parte dos benefícios do GPT-4o foi direcionada aos usuários gratuitos, o que pode decepcionar assinantes Plus mais antigos',
      'Pode ter uma curva de aprendizado mais acentuada para recursos avançados'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.8,
      coding: 4.9,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, com o modelo GPT-4o, é a ferramenta de IA multimodal carro-chefe da OpenAI, lançada em maio de 2024. Ele processa e gera informações em texto, áudio e imagem de forma coesa e em tempo real, oferecendo respostas de baixa latência e recursos avançados de visão. Disponível para usuários gratuitos com algumas limitações e para assinantes Plus com acesso total, o GPT-4o se destaca pela sua velocidade e capacidade de compreender e interagir com nuances emocionais. Integra-se perfeitamente com a geração de imagens DALL-E 3, permitindo uma experiência criativa e de produtividade abrangente.'
  },
  {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Grátis no Claude.ai e no aplicativo iOS; Plano Pro e Team oferecem limites de uso mais altos. API: US$ 3/milhão de tokens de entrada e US$ 15/milhão de tokens de saída.',
    pros: [
      'Define novos padrões de referência para raciocínio de nível de pós-graduação, conhecimento de nível de graduação e proficiência em codificação',
      'Supera o Claude 3 Opus em codificação, resolvendo 64% dos problemas em avaliação interna',
      'Estilo de escrita extremamente natural e humanizado, com melhor compreensão de nuances e humor',
      'Opera o dobro da velocidade do Claude 3 Opus, com custos mais baixos',
      'Capacidades de visão de ponta, superando Claude 3 Opus em benchmarks, interpretando gráficos e transcrevendo texto de imagens imperfeitas',
      'Pode escrever, editar e executar código de forma autônoma com raciocínio sofisticado',
      'Janela de contexto de 200K tokens',
      'Ideal para tarefas complexas de atendimento ao cliente e orquestração de fluxos de trabalho em várias etapas'
    ],
    cons: [
      'Plano gratuito pode ser restritivo em limites de uso',
      'Sem geração de imagem nativa (foco em compreensão visual e texto/código)',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança',
      'Alto custo operacional da API para uso intensivo de saída',
      'Data de corte de conhecimento em 30 de abril de 2024'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 4.9,
      value: 4.8
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Lançado em junho de 2024, Claude 3.5 Sonnet é o modelo de ponta da Anthropic, oferecendo um equilíbrio ideal entre inteligência e velocidade. Ele estabelece novos benchmarks em raciocínio, conhecimento e codificação, superando o Claude 3 Opus. O modelo se destaca em escrita natural, compreensão de nuances e capacidades avançadas de visão, operando em dobro da velocidade de seu predecessor. Com uma janela de contexto de 200K tokens, é ideal para tarefas profissionais complexas, como codificação, atendimento ao cliente e análise de dados.'
  },
  {
    id: 'gemini-1-5-pro',
    name: 'Gemini 1.5 Pro',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano Google AI Pro (anteriormente Gemini Advanced) para consumidores: US$ 19.99/mês. Grátis no Google AI Studio para testes. API: US$ 7.00/milhão de tokens de entrada e US$ 21.00/milhão de tokens de saída.',
    pros: [
      'Modelo mais poderoso e versátil do Google, com melhor equilíbrio entre qualidade, desempenho e custo',
      'Janela de contexto de até 2 milhões de tokens, ideal para processamento de grandes volumes de dados (documentos, código, vídeo, áudio)',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição',
      'Desempenho superior em tarefas complexas que exigem raciocínio profundo, instrução nuances e escrita criativa',
      'Integração aprimorada com o ecossistema Google (Docs, Drive, Gmail)',
      'Suporte a modo JSON e chamada de função na API',
      'Arquitetura Mixture-of-Experts (MoE) para maior eficiência computacional',
      'Entendimento aprimorado de imagem e vídeo, além de compreensão nativa de áudio'
    ],
    cons: [
      'Ligeiramente mais lento que o Gemini 1.5 Flash',
      'Mais caro que o Gemini 1.5 Flash na API',
      'Interface do Google AI Pro (anteriormente Gemini Advanced) às vezes simplifica respostas técnicas [usuário original]',
      'Filtros de segurança podem ser excessivamente rígidos [usuário original]'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.8,
      coding: 5.0,
      speed: 4.7,
      value: 4.8
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 1.5 Pro é o modelo de linguagem multimodal mais avançado do Google, lançado em fevereiro de 2024 (com atualizações contínuas). Ele se destaca por sua vasta janela de contexto de até 2 milhões de tokens, permitindo a análise de quantidades massivas de informações em texto, imagem, áudio e vídeo. O modelo é otimizado para raciocínio complexo, geração de conteúdo e codificação, com desempenho superior em tarefas que exigem compreensão profunda e nuances. É uma ferramenta versátil para desenvolvedores e empresas, oferecendo integração profunda com o ecossistema Google.'
  },
  {
    id: 'llama-3-1',
    name: 'Llama 3.1 (8B, 70B, 405B)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: '100% Gratuito (Código "open-weight" para uso local, requer hardware). API para Llama 3.1 8B: US$ 0.02/milhão de tokens de entrada e US$ 0.05/milhão de tokens de saída. API para Llama 3.1 405B (base): US$ 4.00/milhão de tokens de entrada e US$ 4.00/milhão de tokens de saída (a partir de maio de 2026).',
    pros: [
      'Código "open-weight", pode rodar localmente no seu computador',
      'Llama 3.1 lançado em julho de 2024, com versões 8B, 70B e 405B',
      'Janela de contexto expandida para 128K tokens (em comparação com 8K do Llama 3 original)',
      'Capacidades multilingues em oito idiomas, incluindo português',
      'Ferramentas de uso de estado da arte e raciocínio aprimorado',
      'Licença mais permissiva, permitindo o uso de outputs para melhorar outros modelos',
      'Novos modelos de segurança como Llama Guard 3 e Prompt Guard para detecção de injeções',
      'Llama 3.1 405B é o maior e mais capaz modelo open-source, rivalizando com os melhores modelos proprietários',
      'Desempenho de codificação aprimorado',
      'Ecosistema robusto com mais de 25 parceiros (AWS, NVIDIA, Google Cloud)',
      'Suporte para geração de dados sintéticos e destilação de modelos'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade',
      'Custos de infraestrutura aumentam rapidamente para modelos maiores',
      'Requer conhecimento técnico para fine-tuning e implantação',
      'Não é "plug-and-play" automaticamente para todas as tarefas',
      'Ainda sem acesso nativo à internet na versão bruta [usuário original]'
    ],
    score: {
      reasoning: 4.8,
      writing: 4.6,
      coding: 4.8,
      speed: 4.8,
      value: 5.0
    },
    affiliateUrl: 'https://meta.ai',
    description: 'Llama 3.1, lançado pela Meta em julho de 2024, é a mais recente geração de modelos "open-weight", disponível em tamanhos de 8B, 70B e 405B parâmetros. Com uma arquitetura que permite janelas de contexto de 128K tokens e suporte a oito idiomas, ele se destaca em raciocínio, uso de ferramentas e codificação. O Llama 3.1 405B é considerado o modelo open-source mais capaz, rivalizando com os modelos proprietários de ponta. É ideal para desenvolvedores e empresas que buscam controle e flexibilidade em cargas de trabalho multimodais e de longo contexto, com custos de API competitivos.'
  },
  {
    id: 'dall-e-3',
    name: 'DALL-E 3',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês); Grátis no Microsoft Copilot (com limitações). API: a partir de US$ 0.04 por imagem.',
    pros: [
      'Excelente compreensão do prompt, inclusive prompts complexos e com múltiplos componentes',
      'Integração com GPT-4 para aprimorar e reescrever prompts automaticamente',
      'Totalmente integrado com o ChatGPT (permite refinar imagens conversando)',
      'Capacidade aprimorada de renderizar textos e palavras dentro das imagens com alta precisão',
      'Gera resultados criativos, detalhados e visualmente impressionantes',
      'Mantém consistência visual em séries de imagens relacionadas',
      'Acessível para iniciantes e profissionais, com interface intuitiva'
    ],
    cons: [
      'Velocidade de geração de imagem pode ser mais lenta (20-45 segundos) em comparação com modelos mais recentes',
      'Pode ter dificuldades com interpretação de frases muito sutis ou composições excessivamente complexas',
      'Ainda pode lutar com tipografia complexa para blocos de texto mais longos',
      'Pode ficar aquém da qualidade fotorrealista de outros geradores em certos casos',
      'Oferece menos controle preciso sobre detalhes como layout e posicionamento de caracteres',
      'Resultados podem parecer excessivamente polidos ou ligeiramente genéricos',
      'A iteração pode levar tempo para cenas complexas',
      'Data de corte de conhecimento em outubro de 2023'
    ],
    score: {
      reasoning: 4.7,
      writing: 1.0,
      coding: 1.0,
      speed: 4.0,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'DALL-E 3, lançado pela OpenAI em outubro de 2023, é o gerador de imagens carro-chefe da empresa, integrado ao ChatGPT Plus e disponível gratuitamente via Copilot. Ele se destaca pela excelente compreensão de prompts complexos, utilizando a inteligência do GPT-4 para refinar as instruções e criar imagens detalhadas e de alta qualidade. Com sua capacidade de renderizar texto legível dentro das imagens e permitir a iteração conversacional, DALL-E 3 é uma ferramenta poderosa para criadores, designers e profissionais de marketing que buscam visualizar ideias de forma eficiente e criativa.'
  },
  {
    id: 'midjourney',
    name: 'Midjourney v8.1',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'A partir de US$ 10/mês (Plano Básico, ou US$ 96/ano); Planos Standard US$ 30/mês (ou US$ 288/ano), Pro US$ 60/mês (ou US$ 576/ano), Mega US$ 120/mês (ou US$ 1152/ano). Sem plano gratuito no site oficial, mas pode ser testado gratuitamente no Meta.ai com limitações.',
    pros: [
      'Qualidade fotorrealista imbatível no mercado para estilos artísticos e composição cinematográfica',
      'V8.1 é 4-5 vezes mais rápido que versões anteriores em trabalhos padrão; modo HD é 3x mais rápido e 3x mais barato que V8.0',
      'Excelente interpretação de iluminação, texturas e estilos artísticos',
      'Melhor interpretação de prompt e retenção de detalhes em V8.1',
      'Editor web moderno disponível para assinantes, com recursos de edição, organização e unificação de ferramentas',
      'Geração nativa de imagens em 2K (2048x2048) por padrão no modo HD, sem necessidade de upscaling',
      'Modo Raw para maior aderência ao prompt e estética mais natural',
      'Geração de vídeo a partir de imagens (image-to-video) de 5 a 21 segundos',
      'Melhor renderização de mãos e texto dentro das imagens (em comparação com versões anteriores)',
      'Direitos de uso comercial inclusos em todos os planos pagos'
    ],
    cons: [
      'Interface principal ainda roda dentro do Discord, embora o editor web seja uma alternativa e tenha recebido atualizações',
      'Não possui plano de testes gratuito no site oficial',
      'Ainda pode apresentar dificuldades com renderização de textos muito complexos dentro da imagem',
      'Sem API pública oficial',
      'Geração de vídeo é limitada a image-to-video, não suporta texto-para-vídeo diretamente',
      'Custos podem escalar para alto volume de uso devido ao tempo de GPU'
    ],
    score: {
      reasoning: 4.0,
      writing: 2.5,
      coding: 1.0,
      speed: 5.0,
      value: 4.5
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney v8.1, lançada em 30 de abril de 2026 (conforme contexto Turbina IA), é a versão mais rápida e avançada para geração de imagens artísticas e fotorrealistas. Oferece imagens nativas em 2K no modo HD, interpretação de prompts aprimorada, melhor renderização de texto e mãos, e uma estética visual inigualável. Com um editor web moderno para edição e organização, e a capacidade de transformar imagens em vídeos dinâmicos, é a ferramenta ideal para designers e criadores que buscam qualidade visual de altíssimo nível.'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion 3.0 (Medium/Large/Turbo)',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código aberto (Gratuito para uso local com licença comunitária Stability AI, exige hardware). Licença Creator: a partir de US$ 20/mês para empresas menores. Pago via API: SD3.0 Large: US$ 0.065/imagem. SD3.0 Turbo: US$ 0.040/imagem.',
    pros: [
      'Controle absoluto sobre a geração (via ferramentas como ControlNet) [usuário original]',
      'Permite treinar modelos com seu próprio rosto ou produto [usuário original]',
      'Pode rodar 100% grátis localmente no seu computador (para uso não comercial e comercial até US$ 1M de receita anual)',
      'Arquitetura aprimorada Multimodal Diffusion Transformer (MMDiT) para melhor compreensão de texto e precisão ortográfica',
      'Ideal para geração em volume e necessidades de privacidade [usuário original]',
      'Múltiplas variantes (Medium, Large, Large Turbo) otimizadas para diferentes necessidades de hardware e velocidade',
      'SD3.0 demonstrou excelência consistente em seguir prompts, tipografia e estética visual, superando concorrentes',
      'Qualidade de imagem superior e aderência ao prompt',
      'Pesos do SD3 Medium liberados para uso público em junho de 2024'
    ],
    cons: [
      'Curva de aprendizado muito acentuada (interface complexa para uso avançado) [usuário original]',
      'Exige uma placa de vídeo dedicada muito potente para uso local eficiente (SD3 Large requer VRAM elevada) [usuário original]',
      'Configuração inicial trabalhosa para uso local avançado [usuário original]',
      'Modelos maiores (SD3 Large) podem ser mais lentos na renderização em comparação com variantes Turbo ou modelos menores [usuário original]'
    ],
    score: {
      reasoning: 4.0,
      writing: 1.8,
      coding: 1.0,
      speed: 4.5,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'Stable Diffusion 3.0, com suas variantes Medium, Large e Turbo, é a geração mais avançada da Stability AI e o padrão ouro para IA visual open-source. Lançado com a arquitetura Multimodal Diffusion Transformer (MMDiT), oferece controle milimétrico sobre a geração de imagens, com notáveis melhorias na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista. Disponível para uso local gratuito e via API, é ideal para profissionais que buscam personalização, eficiência e controle, aproximando a qualidade de modelos comerciais, mas exigindo investimento em aprendizado e hardware potente para as versões maiores.'
  },
  {
    id: 'make-automation',
    name: 'Make.com',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis (1.000 créditos/mês, 2 cenários ativos). Planos pagos (faturamento anual com ~15% de desconto): Core US$ 9/mês (10.000 créditos/mês); Pro US$ 16/mês (10.000+ créditos/mês, execução prioritária); Teams US$ 29/mês por usuário (10.000+ créditos/mês, colaboração). O custo final depende do consumo de créditos (cada operação é um crédito).',
    pros: [
      'Interface visual de arrastar e soltar muito intuitiva',
      'Integração nativa com os principais modelos de IA (ChatGPT GPT-4o, Claude 3.5 Sonnet, Google Gemini 1.5 Pro) e centenas de APIs',
      'Permite criar roteiros condicionais complexos (se isso, faça aquilo), aprimorado com módulos If-else e Merge',
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
    description: 'Make.com é uma plataforma de automação visual B2B que permite conectar sistemas e integrar as principais IAs (OpenAI GPT-4o, Google Gemini 1.5 Pro, Anthropic Claude 3.5 Sonnet, etc.) sem programação. Lançou os "Make AI Agents" em abril de 2025 (conforme contexto Turbina IA), transformando-se em uma plataforma de orquestração de fluxos de trabalho inteligentes que tomam decisões adaptativas. Oferece uma interface intuitiva, o "Make Grid" para visualização em tempo real das automações, e "Make AI Web Search" para dados em tempo real. Possui funcionalidades avançadas para automação de rotinas empresariais, desde a geração de conteúdo até a triagem de emails, com módulos de controle de fluxo aprimorados.'
  }
];