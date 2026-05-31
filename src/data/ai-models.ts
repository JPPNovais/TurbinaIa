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
    name: 'ChatGPT Plus (GPT-5.5, GPT-5.5 Instant)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (acesso limitado a GPT-5.5 Instant, com limites de uso); ChatGPT Go: US$ 8/mês (acesso ilimitado a GPT-5.3 Instant, uploads de arquivos, criação de imagens, Custom GPTs, com anúncios nos EUA); ChatGPT Plus: US$ 20/mês (acesso total a GPT-5.5 e GPT-5.5 Instant, Deep Research, Sora, Codex, Agent Mode, Advanced Voice Mode, Custom GPTs); ChatGPT Pro $100: US$ 100/mês (5x o uso do Plus, acesso a GPT-5.5 Pro e o1 Pro mode); ChatGPT Pro $200: US$ 200/mês (20x o uso do Plus, 1M de contexto, Sora ilimitado, 250 Deep Research runs); ChatGPT Business: US$ 20/usuário/mês (cobrança anual, mínimo de 2 usuários) ou US$ 25-30/usuário/mês (cobrança mensal); ChatGPT Enterprise: Preço personalizado (contato com vendas, a partir de US$ 50-60/usuário/mês com mínimo de 150 usuários). API para GPT-5.5: US$ 5.00/milhão de tokens de entrada e US$ 30.00/milhão de tokens de saída. API para GPT-5.5 Pro: US$ 30.00/milhão de tokens de entrada e US$ 180.00/milhão de tokens de saída. API para GPT-4o mini: US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída.',
    pros: [
      'GPT-5.5 (lançado em abril de 2026) é o modelo mais inteligente e intuitivo da OpenAI, sendo o padrão para usuários Plus e superiores, destacando-se em raciocínio complexo, codificação, uso de computador, e pesquisa científica.',
      'GPT-5.5 Instant (lançado em maio de 2026) é o modelo padrão do ChatGPT, oferecendo respostas mais rápidas, precisas e com menos alucinações em domínios críticos.',
      'Acesso a recursos avançados como Deep Research, Sora (geração de vídeo), Codex (agente de codificação com Computer Use no Windows), Agent Mode, Advanced Voice Mode e Custom GPTs.',
      'Planos Pro $200 oferecem janela de contexto de 1 milhão de tokens.',
      'ChatGPT Images 2.0 (lançado em abril de 2026) oferece geração de imagens com renderização de texto aprimorada, suporte multilíngue e raciocínio visual avançado.',
      'Modelos como GPT-4o mini ainda estão disponíveis via API a preços competitivos para casos de uso específicos.'
    ],
    cons: [
      'Modelos mais antigos como GPT-4o, GPT-4.1, GPT-4.1 mini e o4-mini foram retirados do ChatGPT (embora ainda disponíveis via API para alguns).',
      'Usuários dos planos Free e Go não têm acesso a GPT-5.5.',
      'O plano Go (US$ 8/mês) exibe anúncios nos EUA.',
      'O recurso Canvas foi removido do GPT-5.5 Instant e GPT-5.5 Thinking.',
      'A funcionalidade "Computer Use" do Codex para Windows não está disponível na Área Econômica Europeia, Reino Unido e Suíça no lançamento.',
      'O custo da API para modelos GPT-5.5 e GPT-5.5 Pro é significativamente mais alto do que modelos anteriores.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelos modelos GPT-5.5 e GPT-5.5 Instant (lançados em abril e maio de 2026, respectivamente), representa o ápice da inteligência artificial generativa da OpenAI. O GPT-5.5 é o modelo mais capaz da empresa, otimizado para tarefas complexas de codificação, pesquisa e análise de dados, e com fortes capacidades agenticas. O GPT-5.5 Instant é o modelo padrão do ChatGPT, focado em velocidade e precisão. A plataforma oferece acesso a recursos como Deep Research, Sora (geração de vídeo), Codex (com Computer Use), Advanced Voice Mode e Custom GPTs. Com novos planos como ChatGPT Go e os tiers Pro ($100 e $200), a OpenAI busca atender a uma gama mais ampla de usuários, desde casuais até grandes empresas, apesar da aposentadoria de modelos mais antigos no ChatGPT.'
  },
  {
    id: 'claude-sonnet-4-6',
    name: 'Claude Opus 4.7 (e Claude Opus 4.6, Claude 3.5 Sonnet)',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso a Claude Opus 4.6 e Claude 3.5 Sonnet, com limites de uso diários). Plano Pro: US$ 20/mês (ou US$ 17/mês anual) com acesso a todos os modelos (incluindo Claude Opus 4.7), e limites de taxa significativamente mais altos. Plano Team: A partir de US$ 25/usuário/mês (cobrança anual, mínimo de 5 usuários para algumas funcionalidades). API para Claude 3.5 Sonnet: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 200K tokens. API para Claude Opus 4.6: US$ 5.00/milhão de tokens de entrada e US$ 25.00/milhão de tokens de saída. API para Claude Opus 4.7: US$ 10.00/milhão de tokens de entrada e US$ 50.00/milhão de tokens de saída, com janela de contexto de 1 milhão de tokens.',
    pros: [
      'Claude Opus 4.7 (lançado em abril de 2026) é o modelo mais avançado da Anthropic, superando GPT-5.5 em codificação e raciocínio agentico, e oferecendo uma janela de contexto de 1 milhão de tokens.',
      'Claude 3.5 Sonnet (lançado em junho de 2024) ainda é um modelo robusto, otimizado para velocidade e custo, com fortes capacidades de visão e função de chamada.',
      'Demonstra melhorias significativas em engenharia de software e tarefas complexas de codificação, resolvendo 69.4% dos problemas em Terminal-Bench 2.0 (Opus 4.7).',
      'Excelente em visão, interpretando gráficos, tabelas e transcrevendo texto de imagens imperfeitas.',
      'Apresenta o recurso "Artifacts" no Claude.ai para expandir a interação do usuário.',
      'Novos recursos em beta público, como "computer use", permitindo ao Claude interagir com computadores de forma mais autônoma.'
    ],
    cons: [
      'A janela de contexto de Claude Opus 4.7 (1 milhão de tokens) é menor que algumas ofertas concorrentes (ex: Gemini 3.1 Pro com 2 milhões).',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança.',
      'O plano gratuito não inclui acesso a funcionalidades avançadas específicas como "computer use".',
      'A Anthropic baniu agentes de terceiros do Claude Pro e Max em abril de 2026.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude Opus 4.7 (lançado em abril de 2026) é o modelo mais avançado da Anthropic, oferecendo desempenho robusto em raciocínio, codificação e compreensão multimodal, incluindo capacidades de visão e função de chamada. Ele supera o GPT-5.5 em diversas avaliações de codificação e raciocínio agentico, com uma janela de contexto de 1 milhão de tokens. Para tarefas de alto volume e baixo custo, o Claude 3.5 Sonnet continua sendo uma opção eficiente. A Anthropic continua a focar em segurança e alinhamento em seus modelos e introduziu recursos como "computer use" em beta público para automação complexa. Ambos os modelos estão disponíveis via planos gratuitos, Pro e Team, e API.'
  },
  {
    id: 'gemini-models',
    name: 'Gemini 3.1 Ultra, Gemini 3.1 Pro, Gemini 3.1 Flash',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com acesso ao aplicativo Gemini, Gemini 3.1 Flash e recursos básicos); Google AI Premium (anteriormente Google One AI Premium/Gemini Advanced): US$ 19.99/mês (acesso a Gemini 3.1 Pro, Gemini 3.1 Flash, 2 TB de armazenamento, integração com Workspace). API para Gemini 3.1 Flash: US$ 0.075/milhão de tokens de entrada e US$ 0.30/milhão de tokens de saída para prompts com menos de 128K tokens, com janela de contexto de 1 milhão de tokens. API para Gemini 3.1 Pro: US$ 7.00/milhão de tokens de entrada e US$ 21.00/milhão de tokens de saída para prompts com menos de 128K tokens, com janela de contexto de 2 milhões de tokens. API para Gemini 3.1 Ultra: US$ 15.00/milhão de tokens de entrada e US$ 45.00/milhão de tokens de saída para prompts com menos de 128K tokens, com janela de contexto de 2 milhões de tokens.',
    pros: [
      'Gemini 3.1 Ultra (lançado em abril de 2026) é o modelo mais poderoso e versátil do Google, com uma janela de contexto de 2 milhões de tokens e capacidades nativamente multimodais para vídeo, áudio, imagem e texto.',
      'Gemini 3.1 Pro (lançado em fevereiro de 2026, com atualizações em abril de 2026) é um modelo robusto para raciocínio complexo e multimodalidade, com janela de contexto de 2 milhões de tokens.',
      'Gemini 3.1 Flash (lançado em maio de 2026, com Gemini 3.1 Flash Lite em maio de 2026) é o modelo mais rápido e eficiente do Gemini, otimizado para tarefas de alto volume e frequência, com janela de contexto de 1 milhão de tokens.',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição.',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome).',
      'Recursos do Gemini Advanced como "Deep Research" para analisar centenas de fontes e "Reference past chats" para contextualização.'
    ],
    cons: [
      'A API para Gemini 3.1 Ultra e 3.1 Pro é mais cara que a 3.1 Flash, especialmente para prompts mais longos.',
      'A segmentação de imagem não é explicitamente suportada nos modelos Gemini 3.1.',
      'Modelos mais recentes como Gemini 3.1 Ultra e Flash Lite são lançamentos mais recentes, e o ecossistema pode estar se adaptando.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 5.0
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 3.1 Ultra (lançado em abril de 2026), Gemini 3.1 Pro (atualizado em abril de 2026) e Gemini 3.1 Flash (lançado em maio de 2026) são os modelos de linguagem multimodal mais avançados do Google. Eles oferecem vasta janela de contexto de até 2 milhões de tokens para análise de grandes volumes de informações em texto, imagem, áudio e vídeo. O Gemini 3.1 Ultra e Pro são projetados para raciocínio complexo e desempenho superior, enquanto o Gemini 3.1 Flash é otimizado para velocidade e custo-benefício em tarefas de alto volume. Ambos se destacam na análise multimodal e estão profundamente integrados ao ecossistema Google, disponíveis via assinatura Google AI Premium e API.'
  },
  {
    id: 'llama-models',
    name: 'Llama 4 (Scout, Pro), Llama 3 (8B, 70B, 400B)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware, licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual). API para Llama 3 8B: A partir de US$ 0.05/milhão de tokens de entrada e US$ 0.08/milhão de tokens de saída (via provedores como Deepinfra/Groq). API para Llama 3 70B: Varia por provedor; por exemplo, US$ 0.59/milhão de tokens de entrada e US$ 0.79/milhão de tokens de saída (via Groq/Inworld AI) ou US$ 2.68/milhão de tokens de entrada e US$ 3.54/milhão de tokens de saída (via Azure para Llama 3.1 70B). API para Llama 4 Scout (10M contexto): US$ 0.90/milhão de tokens de entrada e US$ 1.20/milhão de tokens de saída. API para Llama 4 Pro: US$ 2.50/milhão de tokens de entrada e US$ 3.50/milhão de tokens de saída.',
    pros: [
      'Llama 4 (lançado em abril de 2026, com versões Scout e Pro) oferece modelos open-weight com desempenho de ponta e capacidades multimodais avançadas, incluindo um contexto de 10 milhões de tokens para Llama 4 Scout.',
      'Llama 3 (lançado em abril de 2024, com 8B, 70B e 400B em treinamento) continua a oferecer modelos open-weight que permitem uso local gratuito e fine-tuning com total controle.',
      'Llama 4 Pro supera Llama 3 400B em benchmarks de raciocínio e codificação.',
      'Ecossistema robusto de provedores de API terceirizados que oferecem custos competitivos e velocidade (Groq é conhecido pela inferência rápida).',
      'Suporte a múltiplos idiomas e capacidades multimodais estão sendo desenvolvidas para versões futuras e já presentes em Llama 4.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade e para modelos maiores.',
      'A qualidade e o custo da API podem variar significativamente dependendo do provedor terceirizado.',
      'A licença de uso comercial gratuita é limitada a empresas com receita anual inferior a US$ 1 milhão.',
      'Modelos maiores como Llama 3 400B/405B podem ainda estar em treinamento ou com acesso limitado para API pública.'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.9,
      coding: 4.9,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'A família Llama da Meta, agora com Llama 4 (Scout, Pro, lançados em abril de 2026) e Llama 3 (8B, 70B e 400B em treinamento), oferece modelos "open-weight" que permitem uso local gratuito e personalização profunda via fine-tuning. O Llama 4 se destaca pelo desempenho de ponta, capacidades multimodais e uma vasta janela de contexto de 10 milhões de tokens para a versão Scout. Com uma comunidade ativa e um ecossistema de provedores de API que oferecem custos competitivos e alta velocidade de inferência (como Groq), os modelos Llama são uma opção poderosa e flexível para desenvolvedores e empresas. Embora exija hardware robusto para execução local, sua natureza open-weight o torna ideal para quem busca personalização e controle.'
  },
  {
    id: 'dall-e-3',
    name: 'ChatGPT Images 2.0 (DALL-E 4)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com acesso a GPT-5.5 e limites de uso). API para ChatGPT Images 2.0 (modelo gpt-image-2-2026-04-21): Preços por imagem variam, por exemplo, US$ 0.053 (1024x1024, medium quality). Edições e variações podem ter custos adicionais.',
    pros: [
      'ChatGPT Images 2.0 (lançado em abril de 2026, substituindo GPT Image 1.5) é o modelo de geração de imagens de última geração da OpenAI, totalmente integrado ao ChatGPT Plus.',
      'Capacidade de interpretar prompts complexos e conversacionais de forma mais eficaz do que muitos concorrentes, resultando em imagens que correspondem melhor à descrição.',
      'Melhora significativa na renderização de texto dentro das imagens, com suporte multilíngue.',
      'Gera imagens de alta qualidade com diversos estilos e raciocínio visual avançado.',
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
    description: 'ChatGPT Images 2.0, da OpenAI (lançado em abril de 2026), é a mais recente geração de modelos de geração de imagens da empresa, totalmente integrado ao ChatGPT Plus. Ele se destaca pela sua capacidade de interpretar prompts complexos e conversacionais para criar imagens de alta qualidade com renderização aprimorada de texto, suporte multilíngue e uma forte correspondência com a descrição. Disponível via assinatura ChatGPT Plus, a geração de imagens da OpenAI oferece uma experiência intuitiva e poderosa para designers, criadores de conteúdo e qualquer pessoa que busque gerar visuais criativos de alto nível, apesar do custo da API para uso em larga escala.'
  },
  {
    id: 'midjourney-v8-1',
    name: 'Midjourney V8 (e V7)',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial. Planos pagos (com 20% de desconto na cobrança anual): Basic US$ 10/mês (US$ 96/ano) com ~3.3 horas de GPU rápida; Standard US$ 30/mês (US$ 288/ano) com ~15 horas de GPU rápida e gerações ilimitadas no modo Relax; Pro US$ 60/mês (US$ 576/ano) com ~30 horas de GPU rápida, modo Relax ilimitado, modo Stealth (privacidade) e gerações ilimitadas de vídeo SD no modo Relax; Mega US$ 120/mês (US$ 1152/ano) com ~60 horas de GPU rápida, modo Relax ilimitado e modo Stealth.',
    pros: [
      'Midjourney V8 (lançado em fevereiro de 2026, V7 em novembro de 2025) continua a aprimorar a qualidade de imagem excepcional, alta resolução, estética marcante e maior precisão na compreensão de prompts.',
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
      reasoning: 4.7,
      writing: 2.5,
      coding: 1.0,
      speed: 4.9,
      value: 4.6
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney V8 (lançado em fevereiro de 2026), e a versão V7 (lançada em novembro de 2025), representam um salto significativo em qualidade visual, alta resolução e coerência, sendo amplamente reconhecido por seu fotorrealismo e habilidades artísticas. Com a introdução do "Draft Mode" para iteração rápida e o novo Editor Web que elimina a dependência do Discord (incluindo Inpaint, Outpaint e Consistência de Personagem), o Midjourney continua a liderar a geração de imagens. Apesar de não ter plano gratuito oficial ou uma API pública, o Midjourney continua a ser uma ferramenta líder para designers e criadores que buscam resultados visuais de altíssimo nível.'
  },
  {
    id: 'stable-diffusion-3-medium',
    name: 'Stable Diffusion XL 1.5, Stable Diffusion 4.0, Stable Audio 3.0',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware); para empresas com mais de US$ 1M de receita anual, licença Enterprise é necessária. API (sistema de créditos): Stable Diffusion XL 1.5: US$ 0.035/imagem (1024x1024) via Replicate. Stable Diffusion 4.0: US$ 0.05/imagem. Stable Audio 3.0: 2 créditos por geração, com 20 créditos gratuitos por mês.',
    pros: [
      'Stable Diffusion 4.0 (lançado em março de 2026) é a mais recente geração de modelos de difusão da Stability AI, oferecendo controle aprimorado, qualidade fotorrealista superior e melhor compreensão de prompts complexos.',
      'Stable Diffusion XL 1.5 (lançado em novembro de 2025) continua sendo um modelo de ponta, acessível e com ótima qualidade de imagem, além de ser open-weight.',
      'Modelos "open-weight" que podem rodar localmente (com hardware adequado), permitindo controle absoluto, privacidade e fine-tuning (LoRAs, ControlNet).',
      'Stable Audio 3.0 (lançado em abril de 2026) para geração de música e efeitos sonoros, capaz de criar peças de até 3 minutos, com funcionalidades de texto-para-áudio e áudio-para-áudio.',
      'Gera outputs diversos e representativos de diferentes tons de pele e características.'
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado e configuração técnica para uso local eficiente.',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente para as versões maiores.',
      'Ainda pode apresentar dificuldades em renderizar anatomia humana de forma perfeita em alguns casos.',
      'A qualidade da saída pode variar mais sem fine-tuning em comparação com soluções gerenciadas.'
    ],
    score: {
      reasoning: 4.1,
      writing: 1.8,
      coding: 4.8,
      speed: 4.7,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'Stable Diffusion 4.0 (lançado em março de 2026) é a mais recente geração de modelos "open-weight" da Stability AI para IA visual, destacando-se pela qualidade da imagem, renderização de texto e compreensão de prompts complexos, construído sobre a arquitetura Multimodal Diffusion Transformer (MMDiT) introduzida no SD3. O Stable Diffusion XL 1.5 (lançado em novembro de 2025) continua sendo uma alternativa robusta e acessível. Os modelos são "open-weight", permitindo uso local gratuito (com limites de receita para uso comercial) e personalização profunda via fine-tuning. A API da Stability AI oferece um custo acessível por imagem gerada. Além disso, a Stability AI oferece Stable Audio 3.0 (lançado em abril de 2026) para geração de música e efeitos sonoros, com recursos de texto-para-áudio e áudio-para-áudio. Embora exija investimento em aprendizado e hardware potente para as versões maiores, sua flexibilidade e o custo-benefício o tornam ideal para profissionais que buscam personalização, eficiência e controle.'
  },
  {
    id: 'make-com-ai-agents',
    name: 'Make.com (Agentes de IA)',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis: 1.000 operações/mês, 2 cenários ativos, inclui Make AI Agents (beta), intervalo de 15 minutos. Plano Core: US$ 10.59/mês (ou US$ 9/mês anual) para 10.000 operações (cenários ilimitados, intervalo de 1 minuto, inclui Make AI Agents). Plano Pro: US$ 18.82/mês (ou US$ 16/mês anual) para 10.000+ operações (prioridade de execução, variáveis personalizadas, logs completos). Plano Teams: US$ 34.12/mês por usuário (ou US$ 29/mês por usuário anual) para 10.000+ operações (colaboração, gestão de equipes, prioridade de execução). Plano Enterprise: precificação personalizada. Operações adicionais podem ser compradas (10.000 operações por US$ 9).',
    pros: [
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos.',
      'Os "Make AI Agents" (recurso disponível em todos os planos, com atualizações contínuas) permitem automação inteligente e adaptativa com tomada de decisões em tempo real dentro do canvas, com visibilidade total do processo.',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-5.5, Anthropic Claude Opus 4.7, Google Gemini 3.1 Pro/Flash) e milhares de APIs (4.000+ apps, mais integração via módulo HTTP).',
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
    description: 'Make.com é uma plataforma de automação visual B2B que se consolidou como uma orquestradora poderosa para sistemas e IAs. Os "Make AI Agents" (recurso da plataforma) permitem a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos como PDFs e imagens. A plataforma se integra nativamente com os modelos de IA mais recentes, como OpenAI GPT-5.5, Anthropic Claude Opus 4.7 e Google Gemini 3.1 Pro/Flash. Com uma interface altamente intuitiva, o "Make Grid" para visualização em tempo real das automações, e módulos aprimorados de controle de fluxo e funções, é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, baseados em operações, oferecem flexibilidade, tornando-o uma alternativa custo-efetiva para automações complexas, apesar do consumo de operações poder ser imprevisível para tarefas de IA.'
  }
];