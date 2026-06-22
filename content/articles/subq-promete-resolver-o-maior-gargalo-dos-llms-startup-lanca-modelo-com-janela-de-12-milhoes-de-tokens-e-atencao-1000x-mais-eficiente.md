---
title: "SubQ Promete Resolver o Maior Gargalo dos LLMs: Startup Lança Modelo com Janela de 12 Milhões de Tokens e Atenção 1.000x Mais Eficiente"
description: "A Subquadratic lança o SubQ, primeiro LLM com arquitetura totalmente subquadrática: 12 milhões de tokens, compute 1.000x menor e benchmarks verificados por"
category: noticias
tags:
  - LLMs
  - Modelos de IA
  - Atenção Esparsa
  - Janela de Contexto
  - Startups de IA
author: Redação Turbina IA
isFeatured: false
date: "2026-06-22"
coverImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NTg1Mzd8MHwxfHNlYXJjaHwxfHxTdWJRJTIwUHJvbWV0ZSUyMFJlc29sdmVyJTIwbyUyME1haW9yJTIwR2FyZ2FsbyUyMGRvcyUyMExMTXMlM0ElMjBTdGFydHVwJTIwTGFuJUMzJUE3YSUyME1vZGVsbyUyMGNvbSUyMEphbmVsYSUyMGRlJTIwMTIlMjBNaWxoJUMzJUI1ZXMlMjBkZSUyMFRva2VucyUyMGUlMjBBdGVuJUMzJUE3JUMzJUEzbyUyMDEuMDAweCUyME1haXMlMjBFZmljaWVudGUlMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwwfDB8fHwxNzgyMTQwOTA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
---

No dia 5 de maio de 2026, uma startup sediada em Miami chamada Subquadratic saiu do modo *stealth* com uma afirmação extraordinária: havia resolvido, matematicamente, o principal gargalo que limita os modelos de linguagem de grande escala há quase uma década. O modelo, batizado de SubQ 1M-Preview, não apenas amplia a janela de contexto — ele propõe reescrever a física computacional por trás de como a atenção em LLMs funciona. A declaração gerou fascínio e ceticismo em proporções iguais. Um mês depois, com avaliações conduzidas por terceiros publicadas, o debate ficou substancialmente mais sério.

> **Resposta Rápida (TL;DR):** A Subquadratic lançou o SubQ, o primeiro LLM comercial com arquitetura totalmente subquadrática, capaz de processar até 12 milhões de tokens com um consumo de *compute* de atenção quase 1.000 vezes menor do que modelos tradicionais em janelas equivalentes. Os resultados iniciais, verificados de forma independente pela empresa Appen, mostram desempenho competitivo com Claude Opus e GPT nos principais benchmarks de raciocínio de longo contexto. A empresa captou US$ 29 milhões em rodada *seed* e lançou três produtos em beta privado: uma API, um agente de programação (SubQ Code) e uma ferramenta de busca (SubQ Search).

## O Gargalo Quadrático: Por Que os LLMs Têm um Teto

Para compreender o que a Subquadratic afirma ter feito, é preciso entender por que os LLMs atuais são tão caros — e por que essa conta piora de forma explosiva com textos mais longos.

O mecanismo central dos transformers modernos é chamado de **atenção densa**. Quando um modelo processa um texto, ele precisa comparar cada fragmento — chamado de [token](/glossario) — com todos os demais tokens do mesmo texto. Se um documento tem 10.000 palavras, isso gera dezenas de milhões de multiplicações individuais. O problema é estrutural: ao dobrar o tamanho do texto, o número de comparações não dobra — ele quadruplica. Esse fenômeno, conhecido como **escalonamento quadrático**, é a raiz de por que os LLMs são notórios consumidores de energia e por que janelas de contexto muito grandes continuam inacessíveis na prática.

O [MIT Technology Review](https://www.technologyreview.com/2026/06/19/1139313/a-startup-claims-it-broke-through-a-bottleneck-thats-holding-back-llms/) explica com uma analogia visual: imagine um círculo com pontos marcados em sua borda, onde cada ponto representa um token. Linhas conectando cada par de pontos representam as multiplicações necessárias. Com 5 pontos, há 10 linhas. Com 20, há 190. Com 1.000 pontos, aproximam-se de 500.000 combinações. O crescimento é implacável.

Na prática, isso levou toda a indústria a construir *workarounds*. Sistemas de Recuperação Aumentada de Geração (RAG), estratégias de *chunking* de documentos, engenharia de prompt refinada — todas são adaptações ao limite, não soluções para ele. "Desenvolvedores e investidores gastam mais tempo e dinheiro em contornos do que no problema em si", afirma [a própria Subquadratic no seu blog oficial](https://subq.ai/introducing-subq). "A raiz do escalonamento nunca mudou."


![Imagem ilustrativa sobre SubQ Promete Resolver o Maior Gargalo dos LLMs: Startup Lança Modelo com Janela de 12 Milhões de Tokens e Aten](https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80)

## A Solução: Atenção Esparsa com Escalonamento Linear

A resposta da Subquadratic é o que a empresa chama de **atenção esparsa subquadrática** (SSA, na sigla em inglês). Em vez de comparar cada token com todos os outros, o modelo é treinado para identificar apenas as relações relevantes e descartar as redundantes. O resultado é um escalonamento linear: dobrar o tamanho do texto exige apenas o dobro de processamento — não o quádruplo.

"Somos muito focados no problema de como transitamos de uma arquitetura de atenção densa e escalonamento quadrático para uma de atenção esparsa e arquitetura linear", explicou Justin Dangel, CEO da empresa, em entrevista ao [SiliconAngle](https://siliconangle.com/2026/05/05/subquadratic-launches-29m-bring-12m-token-context-windows-ai/). O CTO Alexander Whedon complementou: "Se você dobrar o tamanho da entrada com escalonamento quadrático, precisa de quatro vezes mais *compute*; com escalonamento linear, precisa de apenas duas vezes."

A diferença parece modesta no papel. Em contextos de 128.000 tokens — o padrão da indústria —, o SubQ é cerca de 7,2 vezes mais rápido. Em 1 milhão de tokens, esse ganho sobe para mais de 52 vezes. E na janela de 12 milhões de tokens — o resultado de pesquisa da empresa —, a arquitetura reduz o *compute* de atenção em **quase 1.000 vezes** em comparação com modelos de fronteira tradicionais, segundo dados publicados pela Subquadratic.

É importante contextualizar: a ideia de atenção subquadrática não é nova. Mecanismos como Mamba, atenção linear e modelos de espaço de estados (SSMs) já eram objeto de pesquisa acadêmica intensa. "O problema não resolvido não era a ideia. Era construir uma arquitetura subquadrática que não sacrificasse o desempenho de fronteira para chegar lá", registra o blog da empresa. "Foi isso que levou tempo." A equipe de pesquisa inclui doutores e pesquisadores com passagem por Meta, Google DeepMind, Oxford, BYU, ByteDance, Adobe e Cambridge.

## Os Benchmarks: Dados Verificados por Terceiros

O lançamento de maio gerou ceticismo imediato porque os dados eram majoritariamente autorreferenciados e o modelo não estava disponível para testes públicos. Em junho, a Subquadratic respondeu publicando avaliações conduzidas pela Appen, empresa especializada em avaliação de modelos de IA.

"Foi realmente emocionante para mim — validou a arquitetura deles", disse Jeanine Sinadan-Singh, diretora de pesquisa em IA generativa da Appen, ao [MIT Technology Review](https://www.technologyreview.com/2026/06/19/1139313/a-startup-claims-it-broke-through-a-bottleneck-thats-holding-back-llms/). "Mas quando você tem resultados chocantes, não é tão crível quando você mesmo os divulga."

Os números verificados mostram o seguinte quadro comparativo:

| Benchmark | SubQ 1M-Preview | Claude Opus | GPT 5.5 | [Gemini](/blog/prompts-para-gemini) 3.1 Pro |
|---|---|---|---|---|
| RULER 128K (acurácia) | **95,6%** | 94,8% (Opus 4.6) | — | — |
| MRCR v2 — produção (verificado) | 65,9 | 32,2 (Opus 4.7) | **74,0** | 26,3 |
| MRCR v2 — pesquisa (não verificado) | **83** | 32,2 | 74,0 | 26,3 |
| SWE-Bench Verified | **81,8** | 80,8 (Opus 4.6) | — | — |
| Custo no RULER 128K | **US$ 8** | ~US$ 2.600 | — | — |

*Fontes: [Subquadratic](https://subq.ai/introducing-subq) e [SiliconAngle](https://siliconangle.com/2026/05/05/subquadratic-launches-29m-bring-12m-token-context-windows-ai/). DeepSeek 4.0 Pro marcou 80,0 no SWE-Bench Verified.*

Uma nuance importante na tabela: no MRCR v2 — benchmark que testa a capacidade de recuperar e raciocinar sobre múltiplas informações dispersas em contextos longos —, o modelo de **produção** do SubQ (65,9, terceirizado e verificado) fica abaixo do GPT 5.5 (74). O resultado de 83 é do modelo de pesquisa ainda não verificado de forma independente. A Subquadratic apresenta esse número com a devida ressalva, mas é exatamente o tipo de distinção que analistas exigirão antes de qualquer endosso.

Onde os números são mais expressivos é no custo. Tanto a Subquadratic quanto o SiliconAngle confirmam que no benchmark RULER 128K, o SubQ custou **US$ 8** para rodar, contra aproximadamente **US$ 2.600** do Claude Opus — uma redução de cerca de 300 vezes. Para quem usa a [Calculadora de Custos](/calculadora) do Turbina IA para dimensionar projetos com contextos longos, esse diferencial muda completamente a equação de viabilidade de aplicações como análise de contratos extensos ou revisão de repositórios inteiros de código.

No nível de arquitetura, a comparação com o FlashAttention — a implementação de atenção otimizada mais usada em produção hoje — é ainda mais dramática: a atenção esparsa do SubQ é **52 vezes mais rápida** e requer **63% menos *compute*** na mesma operação, conforme publicado pela empresa.


![Imagem ilustrativa sobre SubQ Promete Resolver o Maior Gargalo dos LLMs: Startup Lança Modelo com Janela de 12 Milhões de Tokens e Aten](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80)

## Os Três Produtos em Beta

Junto com o modelo, a Subquadratic lançou três produtos em beta privado, todos disponíveis via solicitação no site oficial:

**SubQ API:** Interface de programação com acesso ao contexto completo, voltada para desenvolvedores e equipes enterprise que precisam processar grandes volumes de dados em uma única chamada — sem fragmentação ou RAG intermediário.

**SubQ Code:** Agente de programação via linha de comando (CLI). A proposta difere de ferramentas convencionais: em vez de dividir o repositório em pedaços para análise fragmentada, o SubQ Code carrega a base de código inteira em uma única janela de contexto. Isso elimina a necessidade de sistemas multi-agente e o *overhead* de coordenação que os acompanha.

**SubQ Search:** Ferramenta de busca de longo contexto com capacidades de *Deep Research*. A ideia é entregar pesquisa aprofundada sobre múltiplos documentos com velocidade próxima à de um chatbot convencional.

## O Ceticismo: "IA Theranos" ou Revolução Real?

A reação da comunidade técnica ao anúncio de maio foi de desconfiança estrutural. Dan McAteer, engenheiro de IA, capturou bem o clima geral em publicação no X, citada pelo [MIT Technology Review](https://www.technologyreview.com/2026/06/19/1139313/a-startup-claims-it-broke-through-a-bottleneck-thats-holding-back-llms/): *"SubQ é ou o maior avanço desde o Transformer… ou é IA Theranos."*

A crítica tinha base metodológica. Como apontou o [Tecnoblog](https://tecnoblog.net/noticias/startup-afirma-que-sua-ia-e-mil-vezes-mais-leve-que-o-chatgpt/) em sua análise, os benchmarks escolhidos pareciam selecionados para favorecer o método de atenção esparsa — engenharia de software e localização de dados em documentos longos são exatamente os casos onde SSA tem vantagem natural. Avaliações de inteligência geral — resolução de problemas matemáticos, fluência multilíngue, raciocínio abstrato, segurança — estavam ausentes. Adicionalmente, alguns testes foram executados apenas uma vez, eliminando qualquer margem estatística.

Nos fóruns especializados, emergiu a comparação com a Magic.dev — startup que em 2024 prometeu avanços similares em janelas de contexto gigantes, mas que até hoje não obteve adoção prática no mercado. O CTO Whedon reconheceu o erro de comunicação: "Retrospectivamente, publicar os benchmarks de terceiros junto com o anúncio inicial teria evitado muito do ceticismo", disse ao MIT Technology Review.

A ausência de um *paper* técnico revisado por pares continua sendo o ponto de pressão da comunidade científica. A empresa prometeu publicar um relatório completo "em breve" — promessa feita em maio e ainda pendente no momento de publicação deste artigo.

## Quem Financia e Quem Acredita

A Subquadratic captou **US$ 29 milhões em rodada *seed*** antes do lançamento público, conforme confirmado pelo [SiliconAngle](https://siliconangle.com/2026/05/05/subquadratic-launches-29m-bring-12m-token-context-windows-ai/). O [The New Stack](https://thenewstack.io/subquadratic-12-million-context-window/) reportou que entre os investidores estão a própria OpenAI e a Anthropic — detalhe que, se verdadeiro, representaria um endosso extraordinariamente incomum: as maiores empresas do setor apostando numa startup que afirma tornar obsoleta a arquitetura sobre a qual seus próprios modelos foram construídos.

"Esperamos estar dando início a uma nova era de eficiência", disse Dangel ao MIT Technology Review. "Não achamos que ninguém vai continuar construindo em cima de transformers daqui a alguns anos."

## O Que Está em Jogo

Mesmo com as ressalvas legítimas, o problema que a Subquadratic ataca é real e amplamente reconhecido. Um LLM genuinamente eficiente em contextos longos tornaria obsoleta uma camada inteira de engenharia de sistemas: pipelines RAG complexos, orquestradores multi-agente, estratégias de *chunking* — toda a infraestrutura que existe não por ser a melhor solução, mas porque enviar contexto completo aos modelos atuais é inviável. Se o SubQ entregar o que promete em produção e em avaliações mais amplas, o [Comparador de IAs](/comparador) do Turbina IA terá um novo competidor de peso para monitorar nos próximos ciclos de atualização.

O número mais revelador até agora permanece o MRCR v2: 65,9 do SubQ em produção contra 32,2 do [Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) Opus 4.7 e 26,3 do Gemini 3.1 Pro. MRCR v2 é considerado um proxy mais próximo de aplicações reais do que benchmarks de recuperação pura. O GPT 5.5 com 74 ainda supera o modelo de produção do SubQ nessa métrica — mas o resultado de pesquisa de 83 (não verificado de forma independente) sugere que há espaço para avanço entre *preview* e produção plena.

A pergunta que o relatório técnico prometido precisará responder é se os ganhos de eficiência se mantêm em tarefas de raciocínio complexo, geração criativa e múltiplos idiomas. Até lá, como sintetizou o MIT Technology Review, "o SubQ não vai substituir os modelos de topo existentes em todas as frentes, mas pode oferecer enormes ganhos de velocidade a uma fração do custo típico para certas tarefas". Em um setor onde custo e latência são barreiras de adoção reais, isso pode ser suficiente para uma posição de mercado relevante — mesmo que a revolução completa ainda precise de mais evidências.

## Perguntas Frequentes

**O que é a janela de contexto de um LLM e por que 12 milhões de tokens é relevante?**
A janela de contexto é o limite de texto que um modelo consegue processar de uma vez, incluindo pergunta e histórico da conversa. Os modelos de fronteira atuais operam até 1 milhão de tokens (cerca de 750.000 palavras). Os 12 milhões do SubQ equivalem a aproximadamente 120 livros lidos simultaneamente — viabilizando análise de repositórios de código completos, contratos jurídicos extensos e corpora de pesquisa sem fragmentação. Veja mais sobre termos técnicos no [Glossário de IA](/glossario).

**O que diferencia o SubQ dos outros modelos com janelas de contexto longas?**
A maioria dos modelos com janelas extensas (como os atuais Claude e Gemini) mantém arquitetura de atenção densa com escalonamento quadrático — o que torna o uso de janelas muito grandes computacionalmente proibitivo e caro na prática. O SubQ usa atenção esparsa com escalonamento linear, o que significa que o custo cresce proporcionalmente ao tamanho do contexto, não de forma explosiva.

**O SubQ já está disponível para o público geral?**
Não. No lançamento de maio de 2026, a Subquadratic abriu acesso apenas via **beta privado** para desenvolvedores e equipes enterprise interessados na API, no SubQ Code e no SubQ Search. Não há previsão de disponibilidade ampla divulgada até a data de publicação deste artigo.

## Fontes e Referências

- [Subquadratic — Introducing SubQ: The First Fully Subquadratic LLM Product](https://subq.ai/introducing-subq)
- [A startup claims it broke through a bottleneck that's holding back LLMs — MIT Technology Review](https://www.technologyreview.com/2026/06/19/1139313/a-startup-claims-it-broke-through-a-bottleneck-thats-holding-back-llms/)
- [Subquadratic launches with $29M to bring 12M-token context windows to AI — SiliconAngle](https://siliconangle.com/2026/05/05/subquadratic-launches-29m-bring-12m-token-context-windows-ai/)
- [The context window has been shattered: Subquadratic debuts a 12-million-token window — The New Stack](https://thenewstack.io/subquadratic-12-million-context-window/)
- [Startup diz ter criado IA mil vezes mais leve que o ChatGPT — Tecnoblog](https://tecnoblog.net/noticias/startup-afirma-que-sua-ia-e-mil-vezes-mais-leve-que-o-chatgpt/)