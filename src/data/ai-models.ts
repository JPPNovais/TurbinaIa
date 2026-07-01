export interface AIModel {
  id: string;
  name: string;
  developer: string;
  category: 'Texto & Código' | 'Geração de Imagem' | 'Automação' | 'Geração de Imagem & Áudio';
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
    id: 'openai-chatgpt-plus',
    name: 'ChatGPT Plus (GPT-5.5, GPT-5.5 Instant, GPT-5.4 models)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com anúncios para usuários nos EUA desde 9 de fevereiro de 2026, acesso limitado a GPT-5.5 Instant, com fallback para GPT-5.4 mini, 10 mensagens/5h, acesso à GPT Store). ChatGPT Go: US$ 8/mês (lançado em 15 de janeiro de 2026, com anúncios nos EUA, 10x mais mensagens que o gratuito, upload de arquivos, criação de imagens (Images 2.0 Instant Mode), memória aprimorada, Custom GPTs, Projects, Tasks, Library, GPT-5.5 dentro do Codex com 400K tokens de contexto). ChatGPT Plus: US$ 20/mês (acesso a GPT-5.5, 160 mensagens/3h; inclui GPT Image 2.0, navegação na web, análise de dados avançada, Custom GPTs e recursos de memória, modo Thinking com raciocínio, pesquisa na web e consistência de personagem, Sora video generation (50 videos at 720p)). ChatGPT Pro US$ 100: US$ 100/mês (lançado em 9 de abril de 2026, 50 sessões de Deep Research/mês, 5x quota Plus em GPT-5.4 Thinking, acesso prioritário a modelos mais recentes, 10x Codex usage promocional até 31 de maio de 2026, depois 5x). ChatGPT Pro US$ 200: US$ 200/mês (Deep Research ilimitado ou 250 sessões/mês, 20x quota Plus, geração de vídeo Sora ilimitada e 500 vídeos prioritários em 1080p, janela de contexto de 1M tokens com GPT-5.5 e GPT-5.4, acesso a Operator - agente web autônomo, 20x mais limites de uso que o Plus, 4x mais que o Pro US$100). ChatGPT Business (anteriormente Team): US$ 20/usuário/mês (anual, mínimo de 2 usuários, preço reduzido em 2 de abril de 2026) ou US$ 25/usuário/mês (mensal, mínimo de 2 usuários). ChatGPT Enterprise: Preço personalizado (contato com vendas, mínimo de 150 usuários). API para GPT-5.5: US$ 5.00/milhão de tokens de entrada e US$ 30.00/milhão de tokens de saída (context window 1M+ tokens). Cached input: US$ 0.50/milhão de tokens. Long-context pricing para GPT-5.5 (prompts acima de 272K tokens de entrada): 2x entrada / 1.5x saída para a sessão completa. API para GPT-5.5 Pro: US$ 30.00/milhão de tokens de entrada e US$ 180.00/milhão de tokens de saída. API para GPT-5.4: US$ 2.50/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída. Cached input para GPT-5.4: US$ 0.25/milhão de tokens. API para GPT-5.4 mini: US$ 0.75/milhão de tokens de entrada e US$ 4.50/milhão de tokens de saída. Cached input para GPT-5.4 mini: US$ 0.075/milhão de tokens. API para GPT-5.4 Nano: US$ 0.20/milhão de tokens de entrada e US$ 1.25/milhão de tokens de saída. Cached input para GPT-5.4 Nano: US$ 0.02/milhão de tokens. Batch API para GPT-5.5: US$ 2.50/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída (50% de desconto, com base em exemplos de preços da API, como a da Azure).',
    pros: [
      'GPT-5.5 (codinome "Spud", lançado em 23 de abril de 2026) é o modelo principal da OpenAI para usuários Plus e superiores, com inteligência de ponta e capacidades avançadas de agente para tarefas complexas de múltiplos passos, como codificação, navegação na web e análise de dados.',
      'GPT-5.5 Instant (lançado em 5 de maio de 2026) é o modelo padrão para todos os usuários do ChatGPT, com estilo de resposta aprimorado e qualidade melhorada, sendo mais natural, fácil de ler e com menos respostas longas ou com muitas listas. Recebeu uma atualização em 24 de junho de 2026 para melhorar a qualidade conversacional, o tratamento de contexto, a execução de instruções e as recomendações locais/de produtos.',
      'O modo de voz avançado (ativado em setembro de 2024 para Plus, mais amplo em meses seguintes) oferece interações humanizadas em tempo real, com menor latência, melhor personalidade e menos interrupções. Novos modelos de voz em tempo real na API (7 de maio de 2026) podem raciocinar, traduzir e transcrever fala.',
      'Codex Remote agora está geralmente disponível (25 de junho de 2026) em todos os planos ChatGPT, permitindo que os usuários iniciem ou continuem o trabalho em um host Mac ou Windows conectado, revisem o progresso e aprovem ações do aplicativo móvel. Inclui um novo plugin DigitalOcean Droplet Workspace.',
      'Memória aprimorada (lançada em 26 de junho de 2026, em rollout) melhora o contexto, as respostas ficam mais relevantes e o ChatGPT entende melhor as preferências e objetivos. As memórias agora são atualizadas automaticamente. Os usuários podem revisar um resumo da memória e ver as fontes.',
      'Novas "scheduled tasks" (lançadas em 17 de junho de 2026, em rollout) permitem agendar lembretes e tarefas recorrentes a partir de uma página dedicada na barra lateral, com notificações mais rápidas e confiáveis. Este recurso substitui o Pulse, que será desativado por volta de 1º de julho de 2026.',
      'Recurso "Active Sessions" para revisar e gerenciar sessões ativas (lançado em 2 de junho de 2026).',
      'Novas configurações de personalidade e estilo de tom (lançadas em novembro de 2025, mencionadas em fevereiro e junho de 2026) permitem personalizar o estilo de resposta do ChatGPT com predefinições como Profissional, Amigável, Cândido, Peculiar, Eficiente, Nerd e Cínico, além de ajustar calor, entusiasmo e uso de emojis.',
      'Geração de gráficos diretamente na interface de chat para análise de dados (lançado no início de junho de 2026) de arquivos carregados (planilhas, CSVs, JSON), utilizando bibliotecas Python.',
      'Writing e code blocks agora estão diretamente no chat, substituindo a interface Canvas (desde 28 de maio de 2026).',
      'Projetos agora suportam até 40 arquivos carregados.',
      'Suporte a mais de 50 idiomas e múltiplos tons de voz.',
      'Aplicações de desktop e móveis com recursos multimodais completos estão sendo lançadas progressivamente, incluindo Record & Replay para Codex no macOS para usuários Business.',
      'Acesso a recursos avançados como Advanced Data Analysis (execução de código Python em sandbox) e Custom GPTs.',
      'Função de pesquisa na web aprimorada, fornecendo respostas atualizadas e abrangentes com links para fontes.',
      'Novas integrações de busca de emprego (3 de junho de 2026) permitem que o ChatGPT exiba vagas de emprego e oportunidades freelance, além de criar e editar currículos.',
      'OpenAI Privacy Filter (22 de abril de 2026) é um modelo de peso aberto para detecção e redação de PII.',
      'O ChatGPT está sendo transformado em um "super-assistente" com capacidades de agente para interações digitais, integrando ferramentas de codificação, agentes de IA, geração de imagens e serviços de terceiros.'
    ],
    cons: [
      'GPT-5.2 (Instant, Thinking, Pro) foi retirado do ChatGPT em 12 de junho de 2026.',
      'GPT-5 (Instant e Thinking) foi aposentado do ChatGPT em 13 de fevereiro de 2026.',
      'GPT-4.5 foi retirado do ChatGPT em 27 de junho de 2026. Isso marca o fim dos modelos GPT-4 na interface do ChatGPT.',
      'GPT-4o foi oficialmente retirado da interface do usuário do ChatGPT em 13 de fevereiro de 2026, embora ainda possa ser utilizado na API.',
      'OpenAI o3 será retirado do ChatGPT em 26 de agosto de 2026.',
      'Canvas não está mais disponível em GPT-5.5 Instant e GPT-5.5 Thinking (desde 28 de maio de 2026).',
      'Apesar das melhorias, os modelos ainda podem gerar respostas imprecisas ou alucinações. O custo da API para GPT-5.5 é o dobro do GPT-5.4.',
      'Usuários dos planos gratuito e Go nos EUA agora veem anúncios.',
      'A complexidade dos planos e tiers de preços pode ser confusa, com dois planos "Pro" em diferentes preços.',
      'Os limites das tarefas agendadas variam por plano, são limitadas a uma vez por hora e não suportam chat de voz, upload de arquivos ou Custom GPTs.',
      'OpenAI está envolvida em litígios de direitos autorais e investigações relacionadas ao uso de dados para treinamento de IA.',
      'A precificação de contexto longo para GPT-5.5 na API (acima de 272K tokens de entrada) é mais cara (2x entrada / 1.5x saída).'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelos modelos GPT-5.5 e GPT-5.4, representa o ápice da inteligência artificial generativa da OpenAI, sucedendo modelos anteriores com maior velocidade, eficiência e capacidades multimodais nativas. O GPT-5.5 (lançado em abril de 2026) se destaca em raciocínio, codificação e compreensão visual, com recursos como Advanced Data Analysis e Custom GPTs. O GPT-5.5 Instant (lançado em maio de 2026) é o modelo padrão para todos os usuários do ChatGPT e foi atualizado em junho de 2026 para melhorar a qualidade conversacional. O ChatGPT também oferece uma pesquisa na web aprimorada com respostas atualizadas e citações, e melhorias significativas em seus sistemas de memória (desde junho de 2026) para personalizar interações ao longo do tempo, com atualizações automáticas. O modo de voz avançado oferece interações em tempo real com personalidade aprimorada. Novos recursos incluem tarefas agendadas (junho de 2026), organização aprimorada da interface, geração de gráficos, e a substituição da interface Canvas por blocos de código e escrita diretos no chat (desde maio de 2026). Embora haja um plano gratuito (agora com anúncios nos EUA), os recursos completos estão disponíveis com a assinatura Plus de US$ 20/mês, com novos planos Go, Pro US$100 e Pro US$200 oferecendo diferentes níveis de capacidade e acesso a Sora para geração de vídeo. Modelos anteriores como GPT-5.2 e GPT-4.5 foram aposentados da interface principal em junho de 2026, enquanto GPT-5 e GPT-4o foram aposentados em fevereiro de 2026, e OpenAI o3 será aposentado em agosto de 2026. A OpenAI continua a evoluir sua plataforma com aplicativos de desktop e móveis e suporte a múltiplos idiomas, transformando o ChatGPT em um "super-assistente" com recursos de agente.'
  },
  {
    id: 'anthropic-claude-fable-5',
    name: 'Claude Opus 4.8, Claude Opus 4.7, Claude Sonnet 5, Claude Sonnet 4.6, Claude Haiku 4.5',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso a Claude Sonnet 5 (novo padrão), Claude Sonnet 4.6 e Claude Haiku 4.5, com limites de uso diários, sem Claude Code ou Opus). Plano Pro: US$ 20/mês (ou US$ 17/mês anual) com acesso a todos os modelos (Opus 4.6/4.7/4.8, Sonnet 5, Sonnet 4.6, Haiku 4.5), limites de taxa significativamente mais altos, e inclui Claude Code, Projects e Artifacts. Plano Max 5x: US$ 100/mês (5x a capacidade do Pro). Plano Max 20x: US$ 200/mês (20x a capacidade do Pro). Plano Team Standard: US$ 25/usuário/mês (ou US$ 20/usuário/mês anual, mínimo de 5 usuários, apenas Sonnet 5 (default), Sonnet e Haiku, Claude Code limitado). Plano Team Premium: US$ 125/usuário/mês (ou US$ 100/usuário/mês anual, mínimo de 5 usuários, inclui acesso total a Claude Code e Opus). Plano Enterprise: Preço personalizado (base de US$ 20/usuário/mês com uso cobrado separadamente pelas taxas de API, inclui janelas de contexto estendidas de 500K a 1M tokens, logs de auditoria, certificações). API para Claude Opus 4.7 (e 4.6/4.8): US$ 5.00/milhão de tokens de entrada e US$ 25.00/milhão de tokens de saída, com janela de contexto de 1M tokens. API para Claude Sonnet 5: US$ 2.00/milhão de tokens de entrada e US$ 10.00/milhão de tokens de saída (preço introdutório até 31 de agosto de 2026), depois US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 1M tokens. API para Claude Sonnet 4.6: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 1M tokens. API para Claude Haiku 4.5: US$ 1.00/milhão de tokens de entrada e US$ 5.00/milhão de tokens de saída. Prompt caching reduz custos de entrada em até 90%; Batch API economiza 50% em entrada e saída. Fast Mode para Opus 4.x custa agora 3x mais barato que as versões anteriores para 2.5x mais velocidade.',
    pros: [
      'Claude Opus 4.8 (lançado em 28 de maio de 2026) é o modelo mais capaz da Anthropic disponível publicamente, com Dynamic Workflows para orquestração de subagentes e Effort Control, e melhorias em agentes de longo prazo, codificação, análise financeira e multimodalidade.',
      'Claude Opus 4.8 aceita mensagens de sistema no meio da conversa, permitindo atualizar instruções sem reiniciar o prompt completo e reduzindo custos.',
      'Claude Sonnet 5 (lançado em 1º de julho de 2026) é o novo modelo padrão para planos Free e Pro, oferecendo uma ampla gama de opções de custo-desempenho e, em alguns casos, igualando os níveis de capacidade do Opus 4.8, sendo forte para trabalho de engenharia de software em múltiplas etapas.',
      'Claude Opus 4.7, Claude Sonnet 5 e Claude Sonnet 4.6 oferecem uma janela de contexto de 1 milhão de tokens, permitindo processar vastos volumes de informações.',
      'Claude Sonnet 4.6 (lançado em 17 de fevereiro de 2026) é o modelo padrão anterior para usuários Free e Pro, sendo 30-50% mais rápido que as versões anteriores do Sonnet e altamente competente em codificação (79.6% no SWE-Bench Verified) e raciocínio.',
      'Excelência em codificação com Claude Code, permitindo escrever, editar e executar código de forma autônoma, planejando mudanças em múltiplos arquivos e executando testes, com taxas de limite de uso aumentadas para suportar níveis de esforço mais altos.',
      'Capacidades de visão aprimoradas, superando modelos anteriores na interpretação de gráficos e tabelas, e transcrição de texto de imagens imperfeitas.',
      'Recurso "Artifacts 3.0 (The Instant App)" permite interagir com código, documentos e gráficos em uma janela de UI separada, facilitando fluxos de trabalho de desenvolvimento, e pode transformar código em um aplicativo funcional.',
      'Model Context Protocol (MCP) v2 oferece conectividade zero-config com mais de 6.000 aplicativos (Google Drive, Slack, GitHub, Jira, Notion, Stripe, Figma, Zapier).',
      'Managed Agents Memory (Public Beta) oferece um sistema de memória persistente que lembra arquitetura de projeto e estilo de codificação em várias sessões.',
      'Modo de voz (push-to-talk em 20 idiomas).',
      'Integração com Excel e Google Sheets via fórmula nativa `=CLAUDE()` para análise de dados.',
      'A Anthropic se compromete a manter a plataforma livre de anúncios.'
    ],
    cons: [
      'Modelos da geração Claude 3.x e 3.5.x (incluindo Claude 3.5 Sonnet) foram aposentados até fevereiro-abril de 2026, exigindo migração para as versões 4.x.',
      'Claude Sonnet 5 tem uma capacidade muito menor para realizar tarefas de cibersegurança do que os modelos Opus.',
      'Apesar das melhorias, ainda pode ter dificuldades em tarefas de instrução muito específicas, como contagem de caracteres (conflito com aprimoramento em nuances).',
      'O plano gratuito e Pro podem ter limites de uso, e as taxas da API são baseadas em tokens, que podem se acumular em usos intensivos.',
      'O Fast Mode para Opus, embora mais barato, ainda é um prêmio de preço para maior velocidade.',
      'Claude Code exige permissão para modificações de arquivos e execução de comandos, e erros podem ter consequências reais.',
      'Modelos da classe Mythos (Claude Fable 5 e Claude Mythos 5), anunciados em junho de 2026, tiveram seu acesso suspenso por uma diretiva do governo dos EUA.',
      'A precificação Enterprise da Anthropic agora inclui uma taxa base de assento mais custos de uso de API, afastando-se de uma promessa de "taxa fixa" para fluxos de trabalho autônomos.',
      'Opus 4.8 pode usar mais tokens que Opus 4.7 em algumas tarefas, especialmente onde controles de esforço e comportamento multi-turno afetam o uso total.',
      'A Anthropic é um pouco imprecisa sobre o limite entre os níveis de esforço "Extra" e "Max" em Opus 4.8.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.9
    },
    affiliateUrl: 'https://claude.ai',
    description: 'A família Claude da Anthropic agora é liderada pelos modelos Opus 4.8, Opus 4.7, Sonnet 5, Sonnet 4.6 e Haiku 4.5, representando um avanço significativo em inteligência artificial. O Claude Opus 4.8 (lançado em maio de 2026) é o modelo mais capaz, com recursos como Dynamic Workflows, Effort Control e melhorias para agentes de longo prazo e codificação. O Claude Sonnet 5 (lançado em 1º de julho de 2026) é o novo modelo padrão para planos gratuitos e Pro, oferecendo uma forte execução para engenharia de software, embora com menor capacidade em cibersegurança do que os modelos Opus. O Sonnet 4.6, agora uma opção alternativa, é notavelmente mais rápido e se destaca em codificação e raciocínio, todos com uma vasta janela de contexto de 1 milhão de tokens. A plataforma se integra profundamente com ferramentas externas via MCP v2 e oferece o Claude Code para desenvolvimento autônomo, além de um modo de voz e capacidades de visão aprimoradas. Os antigos modelos da geração 3.x e 3.5.x foram descontinuados. A Anthropic oferece uma variedade de planos, desde o gratuito até o Enterprise, com preços de API competitivos e otimizações como cache e Batch API. O Fast Mode para Opus 4.x é agora mais acessível. No entanto, o custo do Fast Mode para Opus ainda é um prêmio, e o uso de Claude Code exige cautela devido às suas implicações. Os modelos da classe Mythos (Fable 5) tiveram seu acesso suspenso.'
  },
  {
    id: 'google-gemini-models',
    name: 'Gemini 3.5 Flash, Gemini 3.1 Pro, Gemini 3 Flash, Gemini Spark, Gemini Omni',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com acesso ao aplicativo Gemini, que utiliza Gemini 3.5 Flash por padrão, e API via Google AI Studio para Gemini 3.5 Flash e 3.1 Flash-Lite, com limites de uso. Modelos Pro são pagos a partir de 1º de abril de 2026 para usuários gratuitos). Google AI Plus: US$ 7.99/mês (200GB de armazenamento) ou US$ 9.99/mês (2TB de armazenamento). Google AI Pro (anteriormente Gemini Advanced): US$ 19.99/mês (acesso a modelos Pro, 1 milhão de tokens de contexto, integração com Workspace, YouTube Premium Lite, 5TB de armazenamento, etc.) ou US$ 49.99/mês (10TB de armazenamento). Google AI Ultra US$ 99.99: US$ 99.99/mês (lançado no I/O 2026, 5x mais limites de uso que o Pro, integração Gemini 3.5 Flash, acesso prioritário ao Google Antigravity, 20TB de armazenamento, YouTube Premium). Google AI Ultra US$ 199.99: US$ 199.99/mês (lançado no I/O 2026, 20x mais limites de uso que o Pro, inclui Gemini Spark). Gemini para Workspace add-on: US$ 30/usuário/mês. API para Gemini 3.5 Flash: US$ 1.50/milhão de tokens de entrada e US$ 9.00/milhão de tokens de saída (janela de contexto de 1M tokens). API para Gemini 3.1 Pro: US$ 2.00/milhão de tokens de entrada (até 200K tokens de contexto), US$ 4.00/milhão de tokens de entrada (>200K tokens de contexto) e US$ 12.00/milhão de tokens de saída (janela de contexto de 2M tokens). API para Gemini 3.1 Flash-Lite: US$ 0.25/milhão de tokens de entrada e US$ 1.50/milhão de tokens de saída. O cache de contexto reduz os custos em até ~90%; Batch API oferece 50% de desconto em todos os modelos.',
    pros: [
      'Gemini 3.1 Pro oferece uma vasta janela de contexto de até 2 milhões de tokens, disponível publicamente para todos os desenvolvedores.',
      'Gemini 3.5 Flash (lançado em 19 de maio de 2026) é o novo modelo de produção de ponta do Google, otimizado para tarefas de agente e codificação, com velocidade e custo-benefício de Flash e inteligência próxima ao Pro.',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto nativamente em uma única requisição.',
      'Capacidades de execução de código para Gemini 1.5 Pro e 1.5 Flash na API, permitindo ao modelo gerar e executar código Python de forma iterativa.',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome, YouTube).',
      'Recurso "Personal Intelligence" (lançado em fevereiro de 2026) conecta o Gemini diretamente ao Gmail, Fotos, Drive e Search para respostas personalizadas com base nos dados do usuário.',
      'NotebookLM recebeu uma grande atualização em 2026, transformando-o em uma plataforma completa de síntese de pesquisa, aceitando documentos, PDFs, vídeos e áudios, gerando resumos, áudios e vídeos.',
      'Suporte ao Model Context Protocol (MCP) adicionado à API e SDK do Gemini em março de 2026, permitindo conectar o Gemini a milhares de apps e fontes de dados.',
      'Project Mariner ("Computer Use") permite que o Gemini clique, preencha formulários e navegue em UIs autonomamente (disponível em 3 Pro e 3 Flash desde março-abril de 2026).',
      'Gemini Spark é um novo agente de IA autônomo, exclusivo para assinantes do AI Ultra.',
      'Gemini Omni é um modelo experimental de todas as modalidades, capaz de compreensão e geração de vídeo em tempo real.',
      'Geração de vídeo (com Veo 3.1 em prévia) e geração de música (com Lyria 3) disponíveis.',
      'Testes práticos de SAT gratuitos no Gemini.',
      'AI Overviews na pesquisa estão mais inteligentes e dominantes; Google Antigravity (plataforma de codificação focada em agentes) acessível via AI Ultra e Search.',
      'Estudantes em países selecionados (incluindo o Brasil) recebem upgrade gratuito para o Google AI Pro até julho de 2026.'
    ],
    cons: [
      'A API para Gemini 3.1 Pro possui preços escalonados para prompts com contexto muito longo (>200K tokens).',
      'Modelos Pro agora são pagos exclusivamente para usuários gratuitos desde 1º de abril de 2026.',
      'Modelos anteriores como Gemini 2.0 Flash e 2.0 Flash-Lite foram desativados em 1º de junho de 2026, exigindo migração para modelos mais recentes.',
      'Modelos Imagen 4 e Gemini 3 Image (Nano Banana 2/Pro) estão sendo descontinuados até 17 de agosto de 2026; o Gemini 3.1 Flash Image (Nano Banana 2) está disponível.',
      'O nome "Gemini Advanced" está sendo aposentado em favor de "Google AI Pro".',
      'Alguns recursos de IA são agrupados em planos do Google One/Workspace e são mandatórios.',
      'A janela de 2 milhões de tokens é mais como um "depósito" que o modelo pode acessar, não uma "área de trabalho" onde tudo está sempre presente, podendo levar a esquecimento em algumas situações.',
      'O lançamento de "Personal Intelligence" e outros recursos ainda pode ser limitado geograficamente devido a requisitos de residência de dados.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.9
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'A família Gemini do Google é agora liderada pelo Gemini 3.5 Flash e Gemini 3.1 Pro, oferecendo uma combinação de capacidades avançadas e eficiência. Gemini 3.1 Pro (agora com disponibilidade geral e 2 milhões de tokens de contexto) é um modelo multimodal poderoso ideal para análise de grandes volumes de informações em texto, imagem, áudio e vídeo, com capacidades de execução de código. Gemini 3.5 Flash, lançado no Google I/O 2026, é otimizado para velocidade e custo-benefício, ideal para tarefas de alto volume e agente. A plataforma Gemini se integra profundamente com o ecossistema Google, incluindo Workspace, Search e NotebookLM, com novos recursos como Personal Intelligence e Computer Use. Os planos de assinatura Google AI Pro e Ultra oferecem acesso expandido a modelos e recursos avançados, como Gemini Spark e Gemini Omni. No entanto, os modelos Pro são agora pagos para usuários gratuitos, e a API para contextos muito longos no Gemini 3.1 Pro pode ter custos mais altos.'
  },
  {
    id: 'meta-llama-muse-models',
    name: 'Llama 4 Maverick, Llama 4 Scout, Llama 3.3 70B, Llama 3.2 (Vision), Llama 3.1 (405B)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware). Licença comunitária Llama para uso não comercial e comercial (com restrições: empresas com mais de 700 milhões de usuários ativos mensais precisam de uma licença separada da Meta). A Meta AI para consumidores (meta.ai, WhatsApp, Messenger, Instagram Direct) é gratuita. API para Llama 4 Maverick (via AWS Bedrock): US$ 0.50/milhão de tokens de entrada. API para Llama 3.3 70B Instruct (via Deepinfra): A partir de US$ 0.23/milhão de tokens de entrada e US$ 0.40/milhão de tokens de saída. API para Llama 3.1 70B Instruct (via Azure): US$ 2.68/milhão de tokens de entrada e US$ 3.54/milhão de tokens de saída. API para Llama 3.1 405B Instruct (via Azure): US$ 5.33/milhão de tokens de entrada e US$ 16.00/milhão de tokens de saída. API para Llama 3.1 8B Instruct (via Deepinfra/Groq): A partir de US$ 0.05/milhão de tokens de entrada e US$ 0.08/milhão de tokens de saída. API para Llama 3.2 1B Instruct (via OpenRouter): US$ 0.027/milhão de tokens de entrada e US$ 0.201/milhão de tokens de saída. API para Llama 3.2 3B (via CloudPrice): US$ 0.04/milhão de tokens de entrada e US$ 0.075/milhão de tokens de saída. API para Llama 3.2 11B (via DeepInfra): Aproximadamente US$ 0.05/milhão de tokens de entrada. ',
    pros: [
      'Llama 4 Maverick (lançado em abril de 2025) é o modelo principal da família Llama 4, nativamente multimodal para compreensão de imagem e texto, com 1M de tokens de contexto, rápido e com baixo custo.',
      'Llama 4 Scout (lançado em abril de 2025) oferece capacidade de contexto extremamente longa de até 10 milhões de tokens, ideal para recuperação de informações.',
      'Llama 3.3 70B (lançado em dezembro de 2024) é o modelo de linguagem apenas texto mais avançado da Meta, atingindo desempenho de classe GPT-4 em benchmarks, com 128K tokens de contexto.',
      'Llama 3.1 405B (lançado em 23 de julho de 2024) é o maior e mais capaz modelo "open-weight", competitivo com modelos proprietários de ponta como GPT-4o e Claude 3.5 Sonnet, com 128K tokens de contexto e suporte a 8 idiomas.',
      'Llama 3.2 (lançado em 25 de setembro de 2024) introduziu modelos multimodais de visão (11B e 90B) para processamento de texto e imagem, além de modelos leves (1B, 3B) para uso em dispositivos.',
      'Modelos "open-weight" permitem flexibilidade para uso local, fine-tuning e controle sobre os dados, sem taxas por geração para uso próprio.',
      'Ecossistema robusto de provedores de API terceirizados que oferecem custos competitivos (Deepinfra) e velocidade (Groq).',
      'A Meta AI para consumidores (meta.ai, WhatsApp, Messenger, Instagram Direct) permite conversar com modelos Llama gratuitamente.',
      'A arquitetura Mixture-of-Experts (MoE) em Llama 4 melhora a eficiência e o poder, ativando apenas um subconjunto de parâmetros.',
      'Llama 4 com processamento de fala nativo (em vez de conversão de voz para texto), resultando em interações mais naturais.',
      'Llama 3.1 inclui "Code Shield", um guardrail para código gerado.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar modelos maiores localmente com alta velocidade.',
      'A licença de uso comercial (Llama Community License) possui restrições, como o limite de 700 milhões de usuários ativos mensais (MAU) para produtos/serviços e proíbe o uso dos modelos (ou seus outputs) para treinar outros LLMs não-Llama.',
      'Os modelos multimodais Llama 3.2 não estão disponíveis para desenvolvedores sediados na União Europeia devido a incertezas regulatórias.',
      'Meta Muse Spark (lançado em 8 de abril de 2026) é o primeiro modelo de ponta de peso fechado e exclusivo para API da Meta, uma mudança em relação à filosofia de "open-weight".',
      'Não há uma UI de "chat" de consumo oficial e tão polida quanto a do ChatGPT para os modelos Llama (a Meta AI é uma experiência de aplicativo).',
      'O desenvolvimento do modelo "Behemoth" (2 trilhões de parâmetros) foi efetivamente arquivado.',
      'A competitividade do Llama 4 Maverick na fronteira de codificação aberta não é mais a melhor.',
      'A janela de contexto de 10 milhões de tokens do Llama 4 Scout é "real para recuperação, fraca para síntese".'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.9,
      coding: 4.8,
      speed: 4.8,
      value: 4.8
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'A família Llama da Meta evoluiu significativamente, com os modelos Llama 4 Maverick e Scout liderando a fronteira em multimodalidade e contexto longo, respectivamente. Os modelos Llama 3.3 70B e Llama 3.1 405B representam o que há de mais avançado em "open-weight" text-only e multimodo, oferecendo desempenho comparável aos principais modelos proprietários. Llama 3.2 introduziu capacidades multimodais de visão e modelos leves para dispositivos. Esses modelos são "open-weight", permitindo uso local e fine-tuning, mas a licença comunitária impõe restrições para grandes usos comerciais e proíbe o treinamento de LLMs não-Llama. A Meta também lançou o Muse Spark, um modelo de peso fechado e API-only, marcando uma nova direção. Embora o ecossistema de APIs de terceiros ofereça flexibilidade e custos competitivos, o uso eficiente exige hardware potente, e a disponibilidade de modelos multimodais pode ser restrita na UE.'
  },
  {
    id: 'openai-chatgpt-images-2-0',
    name: 'ChatGPT Images (GPT Image 2.0, GPT Image 1.5)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com acesso a modelos GPT-5.5, GPT-5.4 e Images 2.0/1.5). A API para GPT Image 1.5 (substituindo DALL-E 3) custa: US$ 0.04–US$ 0.12 por imagem, dependendo da resolução e qualidade. Usuários gratuitos do ChatGPT têm gerações limitadas (~15/mês).',
    pros: [
      'ChatGPT Images 2.0 (gpt-image-2, lançado em 21 de abril de 2026) é o modelo padrão de geração de imagens da OpenAI, com qualidade aprimorada em relação ao GPT Image 1.5.',
      'GPT Image 1.5 (substituindo DALL-E 3 desde dezembro de 2025 para usuários Plus e maio de 2026 para API) oferece melhor qualidade de imagem, renderização de texto aprimorada e concorrência direta com Midjourney.',
      'Capacidade de interpretar prompts complexos e conversacionais de forma mais eficaz, gerando imagens que correspondem bem à descrição.',
      'Melhora significativa na renderização de texto dentro das imagens e suporte a múltiplos idiomas.',
      'Gera imagens de alta qualidade com diversos estilos e saída em alta resolução (1024x1024, 1792x1024, 1024x1792).',
      'Integração perfeita com o ChatGPT, permitindo criação e modificação de imagens via conversação e edição iterativa (edição multi-turno).',
      'Direitos comerciais completos incluídos em todos os planos pagos.'
    ],
    cons: [
      'DALL-E 2 e DALL-E 3 foram oficialmente descontinuados em 12 de maio de 2026, sendo substituídos por GPT Image 1.5 e 2.0.',
      'Ainda pode apresentar resultados que parecem "falsos" ou não atingir o fotorrealismo de alguns concorrentes como o Midjourney em certos casos.',
      'Apesar das melhorias, o modelo ainda pode ter dificuldades com tipografia complexa ou texto muito longo.',
      'O acesso completo e ilimitado aos recursos avançados requer assinatura do ChatGPT Plus.',
      'Preços da API podem ser elevados para uso em larga escala.'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.6,
      coding: 1.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Images, agora impulsionado pelos modelos GPT Image 2.0 (lançado em abril de 2026) e GPT Image 1.5 (que substituíram o DALL-E 3), é a ferramenta de geração de imagens de última geração da OpenAI. Ele se destaca pela capacidade de interpretar prompts complexos e conversacionais, criando imagens de alta qualidade com renderização aprimorada de texto e uma forte correspondência com a descrição. Integrado perfeitamente ao ChatGPT, permite a criação e modificação de imagens por meio de conversação, oferecendo uma experiência de usuário intuitiva e edição multi-turno. Embora seja uma ferramenta poderosa para designers e criadores de conteúdo, o GPT Image 2.0 pode, em certas situações, não alcançar o fotorrealismo de concorrentes como o Midjourney, e ainda pode ter desafios com tipografia complexa. O acesso completo aos recursos exige uma assinatura do ChatGPT Plus, e os custos da API podem ser consideráveis para produção em larga escala.'
  },
  {
    id: 'midjourney-v8-1',
    name: 'Midjourney V8.1, Midjourney V7, Niji 7, Midjourney Video V1',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial (removido em março de 2023). Planos pagos: Basic US$ 10/mês (US$ 96/ano, ou US$ 8/mês anual) com ~3.3 horas de GPU rápida (~200 imagens); Standard US$ 30/mês (US$ 288/ano, ou US$ 24/mês anual) com ~15 horas de GPU rápida e gerações ilimitadas no modo Relax (~900 imagens rápidas); Pro US$ 60/mês (US$ 576/ano, ou US$ 48/mês anual) com ~30 horas de GPU rápida, modo Stealth (privacidade) e gerações ilimitadas no modo Relax; Mega US$ 120/mês (US$ 1152/ano, ou US$ 96/mês anual) com ~60 horas de GPU rápida, modo Relax ilimitado e modo Stealth. Horas extras de GPU rápida custam US$ 4/hora. A geração de vídeo é faturada a aproximadamente 8x o custo de uma tarefa de imagem padrão por segundo de vídeo.',
    pros: [
      'Midjourney V8.1 (lançado em 30 de abril de 2026, padrão desde 10 de junho de 2026) é o modelo mais rápido até o momento, 4-5 vezes mais rápido que as versões anteriores, com melhor aderência a prompts, retenção de detalhes e saída de imagem HD 2K.',
      'No V8.1, o modo HD é 3x mais rápido e 3x mais barato, e agora é o padrão. A resolução padrão é 50% mais rápida e 25% mais barata. Há um botão "Run as HD" para qualquer trabalho SD.',
      'Midjourney V7 (lançado em 3 de abril de 2025, padrão de junho de 2025 a junho de 2026) oferece fotorealismo aprimorado, precisão de detalhes e interpretação de prompts.',
      'Geração de vídeo nativa (Midjourney Video V1, lançado em abril de 2026) permite animar imagens estáticas em clipes de 5 segundos (extensíveis até 20 segundos) em 480p ou 720p.',
      'Niji 7 (lançado em 9 de janeiro de 2026) oferece um grande aumento na coerência, detalhes finos e aderência a prompts para estilos de anime e ilustração, com renderização nítida das pupilas, reflexos limpos, características faciais consistentes e arte de linha mais plana e limpa.',
      'Editor Web completo e maduro, com ferramentas como Remix, inpainting, outpaint e retextura, permitindo o gerenciamento de fluxos de trabalho sem o Discord.',
      'Modo conversacional aprimorado, suportando entrada de texto e voz com acesso a prompts de imagem, referências de estilo e configurações.',
      'Recursos avançados como Consistência de Personagem (--cref) e Style Reference (--sref) para manter a coerência visual entre as gerações (Niji 7 é aprimorado para --sref).',
      'Introdução do "Draft Mode" para V8.1 (lançado em 17 de junho de 2026) para prototipagem rápida, gerando 24 imagens em menor resolução pela metade do custo de Fast Hours.',
      'Personalização (em V7), adaptando as saídas às preferências estéticas individuais.',
      'Modo 3D e Textura (em V8) com capacidade de exportação de arquivos OBJ e mapas de textura.',
      'As imagens geradas em qualquer plano pago podem ser usadas comercialmente.',
      'Atualizações da web em junho de 2026, incluindo fixação e organização mais fáceis da barra lateral, compartilhamento de conversas mais fácil e um botão "Rerun as HD" para imagens V8.1.',
      'Novo Prompt Shortener e função Describe atualizada (imagem para texto) no V8.1.'
    ],
    cons: [
      'Não possui plano de testes gratuito no site oficial (removido em março de 2023).',
      'Não possui API pública oficial, limitando a integração programática (APIs não oficiais podem violar os termos de serviço).',
      'A geração de vídeo (V1) é atualmente apenas de imagem para vídeo (sem texto para vídeo direto), não tem áudio e é limitada a 720p de resolução.',
      'O modo Relax oferece gerações ilimitadas, mas é mais lento que o modo rápido.',
      'O modo Stealth (privacidade) está disponível apenas nos planos Pro e Mega.',
      'Curva de aprendizado para prompt engineering avançado. ',
      'Horas de GPU rápida não são transferidas para o próximo mês.',
      'A Midjourney está envolvida em litígios de direitos autorais. ',
      'Baniu prompts com nomes de figuras políticas para evitar desinformação. ',
      'O Draft Mode (V8.1) tem uma "qualidade ligeiramente reduzida" em suas gerações iniciais.',
      'Niji 7 não oferece suporte a "Consistência de Personagem" (--cref).'
    ],
    score: {
      reasoning: 4.8,
      writing: 2.5,
      coding: 1.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney é uma plataforma líder em geração de imagens, com o modelo V8.1 (lançado em abril de 2026 e padrão desde junho de 2026) sendo o atual, oferecendo velocidade superior (4-5x mais rápido), melhor aderência a prompts, retenção de detalhes e saída em HD 2K. O modo HD agora é padrão e mais eficiente. A plataforma evoluiu para incluir o Midjourney Video V1 para animação de imagens, e o Niji 7 (lançado em janeiro de 2026) para estilos artísticos específicos, com melhorias notáveis na coerência e detalhes da arte de linha. O Editor Web é totalmente maduro, permitindo inpainting, outpainting e uma experiência de usuário aprimorada. Recursos como Consistência de Personagem e Style Reference garantem coerência visual, embora o --cref não seja suportado no Niji 7. O novo Draft Mode para V8.1 permite prototipagem rápida e econômica. Embora não haja um plano gratuito ou API pública, os planos pagos oferecem uso comercial das imagens e diferentes níveis de horas de GPU e privacidade (Stealth Mode). A Midjourney continua a ser a referência para qualidade artística, mas a geração de vídeo ainda possui limitações e a empresa enfrenta desafios legais.'
  },
  {
    id: 'stability-ai-sd-sa-models',
    name: 'Stable Diffusion 3.5 Large, Stable Diffusion 3.5 Medium, Stable Diffusion XL, Stable Audio 3.0',
    developer: 'Stability AI',
    category: 'Geração de Imagem & Áudio',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware); para empresas com mais de US$ 1M de receita anual, licença Enterprise é necessária para Stable Diffusion 3.5. API (sistema de créditos): 1 crédito = US$ 0.01. API para Stable Diffusion 3.5 Large: US$ 0.065/imagem. API para Stable Diffusion 3.5 Large Turbo: US$ 0.040/imagem. API para Stable Diffusion 3.5 Medium: US$ 0.035/imagem. API para Stable Image Ultra: US$ 0.080/imagem (até 4K). API para Stable Image Core: US$ 0.030/imagem. API para Stable Diffusion XL 1.0: US$ 0.002/imagem. 25 créditos grátis para começar na API. Planos de assinatura Stable Assistant (Web): Free (900 créditos/mês, 3 dias de trial); Pro (US$ 19/mês para 1900 créditos); Plus (US$ 49/mês para 5500 créditos); Premium (US$ 99/mês para 12000 créditos). Planos de assinatura Stable Audio (3.0): Free (10 faixas/mês, até 6 min, 6 min de upload de áudio - cortado em 30s); Pro (US$ 11.99/mês para 250 faixas, até 6 min, 30 min de upload); Studio (US$ 29.99/mês para 675 faixas, até 6 min, 60 min de upload); Max (US$ 89.99/mês para 2250 faixas, até 6 min, 90 min de upload). Licença Creator para planos pagos do Stable Audio; Licença Personal para o plano Free. ',
    pros: [
      'Stable Diffusion 3.5 (SD3.5, lançado em outubro de 2024) é a mais recente suíte de modelos de imagem da Stability AI, com variantes Large, Large Turbo e Medium.',
      'SD3.5 Large (8 bilhões de parâmetros) oferece qualidade superior, aderência a prompts, anatomia e renderização de texto, ideal para uso profissional em 1 megapixel.',
      'SD3.5 Medium (2.5 bilhões de parâmetros) equilibra precisão de prompt e qualidade de imagem, sendo eficiente e capaz de rodar em GPUs de consumidor.',
      'Stable Audio 3.0 (lançado em 20 de maio de 2026) é o modelo de geração de áudio mais avançado da Stability AI, produzindo faixas musicais de até 6 minutos e 20 segundos em estéreo 44.1kHz, com capacidades de áudio-para-áudio.',
      'As variantes Small SFX, Small e Medium do Stable Audio 3.0 estão disponíveis como "open-weight" no Hugging Face, permitindo uso local e fine-tuning.',
      'Modelos "open-weight" (SD3.5, SDXL, Stable Audio) oferecem controle absoluto, privacidade e fine-tuning sem taxas por geração para uso próprio, com licenças para uso comercial até US$ 1M de receita anual.',
      'Stable Diffusion XL (SDXL) continua sendo um modelo de ponta, acessível e com ótima qualidade de imagem e um ecossistema robusto de modelos fine-tuned pela comunidade.',
      'Inpainting e Outpainting são suportados (SDXL e geralmente em Stable Diffusion).',
      'Integração ControlNet agora nativa na maioria dos pipelines.',
      'Geração em tempo real (LCM) para resultados quase instantâneos.',
      'Otimizações com TensorRT e FP8 com NVIDIA RTX GPUs resultam em 2x mais desempenho e 40% menos memória para os modelos SD3.5.',
      'Foco em soluções empresariais: obteve conformidade SOC 2 Tipo II e SOC 3, e lançou Brand Studio.',
      'Stable Audio 3.0 foi treinado exclusivamente em dados licenciados do AudioSparx, garantindo compensação justa para criadores.',
      'Stable Assistant oferece uma interface web para geração de imagens.'
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado e configuração técnica para uso local eficiente. ',
      'Apesar das melhorias, SD3.5 Medium ainda pode apresentar dificuldades na renderização perfeita de anatomia humana.',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente para as versões maiores.',
      'A licença comercial para Stable Diffusion 3.5 possui um limite de receita anual de US$ 1M para uso gratuito, exigindo licença Professional/Enterprise para empresas maiores.',
      'O API Stable Video Diffusion foi descontinuado em 24 de julho de 2025.',
      'Stable Audio 3.0 é focado em música instrumental e efeitos sonoros, não oferecendo suporte a vocais ou letras na versão padrão.',
      'A Stability AI passou por turbulências e reestruturação em 2024. ',
      'Uma atualização da Política de Uso Aceitável introduziu restrições à geração de conteúdo sexualmente explícito. ',
      'Apesar de ser de código aberto, a API pode ser cara para uso em larga escala.'
    ],
    score: {
      reasoning: 4.6,
      writing: 1.8,
      coding: 4.8,
      speed: 4.8,
      value: 4.8
    },
    affiliateUrl: 'https://stability.ai',
    description: 'A Stability AI oferece uma gama de modelos "open-weight" para IA visual e de áudio, destacando a família Stable Diffusion 3.5 (SD3.5) como seus modelos mais avançados para geração de imagens. O SD3.5 Large e Medium apresentam fotorrealismo de ponta, renderização aprimorada de texto, anatomia mais precisa e a capacidade de rodar em GPUs de consumidor. O Stable Diffusion XL continua a ser uma opção robusta para geração de imagens de alta qualidade. Para áudio, o Stable Audio 3.0 (lançado em maio de 2026) oferece modelos "open-weight" para gerar música instrumental e efeitos sonoros de longa duração, com capacidades de áudio-para-áudio e treinado em dados licenciados. A natureza "open-weight" desses modelos proporciona controle, privacidade e capacidade de fine-tuning aos usuários, com licenças que permitem uso comercial sob certas condições. A plataforma também oferece serviços API baseados em créditos e planos de assinatura via Stable Assistant. No entanto, a utilização avançada requer conhecimento técnico, a licença comercial tem um limite de receita e alguns APIs de vídeo foram descontinuados.'
  },
  {
    id: 'make-com-ai-agents',
    name: 'Make.com (Agentes de IA & Automação)',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis: 1.000 créditos/mês, 2 cenários ativos, intervalo de 15 minutos (inclui Agentes de IA). Plano Core: US$ 9/mês (anual) ou US$ 10.59/mês (mensal) para 10.000 créditos (cenários ilimitados, intervalo de 1 minuto, inclui Agentes de IA, acesso à API, 5GB de transferência de dados, 30 dias de armazenamento de logs). Plano Pro: US$ 16/mês (anual) ou US$ 18.82/mês (mensal) para 10.000+ créditos (prioridade de execução, variáveis personalizadas, logs completos, Agentes de IA). Plano Teams: US$ 29/mês por usuário (anual) ou US$ 34.12/mês por usuário (mensal) para 10.000+ créditos (colaboração, gestão de equipes, prioridade de execução, Agentes de IA). Plano Enterprise: precificação personalizada (oferta de segurança avançada, suporte 24/7, integrações empresariais e funções personalizadas, Agentes de IA). Créditos não utilizados acumulam por um mês nos planos pagos. A Make.com mudou de "operações" para "créditos" em 27 de agosto de 2025, com módulos de IA e execução de código consumindo créditos a taxas variáveis com base no uso de tokens ou tempo de execução. Pacotes de créditos extras têm uma margem de 25% de custo adicional desde novembro de 2025.',
    pros: [
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos. ',
      '"Make AI Agents" (nova aplicação lançada em fevereiro de 2026 e atualizada continuamente) permite automação inteligente e adaptativa com tomada de decisões em tempo real, visibilidade total do processo (via Reasoning Panel) e logs de raciocínio detalhados.',
      'Suporte multimodal para entrada e saída de arquivos como PDFs, imagens e CSVs diretamente no canvas, permitindo que agentes aceitem, analisem e produzam arquivos.',
      'Integração nativa com os principais modelos de IA, incluindo OpenAI GPT-5.5, GPT-5.4, GPT-5.3, Anthropic Claude Opus 4.8, Claude Opus 4.7, Claude Sonnet 5, Claude Sonnet 4.6 e Google Gemini 3.5 Flash, Gemini 3.1 Pro.',
      'Recurso "If-else" e "Merge" (lançados em 10 de março de 2026) para lógica condicional avançada que não consomem créditos.',
      '"MCP toolboxes" (lançados em 10 de fevereiro de 2026) permitem que agentes de IA se conectem a conjuntos específicos de cenários usados como ferramentas.',
      '"Make CLI" é uma interface de linha de comando de código aberto para acesso programático e integração de agentes de IA.',
      'Registros detalhados de execução (histórico de cenários e replay de execução aprimorados) e busca de texto completo em logs para depuração e visibilidade aprimoradas.',
      'Recuperação de cenários (lançada em 13 de março de 2026) para recuperar alterações não salvas.',
      'Funcional plano gratuito para prototipar automações, incluindo Agentes de IA.',
      'Altamente competitivo em termos de custo-benefício para automações complexas em comparação com alternativas como Zapier.',
      'Make Skills for Claude (mencionado em maio de 2026) para assistentes de IA construírem cenários e configurarem módulos.',
      'Aquisição pela Celonis em outubro de 2020, indicando estabilidade e investimento contínuo na plataforma.'
    ],
    cons: [
      'O consumo de créditos pode ser imprevisível e rápido em cenários complexos com muitos módulos e Agentes de IA, especialmente porque módulos de IA e execução de código consomem mais créditos a taxas variáveis.',
      'Triggers, filtros e iteradores contam como operações/créditos separados, e polling triggers podem consumir um grande volume de créditos.',
      'Requer conceitos básicos de lógica de programação para fluxos avançados e agentes de IA complexos, resultando em uma curva de aprendizado mais acentuada.',
      'Os recursos de colaboração e equipe são limitados nos planos Core e Pro.',
      'Cenários no plano Core podem entrar em fila durante picos de uso (sem prioridade de execução).',
      'Limites de transferência de dados podem ser rapidamente atingidos em fluxos que processam conteúdo de vídeo, forçando o upgrade para planos superiores.',
      'O suporte ao cliente pode ser considerado mínimo em comparação com outras plataformas. '
    ],
    score: {
      reasoning: 4.9,
      writing: 3.0,
      coding: 4.5,
      speed: 4.8,
      value: 4.7
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Make.com é uma plataforma de automação visual B2B que se destaca como uma poderosa orquestradora para sistemas e IAs. A nova aplicação "Make AI Agents" (lançada em fevereiro de 2026) permite a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos e um Reasoning Panel transparente para depuração. A plataforma se integra nativamente com os modelos de IA mais recentes da OpenAI, Anthropic e Google, incluindo o recém-lançado Claude Sonnet 5. Com uma interface intuitiva e recursos aprimorados de controle de fluxo, como If-else e Merge, a Make.com é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, baseados em créditos (com a transição em agosto de 2025), são competitivos, embora o consumo de créditos possa ser imprevisível para tarefas de IA mais intensivas, já que triggers, filtros e iteradores consomem créditos. A aquisição pela Celonis em outubro de 2020 reforça sua estabilidade e investimento contínuo. No entanto, a plataforma possui uma curva de aprendizado mais acentuada e o suporte pode ser considerado limitado.'
  }
];