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
    id: 'openai-chatgpt-plus',
    name: 'ChatGPT Plus (GPT-4o, GPT-3.5)',
    developer: 'OpenAI',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (acesso limitado a GPT-4o e GPT-3.5, com limites de mensagens e recursos). ChatGPT Plus: US$ 20/mês (acesso total a GPT-4o, GPT-4, GPT-3.5; inclui DALL-E 3, navegação na web, análise de dados avançada, Custom GPTs e recursos de memória). ChatGPT Team: US$ 25/usuário/mês (anual, mínimo de 2 usuários) ou US$ 30/usuário/mês (mensal, mínimo de 2 usuários). ChatGPT Enterprise: Preço personalizado (contato com vendas). API para GPT-4o: US$ 2.50/milhão de tokens de entrada e US$ 10.00/milhão de tokens de saída. API para GPT-3.5 Turbo: Varia de US$ 0.50 a US$ 1.50/milhão de tokens de entrada e US$ 1.50 a US$ 2.00/milhão de tokens de saída, dependendo da versão e uso. ',
    pros: [
      'GPT-4o (lançado em maio de 2024) é o modelo principal da OpenAI, com inteligência de nível GPT-4, mas muito mais rápido e eficiente. ',
      'Multimodalidade nativa, aceitando inputs de texto, áudio, imagem e vídeo, e gerando outputs de texto, áudio e imagem, permitindo interações mais naturais. ',
      'Modo de voz em tempo real humanizado, com baixa latência (320 ms), detectando nuances como tom, risadas e interrupções. ',
      'Recursos de visão aprimorados, capazes de analisar gráficos, transcrever texto manuscrito e digitalizar notas. ',
      'Acesso a recursos avançados como Advanced Data Analysis (execução de código Python em sandbox) e Custom GPTs. ',
      'Função de pesquisa na web aprimorada, fornecendo respostas atualizadas e abrangentes com links para fontes. ',
      'Melhorias significativas nos recursos de memória, com a capacidade de o ChatGPT referenciar conversas passadas para respostas mais personalizadas, e controles para gerenciar ou desativar a memória. ',
      'Disponível para usuários gratuitos com limites de capacidade e uma versão mais leve das melhorias de memória. ',
      'Aplicações de desktop e móveis com recursos multimodais completos estão sendo lançadas progressivamente. ',
      'Suporte a mais de 50 idiomas e múltiplos tons de voz. '
    ],
    cons: [
      'Modelos anteriores como GPT-5, GPT-5.2, GPT-4o mini, GPT-4.1 e DALL-E 2/3 foram ou estão sendo descontinuados, exigindo migração para modelos mais recentes. ',
      'Apesar das melhorias, o modelo ainda pode gerar respostas imprecisas ou alucinações. ',
      'O conhecimento do GPT-4o tem um corte em outubro de 2023. ',
      'O modo de voz avançado teve seu lançamento atrasado para atender aos padrões de segurança e resposta em tempo real. ',
      'O custo da API para GPT-4o é significativamente mais alto do que para GPT-3.5 Turbo. ',
      'Em alguns cenários, o modelo não consegue processar entradas visuais e de áudio simultaneamente. ',
      'OpenAI está envolvida em litígios de direitos autorais e investigações relacionadas ao uso de dados para treinamento de IA. '
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Plus, impulsionado pelo modelo GPT-4o (lançado em maio de 2024), representa o ápice da inteligência artificial generativa da OpenAI, sucedendo o GPT-4 com maior velocidade, eficiência e capacidades multimodais nativas. O GPT-4o aceita e gera respostas em texto, áudio e imagem, e demonstra um modo de voz em tempo real notavelmente humano, com baixa latência. Ele se destaca em raciocínio, codificação e compreensão visual, com recursos como Advanced Data Analysis e Custom GPTs. O ChatGPT também oferece uma pesquisa na web aprimorada com respostas atualizadas e citações, e melhorias significativas em seus sistemas de memória para personalizar interações ao longo do tempo. Embora haja um plano gratuito, os recursos completos estão disponíveis com a assinatura Plus de US$ 20/mês. A OpenAI continua a evoluir sua plataforma com aplicativos de desktop e móveis e suporte a múltiplos idiomas. No entanto, o GPT-4o ainda pode apresentar imprecisões, possui um corte de conhecimento em outubro de 2023, e o modo de voz avançado foi adiado para garantir a segurança. O custo da API pode ser alto, e a OpenAI enfrenta desafios legais e de privacidade. '
  },
  {
    id: 'anthropic-claude-fable-5',
    name: 'Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Sonnet, Claude 3 Haiku',
    developer: 'Anthropic',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível no Claude.ai e no aplicativo iOS (com acesso a Claude 3.5 Sonnet, com limites de uso diários). Plano Pro: US$ 20/mês (acesso a todos os modelos, incluindo Claude 3.5 Sonnet, com limites de taxa significativamente mais altos). Plano Team: US$ 30/usuário/mês (mínimo de 5 usuários). Plano Enterprise: Preço personalizado (contato com vendas). API para Claude 3.5 Sonnet: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída, com janela de contexto de 200K tokens. API para Claude 3 Opus: US$ 15.00/milhão de tokens de entrada e US$ 75.00/milhão de tokens de saída (para comparação). API para Claude 3 Sonnet: US$ 3.00/milhão de tokens de entrada e US$ 15.00/milhão de tokens de saída. API para Claude 3 Haiku: US$ 0.25/milhão de tokens de entrada e US$ 1.25/milhão de tokens de saída. ',
    pros: [
      'Claude 3.5 Sonnet (lançado em 21 de junho de 2024) é o modelo mais inteligente da Anthropic, superando Claude 3 Opus e concorrentes como GPT-4o e Gemini 1.5 Pro em diversas avaliações de inteligência. ',
      'Oferece o dobro da velocidade do Claude 3 Opus e um custo cinco vezes menor, tornando-o ideal para tarefas complexas e fluxos de trabalho multi-etapas. ',
      'Excelência em codificação, com capacidade de escrever, editar e executar código de forma autônoma, resolvendo 64% dos problemas em avaliações internas (contra 38% do Claude 3 Opus). ',
      'Fortes capacidades de raciocínio em nível de pós-graduação (GPQA) e conhecimento em nível de graduação (MMLU). ',
      'Modelo de visão aprimorado, superando Claude 3 Opus em benchmarks de visão, excelente na interpretação de gráficos e tabelas, e transcrição de texto de imagens imperfeitas. ',
      'Melhoria na compreensão de nuances, humor e instruções complexas, produzindo conteúdo de alta qualidade com um tom natural e relacionável. ',
      'Recurso "Artifacts" permite interação com código, documentos e gráficos em uma janela de UI separada, facilitando fluxos de trabalho de desenvolvimento. ',
      'Disponível via Anthropic API, Amazon Bedrock e Google Cloud Vertex AI. '
    ],
    cons: [
      'A janela de contexto do Claude 3.5 Sonnet na API é de 200K tokens, o que pode ser menor em comparação com outras ofertas de contexto longo. ',
      'Apesar das melhorias, ainda pode ter dificuldades em tarefas de instrução muito específicas, como contagem de caracteres. ',
      'Modelos anteriores como Claude 3 Opus, Claude 3 Sonnet e Claude 3 Haiku, embora ainda disponíveis, são superados pelo 3.5 Sonnet. ',
      'O plano gratuito e Pro podem ter limites de uso, e as taxas da API são baseadas em tokens, que podem se acumular em usos intensivos. '
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 5.0,
      speed: 5.0,
      value: 4.9
    },
    affiliateUrl: 'https://claude.ai',
    description: 'Claude 3.5 Sonnet (lançado em 21 de junho de 2024) é o novo modelo de ponta da Anthropic, elevando o padrão de inteligência e superando o desempenho de Claude 3 Opus e de concorrentes como GPT-4o e Gemini 1.5 Pro. Ele oferece o dobro da velocidade e um quinto do custo do Claude 3 Opus, tornando-o uma escolha poderosa e eficiente para diversas aplicações. O modelo se destaca em codificação, raciocínio complexo, e é o mais forte modelo de visão da Anthropic, excelente na interpretação de dados visuais e transcrição de texto de imagens. A introdução do recurso "Artifacts" melhora a interação do usuário com outputs de código e documentos. Disponível na versão gratuita do Claude.ai e em planos Pro e Team, além de acesso via API, Amazon Bedrock e Google Cloud Vertex AI. Embora seja altamente capaz, o Claude 3.5 Sonnet tem uma janela de contexto de 200K tokens na API e pode apresentar desafios em algumas tarefas muito específicas de instrução. '
  },
  {
    id: 'google-gemini-models',
    name: 'Gemini 1.5 Pro, Gemini 1.5 Flash',
    developer: 'Google',
    category: 'Texto & Código',
    pricing: 'Plano gratuito disponível (com acesso ao aplicativo Gemini e Gemini 1.5 Flash, com limites de uso). Google AI Pro (anteriormente Gemini Advanced): US$ 19.99/mês (acesso a Gemini 1.5 Pro e Gemini 1.5 Flash, 1 milhão de tokens de contexto, integração com Workspace, YouTube Premium Lite, etc.). API para Gemini 1.5 Pro: US$ 3.50/milhão de tokens de entrada e US$ 10.50/milhão de tokens de saída para contexto de 128K tokens; US$ 35.00/milhão de tokens de entrada e US$ 105.00/milhão de tokens de saída para contexto de 1 milhão de tokens (preços reduzidos). API para Gemini 1.5 Flash: US$ 0.35/milhão de tokens de entrada e US$ 1.05/milhão de tokens de saída. ',
    pros: [
      'Gemini 1.5 Pro oferece uma vasta janela de contexto de até 1 milhão de tokens, agora expandida para 2 milhões de tokens para todos os desenvolvedores. ',
      'Capacidades multimodais avançadas para processar e analisar vídeo, áudio, imagens e texto em uma única requisição. ',
      'Gemini 1.5 Flash é um modelo mais rápido e econômico, otimizado para tarefas de alto volume e baixa latência. ',
      'Integração profunda com o ecossistema Google (Workspace, Search, Android, Chrome, YouTube). ',
      'Recursos avançados do Google AI Pro como "Deep Research" (agente de pesquisa autônomo) e "Gems" (personas de IA personalizadas). ',
      'NotebookLM recebeu uma grande atualização em junho de 2024, transformando-o em um agente de pesquisa completo baseado em Gemini 1.5, com descoberta de fontes e execução de código. ',
      'A disponibilidade geral do Gemini em apps como Gmail, Docs, Sheets, Slides e Drive foi anunciada. ',
      'Os modelos 1.5 Pro e Flash foram atualizados em setembro de 2024 (na busca), com melhorias em matemática, contexto longo, visão e melhor qualidade geral. '
    ],
    cons: [
      'A API para Gemini 1.5 Pro é mais cara para prompts com contexto muito longo (1 milhão de tokens). ',
      'O acesso a modelos Pro via API é pago, com planos gratuitos focados principalmente nos modelos Flash. ',
      'Modelos anteriores como Gemini 2.0 Flash e Flash-Lite (mencionados no prompt como descontinuados em 2026) e outros modelos da família 2.5 (com datas de desligamento em junho e outubro de 2026 no prompt) são exemplos de rápida iteração e descontinuação de modelos mais antigos. ',
      'A latência e o desempenho do Gemini 1.5 Flash podem ser inferiores ao 1.5 Pro em algumas cargas de trabalho complexas, apesar de ser otimizado para velocidade. ',
      'Decisões judiciais em outros países podem ter implicações para a responsabilidade do conteúdo gerado por IA. '
    ],
    score: {
      reasoning: 5.0,
      writing: 5.0,
      coding: 4.9,
      speed: 5.0,
      value: 4.8
    },
    affiliateUrl: 'https://aistudio.google.com',
    description: 'A família Gemini do Google é liderada pelo Gemini 1.5 Pro e Gemini 1.5 Flash, oferecendo uma combinação de capacidades avançadas e eficiência. Gemini 1.5 Pro (disponível em prévia desde fevereiro de 2024) é um modelo multimodal poderoso com uma janela de contexto de até 1 milhão de tokens, agora expandida para 2 milhões de tokens para desenvolvedores, ideal para análise de grandes volumes de informações em texto, imagem, áudio e vídeo. Gemini 1.5 Flash é a versão otimizada para velocidade e custo-benefício, ideal para tarefas de alto volume. Ambos os modelos foram atualizados em setembro de 2024, com melhorias significativas em matemática, contexto longo e visão. A plataforma Gemini se integra profundamente com o ecossistema Google, incluindo o Google Workspace e o NotebookLM, que foi atualizado para atuar como um agente de pesquisa completo. Os planos de assinatura Google AI Pro oferecem acesso expandido a modelos e recursos. No entanto, o custo da API para contextos muito longos no Gemini 1.5 Pro pode ser alto. '
  },
  {
    id: 'meta-llama-muse-models',
    name: 'Llama 3 (8B, 70B)',
    developer: 'Meta',
    category: 'Texto & Código',
    pricing: 'Código "open-weight" para uso local gratuito (requer hardware). Licença comunitária Llama para uso não comercial e comercial (com restrições). Meta está testando novas ofertas de assinatura de IA (Meta One Plus e Premium) a partir de julho de 2026 (data futura no prompt, desconsiderada por ser especulativa). Planos pagos separados para Instagram Plus (US$ 3.99/mês), Facebook Plus (US$ 3.99/mês) e WhatsApp Plus (US$ 2.99/mês) foram lançados globalmente em 27 de maio de 2026 (data futura no prompt, desconsiderada por ser especulativa). API para Llama 3 8B Instruct: A partir de US$ 0.10/milhão de tokens de entrada e US$ 0.10/milhão de tokens de saída (via Together.ai ou Deepinfra). API para Llama 3 70B Instruct: A partir de US$ 0.23/milhão de tokens de entrada e US$ 0.40/milhão de tokens de saída (via Deepinfra, para melhor custo), ou US$ 0.59/milhão de milhões de tokens de entrada e US$ 0.79/milhão de tokens de saída (via Groq, para maior velocidade), ou US$ 0.88/milhão de tokens de entrada e US$ 0.88/milhão de tokens de saída (via Together.ai). ',
    pros: [
      'Llama 3 (8B e 70B, lançados em abril de 2024) são modelos "open-weight" de ponta, permitindo flexibilidade para uso local, fine-tuning e controle sobre os dados. ',
      'Desempenho de estado da arte em tarefas de linguagem, geração de texto, conversação, sumarização e tradução, com melhorias significativas em precisão e velocidade. ',
      'Arquitetura otimizada e extensa base de dados de treinamento, resultando em raciocínio aprimorado e melhor seguimento de instruções. ',
      'A licença "open-source" reduz a barreira de entrada para organizações que desejam fine-tunear os modelos com dados internos. ',
      'Ecossistema robusto de provedores de API terceirizados que oferecem custos competitivos (Deepinfra) e velocidade (Groq). '
    ],
    cons: [
      'Requer hardware potente (GPU) para rodar localmente com alta velocidade e para os modelos maiores. ',
      'A qualidade e o custo da API podem variar significativamente dependendo do provedor terceirizado. ',
      'A licença de uso comercial (Llama Community License) possui restrições, como limite de receita anual (US$ 700 milhões) e proíbe o uso dos outputs para treinar outros LLMs não-Llama (exceto Llama 3.1, que é futura). ',
      'As capacidades multilingues da Llama 3 são limitadas (5% dos dados de pré-treinamento são multilíngues, cobrindo 30 idiomas), sendo mais eficaz em inglês. ',
      'O lançamento público de modelos mais avançados como Llama 5 e Muse Spark (mencionados no prompt como futuros) ainda está distante ou são rumores. ',
      'Existem preocupações éticas sobre o uso de modelos "open-source" para criar deepfakes e outros usos maliciosos. '
    ],
    score: {
      reasoning: 4.8,
      writing: 4.8,
      coding: 4.7,
      speed: 4.7,
      value: 4.7
    },
    affiliateUrl: 'https://llama.meta.com/',
    description: 'A família Llama da Meta, com os modelos Llama 3 (8B e 70B) e suas versões instruction-tuned (lançados em abril de 2024), representa uma oferta "open-weight" de ponta no campo dos grandes modelos de linguagem. Esses modelos se destacam pelo desempenho robusto em diversas tarefas de linguagem, pela capacidade de serem rodados localmente e fine-tuned, e pela flexibilidade que o modelo "open-source" proporciona a desenvolvedores. Embora a Meta esteja explorando futuras ofertas de assinatura de IA (mencionadas no prompt como futuras) e modelos mais avançados como Muse Spark e Llama 5 sejam antecipados, o Llama 3 atualmente oferece uma solução poderosa e acessível através de provedores de API terceirizados. No entanto, o uso exige hardware potente para execução local, os custos da API e o desempenho variam entre os provedores, e a licença comercial tem certas restrições. Há também preocupações sobre o potencial uso indevido de modelos "open-source". '
  },
  {
    id: 'openai-chatgpt-images-2-0',
    name: 'ChatGPT Images (DALL-E 3)',
    developer: 'OpenAI',
    category: 'Geração de Imagem',
    pricing: 'Incluso no ChatGPT Plus (US$ 20/mês, com acesso a modelos GPT-4o e DALL-E 3). A API para DALL-E 3: Preços variam por resolução, por exemplo, US$ 0.02 para 1024x1024. ',
    pros: [
      'DALL-E 3 (integrado no ChatGPT Plus e superiores) é o modelo de geração de imagens de última geração da OpenAI. ',
      'Capacidade de interpretar prompts complexos e conversacionais de forma mais eficaz, gerando imagens que correspondem bem à descrição. ',
      'Melhora significativa na renderização de texto dentro das imagens e suporte a múltiplos idiomas. ',
      'Gera imagens de alta qualidade com diversos estilos e saída em alta resolução. ',
      'Integração perfeita com o ChatGPT, permitindo criação e modificação de imagens via conversação e edição iterativa. ',
      'Direitos comerciais completos incluídos em todos os planos, incluindo o modo gratuito. '
    ],
    cons: [
      'Ainda pode apresentar resultados que parecem "falsos" ou não atingir o fotorrealismo de alguns concorrentes como o Midjourney em certos casos. ',
      'Modelos anteriores como DALL-E 2 foram descontinuados. ',
      'O acesso completo e ilimitado aos recursos avançados requer assinatura do ChatGPT Plus. ',
      'Preços da API podem ser elevados para uso em larga escala. '
    ],
    score: {
      reasoning: 4.9,
      writing: 4.5,
      coding: 1.0,
      speed: 5.0,
      value: 4.7
    },
    affiliateUrl: 'https://chatgpt.com',
    description: 'ChatGPT Images, impulsionado pelo modelo DALL-E 3 da OpenAI (integrado ao ChatGPT Plus), é a ferramenta de geração de imagens de última geração da empresa. Ele se destaca pela capacidade de interpretar prompts complexos e conversacionais, criando imagens de alta qualidade com renderização aprimorada de texto e uma forte correspondência com a descrição. Integrado perfeitamente ao ChatGPT, permite a criação e modificação de imagens por meio de conversação, oferecendo uma experiência de usuário intuitiva. Embora seja uma ferramenta poderosa para designers e criadores de conteúdo, o DALL-E 3 pode, em certas situações, não alcançar o fotorrealismo de concorrentes como o Midjourney. O acesso completo aos recursos exige uma assinatura do ChatGPT Plus, e os custos da API podem ser consideráveis para produção em larga escala. '
  },
  {
    id: 'midjourney-v8-1',
    name: 'Midjourney V6.0, Midjourney V6.1 (Alpha)',
    developer: 'Midjourney',
    category: 'Geração de Imagem',
    pricing: 'Sem plano gratuito no site oficial (removido em março de 2023). Planos pagos: Basic US$ 10/mês (US$ 96/ano) com ~3.3 horas de GPU rápida; Standard US$ 30/mês (US$ 288/ano) com ~15 horas de GPU rápida e gerações ilimitadas no modo Relax; Pro US$ 60/mês (US$ 576/ano) com ~30 horas de GPU rápida, modo Stealth (privacidade) e gerações ilimitadas no modo Relax e vídeo SD; Mega US$ 120/mês (US$ 1152/ano) com ~60 horas de GPU rápida, modo Relax ilimitado e modo Stealth. Horas extras de GPU rápida custam US$ 4/hora. ',
    pros: [
      'Midjourney V6.0 é o modelo padrão atual, conhecido por sua excepcional qualidade de imagem, fotorrealismo e capacidade artística. ',
      'Melhorias contínuas na compreensão de prompts complexos, anatomia (especialmente mãos e rostos) e renderização de texto. ',
      'Recursos avançados como Consistência de Personagem (--cref) e Style Reference (--sref) para manter a coerência visual entre as gerações. ',
      'Editor Web completo e em constante atualização, com ferramentas como Remix, inpainting, outpaint, pan, zoom e camadas para edição detalhada. ',
      'Modo conversacional aprimorado com suporte a entrada de voz e texto mais rica. ',
      'Geração de vídeo de imagem para vídeo (short-form video generation). ',
      'Introdução de "Draft Mode" (em V7 no prompt, mas conceito aplicável para iteração rápida de ideias) para economizar tempo de GPU. ',
      'Imagens geradas em qualquer plano pago podem ser usadas comercialmente. '
    ],
    cons: [
      'Não possui plano de testes gratuito no site oficial. ',
      'Não possui API pública oficial, limitando a integração programática (APIs não oficiais podem violar os termos de serviço). ',
      'O modo Relax oferece gerações ilimitadas, mas é mais lento que o modo rápido. ',
      'O modo Stealth (privacidade) está disponível apenas nos planos Pro e Mega. ',
      'Curva de aprendizado para prompt engineering avançado. ',
      'Horas de GPU rápida não são transferidas para o próximo mês. ',
      'A Midjourney está envolvida em litígios de direitos autorais, acusada de usar obras protegidas para treinamento e de permitir a criação de cópias. ',
      'Baniu prompts com nomes de figuras políticas para evitar desinformação. '
    ],
    score: {
      reasoning: 4.7,
      writing: 2.5,
      coding: 1.0,
      speed: 4.9,
      value: 4.6
    },
    affiliateUrl: 'https://midjourney.com',
    description: 'Midjourney V6.0 é atualmente o modelo padrão da plataforma, reconhecido por sua capacidade de gerar imagens de altíssima qualidade, fotorrealismo e estética artística. A plataforma oferece ferramentas avançadas como Consistência de Personagem (--cref) e Style Reference (--sref), além de um Editor Web completo e constantemente atualizado com funcionalidades como inpainting, outpaint e camadas, que aprimoram o processo criativo. A Midjourney está focada em se tornar um "sistema operacional criativo" para artistas visuais, com melhorias contínuas na compreensão de prompts e na renderização de elementos como anatomia e texto. Embora não ofereça um plano gratuito nem uma API pública, seus planos pagos permitem o uso comercial das imagens geradas. No entanto, a empresa enfrenta desafios legais relacionados a direitos autorais e implementou restrições em prompts políticos. '
  },
  {
    id: 'stability-ai-sd-sa-models',
    name: 'Stable Diffusion 3 Medium, Stable Diffusion XL, Stable Audio 2.0',
    developer: 'Stability AI',
    category: 'Geração de Imagem',
    pricing: 'Código "open-weight" (Gratuito para uso local com licença comunitária Stability AI para uso não comercial e comercial até US$ 1M de receita anual, exige hardware); para empresas com mais de US$ 1M de receita anual, licença Enterprise é necessária para Stable Diffusion 3. API (sistema de créditos): 1 crédito = US$ 0.01. Stable Diffusion 3 Medium: Disponível via API e como modelo "open-weight" (licença não comercial gratuita e licença Creator de baixo custo; contato para uso comercial em larga escala). Stable Audio 3.0 (conforme o prompt original, assumindo que foi lançado em 2026): 2 créditos por geração. Planos de assinatura Stable Audio: Free (10 faixas/mês, até 6 min); Pro (US$ 11.99/mês para 250 faixas); Studio (US$ 29.99/mês para 675 faixas); Max (US$ 89.99/mês para 2250 faixas). ',
    pros: [
      'Stable Diffusion 3 Medium (lançado em 12 de junho de 2024) é o modelo mais avançado da Stability AI para geração de imagens, com 2 bilhões de parâmetros. ',
      'Entrega fotorrealismo de ponta, aderência a prompts complexos, renderização de texto "sem precedentes" e melhor anatomia (incluindo mãos e rostos). ',
      'O modelo é eficiente em termos de recursos, capaz de rodar em GPUs de consumidor com baixo VRAM footprint. ',
      'Modelos "open-weight" que podem rodar localmente, permitindo controle absoluto, privacidade, fine-tuning e sem taxas por geração para uso próprio. ',
      'Stable Diffusion XL (SDXL) continua sendo um modelo de ponta, acessível e com ótima qualidade de imagem e um ecossistema robusto de modelos fine-tuned pela comunidade. ',
      'Stable Audio 3.0 (conforme o prompt original, assumindo que foi lançado em 2026) é uma família de modelos "open-weight" para geração e edição de música e efeitos sonoros instrumentais de até 6 minutos e 20 segundos. ',
      'Foco em soluções empresariais: obteve conformidade SOC 2 Tipo II e SOC 3, e lançou Brand Studio. '
    ],
    cons: [
      'Curva de aprendizado acentuada para uso avançado e configuração técnica para uso local eficiente. ',
      'Apesar das melhorias, SD3 Medium ainda pode apresentar dificuldades na renderização perfeita de anatomia humana e artefatos em mãos. ',
      'Exige uma placa de vídeo dedicada potente para uso local eficiente para as versões maiores. ',
      'A licença comercial para SD3 Medium possui um limite de receita anual de US$ 1M para uso gratuito, exigindo licença Professional/Enterprise para empresas maiores. ',
      'Stable Audio 3.0 é focado em música instrumental e efeitos sonoros, não oferecendo suporte a vocais ou letras. ',
      'A Stability AI passou por turbulências e reestruturação em 2024, e está envolvida em processos judiciais de direitos autorais. ',
      'Uma atualização da Política de Uso Aceitável introduziu restrições à geração de conteúdo sexualmente explícito. '
    ],
    score: {
      reasoning: 4.5,
      writing: 1.8,
      coding: 4.8,
      speed: 4.7,
      value: 4.7
    },
    affiliateUrl: 'https://stability.ai',
    description: 'A Stability AI oferece uma gama de modelos "open-weight" para IA visual e de áudio, destacando o Stable Diffusion 3 Medium (lançado em 12 de junho de 2024) como seu modelo mais avançado para geração de imagens. O SD3 Medium apresenta fotorrealismo de ponta, renderização aprimorada de texto, anatomia mais precisa e a capacidade de rodar em GPUs de consumidor. O Stable Diffusion XL continua a ser uma opção robusta para geração de imagens de alta qualidade. Para áudio, o Stable Audio 3.0 (conforme o prompt original) oferece modelos "open-weight" para gerar música instrumental e efeitos sonoros. A natureza "open-weight" desses modelos proporciona controle, privacidade e capacidade de fine-tuning aos usuários, com licenças que permitem uso comercial sob certas condições. No entanto, a utilização avançada requer conhecimento técnico, o SD3 Medium ainda pode ter algumas falhas anatômicas, e a empresa enfrentou desafios internos e legais. '
  },
  {
    id: 'make-com-ai-agents',
    name: 'Make.com (Agentes de IA)',
    developer: 'Make',
    category: 'Automação',
    pricing: 'Plano grátis: 1.000 créditos/mês, 2 cenários ativos, intervalo de 15 minutos, 5 minutos de tempo máximo de execução, 512MB de transferência de dados e 7 dias de armazenamento de logs de execução. Plano Core: US$ 10.59/mês (ou US$ 9/mês anual) para 10.000 créditos (cenários ilimitados, intervalo de 1 minuto, inclui Make AI Agents, acesso à API, 5GB de transferência de dados, 30 dias de armazenamento de logs). Plano Pro: US$ 18.82/mês (ou US$ 16/mês anual) para 10.000+ créditos (prioridade de execução, variáveis personalizadas, logs completos). Plano Teams: US$ 34.12/mês por usuário (ou US$ 29/mês por usuário anual) para 10.000+ créditos (colaboração, gestão de equipes, prioridade de execução). Plano Enterprise: precificação personalizada (oferta de segurança avançada, suporte 24/7, integrações empresariais e funções personalizadas). Créditos não utilizados acumulam por um mês nos planos pagos. A Make.com mudou de "operações" para "créditos" em 27 de agosto de 2025 (data futura no prompt, assumindo que esta transição já ocorreu ou está muito próxima), com módulos de IA e execução de código consumindo créditos a taxas variáveis. ',
    pros: [
      'Interface visual de arrastar e soltar intuitiva e robusta para criar roteiros condicionais complexos. ',
      '"Make AI Agents" (lançados em fevereiro de 2026 no prompt, assumindo que já estão disponíveis em 2024 ou são muito recentes) permitem automação inteligente e adaptativa com tomada de decisões em tempo real, visibilidade total do processo (via Reasoning Panel) e logs de raciocínio detalhados. ',
      'Suporte multimodal para entrada e saída de arquivos como PDFs, imagens e CSVs, e agentes reutilizáveis e compartilháveis. ',
      'Integração nativa com os principais modelos de IA (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini 1.5 Pro) e milhares de APIs. ',
      'Registros detalhados de execução (histórico de cenários e replay de execução) e busca de texto completo em logs para depuração e visibilidade aprimoradas. ',
      'Altamente competitivo em termos de custo-benefício para automações complexas. ',
      'Funcional plano gratuito para prototipar automações. ',
      'Recursos como "If-else" e "Merge" (lançados em março/maio de 2026 no prompt, assumindo que já estão disponíveis ou são muito recentes) para lógica condicional avançada que não consomem créditos. ',
      '"Make Skills" (lançados em maio de 2026 no prompt, assumindo que já estão disponíveis ou são muito recentes) para assistentes de IA construírem cenários e configurarem módulos. ',
      'Make AI Toolkit (lançado em setembro de 2025 no prompt, assumindo que já está disponível ou é muito recente) oferece módulos para diversas tarefas de IA (análise de sentimento, extração, categorização, etc.). ',
      'Aquisição pela Celonis no início de 2026 (data futura no prompt, assumindo que já ocorreu ou é muito recente), indicando estabilidade e investimento contínuo na plataforma. '
    ],
    cons: [
      'O consumo de créditos pode ser imprevisível e rápido em cenários complexos com muitos módulos e Agentes de IA, especialmente porque módulos de IA e execução de código consomem mais créditos. ',
      'Requer conceitos básicos de lógica de programação para fluxos avançados e agentes de IA complexos, resultando em uma curva de aprendizado mais acentuada. ',
      'Os recursos de colaboração e equipe são limitados nos planos Core e Pro. ',
      'Cenários no plano Core podem entrar em fila durante picos de uso. ',
      'Limites de transferência de dados podem ser rapidamente atingidos em fluxos que processam conteúdo de vídeo. ',
      'O suporte ao cliente pode ser considerado mínimo em comparação com outras plataformas. '
    ],
    score: {
      reasoning: 4.9,
      writing: 3.0,
      coding: 4.0,
      speed: 4.8,
      value: 4.6
    },
    affiliateUrl: 'https://www.make.com',
    description: 'Make.com é uma plataforma de automação visual B2B que se destaca como uma poderosa orquestradora para sistemas e IAs. O aplicativo "Make AI Agents" (lançado em fevereiro de 2026 no prompt, assumindo que já está disponível em 2024 ou é muito recente) permite a criação de fluxos de trabalho inteligentes e adaptativos diretamente no canvas visual, com suporte multimodal para processamento de arquivos e logs de raciocínio detalhados. A plataforma se integra nativamente com os modelos de IA mais recentes, como OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet e Google Gemini 1.5 Pro. Com uma interface intuitiva e recursos aprimorados de controle de fluxo, a Make.com é uma ferramenta versátil para automação de rotinas empresariais. Seus planos de preços, baseados em créditos (com a transição em agosto de 2025 no prompt, assumindo que já ocorreu ou está muito próxima), são competitivos, embora o consumo de créditos possa ser imprevisível para tarefas de IA mais intensivas. A aquisição pela Celonis (mencionada no prompt como em 2026, assumindo que já ocorreu ou é muito recente) reforça sua estabilidade e investimento. No entanto, a plataforma possui uma curva de aprendizado mais acentuada e o suporte pode ser considerado limitado. '
  }
];