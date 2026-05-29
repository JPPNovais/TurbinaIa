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
    name: 'ChatGPT Plus (GPT-5.5, GPT-5.5 Instant, GPT-5.4)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (acesso a GPT-5.3 Instant limitado, com anúncios nos EUA e recursos básicos); ChatGPT Go: US$ 8/mês (acesso ilimitado a GPT-5.3 Instant, uploads de arquivo, criação de imagem, anúncios); ChatGPT Plus: US$ 20/mês (acesso prioritário a GPT-5.5, GPT-5.5 Instant, GPT-5.4 e GPT Image 2.0; inclui Deep Research, Sora, Codex, Agent Mode, Custom GPTs, navegação web, Advanced Data Analysis, e voz real-time ChatGPT Voice). ChatGPT Pro US$ 100/mês (lançado em abril de 2026, 5x o uso do Plus, acesso a GPT-5.5 Pro) e US$ 200/mês (lançado em abril de 2026, 20x o uso do Plus, 1M token de contexto, acesso a GPT-5.5 Pro). ChatGPT Business: US$ 20-30/mês por usuário (anual/mensal, mínimo de 2 usuários). API para GPT-5.5: US$ 5.00/milhão de tokens de entrada e US$ 30.00/milhão de tokens de saída. API para GPT-5.4: US$ 2.50/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída (para até 272K tokens de entrada; preços mais altos para prompts maiores).',
    pros: [
      'GPT-5.5 (lançado em abril de 2026) é o modelo mais inteligente e capaz da OpenAI, destacando-se em codificação agentica, uso de computador, trabalho de conhecimento e pesquisa científica.',
      'GPT-5.5 Instant (lançado em maio de 2026) é o novo padrão do ChatGPT, oferecendo respostas mais rápidas, inteligentes, precisas (alucinações reduzidas) e personalizadas, e é o modelo padrão para usuários gratuitos.',
      'GPT-5.4 (lançado em março de 2026) oferece capacidades robustas de raciocínio, codificação e uso de computador, com janela de contexto de 1M+ tokens.',
      'Acesso a recursos como Advanced Data Analysis (anteriormente Code Interpreter), navegação web, Custom GPTs, Deep Research (no Plus), Sora (geração de vídeo) e Agent Mode (automação multi-passo).',
      'GPT Image 2.0 (lançado em abril de 2026) integrado, com renderização de texto multilíngue aprimorada, raciocínio visual avançado e resolução 2K, disponível nos planos pagos.',
      'Planos pagos oferecem acesso prioritário, limites de uso mais altos e desempenho mais consistente, incluindo novas tiers Pro com capacidades superiores.'
    ],
    cons: [
      'Usuários gratuitos e do plano Go podem ver anúncios e têm acesso limitado a modelos mais avançados.',
      'O custo da API para GPT-5.5 é significativamente mais alto que o do GPT-5.4 por token.',
      'O Canvas não está mais disponível no GPT-5.5 Instant ou GPT-5.5 Thinking.',
      'GPT-5.4 possui um cutoff de conhecimento de 31 de agosto de 2025.',
      'Modelos GPT-4o e anteriores foram aposentados para usuários pagos do ChatGPT em fevereiro de 2026.'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, agora impulsionado pelos modelos GPT-5.5 (lançado em abril de 2026) e GPT-5.5 Instant (lançado em maio de 2026), representa o auge da inteligência artificial generativa da OpenAI. O GPT-5.5 é o modelo mais inteligente e capaz da empresa, otimizado para tarefas complexas de codificação, pesquisa e análise de dados. O GPT-5.5 Instant, o novo padrão do ChatGPT, oferece respostas mais rápidas, precisas e personalizadas, com alucinações reduzidas, sendo o modelo padrão para usuários gratuitos. A plataforma também oferece acesso ao GPT-5.4 (lançado em março de 2026), que unifica recursos de raciocínio, codificação e uso de computador com uma vasta janela de contexto de 1M+ tokens. Assinantes do ChatGPT Plus (US$ 20/mês) recebem acesso prioritário e ilimitado aos modelos mais recentes, juntamente com recursos como Advanced Data Analysis, navegação web, Custom GPTs, Deep Research, Sora (geração de vídeo) e geração de imagens através do GPT Image 2.0 (lançado em abril de 2026). Novos planos Pro (US$ 100/mês e US$ 200/mês) oferecem opções com limites e capacidades superiores para usuários intensivos e corporativos, com custos de API variáveis por modelo.'
  },
  {
    id: 'claude-sonnet-4-6',
    name: 'Claude Sonnet 4.6 (e Claude Opus 4.7, Haiku 4.5)',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso a Claude Haiku 4.5 e Claude Sonnet 4.6, com limites de uso diários). Plano Pro: US$ 20/mês (ou US$ 17/mês anual) com acesso a Claude Sonnet 4.6, Claude Opus 4.7 e Claude Haiku 4.5, e limites de taxa significativamente mais altos. Plano Max: US$ 100/mês (5x uso do Pro) ou US$ 200/mês (20x uso do Pro). API para Claude Haiku 4.5: US$ 1.00/milhão de tokens de entrada e US$ 5.00/milhão de tokens de saída. API para Claude Sonnet 4.6: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 1M tokens. API para Claude Opus 4.7 (lançado em abril de 2026): US$ 5.00/milhão de tokens de entrada e US$ 25.00/milhão de tokens de saída, com janela de contexto de 1M tokens.',
    pros: [
      'Claude Opus 4.7 (lançado em abril de 2026) é o modelo mais avançado da Anthropic, oferecendo raciocínio de ponta e suporte a imagens de alta resolução (até 2576px/3.75MP).',
      'Claude Sonnet 4.6 (lançado em 2026) oferece um excelente equilíbrio entre custo e qualidade, sendo o modelo padrão para a maioria das equipes em produção.',
      'Claude Haiku 4.5 (lançado em 2026) é o modelo mais rápido e econômico, ideal para tarefas de alto volume e classificação.',
      'Janela de contexto de 1M tokens para Claude Opus 4.7, Sonnet 4.6 e Opus 4.6, ideal para processar grandes volumes de dados.',
      'Oferece capacidades de visão para processamento e análise de imagens, e suporta função de chamada para execução de ferramentas e funções personalizadas.',
      'Batch API e prompt caching podem reduzir significativamente os custos da API.'
    ],
    cons: [
      'Claude Opus 4.7 utiliza um novo tokenizer que pode consumir até 35% mais tokens para o mesmo texto, impactando o custo efetivo.',
      'Não possui geração de imagem nativa (foco em compreensão visual e texto/código), embora Opus 4.7 tenha visão aprimorada.',
      'Pode ser excessivamente cauteloso em algumas respostas devido a filtros de segurança. [current data]'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude Sonnet 4.6 é o modelo mid-tier mais avançado da Anthropic, oferecendo um desempenho robusto em raciocínio, codificação e compreensão multimodal, incluindo capacidades de visão e função de chamada. Para tarefas mais complexas e fluxos de trabalho agenticos, o Claude Opus 4.7 (lançado em abril de 2026) é o modelo carro-chefe da Anthropic, alcançando alta pontuação em benchmarks de inteligência e codificação, com suporte a imagens de alta resolução e uma janela de contexto de 1M tokens. Ambos os modelos, juntamente com o Claude Haiku 4.5 (modelo mais rápido e custo-efetivo), estão disponíveis via planos gratuitos, Pro e Max, e API. A Anthropic continua a focar em segurança e alinhamento em seus modelos, embora o novo tokenizer do Opus 4.7 possa aumentar o consumo de tokens.'
  },
  {
    id: 'gemini-models',
    name: 'Gemini 1.5 Pro, Gemini 1.5 Flash e Gemini 3.5 Flash (via Google AI Premium)',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com acesso ao Gemini app, Gemini 1.5 Flash e recursos básicos); Google AI Premium (anteriormente Google One AI Premium/Gemini Advanced): US$ 19.99/mês (acesso a Gemini 1.5 Pro, Gemini 1.5 Flash, Gemini 3.5 Flash, 5 TB de armazenamento, integração com Workspace). API para Gemini 1.5 Pro: US$ 7.00/milhão de tokens de entrada e US$ 21.00/milhão de tokens de saída para prompts com menos de 128K tokens, com janela de contexto de 2 milhões de tokens. API para Gemini 1.5 Flash: US$ 3.75/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída para prompts com menos de 128K tokens, com janela de contexto de 1 milhão de tokens. Tokens de entrada em cache para Gemini 1.5 Flash: US$ 0.01/milhão de tokens (<128K prompts).',
    pros: [
      'Gemini 3.5 Flash (lançado em maio de 2026) é um modelo de ponta que oferece desempenho de nível de fronteira em velocidades Flash, sendo uma forte resposta aos modelos emblemáticos da concorrência.',
      'Gemini 1.5 Pro (lançado em fevereiro de 2024) é o modelo mais poderoso e versátil do Google para raciocínio complexo, multimodalidade e capacidades agenticas, com janela de contexto de 2 milhões de tokens. [current data]',
      'Gemini 1.5 Flash (lançado em maio de 2024) é o modelo mais rápido e eficiente do Gemini, otimizado para tarefas de alto volume e frequência, com janela de contexto de 1 milhão de tokens. [current data]',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição. [current data]',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome). [current data]'
    ],
    cons: [
      'A API para Gemini 1.5 Pro é mais cara que a 1.5 Flash, especialmente para prompts mais longos. [current data]',
      'A segmentação de imagem não é suportada nos modelos Gemini 1.5. [current data]',
      'Detalhes sobre outros modelos da série Gemini 3.x (Flash-Lite, Ultra) além do 3.5 Flash ainda são limitados publicamente. [current data]'
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.9
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'Gemini 1.5 Pro (lançado em fevereiro de 2024), Gemini 1.5 Flash (lançado em maio de 2024) e o mais recente Gemini 3.5 Flash (lançado em maio de 2026) são os modelos de linguagem multimodal mais avançados do Google. Eles oferecem vasta janela de contexto de até 2 milhões de tokens (para 1.5 Pro) para análise de grandes volumes de informações em texto, imagem, áudio e vídeo. O Gemini 1.5 Pro é projetado para raciocínio complexo e desempenho superior, enquanto o Gemini 1.5 Flash e 3.5 Flash são otimizados para velocidade e custo-benefício em tarefas de alto volume. O Gemini 3.5 Flash, em particular, oferece desempenho de nível de fronteira. Todos se destacam na análise multimodal e estão profundamente integrados ao ecossistema Google. Disponível via assinatura Google AI Premium e API, a família Gemini é uma ferramenta versátil para diversas aplicações.'
  },
  {
    id: 'llama-models',
    name: 'Llama 3.1 (8B, 70B, 405B) e Llama 4 (Scout, Maverick)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware, licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual); uso comercial livre até 700 milhões de usuários por mês (a partir de abril de 2025 para Llama 4). API para Llama 3.1 8B: US$ 0.05/milhão de tokens de entrada e US$ 0.08/milhão de tokens de saída (via Deepinfra/Groq). API para Llama 3.1 405B: US$ 0.80/milhão de tokens de entrada e US$ 0.80/milhão de tokens de saída (via Deepinfra) ou US$ 3.50/milhão de tokens de entrada e US$ 3.50/milhão de tokens de saída (via Together AI). API para Llama 4 Maverick (MoE): US$ 0.15/milhão de tokens de entrada e US$ 0.20/milhão de tokens de saída (via Deepinfra, estimado). O API da Meta para Llama é atualmente gratuito para experimentação.',
    pros: [
      'Llama 3.1 (lançado em julho de 2024) é uma geração aprimorada com janela de contexto de 128K tokens, suporte a oito idiomas e melhorias significativas em raciocínio e uso de ferramentas.',
      'Llama 4 (lançado em abril de 2025) utiliza arquitetura Mixture-of-Experts (MoE), oferecendo desempenho e eficiência aprimorados, sendo multimodal (texto e imagem) e multilíngue (12 idiomas).',
      'Llama 4 Scout (17B parâmetros ativos, 109B total) apresenta uma janela de contexto de 10 milhões de tokens e pode rodar em uma única GPU H100.',
      'Modelos "open-weight" que permitem uso local gratuito e fine-tuning, com um ecossistema robusto de provedores de API terceirizados que oferecem custos competitivos (Deepinfra como o mais barato e Groq como o mais rápido).'
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade e para modelos maiores. [current data]',
      'A migração de fine-tuning do Llama 3.1 para o Llama 4 requer o re-treinamento do modelo.',
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
    description: 'A família Llama da Meta evoluiu com Llama 3.1 (lançado em julho de 2024), que aprimorou a janela de contexto para 128K tokens, adicionou suporte a múltiplos idiomas e melhorou o raciocínio e uso de ferramentas. Complementando esta linha, o Llama 4 (Scout, Maverick), lançado em abril de 2025, é notável por sua arquitetura Mixture-of-Experts (MoE), oferecendo vantagens significativas em desempenho e custo-benefício. Llama 4 é multimodal (texto e imagem) e multilíngue (12 idiomas), com Llama 4 Scout apresentando uma vasta janela de contexto de 10 milhões de tokens e a capacidade de rodar em uma única GPU. Embora exija hardware robusto para execução local, a natureza open-weight do Llama e as melhorias arquitetônicas do Llama 4 o tornam uma opção poderosa e flexível para desenvolvedores e empresas que buscam personalização e controle. A Meta também oferece um API gratuito para experimentação, e provedores terceirizados oferecem custos de API muito competitivos.'
  },
  {
    id: 'gpt-image-2',
    name: 'GPT Image 2.0 (via ChatGPT Plus)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com acesso a GPT-5.5, GPT-5.5 Instant e limites de uso). API para GPT Image 2.0 (lançado em abril de 2026): US$ 8.00/milhão de tokens de entrada e US$ 30.00/milhão de tokens de saída para imagem.',
    pros: [
      'GPT Image 2.0 (lançado em abril de 2026) é o modelo de geração de imagens mais avançado da OpenAI.',
      'Primeiro modelo de imagem com raciocínio nativo ("Thinking Mode"), permitindo pesquisa pré-geração, planejamento e autocorreção, gerando até oito imagens coerentes a partir de um único prompt.',
      'Melhora significativa na renderização de texto multilíngue (incluindo CJK, Hindi, Bengali e Árabe) e suporte a resolução 2K (até 2048px).',
      'Integração perfeita com ChatGPT, permitindo criação e modificação de imagens via conversação.'
    ],
    cons: [
      'Ainda pode apresentar resultados que parecem "falsos" ou não atingir o fotorrealismo de alguns concorrentes em certos casos, embora tenha melhorado significativamente. [current data]',
      'O acesso completo e ilimitado requer assinatura do ChatGPT Plus ou planos superiores, com recursos avançados (Thinking Mode) restritos a assinantes pagos.',
      'Preços da API podem ser elevados, especialmente para alta qualidade e resoluções maiores.'
    ],
    score: {
      reasoning: 4.9,
      writing: 3.8,
      coding: 1.0,
      speed: 4.8,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'GPT Image 2.0, lançado pela OpenAI em abril de 2026, é a mais recente geração de modelos de geração de imagens da empresa. Totalmente integrado ao ChatGPT, ele se destaca pela sua capacidade de interpretar prompts complexos e conversacionais para criar imagens de alta qualidade com renderização aprimorada de texto multilíngue e raciocínio visual avançado (através do "Thinking Mode"). Este modelo oferece resolução 2K e a capacidade de realizar pesquisa pré-geração para maior precisão. Disponível via assinatura ChatGPT Plus, a geração de imagens da OpenAI oferece uma experiência intuitiva e poderosa para designers, criadores de conteúdo e qualquer pessoa que busque gerar visuais criativos de alto nível, apesar do custo da API para uso em larga escala.'
  },
  {
    id: 'midjourney-v8-1',
    name: 'Midjourney V8.1 (e V7)',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial. Planos pagos: Basic US$ 10/mês (US$ 96/ano) com ~3.3 horas de GPU rápida (equivalente a ~200 imagens). Standard US$ 30/mês (US$ 288/ano) com ~15 horas de GPU rápida e gerações ilimitadas no modo Relax. Pro US$ 60/mês (US$ 576/ano) com ~30 horas de GPU rápida, modo Relax ilimitado, modo Stealth (privacidade) e gerações ilimitadas de vídeo SD no modo Relax. Mega US$ 120/mês (US$ 1152/ano) com ~60 horas de GPU rápida, modo Relax ilimitado e modo Stealth.',
    pros: [
      'Midjourney V7 (lançado em abril de 2025, padrão desde junho de 2025) oferece qualidade de imagem excepcional, alta resolução, estética marcante e maior precisão na compreensão de prompts.',
      'Introduziu o "Draft Mode" (10x mais rápido, 50% de custo reduzido) para iteração rápida de ideias e "Omni Reference".',
      'A versão V8.1 (mencionada em março de 2026) continua a aprimorar as capacidades.',
      'Disponibiliza um Editor Web completo, eliminando a dependência do Discord, com funcionalidades de Inpaint, Outpaint e Retexture.',
      'Possui recurso de Consistência de Personagem (--cref) para manter faces consistentes em diferentes estilos e poses.',
      'Gera imagens fotorrealistas e artísticas de altíssima qualidade, sendo o "padrão ouro" para muitos usuários.'
    ],
    cons: [
      'Não possui plano de testes gratuito no site oficial.',
      'Não possui API pública oficial, limitando a integração programática. [current data]',
      'O modo Relax, que oferece gerações ilimitadas mais lentas, não está disponível para jobs rápidos. [current data]',
      'O modo Stealth (privacidade) e geração de vídeo SD estão disponíveis apenas nos planos Pro e Mega.',
      'Requer a criação de um estilo personalizado V7 antes do uso.',
      'Curva de aprendizado para prompt engineering avançado. [current data]'
    ],
    score: {
      reasoning: 4.5,
      writing: 2.5,
      coding: 1.0,
      speed: 4.8,
      value: 4.5
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney V7, que se tornou o modelo padrão em junho de 2025, representa um salto significativo em qualidade visual, alta resolução e coerência, sendo amplamente reconhecido por seu fotorrealismo e habilidades artísticas. Com a introdução do "Draft Mode" para iteração rápida e o novo Editor Web que elimina a dependência do Discord (incluindo Inpaint, Outpaint e Consistência de Personagem), o Midjourney continua a liderar a geração de imagens. A versão V8.1 (mencionada em março de 2026) segue aprimorando estas capacidades. Apesar de não ter plano gratuito oficial ou uma API pública, o Midjourney continua a ser uma ferramenta líder para designers e criadores que buscam resultados visuais de altíssimo nível.'
  },
  {
    id: 'stable-diffusion-3-medium',
    name: 'Stable Diffusion 3 Medium (e Stable Audio 2.0)',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware); para empresas com mais de US$ 1M de receita anual, licença Enterprise é necessária. API (sistema de créditos): Stable Diffusion 3 Medium: US$ 0.035/imagem (1024x1024) via Replicate. Stable Diffusion 3 (base): 6.5 créditos/imagem (~US$ 0.065/imagem). Stable Diffusion 3 Turbo: 4 créditos/imagem (~US$ 0.04/imagem). Stable Audio 2.0: 20 créditos gratuitos por mês, 2 créditos por geração.',
    pros: [
      'Stable Diffusion 3 (lançado em abril de 2024) utiliza arquitetura Multimodal Diffusion Transformer (MMDiT), oferecendo controle aprimorado e melhorias notáveis na compreensão de prompts complexos, renderização de texto e qualidade fotorrealista. [current data]',
      'Modelos "open-weight" que podem rodar localmente (com hardware adequado), permitindo controle absoluto, privacidade e fine-tuning (LoRAs, ControlNet). [current data]',
      'Stable Diffusion 3 Medium oferece um equilíbrio entre qualidade de geração e eficiência de recursos. [current data]',
      'Stable Audio 2.0 (lançado em abril de 2024) para geração de música e efeitos sonoros, capaz de criar peças de até 3 minutos, com funcionalidades de texto-para-áudio e áudio-para-áudio, disponível gratuitamente. [current data]',
      'Gera outputs diversos e representativos de diferentes tons de pele e características. [current data]'
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado e configuração técnica para uso local eficiente. [current data]',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente. [current data]',
      'Ainda pode apresentar dificuldades em renderizar anatomia humana de forma perfeita. [current data]',
      'A qualidade da saída pode variar mais sem fine-tuning em comparação com soluções gerenciadas. [current data]',
      'Preços da API podem ser mais complicados de prever devido ao sistema de créditos e variáveis. [current data]'
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
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos. [current data]',
      'Os "Make AI Agents" (nova app lançada em fevereiro de 2026, disponível em todos os planos) permitem automação inteligente e adaptativa com tomada de decisões em tempo real dentro do canvas, com visibilidade total do processo. [current data]',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-5.5, Claude Sonnet 4.6, Google Gemini 1.5 Pro) e milhares de APIs (3.000+ apps, mais integração via módulo HTTP). [current data]',
      'Suporte multimodal para AI Agents, permitindo entrada e saída de arquivos como PDFs, imagens e CSVs diretamente no fluxo de trabalho. [current data]',
      'Registros detalhados de execução (Make Grid) e busca de texto completo em logs (planos Pro e Teams) para depuração e visibilidade aprimoradas. [current data]',
      'Altamente competitivo em termos de custo-benefício para automações complexas em comparação com alternativas como Zapier (3-5x mais barato por operação). [current data]',
      'Funcional plano gratuito para prototipar automações. [current data]'
    ],
    cons: [
      'O consumo de créditos pode ser imprevisível e rápido em cenários complexos com muitos módulos e Agentes de IA. [current data]',
      'Requer conceitos básicos de lógica de programação (JSON, arrays) para fluxos avançados e agentes de IA complexos, resultando em uma curva de aprendizado mais acentuada. [current data]',
      'Os recursos de colaboração e equipe são limitados nos planos Core e Pro, exigindo o plano Teams para funcionalidade completa. [current data]',
      'Cenários no plano Core podem entrar em fila durante picos de uso. [current data]',
      'Limites de transferência de dados podem ser rapidamente atingidos em fluxos que processam conteúdo de vídeo. [current data]'
    ],
    score: {
      reasoning: 4.9,
      writing: 3.0,
      coding: 4.0,
      speed: 4.8,
      value: 4.6
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Make.com é uma plataforma de automação visual B2B que se consolidou como uma orquestradora poderosa para sistemas e IAs. Lançou os "Make AI Agents" (nova app em fevereiro de 2026), que permitem a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos como PDFs e imagens. A plataforma se integra nativamente com os modelos de IA mais recentes, como OpenAI GPT-5.5, Anthropic Claude Sonnet 4.6 e Google Gemini 1.5 Pro. Com uma interface altamente intuitiva, o "Make Grid" para visualização em tempo real das automações, e módulos aprimorados de controle de fluxo e funções, é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, baseados em créditos, oferecem flexibilidade, tornando-o uma alternativa custo-efetiva para automações complexas, apesar do consumo de créditos poder ser imprevisível para tarefas de IA.'
  }
];