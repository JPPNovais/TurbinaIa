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
    name: 'ChatGPT Plus (GPT-5.5, GPT-5.4, GPT-4o)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (acesso a GPT-3.5 e GPT-4o mini limitado, com anúncios nos EUA); ChatGPT Plus: US$ 20/mês (acesso prioritário e ilimitado a GPT-5.5, GPT-5.4, GPT-4o e GPT Image 2.0; inclui Deep Research, Sora, Codex, Agent Mode, Custom GPTs, navegação web, Advanced Data Analysis, e voz real-time ChatGPT Voice). ChatGPT Team: US$ 25/mês por usuário (anual) ou US$ 30/mês por usuário (mensal) (acesso ilimitado a GPT-4o e 4.1-mini, limites de uso generosos). ChatGPT Pro US$ 100/mês e US$ 200/mês (lançados em abril de 2026, para usuários intensivos com limites e capacidades superiores). API para GPT-5.5: US$ 5.00/milhão de tokens de entrada e US$ 30.00/milhão de tokens de saída. API para GPT-5.4: US$ 2.50/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída. API para GPT-4o: US$ 2.50/milhão de tokens de entrada e US$ 10.00/milhão de tokens de saída (entrada em cache US$ 1.25/milhão). API para GPT-4o Mini: US$ 0.60/milhão de tokens de entrada e US$ 2.40/milhão de tokens de saída.',
    pros: [
      'GPT-5.5 (lançado em abril de 2026) é o modelo mais inteligente e intuitivo da OpenAI, destacando-se em codificação agentica, uso de computador, trabalho de conhecimento e pesquisa científica.',
      'GPT-5.5 Instant (lançado em maio de 2026) é o novo padrão do ChatGPT, oferecendo respostas mais rápidas, inteligentes, precisas (52.5% menos alucinações em prompts de alto risco) e personalizadas.',
      'Melhorias na análise de fotos e imagens, respostas a questões STEM, e uso mais eficiente da busca na web.',
      'GPT-4o (lançado em maio de 2024) oferece processamento multimodal unificado (texto, áudio, imagem) com voz em tempo real e visão avançada.',
      'Acesso a recursos como Advanced Data Analysis (anteriormente Code Interpreter), navegação web, Custom GPTs, Deep Research, Sora (geração de vídeo) e Agent Mode (automação multi-passo).',
      'Planos pagos oferecem acesso prioritário, limites de uso mais altos e desempenho mais consistente.'
    ],
    cons: [
      'Usuários gratuitos e do plano Go podem ver anúncios nos EUA.',
      'O custo da API para GPT-5.5 é aproximadamente o dobro do GPT-5.4 por token, embora seja argumentado que o modelo é mais eficiente em tokens.',
      'Os custos operacionais podem ser elevados para uso em larga escala da API e recursos avançados.',
      'O ChatGPT Plus não oferece ferramentas administrativas para equipes.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelos modelos GPT-5.5 (lançado em abril de 2026) e GPT-5.5 Instant (lançado em maio de 2026), representa o auge da inteligência artificial generativa da OpenAI. O GPT-5.5 é o modelo mais inteligente da empresa, otimizado para tarefas complexas de codificação, pesquisa e análise de dados. O GPT-5.5 Instant, o novo padrão do ChatGPT, oferece respostas mais rápidas, precisas e personalizadas, com alucinações reduzidas. A plataforma também oferece acesso ao GPT-4o, que integra perfeitamente entradas de texto, áudio e imagem. Assinantes do ChatGPT Plus (US$ 20/mês) recebem acesso prioritário e ilimitado aos modelos mais recentes, juntamente com recursos como Advanced Data Analysis, navegação web, Custom GPTs e geração de imagens através do GPT Image 2.0 (lançado em abril de 2026). Novos planos como Pro US$ 100/mês e Pro US$ 200/mês oferecem opções com limites e capacidades superiores para usuários intensivos e corporativos, com custos de API variáveis por modelo.'
  },
  {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet (e Claude 3 Opus, Haiku)',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso a Claude 3.5 Sonnet e Claude 3 Haiku e limites de uso diários). Plano Pro: US$ 20/mês (ou US$ 17/mês anual) com acesso a Claude 3.5 Sonnet, Claude 3 Opus e Claude 3 Haiku, e limites de taxa significativamente mais altos. API para Claude 3.5 Sonnet: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 200K tokens. API para Claude Opus 4.7: US$ 5.00/milhão de tokens de entrada e US$ 25.00/milhão de tokens de saída. API para Claude 3 Haiku: US$ 0.25/milhão de tokens de entrada e US$ 1.25/milhão de tokens de saída.',
    pros: [
      'Claude 3.5 Sonnet (lançado em junho de 2024) define novos benchmarks de inteligência, superando modelos concorrentes e Claude 3 Opus em diversas avaliações, com a velocidade e custo de um modelo mid-tier.',
      'Oferece capacidades de visão para processamento e análise de imagens, e suporta função de chamada para execução de ferramentas e funções personalizadas.',
      'Janela de contexto de 200K tokens para Claude 3.5 Sonnet, ideal para processar grandes volumes de dados.',
      'Claude Opus 4.7 (mencionado como lançado em abril de 2026) é o modelo mais avançado da Anthropic, alcançando alta pontuação em raciocínio adaptativo e codificação.',
      'Disponível gratuitamente no Claude.ai e no aplicativo iOS.'
    ],
    cons: [
      'O conhecimento do Claude 3.5 Sonnet é limitado até 1 de abril de 2024.',
      'Não possui geração de imagem nativa (foco em compreensão visual e texto/código).',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude 3.5 Sonnet (lançado em junho de 2024) é o modelo mid-tier mais avançado da Anthropic, superando o Claude 3 Opus em inteligência e eficiência, mantendo um custo acessível. Ele oferece um desempenho robusto em raciocínio, codificação e compreensão multimodal, incluindo capacidades de visão e função de chamada. Para tarefas mais complexas e fluxos de trabalho agenticos, o Claude Opus 4.7 (mencionado como lançado em abril de 2026) é o modelo carro-chefe da Anthropic, alcançando alta pontuação em benchmarks de inteligência e codificação. Ambos os modelos, juntamente com o Claude 3 Haiku (modelo mais rápido e custo-efetivo), estão disponíveis via planos gratuitos, Pro e API, com o Claude 3.5 Sonnet oferecendo uma janela de contexto de 200K tokens para processamento de grandes volumes de dados. A Anthropic continua a focar em segurança e alinhamento em seus modelos.'
  },
  {
    id: 'gemini-1-5-pro-flash',
    name: 'Gemini 1.5 Pro e Gemini 1.5 Flash (via Google AI Premium)',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com acesso ao Gemini app, Gemini 1.5 Flash e recursos básicos). Google AI Premium (anteriormente Google One AI Premium/Gemini Advanced): US$ 19.99/mês (acesso a Gemini 1.5 Pro, Gemini 1.5 Flash, 5 TB de armazenamento, integração com Workspace). API para Gemini 1.5 Pro: US$ 7.00/milhão de tokens de entrada e US$ 21.00/milhão de tokens de saída para prompts com menos de 128K tokens, com janela de contexto de 2 milhões de tokens. API para Gemini 1.5 Flash: US$ 3.75/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída para prompts com menos de 128K tokens, com janela de contexto de 1 milhão de tokens. Tokens de entrada em cache para Gemini 1.5 Flash: US$ 0.01/milhão de tokens (<128K prompts).',
    pros: [
      'Gemini 1.5 Pro (lançado em fevereiro de 2024) é o modelo mais poderoso e versátil do Google para raciocínio complexo, multimodalidade e capacidades agenticas, com janela de contexto de 2 milhões de tokens.',
      'Gemini 1.5 Flash (lançado em maio de 2024) é o modelo mais rápido e eficiente do Gemini, otimizado para tarefas de alto volume e frequência, com janela de contexto de 1 milhão de tokens.',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição.',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome).',
      'Preços de API de Gemini 1.5 Flash são competitivos, sendo mais econômicos que 1.5 Pro para tarefas de codificação e agentes.'
    ],
    cons: [
      'A API para Gemini 1.5 Pro é mais cara que 1.5 Flash, especialmente para prompts mais longos.',
      'Modelos da série Gemini 3.x (Flash-Lite, Ultra), embora mencionados em artigos de maio de 2026, têm especificações detalhadas limitadas publicamente para usuários comuns/API.',
      'A segmentação de imagem não é suportada nos modelos Gemini 1.5.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.9
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 1.5 Pro (lançado em fevereiro de 2024) e Gemini 1.5 Flash (lançado em maio de 2024) são os modelos de linguagem multimodal mais avançados do Google, oferecendo uma vasta janela de contexto de até 2 milhões de tokens para análise de grandes volumes de informações em texto, imagem, áudio e vídeo. O Gemini 1.5 Pro é projetado para raciocínio complexo e desempenho superior, enquanto o Gemini 1.5 Flash é otimizado para velocidade e custo-benefício em tarefas de alto volume. Ambos se destacam na análise multimodal e estão profundamente integrados ao ecossistema Google. Os preços da API foram significativamente reduzidos para ambos os modelos a partir de outubro de 2024, tornando-os mais acessíveis para desenvolvedores. Disponível via assinatura Google AI Premium e API, a família Gemini é uma ferramenta versátil para diversas aplicações.'
  },
  {
    id: 'llama-3-4',
    name: 'Llama 3 (8B, 70B, 400B) e Llama 4 (Scout, Maverick)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware, licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual); uso comercial livre até 700 milhões de usuários por mês (a partir de abril de 2025 para Llama 4). API para Llama 3 8B: US$ 0.050/milhão de tokens de entrada e US$ 0.080/milhão de tokens de saída. API para Llama 4 Maverick (MoE): US$ 0.50/milhão de tokens de entrada (via AWS Bedrock). API para Llama 3.1 405B: US$ 5.32/milhão de tokens de entrada (via AWS Bedrock).',
    pros: [
      'Llama 3 (lançado em abril de 2024) é a nova geração de modelos "open-weight" da Meta, permitindo uso local gratuito e fine-tuning.',
      'Llama 3 8B Instruct é otimizado para diálogo de alta qualidade, demonstrando forte desempenho comparado a modelos closed-source.',
      'Llama 4 (mencionado em maio de 2026) utiliza arquitetura Mixture-of-Experts (MoE), otimizando desempenho e eficiência.',
      'O modelo Llama 4 Maverick apresenta uma redução de custo significativa em comparação com modelos densos anteriores (82-93% de redução em custo de entrada comparado ao Llama 3.1 405B em AWS Bedrock).',
      'Llama 4 Scout (10 milhões de tokens de contexto) é mencionado como capaz de rodar em uma única GPU H100.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade e para modelos maiores.',
      'Llama 3 8B possui uma janela de contexto de 8K tokens, relativamente pequena.',
      'O conhecimento do Llama 3 8B é limitado até dezembro de 2023.',
      'O modelo Llama 4 Behemoth ainda está em treinamento e não foi lançado publicamente.'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.8,
      coding: 4.8,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'A família Llama 3 da Meta (lançada em abril de 2024) oferece modelos de linguagem "open-weight" (8B, 70B, 400B), permitindo uso local e fine-tuning. O Llama 3 8B Instruct é otimizado para diálogos de alta qualidade, apresentando forte desempenho. Complementando esta linha, o Llama 4 (Scout, Maverick), embora mais recente, é notado por sua arquitetura Mixture-of-Experts (MoE), oferecendo vantagens significativas em desempenho e custo-benefício, com o Llama 4 Maverick custando US$ 0.50/milhão de tokens de entrada em plataformas como AWS Bedrock, uma grande redução de custo em comparação com modelos densos anteriores. Embora exija hardware robusto para execução local, a natureza open-weight do Llama e as melhorias arquitetônicas do Llama 4 o tornam uma opção poderosa e flexível para desenvolvedores e empresas que buscam personalização e controle.'
  },
  {
    id: 'gpt-image-2',
    name: 'GPT Image 2.0 (via ChatGPT Plus)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com acesso a GPT-5.5, GPT-5.4 e limites de uso). API para GPT Image 2.0: US$ 8.00/milhão de tokens de entrada e US$ 30.00/milhão de tokens de saída para imagem (preços por token podem variar dependendo da complexidade do prompt e qualidade da saída). A geração de imagem com DALL-E 3, um modelo relacionado, pode custar a partir de US$ 0.04 por imagem.',
    pros: [
      'GPT Image 2.0 (lançado em abril de 2026) é o modelo de geração de imagens mais avançado da OpenAI.',
      'Excelente compreensão de prompts complexos e narrativos, gerando resultados criativos e detalhados.',
      'Integração perfeita com ChatGPT, permitindo criação e modificação de imagens via conversação.',
      'Qualidade de imagem superior e renderização aprimorada de texto multilíngue dentro das imagens.'
    ],
    cons: [
      'Ainda pode apresentar resultados que parecem "falsos" ou não atingir o fotorrealismo de alguns concorrentes em certos casos.',
      'O acesso completo e ilimitado requer assinatura do ChatGPT Plus ou planos superiores.',
      'Preços da API podem ser elevados, especialmente para alta qualidade e resoluções maiores.'
    ],
    score: {
      reasoning: 4.8,
      writing: 3.5,
      coding: 1.0,
      speed: 4.5,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'GPT Image 2.0, lançado pela OpenAI em abril de 2026, é a mais recente geração de modelos de geração de imagens da empresa. Totalmente integrado ao ChatGPT, ele se destaca pela sua capacidade de interpretar prompts complexos e conversacionais para criar imagens de alta qualidade com renderização aprimorada de texto multilíngue e raciocínio visual avançado. Disponível via assinatura ChatGPT Plus, a geração de imagens da OpenAI oferece uma experiência intuitiva e poderosa para designers, criadores de conteúdo e qualquer pessoa que busque gerar visuais criativos de alto nível, apesar do custo da API para uso em larga escala.'
  },
  {
    id: 'midjourney-v6-1',
    name: 'Midjourney V6.1 (e V6)',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial. Planos pagos: Basic US$ 10/mês (US$ 96/ano) com ~200 gerações rápidas. Standard US$ 30/mês (US$ 288/ano) com ~15 horas de GPU rápida (equivalente a ~900 imagens) e gerações ilimitadas no modo Relax. Pro US$ 60/mês (US$ 576/ano) com ~30 horas de GPU rápida, modo Relax ilimitado e modo Stealth (privacidade). Mega US$ 120/mês (US$ 1152/ano) com ~60 horas de GPU rápida, modo Relax ilimitado e modo Stealth.',
    pros: [
      'Midjourney V6.1 (lançado em maio de 2024) é a versão mais recente e avançada, oferecendo qualidade de imagem excepcional, alta resolução e estética marcante.',
      'Apresenta geração de imagens fotorrealistas e artísticas de altíssima qualidade.',
      'Melhor precisão na compreensão de prompts e detalhes mais coerentes (especialmente em corpos e mãos) em comparação com versões anteriores.',
      'Ferramentas como "Upscaling" e "Zoom Out" para expandir e detalhar imagens.',
      'A versão Niji, focada em estética oriental e anime, é atualizada junto com as versões principais.'
    ],
    cons: [
      'Não possui plano de testes gratuito no site oficial.',
      'Não possui API pública oficial, limitando a integração programática.',
      'O modo Relax, que oferece gerações ilimitadas mais lentas, não está disponível para jobs rápidos.',
      'O modo Stealth (privacidade) está disponível apenas nos planos Pro e Mega.',
      'Curva de aprendizado para prompt engineering avançado.'
    ],
    score: {
      reasoning: 4.5,
      writing: 2.5,
      coding: 1.0,
      speed: 4.8,
      value: 4.5
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney V6.1, lançado em maio de 2024, é a versão mais recente e aprimorada do popular gerador de imagens. Ele oferece um salto significativo em qualidade visual, alta resolução e coerência, sendo amplamente reconhecido por seu fotorrealismo e habilidades artísticas. Com um foco contínuo na interpretação precisa de prompts de texto e na criação de composições esteticamente ricas, o Midjourney se destaca na criação de imagens. Apesar de não ter plano gratuito oficial ou uma API pública, o Midjourney continua a ser uma ferramenta líder para designers e criadores que buscam resultados visuais de altíssimo nível.'
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
      'Exige uma placa de vídeo dedicada potente para uso local eficiente.',
      'Ainda pode apresentar dificuldades em renderizar anatomia humana de forma perfeita.',
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
    pricing: 'Plano grátis: 1.000 créditos/mês, 2 cenários ativos, inclui Make AI Agents (beta), intervalo de 15 minutos. Plano Core: US$ 10.59/mês (ou US$ 9/mês anual) para 10.000 créditos (cenários ilimitados, intervalo de 1 minuto, inclui Make AI Agents). Plano Pro: US$ 18.82/mês (ou US$ 16/mês anual) para 10.000+ créditos (prioridade de execução, variáveis personalizadas, logs completos). Plano Teams: US$ 34.12/mês por usuário (ou US$ 29/mês por usuário anual) para 10.000+ créditos (colaboração, gestão de equipes, prioridade de execução). Plano Enterprise: precificação personalizada. Créditos adicionais podem ser comprados (10.000 créditos por US$ 9). Créditos não utilizados são transferidos por um mês em planos pagos.',
    pros: [
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos.',
      'Os "Make AI Agents" (nova app lançada em fevereiro de 2026, disponível em todos os planos) permitem automação inteligente e adaptativa com tomada de decisões em tempo real dentro do canvas, com visibilidade total do processo.',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-5.5, Claude 3.5 Sonnet, Google Gemini 1.5 Pro) e milhares de APIs (3.000+ apps, mais integração via módulo HTTP).',
      'Suporte multimodal para AI Agents, permitindo entrada e saída de arquivos como PDFs, imagens e CSVs diretamente no fluxo de trabalho.',
      'Registros detalhados de execução (Make Grid) e busca de texto completo em logs (planos Pro e Teams) para depuração e visibilidade aprimoradas.',
      'Altamente competitivo em termos de custo-benefício para automações complexas em comparação com alternativas como Zapier (3-5x mais barato por operação).',
      'Funcional plano gratuito para prototipar automações.'
    ],
    cons: [
      'O consumo de créditos pode ser imprevisível e rápido em cenários complexos com muitos módulos e Agentes de IA.',
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
    description: 'Make.com é uma plataforma de automação visual B2B que se consolidou como uma orquestradora poderosa para sistemas e IAs. Lançou os "Make AI Agents" (nova app em fevereiro de 2026), que permitem a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos como PDFs e imagens. A plataforma se integra nativamente com os modelos de IA mais recentes, como OpenAI GPT-5.5, Google Gemini 1.5 Pro e Anthropic Claude 3.5 Sonnet. Com uma interface altamente intuitiva, o "Make Grid" para visualização em tempo real das automações, e módulos aprimorados de controle de fluxo e funções, é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, baseados em créditos, oferecem flexibilidade, tornando-o uma alternativa custo-efetiva para automações complexas, apesar do consumo de créditos poder ser imprevisível para tarefas de IA.'
  }
];