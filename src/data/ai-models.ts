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
    pricing: 'Plano gratuito disponível com acesso a GPT-5.5 Instant (com anúncios nos EUA); ChatGPT Go: US$ 8/mês (global, anúncios); ChatGPT Plus: US$ 20/mês (inclui GPT-5.5, ChatGPT Images 2.0, Deep Research, Sora vídeo e Agent Mode); Pro US$ 100/mês (5x uso do Plus, GPT-5.5 Pro); Pro US$ 200/mês (20x uso do Plus, 1M tokens de contexto, GPT-5.5 Pro). API GPT-5.5: US$ 5/milhão de tokens de entrada e US$ 30/milhão de tokens de saída.',
    pros: [
      'GPT-5.5, lançado em abril de 2026, é o modelo carro-chefe da OpenAI para trabalho de agente, tarefas multifásicas e contextos longos.',
      'GPT-5.5 Instant, lançado em 5 de maio de 2026, é o novo modelo padrão para todos os usuários do ChatGPT, com redução de 52.5% nas alucinações em prompts de alto risco.',
      'Capacidades multimodais unificadas (texto, áudio e imagem) através da integração com ChatGPT Images 2.0.',
      'Interações de voz em tempo real com baixa latência e recursos avançados de visão (via modelos GPT-5.5).',
      'Disponível para usuários gratuitos com GPT-5.5 Instant e algumas restrições.',
      'Melhor experiência do usuário e interface intuitiva.',
      'Geração de imagens integrada (ChatGPT Images 2.0) e possibilidade de refinar imagens por conversação.',
      'Melhor desempenho em idiomas diferentes do inglês.',
      'Raciocínio de agente aprimorado e mais eficiente em termos de tokens, entregando saídas de maior qualidade a um custo competitivo.'
    ],
    cons: [
      'O modelo GPT-4o e versões anteriores foram aposentados para usuários do ChatGPT em fevereiro de 2026 (acesso à API permanece).',
      'Custo operacional da API pode ser alto para projetos menores, com preços mais elevados para GPT-5.5 em comparação com GPT-4o (US$ 2.50/M entrada, US$ 10.00/M saída).',
      'Pode alucinar e apresentar vieses, como outros modelos generativos de IA, embora GPT-5.5 Instant tenha reduzido drasticamente as alucinações.',
      'Anúncios presentes nos planos gratuito e Go nos EUA.',
      'Pode ter uma curva de aprendizado mais acentuada para recursos avançados.'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.9,
      coding: 5.0,
      speed: 5.0,
      value: 4.3 // Adjusted value due to higher API costs for GPT-5.5 and tiered access to Pro features.
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelo modelo GPT-5.5, é a ferramenta de IA multimodal carro-chefe da OpenAI. Lançado em abril de 2026, o GPT-5.5 se posiciona como o modelo mais avançado para tarefas complexas, trabalho de agente e processamento de contextos longos. O GPT-5.5 Instant, lançado em 5 de maio de 2026, tornou-se o modelo padrão para todos os usuários do ChatGPT, oferecendo redução de alucinações e respostas mais personalizadas. O modelo processa e gera informações em texto, áudio e imagem de forma coesa e em tempo real, oferecendo respostas de baixa latência e recursos avançados de visão. Integrado com o ChatGPT Images 2.0 para geração de imagens, o GPT-5.5 se destaca pela sua velocidade e capacidade de compreender e interagir com nuances emocionais, oferecendo uma experiência criativa e de produtividade abrangente. Novos planos como Go, Pro US$ 100 e Pro US$ 200 foram introduzidos para atender a diferentes necessidades de uso.'
  },
  {
    id: 'claude-opus-4-7',
    name: 'Claude Opus 4.7',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Grátis no Claude.ai e no aplicativo iOS (com acesso a Sonnet 4.6 e Haiku 4.5 e limites de uso diários); Plano Pro US$ 20/mês (ou US$ 17/mês faturado anualmente); Plano Max 5x US$ 100/mês; Plano Max 20x US$ 200/mês; Plano Team a partir de US$ 25/assento/mês. API: US$ 5/milhão de tokens de entrada e US$ 25/milhão de tokens de saída para Opus 4.7. O novo tokenizer do Opus 4.7 pode inflacionar a contagem de tokens em até 35% no mesmo texto, elevando o custo efetivo.',
    pros: [
      'Claude Opus 4.7, lançado em 16 de abril de 2026, é o modelo carro-chefe da Anthropic para tarefas longas e multifásicas, com desempenho mais forte em codificação, visão e tarefas complexas de várias etapas.',
      'Define novos padrões de referência para raciocínio de nível de pós-graduação, conhecimento de nível de graduação e proficiência em codificação, superando versões anteriores do Opus.',
      'Estilo de escrita extremamente natural e humanizado, com melhor compreensão de nuances e humor.',
      'Capacidades de visão de ponta, interpretando gráficos e transcrevendo texto de imagens imperfeitas.',
      'Pode escrever, editar e executar código de forma autônoma com raciocínio sofisticado.',
      'Janela de contexto de 1 milhão de tokens, ideal para cargas de trabalho pesadas em documentos e agentes.',
      'Novos controles de esforço (`xhigh` tier) oferecem ajuste fino entre raciocínio e latência, agora padrão para Claude Code.',
      'Novos recursos para agentes, incluindo Dreaming (otimização de memória), orquestração multiagente, Outcomes (definição de resultados desejados) e Webhooks.',
      'Claude Security em beta público para varredura de vulnerabilidades de código com Opus 4.7.'
    ],
    cons: [
      'Plano gratuito pode ser restritivo em limites de uso diários.',
      'Sem geração de imagem nativa (foco em compreensão visual e texto/código).',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança.',
      'O novo tokenizer do Opus 4.7 pode aumentar o custo efetivo por requisição em 0-35% para o mesmo conteúdo, apesar das taxas por token serem as mesmas do Opus 4.6.',
      'Modelos anteriores como Claude 3.5 Sonnet e Claude 3 Opus são agora legados.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 4.9,
      value: 4.4 // Adjusted value slightly down due to potential effective cost increase from new tokenizer, despite new capabilities.
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude Opus 4.7, lançado em 16 de abril de 2026, é o modelo de ponta da Anthropic, otimizado para tarefas complexas e multifásicas, oferecendo um equilíbrio ideal entre inteligência e velocidade. Ele estabelece novos benchmarks em raciocínio, conhecimento e codificação, superando significativamente seus predecessores. O modelo se destaca em escrita natural, compreensão de nuances e capacidades avançadas de visão, operando com maior controle e eficiência. Com uma vasta janela de contexto de 1 milhão de tokens e novos recursos de agente como Dreaming e orquestração multiagente, é ideal para tarefas profissionais complexas, como codificação, atendimento ao cliente e análise de dados. Embora as taxas de API por token permaneçam as mesmas do Opus 4.6, um novo tokenizer pode aumentar os custos efetivos.'
  },
  {
    id: 'gemini-1-5-pro',
    name: 'Gemini 1.5 Pro',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano Google AI Plus: US$ 7.99/mês (200 GB de armazenamento, limites de uso dobrados no Gemini); Plano Google AI Pro: US$ 19.99/mês (5 TB de armazenamento, limites de uso quadruplicados, acesso ao modelo Pro, YouTube Premium Lite); Plano Google AI Ultra: a partir de US$ 99.99/mês (até 20x limites, 20-30 TB de armazenamento, YouTube Premium completo, Gemini Spark). A precificação de API para Gemini 1.5 Pro permanece em US$ 7.00/milhão de tokens de entrada e US$ 21.00/milhão de tokens de saída.',
    pros: [
      'Modelo mais poderoso e versátil do Google, com melhor equilíbrio entre qualidade, desempenho e custo.',
      'Janela de contexto de até 2 milhões de tokens, ideal para processamento de grandes volumes de dados (documentos, código, vídeo, áudio).',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição.',
      'Desempenho superior em tarefas complexas que exigem raciocínio profundo, instrução nuances e escrita criativa.',
      'Integração aprimorada com o ecossistema Google (Docs, Drive, Gmail).',
      'Suporte a modo JSON e chamada de função na API.',
      'Arquitetura Mixture-of-Experts (MoE) para maior eficiência computacional.',
      'Entendimento aprimorado de imagem e vídeo, além de compreensão nativa de áudio.',
      'Novo modelo de faturamento "baseado em computação" para planos de consumidor: prompts simples de texto custam menos do que tarefas complexas de vídeo ou codificação, com limites que se atualizam a cada cinco horas.',
      'Lançamento surpresa do Gemini 3.1 Pro dobrando o poder de raciocínio.'
    ],
    cons: [
      'Ligeiramente mais lento que o Gemini 1.5 Flash.',
      'Mais caro que o Gemini 1.5 Flash na API.',
      'A interface do Google AI Pro (anteriormente Gemini Advanced) às vezes simplifica respostas técnicas.',
      'Filtros de segurança podem ser excessivamente rígidos.',
      'A transição para um sistema de cotas baseado em créditos para planos de consumidor pode levar a custos menos previsíveis e é percebida como um downgrade por alguns usuários pesados.'
    ],
    score: {
      reasoning: 5.0,
      writing: 4.8,
      coding: 5.0,
      speed: 4.7,
      value: 4.5 // Adjusted slightly due to the complexity and potential unpredictability of the new credit-based billing model for consumer plans.
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 1.5 Pro é o modelo de linguagem multimodal mais avançado do Google, com atualizações contínuas desde seu lançamento em fevereiro de 2024. Ele se destaca por sua vasta janela de contexto de até 2 milhões de tokens, permitindo a análise de quantidades massivas de informações em texto, imagem, áudio e vídeo. Na I/O 2026, o Google reestruturou seus planos de assinatura de IA para Google AI Plus, Google AI Pro e Google AI Ultra, com um novo modelo de faturamento "baseado em computação" que reflete a complexidade do uso. O modelo é otimizado para raciocínio complexo, geração de conteúdo e codificação, com desempenho superior em tarefas que exigem compreensão profunda e nuances. É uma ferramenta versátil para desenvolvedores e empresas, oferecendo integração profunda com o ecossistema Google, e com o lançamento do Gemini Spark para assinantes Ultra.'
  },
  {
    id: 'llama-4-maverick',
    name: 'Llama 4 Maverick',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware). API para Llama 4 Maverick: a partir de US$ 0.15/milhão de tokens de entrada e US$ 0.60/milhão de tokens de saída (via provedores de API gerenciados, como DeepInfra). Em hyperscalers como AWS Bedrock, custa US$ 0.50/milhão de tokens de entrada.',
    pros: [
      'Llama 4 Maverick, lançado em 5 de abril de 2025, é a nova geração de modelos "open-weight" da Meta, oferecendo arquitetura Mixture-of-Experts (MoE).',
      'Significativa redução de custo (82-93%) em comparação com Llama 3.1 405B, tornando-o altamente competitivo.',
      'Código "open-weight", pode rodar localmente no seu computador (com hardware adequado).',
      'Janela de contexto de 1 milhão de tokens.',
      'Capacidades multimodais, suportando entrada de texto e imagem.',
      'Ferramentas de uso de estado da arte e raciocínio aprimorado.',
      'Licença mais permissiva, permitindo o uso de outputs para melhorar outros modelos.',
      'Ecossistema robusto com parceiros (AWS, NVIDIA, Google Cloud).',
      'Suporte para geração de dados sintéticos e destilação de modelos.'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade.',
      'Custos de infraestrutura aumentam rapidamente para modelos maiores.',
      'Requer conhecimento técnico para fine-tuning e implantação.',
      'Não é "plug-and-play" automaticamente para todas as tarefas.',
      'Ainda sem acesso nativo à internet na versão bruta.'
    ],
    score: {
      reasoning: 4.9,
      writing: 4.7,
      coding: 4.9,
      speed: 4.9,
      value: 5.0
    },
    affiliateUrl: 'https://meta.ai',
    description: 'Llama 4 Maverick, lançado em 5 de abril de 2025, é a mais recente geração de modelos "open-weight" da Meta, sucedendo o Llama 3.1. Este modelo, baseado em arquitetura Mixture-of-Experts (MoE), oferece uma notável redução de custos de 82-93% em comparação com o Llama 3.1 405B. O Llama 4 Maverick mantém o controle e a flexibilidade dos modelos "open-weight", permitindo uso local com hardware potente ou acesso via API com preços altamente competitivos (US$ 0.15/milhão de entrada, US$ 0.60/milhão de saída). É ideal para desenvolvedores e empresas que buscam desempenho de ponta e eficiência de custos em cargas de trabalho multimodais e de longo contexto (1 milhão de tokens), com suporte a entrada de texto e imagem.'
  },
  {
    id: 'chatgpt-images-2-0',
    name: 'ChatGPT Images 2.0 (GPT Image 2.0)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês); Grátis no Microsoft Copilot (com limitações). API: a partir de US$ 0.04 por imagem (para qualidade padrão).',
    pros: [
      'Substitui GPT Image 1.5 (e DALL-E 3) como o modelo de geração de imagens padrão da OpenAI, lançado em 21 de abril de 2026.',
      'Melhor qualidade de imagem, renderização de texto aprimorada e saídas mais consistentes em comparação com DALL-E 3 e GPT Image 1.5.',
      'Excelente compreensão do prompt, inclusive prompts complexos e com múltiplos componentes.',
      'Integração total com ChatGPT (permite refinar imagens conversando).',
      'Gera resultados criativos, detalhados e visualmente impressionantes.',
      'Mantém consistência visual em séries de imagens relacionadas.',
      'Acessível para iniciantes e profissionais, com interface intuitiva.'
    ],
    cons: [
      'Ainda pode ter dificuldades com interpretação de frases muito sutis ou composições excessivamente complexas.',
      'Pode ficar aquém da qualidade fotorrealista de outros geradores em certos casos (como Midjourney).',
      'Oferece menos controle preciso sobre detalhes como layout e posicionamento de caracteres em comparação com ferramentas mais especializadas.',
      'Resolução máxima pode ser limitada em comparação com concorrentes que oferecem 2048x2048 ou superior.'
    ],
    score: {
      reasoning: 4.8,
      writing: 1.0,
      coding: 1.0,
      speed: 4.5,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Images 2.0 é a próxima geração do modelo de imagem da OpenAI, lançado em 21 de abril de 2026, para substituir o GPT Image 1.5 como o modelo padrão. Ele retém a integração com o ChatGPT e a capacidade de prompt conversacional que tornaram o DALL-E 3 e o GPT Image 1.5 fáceis de usar, ao mesmo tempo em que promete qualidade de imagem aprimorada, melhor renderização de texto e saídas mais consistentes. É uma ferramenta poderosa para criadores, designers e profissionais de marketing que buscam visualizar ideias de forma eficiente e criativa, com acesso incluído no ChatGPT Plus e disponível via API.'
  },
  {
    id: 'midjourney',
    name: 'Midjourney v8.1',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'A partir de US$ 10/mês (Plano Básico, ou US$ 96/ano); Planos Standard US$ 30/mês (ou US$ 288/ano), Pro US$ 60/mês (ou US$ 576/ano), Mega US$ 120/mês (ou US$ 1152/ano). O custo da geração padrão foi reduzido em 25%, tornando-a mais acessível. Sem plano gratuito no site oficial.',
    pros: [
      'Midjourney v8.1, lançado em 30 de abril de 2026, oferece qualidade fotorrealista e estética aprimorada, restaurando o estilo do V7.',
      'Geração nativa de imagens em HD 2K (2048x2048) por padrão, sem necessidade de upscaling separado.',
      'O modo HD é 3x mais rápido que as versões anteriores e o custo da geração padrão foi reduzido em 25%. O desempenho geral é 5x mais rápido que o V8.',
      'Excelente interpretação de iluminação, texturas e estilos artísticos.',
      'Melhor interpretação de prompt e retenção de detalhes, com aderência aprimorada.',
      'Editor web moderno disponível para assinantes, com recursos de edição, organização e unificação de ferramentas.',
      'Modo Raw para maior aderência ao prompt e estética mais natural.',
      'Melhor renderização de mãos, rostos, membros e texto dentro das imagens (em comparação com versões anteriores).',
      'Direitos de uso comercial inclusos em todos os planos pagos.',
      'Parâmetro "seed" de volta e mais confiável, permitindo consistência em testes de variação de prompt.'
    ],
    cons: [
      'Interface principal ainda roda dentro do Discord para alguns recursos.',
      'Não possui plano de testes gratuito no site oficial.',
      'Ainda pode apresentar dificuldades com renderização de textos muito complexos dentro da imagem.',
      'Sem API pública oficial.',
      'V8.1 perdeu referências de personagem, referências omni, multi-prompting e o parâmetro de qualidade em comparação com versões anteriores.',
      'Sem upscaler integrado no V8.1 (embora o output nativo em 2K seja uma vantagem).',
      'Geração de vídeo é limitada a image-to-video, não suporta texto-para-vídeo diretamente.',
      'V8.2, focado em estética, está previsto para ser lançado em breve, indicando que a estética atual pode ser aprimorada.'
    ],
    score: {
      reasoning: 4.5, // Slightly increased due to better prompt adherence
      writing: 2.5,
      coding: 1.0,
      speed: 5.0, // Confirmed 5x faster, HD 3x faster, with 25% cheaper standard generation
      value: 4.6 // Slightly increased due to speed and cost reductions
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney v8.1, lançada em 30 de abril de 2026, é a versão mais rápida e avançada para geração de imagens artísticas e fotorrealistas. Oferece imagens nativas em 2K no modo HD por padrão, interpretação de prompts aprimorada e melhor renderização de texto e mãos. O V8.1 restaurou a estética familiar do V7 e é significativamente mais rápido e mais barato para gerações padrão e HD. Com a reintrodução do parâmetro "seed" com alta confiabilidade e um editor web moderno, é a ferramenta ideal para designers e criadores que buscam qualidade visual de altíssimo nível, apesar da perda de alguns recursos como referências de personagem em comparação com versões anteriores.'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion 3.0 (Medium/Large/Turbo)',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código aberto (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware). Licença Creator: a partir de US$ 20/mês para empresas menores. Pago via API: SD3.0 Large: US$ 0.065/imagem. SD3.0 Turbo: US$ 0.040/imagem.',
    pros: [
      'Controle absoluto sobre a geração (via ferramentas como ControlNet).',
      'Permite treinar modelos com seu próprio rosto ou produto.',
      'Pode rodar 100% grátis localmente no seu computador (para uso não comercial e comercial até US$ 1M de receita anual).',
      'Arquitetura aprimorada Multimodal Diffusion Transformer (MMDiT) para melhor compreensão de texto e precisão ortográfica.',
      'Ideal para geração em volume e necessidades de privacidade.',
      'Múltiplas variantes (Medium, Large, Large Turbo) otimizadas para diferentes necessidades de hardware e velocidade.',
      'SD3.0 demonstrou excelência consistente em seguir prompts, tipografia e estética visual, superando concorrentes.',
      'Qualidade de imagem superior e aderência ao prompt.',
      'Pesos do SD3 Medium já foram liberados para uso público em junho de 2024.'
    ],
    cons: [
      'Curva de aprendizado muito acentuada (interface complexa para uso avançado).',
      'Exige uma placa de vídeo dedicada muito potente para uso local eficiente (SD3 Large requer VRAM elevada).',
      'Configuração inicial trabalhosa para uso local avançado.',
      'Modelos maiores (SD3 Large) podem ser mais lentos na renderização em comparação com variantes Turbo ou modelos menores.'
    ],
    score: {
      reasoning: 4.0,
      writing: 1.8,
      coding: 1.0,
      speed: 4.5,
      value: 4.9
    },
    affiliateUrl: 'https://stability.ai',
    description: 'Stable Diffusion 3.0, com suas variantes Medium, Large e Turbo, é a geração mais avançada da Stability AI e o padrão ouro para IA visual open-source. Lançado com a arquitetura Multimodal Diffusion Transformer (MMDiT), oferece controle milimétrico sobre a geração de imagens, com notáveis melhorias na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista. Disponível para uso local gratuito e via API, é ideal para profissionais que buscam personalização, eficiência e controle, aproximando a qualidade de modelos comerciais, mas exigindo investimento em aprendizado e hardware potente para as versões maiores. Os pesos do SD3 Medium já foram liberados para o público.'
  },
  {
    id: 'make-automation',
    name: 'Make.com',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis (1.000 créditos/mês, 2 cenários ativos). Planos pagos (valores anuais): Core US$ 9/mês (10.000 créditos/mês); Pro US$ 16/mês (10.000+ créditos/mês, execução prioritária); Teams US$ 29/mês por usuário (10.000+ créditos/mês, colaboração). Os planos mensais são ligeiramente mais caros (ex: Core US$ 10.59/mês, Pro US$ 18.82/mês, Teams US$ 34.12/mês). O custo final depende do consumo de créditos (cada operação é um crédito), e cenários complexos ou frequentes podem consumir créditos rapidamente.',
    pros: [
      'Interface visual de arrastar e soltar muito intuitiva.',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-5.5, Claude Opus 4.7, Google Gemini 1.5 Pro) e centenas de APIs.',
      'Permite criar roteiros condicionais complexos (se isso, faça aquilo), aprimorado com módulos If-else aninhados e Merge.',
      'Oferece agentes de IA (Make AI Agents) e toolkit de IA para automação inteligente e adaptativa.',
      'Suporte multimodal para AI Agents, permitindo entrada e saída de arquivos como PDFs, imagens e CSVs.',
      'Chat no canvas para refinamento de agentes de IA em tempo real.',
      'Registros detalhados de execução para facilitar a depuração e visibilidade com Make Grid.',
      'Integração com milhares de aplicativos (mais de 3.000).',
      'Make AI Web Search para buscas em tempo real em cenários, sem necessidade de APIs externas.',
      'Make Functions app para transformações de dados passo a passo.'
    ],
    cons: [
      'Pode se tornar caro se o volume de execuções mensais (créditos) for muito alto e complexo, pois cada operação conta como um crédito e cenários complexos ou frequentes podem esgotar os créditos rapidamente.',
      'Requer conceitos básicos de lógica de programação (JSON, arrays) para fluxos avançados.',
      'Documentação de alguns aplicativos integrados é escassa.',
      'Curva de aprendizado acentuada para fluxos avançados.',
      'Custo por usuário nos planos Teams pode escalar rapidamente para equipes maiores.'
    ],
    score: {
      reasoning: 4.9, // Slightly increased due to advanced AI agent capabilities and nested logic, Make AI Web Search, Make Functions.
      writing: 3.0,
      coding: 4.0,
      speed: 4.8,
      value: 4.6 // Adjusted due to clarified pricing structure and potential for rapid credit consumption, balancing with new features.
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Make.com é uma plataforma de automação visual B2B que permite conectar sistemas e integrar as principais IAs (OpenAI GPT-5.5, Google Gemini 1.5 Pro, Anthropic Claude Opus 4.7, etc.) sem programação. Lançou os "Make AI Agents" em abril de 2025, transformando-se em uma plataforma de orquestração de fluxos de trabalho inteligentes que tomam decisões adaptativas. A plataforma agora oferece suporte multimodal para seus agentes de IA, permitindo a análise e geração de diversos tipos de arquivos. Com uma interface intuitiva, o "Make Grid" para visualização em tempo real das automações, "Make AI Web Search" para dados em tempo real, e módulos aprimorados de controle de fluxo (como if-else aninhado) e funções, é uma ferramenta versátil para automação de rotinas empresariais. Os planos de preços foram atualizados, com opções anuais e mensais para Core, Pro e Teams.'
  }
];