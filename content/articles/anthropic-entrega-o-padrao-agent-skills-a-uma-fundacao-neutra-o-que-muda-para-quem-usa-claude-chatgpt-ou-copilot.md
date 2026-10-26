---
title: "Anthropic Entrega o Padrão Agent Skills a uma Fundação Neutra: O Que Muda Para Quem Usa Claude, ChatGPT ou Copilot"
seoTitle: "Agent Skills: Anthropic doa padrão à Agentic AI Foundation"
description: "Anthropic doou o Agent Skills à Agentic AI Foundation, braço da Linux Foundation. Entenda o que muda para quem cria ou instala skills em mais de 70"
category: noticias
tags:
  - Anthropic
  - Agent Skills
  - Linux Foundation
  - Agentes de IA
author: Redação Turbina IA
isFeatured: false
date: "2026-10-26"
coverImage: "https://images.unsplash.com/photo-1680474569854-81216b34417a?auto=format&fit=crop&w=1200&q=80"
---

Em 22 de outubro, a Anthropic transferiu o nome, a logo, a organização no GitHub e o domínio agentskills.io do Agent Skills para fora de sua própria guarda. O destino foi a [Agentic AI Foundation (AAIF)](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation), um fundo dirigido dentro da Linux Foundation que a própria Anthropic ajudou a criar em dezembro de 2025, junto com Block e OpenAI.

> **Resposta Rápida (TL;DR):** A Anthropic doou o padrão Agent Skills — usado por Claude, ChatGPT, Cursor, GitHub Copilot e mais de 70 plataformas — à Agentic AI Foundation, braço neutro da Linux Foundation. O formato dos arquivos de skill não muda, nada quebra para quem já usa, e a manutenção passa a ser feita por engenheiros de várias empresas em caráter individual, com David Soria Parra e Mahesh Murag como mantenedores principais.

Quem já usa Agent Skills no dia a dia não precisa fazer nada. Segundo o [anúncio oficial da Anthropic](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation), o formato do arquivo continua exatamente o mesmo: uma pasta com um `SKILL.md` e, quando necessário, scripts e material de referência que um agente de IA consulta para executar uma tarefa com mais precisão. O que muda é quem decide o futuro desse formato.

## De recurso interno do Claude Code a padrão de mercado

O Agent Skills nasceu como um jeito de dar conhecimento procedural ao Claude Code — basicamente, ensinar o agente a fazer algo específico sem precisar reescrever o prompt do zero a cada conversa. A Anthropic abriu o padrão publicamente em dezembro de 2025, publicando a especificação e um SDK de referência em agentskills.io, como mostrou a [VentureBeat](https://venturebeat.com/ai/anthropic-launches-enterprise-agent-skills-and-opens-the-standard) na época.

A adoção veio rápido. De acordo com a Anthropic, mais de 70 plataformas de agentes já integraram o padrão, incluindo [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026), Cursor, GitHub Copilot e o VS Code — ou seja, concorrentes diretos da própria Anthropic passaram a rodar skills escritas no mesmo formato que o Claude usa. Esse é o tipo de tração que normalmente levanta uma pergunta incômoda: um padrão tão usado deveria continuar sob o controle de uma única empresa?

A resposta da Anthropic foi não. "Comprometida em manter o Agent Skills aberto, orientado pela comunidade e neutro em relação a fornecedores" é como a empresa descreve a decisão no anúncio, e a lógica se encaixa em um movimento que ela já tinha começado: em [dezembro de 2025, a Anthropic doou o Model Context Protocol (MCP) para a mesma AAIF](https://anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), ao lado do framework goose, da Block, e do AGENTS.md, da OpenAI — três projetos fundadores que deram início ao fundo.


![Imagem ilustrativa sobre Anthropic Entrega o Padrão Agent Skills a uma Fundação Neutra: O Que Muda Para Quem Usa Claude, ChatGPT ou Cop](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80)

## O que é, de fato, a Agentic AI Foundation

A AAIF não é uma empresa nem um consórcio de acionistas — é um fundo dirigido dentro da Linux Foundation, estrutura que já hospeda projetos como o Kubernetes. Fundada por Anthropic, Block e OpenAI, ela conta com apoio declarado de [Google, Microsoft, Amazon Web Services, Cloudflare e Bloomberg](https://anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), nomes que concorrem entre si diariamente, mas que têm interesse comum em evitar que um único fornecedor controle os protocolos que conectam agentes de IA a ferramentas e dados.

É um desenho que já apareceu antes em outras guerras de padrões da computação — de HTML a Kubernetes — e que a indústria de IA está tentando repetir antes que a fragmentação vire o problema. Como resumiu a [InfoQ](https://infoq.com/news/2025/12/agentic-ai-foundation/) na cobertura do lançamento da fundação, a proposta é oferecer "uma organização neutra" para sustentar tecnologias agênticas de código aberto no longo prazo, sem depender da boa vontade de uma empresa isolada.

Com a chegada do Agent Skills, a AAIF passa a abrigar quatro frentes: MCP, goose, AGENTS.md e agora Skills. Cada um resolve uma parte diferente do mesmo problema — como um agente de IA descobre o que pode fazer, com o que pode se conectar e como deve se comportar — e manter os quatro sob o mesmo guarda-chuva institucional reduz a chance de cada fornecedor inventar sua própria versão incompatível.

## Quem passa a cuidar do padrão

Pela própria natureza da doação, a Anthropic abre mão de controle unilateral. Segundo o anúncio, engenheiros de Anthropic, Google, OpenAI e outras empresas vão manter o Agent Skills em caráter individual — não como representantes institucionais de seus empregadores —, com David Soria Parra e Mahesh Murag atuando como mantenedores principais (Lead Maintainers).

Soria Parra já era uma cara conhecida nesse tipo de governança: ele é um dos criadores do MCP na Anthropic e liderou a direção técnica e o ecossistema do protocolo antes da doação à AAIF. Murag, por sua vez, é um dos criadores do próprio Agent Skills dentro da Anthropic — ele e o colega Barry Zhang assinaram o guia de engenharia da empresa sobre como escrever skills eficazes.

O roteiro anunciado para os próximos passos inclui lançamentos versionados do padrão, um processo formal de propostas de mudança (para que qualquer desenvolvedor possa sugerir alterações à especificação) e diretrizes de segurança voltadas a quem escreve e instala skills de terceiros — um ponto sensível, já que uma skill mal projetada pode, em tese, instruir um agente a executar ações indesejadas. Quem quiser acompanhar ou opinar sobre essas mudanças pode participar pelo Discord do projeto ou acompanhar a discussão no [repositório oficial e em agentskills.io](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation).


![Imagem ilustrativa sobre Anthropic Entrega o Padrão Agent Skills a uma Fundação Neutra: O Que Muda Para Quem Usa Claude, ChatGPT ou Cop](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

## Por que isso importa para quem só usa a ferramenta

Para o desenvolvedor brasileiro que já escreve skills para o Claude Code ou para qualquer outro agente compatível, a doação não exige nenhuma ação imediata — as skills existentes continuam funcionando sem alteração. O que muda é a garantia institucional: decisões futuras sobre o formato não dependem mais exclusivamente dos planos de produto da Anthropic, e sim de um processo com participação de múltiplas empresas e da comunidade.

Isso tem um paralelo direto com ferramentas de produtividade com IA que você provavelmente já usa. Se você explora diferentes assistentes no [Comparador de IAs](/comparador) do Turbina IA, vai notar que cada vez mais produtos de categorias distintas — do Claude ao Copilot — compartilham a mesma camada de extensibilidade por baixo do capô. Isso reduz o risco de ficar "preso" a um fornecedor: uma skill escrita hoje para o Claude tem chance real de funcionar, com ajustes mínimos, em outro agente compatível no futuro.

Também é um recado indireto para quem lida com [prompts e automações no dia a dia](/prompts): a tendência da indústria é migrar conhecimento reutilizável — instruções, scripts, contexto — para formatos padronizados como o Agent Skills, em vez de depender de prompts soltos reescritos a cada sessão. Quem já organiza seu fluxo de trabalho dessa forma sai na frente quando o padrão muda de mãos, porque a lógica por trás da skill continua valendo independentemente de qual empresa administra a especificação.

## O pano de fundo: por que empresas rivais cedem controle

Doar um padrão de sucesso para uma fundação neutra custa controle, mas compra confiança — e confiança é moeda escassa num mercado onde cada laboratório de IA compete abertamente pelos mesmos desenvolvedores. A Google, a Microsoft e a própria OpenAI têm motivo concreto para apoiar a AAIF: nenhuma delas quer construir produtos sobre uma fundação técnica que pode ser alterada unilateralmente por um concorrente a qualquer momento.

Esse cálculo não é exclusivo da IA. A doação do MCP à AAIF em dezembro já tinha sido lida pela imprensa especializada como parte de um padrão deliberado da Anthropic — como observou a cobertura da época, a empresa vem "construindo infraestrutura de indústria" em vez de apenas lançar produtos fechados. A chegada do Agent Skills ao mesmo guarda-chuva reforça essa leitura: trata-se de consolidar uma camada de infraestrutura compartilhada antes que ela se fragmente em versões incompatíveis — o mesmo problema que motivou a criação de fundações neutras em ciclos anteriores da computação.

Para desenvolvedores, o efeito prático é poder escrever instruções reutilizáveis uma vez e levá-las a vários assistentes. Os [prompts para programação](/blog/prompts-para-programacao) trazem um modelo para gerar o arquivo de instruções de um agente de código (CLAUDE.md ou AGENTS.md), que segue a mesma lógica.

## Perguntas Frequentes

### O que exatamente a Anthropic doou para a Agentic AI Foundation?

O nome e a logo do Agent Skills, a organização do projeto no GitHub e o domínio agentskills.io. A especificação técnica do padrão passa a ser mantida sob governança da fundação, não mais exclusivamente pela Anthropic.

### Minhas skills existentes vão parar de funcionar?

Não. O [anúncio da Anthropic](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) confirma que o formato do arquivo não muda, então skills já escritas continuam funcionando normalmente em qualquer plataforma compatível, sem necessidade de atualização.

### A Agentic AI Foundation só cuida do Agent Skills?

Não. Além do Agent Skills, a fundação já abriga o Model Context Protocol (doado pela Anthropic em dezembro de 2025), o framework goose (da Block) e o AGENTS.md (da OpenAI), todos sob a mesma estrutura de governança neutra dentro da Linux Foundation.

## Fontes e Referências

- [Donating Agent Skills to the Agentic AI Foundation](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation)
- [Donating the Model Context Protocol and establishing the Agentic AI Foundation](https://anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)
- [Anthropic launches enterprise Agent Skills and opens the standard](https://venturebeat.com/ai/anthropic-launches-enterprise-agent-skills-and-opens-the-standard)
- [Linux Foundation launches Agentic AI Foundation to drive open agent standards](https://infoq.com/news/2025/12/agentic-ai-foundation/)