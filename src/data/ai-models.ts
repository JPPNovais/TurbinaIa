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
    name: 'ChatGPT Plus (GPT-5.5 Instant, GPT-5.5 Thinking Mode, GPT-5.5 Pro)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (acesso limitado a GPT-5.5 Instant para funções básicas, com limites de 10 mensagens/5 horas; inclui anúncios nos EUA). ChatGPT Go: US$ 8/mês (lançado em 15 de janeiro de 2026; acesso a GPT-5.5 Instant com limites de 160 mensagens/3 horas, inclui anúncios nos EUA). ChatGPT Plus: US$ 20/mês (acesso total a GPT-5.5 Instant e GPT-5.5 Thinking Mode como padrão; inclui Deep Research - 10 execuções/mês, Codex com Computer Use no Windows, Agent Mode, Advanced Voice Mode, Custom GPTs, DALL-E 4; limite de 160 mensagens/3 horas para GPT-5.5 Thinking e 80 uploads de arquivos/3 horas). ChatGPT Pro ($100): US$ 100/mês (lançado em 9 de abril de 2026; acesso a GPT-5.5, GPT-5.5 Pro e o1 Pro mode; 50 execuções de Deep Research/mês, 5x os limites do Plus, e uma promoção de lançamento de 10x uso do Codex até 31 de maio de 2026, depois 5x). ChatGPT Pro ($200): US$ 200/mês (acesso ilimitado a GPT-5.5 Thinking, GPT-5.5 Pro e o1 Pro mode; 250 execuções de Deep Research/mês, Deep Think para raciocínio ilimitado, janela de contexto de 1 milhão de tokens, acesso prioritário a novos recursos, uso máximo de todos os recursos). ChatGPT Business: US$ 20/usuário/mês (anual, mínimo de 2 usuários) ou US$ 25-30/usuário/mês (mensal, mínimo de 2 usuários); o preço anual caiu de US$ 25 para US$ 20 em 2 de abril de 2026; inclui acesso ilimitado a GPT-5.5 Thinking e GPT-5.5 Pro, workspaces compartilhados. ChatGPT Enterprise: Preço personalizado (contato com vendas), mínimo de 150 usuários. API para GPT-5.4 Mini: US$ 0.75/milhão de tokens de entrada e US$ 4.50/milhão de tokens de saída. API para GPT-5.4 Standard: US$ 2.50/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída. API para GPT-5.5: US$ 5.00/milhão de tokens de entrada e US$ 30.00/milhão de tokens de saída (lançado em 23 de abril de 2026). API para GPT-5.5 Pro: US$ 30.00/milhão de tokens de entrada e US$ 180.00/milhão de tokens de saída. API para gpt-image-2 (DALL-E 4): US$ 8.00/milhão de tokens de entrada e US$ 30.00/milhão de tokens de saída, com custo estimado por imagem variando (ex: US$ 0.053 para 1024x1024, qualidade média). A API em lote (Batch API) oferece 50% de desconto nas taxas padrão.',
    pros: [
      'GPT-5.5 (lançado em abril de 2026) e GPT-5.5 Thinking Mode são os modelos mais inteligentes e intuitivos da OpenAI para usuários Plus e superiores, destacando-se em raciocínio complexo, codificação, uso de computador, pesquisa científica e segurança cibernética.',
      'GPT-5.5 Thinking oferece uma janela de contexto de até 1 milhão de tokens para usuários Pro, ideal para raciocínio complexo e análise de grandes volumes de informação.',
      'GPT-5.5 Instant (lançado em 5 de maio de 2026) é o modelo padrão do ChatGPT para todos os usuários, oferecendo respostas mais rápidas, precisas e com menos alucinações, com 52.5% de redução em afirmações alucinadas em prompts de alto risco. Teve melhorias no estilo e qualidade de resposta em 28 de maio de 2026.',
      'GPT-5.5 Instant também produz 30.2% menos palavras e 29.2% menos linhas, abordando reclamações de verbosidade.',
      'Acesso a recursos avançados como Deep Research (agente de pesquisa autônomo com relatórios citados e escolha de fontes), Codex (agente de codificação com Computer Use no Windows), Agent Mode, Advanced Voice Mode e Custom GPTs.',
      'Codex, impulsionado por GPT-5.5, introduz uma nova classe de inteligência otimizada para fluxos de trabalho de desenvolvimento complexos e de longo prazo, e está disponível no Amazon Bedrock desde 11 de junho de 2026.',
      'DALL-E 4 (agora baseado em gpt-image-2, integrado no ChatGPT Plus e superiores) oferece geração de imagens com renderização de texto aprimorada, suporte multilíngue, raciocínio visual avançado e saída em resolução 2K.',
      'Advanced Voice Mode permite interação de voz natural e em tempo real, processando áudio diretamente para capturar nuances como tom e ritmo, e suporta compartilhamento de vídeo e tela, disponível em desktop e mobile (novos modelos de voz na API desde 7 de maio de 2026).',
      'Melhorias significativas na memória do ChatGPT, com a introdução de um sistema de memória "Dreaming" em 4 de junho de 2026, para sintetizar informações de múltiplas conversas, disponível para usuários Plus e Pro, e estendendo-se a usuários gratuitos e Go nas próximas semanas (desde 9 de junho de 2026).',
      'Novo seletor de modelos simplificado (Instant, Medium, High, Extra High, Pro Standard, Pro Extended) lançado em 10 de junho de 2026, tornando mais fácil escolher o equilíbrio de velocidade e raciocínio.',
      'Novos recursos na experiência do aplicativo ChatGPT (8 de junho de 2026) incluem gráficos interativos em respostas, uma tabela de conteúdos em conversas mais longas e ferramentas de escrita em tela cheia.',
      'Introdução de "Active sessions", um novo recurso de segurança para revisar e sair de sessões ativas (12 de junho de 2026).',
      'GPT-5.4 e GPT-5.4 Mini estão disponíveis via API com preços mais acessíveis, oferecendo bom desempenho para diversas cargas de trabalho.'
    ],
    cons: [
      'Modelos anteriores como GPT-5 (Instant e Thinking) foram aposentados do ChatGPT em 13 de fevereiro de 2026. GPT-5.2 será aposentado em junho de 2026. DALL-E 2 e DALL-E 3 foram oficialmente descontinuados em 12 de maio de 2026. OpenAI o3 será aposentado em 26 de agosto de 2026, e GPT-4.5 em 27 de junho de 2026. Modelos como gpt-image-1-mini, gpt-image-1.5 e chatgpt-image-latest serão descontinuados em 1º de dezembro de 2026.',
      'A API do Sora será descontinuada em 24 de setembro de 2026, com o aplicativo Sora sendo desativado em 26 de abril de 2026.',
      'O plano Go (US$ 8/mês) exibe anúncios nos EUA.',
      'Usuários dos planos Free e Go não têm acesso aos modelos GPT-5.5 Thinking completos na interface principal do ChatGPT.',
      'O custo da API para modelos de fronteira, como GPT-5.5 Pro, é significativamente mais alto (US$ 30.00/M tokens de entrada e US$ 180.00/M tokens de saída).',
      'Deep Research pode ocasionalmente apresentar alucinações factuais ou inferências incorretas.',
      'Agent Mode possui limites de uso e não é projetado para conversas casuais; a versão de consumidor não possui acesso via API.',
      'O uso de Computer Use no Windows não está disponível na Área Econômica Europeia, Reino Unido e Suíça no lançamento.',
      'GPT-5.5 Thinking, embora poderoso, possui precificação mais alta e pode, em alguns casos, não seguir prompts com precisão ou "super-racionar".',
      'O recurso "canvas" não está mais disponível no GPT-5.5 Instant ou GPT-5.5 Thinking, com funcionalidades de escrita e codificação agora suportadas diretamente em blocos de chat. Usuários pagos podem usar canvas via modelos legados por tempo limitado.',
      'Relatos de um bug de limite de taxa global (`gpt-image-2-codex`) em 5 de junho de 2026, afetando a maioria das solicitações de imagem para algumas contas da API, resultando em erros de limite de taxa com status HTTP 200 OK inesperado.',
      'Anomalias de cota e medição relatadas em 8 de junho de 2026, onde contas Plus não receberam o reset unificado de cota e o uso estava drenando mais rapidamente após uma atualização do Codex em 4 de junho de 2026.',
      'Taxas de erro elevadas em Codex, ChatGPT e Responses API foram observadas no início de junho de 2026, apontando para problemas de orquestração de provedor e capacidade.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelos modelos GPT-5.5 (incluindo GPT-5.5 Instant, GPT-5.5 Thinking Mode e GPT-5.5 Pro), representa o ápice da inteligência artificial generativa da OpenAI. O GPT-5.5 Thinking Mode é o modelo mais capaz da empresa, otimizado para tarefas complexas de codificação, pesquisa e análise de dados, com fortes capacidades agenticas e avanços em segurança cibernética. O GPT-5.5 Instant (lançado em 5 de maio de 2026) é o modelo padrão do ChatGPT para todos os usuários, focado em velocidade, precisão, redução significativa de alucinações e uma janela de contexto expandida, com melhorias no estilo de resposta desde 28 de maio de 2026. A plataforma oferece acesso a recursos como Deep Research para relatórios citados, Codex com Computer Use no Windows, Agent Mode para automação proativa, Advanced Voice Mode para interações naturais, e Custom GPTs, além do modelo de imagem DALL-E 4 (agora baseado em gpt-image-2). Notavelmente, o ChatGPT recebeu melhorias significativas em suas capacidades de memória a partir de junho de 2026, com a introdução de um sistema de memória "Dreaming" e a extensão do acesso a usuários gratuitos e Go. Novos recursos incluem um seletor de modelos simplificado (10 de junho de 2026), gráficos interativos e tabela de conteúdos no aplicativo (8 de junho de 2026), e o recurso de segurança "Active sessions". Embora modelos anteriores como GPT-5.2, OpenAI o3 e GPT-4.5 estejam sendo aposentados, e o Sora descontinuado, a OpenAI continua a evoluir sua oferta para atender a uma gama ampla de usuários, desde casuais até grandes empresas.'
  },
  {
    id: 'claude-opus-4-8',
    name: 'Claude Fable 5 (Mythos-class), Claude Opus 4.8 (e Claude Opus 4.7), Claude Sonnet 4.6, Claude Haiku 4.5',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso a Claude Sonnet 4.6 e Claude Haiku 4.5, com limites de uso diários; inclui criação de arquivos, conectores e habilidades). Plano Pro: US$ 20/mês (ou US$ 17/mês anual) com acesso a todos os modelos (incluindo Claude Opus 4.8, Sonnet 4.6, Haiku 4.5), limites de taxa significativamente mais altos e Claude Code. Plano Max: US$ 100/mês (Max 5x, 5x o uso do Pro) ou US$ 200/mês (Max 20x, 20x o uso do Pro), com acesso prioritário a novos modelos e funcionalidades (somente cobrança mensal). Plano Team Standard: US$ 25/usuário/mês (US$ 20/usuário/mês anual, mínimo de 5 usuários) para colaboração e recursos organizacionais. Plano Team Premium: US$ 125/usuário/mês (inclui Claude Code). Plano Enterprise: Preço personalizado (contato com vendas), oferece compliance, governança e implantação customizada. *A partir de 15 de junho de 2026, o uso programático de agentes via Agent SDK, `claude -p` e apps de terceiros passará a ser cobrado por meio de um crédito mensal separado (US$ 20 para Pro, US$ 100 para Max 5x, US$ 200 para Max 20x, etc.) e, após o esgotamento do crédito, será cobrado pelas taxas API padrão. O uso interativo no Claude.ai e Claude Code no terminal não é afetado por esta mudança.* API para Claude Haiku 4.5: US$ 1.00/milhão de tokens de entrada e US$ 5.00/milhão de tokens de saída. API para Claude Sonnet 4.6: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 1 milhão de tokens. API para Claude Opus 4.8/4.7: US$ 5.00/milhão de tokens de entrada e US$ 25.00/milhão de tokens de saída para uso padrão; US$ 10.00/milhão de tokens de entrada e US$ 50.00/milhão de tokens de saída para modo rápido (2.5x mais rápido que modos rápidos anteriores). Batch API oferece 50% de desconto nas taxas padrão.',
    pros: [
      'Claude Fable 5 (Mythos-class) (lançado em 9 de junho de 2026) é o novo modelo de ponta da Anthropic, superando Opus em diversas avaliações de engenharia de software, conhecimento, visão e pesquisa científica, com janela de contexto de 1 milhão de tokens, 128K tokens de saída e raciocínio adaptativo sempre ativo.',
      'Claude Opus 4.8 (lançado em 28 de maio de 2026) é o modelo mais avançado da Anthropic, mostrando melhorias em codificação, habilidades agenticas, raciocínio e tarefas de conhecimento prático, com ênfase em honestidade e confiabilidade. Suporta "dynamic workflows" (prévia de pesquisa) que podem gerar centenas de subagentes paralelos e "Effort Control" para ajustar a profundidade do raciocínio.',
      'Claude Opus 4.7 (lançado em 16 de abril de 2026) oferece desempenho robusto em raciocínio e é muito forte em engenharia de software e tarefas complexas de codificação, com visão aprimorada, aceitando imagens de até 2.576 pixels.',
      'Claude Sonnet 4.6 (lançado em 17 de fevereiro de 2026) oferece desempenho de nível Opus 4.5 a um custo de Sonnet, com melhorias em codificação, uso de computador, raciocínio de longo contexto e planejamento de agente; suporta janela de contexto de 1 milhão de tokens via API.',
      'Claude Haiku 4.5 (lançado em 15 de outubro de 2025) é o modelo mais rápido e eficiente da Anthropic, oferecendo desempenho quase de fronteira.',
      'Os modelos Opus (4.8, 4.7) e Sonnet 4.6 oferecem uma janela de contexto de 1 milhão de tokens via API a taxas padrão e em Claude Code; para uso conversacional no Claude.ai em planos pagos, a janela de contexto é de 500K tokens.',
      'Excelente em visão, interpretando gráficos, tabelas e transcrevendo texto de imagens imperfeitas.',
      'Apresenta o recurso "Artifacts" no Claude.ai (lançado em junho de 2024) para expandir a interação do usuário, permitindo criar, pré-visualizar e interagir com conteúdo gerado.',
      'Recursos como "computer use" (beta público, desde outubro de 2024) permitem ao Claude interagir com computadores de forma mais autônoma.',
      'Persistent memory para todos os usuários (incluindo o nível gratuito) desde março de 2026.',
      'Claude Code agent teams, introduzidos em 2026 como prévia de pesquisa, permitem que um agente líder delegue trabalho a agentes especialistas em segundo plano, trabalhando em paralelo.',
      'Claude Cowork, um agente de desktop lançado em 12 de janeiro de 2026 em prévia de pesquisa e com disponibilidade geral em abril de 2026, permite automação de fluxo de trabalho sem codificação e interage diretamente com arquivos no desktop.',
      'Introduziu "Projects" em março de 2026 para workspaces persistentes com instruções, contexto, memória e tarefas agendadas, melhorando a gestão de contexto e a produtividade em Cowork.'
    ],
    cons: [
      'A janela de contexto conversacional dos modelos Claude Opus (500K tokens) em planos pagos é menor que a janela de 1 milhão de tokens disponível via API ou em Claude Code.',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança (Constitutional AI).',
      'O plano gratuito não inclui acesso a funcionalidades avançadas específicas como "computer use" ou modelos Opus completos.',
      'Modelos anteriores como Claude Sonnet 4 e Claude Opus 4 foram descontinuados em 14 de abril de 2026, e Claude Opus 4.1 em 5 de junho de 2026.',
      'O novo tokenizer do Claude Opus 4.7 pode inflacionar a contagem de tokens em até 35% para o mesmo texto em comparação com Opus 4.6, aumentando o custo efetivo. Essa penalidade de tokenizer permanece em Opus 4.8 para migrações diretas de Opus 4.6.',
      'Em tarefas de codificação complexas, o Claude Opus 4.7/4.8 é, em média, mais lento para retornar uma resposta em comparação com o GPT-5.5, embora o modo rápido possa compensar. Além disso, Opus 4.8 pode ser verboso, gerando mais tokens.',
      'Claude Opus 4.7 teve relatos de problemas com recuperação de contexto longo e com o Claude Code.',
      'A partir de 15 de junho de 2026, o uso programático de agentes (Agent SDK, `claude -p`, etc.) terá um novo modelo de cobrança com um crédito mensal limitado e, em seguida, tarifas API completas, o que pode aumentar significativamente os custos para usuários intensivos de agentes.',
      'Relatos de interrupções e erros elevados em modelos Opus e Sonnet no início de junho de 2026, e problemas de qualidade no Claude Code, como não seguir instruções em sessões após algumas interações, potencialmente devido à regressão de cache/contexto e pressão de infraestrutura.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 4.8,
      value: 4.8
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude Fable 5 (Mythos-class), lançado em 9 de junho de 2026, e Claude Opus 4.8 (lançado em 28 de maio de 2026) são os modelos mais avançados da Anthropic, com Fable 5 superando Opus em diversas avaliações de engenharia de software, conhecimento, visão e pesquisa científica, e Opus 4.8 oferecendo desempenho robusto em raciocínio, codificação e compreensão multimodal. Ambos incluem capacidades de visão e função de chamada, melhorias em honestidade e confiabilidade, e suportam "dynamic workflows" (prévia de pesquisa) e "Effort Control". Os modelos Opus e Fable 5 oferecem uma janela de contexto de 1 milhão de tokens via API e em Claude Code, mas 500K para uso conversacional direto. Claude Sonnet 4.6 (lançado em 17 de fevereiro de 2026) oferece um desempenho de nível Opus 4.5 a um preço de Sonnet, tornando-o uma opção eficiente e capaz. Claude Haiku 4.5 (lançado em 15 de outubro de 2025) é o modelo mais rápido e econômico da família. A Anthropic continua a focar em segurança e alinhamento em seus modelos e introduziu recursos como "Artifacts" para interações expandidas, "computer use" em beta público, persistent memory para todos os usuários, o agente de desktop Claude Cowork (com disponibilidade geral em abril de 2026) e "Projects" para workspaces persistentes. No entanto, a partir de 15 de junho de 2026, a cobrança para o uso programático de agentes via Agent SDK muda significativamente, podendo impactar custos para usuários intensivos. Relatos de interrupções e problemas de qualidade no Claude Code também foram observados no início de junho de 2026.'
  },
  {
    id: 'gemini-models',
    name: 'Gemini 3.5 Flash, Gemini 3.1 Pro, Gemini Omni Flash, Gemini 3.1 Flash-Lite',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com acesso ao aplicativo Gemini, Gemini 3.5 Flash e recursos básicos, com limites de uso; acesso gratuito apenas a modelos Flash e Flash-Lite desde abril de 2026; usuários gratuitos obtêm 32K tokens de contexto em vez de 1M para assinantes pagos). Google AI Plus: US$ 4.99/mês (anteriormente US$ 7.99/mês) com 400GB de armazenamento na nuvem (dobrado de 200GB), inclui Omni em Gemini, Daily Brief, AI Inbox no Gmail, acesso a Flow para geração de vídeo (com limites de uso específicos). Google AI Pro (anteriormente Gemini Advanced): US$ 19.99/mês (acesso a Gemini 3.1 Pro, Gemini 3.5 Flash, Gemini 3.1 Flash-Lite; 5TB de armazenamento Google One (aumentado de 2TB em 1 de abril de 2026), Deep Research, Gems - personas de IA personalizadas, integração com Workspace, YouTube Premium Lite). Google AI Ultra ($99.99): US$ 99.99/mês (inclui acesso superior a Gemini 3.1 Pro e outros modelos avançados, 20TB de armazenamento, acesso a Veo e Project Genie, YouTube Premium completo). Google AI Ultra ($199.99): US$ 199.99/mês (inclui acesso máximo a modelos de fronteira, 30TB de armazenamento, Deep Think, acesso prioritário a novos recursos, Gemini Spark, Project Mariner, YouTube Premium completo). API para Gemini 3.5 Flash: US$ 1.50/milhão de tokens de entrada e US$ 9.00/milhão de tokens de saída. API para Gemini 3 Flash: US$ 0.50/milhão de tokens de entrada e US$ 3.00/milhão de tokens de saída. API para Gemini 3.1 Pro: US$ 2.00/milhão de tokens de entrada e US$ 12.00/milhão de tokens de saída para prompts com até 200K tokens; para prompts com mais de 200K tokens, os custos dobram para US$ 4.00/milhão de entrada e US$ 18.00/milhão de saída. API para Gemini 3.1 Flash-Lite: US$ 0.25/milhão de tokens de entrada e US$ 1.50/milhão de tokens de saída. API para Gemini 3.1 Flash Image: Preços por imagem variam (ex: US$ 0.045 por imagem 0.5K, US$ 0.067 por imagem 1K, US$ 0.151 por imagem 4K), com suporte a vídeo-para-imagem. API para Gemini Omni Flash: Acesso via API planejado, com lançamento previsto para as próximas semanas após o Google I/O de maio de 2026.',
    pros: [
      'Gemini 3.5 Flash (lançado em 19 de maio de 2026) é o novo modelo padrão para o aplicativo Gemini e o AI Mode do Google Search, oferecendo respostas 4x mais rápidas (TPS) e superando o Gemini 3.1 Pro em benchmarks de tarefas agenticas e codificação, sendo também mais econômico.',
      'Gemini Omni (anunciado e lançado em 19 de maio de 2026), com o primeiro modelo Gemini Omni Flash, é um novo "modelo de mundo" capaz de simular e raciocinar sobre a realidade física, com capacidades multimodais nativas de entrada e saída, incluindo geração e edição de vídeo.',
      'Gemini 3.1 Pro (lançado em fevereiro de 2026) é um modelo poderoso e versátil com uma vasta janela de contexto de 1 milhão de tokens via API (com opção de 2 milhões de tokens), destacando-se em raciocínio complexo e compreensão multimodal.',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição, incluindo o novo suporte a geração de vídeo-para-imagem no Gemini 3.1 Flash Image.',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome, YouTube).',
      'Recursos avançados do Google AI Pro (anteriormente Gemini Advanced) como "Deep Research" (agente de pesquisa autônomo), "Gems" (personas de IA personalizadas) e "Reference past chats" para contextualização.',
      'Managed Agents na API Gemini (preview público, 19 de maio de 2026) permitem construir e implantar agentes autônomos e com estado em ambientes sandbox seguros.',
      'Gemini 3.1 Flash-Lite (lançado em março de 2026) é um modelo altamente eficiente em custo para tarefas de alto volume.',
      'Gemini Spark, impulsionado por Gemini 3.5 Flash, atua como um parceiro ativo que realiza tarefas em nome do usuário, com integração com serviços Google de primeira parte como Gmail e Docs.',
      'A introdução de um novo sistema de cobrança por uso de computação (em vez de mensagens) para planos pagos, e fallback automático para modelos mais leves, melhorando a previsibilidade e a experiência do usuário.'
    ],
    cons: [
      'A API para Gemini 3.1 Pro é mais cara para prompts que excedem 200K tokens.',
      'A janela de contexto para Gemini Advanced (Google AI Pro) na interface do usuário é de 1 milhão de tokens, enquanto a API do Gemini 3.1 Pro oferece 1 milhão de tokens (com opção de 2 milhões de tokens).',
      'Modelos como Gemini 2.0 Flash e Flash-Lite foram descontinuados em 1º de junho de 2026.',
      'O acesso a modelos Pro via API é pago, com planos gratuitos apenas para os modelos Flash e Flash-Lite desde abril de 2026.',
      'A segmentação de imagem não é explicitamente suportada nos modelos Gemini 3.1.',
      'Embora o Gemini 3.5 Flash seja mais rápido e capaz em muitas cargas de trabalho, seu preço por token é 3x maior que o do Gemini 3 Flash, e em cenários agenticos complexos, pode gerar mais tokens, tornando-o efetivamente mais caro que o Gemini 3.1 Pro para algumas tarefas.',
      'Gemini Omni Flash é computacionalmente intensivo, e a geração de clipes complexos de alta fidelidade consome pesadamente os limites de uso diário do plano AI Pro. A API para Gemini Omni Flash ainda está em fase de lançamento inicial, com disponibilidade geral planejada para as próximas semanas após o Google I/O de maio de 2026.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.9
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 3.5 Flash (lançado em 19 de maio de 2026) é o novo modelo padrão do Google, otimizado para velocidade e desempenho em tarefas agenticas e de codificação, superando o Gemini 3.1 Pro em benchmarks e sendo mais econômico em muitos cenários. A família Gemini Omni, com o Gemini Omni Flash (lançado em 19 de maio de 2026 e com API em breve), introduz um "modelo de mundo" multimodal com capacidades de simulação, geração e edição de vídeo de alta qualidade a partir de diversas entradas. O Gemini 3.1 Pro (lançado em fevereiro de 2026) é o modelo de linguagem multimodal avançado do Google, oferecendo vasta janela de contexto de até 1 milhão de tokens (com opção de 2 milhões de tokens via API) para análise de grandes volumes de informações em texto, imagem, áudio e vídeo. O Gemini 3.1 Flash-Lite (lançado em março de 2026) é um modelo altamente eficiente em custo para tarefas de alto volume. O Gemini Spark (um agente de IA 24/7) é impulsionado por Gemini 3.5 Flash, atua como um parceiro ativo que executa tarefas em nome do usuário, com integração profunda com serviços Google de primeira parte como Gmail e Docs. A Google também lançou o Managed Agents na API Gemini (preview público, 19 de maio de 2026) para construção de agentes autônomos. Os planos de assinatura foram atualizados em maio/junho de 2026, com o Google AI Plus agora a US$ 4.99/mês e a introdução de dois novos planos Google AI Ultra em US$ 99.99/mês e US$ 199.99/mês, oferecendo acesso expandido a modelos e recursos. O sistema de cobrança por uso de computação e o fallback automático para modelos mais leves também visam melhorar a experiência do usuário e a previsibilidade de custos.'
  },
  {
    id: 'llama-models',
    name: 'Muse Spark, Llama 5, Llama 4 (Maverick, Scout), Llama 3.1 (8B, 70B, 405B)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware; licença comunitária Llama 5 para uso não comercial e comercial até US$ 700M de receita anual, exige que derivativos comecem com "Llama" e exibam "Built with Llama"); indivíduos domiciliados na UE excluídos para variantes multimodais do Llama 4). API para Llama 3.1 8B Instruct: A partir de US$ 0.020/milhão de tokens de entrada e US$ 0.050/milhão de tokens de saída (via Meta-llama). API para Llama 3.1 70B Instruct: A partir de US$ 0.23/milhão de tokens de entrada e US$ 0.40/milhão de tokens de saída (via Deepinfra, para melhor custo), ou US$ 0.59/milhão de tokens de entrada e US$ 0.79/milhão de tokens de saída (via Groq, para maior velocidade), ou US$ 0.88/milhão de tokens de entrada e US$ 0.88/milhão de tokens de saída (via Together.ai). API para Llama 3.1 405B Instruct: A partir de US$ 0.80/milhão de tokens de entrada e US$ 0.80/milhão de tokens de saída (via Deepinfra), ou US$ 0.90/milhão de tokens de entrada e US$ 0.90/milhão de tokens de saída (via Fireworks), ou US$ 3.50/milhão de tokens de entrada e US$ 3.50/milhão de tokens de saída (via Together AI). API para Llama 4 Scout (10M contexto): Disponível em inferência dedicada (preços variam por provedor). API para Llama 4 Maverick (1M contexto): Disponível em inferência dedicada (preços variam por provedor). Muse Spark: A API está em prévia privada para usuários selecionados e não está geralmente disponível.',
    pros: [
      'Muse Spark (lançado em abril de 2026) da Meta Superintelligence Labs, é o novo modelo de ponta da Meta e seu primeiro modelo proprietário (closed-weight), com multimodalidade nativa, raciocínio visual "chain-of-thought" e orquestração multi-agente. Requer 10x menos computação que Llama 4 Maverick para o mesmo desempenho, e integra-se profundamente com os aplicativos Meta.',
      'Llama 5 (lançado em 8 de abril de 2026) oferece modelos open-weight que atingem quase a paridade com o GPT-5 em benchmarks de raciocínio e codificação.',
      'Llama 5 (lançado em 8 de abril de 2026) apresenta "Recursive Self-Improvement" (RSI), permitindo que o modelo identifique e corrija erros em seu próprio raciocínio mid-tarefa sem feedback externo, melhorando significativamente a precisão em problemas lógicos complexos, depuração de código e síntese de pesquisa.',
      'Llama 4 (Maverick e Scout, lançados em abril de 2025) continua a oferecer modelos open-weight com desempenho de ponta e capacidades multimodais avançadas (texto e imagem), além de serem multilíngues (suporte a 200 idiomas, com compreensão de imagem limitada ao inglês).',
      'Llama 4 Scout destaca-se por uma vasta janela de contexto de 10 milhões de tokens, uma das maiores da indústria.',
      'Llama 4 Maverick é considerado um modelo Llama de alto desempenho para tarefas amplas de assistente, codificação e multimodais, com janela de contexto de 1 milhão de tokens.',
      'Llama 3.1 (incluindo Llama 3.1 8B, 70B e 405B Instruct, lançados em julho de 2024) continua a oferecer modelos open-weight que permitem uso local gratuito e fine-tuning com total controle.',
      'Ecossistema robusto de provedores de API terceirizados que oferecem custos competitivos (como Deepinfra) e velocidade (Groq é conhecido pela inferência rápida, 250-500+ tokens/segundo para Llama 3.3 70B).',
      'Muse Spark possui um "Contemplating Mode" que orquestra múltiplos agentes para raciocinar em paralelo, competindo com modos de raciocínio extremos de modelos de fronteira.',
      'Muse Spark oferece assistência avançada em saúde e bem-estar, colaborando com mais de 1.000 médicos para insights precisos.',
      'Muse Spark se destaca em codificação visual, permitindo criar websites e mini-jogos a partir de prompts.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade e para modelos maiores.',
      'A qualidade e o custo da API podem variar significativamente dependendo do provedor terceirizado.',
      'A licença de uso comercial (Llama Community License) é limitada a empresas com receita anual inferior a US$ 700 milhões, restringe a criação de produtos que competem com a Meta, proíbe o uso de outputs para treinar outros LLMs não-Llama, e exige requisitos de nomeação para derivativos. Não é "open source" no sentido da OSI.',
      'A licença para variantes multimodais do Llama 4 (ou Llama 3.2 multimodal) explicitamente exclui indivíduos e empresas domiciliados na UE de usar os pesos diretamente devido à ambiguidade da Lei de IA.',
      'As janelas de contexto para modelos Llama 3.1 (128K para 8B, 70B e 405B) são menores que a do Llama 4 Scout (10M) e alguns concorrentes (Gemini 3.1 Pro com 2M).',
      'Muse Spark, embora competitivo em multimodalidade e raciocínio, pode ficar atrás de concorrentes como GPT-5.4 Pro e Gemini 3.1 Pro em programação e raciocínio abstrato complexo, e atualmente só produz respostas em texto.',
      'A API do Muse Spark está em prévia privada para usuários selecionados e não está geralmente disponível, tendo enfrentado atrasos.',
      'Llama 4 Behemoth, embora anunciado em prévia, foi efetivamente arquivado e não foi lançado publicamente.',
      'Llama 4 Maverick pode ter desempenho inferior a concorrentes como DeepSeek V4 e Qwen 3.5/3.6 em algumas tarefas de codificação e raciocínio complexo, e houve controvérsias sobre benchmarks.'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.9,
      coding: 4.9,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'A família Llama da Meta, agora com Muse Spark (lançado em abril de 2026) como o novo modelo de ponta proprietário (closed-weight) da Meta Superintelligence Labs, e Llama 5 (lançado em abril de 2026) como o mais recente open-weight, oferece modelos avançados. O Muse Spark é um modelo multimodal nativo com raciocínio visual "chain-of-thought", orquestração multi-agente e exigindo 10x menos computação que o Llama 4 Maverick, integrando-se profundamente com os aplicativos Meta. O Llama 5 se destaca pelo desempenho de ponta open-weight, quase atingindo a paridade com o GPT-5 em benchmarks, e introduzindo a capacidade de "Recursive Self-Improvement" (RSI) para auto-correção de raciocínio. O Llama 4 (Maverick e Scout, lançados em abril de 2025) continua a oferecer modelos "open-weight" com desempenho de ponta, capacidades multimodais (texto e imagem) e uma vasta janela de contexto (10 milhões de tokens para Scout, 1 milhão para Maverick). Com uma comunidade ativa e um ecossistema de provedores de API que oferecem custos competitivos e alta velocidade de inferência (como Groq), os modelos Llama e Muse Spark são uma opção poderosa e flexível para desenvolvedores e empresas. Embora exija hardware robusto para execução local e a licença comercial tenha certas restrições (incluindo exclusões para a UE em variantes multimodais do Llama 4), sua natureza open-weight (para Llama) o torna ideal para quem busca personalização e controle. Muse Spark também introduz o "Contemplating Mode" e assistência avançada em saúde e codificação visual, mas sua API está em prévia privada e tem enfrentado atrasos no lançamento geral. Notavelmente, o Llama 4 Behemoth, embora anunciado em prévia, foi efetivamente arquivado e não foi lançado publicamente.'
  },
  {
    id: 'chatgpt-images-2-0',
    name: 'ChatGPT Images 2.0 (GPT-Image-2)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com acesso a modelos GPT-5.5 e limites de uso; usuários Plus podem gerar até 50 imagens a cada 3 horas). API para gpt-image-2 (lançado em 21 de abril de 2026): Preços da API são baseados em tokens (ex: input US$ 8.00/milhão, output US$ 30.00/milhão), com custo estimado por imagem variando, por exemplo, US$ 0.053 (1024x1024, medium quality), US$ 0.211 (1024x1024, high quality). O modo instantâneo de geração de imagem é gratuito para todos os usuários do ChatGPT, com limites dinâmicos (2-3 imagens por 24 horas para usuários free).',
    pros: [
      'ChatGPT Images 2.0 (agora baseado em gpt-image-2, lançado em 21 de abril de 2026 e integrado no ChatGPT Plus e superiores, impulsionado por GPT-5.5) é o modelo de geração de imagens de última geração da OpenAI, oferecendo uma arquitetura unificada para melhor compreensão e interação.',
      'Capacidade de interpretar prompts complexos e conversacionais de forma mais eficaz do que muitos concorrentes, resultando em imagens que correspondem melhor à descrição.',
      'Melhora significativa na renderização de texto dentro das imagens, com suporte multilíngue.',
      'Gera imagens de alta qualidade com diversos estilos, raciocínio visual avançado e saída em resolução 2K, com opção de upscaling para 4K.',
      'Integração perfeita com ChatGPT, permitindo criação e modificação de imagens via conversação e edição iterativa.',
      'Geração de imagens ultrarrápida (geralmente em menos de 10 segundos).',
      'Direitos comerciais completos incluídos em todos os planos, inclusive no modo gratuito.'
    ],
    cons: [
      'Ainda pode apresentar resultados que parecem "falsos" ou não atingir o fotorrealismo de alguns concorrentes como o Midjourney em certos casos.',
      'DALL-E 2 e DALL-E 3 foram oficialmente descontinuados em 12 de maio de 2026. Outros modelos como gpt-image-1-mini, gpt-image-1.5 e chatgpt-image-latest serão descontinuados em 1º de dezembro de 2026, com migração forçada para gpt-image-2, o que pode causar múltiplas migrações para desenvolvedores.',
      'O acesso completo e ilimitado aos recursos avançados requer assinatura do ChatGPT Plus ou planos superiores (o modo "Thinking" para imagens).',
      'Preços da API podem ser elevados, pois são baseados em tokens, dependendo da qualidade e resolução para uso em larga escala.',
      'Usuários da API têm enfrentado problemas com limites de taxa, incluindo um bug relatado em 5 de junho de 2026, onde o `gpt-image-2-codex` estava esgotando o limite global de RPM, bloqueando a maioria das solicitações de imagem para algumas contas e resultando em erros "Rate limit reached" inesperados com status HTTP 200 OK para tarefas de edição de texto.'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.5, // Ajustado para refletir a renderização de texto aprimorada *dentro* das imagens.
      coding: 1.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Images 2.0, da OpenAI (agora baseado no modelo `gpt-image-2`, lançado em 21 de abril de 2026 e impulsionado por GPT-5.5), é a mais recente geração de modelos de geração de imagens da empresa. Ele se destaca por sua arquitetura unificada que permite interpretar prompts complexos e conversacionais para criar imagens de alta qualidade com renderização aprimorada de texto, suporte multilíngue e uma forte correspondência com a descrição. O modo instantâneo de geração de imagem é gratuito para todos os usuários do ChatGPT (com limites de 2-3 imagens por dia), enquanto o acesso aos recursos avançados e "Images with thinking" é para Plus e superiores. Modelos anteriores como DALL-E 2 e DALL-E 3 foram oficialmente descontinuados em 12 de maio de 2026, e outros modelos de imagem da API serão descontinuados em dezembro de 2026, consolidando a oferta da OpenAI no `gpt-image-2`. Com gerações ultrarrápidas, o ChatGPT Images 2.0 é uma ferramenta poderosa para designers e criadores de conteúdo, embora usuários da API tenham enfrentado problemas com limites de taxa e erros inesperados de "Rate limit reached" no início de junho de 2026.'
  },
  {
    id: 'midjourney-v8-1',
    name: 'Midjourney V8.1 (e V7, V8.2 Preview)',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial. Planos pagos: Basic US$ 10/mês (US$ 96/ano) com ~3.3 horas de GPU rápida; Standard US$ 30/mês (US$ 288/ano) com ~15 horas de GPU rápida e gerações ilimitadas no modo Relax; Pro US$ 60/mês (US$ 576/ano) com ~30 horas de GPU rápida, modo Stealth (privacidade) e gerações ilimitadas no modo Relax; Mega US$ 120/mês (US$ 1152/ano) com ~60 horas de GPU rápida, modo Relax ilimitado e modo Stealth. O modo HD é agora o padrão para V8.1, sendo 3x mais rápido e 3x mais barato.',
    pros: [
      'Midjourney V8.1 (lançado em 30 de abril de 2026) aprimora a qualidade de imagem excepcional, com estética marcante no espírito da V7, alta resolução (HD 2K nativo, agora padrão), e maior precisão na compreensão de prompts. É 4-5x mais rápido para jobs padrão, e o modo HD é 3x mais rápido e 3x mais barato, tornando-o o padrão para V8.1.',
      'Midjourney V8.2 (previsto para junho de 2026) busca ser mais ousado, experimental e expressivo, com foco na direção artística e personalização aprimorada, além de correções estéticas.',
      'Disponibiliza um Editor Web completo (previsto para junho de 2026, com desenvolvimento ativo em edição, inpaint, outpaint, pan, zoom e capacidade de multi-referência), eliminando a dependência do Discord para muitas tarefas.',
      'Possui recurso de Consistência de Personagem (--cref) e Style Reference (--sref) para manter faces e estilos consistentemente em diferentes gerações (disponível em V7/V8).',
      'Introduziu o "Draft Mode" (10x mais rápido, 50% de custo reduzido) para iteração rápida de ideias (em V7), com um V8 Draft Mode sendo considerado.',
      'Suporte a geração de vídeo de imagem para vídeo (vídeos de 5 a 21 segundos).',
      'Modo conversacional aprimorado com suporte a entrada de voz e texto mais rica, e capacidade de usar referências de imagem e estilo em conversas.',
      'Planeja geração 3D para o final de 2026.'
    ],
    cons: [
      'Não possui plano de testes gratuito no site oficial.',
      'Não possui API pública oficial, limitando a integração programática (apenas Enterprise ou Pro para API de desenvolvedores).',
      'O modo Relax, que oferece gerações ilimitadas mais lentas, não está disponível para jobs rápidos e é mais lento.',
      'O modo Stealth (privacidade) está disponível apenas nos planos Pro e Mega.',
      'Curva de aprendizado para prompt engineering avançado.',
      'Horas de GPU rápida não se acumulam (não são transferidas para o próximo mês).',
      'Mesmo com a velocidade aprimorada da V8.1, o uso de recursos de alta qualidade pode ser caro em termos de tempo de GPU.',
      'Ainda não possui aplicativo nativo para Mac.',
      'A versão V8.0 pode ser descontinuada em breve após a V8.1 se tornar o modelo padrão.'
    ],
    score: {
      reasoning: 4.7,
      writing: 2.5,
      coding: 1.0,
      speed: 4.9,
      value: 4.6
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney V8.1 (lançado em 30 de abril de 2026) e a próxima V8.2 (prevista para junho de 2026) representam um salto significativo em qualidade visual, alta resolução (HD 2K nativo por padrão para V8.1), velocidade (4-5x mais rápido para jobs padrão, HD 3x mais rápido e 3x mais barato) e coerência, com uma estética que retorna ao espírito da V7. É amplamente reconhecido por seu fotorrealismo e habilidades artísticas. Com a introdução do "Draft Mode" para iteração rápida e um Editor Web completo (previsto para junho de 2026) que oferecerá edição, inpaint, outpaint e consistência de personagem sem a dependência do Discord, o Midjourney continua a liderar a geração de imagens. O modo conversacional também foi aprimorado para suportar entradas de voz e texto ricas, e a capacidade de usar referências de imagem e estilo. Apesar de não ter plano gratuito oficial ou uma API pública (apenas para Enterprise ou Pro), o Midjourney continua a ser uma ferramenta líder para designers e criadores que buscam resultados visuais de altíssimo nível, com planos para geração 3D no final de 2026.'
  },
  {
    id: 'stability-ai-models',
    name: 'Stable Diffusion 4 Ultra, Stable Diffusion 3.5 (Medium, Large, Turbo), Stable Diffusion XL (Turbo), Stable Audio 3.0',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware); para empresas com mais de US$ 1M de receita anual, licença Enterprise é necessária. API (sistema de créditos): Stable Audio 3.0: 2 créditos por geração. Planos de assinatura Stable Audio: Free (10 faixas/mês, até 6 min); Pro (US$ 11.99/mês para 250 faixas); Studio (US$ 29.99/mês para 675 faixas); Max (US$ 89.99/mês para 2250 faixas). Outros provedores oferecem planos de imagem (ex: ~US$ 10/mês para 2000 gerações, ~US$ 20/mês para 4000 gerações).',
    pros: [
      'Stable Audio 3.0 (lançado em 20 de maio de 2026) é uma família de modelos de difusão latente de pesos abertos para geração e edição de música e efeitos sonoros, capaz de criar peças de até 6 minutos e 20 segundos, com saída de comprimento variável, edição baseada em inpainting e inferência rápida. Os modelos são treinados em dados totalmente licenciados e usuários possuem seus outputs.',
      'Stable Diffusion 4 Ultra (lançado em março de 2026) representa uma grande reformulação arquitetônica (backbone DiT), entregando fotorrealismo de ponta, renderização de texto significativamente aprimorada, anatomia e geração de mãos corretas, e simulação de iluminação cinematográfica, tudo sob licença comunitária open-weight.',
      'Stable Diffusion 3.5 (Medium, Large, Large Turbo, lançados em outubro/dezembro de 2024 como modelos Core) são as últimas gerações de modelos de difusão da Stability AI, oferecendo controle aprimorado, qualidade fotorrealista superior, melhor compreensão de prompts complexos, anatomia e renderização de texto.',
      'Stable Diffusion XL (SDXL, incluindo SDXL Turbo) continua sendo um modelo de ponta, acessível e com ótima qualidade de imagem, alta resolução nativa (1024x1024), e é open-weight, com um ecossistema robusto de modelos fine-tuned pela comunidade.',
      'Modelos "open-weight" que podem rodar localmente (com hardware adequado), permitindo controle absoluto, privacidade e fine-tuning (LoRAs, ControlNet), sem taxas por geração para uso próprio.',
      'Gera outputs diversos e representativos de diferentes tons de pele e características.'
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado e configuração técnica para uso local eficiente.',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente para as versões maiores.',
      'Ainda pode apresentar dificuldades em renderizar anatomia humana de forma perfeita em alguns casos (apesar das melhorias no SD4 Ultra).',
      'A qualidade da saída pode variar mais sem fine-tuning em comparação com soluções gerenciadas.',
      'A licença comercial (Stability AI Community License) possui um limite de receita anual de US$ 1M para uso gratuito.',
      'SDXL pode ter desempenho mais lento em resoluções mais baixas e requer mais VRAM.',
      'Stable Audio 3.0 é focado em instrumentais e efeitos sonoros, não oferecendo suporte a vocais, ao contrário de concorrentes como Suno e Udio.',
      'A API do Stable Video Diffusion foi descontinuada em 24 de julho de 2025.',
      'A transição para novos modelos como Stable Diffusion 4 pode fragmentar temporariamente o ecossistema de fine-tunes em comparação com modelos mais estabelecidos como SDXL.'
    ],
    score: {
      reasoning: 4.1,
      writing: 1.8,
      coding: 4.8,
      speed: 4.7,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'A Stability AI oferece uma gama de modelos "open-weight" para IA visual e de áudio. Isso inclui o Stable Diffusion 4 Ultra (lançado em março de 2026), que apresenta uma arquitetura inovadora baseada em Diffusion Transformer (DiT) e fotorrealismo de ponta, com renderização aprimorada de texto e anatomia. A família Stable Diffusion 3.5 (Medium, Large, Turbo, lançados em outubro/dezembro de 2024) e Stable Diffusion XL (SDXL, incluindo Turbo) continuam a ser pilares para geração de imagens de alta qualidade, com SD3.5 sendo o padrão ouro para IA visual open-source. Para áudio, o Stable Audio 3.0 (lançado em 20 de maio de 2026) permite gerar e editar música e efeitos sonoros de alta qualidade de até 6 minutos e 20 segundos, com modelos de pesos abertos treinados em dados licenciados e onde os usuários mantêm a propriedade de seus outputs. Os modelos são "open-weight", permitindo uso local gratuito (com limites de receita para uso comercial de US$ 1M) e personalização profunda via fine-tuning. A API do Stable Video Diffusion foi descontinuada em 24 de julho de 2025, embora o self-hosting ainda seja uma opção. Embora exija investimento em aprendizado e hardware potente para as versões maiores, sua flexibilidade e o custo-benefício o tornam ideal para profissionais que buscam personalização, eficiência e controle.'
  },
  {
    id: 'make-com-ai-agents',
    name: 'Make.com (Agentes de IA)',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis: 1.000 créditos/mês, 2 cenários ativos, inclui Make AI Agents (beta), intervalo de 15 minutos. Plano Core: US$ 10.59/mês (ou US$ 9/mês anual) para 10.000 créditos (cenários ilimitados, intervalo de 1 minuto, inclui Make AI Agents). Plano Pro: US$ 18.82/mês (ou US$ 16/mês anual) para 10.000+ créditos (prioridade de execução, variáveis personalizadas, logs completos). Plano Teams: US$ 34.12/mês por usuário (ou US$ 29/mês por usuário anual) para 10.000+ créditos (colaboração, gestão de equipes, prioridade de execução). Plano Enterprise: precificação personalizada (oferta de segurança avançada, suporte 24/7, integrações empresariais e funções personalizadas). Operações não utilizadas acumulam por um mês nos planos pagos.',
    pros: [
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos.',
      'Os "Make AI Agents" (novo aplicativo lançado em 11 de fevereiro de 2026, com atualizações contínuas em maio/junho de 2026) permitem automação inteligente e adaptativa com tomada de decisões em tempo real dentro do canvas, com visibilidade total do processo (via Reasoning Panel) e logs de raciocínio detalhados, e chat in-canvas para refinamento.',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-5.5, Anthropic Claude Opus 4.8, Google Gemini 3.5 Flash) e milhares de APIs (3.000+ apps, mais integração via módulo HTTP).',
      'Suporte multimodal para AI Agents, permitindo entrada e saída de arquivos como PDFs, imagens e CSVs diretamente no fluxo de trabalho.',
      'Registros detalhados de execução (histórico de cenários e replay de execução) e busca de texto completo em logs para depuração e visibilidade aprimoradas.',
      'Altamente competitivo em termos de custo-benefício para automações complexas em comparação com alternativas como Zapier (geralmente 3-5x mais barato por operação, 80% mais barato em muitos volumes).',
      'Funcional plano gratuito para prototipar automações.',
      'Recursos como "If-else" e "Merge" (lançados em 20 de maio de 2026) para lógica condicional avançada, e "Make Skills" (introduzidos em 25 de maio de 2026) para assistentes de IA.',
      'Apresenta uma "Library of Agents" com exemplos de agentes pré-construídos para workflows reais.',
      'Melhorias contínuas na navegação do workspace Make Grid, incluindo layouts personalizáveis e colaboração em tempo real.'
    ],
    cons: [
      'O consumo de créditos pode ser imprevisível e rápido em cenários complexos com muitos módulos e Agentes de IA, especialmente porque "créditos" são contados de forma diferente de "tarefas" em outras plataformas e recursos de IA consomem mais créditos (por exemplo, módulos de IA podem consumir 50 créditos por execução); a Make.com mudou de "operações" para "créditos" em 27 de agosto de 2025.',
      'Requer conceitos básicos de lógica de programação (JSON, arrays) para fluxos avançados e agentes de IA complexos, resultando em uma curva de aprendizado mais acentuada.',
      'Os recursos de colaboração e equipe são limitados nos planos Core e Pro, exigindo o plano Teams para funcionalidade completa, embora o Make Grid tenha introduzido recursos de colaboração em tempo real.',
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
    description: 'Make.com é uma plataforma de automação visual B2B que se consolidou como uma orquestradora poderosa para sistemas e IAs. Os "Make AI Agents" (recurso da plataforma, com novo aplicativo lançado em 11 de fevereiro de 2026 e atualizações contínuas em maio/junho de 2026) permitem a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos como PDFs e imagens, chat in-canvas para refinamento e logs de raciocínio detalhados. A plataforma se integra nativamente com os modelos de IA mais recentes, como OpenAI GPT-5.5, Anthropic Claude Opus 4.8 e Google Gemini 3.5 Flash. Com uma interface altamente intuitiva e recursos aprimorados de controle de fluxo, como "If-else" e "Merge" (lançados em 20 de maio de 2026), é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, agora baseados em créditos (com a transição em 27 de agosto de 2025), oferecem flexibilidade e são competitivos em termos de custo-benefício em comparação com alternativas, apesar do consumo de créditos poder ser imprevisível para tarefas de IA mais intensivas. Inclui uma "Library of Agents" para facilitar a criação e introduziu "Make Skills" (em 25 de maio de 2026) e melhorias no workspace Make Grid.'
  }
];