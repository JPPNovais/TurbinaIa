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
    name: 'ChatGPT Plus (GPT-5.5 Thinking, GPT-5.5 Instant, GPT-5.5 Pro)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (acesso limitado a GPT-5.5 Instant para funções básicas; inclui anúncios nos EUA). ChatGPT Go: US$ 8/mês (acesso a GPT-5.5 Instant, com anúncios nos EUA, Austrália, Nova Zelândia e Canadá). ChatGPT Plus: US$ 20/mês (acesso total a GPT-5.5 Thinking, GPT-5.5 Instant como padrão; inclui Deep Research - 10 execuções/mês, Codex com Computer Use no Windows, Agent Mode, Advanced Voice Mode, Custom GPTs, DALL-E 4; limite de 160 mensagens/3 horas para GPT-5.5 Thinking e 80 uploads de arquivos/3 horas). ChatGPT Pro $100: US$ 100/mês (acesso a GPT-5.5 Thinking, GPT-5.5 Pro e o1 Pro mode; 5x o uso do Plus, 50 execuções de Deep Research/mês). ChatGPT Pro $200: US$ 200/mês (acesso a GPT-5.5 Thinking, GPT-5.5 Pro e o1 Pro mode; Deep Research ilimitado, janela de contexto de 1 milhão de tokens, inclui Sora Pro com gerações lentas ilimitadas e 500 vídeos 1080p prioritários). ChatGPT Business: US$ 20-25/usuário/mês (mínimo de 2 usuários); inclui acesso ilimitado a GPT-5.5 Thinking e GPT-5.5 Pro, workspaces compartilhados. ChatGPT Enterprise: Preço personalizado (contato com vendas), mínimo de 150 usuários. API para GPT-5.5 Pro: US$ 30.00/milhão de tokens de entrada e US$ 180.00/milhão de tokens de saída. API para GPT-5 mini: US$ 0.25/milhão de tokens de entrada e US$ 2.00/milhão de tokens de saída. API para GPT-4o: US$ 2.50/milhão de tokens de entrada e US$ 10.00/milhão de tokens de saída. API para GPT-4o mini: US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída. API para gpt-image-2 (DALL-E 4): US$ 0.053 (1024x1024, medium quality).',
    pros: [
      'GPT-5.5 Thinking (lançado em abril de 2026) é o modelo mais inteligente e intuitivo da OpenAI para usuários Plus e superiores, destacando-se em raciocínio complexo, codificação, uso de computador, pesquisa científica e segurança cibernética.',
      'GPT-5.5 Thinking oferece uma janela de contexto de até 1 milhão de tokens para usuários Pro $200, ideal para raciocínio complexo e análise de grandes volumes de informação.',
      'GPT-5.5 Instant (lançado em maio de 2026) é o modelo padrão do ChatGPT para todos os usuários, oferecendo respostas mais rápidas, precisas e com menos alucinações.',
      'Acesso a recursos avançados como Deep Research (agente de pesquisa autônomo com relatórios citados e escolha de fontes), Codex (agente de codificação com Computer Use no Windows), Agent Mode, Advanced Voice Mode e Custom GPTs.',
      'DALL-E 4 (agora baseado em gpt-image-2, integrado no ChatGPT Plus e superiores) oferece geração de imagens com renderização de texto aprimorada, suporte multilíngue, raciocínio visual avançado e saída em resolução 2K.',
      'Modelos como GPT-4o e GPT-4o mini ainda estão disponíveis via API a preços competitivos para casos de uso específicos.',
      'Advanced Voice Mode permite interação de voz natural e em tempo real, processando áudio diretamente para capturar nuances como tom e ritmo, e suporta compartilhamento de vídeo e tela, disponível em desktop e mobile.',
      'O plano Pro $200 inclui acesso ao Sora Pro, permitindo gerações lentas ilimitadas e 500 vídeos 1080p prioritários.'
    ],
    cons: [
      'Modelos mais antigos como GPT-4o foram aposentados do ChatGPT em fevereiro de 2026, embora o acesso via API permaneça. DALL-E 2 e DALL-E 3 foram aposentados em 12 de maio de 2026.',
      'A API do Sora 2 será descontinuada em setembro de 2026, embora o Sora Pro esteja disponível no plano Pro $200.',
      'O plano Go (US$ 8/mês) exibe anúncios nos EUA, com testes de expansão para Austrália, Nova Zelândia e Canadá.',
      'Usuários dos planos Free e Go não têm acesso aos modelos GPT-5.5 Thinking completos na interface principal do ChatGPT.',
      'O custo da API para modelos de fronteira, como GPT-5.5 Pro, é significativamente mais alto (US$ 30.00/M tokens de entrada e US$ 180.00/M tokens de saída).',
      'Deep Research pode ocasionalmente apresentar alucinações factuais ou inferências incorretas.',
      'Agent Mode possui limites de uso e não é projetado para conversas casuais; a versão de consumidor não possui acesso via API.',
      'O uso de Computer Use no Windows não está disponível na Área Econômica Europeia, Reino Unido e Suíça no lançamento.',
      'GPT-5.5 Thinking, embora poderoso, possui precificação mais alta e pode, em alguns casos, não seguir prompts com precisão ou "super-raciocinar".'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelos modelos GPT-5.5 (incluindo GPT-5.5 Thinking e GPT-5.5 Pro) e GPT-5.5 Instant, representa o ápice da inteligência artificial generativa da OpenAI. O GPT-5.5 Thinking (lançado em abril de 2026) é o modelo mais capaz da empresa, otimizado para tarefas complexas de codificação, pesquisa e análise de dados, com fortes capacidades agenticas e avanços em segurança cibernética. O GPT-5.5 Instant (lançado em maio de 2026) é o modelo padrão do ChatGPT para todos os usuários, focado em velocidade, precisão, redução significativa de alucinações e uma janela de contexto expandida. A plataforma oferece acesso a recursos como Deep Research para relatórios citados, Codex com Computer Use no Windows, Agent Mode para automação proativa, Advanced Voice Mode para interações naturais, e Custom GPTs para personalização, além do modelo de imagem DALL-E 4 (agora baseado em gpt-image-2). Embora modelos como GPT-4o tenham sido aposentados do ChatGPT, o plano Pro $200 oferece acesso ao Sora Pro para geração de vídeo. A OpenAI continua a evoluir sua oferta para atender a uma gama ampla de usuários, desde casuais até grandes empresas.'
  },
  {
    id: 'claude-opus-4-8',
    name: 'Claude Opus 4.8 (e Claude Opus 4.7, Claude Sonnet 4.6, Claude Haiku 4.5)',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso a Claude Sonnet 4.6 e Claude Haiku 4.5, com limites de uso diários; inclui criação de arquivos, conectores e habilidades). Plano Pro: US$ 20/mês (ou US$ 17/mês anual) com acesso a todos os modelos (incluindo Claude Opus 4.8, Sonnet 4.6, Haiku 4.5), limites de taxa significativamente mais altos e Claude Code. Plano Max: US$ 100/mês (Max 5x, 5x o uso do Pro) ou US$ 200/mês (Max 20x, 20x o uso do Pro), com acesso prioritário a novos modelos e funcionalidades (somente cobrança mensal). Plano Team Standard: US$ 25/usuário/mês (US$ 20/usuário/mês anual, mínimo de 5 usuários) para colaboração e recursos organizacionais. Plano Team Premium: US$ 125/usuário/mês (inclui Claude Code). Plano Enterprise: Preço personalizado (contato com vendas), oferece compliance, governança e implantação customizada. API para Claude Haiku 4.5: US$ 1.00/milhão de tokens de entrada e US$ 5.00/milhão de tokens de saída. API para Claude Sonnet 4.6: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 1 milhão de tokens. API para Claude Opus 4.8/4.7: US$ 5.00/milhão de tokens de entrada e US$ 25.00/milhão de tokens de saída para uso padrão; US$ 10.00/milhão de tokens de entrada e US$ 50.00/milhão de tokens de saída para modo rápido (2.5x mais rápido que modos rápidos anteriores). Batch API oferece 50% de desconto nas taxas padrão.',
    pros: [
      'Claude Opus 4.8 (lançado em 28 de maio de 2026) é o modelo mais avançado da Anthropic, mostrando melhorias em codificação, habilidades agenticas, raciocínio e tarefas de conhecimento prático, com ênfase em honestidade e confiabilidade. Suporta "dynamic workflows" (prévia de pesquisa) que podem gerar centenas de subagentes paralelos e "Effort Control" para ajustar a profundidade do raciocínio.',
      'Claude Opus 4.7 (lançado em 16 de abril de 2026) oferece desempenho robusto em raciocínio e é muito forte em engenharia de software e tarefas complexas de codificação, com visão aprimorada.',
      'Claude Sonnet 4.6 (lançado em 17 de fevereiro de 2026) oferece desempenho de nível Opus 4.5 a um custo de Sonnet, com melhorias em codificação, uso de computador, raciocínio de longo contexto e planejamento de agente; suporta janela de contexto de 1 milhão de tokens via API.',
      'Claude Haiku 4.5 (lançado em 15 de outubro de 2025) é o modelo mais rápido e eficiente da Anthropic, oferecendo desempenho quase de fronteira.',
      'Os modelos Opus (4.8, 4.7) e Sonnet 4.6 oferecem uma janela de contexto de 1 milhão de tokens via API a taxas padrão. Para uso conversacional no Claude.ai em planos pagos, a janela de contexto é de 500K tokens, e 1M tokens em Claude Code (requer créditos de uso para usuários Pro).',
      'Excelente em visão, interpretando gráficos, tabelas e transcrevendo texto de imagens imperfeitas.',
      'Apresenta o recurso "Artifacts" no Claude.ai para expandir a interação do usuário, permitindo criar, pré-visualizar e interagir com conteúdo gerado.',
      'Recursos como "computer use" (beta público, desde outubro de 2024) permitem ao Claude interagir com computadores de forma mais autônoma.',
      'Persistent memory para todos os usuários (incluindo o nível gratuito) desde março de 2026.',
      'Claude Code agent teams, introduzidos em 2026 como prévia de pesquisa, permitem que um agente líder delegue trabalho a agentes especialistas em segundo plano, trabalhando em paralelo.',
      'Claude Cowork, um agente de desktop lançado em 12 de janeiro de 2026 em prévia de pesquisa, permite automação de fluxo de trabalho sem codificação.'
    ],
    cons: [
      'A janela de contexto conversacional dos modelos Claude Opus (500K tokens) em planos pagos é menor que a janela de 1 milhão de tokens disponível via API ou em Claude Code.',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança (Constitutional AI).',
      'O plano gratuito não inclui acesso a funcionalidades avançadas específicas como "computer use" ou modelos Opus completos.',
      'Modelos como Claude Sonnet 4 e Claude Opus 4 serão descontinuados em 15 de junho de 2026.',
      'O novo tokenizer do Claude Opus 4.7 pode inflacionar a contagem de tokens em até 35% para o mesmo texto em comparação com Opus 4.6, aumentando o custo efetivo, embora Opus 4.8 não tenha essa penalidade.',
      'Em tarefas de codificação complexas, o Claude Opus 4.7/4.8 é, em média, mais lento para retornar uma resposta em comparação com o GPT-5.5, embora o modo rápido possa compensar. Além disso, Opus 4.8 pode ser verboso, gerando mais tokens.',
      'O modo rápido ("Fast Mode") está disponível apenas para organizações que fazem parte da prévia de pesquisa.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 4.8,
      value: 4.8
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude Opus 4.8 (lançado em 28 de maio de 2026) é o modelo mais avançado da Anthropic, oferecendo desempenho robusto em raciocínio, codificação e compreensão multimodal, incluindo capacidades de visão e função de chamada. Ele supera o GPT-5.5 em diversas avaliações de codificação e raciocínio agentico, sendo um dos líderes no Artificial Analysis Intelligence Index. Ele oferece uma janela de contexto de 1 milhão de tokens via API, mas 500K para uso conversacional direto. Claude Sonnet 4.6 (lançado em 17 de fevereiro de 2026) oferece um desempenho de nível Opus 4.5 a um preço de Sonnet, tornando-o uma opção eficiente e capaz. Claude Haiku 4.5 (lançado em 15 de outubro de 2025) é o modelo mais rápido e econômico da família. A Anthropic continua a focar em segurança e alinhamento em seus modelos e introduziu recursos como "computer use" em beta público, "Effort Control" para automação complexa, persistent memory para todos os usuários e o agente de desktop Claude Cowork. Os modelos estão disponíveis via planos gratuitos (com acesso limitado), Pro, Max, Team e API.'
  },
  {
    id: 'gemini-models',
    name: 'Gemini 3.5 Flash, Gemini 3.1 Ultra, Gemini 3.1 Pro, Gemini Omni Flash',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com acesso ao aplicativo Gemini, Gemini 3.5 Flash e recursos básicos, com limites de uso). Google AI Plus: US$ 7.99/mês (inclui Omni em Gemini, Daily Brief, AI Inbox no Gmail, 200GB de armazenamento na nuvem, acesso a Flow para geração de vídeo). Google AI Pro (anteriormente Gemini Advanced): US$ 19.99/mês (acesso a Gemini 3.1 Pro, Gemini 3.5 Flash, Gemini 3.1 Flash-Lite; 5TB de armazenamento Google One, Deep Research, Gems - personas de IA personalizadas, integração com Workspace, YouTube Premium Lite). Google AI Ultra ($99.99): US$ 99.99/mês (inclui Gemini Ultra, 20TB de armazenamento, acesso superior a modelos Pro e Veo, YouTube Premium completo). Google AI Ultra ($199.99): US$ 199.99/mês (inclui Gemini Ultra, 30TB de armazenamento, acesso máximo a modelos Pro e Veo, Deep Think, acesso prioritário a novos recursos, Gemini Spark, YouTube Premium completo). API para Gemini 3.5 Flash: US$ 1.50/milhão de tokens de entrada e US$ 9.00/milhão de tokens de saída. API para Gemini 3.1 Flash: US$ 0.50/milhão de tokens de entrada e US$ 3.00/milhão de tokens de saída. API para Gemini 3.1 Pro: US$ 2.00/milhão de tokens de entrada e US$ 12.00/milhão de tokens de saída para prompts com até 200K tokens (dobra para US$ 4.00/milhão de entrada e US$ 18.00/milhão de saída para mais de 200K tokens). API para Gemini 3.1 Ultra: O custo para preencher a janela de contexto de 2 milhões de tokens varia de US$ 8 a US$ 12 por chamada de API. API para Gemini 3.1 Flash-Lite: US$ 0.25/milhão de tokens de entrada e US$ 1.50/milhão de tokens de saída. API para Gemini 3.1 Flash Image (Nano Banana 2): Preços por imagem variam (ex: US$ 0.045 por imagem 0.5K, US$ 0.067 por imagem 1K, US$ 0.151 por imagem 4K), com suporte a vídeo-para-imagem. API para Gemini Omni Flash: Acesso via API planejado, mas não geralmente disponível ainda.',
    pros: [
      'Gemini 3.5 Flash (lançado em 19 de maio de 2026) é o novo modelo padrão para o aplicativo Gemini e o AI Mode do Google Search, oferecendo respostas 4x mais rápidas (TPS) e superando o Gemini 3.1 Pro em benchmarks de tarefas agenticas e codificação.',
      'Gemini Omni (anunciado e lançado em 19 de maio de 2026), com o primeiro modelo Gemini Omni Flash, é um novo "modelo de mundo" capaz de simular e raciocinar sobre a realidade física, com capacidades multimodais nativas de entrada e saída, incluindo geração e edição de vídeo.',
      'Gemini 3.1 Ultra e Pro são modelos poderosos e versáteis com uma vasta janela de contexto de 2 milhões de tokens via API, destacando-se em raciocínio complexo e compreensão multimodal.',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição, incluindo o novo suporte a geração de vídeo-para-imagem no Gemini 3.1 Flash Image.',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome, YouTube).',
      'Recursos avançados do Google AI Pro (anteriormente Gemini Advanced) como "Deep Research" (agente de pesquisa autônomo), "Gems" (personas de IA personalizadas) e "Reference past chats" para contextualização.',
      'Managed Agents na API Gemini (preview público, 19 de maio de 2026) permitem construir e implantar agentes autônomos e com estado em ambientes sandbox seguros.',
      'Gemini 3.1 Flash-Lite (lançado em 7 de maio de 2026) é um modelo altamente eficiente em custo para tarefas de alto volume.',
      'Gemini Spark, impulsionado por Gemini 3.5 Flash, atua como um parceiro ativo que realiza tarefas em nome do usuário, com integração com serviços Google de primeira parte como Gmail e Docs.'
    ],
    cons: [
      'A API para Gemini 3.1 Pro é mais cara para prompts que excedem 200K tokens.',
      'A janela de contexto para Gemini Advanced (Google AI Pro) na interface do usuário é de 1 milhão de tokens, enquanto a API do Gemini 3.1 Pro e Ultra oferece 2 milhões de tokens.',
      'Modelos como Gemini 2.0 Flash e Flash-Lite foram descontinuados em 1º de junho de 2026.',
      'O acesso a modelos Pro via API é pago, com planos gratuitos apenas para os modelos Flash e Flash-Lite desde abril de 2026.',
      'A segmentação de imagem não é explicitamente suportada nos modelos Gemini 3.1.',
      'Gemini 3.5 Flash é significativamente mais caro que seus predecessores (3x o preço do Gemini 3 Flash e 5x o do 2.5 Flash), e em algumas cargas de trabalho, pode ser mais caro de executar do que o Gemini 3.1 Pro.',
      'Gemini Omni Flash é computacionalmente intensivo, e a geração de clipes complexos de alta fidelidade consome pesadamente os limites de uso diário do plano AI Pro. Além disso, a API para Gemini Omni Flash ainda não está geralmente disponível.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.9
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 3.5 Flash (lançado em 19 de maio de 2026) é o novo modelo padrão do Google, otimizado para velocidade e desempenho em tarefas agenticas e de codificação, superando o Gemini 3.1 Pro em benchmarks. A família Gemini Omni, com o Gemini Omni Flash (lançado em 19 de maio de 2026), introduz um "modelo de mundo" multimodal com capacidades de simulação e geração de vídeo de alta qualidade a partir de diversas entradas. Os modelos Gemini 3.1 Ultra e Pro são os modelos de linguagem multimodal mais avançados do Google, oferecendo vasta janela de contexto de até 2 milhões de tokens para análise de grandes volumes de informações em texto, imagem, áudio e vídeo (principalmente via API). O Gemini 3.1 Ultra e Pro são projetados para raciocínio complexo e desempenho superior, enquanto o Gemini 3.5 Flash é otimizado para velocidade e custo-benefício em tarefas de alto volume. Ambos se destacam na análise multimodal e estão profundamente integrados ao ecossistema Google, disponíveis via assinatura Google AI Plus/Pro/Ultra e API. O novo Gemini Spark, impulsionado por 3.5 Flash, atua como um parceiro ativo que executa tarefas em nome do usuário.'
  },
  {
    id: 'llama-models',
    name: 'Llama 4 (Maverick, Scout), Muse Spark, Llama 3.1 (8B, 70B, 405B)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware; licença comunitária Llama 4 para uso não comercial e comercial até US$ 700M de receita anual, exige que derivativos comecem com "Llama" e exibam "Built with Llama"; indivíduos domiciliados na UE excluídos para variantes multimodais do Llama 3.2). API para Llama 3.1 8B Instruct: A partir de US$ 0.020/milhão de tokens de entrada e US$ 0.050/milhão de tokens de saída (via Meta-llama). API para Llama 3.1 70B Instruct: A partir de US$ 0.340/milhão de tokens de entrada e US$ 0.390/milhão de tokens de saída (via Meta-llama), ou US$ 0.88/milhão de tokens de entrada e US$ 0.88/milhão de tokens de saída (via Together.ai). API para Llama 3.1 405B Instruct: A partir de US$ 0.80/milhão de tokens de entrada e US$ 0.80/milhão de tokens de saída (via Deepinfra), ou US$ 0.90/milhão de tokens de entrada e US$ 0.90/milhão de tokens de saída (via Fireworks), ou US$ 3.50/milhão de tokens de entrada e US$ 3.50/milhão de tokens de saída (via Together AI). API para Llama 4 Scout (10M contexto): Disponível em inferência dedicada (preços variam por provedor). API para Llama 4 Maverick (1M contexto): Disponível em inferência dedicada (preços variam por provedor). Muse Spark: API atrasada por bugs, não há data de lançamento pública agendada (junho de 2026).',
    pros: [
      'Muse Spark (lançado em abril de 2026) da Meta Superintelligence Labs, é o novo modelo de ponta da Meta, substituindo o Llama em algumas aplicações, com multimodalidade nativa, raciocínio visual "chain-of-thought" e orquestração multi-agente. Requer 10x menos computação que Llama 4 Maverick para o mesmo desempenho.',
      'Llama 4 (Maverick e Scout, lançados em abril de 2025) oferece modelos open-weight com desempenho de ponta e capacidades multimodais avançadas (texto e imagem), além de serem multilíngues.',
      'Llama 4 Scout destaca-se por uma vasta janela de contexto de 10 milhões de tokens, uma das maiores da indústria.',
      'Llama 4 Maverick é considerado um modelo Llama de alto desempenho para tarefas amplas de assistente, codificação e multimodais.',
      'Llama 3.1 (incluindo Llama 3.1 8B, 70B e 405B Instruct, lançados em julho de 2024) continua a oferecer modelos open-weight que permitem uso local gratuito e fine-tuning com total controle.',
      'Ecossistema robusto de provedores de API terceirizados que oferecem custos competitivos e velocidade (Groq é conhecido pela inferência rápida, 250-500+ tokens/segundo para Llama 3.3 70B).',
      'Muse Spark possui um "Contemplating Mode" que orquestra múltiplos agentes para raciocinar em paralelo, competindo com modos de raciocínio extremos de modelos de fronteira.',
      'Muse Spark oferece assistência avançada em saúde e bem-estar, colaborando com mais de 1.000 médicos para insights precisos.',
      'Muse Spark se destaca em codificação visual, permitindo criar websites e mini-jogos a partir de prompts.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade e para modelos maiores.',
      'A qualidade e o custo da API podem variar significativamente dependendo do provedor terceirizado (ex: Replicate é significativamente mais caro para Llama 3.1 405B).',
      'A licença de uso comercial (Llama Community License) é limitada a empresas com receita anual inferior a US$ 700 milhões e exige requisitos de nomeação para derivativos. Não é "open source" no sentido da OSI.',
      'A licença para variantes multimodais do Llama 3.2 explicitamente exclui indivíduos domiciliados na UE de usar os pesos diretamente.',
      'As janelas de contexto para modelos Llama 3.1 (16K ou 131K) são menores que a do Llama 4 Scout (10M) e alguns concorrentes (Gemini 3.1 Pro com 2M).',
      'Muse Spark, embora competitivo em multimodalidade e raciocínio, pode ficar atrás de concorrentes em programação e raciocínio abstrato complexo, e atualmente só produz respostas em texto.',
      'A API do Muse Spark foi atrasada por bugs e não tem data de lançamento pública agendada em junho de 2026.'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.9,
      coding: 4.9,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'A família Llama da Meta, agora com Muse Spark (lançado em abril de 2026) como o novo modelo de ponta da Meta Superintelligence Labs, e Llama 4 (Maverick e Scout, lançados em abril de 2025) e Llama 3.1 (incluindo 8B, 70B e 405B Instruct), oferece modelos "open-weight" que permitem uso local e personalização profunda via fine-tuning. O Muse Spark é um modelo multimodal nativo com raciocínio visual "chain-of-thought" e orquestração multi-agente, exigindo 10x menos computação que o Llama 4 Maverick. O Llama 4 se destaca pelo desempenho de ponta, capacidades multimodais (texto e imagem) e uma vasta janela de contexto (10 milhões de tokens para Scout, 1 milhão para Maverick). Com uma comunidade ativa e um ecossistema de provedores de API que oferecem custos competitivos e alta velocidade de inferência (como Groq), os modelos Llama e Muse Spark são uma opção poderosa e flexível para desenvolvedores e empresas. Embora exija hardware robusto para execução local e a licença comercial tenha certas restrições, sua natureza open-weight o torna ideal para quem busca personalização e controle. Muse Spark também introduz o "Contemplating Mode" e assistência avançada em saúde e codificação visual.'
  },
  {
    id: 'dall-e-4',
    name: 'DALL-E 4 (ChatGPT Images 2.0)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com acesso a GPT-5.5 Thinking e limites de uso; Plus users podem gerar até 50 imagens a cada 3 horas). API para gpt-image-2 (DALL-E 4, modelo gpt-image-2-2026-04-21): Preços por imagem variam, por exemplo, US$ 0.053 (1024x1024, medium quality). O modo instantâneo de geração de imagem é gratuito para todos os usuários do ChatGPT.',
    pros: [
      'DALL-E 4 (agora baseado em gpt-image-2, integrado no ChatGPT Plus e superiores, impulsionado por GPT-5.5) é o modelo de geração de imagens de última geração da OpenAI.',
      'Capacidade de interpretar prompts complexos e conversacionais de forma mais eficaz do que muitos concorrentes, resultando em imagens que correspondem melhor à descrição.',
      'Melhora significativa na renderização de texto dentro das imagens, com suporte multilíngue.',
      'Gera imagens de alta qualidade com diversos estilos, raciocínio visual avançado e saída em resolução 2K.',
      'Integração perfeita com ChatGPT, permitindo criação e modificação de imagens via conversação.',
      'Geração de imagens ultrarrápida (geralmente em menos de 10 segundos).',
      'Direitos comerciais completos incluídos em todos os planos, inclusive no modo gratuito.'
    ],
    cons: [
      'Ainda pode apresentar resultados que parecem "falsos" ou não atingir o fotorrealismo de alguns concorrentes como o Midjourney em certos casos.',
      'DALL-E 2 e DALL-E 3 foram aposentados em 12 de maio de 2026.',
      'O acesso completo e ilimitado aos recursos avançados requer assinatura do ChatGPT Plus ou planos superiores (o modo "Thinking" para imagens).',
      'Preços da API podem ser elevados dependendo da qualidade e resolução para uso em larga escala.'
    ],
    score: {
      reasoning: 4.9,
      writing: 3.8, // Refers to general writing capabilities, not text in image.
      coding: 1.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'DALL-E 4, da OpenAI (integrado ao ChatGPT Plus, agora impulsionado por GPT-5.5, e baseado no modelo gpt-image-2), é a mais recente geração de modelos de geração de imagens da empresa. Ele se destaca pela sua capacidade de interpretar prompts complexos e conversacionais para criar imagens de alta qualidade com renderização aprimorada de texto, suporte multilíngue, e uma forte correspondência com a descrição. O modo instantâneo de geração de imagem é gratuito para todos os usuários do ChatGPT, enquanto o acesso aos recursos avançados é para Plus e superiores. Com gerações ultrarrápidas, o DALL-E 4 é uma ferramenta poderosa para designers, criadores de conteúdo e qualquer pessoa que busque gerar visuais criativos de alto nível, apesar do custo da API para uso em larga escala.'
  },
  {
    id: 'midjourney-v8-1',
    name: 'Midjourney V8.1 (e V7, V8.2 Preview)',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial. Planos pagos: Basic US$ 10/mês (US$ 96/ano) com ~3.3 horas de GPU rápida; Standard US$ 30/mês (US$ 288/ano) com ~15 horas de GPU rápida e gerações ilimitadas no modo Relax; Pro US$ 60/mês (US$ 576/ano) com ~30 horas de GPU rápida, modo Stealth (privacidade) e gerações ilimitadas no modo Relax; Mega US$ 120/mês (US$ 1152/ano) com ~60 horas de GPU rápida, modo Relax ilimitado e modo Stealth. HD mode é agora o padrão, custando menos que 1 minuto de GPU e sendo 3x mais barato.',
    pros: [
      'Midjourney V8.1 (lançado em 30 de abril de 2026) aprimora a qualidade de imagem excepcional, alta resolução (HD 2K nativo), estética marcante e maior precisão na compreensão de prompts. É 4-5x mais rápido para jobs padrão, e o modo HD é 3x mais rápido e 3x mais barato, tornando-o o padrão.',
      'Midjourney V8.2 (previsto para junho de 2026) busca ser mais ousado, experimental e expressivo, com foco na direção artística e personalização aprimorada.',
      'Disponibiliza um Editor Web completo (previsto para junho de 2026), eliminando a dependência do Discord, com funcionalidades de Inpaint, Outpaint, pan e zoom para edição de imagens.',
      'Possui recurso de Consistência de Personagem (--cref) e Style Reference (--sref) para manter faces e estilos consistentemente em diferentes gerações (disponível em V7/V8).',
      'Introduziu o "Draft Mode" (10x mais rápido, 50% de custo reduzido) para iteração rápida de ideias (em V7).',
      'Suporte a geração de vídeo de imagem para vídeo (vídeos de 5 a 21 segundos).',
      'Modo conversacional aprimorado com suporte a entrada de voz e texto mais rica.',
      'Planeja geração 3D para o final de 2026.'
    ],
    cons: [
      'Não possui plano de testes gratuito no site oficial.',
      'Não possui API pública oficial, limitando a integração programática.',
      'O modo Relax, que oferece gerações ilimitadas mais lentas, não está disponível para jobs rápidos e é mais lento.',
      'O modo Stealth (privacidade) está disponível apenas nos planos Pro e Mega.',
      'Curva de aprendizado para prompt engineering avançado.',
      'Horas de GPU rápida não se acumulam (não são transferidas para o próximo mês).',
      'Mesmo com a velocidade aprimorada da V8.1, o uso de recursos de alta qualidade pode ser caro em termos de tempo de GPU.',
      'Ainda não possui aplicativo nativo para Mac.'
    ],
    score: {
      reasoning: 4.7,
      writing: 2.5,
      coding: 1.0,
      speed: 4.9,
      value: 4.6
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney V8.1 (lançado em 30 de abril de 2026) e a próxima V8.2 (prevista para junho de 2026) representam um salto significativo em qualidade visual, alta resolução (HD 2K nativo por padrão), velocidade (4-5x mais rápido para jobs padrão, HD 3x mais rápido e 3x mais barato) e coerência, sendo amplamente reconhecido por seu fotorrealismo e habilidades artísticas. Com a introdução do "Draft Mode" para iteração rápida e o próximo Editor Web que eliminará a dependência do Discord (incluindo Inpaint, Outpaint e Consistência de Personagem), o Midjourney continua a liderar a geração de imagens. Apesar de não ter plano gratuito oficial ou uma API pública, o Midjourney continua a ser uma ferramenta líder para designers e criadores que buscam resultados visuais de altíssimo nível.'
  },
  {
    id: 'stability-ai-models',
    name: 'Stable Diffusion 3.5 (Medium, Large, Turbo), Stable Diffusion XL (Turbo), Stable Audio 3.0',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware); para empresas com mais de US$ 1M de receita anual, licença Enterprise é necessária. API (sistema de créditos): Stable Audio 3.0: 2 créditos por geração. Planos de assinatura Stable Audio: Free (10 faixas/mês, até 6 min); Pro (US$ 11.99/mês para 250 faixas); Studio (US$ 29.99/mês para 675 faixas); Max (US$ 89.99/mês para 2250 faixas). Outros provedores oferecem planos de imagem (ex: ~US$ 10/mês para 2000 gerações, ~US$ 20/mês para 4000 gerações).',
    pros: [
      'Stable Audio 3.0 (lançado em 20 de maio de 2026) é uma família de modelos de difusão latente de pesos abertos para geração e edição de música e efeitos sonoros, capaz de criar peças de até 6 minutos e 20 segundos, com saída de comprimento variável, edição baseada em inpainting e inferência rápida. Os modelos são treinados em dados totalmente licenciados e usuários possuem seus outputs.',
      'Stable Diffusion 3.5 (Medium, Large, Large Turbo, como modelos Core em maio de 2026) são as últimas gerações de modelos de difusão da Stability AI, oferecendo controle aprimorado, qualidade fotorrealista superior, melhor compreensão de prompts complexos, anatomia e renderização de texto.',
      'Stable Diffusion XL (SDXL, incluindo SDXL Turbo) continua sendo um modelo de ponta, acessível e com ótima qualidade de imagem, alta resolução nativa (1024x1024), e é open-weight.',
      'Modelos "open-weight" que podem rodar localmente (com hardware adequado), permitindo controle absoluto, privacidade e fine-tuning (LoRAs, ControlNet), sem taxas por geração para uso próprio.',
      'Ecossistema robusto de modelos fine-tuned pela comunidade.',
      'Gera outputs diversos e representativos de diferentes tons de pele e características.'
    ],
    cons: [
      'Stable Diffusion 4.0 está em desenvolvimento com lançamento previsto para o final de 2026, não está geralmente disponível.',
      'Curva de aprendizado acentuada para uso avançado e configuração técnica para uso local eficiente.',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente para as versões maiores.',
      'Ainda pode apresentar dificuldades em renderizar anatomia humana de forma perfeita em alguns casos.',
      'A qualidade da saída pode variar mais sem fine-tuning em comparação com soluções gerenciadas.',
      'A licença comercial (Stability AI Community License) possui um limite de receita anual de US$ 1M para uso gratuito.',
      'SDXL pode ter desempenho mais lento em resoluções mais baixas e requer mais VRAM.',
      'Stable Audio 3.0 é focado em instrumentais e efeitos sonoros, não oferecendo suporte a vocais, ao contrário de concorrentes como Suno e Udio.',
      'A API do Stable Video Diffusion foi descontinuada em 24 de julho de 2025.'
    ],
    score: {
      reasoning: 4.1,
      writing: 1.8,
      coding: 4.8,
      speed: 4.7,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'A Stability AI oferece uma gama de modelos "open-weight" para IA visual e de áudio, incluindo a família Stable Diffusion 3.5 (Medium, Large, Turbo) e Stable Diffusion XL (SDXL, incluindo Turbo) para geração de imagens, e Stable Audio 3.0 para geração e edição de música e efeitos sonoros. Stable Diffusion 3.5 e SDXL se destacam pela qualidade da imagem, renderização de texto e compreensão de prompts complexos. Stable Audio 3.0 (lançado em maio de 2026) permite gerar áudios de alta qualidade de até 6 minutos e 20 segundos, com modelos open-weight (para versões menores) treinados em dados licenciados, e suporte a inpainting. Os modelos são "open-weight", permitindo uso local gratuito (com limites de receita para uso comercial) e personalização profunda via fine-tuning. A API do Stable Video Diffusion foi descontinuada. Embora exija investimento em aprendizado e hardware potente para as versões maiores, sua flexibilidade e o custo-benefício o tornam ideal para profissionais que buscam personalização, eficiência e controle.'
  },
  {
    id: 'make-com-ai-agents',
    name: 'Make.com (Agentes de IA)',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis: 1.000 créditos/mês, 2 cenários ativos, inclui Make AI Agents (beta), intervalo de 15 minutos. Plano Core: US$ 10.59/mês (ou US$ 9/mês anual) para 10.000 créditos (cenários ilimitados, intervalo de 1 minuto, inclui Make AI Agents). Plano Pro: US$ 18.82/mês (ou US$ 16/mês anual) para 10.000+ créditos (prioridade de execução, variáveis personalizadas, logs completos). Plano Teams: US$ 34.12/mês por usuário (ou US$ 29/mês por usuário anual) para 10.000+ créditos (colaboração, gestão de equipes, prioridade de execução). Plano Enterprise: precificação personalizada (oferta de segurança avançada, suporte 24/7, integrações empresariais e funções personalizadas). Operações não utilizadas acumulam por um mês nos planos pagos.',
    pros: [
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos.',
      'Os "Make AI Agents" (novo aplicativo lançado em 11 de fevereiro de 2026, com atualizações contínuas em maio de 2026) permitem automação inteligente e adaptativa com tomada de decisões em tempo real dentro do canvas, com visibilidade total do processo e logs de raciocínio detalhados, e chat in-canvas para refinamento.',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-5.5, Anthropic Claude Opus 4.8, Google Gemini 3.5 Flash) e milhares de APIs (3.000+ apps, mais integração via módulo HTTP).',
      'Suporte multimodal para AI Agents, permitindo entrada e saída de arquivos como PDFs, imagens e CSVs diretamente no fluxo de trabalho.',
      'Registros detalhados de execução (histórico de cenários e replay de execução) e busca de texto completo em logs para depuração e visibilidade aprimoradas.',
      'Altamente competitivo em termos de custo-benefício para automações complexas em comparação com alternativas como Zapier (geralmente 3-5x mais barato por operação, 80% mais barato em muitos volumes).',
      'Funcional plano gratuito para prototipar automações.',
      'Recursos como "If-else" e "Merge" (lançados em março de 2026) para lógica condicional avançada, e "Make Skills" para assistentes de IA.',
      'Apresenta uma "Library of Agents" com exemplos de agentes pré-construídos para workflows reais.'
    ],
    cons: [
      'O consumo de créditos pode ser imprevisível e rápido em cenários complexos com muitos módulos e Agentes de IA, especialmente porque "créditos" são contados de forma diferente de "tarefas" em outras plataformas.',
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
    description: 'Make.com é uma plataforma de automação visual B2B que se consolidou como uma orquestradora poderosa para sistemas e IAs. Os "Make AI Agents" (recurso da plataforma, com novo aplicativo lançado em fevereiro de 2026 e atualizações contínuas em maio de 2026) permitem a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos como PDFs e imagens, chat in-canvas para refinamento e logs de raciocínio detalhados. A plataforma se integra nativamente com os modelos de IA mais recentes, como OpenAI GPT-5.5, Anthropic Claude Opus 4.8 e Google Gemini 3.5 Flash. Com uma interface altamente intuitiva e recursos aprimorados de controle de fluxo, é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, agora baseados em créditos, oferecem flexibilidade e são competitivos em termos de custo-benefício em comparação com alternativas, apesar do consumo de créditos poder ser imprevisível para tarefas de IA. Inclui uma "Library of Agents" para facilitar a criação.'
  }
];