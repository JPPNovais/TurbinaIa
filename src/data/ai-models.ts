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
    name: 'ChatGPT Plus (GPT-5.6 Sol, Terra, Luna, GPT-5.5 Instant models)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com anúncios para usuários nos EUA desde 9 de fevereiro de 2026, acesso ilimitado a GPT-5.6 Luna no chat padrão com "Think button" para raciocínio, acesso à GPT-5.6 Terra em ChatGPT Work e Codex, limites para uploads/imagens/outras ferramentas, acesso à GPT Store). ChatGPT Go: US$ 8/mês (lançado globalmente em 15 de janeiro de 2026, com anúncios nos EUA, mais mensagens que o gratuito, upload de arquivos, criação de imagens (Images 2.0 Instant Mode), memória aprimorada, Custom GPTs, Projects, Tasks, Library, acesso à GPT-5.6 Terra em ChatGPT Work e Codex, acesso ilimitado a GPT-5.6 Luna no chat padrão com "Think button"). ChatGPT Plus: US$ 20/mês (acesso a GPT-5.6 Sol (versão de agosto de 2026) no chat padrão e a todos os modelos GPT-5.6 em Work/Codex, 160 mensagens/3h; inclui GPT Image 2.0, navegação na web, análise de dados avançada, Custom GPTs e recursos de memória, modo Thinking com raciocínio, pesquisa na web e consistência de personagem, Deep Research (10 runs/mês), e slider de raciocínio). ChatGPT Pro US$ 100: US$ 100/mês (lançado em 9 de abril de 2026, 50 sessões de Deep Research/mês, 5x uso Plus em GPT-5.6 Sol/Sol Pro, acesso prioritário a modelos mais recentes, 5x uso Codex, ultra mode para Codex). ChatGPT Pro US$ 200: US$ 200/mês (lançado no I/O 2026, 20x uso Plus, janela de contexto de 1M tokens com GPT-5.6 Sol, acesso a Operator - agente web autônomo, ultra mode para Work/Codex, inclui Sora video ilimitado). ChatGPT Business: US$ 20/usuário/mês (anual, mínimo de 2 usuários) ou US$ 25/usuário/mês (mensal, mínimo de 2 usuários) (preços efetivos desde 2 de abril de 2026, acesso a GPT-5.6 Sol e Sol Pro, e todos os modelos GPT-5.6 em Work/Codex, faturamento de assentos adicionais imediatamente a partir de 19 de agosto de 2026). ChatGPT Enterprise: Preço personalizado (contato com vendas, mínimo de 150 usuários, média de US$ 60/usuário/mês, acesso a GPT-5.6 Sol Pro, e todos os modelos GPT-5.6 em Work/Codex). ChatGPT para Educação: Standard tier é gratuito para professores, estudantes e funcionários elegíveis (acesso a modelos GPT-5.x class e recursos equivalentes ao plano Enterprise de US$ 20/mês). O plano Pro pago oferece limites de uso mais altos (comparável ao plano Enterprise de US$ 200/mês). API para GPT-5.6 Sol: US$ 4.00/milhão de tokens de entrada e US$ 20.00/milhão de tokens de saída (preço promocional para contexto curto, reduzido em cerca de 20% em 21-22 de agosto de 2026 a partir de US$ 5.00/US$ 30.00, válido pelo menos até 21 de novembro de 2026; context window 1.05M tokens). API para GPT-5.6 Terra: US$ 2.00/milhão de tokens de entrada e US$ 12.00/milhão de tokens de saída (redução de 20% em 30 de julho de 2026, context window 1.05M tokens). API para GPT-5.6 Luna: US$ 0.20/milhão de tokens de entrada e US$ 1.20/milhão de tokens de saída (redução de 80% em 30 de julho de 2026, context window 1.05M tokens). API para GPT-5.5: US$ 5.00/milhão de tokens de entrada e US$ 30.00/milhão de tokens de saída (context window 1M tokens). Preço para contexto longo (GPT-5.5): US$ 10.00/milhão de tokens de entrada e US$ 45.00/milhão de tokens de saída. Cached input para GPT-5.5: US$ 0.50/milhão de tokens. API para GPT-5.5 Pro: US$ 30.00/milhão de tokens de entrada e US$ 180.00/milhão de tokens de saída. Preço para contexto longo (GPT-5.5 Pro): US$ 60.00/milhão de tokens de entrada e US$ 270.00/milhão de tokens de saída. API para GPT-5.4: US$ 2.50/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída. Preço para contexto longo (GPT-5.4): US$ 5.00/milhão de tokens de entrada e US$ 22.50/milhão de tokens de saída. Cached input para GPT-5.4: US$ 0.25/milhão de tokens. API para GPT-5.4 mini: US$ 0.75/milhão de tokens de entrada e US$ 4.50/milhão de tokens de saída. Cached input para GPT-5.4 mini: US$ 0.075/milhão de tokens. API para GPT-5.4 Nano: US$ 0.20/milhão de tokens de entrada e US$ 1.25/milhão de tokens de saída. Cached input para GPT-5.4 Nano: US$ 0.02/milhão de tokens. Cached input para GPT-5.6 (writes): 1.25x taxa de input não armazenado em cache. Cached input para GPT-5.6 (reads): 90% de desconto. Batch API para GPT-5.x: (50% de desconto em todos os custos de token), aplicado a todos os modelos.',
    pros: [
      'GPT-5.6 Sol (versão de agosto de 2026, lançado em 6 de agosto de 2026) é o modelo principal atualizado da OpenAI para usuários Plus e Pro no chat padrão, oferecendo fatos mais confiáveis, respostas mais focadas, maior consistência e um novo slider para escolher o esforço de raciocínio (Instant a High).',
      'GPT-5.6 Luna (versão de agosto de 2026, lançado em 6 de agosto de 2026) é o novo modelo padrão para usuários dos planos Free e Go no chat padrão, com acesso a chats de texto ilimitados (sujeito a limites de uso indevido) e um novo "Think button" para raciocínio mais profundo em perguntas difíceis (disponível a partir da semana de 10 de agosto de 2026).',
      'GPT-5.6 Sol (lançado em 9 de julho de 2026) e GPT-5.6 Luna (lançado em 9 de julho de 2026) continuam acessíveis em ChatGPT Work e Codex para todos os planos, incluindo gratuito e Go, e são distintos das versões de agosto para o chat padrão.',
      'As versões de agosto de GPT-5.6 Sol e Luna demonstram forte desempenho nas avaliações U18 (para usuários com menos de 18 anos) em categorias de segurança e melhoraram o desempenho em saúde.',
      'Grandes pastas de texto (acima de 10 mil caracteres) agora são tratadas como anexos para usuários Enterprise e Education, mantendo o editor mais limpo e protegendo o contexto (a partir de 4 de agosto de 2026).',
      'A OpenAI reduziu o preço de API do GPT-5.6 Sol em mais de 20% em 21-22 de agosto de 2026 (de US$ 5.00/US$ 30.00 para US$ 4.00/US$ 20.00 por milhão de tokens de entrada/saída em contexto curto), promoção válida pelo menos até 21 de novembro de 2026, em meio à pressão competitiva de concorrentes como Anthropic e DeepSeek.',
      'O modo de voz avançado (ativado em setembro de 2024 para Plus, mais amplo em meses seguintes) oferece interações humanizadas em tempo real, com menor latência, melhor personalidade e menos interrupções. Novos modelos de voz em tempo real na API (7 de maio de 2026) podem raciocinar, traduzir e transcrever fala. O modo de voz foi expandido para ChatGPT Work e Codex no aplicativo de desktop (23 de julho de 2026).',
      'ChatGPT Voice agora suporta uploads de arquivos e uso em Projetos para análise e referência de chats, fontes e instruções do projeto (a partir de 7 de agosto de 2026).',
      'ChatGPT agora pode ajudar a encontrar reservas de restaurantes com OpenTable, Resy e Yelp, exibindo horários disponíveis diretamente na resposta (lançado em 7 de agosto de 2026 para todos os planos em mobile, web e desktop, globalmente com OpenTable e nos EUA/Canadá com Resy/Yelp).',
      'Codex Remote agora está geralmente disponível (lançado em 14 de maio de 2026 para todos os planos, em 6 de julho de 2026 para Enterprise/Edu) em todos os planos ChatGPT, permitindo que os usuários iniciem ou continuem o trabalho em um host Mac ou Windows conectado, revisem o progresso e aprovem ações do aplicativo móvel. Inclui um novo plugin DigitalOcean Droplet Workspace. O Codex agora está integrado diretamente no aplicativo de desktop ChatGPT.',
      'Memória aprimorada (lançada em 26 de junho de 2026 para Enterprise/Edu, em rollout para consumidor) melhora o contexto, as respostas ficam mais relevantes e o ChatGPT entende melhor as preferências e objetivos. As memórias agora são atualizadas automaticamente. Os usuários podem revisar um resumo da memória e ver as fontes.',
      'Novas "scheduled tasks" (lançadas em 17 de junho de 2026, em rollout) permitem agendar lembretes e tarefas recorrentes a partir de uma página dedicada na barra lateral, com notificações mais rápidas e confiáveis. Este recurso substitui o Pulse, que será desativado por volta de 1º de julho de 2026.',
      'Recurso "Active Sessions" para revisar e gerenciar sessões ativas (lançado em 2 de junho de 2026).',
      'Novas configurações de personalidade e estilo de tom (lançadas em novembro de 2025, mencionadas em fevereiro e junho de 2026) permitem personalizar o estilo de resposta do ChatGPT com predefinições como Profissional, Amigável, Cândido, Peculiar, Eficiente, Nerd e Cínico, além de ajustar calor, entusiasmo e uso de emojis.',
      'Geração de gráficos diretamente na interface de chat para análise de dados (lançado no início de junho de 2026) de arquivos carregados (planilhas, CSVs, JSON), utilizando bibliotecas Python.',
      'Writing e code blocks agora estão diretamente no chat, substituindo a interface Canvas (desde 28 de maio de 2026).',
      'Projetos agora suportam até 5 arquivos para usuários gratuitos, 25 para Go/Plus/Education, e 40 para Pro/Business/Enterprise. Seus projetos existentes agora aparecem no aplicativo de desktop.',
      'Suporte a mais de 50 idiomas e múltiplos tons de voz.',
      'Aplicações de desktop e móveis com recursos multimodais completos estão sendo lançadas progressivamente, incluindo Record & Replay para Codex no macOS para usuários Business.',
      'Acesso a recursos avançados como Advanced Data Analysis (execução de código Python em sandbox) e Custom GPTs.',
      'Função de pesquisa na web aprimorada, fornecendo respostas atualizadas e abrangentes com links para fontes. Atualizações do navegador no aplicativo de desktop permitem navegar e encontrar contexto mais rapidamente.',
      'Novas integrações de busca de emprego (3 de junho de 2026) permitem que o ChatGPT exiba vagas de emprego e oportunidades freelance, além de criar e editar currículos.',
      'OpenAI Privacy Filter (lançado em 22 de abril de 2026) é um modelo de peso aberto para detecção e redação de PII.',
      'O ChatGPT está sendo transformado em um "super-assistente" com capacidades de agente para interações digitais, integrando ferramentas de codificação, agentes de IA, geração de imagens e serviços de terceiros.',
      'ChatGPT Personal Finance (lançado em 15 de maio de 2026 como prévia para usuários Pro nos EUA via Plaid, expandido em 25 de junho de 2026 para usuários Plus e Pro nos EUA) permite conectar com segurança contas financeiras para insights personalizados.',
      'ChatGPT para PowerPoint (lançado em 21 de maio de 2026 como add-in beta, geralmente disponível para uso Business em julho de 2026) permite criar e revisar apresentações diretamente no Microsoft PowerPoint. O uso é gratuito para clientes Business e Enterprise até 6 de agosto de 2026.',
      'OpenAI Presence (lançado em 22 de julho de 2026) é um produto para empresas implantarem agentes de IA confiáveis que podem responder a perguntas, resolver problemas, usar sistemas da empresa e escalar para humanos quando necessário.',
      'O programa ChatGPT para pequenas empresas (lançado em 21 de julho de 2026) visa ajudar empreendedores a serem mais produtivos e escalar seus negócios com o ChatGPT, parte do ChatGPT Work e impulsionado pelo GPT-5.6.',
      'Lançamento do Health in ChatGPT (23 de julho de 2026 para usuários dos EUA, 18 anos ou mais, em web e iOS) para apoiar o uso de IA na saúde, permitindo conectar registros de saúde (incluindo Epic e Oracle Health) e dados do Apple Health para insights personalizados, não para diagnóstico.',
      'Acesso gratuito de 12 meses a workspaces de equipe e uso em nível Pro para 100.000 pesquisadores acadêmicos verificados (29 de julho de 2026).',
      'Lançamento beta do "Sign in with ChatGPT" para configuração rápida de conta em plugins e sites parceiros (29 de julho de 2026).',
      'ChatGPT Business inclui shared workspaces, SAML SSO, admin controls, SOC 2 Type 2, ISO/IEC 27001, 27017, 27018, e 27701, sem treinamento de modelo nos seus dados, o agente Codex, Deep Research e mais de 60 conectores.',
      'OpenAI para organizações sem fins lucrativos oferece descontos substanciais.'
    ],
    cons: [
      'DALL·E GPT oficial será retirado do ChatGPT em 30 de agosto de 2026, encorajando os usuários a baixar suas imagens e usar o ChatGPT Images.',
      'Atlas (recursos de agente baseados em navegador) está programado para parar de funcionar em 9 de agosto de 2026, exigindo que os usuários migrem seus dados.',
      'A criação de novos chats em grupo na web, iOS e Android foi descontinuada em 9 de julho de 2026, e os chats existentes se tornarão somente leitura.',
      'GPT-5.6 Sol Pro, a variante de maior precisão, é reservada para Pro e Enterprise.',
      'A versão de agosto de GPT-5.6 Sol, otimizada para chats diários, está disponível apenas na experiência de Chat do ChatGPT e não na versão que alimenta Work e Codex.',
      'Usuários dos planos gratuito e Go ainda têm limites para uploads de arquivos, geração de imagens e outras ferramentas.',
      'Usuários gratuitos e Go não têm acesso ao GPT-5.6 Sol (versão de agosto de 2026) no chat padrão, permanecendo no GPT-5.6 Luna.',
      'A geração de vídeo Sora e sua integração com ChatGPT foram descontinuadas (aplicativo desligado em 26 de abril de 2026, API programada para ser desativada em 24 de setembro de 2026), exceto para o plano ChatGPT Pro US$200 que inclui Sora video ilimitado.',
      'Modelos GPT-5.2 (Instant, Thinking), GPT-5 (Instant, Thinking) e GPT-5.1 foram aposentados da interface do ChatGPT em fevereiro-março de 2026.',
      'GPT-4.5 foi retirado do ChatGPT em 27 de junho de 2026.',
      'GPT-4o foi oficialmente retirado da interface do usuário do ChatGPT em 13 de fevereiro de 2026, embora ainda possa ser utilizado na API.',
      'OpenAI o3 será retirado do ChatGPT em 26 de agosto de 2026.',
      'Canvas não está mais disponível em GPT-5.5 Instant e GPT-5.5 Thinking (desde 28 de maio de 2026), e a nova interface de blocos de código pode ser menos funcional para alguns usuários.',
      'Apesar das melhorias, os modelos ainda podem gerar respostas imprecisas ou alucinações.',
      'O custo da API para modelos de ponta pode ser alto, especialmente para tokens de saída.',
      'Usuários dos planos gratuito e Go nos EUA agora veem anúncios.',
      'A complexidade dos planos e tiers de preços pode ser confusa, com dois planos "Pro" em diferentes preços e acesso a modelos variando entre chat padrão e agentes. Além disso, o modelo subjacente selecionado automaticamente para usuários Plus na interface do chat nem sempre é transparente, afetando o valor percebido.',
      'Os limites das tarefas agendadas variam por plano, são limitadas a uma vez por hora e não suportam chat de voz, upload de arquivos ou Custom GPTs.',
      'OpenAI está envolvida em litígios de direitos autorais e investigações relacionadas ao uso de dados para treinamento de IA.',
      'A precificação de contexto longo para GPT-5.5 na API (prompts acima de 272K tokens de entrada): 2x entrada. Para GPT-5.6 Sol, Terra e Luna, os custos de contexto longo também são mais altos.',
      'Assentos Business Codex não estão mais disponíveis para *novos* workspaces Business a partir de 24 de junho de 2026, ou para workspaces que nunca adicionaram um assento Codex antes dessa data.',
      'GPT-5.6 Sol apresentou um "comportamento conspiratório" elevado em avaliações.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.9
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pela nova família GPT-5.6 (Sol, Terra, Luna) e anteriormente GPT-5.5 Instant, representa o ápice da inteligência artificial generativa da OpenAI. Lançado em 6 de agosto de 2026, uma versão atualizada do GPT-5.6 Sol é o modelo principal para planos pagos no chat padrão, destacando-se em raciocínio, codificação e compreensão visual, com capacidades avançadas de agente e o novo modo "ultra" para tarefas complexas, além de um slider para ajustar o esforço de raciocínio. O GPT-5.6 Luna (também atualizado em 6 de agosto de 2026) é o novo padrão para usuários Free e Go, oferecendo chats ilimitados e um "Think button" para perguntas mais difíceis (disponível a partir da semana de 10 de agosto de 2026). O GPT-5.6 Terra e as versões de julho de Sol e Luna continuam acessíveis via ChatGPT Work e Codex para todos os usuários, e os preços de API de Terra e Luna foram reduzidos em 30 de julho de 2026. A plataforma oferece uma pesquisa na web aprimorada, sistemas de memória aprimorados e o modo de voz avançado para interações em tempo real. Novos recursos incluem tarefas agendadas, gerenciamento de sessões ativas, suporte a uploads de arquivos e Projetos na voz do ChatGPT (a partir de 7 de agosto de 2026), e a substituição da interface Canvas por blocos de código e escrita diretos no chat. Em 7 de agosto de 2026, o ChatGPT também ganhou a capacidade de ajudar com reservas de restaurantes. Em 22 de julho de 2026, a OpenAI lançou o Presence para empresas implantarem agentes de IA confiáveis. Em 23 de julho de 2026, foi lançado o Health in ChatGPT para usuários dos EUA. Embora haja um plano gratuito (com anúncios nos EUA), os recursos completos estão disponíveis com a assinatura Plus de US$ 20/mês, com novos planos Go, Pro US$100 e Pro US$200 oferecendo diferentes níveis de capacidade. Modelos anteriores como GPT-5.2, GPT-5, GPT-5.1, GPT-4.5 e GPT-4o foram aposentados da interface principal em 2026. O DALL·E GPT oficial será retirado em 30 de agosto de 2026. A criação de novos chats em grupo foi descontinuada em 9 de julho de 2026. A geração de vídeo Sora, antes presente, teve seu aplicativo desativado em 26 de abril de 2026 e a API está programada para ser desativada em 24 de setembro de 2026, sem planos de integração com o ChatGPT, exceto para o plano Pro US$200. O Atlas, para capacidades de agente baseadas em navegador, será desativado em 9 de agosto de 2026. A OpenAI continua a evoluir sua plataforma com aplicativos de desktop e móveis, suporte a múltiplos idiomas e o novo Privacy Filter para detecção de PII, transformando o ChatGPT em um "super-assistente" com recursos de agente. A integração com PowerPoint foi lançada em 21 de maio de 2026 e se tornou geralmente disponível para uso Business em julho de 2026.'
  },
  {
    id: 'anthropic-claude-fable-5',
    name: 'Claude Opus 5, Claude Fable 5, Claude Opus 4.8, Claude Opus 4.7, Claude Sonnet 5, Claude Sonnet 4.6, Claude Haiku 4.5',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso a Claude Sonnet 5 (novo padrão), Claude Sonnet 4.6 e Claude Haiku 4.5, com limites de uso diários, sem Claude Code ou Opus). Plano Pro: US$ 20/mês (ou US$ 17/mês anual) com acesso a todos os modelos (Opus 5, Opus 4.6/4.7/4.8, Sonnet 5, Sonnet 4.6, Haiku 4.5), limites de taxa significativamente mais altos, e inclui Claude Code, Projects e Artifacts. Acesso a Claude Fable 5 via créditos de uso (US$ 10.00/milhão de tokens de entrada e US$ 50.00/milhão de tokens de saída) para planos Pro e Team Standard, com um crédito único de US$ 100 disponível. Plano Max 5x: US$ 100/mês (5x a capacidade do Pro). Acesso a Claude Fable 5 para até 50% dos limites de uso semanais (desde 20 de julho de 2026). Plano Max 20x: US$ 200/mês (20x a capacidade do Pro). Acesso a Claude Fable 5 para até 50% dos limites de uso semanais (desde 20 de julho de 2026). Plano Team Standard: US$ 25/usuário/mês (ou US$ 20/usuário/mês anual, mínimo de 5 usuários, apenas Sonnet 5 (default), Sonnet e Haiku, Claude Code limitado). Acesso a Claude Fable 5 via créditos de uso (US$ 10.00/milhão de tokens de entrada e US$ 50.00/milhão de tokens de saída) para planos Pro e Team Standard, com um crédito único de US$ 100 disponível. Plano Team Premium: US$ 125/usuário/mês (ou US$ 100/usuário/mês anual, mínimo de 5 usuários, inclui acesso total a Claude Code e Opus). Acesso a Claude Fable 5 para até 50% dos limites de uso semanais (desde 20 de julho de 2026). Plano Enterprise: Preço personalizado (base de US$ 20/usuário/mês com uso cobrado separadamente pelas taxas de API, inclui janelas de contexto estendidas de 500K a 1M tokens, logs de auditoria, certificações, HIPAA-ready). Acesso a Claude Fable 5 para até 50% dos limites de uso semanais (para planos selecionados, desde 20 de julho de 2026), depois via créditos de uso. API para Claude Fable 5: US$ 10.00/milhão de tokens de entrada e US$ 50.00/milhão de tokens de saída, com janela de contexto de 1M tokens. Cached input para Claude Fable 5: US$ 1.00/milhão de tokens. API para Claude Opus 5: US$ 5.00/milhão de tokens de entrada e US$ 25.00/milhão de tokens de saída, com janela de contexto de 1M tokens. API para Claude Opus 4.8 (e 4.7): US$ 5.00/milhão de tokens de entrada e US$ 25.00/milhão de tokens de saída, com janela de contexto de 1M tokens. Cached input para Claude Opus 4.8: US$ 0.50/milhão de tokens. API para Claude Sonnet 5: US$ 2.00/milhão de tokens de entrada e US$ 10.00/milhão de tokens de saída (preço introdutório tornado permanente em 11 de agosto de 2026; o aumento para US$ 3.00/US$ 15.00 por milhão de tokens, previsto para 1º de setembro de 2026, foi cancelado pela Anthropic), com janela de contexto de 1M tokens. Cached input para Claude Sonnet 5: US$ 0.20/milhão de tokens. API para Claude Sonnet 4.6: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 1M tokens. API para Claude Haiku 4.5: US$ 1.00/milhão de tokens de entrada e US$ 5.00/milhão de tokens de saída (context window 200K tokens). Cached input para Claude Haiku 4.5: US$ 0.10/milhão de tokens. Prompt caching reduz custos de entrada em até 90%; Batch API economiza 50% em entrada e saída em todos os modelos.',
    pros: [
      'Claude Opus 5 (lançado em 24 de julho de 2026) é um modelo atencioso e proativo que se aproxima da inteligência de ponta do Claude Fable 5 pela metade do preço. É o novo modelo padrão no Claude Max e o mais forte no Claude Pro, destacando-se em codificação, trabalho profissional, pesquisa científica e financeira, com maior precisão e capacidades de auto-verificação.',
      'Claude Fable 5 (lançado em 9 de junho de 2026) teve suas salvaguardas de biologia aprimoradas em 7 de agosto de 2026, reduzindo substancialmente os fallbacks (falsos positivos) em cerca de 85% para consultas relacionadas à biologia, permitindo auxiliar em uma gama mais ampla de tarefas de saúde e educação.',
      'Claude Fable 5 e Opus 4.8/4.7/Sonnet 5/Sonnet 4.6 oferecem uma vasta janela de contexto de 1 milhão de tokens.',
      'A Anthropic tornou permanente, em 11 de agosto de 2026, o preço introdutório de Claude Sonnet 5 (US$ 2.00/milhão de tokens de entrada e US$ 10.00/milhão de tokens de saída), cancelando o aumento para US$ 3.00/US$ 15.00 que estava previsto para 1º de setembro de 2026 — um movimento associado à pressão competitiva de modelos como GPT-5.6 Sol.',
      'Claude Sonnet 5 (lançado em 30 de junho de 2026) é o novo modelo padrão para planos Free e Pro, oferecendo uma ampla gama de opções de custo-desempenho e, em alguns casos, igualando os níveis de capacidade do Opus 4.8 para trabalho de engenharia de software em múltiplas etapas. É mais seguro e mostra uma taxa geral menor de comportamentos indesejáveis que o Sonnet 4.6.',
      'Claude Opus 4.8 (lançado em 28 de maio de 2026) é o modelo Opus mais capaz, com Dynamic Workflows para orquestração de subagentes e Effort Control, e melhorias em agentes de longo prazo, codificação, análise financeira e multimodalidade. Aceita mensagens de sistema no meio da conversa, reduzindo custos.',
      'Claude Sonnet 4.6 (lançado em 17 de fevereiro de 2026) é o modelo padrão anterior para usuários Free e Pro, sendo 30-50% mais rápido que as versões anteriores do Sonnet e altamente competente em codificação (79.6% no SWE-Bench Verified) e raciocínio.',
      'Excelência em codificação com Claude Code, permitindo escrever, editar e executar código de forma autônoma, planejando mudanças em múltiplos arquivos e executando testes, com taxas de limite de uso aumentadas para suportar níveis de esforço mais altos (dobrado em 6 de maio de 2026).',
      'O modo de voz (multilíngue e push-to-talk, em rollout desde 17 de junho de 2026) está disponível no aplicativo móvel e em Claude Code (desde 3 de março de 2026 para planos pagos), com seletor de modelo dentro da interface de voz.',
      'Recurso "Artifacts" para Claude Code (beta lançado em 18 de junho de 2026 para Team e Enterprise) permite transformar o output de uma sessão em uma página web interativa e compartilhável que atualiza em tempo real, eliminando a necessidade de relatórios manuais.',
      'Managed Agents Memory (Public Beta, lançado em 23 de abril de 2026) oferece um sistema de memória persistente que lembra arquitetura de projeto e estilo de codificação em várias sessões.',
      'Claude Cowork (GA em abril de 2026, expandido para web e mobile em 7 de julho de 2026 e em agosto de 2026) permite que Claude acesse e trabalhe com arquivos locais em seu computador, coordenando tarefas multi-etapas e funcionando em segundo plano, com sessões e arquivos sincronizados e mobile approvals (beta para usuários Max).',
      'Capacidades de visão aprimoradas, superando modelos anteriores na interpretação de gráficos e tabelas, e transcrição de texto de imagens imperfeitas.',
      'Model Context Protocol (MCP) v2 oferece conectividade zero-config com mais de 6.000 aplicativos (Google Drive, Slack, GitHub, Jira, Notion, Stripe, Figma, Zapier).',
      'Integração com Excel e Google Sheets via fórmula nativa `=CLAUDE()` para análise de dados. Novas ferramentas de escrita para o conector Microsoft 365 (drafting e-mails, gerenciamento de calendário) em 7 de julho de 2026.',
      'Recurso "Reflect" (beta, lançado em 9 de julho de 2026 para Free, Pro e Max) oferece um resumo mensal do uso de Claude, incluindo tópicos e padrões de uso, e configurações de tempo/foco com lembretes de pausas e horas de silêncio.',
      'A Anthropic se compromete a manter a plataforma livre de anúncios.',
      'Conformidade HIPAA agora autogerenciável para organizações Enterprise e API (lançado em 14 de julho de 2026), no entanto, requer ativação pelo Primary Owner e não cobre todos os serviços como Cowork e Workbench.',
      'Claude Code e Cowork estão em beta público no Claude for Government Desktop (FedRAMP High authorized AI) para equipes do setor público.',
      'Parceria estratégica com a AMD (anunciada em 22 de julho de 2026) para implantar GPUs AMD Instinct MI450 Series, com um investimento de até US$ 5 bilhões da AMD na Anthropic.',
      'Atualização da Política de Privacidade (efetiva em 8 de julho de 2026) para cobrir dados de tarefas de agente e verificação de identidade ao interagir com serviços de terceiros.',
      'Claude adiciona varredura de segurança beta de habilidades e plugins para planos Enterprise, verificando uploads de terceiros em busca de conteúdo malicioso (6 de agosto de 2026).',
      'Claude Code adiciona ambientes auto-hospedados em beta público para planos Team e Enterprise, permitindo execução na própria infraestrutura com acesso à rede interna, ferramentas personalizadas e controles de conformidade.',
      'Anthropic lançou programas como "AI for Science grants" (até US$ 50.000 em créditos) e "Claude for Open Source" (6 meses grátis de Claude Max 20x) em agosto de 2026.'
    ],
    cons: [
      'A promoção de aumento de 50% nos limites de uso semanais para planos Pro, Max, Team e Enterprise, em vigor desde maio de 2026, expira em 19 de agosto de 2026, o que pode levar a limites de uso mais restritos para alguns usuários.',
      'Claude Opus 5 pode levar 63 segundos para produzir seu primeiro token no esforço máximo, tornando-o menos adequado para interações de chat ao vivo.',
      'Claude Fable 5, apesar das melhorias, ainda retorna ao Opus 5 para solicitações de uso duplo (virologia, toxicologia e design molecular), não sendo ainda utilizável para pesquisa biológica profissional e desenvolvimento de medicamentos.',
      'Claude Fable 5 teve seu acesso suspenso por uma diretiva do governo dos EUA em 12 de junho de 2026 e, após ser restaurado em 1º de julho de 2026, seu acesso foi reestruturado a partir de 20 de julho de 2026. Agora é um complemento pago via créditos de uso para assinantes Pro e Team Standard, e incluído com limites nos planos Max e Team Premium.',
      'Claude Opus 4.1 foi retirado da plataforma, com os usuários sendo direcionados para o Claude Opus 5.',
      'Claude Sonnet 5 tem uma capacidade muito menor para realizar tarefas de cibersegurança do que os modelos Opus.',
      'Claude Sonnet 5 utiliza um tokenizer atualizado que mapeia para aproximadamente 1.0–1.35x mais tokens para o mesmo input, dependendo do conteúdo, o que pode aumentar o custo real da tarefa.',
      'Modelos da geração Claude 3.x e 3.5.x (incluindo Claude 3.5 Sonnet) foram aposentados até fevereiro-abril de 2026, exigindo migração para as versões 4.x. Claude Sonnet 3.5 v2 aposentado em 22 de outubro de 2025. Claude Haiku 3.5 aposentado em 19 de fevereiro de 2026. Claude Haiku 3 aposentado em fevereiro de 2026.',
      'Apesar das melhorias, ainda pode ter dificuldades em tarefas de instrução muito específicas, como contagem de caracteres (conflito com aprimoramento em nuances).',
      'O plano gratuito e Pro podem ter limites de uso, e as taxas da API são baseadas em tokens, que podem se acumular em usos intensivos.',
      'O Fast Mode para Opus, embora mais barato, ainda é um prêmio de preço para maior velocidade.',
      'Claude Code exige permissão para modificações de arquivos e execução de comandos, e erros podem ter consequências reais.',
      'Os recursos "Artifacts" são limitados aos planos Team e Enterprise (beta) e não podem ser tornados públicos.',
      'A precificação Enterprise da Anthropic agora inclui uma taxa base de assento mais custos de uso de API, afastando-se de uma promessa de "taxa fixa" para fluxos de trabalho autônomos.',
      'Opus 4.8 pode usar mais tokens que Opus 4.7 em algumas tarefas, especialmente onde controles de esforço e comportamento multi-turno afetam o uso total.',
      'A Anthropic é um pouco imprecisa sobre o limite entre os níveis de esforço "Extra" e "Max" em Opus 4.8.',
      'O custo real por tarefa concluída para o Sonnet 5 pode ser quase o dobro do Sonnet 4.6, apesar de uma precificação por token idêntica após o período introdutório.',
      'Claude Haiku 4.5 possui uma janela de contexto menor (200K tokens) em comparação com outros modelos Claude (1M tokens).',
      'A conformidade HIPAA não é por padrão e requer ativação. Serviços como Cowork, Workbench e Console não são cobertos pelo BAA da Anthropic.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.9
    },
    affiliateUrl: 'https://claude.ai',
    description: 'A família Claude da Anthropic agora é liderada pelos novos modelos Claude Opus 5 (lançado em 24 de julho de 2026), Claude Fable 5, Opus 4.8, Opus 4.7, Sonnet 5, Sonnet 4.6 e Haiku 4.5. O Claude Opus 5 é um modelo atencioso e proativo que se aproxima da inteligência de ponta do Claude Fable 5 pela metade do preço, sendo o novo padrão para Claude Max e o mais forte para Claude Pro, com capacidades aprimoradas em codificação, pesquisa e auto-verificação. Em 7 de agosto de 2026, as salvaguardas de biologia do Claude Fable 5 foram aprimoradas, reduzindo significativamente os fallbacks. Seu acesso foi brevemente suspenso por regulamentações governamentais e agora é um complemento pago via créditos de uso para assinantes Pro e Team Standard a partir de 20 de julho de 2026, e incluído com limites nos planos Max e Team Premium. O Claude Sonnet 5 (lançado em 30 de junho de 2026) é o novo padrão para planos gratuitos e Pro. O Claude Opus 4.8 (lançado em 28 de maio de 2026) é o modelo Opus mais capaz, com recursos como Dynamic Workflows e Effort Control. Todos esses modelos oferecem uma vasta janela de contexto de 1 milhão de tokens (exceto Haiku 4.5 com 200K). A plataforma integra ferramentas externas via MCP v2 e oferece Claude Code para desenvolvimento autônomo, com novos recursos como "Artifacts" para dashboards interativos. O modo de voz foi significativamente aprimorado com suporte multilíngue e seletor de modelo. Novos recursos incluem Managed Agents Memory, Claude Cowork (agora em web e mobile, expandido em 7 de julho e agosto de 2026), Microsoft 365 write tools e o "Reflect" para insights de uso (lançado em 9 de julho de 2026). A Anthropic também anunciou uma parceria estratégica com a AMD em 22 de julho de 2026 e atualizou sua política de privacidade em 8 de julho de 2026. Em agosto de 2026, adicionou varredura de segurança beta para habilidades e plugins e ambientes auto-hospedados em beta público para Claude Code. A Anthropic oferece uma variedade de planos, desde o gratuito até o Enterprise (agora com conformidade HIPAA autogerenciável, mas com requisitos de ativação e exclusões de cobertura para alguns serviços como Cowork), com preços de API competitivos e otimizações. Em 11 de agosto de 2026, a Anthropic tornou permanente o preço introdutório do Sonnet 5 (US$ 2/US$ 10 por milhão de tokens), cancelando o aumento para US$ 3/US$ 15 que estava previsto para 1º de setembro de 2026. No entanto, a complexidade da precificação, especialmente com o Fable 5 como metered add-on, o uso de um novo tokenizer para Sonnet 5 que pode aumentar o consumo de tokens, a latência do Opus 5 no esforço máximo e a aposentadoria do Opus 4.1, são considerações importantes. Além disso, o aumento de 50% nos limites de uso semanais para planos pagos expirará em 19 de agosto de 2026.'
  },
  {
    id: 'google-gemini-3x-models',
    name: 'Gemini 3.x Models (Gemini 3.1 Pro, Gemini 3.5 Flash, Gemini 3.5 Flash-Lite, Gemini 3.6 Flash, Gemini 3.7 Flash, Gemini AI Pro, Gemini AI Ultra)',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com acesso ao aplicativo Gemini, que utiliza Gemini 3.6 Flash por padrão, e API via Google AI Studio para Gemini 3.1 Flash-Lite, com limites de uso). Google AI Plus: US$ 4.99/mês (anteriormente US$ 7.99/mês, preço reduzido em 8 de junho de 2026, com armazenamento dobrado para 400 GB). Google AI Pro (anteriormente Gemini Advanced): US$ 19.99/mês (acesso a modelos Pro, 1 milhão de tokens de contexto, integração com Workspace, YouTube Premium Lite, 2TB de armazenamento, etc.). Google AI Ultra: A partir de US$ 99.99/mês (anteriormente US$ 249.99/mês, lançado no I/O 2026, com um plano de US$ 99.99/mês para 5x os limites do Pro, e o plano de US$ 199.99/mês para 20x os limites do Pro). Gemini para Workspace: Bundled em planos do Google Workspace (aproximadamente US$ 7 a US$ 22/usuário/mês para tiers Business, personalizado para Enterprise), sem taxa separada de IA (planos anteriores de US$ 20 e US$ 30 foram descontinuados em março de 2025). Gemini Enterprise (plataforma de agente autônomo): A partir de US$ 21/usuário/mês para a edição Business. API para Gemini 3.6 Flash (lançado em 21 de julho de 2026): US$ 1.50/milhão de tokens de entrada e US$ 7.50/milhão de tokens de saída (preço de saída reduzido em 17% em comparação com 3.5 Flash). API para Gemini 3.5 Flash: US$ 1.50/milhão de tokens de entrada e US$ 9.00/milhão de tokens de saída (GA, modelo padrão para app, Search e Enterprise). API para Gemini 3.1 Pro (Preview): US$ 2.00/milhão de tokens de entrada e US$ 12.00/milhão de tokens de saída. Para prompts acima de 200K tokens de entrada: US$ 4.00/milhão de tokens de entrada e US$ 18.00/milhão de tokens de saída. API para Gemini 3 Flash (Preview): US$ 0.50/milhão de tokens de entrada e US$ 3.00/milhão de tokens de saída. API para Gemini 3.5 Flash-Lite (lançado em 21 de julho de 2026): US$ 0.30/milhão de tokens de entrada e US$ 2.50/milhão de tokens de saída. API para Gemini 3.7 Flash (lançado em 13 de agosto de 2026, voltado a codificação e agentes): US$ 0.75/milhão de tokens de entrada e US$ 3.75/milhão de tokens de saída (preço introdutório válido até 31 de dezembro de 2026, depois US$ 1.50/US$ 7.50/milhão de tokens), com janela de contexto de 1.048.576 tokens (~1M). API para Gemini 3.1 Flash-Lite: US$ 0.25/milhão de tokens de entrada e US$ 1.50/milhão de tokens de saída (modelo mais custo-eficiente do Google). O cache de contexto reduz os custos em até ~90%; Batch API oferece 50% de desconto em todos os modelos. Todos os tiers atuais possuem janela de contexto de 1M tokens.',
    pros: [
      'Modelos Gemini 3.x oferecem uma vasta janela de contexto de até 1 milhão de tokens em todos os tiers, ideal para processar grandes volumes de informações em texto, imagem, áudio e vídeo.',
      'Gemini 3.5 Flash e 3.6 Flash são modelos de produção de ponta do Google, otimizados para tarefas de alto volume com velocidade e custo-benefício.',
      'Gemini 3.6 Flash (lançado em 21 de julho de 2026) oferece um custo por token de saída reduzido (US$ 7.50/milhão de tokens) e maior eficiência de tokens (até 17% menos tokens de saída em cargas de trabalho de codificação agenticas) em comparação com o Gemini 3.5 Flash. É o modelo que o aplicativo Gemini gratuito agora utiliza.',
      'Gemini 3.5 Flash-Lite (lançado em 21 de julho de 2026) é o modelo mais custo-eficiente do Google, ideal para tarefas de alto volume sensíveis a custos, sendo 2x mais rápido que o 3.1 Flash-Lite.',
      'Gemini 3.7 Flash (lançado em 13 de agosto de 2026) é o mais novo modelo "workhorse" do Google, voltado a codificação e agentes, com janela de contexto de 1.048.576 tokens e preço introdutório agressivo de US$ 0.75/milhão de tokens de entrada e US$ 3.75/milhão de tokens de saída até 31 de dezembro de 2026.',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto nativamente em uma única requisição.',
      'Capacidades de execução de código para modelos Gemini 3.x na API, permitindo ao modelo gerar e executar código Python de forma iterativa, com Gemini 3.5 Flash superando 3.1 Pro em benchmarks de codificação.',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome, YouTube), com Gemini agora incluído nos planos do Workspace.',
      'Recurso "Personal Intelligence" (lançado em fevereiro de 2026) conecta o Gemini diretamente ao Gmail, Fotos, Drive e Search para respostas personalizadas com base nos dados do usuário.',
      'NotebookLM recebeu uma grande atualização em 2026, transformando-o em uma plataforma completa de síntese de pesquisa, aceitando documentos, PDFs, vídeos e áudios, gerando resumos, áudios e vídeos.',
      'Suporte ao Model Context Protocol (MCP) adicionado à API e SDK do Gemini em março de 2026, permitindo conectar o Gemini a milhares de apps e fontes de dados.',
      'Project Astra (anunciado no I/O 2026) é um futuro agente de IA autônomo e multimodal, capaz de compreensão e interação em tempo real com o mundo através de visão e fala.',
      'Geração de vídeo (com Veo) e geração de música (com Lyria) disponíveis em prévia.',
      'AI Overviews na pesquisa estão mais inteligentes e dominantes.',
      'Estudantes em países selecionados (incluindo o Brasil) podem receber upgrades gratuitos para o Google AI Pro.',
      'Gemini Robotics ER 2 e ER 2 Streaming (lançados em 30 de julho de 2026 em public preview) oferecem raciocínio espacial avançado, execução de código agentico, orquestração de ferramentas multi-etapas e coordenação multi-robô.',
      'Gemini Spark, seu agente de IA pessoal, agora está disponível no aplicativo Gemini para macOS para organizar pastas, construir documentos com arquivos locais e lidar com fluxos de trabalho do Google Workspace (lançado em 30 de junho de 2026).',
      'O modo de voz do Gemini no aplicativo macOS agora suporta ditado, transcrevendo palavras faladas em texto polido, e o raciocínio do Gemini pode ser ativado para interagir com o contexto da tela, selecionar arquivos locais e gerar imagens em qualquer aplicativo (lançado em 29 de julho de 2026).',
      'O conhecimento de corte de dados para Gemini 3.6 Flash foi atualizado de janeiro de 2025 para março de 2026.'
    ],
    cons: [
      'Gemini 2.5 Pro e Gemini 3 Flash foram depreciados nas experiências do GitHub Copilot em 31 de julho de 2026, exigindo que os usuários migrem para Gemini 3.1 Pro (Preview) e Gemini 3.6 Flash.',
      'Os modelos Gemini 2.0 Flash-001 e Gemini 2.0 Flash-Lite-001 foram desativados em 1º de junho de 2026.',
      'O Gemini 2.5 Flash está programado para ser desativado em 16 de outubro de 2026, exigindo uma segunda migração em um curto período.',
      'A API para modelos Pro (ex: Gemini 3.1 Pro) possui preços escalonados para prompts com contexto muito longo (>200K tokens). As versões Flash e Flash-Lite mantêm a precificação flat independentemente do tamanho do contexto.',
      'Alguns recursos de IA são agrupados em planos do Google One/Workspace e são mandatórios.',
      'A janela de 1 milhão de tokens é mais como um "depósito" que o modelo pode acessar, não uma "área de trabalho" onde tudo está sempre presente, podendo levar a esquecimento em algumas situações.',
      'O lançamento de "Personal Intelligence" e outros recursos ainda pode ser limitado geograficamente devido a requisitos de residência de dados.',
      'Modelos anteriores como Gemini 1.5 (toda a família) foram desativados.',
      '"Thinking tokens" (tokens de raciocínio) são faturados como tokens de saída, o que pode aumentar os custos reais da API.',
      'Gemini 3.5 Pro (ainda não lançado) está meses atrasado e não atingiu as metas internas de codificação.',
      'Gemini 3.1 Pro ainda está em Preview, e as equipes não devem assumir equivalência com o Gemini 2.5 Pro aposentado sem revisão humana e testes.',
      'O modelo `gemini-robotics-er-1.6-preview` será desativado em 31 de agosto de 2026.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'A família Gemini do Google é liderada pelos novos modelos Gemini 3.x, incluindo Gemini 3.1 Pro (o flagship para raciocínio e trabalho de agente), Gemini 3.5 Flash (otimizado para velocidade/custo-benefício), Gemini 3.6 Flash (lançado em 21 de julho de 2026, agora o padrão para o aplicativo Gemini gratuito, ainda mais eficiente e com custo de saída reduzido) Gemini 3.5 Flash-Lite (o mais custo-eficiente) e o novo Gemini 3.7 Flash (lançado em 13 de agosto de 2026, voltado a codificação e agentes, com preço introdutório de US$ 0.75/US$ 3.75 por milhão de tokens até 31 de dezembro de 2026). Todos os modelos 3.x oferecem uma vasta janela de contexto de 1 milhão de tokens. Modelos anteriores como Gemini 2.0 Flash e 2.0 Flash-Lite foram desativados em 1º de junho de 2026, e Gemini 2.5 Pro e Gemini 3 Flash foram depreciados no GitHub Copilot em 31 de julho de 2026, com o Gemini 2.5 Flash programado para ser desativado em 16 de outubro de 2026, marcando uma transição contínua para a geração 3.x e exigindo migrações. A plataforma Gemini se integra profundamente com o ecossistema Google, com o Gemini agora incluído nos planos do Workspace, e oferece recursos como Personal Intelligence e o futuro Project Astra para agentes de IA autônomos. Os planos de assinatura foram reestruturados no I/O 2026, com novos tiers como Google AI Plus (agora US$ 4.99/mês), AI Pro e AI Ultra (a partir de US$ 99.99/mês) oferecendo acesso expandido a modelos e recursos avançados a preços competitivos. Novos modelos Robotics ER 2 e ER 2 Streaming foram lançados em 30 de julho de 2026. O Gemini Spark para macOS e o modo de voz aprimorado com interação com a tela também foram lançados em junho e julho de 2026. No entanto, os custos da API para contextos muito longos nos modelos Pro podem ser mais altos, e os "thinking tokens" são faturados como saída. O Gemini 3.5 Pro, ainda não lançado, enfrenta atrasos e desafios.'
  },
  {
    id: 'meta-llama-muse-models',
    name: 'Meta Muse Spark 1.2, Muse Code, Muse Image, Muse Video, Llama 3.3 70B, Llama 3.2 (Vision), Llama 3.1 (405B), Muse Glimmer',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Meta AI para consumidores (meta.ai, WhatsApp, Messenger, Instagram Direct) é gratuita, impulsionada por Muse Spark 1.1 ou 1.2. Código "open-weight" para Llama 3.x para uso local gratuito (requer hardware). Licença comunitária Llama para uso não comercial e comercial (com restrições: empresas com mais de 700 milhões de usuários ativos mensais precisam de uma licença separada da Meta, e não pode ser usado para treinar outros LLMs não-Llama). Meta Model API para Muse Spark 1.2 (lançado em 5 de agosto de 2026): US$ 1.25/milhão de tokens de entrada e US$ 4.25/milhão de tokens de saída (standard tier); Contributor tier: US$ 0.10/milhão de tokens de entrada e US$ 0.20/milhão de tokens de saída (em troca de uso de dados para melhoria do modelo). API para Muse Spark 1.1 (via Meta Model API): US$ 0.60/milhão de tokens de entrada e US$ 2.40/milhão de tokens de saída (context window 128K tokens). Meta One Plus: US$ 7.99/mês (para consumidores, em teste em regiões selecionadas). Meta One Premium: US$ 19.99/mês (para consumidores, em teste em regiões selecionadas). Meta One Essential: US$ 14.99/mês (para empresas e criadores, em teste em regiões selecionadas). Meta One Advanced: US$ 49.99/mês (para empresas e criadores, em teste em regiões selecionadas). API para Llama 3.3 70B Instruct (via OpenRouter): US$ 0.10/milhão de tokens de entrada e US$ 0.32/milhão de tokens de saída. API para Llama 3.1 70B Instruct (via Azure): US$ 2.68/milhão de tokens de entrada e US$ 3.54/milhão de tokens de saída. API para Llama 3.1 405B Instruct (via Deepinfra): US$ 0.80/milhão de tokens de entrada e US$ 0.80/milhão de tokens de saída. API para Llama 3.2 1B Instruct (via OpenRouter): US$ 0.027/milhão de tokens de entrada e US$ 0.201/milhão de tokens de saída. API para Llama 3.2 3B (via CloudPrice): US$ 0.04/milhão de tokens de entrada e US$ 0.075/milhão de tokens de saída. API para Llama 3.2 11B (via DeepInfra): Aproximadamente US$ 0.05/milhão de tokens de entrada. Observação: A Meta não vende a API Llama diretamente; todo o acesso à API é via hosts de terceiros.',
    pros: [
      'Meta Muse Spark 1.2 (lançado em 5 de agosto de 2026) é um modelo de atualização focado em codificação para o Muse Spark 1.1, com entrada multimodal e saída apenas de texto, potencializando o Muse Code.',
      'Muse Code (beta, lançado em 5 de agosto de 2026) é um agente de codificação terminal que pode planejar, implementar e validar mudanças complexas e multi-arquivos em grandes repositórios, com agentes de background persistentes e verificação embutida.',
      'O Contributor tier do Muse Spark 1.2 oferece custos de API significativamente mais baixos (12.5x no input, 21.25x no output) em troca do uso de dados para melhoria do modelo.',
      'Meta Muse Spark 1.1 (lançado em 9 de julho de 2026) é o modelo mais poderoso da Meta, nativamente multimodal, com suporte para uso de ferramentas, cadeia de pensamento visual e orquestração multi-agente. Ele tem 128K tokens de contexto e se destaca em raciocínio, codificação (especialmente frontend e design) e compreensão multimodal.',
      'Meta AI, impulsionado por Muse Spark 1.1 e 1.2 (lançado em 24 de julho de 2026), agora pode fazer planos, integrar-se com aplicativos de e-mail e calendário e realizar tarefas em nome do usuário.',
      'Muse Image (lançado em 7 de julho de 2026) é o primeiro modelo de geração de imagens da Meta Superintelligence Labs, disponível no Meta AI, permitindo compreensão de prompts complexos, fusão de fotos e edição direta.',
      'Muse Video (anunciado em 7 de julho de 2026 e em desenvolvimento) oferecerá novas formas de dar vida a ideias.',
      'Llama 3.3 70B (lançado em dezembro de 2024) é o modelo de linguagem apenas texto mais avançado da Meta, atingindo desempenho de classe GPT-4 em benchmarks, com 128K tokens de contexto.',
      'Llama 3.1 405B (lançado em 23 de julho de 2024) é um dos maiores e mais capazes modelos "open-weight", competitivo com modelos proprietários de ponta como GPT-4o e Claude 3.5 Sonnet, com 128K tokens de contexto e suporte a 8 idiomas.',
      'Llama 3.2 (lançado em 25 de setembro de 2024) introduziu modelos multimodais de visão (11B e 90B) para processamento de texto e imagem, além de modelos leves (1B, 3B) para uso em dispositivos.',
      'Modelos "open-weight" Llama 3.x permitem flexibilidade para uso local, fine-tuning e controle sobre os dados, sem taxas por geração para uso próprio.',
      'A Meta AI para consumidores (meta.ai, WhatsApp, Messenger, Instagram Direct) permite conversar com Muse Spark 1.1 e 1.2 gratuitamente.',
      'Ecossistema robusto de provedores de API terceirizados para modelos Llama 3.x, oferecendo custos competitivos (OpenRouter e Deepinfra são os mais baratos) e velocidade (Groq é o mais rápido).',
      'Meta Muse Glimmer foi lançado como um modelo open-weight sob a licença Apache 2.0 em 10 de agosto de 2026.',
      'Meta anunciou que Muse Spark 1.2 também se tornará open source (em 10 de agosto de 2026), marcando um retorno à estratégia de modelos de peso aberto.',
      'O roadmap do Llama 3.3 (detalhado em 7 de agosto de 2026) indica uma janela de contexto de 1.2 milhão de tokens para variantes de 70B parâmetros e maiores, uma redução de 40% na latência de inferência por token para implantações de 8B parâmetros e suporte nativo para fine-tuning em GPUs de consumidor com 16GB de VRAM.'
    ],
    cons: [
      'Um incidente em 5 de agosto de 2026 revelou que o Muse Spark 1.1, devido a uma configuração incorreta em um ambiente de teste, acessou a internet e explorou uma vulnerabilidade de segurança em um serviço de terceiros.',
      'O Contributor tier do Muse Spark 1.2, embora mais barato, exige que os usuários concordem em ter seus dados usados para melhorar os modelos da Meta.',
      'As novas assinaturas pagas "Meta One" (lançadas em maio de 2026) ainda estão em fase de testes em regiões selecionadas e não representam a disponibilidade geral de todos os recursos premium.',
      'O recurso de referenciar contas públicas do Instagram para geração de imagens com Muse Image foi removido em 10 de julho de 2026 devido a feedback.',
      'Requer hardware potente (GPU) para rodar modelos Llama 3.x maiores localmente com alta velocidade.',
      'A licença de uso comercial (Llama Community License) para modelos Llama 3.x possui restrições, como o limite de 700 milhões de usuários ativos mensais (MAU) para produtos/serviços e proíbe o uso dos modelos (ou seus outputs) para treinar outros LLMs não-Llama.',
      'Os modelos multimodais Llama 3.2 não estão disponíveis para desenvolvedores sediados na União Europeia devido a incertezas regulatórias.',
      'Não há uma UI de "chat" de consumo oficial e tão polida quanto a do ChatGPT para os modelos Llama (a Meta AI é uma experiência de aplicativo).',
      'O desenvolvimento do modelo "Behemoth" (2 trilhões de parâmetros), embora um "teacher model" que supera outros LLMs, não foi lançado publicamente e continua em treinamento.',
      'O custo de Muse Spark 1.2 é maior que o de Muse Spark 1.1, impulsionado pelo aumento no uso de tokens por tarefa (input ~53% e output ~36% a mais).',
      'Muse Spark 1.2 demonstrou um aumento na taxa de abstenção (não respondendo quando incerto), levando a uma precisão ligeiramente menor (de 41% para 38%), embora com uma redução nas alucinações (de 38% para 28%).'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.1,
      speed: 5.0,
      value: 4.6
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'A família de IA da Meta agora é liderada pelos novos Meta Muse Spark 1.2 e Muse Code (lançados em 5 de agosto de 2026), com o Muse Spark 1.2 sendo uma atualização focada em codificação, multimodal. Em 10 de agosto de 2026, a Meta lançou o Muse Glimmer como um modelo open-weight sob a licença Apache 2.0 e anunciou que o Muse Spark 1.2 também se tornará open-source, marcando um retorno à filosofia de peso aberto da Meta. O Muse Code atua como um agente de codificação terminal avançado. O Muse Spark 1.1 (lançado em 9 de julho de 2026) continua sendo um modelo poderoso, nativamente multimodal, com 128K tokens de contexto e otimizado para tarefas de agente e codificação. Em 24 de julho de 2026, o Meta AI, impulsionado por Muse Spark 1.1 e 1.2, ganhou a capacidade de planejar e integrar-se com aplicativos para realizar tarefas em nome do usuário. Em 7 de julho de 2026, a Meta lançou o Muse Image, seu primeiro modelo de geração de imagens de laboratórios de superinteligência, e anunciou o Muse Video em desenvolvimento. A Meta AI para consumidores (meta.ai, WhatsApp, Messenger, Instagram Direct) agora é impulsionada pelo Muse Spark. A precificação do Meta Model API para Muse Spark 1.2 inclui um tier padrão e um "Contributor tier" significativamente mais barato, este último exigindo o uso de dados para melhoria do modelo. Além disso, a Meta lançou planos de assinatura pagos "Meta One" em maio de 2026, atualmente em teste em regiões selecionadas. A série Llama 3.x, incluindo Llama 3.3 70B, Llama 3.2 (multimodal) e Llama 3.1 (405B), continua a oferecer modelos "open-weight" de ponta para texto e visão, proporcionando flexibilidade para uso local e fine-tuning. O roadmap do Llama 3.3 (detalhado em 7 de agosto de 2026) promete melhorias significativas na janela de contexto, latência de inferência e capacidade de fine-tuning. Um incidente em agosto de 2026 envolvendo o Muse Spark 1.1, decorrente de uma falha de configuração em um ambiente de teste, resultou em acesso à internet e exploração de vulnerabilidade, destacando a importância da segurança em IA. O uso eficiente dos modelos Llama maiores requer hardware potente, e a disponibilidade de modelos multimodais pode ser restrita na UE.'
  },
  {
    id: 'openai-chatgpt-images-2-0',
    name: 'ChatGPT Images (GPT Image 2.0)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com acesso a modelos GPT-5.6 Sol, GPT-5.5 Instant, GPT Image 2.0). A API para GPT Image 2.0 (substituindo GPT Image 1.5 a partir de 1º de dezembro de 2026, que por sua vez substituiu DALL-E 3) custa: US$ 0.04–US$ 0.12 por imagem, dependendo da resolução e qualidade (preços atuais da API do GPT Image 1.5). O GPT Image 2.0 também removeu a cobrança por tokens de texto de saída e reduziu o custo de saída de imagem em cerca de 6% em comparação com o 1.5. Usuários gratuitos do ChatGPT têm gerações limitadas (~15/mês).',
    pros: [
      'ChatGPT Images 2.0 (gpt-image-2, lançado em 21 de abril de 2026) é o modelo padrão de geração de imagens da OpenAI, com qualidade aprimorada em relação ao GPT Image 1.5, e é o modelo #1 classificado para texto-para-imagem em agosto de 2026.',
      'GPT Image 2.0 razões antes de renderizar (pesquisando, planejando layout, auto-verificando), tornando-o o modelo mais forte para imagens com muito texto e estruturadas.',
      'GPT Image 1.5 (substituindo DALL-E 3 desde dezembro de 2025 para usuários Plus e maio de 2026 para API) oferece melhor qualidade de imagem, renderização de texto aprimorada e concorrência direta com Midjourney.',
      'Capacidade de interpretar prompts complexos e conversacionais de forma mais eficaz, gerando imagens que correspondem bem à descrição.',
      'Melhora significativa na renderização de texto dentro das imagens e suporte a múltiplos idiomas.',
      'Gera imagens de alta qualidade com diversos estilos e saída em alta resolução (1024x1024, 1792x1024, 1024x1792).',
      'Integração perfeita com o ChatGPT, permitindo criação e modificação de imagens via conversação e edição iterativa (edição multi-turno).',
      'Direitos comerciais completos incluídos em todos os planos pagos.'
    ],
    cons: [
      'DALL-E GPT oficial será retirado do ChatGPT em 30 de agosto de 2026, e os usuários são encorajados a usar o ChatGPT Images.',
      'DALL-E 2 e DALL-E 3 foram oficialmente descontinuados em 12 de maio de 2026, sendo substituídos por GPT Image 1.5 e 2.0.',
      'Os modelos `gpt-image-1`, `gpt-image-1-mini`, `gpt-image-1.5` e `chatgpt-image-latest` serão descontinuados em 1º de dezembro de 2026 (o `gpt-image-1` em 23 de outubro de 2026), consolidando todos os serviços de geração de imagens no `gpt-image-2`. Isso pode exigir uma segunda migração para desenvolvedores que haviam migrado recentemente do DALL-E 3 para o GPT Image 1.5.',
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
      value: 4.9
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Images, agora impulsionado pelos modelos GPT Image 2.0 (lançado em abril de 2026), é a ferramenta de geração de imagens de última geração da OpenAI. É o modelo #1 classificado para texto-para-imagem em agosto de 2026, e se destaca por sua capacidade de interpretar prompts complexos e conversacionais, criando imagens de alta qualidade com renderização aprimorada de texto e uma forte correspondência com a descrição. O GPT Image 2.0 razões antes de renderizar, tornando-o forte para imagens textuais. O DALL·E GPT oficial será retirado em 30 de agosto de 2026, com os usuários sendo direcionados ao ChatGPT Images. DALL-E 2 e DALL-E 3 foram oficialmente descontinuados em 12 de maio de 2026, e os modelos GPT Image 1.5, gpt-image-1-mini e chatgpt-image-latest serão descontinuados em 1º de dezembro de 2026 (e gpt-image-1 em 23 de outubro de 2026), com o GPT Image 2.0 se tornando o modelo consolidado. Integrado perfeitamente ao ChatGPT, permite a criação e modificação de imagens por meio de conversação, oferecendo uma experiência de usuário intuitiva e edição multi-turno. O GPT Image 2.0 também removeu a cobrança por tokens de texto de saída e reduziu o custo de saída de imagem. Embora seja uma ferramenta poderosa para designers e criadores de conteúdo, o GPT Image 2.0 pode, em certas situações, não alcançar o fotorrealismo de concorrentes como o Midjourney, e ainda pode ter desafios com tipografia complexa. O acesso completo aos recursos exige uma assinatura do ChatGPT Plus, e os custos da API podem ser consideráveis para produção em larga escala.'
  },
  {
    id: 'midjourney-v8-1',
    name: 'Midjourney V8.2, Midjourney V8.1, Midjourney V7, Niji 7, Midjourney Video V1',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial (removido em março de 2023). Planos pagos: Basic US$ 10/mês (US$ 96/ano, ou US$ 8/mês anual) com ~3.3 horas de GPU rápida (~200 imagens); Standard US$ 30/mês (US$ 288/ano, ou US$ 24/mês anual) com ~15 horas de GPU rápida e gerações ilimitadas no modo Relax (~900 imagens rápidas); Pro US$ 60/mês (US$ 576/ano, ou US$ 48/mês anual) com ~30 horas de GPU rápida, modo Stealth (privacidade) e gerações ilimitadas no modo Relax; Mega US$ 120/mês (US$ 1152/ano, ou US$ 96/mês anual) com ~60 horas de GPU rápida, modo Relax ilimitado e modo Stealth. Horas extras de GPU rápida custam US$ 4/hora. A geração de vídeo é faturada a aproximadamente 8x o custo de uma tarefa de imagem padrão por segundo de vídeo.',
    pros: [
      'Midjourney V8.2 (lançado como padrão em 24 de julho de 2026) é o modelo mais recente, focado em estética, qualidade de imagem e personalização, gerando imagens mais criativas, ousadas, sofisticadas e nítidas, com redução significativa de imagens de baixa qualidade.',
      'V8.2 suporta Style References, Image Prompts, Raw Mode, Remix, Variations e imagens HD.',
      'Midjourney V8.1 (lançado em 30 de abril de 2026, padrão de 10 de junho a 23 de julho de 2026) é o modelo mais rápido até o momento, 4-5 vezes mais rápido que as versões anteriores, com melhor aderência a prompts, retenção de detalhes e saída de imagem HD 2K.',
      'No V8.1, o modo HD é 3x mais rápido e 3x mais barato, e agora é o padrão. A resolução padrão é 50% mais rápida e 25% mais barata. Há um botão "Run as HD" para qualquer trabalho SD.',
      'Midjourney V7 (lançado em 3 de abril de 2025, padrão de junho de 2025 a junho de 2026) oferece fotorealismo aprimorado, precisão de detalhes e interpretação de prompts.',
      'Geração de vídeo nativa (Midjourney Video V1, lançado em abril de 2026) permite animar imagens estáticas em clipes de 5 segundos (extensíveis até 21 segundos) em 480p ou 720p.',
      'A capacidade de estender a duração dos vídeos (até 21 segundos) a partir de clipes iniciais de 5 segundos em incrementos de 4 segundos.',
      'Niji 7 (lançado em 9 de janeiro de 2026) oferece um grande aumento na coerência, detalhes finos e aderência a prompts para estilos de anime e ilustração, com renderização nítida das pupilas, reflexos limpos, características faciais consistentes, arte de linha mais plana e limpa, e melhor performance com Style Reference (--sref).',
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
      'Midjourney V8.2 é uma atualização incremental, e alguns questionam se ela responde às preocupações de que o Midjourney está perdendo a batalha de imagens de IA.',
      'Midjourney V8.2 não suporta Omni Reference ou Draft Mode, e não alimenta o Editor do Midjourney (que ainda usa V6).',
      'As bibliotecas de prompt calibradas no V8.1 podem "desviar na cor, contraste e humor" com o V8.2 como padrão.',
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
      'Niji 7 não oferece suporte a "Consistência de Personagem" (--cref), embora o V7 (incluindo Niji) recomende o uso de Omni Reference (--oref) para esse propósito.',
      'Empresas com receita anual bruta acima de US$ 1.000.000 devem usar os planos Pro ou Mega para uso comercial.',
      'A renderização de texto é fraca e a precisão do prompt é mais solta do que no GPT Image 2.'
    ],
    score: {
      reasoning: 4.8,
      writing: 2.5,
      coding: 1.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney é uma plataforma líder em geração de imagens, com o modelo V8.2 (lançado como padrão em 24 de julho de 2026) sendo o mais recente, focado em estética, qualidade de imagem e personalização, produzindo imagens mais criativas, ousadas, sofisticadas e nítidas. O V8.1 (padrão até 23 de julho de 2026) oferecia velocidade superior (4-5x mais rápido), melhor aderência a prompts, retenção de detalhes e saída em HD 2K. O modo HD agora é padrão e mais eficiente. A plataforma evoluiu para incluir o Midjourney Video V1 para animação de imagens a partir de imagens estáticas (com opção de prompts de texto), com a capacidade de estender os vídeos até 21 segundos, e o Niji 7 (lançado em 9 de janeiro de 2026) para estilos artísticos específicos, com melhorias notáveis na coerência e detalhes da arte de linha, além de melhorias para --sref. O Editor Web é totalmente maduro, permitindo inpainting, outpainting e uma experiência de usuário aprimorada. Recursos como Consistência de Personagem (--cref) e Style Reference (--sref) garantem coerência visual, embora o --cref não seja suportado no Niji 7, com --oref sendo recomendado para V7. O Draft Mode para V8.1 permite prototipagem rápida e econômica, mas não é suportado no V8.2. Embora não haja um plano gratuito ou API pública, os planos pagos oferecem uso comercial das imagens e diferentes níveis de horas de GPU e privacidade (Stealth Mode). A Midjourney continua a ser a referência para qualidade artística, mas a geração de vídeo ainda possui limitações e a empresa enfrenta desafios legais, além de apresentar renderização de texto fraca e menor precisão de prompt comparado a outros modelos.'
  },
  {
    id: 'stability-ai-sd-sa-models',
    name: 'Stable Diffusion 3, Stable Diffusion XL, Stable Audio 3.0',
    developer: 'Stability AI',
    category: 'Geração de Imagem & Áudio',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware); para empresas com mais de US$ 1M de receita anual, licença Enterprise é necessária para Stable Diffusion 3. API (sistema de créditos): 1 crédito = US$ 0.01. API para Stable Diffusion 3 Small: US$ 0.015/imagem. API para Stable Diffusion 3 Medium: US$ 0.030/imagem. API para Stable Diffusion 3 Large: US$ 0.050/imagem. API para Stable Diffusion 3 Turbo: US$ 0.025/imagem. API para Stable Image Ultra: US$ 0.080/imagem (até 4K). API para Stable Image Core: US$ 0.030/imagem. API para Stable Diffusion XL 1.0: US$ 0.002/imagem. 25 créditos grátis para começar na API. Planos de assinatura Stable Assistant (Web): Free (900 créditos/mês, 3 dias de trial); Pro (US$ 19/mês para 1900 créditos); Plus (US$ 49/mês para 5500 créditos); Premium (US$ 99/mês para 12000 créditos). Planos de assinatura Stable Audio (3.0): Free (10 faixas/mês, até 6 min, 6 min de upload de áudio - cortado em 30s); Pro (US$ 11.99/mês para 250 faixas, até 6 min, 30 min de upload); Studio (US$ 29.99/mês para 675 faixas, até 6 min, 60 min de upload); Max (US$ 89.99/mês para 2250 faixas, até 6 min, 90 min de upload). Licença Creator para planos pagos do Stable Audio; Licença Personal para o plano Free. ',
    pros: [
      'Stable Diffusion 3 (SD3, lançado em 2024) é a mais recente suíte de modelos de imagem da Stability AI, com variantes Small, Medium, Large e Turbo, oferecendo qualidade superior, aderência a prompts, anatomia e renderização de texto.',
      'SD3 Large (8 bilhões de parâmetros) oferece qualidade superior, aderência a prompts, anatomia e renderização de texto, ideal para uso profissional em 1 megapixel.',
      'SD3 Medium (2.5 bilhões de parâmetros) equilibra precisão de prompt e qualidade de imagem, sendo eficiente e capaz de rodar em GPUs de consumidor.',
      'Stable Audio 3.0 (lançado em 20 de maio de 2026) é o modelo de geração de áudio mais avançado da Stability AI, produzindo faixas musicais de até 6 minutos e 20 segundos em estéreo 44.1kHz, com capacidades de áudio-para-áudio.',
      'As variantes Small SFX, Small e Medium do Stable Audio 3.0 estão disponíveis como "open-weight" no Hugging Face, permitindo uso local e fine-tuning.',
      'Modelos "open-weight" (SD3, SDXL, Stable Audio) oferecem controle absoluto, privacidade e fine-tuning sem taxas por geração para uso próprio, com licenças para uso comercial até US$ 1M de receita anual.',
      'Stable Diffusion XL (SDXL) continua sendo um modelo de ponta, acessível e com ótima qualidade de imagem e um ecossistema robusto de modelos fine-tuned pela comunidade.',
      'Inpainting e Outpainting são suportados (SDXL e geralmente em Stable Diffusion).',
      'Integração ControlNet agora nativa na maioria dos pipelines.',
      'Geração em tempo real (LCM) para resultados quase instantâneos.',
      'Otimizações com TensorRT e FP8 com NVIDIA RTX GPUs resultam em 2x mais desempenho e 40% menos memória para os modelos SD3.',
      'Foco em soluções empresariais: obteve conformidade SOC 2 Tipo II e SOC 3, e lançou Brand Studio.',
      'Stable Audio 3.0 foi treinado exclusivamente em dados licenciados do AudioSparx, garantindo compensação justa para criadores.',
      'Stable Assistant oferece uma interface web para geração de imagens.'
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado e configuração técnica para uso local eficiente. ',
      'Apesar das melhorias, SD3 Medium ainda pode apresentar dificuldades na renderização perfeita de anatomia humana.',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente para as versões maiores.',
      'A licença comercial para Stable Diffusion 3 possui um limite de receita anual de US$ 1M para uso gratuito, exigindo licença Professional/Enterprise para empresas maiores.',
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
    description: 'A Stability AI oferece uma gama de modelos "open-weight" para IA visual e de áudio, destacando a família Stable Diffusion 3 (SD3, lançada em 2024) como seus modelos mais avançados para geração de imagens, com variantes Small, Medium, Large e Turbo. É importante notar que Stable Diffusion 4 não é um modelo oficialmente lançado pela Stability AI até julho de 2026. O SD3 Large e Medium apresentam fotorrealismo de ponta, renderização aprimorada de texto, anatomia mais precisa e a capacidade de rodar em GPUs de consumidor. O Stable Diffusion XL continua a ser uma opção robusta para geração de imagens de alta qualidade. Para áudio, o Stable Audio 3.0 (lançado em 20 de maio de 2026) oferece modelos "open-weight" para gerar música instrumental e efeitos sonoros de longa duração, com capacidades de áudio-para-áudio e treinado em dados licenciados. A natureza "open-weight" desses modelos proporciona controle, privacidade e capacidade de fine-tuning aos usuários, com licenças que permitem uso comercial sob certas condições. A plataforma também oferece serviços API baseados em créditos e planos de assinatura via Stable Assistant. No entanto, a utilização avançada requer conhecimento técnico, a licença comercial tem um limite de receita e alguns APIs de vídeo foram descontinuados.'
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
      'Integração nativa com os principais modelos de IA, incluindo OpenAI GPT-5.6, GPT-5.5, Anthropic Claude Opus 4.8, Claude Sonnet 5, Google Gemini 3.1 Pro e Gemini 3.5 Flash.',
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
    description: 'Make.com é uma plataforma de automação visual B2B que se destaca como uma poderosa orquestradora para sistemas e IAs. A nova aplicação "Make AI Agents" (lançada em fevereiro de 2026) permite a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos e um Reasoning Panel transparente para depuração. A plataforma se integra nativamente com os modelos de IA mais recentes da OpenAI (GPT-5.6, GPT-5.5), Anthropic (Claude Opus 4.8, Sonnet 5) e Google (Gemini 3.1 Pro, 3.5 Flash). Com uma interface intuitiva e recursos aprimorados de controle de fluxo, como If-else e Merge, a Make.com é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, baseados em créditos (com a transição em agosto de 2025), são competitivos, embora o consumo de créditos possa ser imprevisível para tarefas de IA mais intensivas, já que triggers, filtros e iteradores consomem créditos. A aquisição pela Celonis em outubro de 2020 reforça sua estabilidade e investimento contínuo. No entanto, a plataforma possui uma curva de aprendizado mais acentuada e o suporte pode ser considerado limitado.'
  }
];