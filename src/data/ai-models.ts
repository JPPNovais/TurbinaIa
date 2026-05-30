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
    name: 'ChatGPT Plus (GPT-4o, GPT-4o mini)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (acesso limitado a GPT-4o e GPT-4o mini, DALL-E limitado, navegação web e uploads de arquivos); ChatGPT Plus: US$ 20/mês (acesso total a GPT-4o, 5x mais mensagens, DALL-E ilimitado, Advanced Voice Mode e Advanced Data Analysis); ChatGPT Pro: US$ 200/mês (acesso ilimitado a GPT-4o, modo "o1 Pro", 128K de contexto, desempenho mais rápido, geração de vídeo Sora limitada); ChatGPT Team: US$ 25/usuário/mês (cobrança anual, mínimo de 2 usuários) ou US$ 30/usuário/mês (cobrança mensal, mínimo de 2 usuários; inclui workspace, admin console e dados não usados para treinamento); ChatGPT Enterprise: Preço personalizado (contato com vendas; inclui tudo do Team, mais SSO, SCIM, retenção de dados personalizada, suporte prioritário e SLAs). API para GPT-4o: US$ 2.50/milhão de tokens de entrada e US$ 10.00/milhão de tokens de saída. API para GPT-4o mini: US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída.',
    pros: [
      'GPT-4o (lançado em maio de 2024) é o modelo principal da OpenAI, nativamente multimodal (texto, áudio, imagem, vídeo), oferecendo respostas mais rápidas, inteligentes e precisas.',
      'GPT-4o mini (lançado em julho de 2024) é uma versão menor e mais econômica de GPT-4o, ideal para uso em larga escala e aplicações de alto volume através da API.',
      'Acesso a recursos avançados como Advanced Data Analysis (anteriormente Code Interpreter), navegação web, Custom GPTs, Deep Research (no Plus e superior), e geração de imagens através do DALL-E 3 (integrado no Plus).',
      'Contexto de 128K tokens para GPT-4o, permitindo processar documentos mais longos.',
      'O Advanced Voice Mode com GPT-4o permite interações de voz mais naturais e adaptáveis, incluindo tradução em tempo real.',
      'Dados de usuários dos planos Team e Enterprise não são usados para treinamento de modelos da OpenAI.'
    ],
    cons: [
      'Usuários dos planos gratuito e Plus têm limites de mensagens, que podem ser atingidos rapidamente durante picos de uso.',
      'O custo da API para GPT-4o é significativamente mais alto do que o de GPT-4o mini.',
      'O conhecimento do GPT-4o tem um corte em outubro de 2023.',
      'A geração de vídeo Sora está disponível de forma limitada/preview apenas em planos superiores (Pro).'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelos modelos GPT-4o e GPT-4o mini (lançados em maio e julho de 2024, respectivamente), representa o auge da inteligência artificial generativa da OpenAI. O GPT-4o é o modelo mais capaz da empresa, otimizado para tarefas complexas de codificação, pesquisa e análise de dados, sendo nativamente omnimodal (texto, imagem, áudio e vídeo em uma arquitetura unificada). A plataforma oferece acesso a recursos como Advanced Data Analysis, navegação web, Custom GPTs, e geração de imagens através do DALL-E 3. Assinantes do ChatGPT Plus (US$ 20/mês) recebem acesso prioritário e ilimitado aos modelos mais recentes, juntamente com recursos como Advanced Data Analysis, navegação web, Custom GPTs e DALL-E 3. Planos Pro (US$ 200/mês) oferecem opções com limites e capacidades superiores para usuários intensivos e corporativos, com custos de API variáveis por modelo.'
  },
  {
    id: 'claude-sonnet-4-6',
    name: 'Claude 3.5 Sonnet (e Claude 3 Opus, Claude 3 Haiku)',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso a Claude 3.5 Sonnet e Claude 3 Haiku, com limites de uso diários). Plano Pro: US$ 20/mês (ou US$ 17/mês anual) com acesso a todos os modelos (incluindo Claude 3.5 Sonnet), e limites de taxa significativamente mais altos. Plano Team: A partir de US$ 25/usuário/mês (cobrança anual, mínimo de 5 usuários para algumas funcionalidades). API para Claude 3 Haiku: US$ 0.80/milhão de tokens de entrada e US$ 4.00/milhão de tokens de saída. API para Claude 3.5 Sonnet: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 200K tokens. API para Claude 3 Opus: US$ 15.00/milhão de tokens de entrada e US$ 75.00/milhão de tokens de saída (alguns provedores podem ter preços diferentes).',
    pros: [
      'Claude 3.5 Sonnet (lançado em junho de 2024) é o modelo mais avançado da Anthropic, superando Claude 3 Opus em raciocínio, codificação e visão, operando com o dobro da velocidade e custo-benefício do Claude 3 Sonnet original.',
      'Claude 3.5 Sonnet demonstra melhorias significativas em engenharia de software e tarefas complexas de codificação, resolvendo 64% dos problemas em avaliação interna de codificação (vs. 38% do Claude 3 Opus).',
      'É o modelo mais forte da Anthropic em visão, superando Claude 3 Opus em benchmarks, com capacidade de interpretar gráficos, tabelas e transcrever texto de imagens imperfeitas.',
      'Apresenta o recurso "Artifacts" no Claude.ai, expandindo a interação do usuário.',
      'Oferece capacidades de função de chamada para execução de ferramentas e funções personalizadas.',
      'Novos recursos em beta público, como "computer use", permitindo ao Claude interagir com computadores de forma mais autônoma (olhando a tela, clicando botões).'
    ],
    cons: [
      'Claude 3.5 Sonnet tem uma janela de contexto de 200K tokens, menor que algumas ofertas concorrentes para modelos de ponta.',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança.',
      'O plano gratuito não inclui acesso a funcionalidades avançadas específicas como "computer use".',
      'A versão anterior, Claude 3 Opus, usa um tokenizer que pode consumir até 35% mais tokens para o mesmo texto, impactando o custo efetivo.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude 3.5 Sonnet (lançado em junho de 2024) é o modelo mid-tier mais avançado da Anthropic, oferecendo desempenho robusto em raciocínio, codificação e compreensão multimodal, incluindo capacidades de visão e função de chamada. Ele supera o Claude 3 Opus em diversas avaliações, com o dobro da velocidade e um custo-benefício aprimorado. Para tarefas de alto volume e baixo custo, o Claude 3 Haiku (lançado em março de 2024, atualização de preço em outubro de 2024) é o modelo mais rápido e econômico. A Anthropic continua a focar em segurança e alinhamento em seus modelos, e introduziu recursos como "computer use" em beta público para automação complexa. Ambos os modelos, juntamente com o Claude 3 Opus, estão disponíveis via planos gratuitos, Pro e Team, e API.'
  },
  {
    id: 'gemini-models',
    name: 'Gemini 1.5 Pro, Gemini 1.5 Flash (via Google AI Premium)',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com acesso ao aplicativo Gemini, Gemini 1.5 Flash e recursos básicos); Google AI Premium (anteriormente Google One AI Premium/Gemini Advanced): US$ 19.99/mês (acesso a Gemini 1.5 Pro, Gemini 1.5 Flash, 2 TB de armazenamento, integração com Workspace). API para Gemini 1.5 Flash: US$ 0.075/milhão de tokens de entrada e US$ 0.30/milhão de tokens de saída para prompts com menos de 128K tokens, com janela de contexto de 1 milhão de tokens. API para Gemini 1.5 Pro: US$ 7.00/milhão de tokens de entrada e US$ 21.00/milhão de tokens de saída para prompts com menos de 128K tokens, com janela de contexto de 2 milhões de tokens.',
    pros: [
      'Gemini 1.5 Pro (lançado em fevereiro de 2024) é o modelo mais poderoso e versátil do Google para raciocínio complexo, multimodalidade e capacidades agenticas, com janela de contexto de 2 milhões de tokens.',
      'Gemini 1.5 Flash (lançado em maio de 2024) é o modelo mais rápido e eficiente do Gemini, otimizado para tarefas de alto volume e frequência, com janela de contexto de 1 milhão de tokens e um custo significativamente reduzido (preço de entrada 78% menor, saída 71% menor a partir de agosto de 2024).',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição.',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome).',
      'Recursos do Gemini Advanced como "Deep Research" para analisar centenas de fontes e "Reference past chats" para contextualização.'
    ],
    cons: [
      'A API para Gemini 1.5 Pro é mais cara que a 1.5 Flash, especialmente para prompts mais longos.',
      'A segmentação de imagem não é explicitamente suportada nos modelos Gemini 1.5.',
      'Modelos mais avançados (como Gemini 3.5 Flash ou 3.1 Pro mencionados em fontes futuras ou beta) ainda não estão amplamente disponíveis.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 5.0
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 1.5 Pro (lançado em fevereiro de 2024) e Gemini 1.5 Flash (lançado em maio de 2024) são os modelos de linguagem multimodal mais avançados do Google. Eles oferecem vasta janela de contexto de até 2 milhões de tokens (para 1.5 Pro) para análise de grandes volumes de informações em texto, imagem, áudio e vídeo. O Gemini 1.5 Pro é projetado para raciocínio complexo e desempenho superior, enquanto o Gemini 1.5 Flash é otimizado para velocidade e custo-benefício em tarefas de alto volume, com um preço de API significativamente reduzido a partir de agosto de 2024. Ambos se destacam na análise multimodal e estão profundamente integrados ao ecossistema Google, disponíveis via assinatura Google AI Premium e API.'
  },
  {
    id: 'llama-models',
    name: 'Llama 3 (8B, 70B, 400B)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware, licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual). API para Llama 3 8B: A partir de US$ 0.05/milhão de tokens de entrada e US$ 0.08/milhão de tokens de saída (via provedores como Deepinfra/Groq). API para Llama 3 70B: Varia por provedor; por exemplo, US$ 0.59/milhão de tokens de entrada e US$ 0.79/milhão de tokens de saída (via Groq/Inworld AI) ou US$ 2.68/milhão de tokens de entrada e US$ 3.54/milhão de tokens de saída (via Azure para Llama 3.1 70B). A Meta oferece API gratuita para experimentação para Llama 3 70B Instruct. Modelos maiores como Llama 3 400B/405B podem ter preços de API mais elevados ou estar em estágios de acesso limitado.',
    pros: [
      'Llama 3 (lançado em abril de 2024) oferece modelos open-weight (8B, 70B e uma versão maior em treinamento), permitindo uso local gratuito e fine-tuning com total controle.',
      'Desempenho de ponta para seu tamanho, superando muitos modelos proprietários em benchmarks.',
      'Janela de contexto de 8K tokens para 8B, 128K tokens para 70B, suportando conversas mais longas e tarefas complexas.',
      'Ecossistema robusto de provedores de API terceirizados que oferecem custos competitivos e velocidade (Groq é conhecido pela inferência rápida).',
      'Suporte a múltiplos idiomas e capacidades multimodais estão sendo desenvolvidas para versões futuras (Llama 4 especulado com 12 idiomas e multimodalidade).',
      'Llama 3.1 70B (previsto para julho de 2024) com janela de contexto de 128K tokens e melhorias em raciocínio.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade e para modelos maiores.',
      'A qualidade e o custo da API podem variar significativamente dependendo do provedor terceirizado.',
      'Modelos maiores (como Llama 3 400B/405B) ainda podem estar em treinamento ou com acesso limitado para API pública.',
      'A licença de uso comercial gratuita é limitada a empresas com receita anual inferior a US$ 1 milhão.'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.8,
      coding: 4.8,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'A família Llama da Meta, com Llama 3 (8B, 70B e 400B em treinamento, lançados em abril de 2024), oferece modelos "open-weight" que permitem uso local gratuito e personalização profunda via fine-tuning. O Llama 3 se destaca pelo desempenho de ponta para seu tamanho, com capacidades robustas de raciocínio e codificação. Com uma comunidade ativa e um ecossistema de provedores de API que oferecem custos competitivos e alta velocidade de inferência (como Groq), o Llama 3 é uma opção poderosa e flexível para desenvolvedores e empresas. Embora exija hardware robusto para execução local, sua natureza open-weight o torna ideal para quem busca personalização e controle. A Meta também oferece um API gratuito para experimentação.'
  },
  {
    id: 'dall-e-3',
    name: 'DALL-E 3 (via ChatGPT Plus)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com acesso a GPT-4o e limites de uso). API para DALL-E 3 (via OpenAI): Preços por imagem variam de US$ 0.04 (1024x1024, standard) a US$ 0.08 (1792x1024 ou 1024x1792, standard). Edições e variações podem ter custos adicionais.',
    pros: [
      'DALL-E 3 (lançado em setembro de 2023) é o modelo de geração de imagens da OpenAI, totalmente integrado ao ChatGPT Plus.',
      'Capacidade de interpretar prompts complexos e conversacionais de forma mais eficaz do que muitos concorrentes, resultando em imagens que correspondem melhor à descrição.',
      'Melhora significativa na renderização de texto dentro das imagens.',
      'Gera imagens de alta qualidade com diversos estilos.',
      'Integração perfeita com ChatGPT, permitindo criação e modificação de imagens via conversação.'
    ],
    cons: [
      'Ainda pode apresentar resultados que parecem "falsos" ou não atingir o fotorrealismo de alguns concorrentes como o Midjourney em certos casos.',
      'O acesso completo e ilimitado requer assinatura do ChatGPT Plus ou planos superiores.',
      'Não possui um plano gratuito dedicado para geração de imagens (requer a assinatura Plus para uso robusto).',
      'Preços da API podem ser elevados dependendo da qualidade e resolução.'
    ],
    score: {
      reasoning: 4.9,
      writing: 3.8,
      coding: 1.0,
      speed: 4.8,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'DALL-E 3, da OpenAI (lançado em setembro de 2023), é a mais recente geração de modelos de geração de imagens da empresa, totalmente integrado ao ChatGPT Plus. Ele se destaca pela sua capacidade de interpretar prompts complexos e conversacionais para criar imagens de alta qualidade com renderização aprimorada de texto e uma forte correspondência com a descrição. Disponível via assinatura ChatGPT Plus, a geração de imagens da OpenAI oferece uma experiência intuitiva e poderosa para designers, criadores de conteúdo e qualquer pessoa que busque gerar visuais criativos de alto nível, apesar do custo da API para uso em larga escala.'
  },
  {
    id: 'midjourney-v8-1',
    name: 'Midjourney V6.1 (e V6)',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial. Planos pagos (com 20% de desconto na cobrança anual): Basic US$ 10/mês (US$ 96/ano) com ~3.3 horas de GPU rápida (equivalente a ~200 imagens); Standard US$ 30/mês (US$ 288/ano) com ~15 horas de GPU rápida e gerações ilimitadas no modo Relax; Pro US$ 60/mês (US$ 576/ano) com ~30 horas de GPU rápida, modo Relax ilimitado, modo Stealth (privacidade) e gerações ilimitadas de vídeo SD no modo Relax; Mega US$ 120/mês (US$ 1152/ano) com ~60 horas de GPU rápida, modo Relax ilimitado e modo Stealth.',
    pros: [
      'Midjourney V6.1 (lançado em maio de 2024, V6 em dezembro de 2023) continua a aprimorar a qualidade de imagem excepcional, alta resolução, estética marcante e maior precisão na compreensão de prompts.',
      'Disponibiliza um Editor Web completo, eliminando a dependência do Discord, com funcionalidades de Inpaint e Outpaint (Roll Out) para edição de imagens.',
      'Possui recurso de Consistência de Personagem (--cref) para manter faces consistentes em diferentes estilos e poses.',
      'Gera imagens fotorrealistas e artísticas de altíssima qualidade, sendo o "padrão ouro" para muitos usuários.',
      'Introduziu o "Draft Mode" (10x mais rápido, 50% de custo reduzido) para iteração rápida de ideias e "Omni Reference" para consistência visual.'
    ],
    cons: [
      'Não possui plano de testes gratuito no site oficial.',
      'Não possui API pública oficial, limitando a integração programática.',
      'O modo Relax, que oferece gerações ilimitadas mais lentas, não está disponível para jobs rápidos e é mais lento.',
      'O modo Stealth (privacidade) e geração de vídeo SD estão disponíveis apenas nos planos Pro e Mega.',
      'Curva de aprendizado para prompt engineering avançado.',
      'Horas de GPU rápida não se acumulam (não são transferidas para o próximo mês).'
    ],
    score: {
      reasoning: 4.6,
      writing: 2.5,
      coding: 1.0,
      speed: 4.8,
      value: 4.5
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney V6.1 (lançado em maio de 2024), e a versão V6 (lançada em dezembro de 2023), representam um salto significativo em qualidade visual, alta resolução e coerência, sendo amplamente reconhecido por seu fotorrealismo e habilidades artísticas. Com a introdução do "Draft Mode" para iteração rápida e o novo Editor Web que elimina a dependência do Discord (incluindo Inpaint, Outpaint e Consistência de Personagem), o Midjourney continua a liderar a geração de imagens. Apesar de não ter plano gratuito oficial ou uma API pública, o Midjourney continua a ser uma ferramenta líder para designers e criadores que buscam resultados visuais de altíssimo nível.'
  },
  {
    id: 'stable-diffusion-3-medium',
    name: 'Stable Diffusion 3 Medium (e Stable Audio 2.0)',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware); para empresas com mais de US$ 1M de receita anual, licença Enterprise é necessária. API (sistema de créditos): Stable Diffusion 3 Medium: US$ 0.035/imagem (1024x1024) via Replicate. Stable Diffusion 3 (base): 6.5 créditos/imagem (~US$ 0.065/imagem). Stable Diffusion 3 Turbo: 4 créditos/imagem (~US$ 0.04/imagem). Stable Audio 2.0: 20 créditos gratuitos por mês, 2 créditos por geração.',
    pros: [
      'Stable Diffusion 3 (lançado em abril de 2024) utiliza arquitetura Multimodal Diffusion Transformer (MMDiT), oferecendo controle aprimorado e melhorias notáveis na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista.',
      'Modelos "open-weight" que podem rodar localmente (com hardware adequado), permitindo controle absoluto, privacidade e fine-tuning (LoRAs, ControlNet).',
      'Stable Diffusion 3 Medium oferece um equilíbrio entre qualidade de geração e eficiência de recursos.',
      'Stable Audio 2.0 (lançado em abril de 2024) para geração de música e efeitos sonoros, capaz de criar peças de até 3 minutos, com funcionalidades de texto-para-áudio e áudio-para-áudio, disponível gratuitamente.',
      'Gera outputs diversos e representativos de diferentes tons de pele e características.'
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado e configuração técnica para uso local eficiente.',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente para as versões maiores.',
      'Ainda pode apresentar dificuldades em renderizar anatomia humana de forma perfeita em alguns casos.',
      'A qualidade da saída pode variar mais sem fine-tuning em comparação com soluções gerenciadas.',
      'Preços da API podem ser mais complicados de prever devido ao sistema de créditos e variáveis.'
    ],
    score: {
      reasoning: 4.0,
      writing: 1.8,
      coding: 4.8,
      speed: 4.7,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'Stable Diffusion 3 (lançado em abril de 2024), com sua arquitetura Multimodal Diffusion Transformer (MMDiT), é a mais recente geração de modelos "open-weight" da Stability AI para IA visual, destacando-se pela qualidade da imagem, renderização de texto e compreensão de prompts complexos. O Stable Diffusion 3 Medium é uma variante que equilibra qualidade de geração e eficiência de recursos. Os modelos são "open-weight", permitindo uso local gratuito (com limites de receita para uso comercial) e personalização profunda via fine-tuning. A API da Stability AI oferece um custo acessível por imagem gerada. Além disso, a Stability AI oferece Stable Audio 2.0 (lançado em abril de 2024) para geração de música e efeitos sonoros, com recursos de texto-para-áudio e áudio-para-áudio, disponível gratuitamente. Embora exija investimento em aprendizado e hardware potente para as versões maiores, sua flexibilidade e o custo-benefício o tornam ideal para profissionais que buscam personalização, eficiência e controle.'
  },
  {
    id: 'make-com-ai-agents',
    name: 'Make.com (Agentes de IA)',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis: 1.000 operações/mês, 2 cenários ativos, inclui Make AI Agents (beta), intervalo de 15 minutos. Plano Core: US$ 10.59/mês (ou US$ 9/mês anual) para 10.000 operações (cenários ilimitados, intervalo de 1 minuto, inclui Make AI Agents). Plano Pro: US$ 18.82/mês (ou US$ 16/mês anual) para 10.000+ operações (prioridade de execução, variáveis personalizadas, logs completos). Plano Teams: US$ 34.12/mês por usuário (ou US$ 29/mês por usuário anual) para 10.000+ operações (colaboração, gestão de equipes, prioridade de execução). Plano Enterprise: precificação personalizada. Operações adicionais podem ser compradas (10.000 operações por US$ 9).',
    pros: [
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos.',
      'Os "Make AI Agents" (recurso disponível em todos os planos) permitem automação inteligente e adaptativa com tomada de decisões em tempo real dentro do canvas, com visibilidade total do processo.',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini 1.5 Pro/Flash) e milhares de APIs (3.000+ apps, mais integração via módulo HTTP).',
      'Suporte multimodal para AI Agents, permitindo entrada e saída de arquivos como PDFs, imagens e CSVs diretamente no fluxo de trabalho.',
      'Registros detalhados de execução (Make Grid) e busca de texto completo em logs (planos Pro e Teams) para depuração e visibilidade aprimoradas.',
      'Altamente competitivo em termos de custo-benefício para automações complexas em comparação com alternativas como Zapier (muitas vezes mais barato por operação).',
      'Funcional plano gratuito para prototipar automações.'
    ],
    cons: [
      'O consumo de operações pode ser imprevisível e rápido em cenários complexos com muitos módulos e Agentes de IA.',
      'Requer conceitos básicos de lógica de programação (JSON, arrays) para fluxos avançados e agentes de IA complexos, resultando em uma curva de aprendizado mais acentuada.',
      'Os recursos de colaboração e equipe são limitados nos planos Core e Pro, exigindo o plano Teams para funcionalidade completa.',
      'Cenários no plano Core podem entrar em fila durante picos de uso.',
      'Limites de transferência de dados podem ser rapidamente atingidos em fluxos que processam conteúdo de vídeo.'
    ],
    score: {
      reasoning: 4.9,
      writing: 3.0,
      coding: 4.0,
      speed: 4.8,
      value: 4.6
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Make.com é uma plataforma de automação visual B2B que se consolidou como uma orquestradora poderosa para sistemas e IAs. Os "Make AI Agents" (recurso da plataforma) permitem a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos como PDFs e imagens. A plataforma se integra nativamente com os modelos de IA mais recentes, como OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet e Google Gemini 1.5 Pro/Flash. Com uma interface altamente intuitiva, o "Make Grid" para visualização em tempo real das automações, e módulos aprimorados de controle de fluxo e funções, é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, baseados em operações, oferecem flexibilidade, tornando-o uma alternativa custo-efetiva para automações complexas, apesar do consumo de operações poder ser imprevisível para tarefas de IA.'
  }
];