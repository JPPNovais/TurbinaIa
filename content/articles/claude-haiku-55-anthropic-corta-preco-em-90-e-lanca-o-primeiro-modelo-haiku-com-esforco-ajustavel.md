---
title: "Claude Haiku 5.5: Anthropic Corta Preço em 90% e Lança o Primeiro Modelo Haiku com Esforço Ajustável"
description: "Anthropic lança o Claude Haiku 5.5 com corte de até 90% no preço da API, 1 milhão de tokens de contexto e cinco níveis de esforço. Veja os números."
category: noticias
tags:
  - Anthropic
  - Claude Haiku 5.5
  - Preços de IA
author: Redação Turbina IA
isFeatured: false
date: "2026-10-11"
coverImage: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=1200&q=80"
---

Um milhão de tokens de entrada no Claude Haiku 5.5 custa US$ 0,10. Há duas semanas, o mesmo volume no Haiku 4.5 custava US$ 1 — dez vezes mais. A Anthropic anunciou o novo modelo em 7 de outubro, e o número que mais chamou atenção não foi um benchmark, foi a tabela de preços: [a empresa cortou o custo de lista em até 90% para prompts de até 100 mil tokens](https://www.anthropic.com/claude-haiku-5-5), igualando o piso cobrado pela OpenAI no GPT-6 Luna, segundo a [VentureBeat](https://venturebeat.com/technology/anthropic-launches-claude-haiku-5-5-with-90-api-price-reduction-matching-gpt-6-luna).

> **Resposta Rápida (TL;DR):** O Claude Haiku 5.5, lançado pela Anthropic em 7 de outubro de 2026, custa US$ 0,10 por milhão de tokens de entrada e US$ 0,50 por milhão de saída em prompts de até 100 mil tokens — até 90% mais barato que o Haiku 4.5. É o primeiro modelo Haiku com nível de esforço ajustável, tem janela de contexto de 1 milhão de tokens e, segundo a Anthropic, supera o GPT-6 Luna em tarefas de uso de computador e codificação agêntica.

## Um corte de preço que fecha uma trinca de lançamentos

O Haiku 5.5 não chegou isolado. A Anthropic vinha prometendo a atualização desde o fim de setembro, quando lançou o Opus 5.5 com preços mais baixos e, dias depois, o Sonnet 5.5 como "parceiro de trabalho" mais rápido e barato. Em ambos os anúncios, a empresa disse que uma nova versão do Haiku viria "nas próximas semanas", sem data fechada — o que [o TechCrunch já havia registrado](https://techcrunch.com/2026/09/28/anthropic-releases-sonnet-5-5-which-it-calls-a-significantly-cheaper-faster-work-partner/) ao cobrir o Sonnet 5.5.

Agora a trinca está completa. Opus, Sonnet e Haiku passaram por atualização de preço e desempenho em menos de três semanas, num ritmo que a própria imprensa especializada já vinha chamando de "fadiga de modelo" entre os grandes laboratórios. Quem quiser comparar os três lado a lado — custo, contexto e benchmarks — encontra a tabela atualizada no [Comparador de IAs](/comparador) do Turbina IA.


![Imagem ilustrativa sobre Claude Haiku 5.5: Anthropic Corta Preço em 90% e Lança o Primeiro Modelo Haiku com Esforço Ajustável](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80)

## Quanto custa na prática

A estrutura de preço do Haiku 5.5 tem duas faixas, divididas pelo tamanho do prompt. Até 100 mil tokens, a cobrança é a mais baixa da família; acima disso, sobe para uma faixa intermediária. A Anthropic [explica que cerca de 90% das requisições do Haiku 4.5 ficavam dentro do limite de 100 mil tokens](https://www.anthropic.com/claude-haiku-5-5), então a maioria dos usuários deve sentir o corte maior na prática.

| | Haiku 5.5 (≤100k tokens) | Haiku 5.5 (>100k tokens) | Haiku 4.5 |
|---|---|---|---|
| Entrada (por milhão de tokens) | US$ 0,10 | US$ 0,50 | US$ 1,00 |
| Saída (por milhão de tokens) | US$ 0,50 | US$ 2,50 | US$ 5,00 |
| Leitura de cache | US$ 0,01 | US$ 0,05 | US$ 0,10 |
| Escrita de cache | US$ 0,125 | US$ 0,625 | US$ 1,25 |

Na média — já contando que o modelo usa um tokenizador novo e consome um pouco mais tokens por tarefa — a Anthropic estima a economia real em cerca de 75%, não os 90% da tabela bruta. Quem quer estimar o impacto de uma migração de modelo no orçamento mensal pode simular o cenário na [Calculadora de Custos](/calculadora) do site, trocando o modelo atual pelo Haiku 5.5 e comparando o total.

## O que mudou além do preço

A janela de contexto saltou de 200 mil para 1 milhão de tokens, e o limite de saída dobrou, de 64 mil para 128 mil tokens, segundo o [Unite.AI](https://www.unite.ai/anthropic-releases-claude-haiku-5-5-cutting-small-model-api-prices/). A novidade mais estrutural, porém, é outra: o Haiku 5.5 é o primeiro modelo da linha com nível de esforço ajustável, recurso que a Anthropic já havia testado nos modelos maiores. Na prática, o desenvolvedor escolhe entre cinco níveis — Low, Medium, High, Xhigh e Max — e troca velocidade por profundidade de raciocínio conforme a tarefa.

Isso resolve um problema real de quem usa modelos pequenos em produção: antes, trocar de modelo para ganhar mais qualidade significava migrar toda a integração para o Sonnet ou o Opus, com custo e latência maiores. Agora dá para subir o esforço do próprio Haiku em tarefas mais difíceis e voltar ao nível baixo nas rotineiras, sem trocar de modelo nem reescrever código.


![Imagem ilustrativa sobre Claude Haiku 5.5: Anthropic Corta Preço em 90% e Lança o Primeiro Modelo Haiku com Esforço Ajustável](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80)

## Como ele se compara em benchmarks

Nos números publicados pela própria Anthropic, o salto do Haiku 4.5 para o 5.5 é grande — e o modelo pequeno às vezes passa na frente do concorrente da OpenAI, embora continue atrás dos modelos maiores da própria Anthropic.

| Benchmark | Haiku 5.5 | Haiku 4.5 | GPT-6 Luna | Sonnet 5.5 |
|---|---|---|---|---|
| OSWorld 2.1 (uso de computador) | 72,4% | 15,7% | 48,9% | 83,9% |
| Terminal-Bench 4.0 | 39,2% | 0,0% | 16,4% | 70,6% |
| GDPval-AA v2.1 (Elo) | 1.620 | 735 | 1.437 | 1.840 |
| Humanity's Last Exam (com ferramentas) | 57,4% | 18,7% | — | 64,5% |

O recado por trás da tabela: na tarefa de "uso de computador", o Haiku 5.5 marca mais de 23 pontos percentuais acima do GPT-6 Luna, segundo os [dados divulgados pela Anthropic](https://www.anthropic.com/claude-haiku-5-5). Em codificação agêntica medida pelo Terminal-Bench, a diferença é ainda maior. A própria empresa é direta sobre o limite: para tarefas longas e complexas, Sonnet 5.5 e Opus 5.5 continuam sendo a recomendação — o Haiku foi desenhado para volume, não para o trabalho mais difícil.

## Quem já está usando o modelo em produção

A Anthropic publicou depoimentos de clientes que testaram o Haiku 5.5 antes do lançamento, e os números ali são mais concretos que o discurso de marketing costuma entregar. A [HubSpot](https://www.anthropic.com/claude-haiku-5-5) relatou o melhor resultado já visto num conjunto interno de testes, 92,8% de acerto em média ao longo de três rodadas. A AlphaSense mediu 0,84 contra 0,76 do Haiku 4.5 em 400 consultas — uma melhora que a empresa considerou estatisticamente significativa. Já a Box registrou pontuação 11 pontos mais alta com cerca de metade da latência anterior.

Outros dois casos mostram para que serve um modelo pequeno dentro de um pipeline maior, e não isolado. A Rogo usa o Haiku 5.5 como subagente para extrair dados de arquivamentos 10-K enquanto um modelo maior monta a apresentação final. A startup de programação Cognition colocou o modelo como "ajudante" do Devin, seu agente de codificação, e manteve uma pontuação de topo no FrontierCode reduzindo custo e latência ao mesmo tempo — um padrão de uso que também aparece em outros produtos de IA listados no [Guia de Ferramentas](/ferramentas) do Turbina IA.

## Segurança ficou mais estrita, mas não no nível dos modelos grandes

A Anthropic diz que o Haiku 5.5 trouxe "melhorias importantes" de alinhamento em relação ao Haiku 4.5, com menos comportamento desalinhado e menor disposição a cooperar com uso indevido. As salvaguardas de cibersegurança do novo modelo são mais rígidas que as do antecessor, mas ainda abaixo do padrão aplicado ao Sonnet 5.5 — o modelo continua bloqueando testes de invasão e técnicas típicas de ataque. Já as salvaguardas sobre biologia seguem o mesmo padrão usado no Sonnet 5 e no Opus 5: perguntas de pesquisa são permitidas, pedidos com potencial de dano real são restringidos.

## Para quem o Haiku 5.5 faz sentido

A própria Anthropic resume os casos de uso recomendados: tarefas de alto volume e sensíveis a custo, como resumo de documentos, classificação e consultas a banco de dados; trabalho de subagente ao lado de modelos maiores, especialmente em codificação; atendimento ao cliente em tempo real e uso de navegador, onde a velocidade pesa mais que a profundidade de raciocínio; e buscas rápidas e pontuais, como extrair um número específico de um relatório longo.

Para times que já rodam produtos de IA em escala — e sentem o preço por token pesando na planilha todo mês — a conta é simples de fazer antes de migrar: comparar o volume real de chamadas que cai na faixa de até 100 mil tokens (a grande maioria, segundo a própria Anthropic) contra o volume que passa disso, e simular os dois preços lado a lado. Quem ainda não testa prompts com o modelo pode fazer isso na própria [biblioteca de prompts](/prompts) do site, adaptando exemplos de uso prático para o novo preço.

A [calculadora de custos de API](/calculadora) já aplica as duas faixas do Haiku 5.5 — até e acima de 100 mil tokens de prompt — e compara o resultado com o GPT-6 Luna e o Gemini Flash. E como o Claude entende os mesmos comandos que o ChatGPT, os [prompts prontos para ChatGPT](/blog/prompts-prontos-para-chatgpt) também servem para testar o modelo.

## Perguntas Frequentes

### Quanto custa o Claude Haiku 5.5 na API da Anthropic?

Para prompts de até 100 mil tokens, US$ 0,10 por milhão de tokens de entrada e US$ 0,50 por milhão de tokens de saída. Acima de 100 mil tokens, o preço sobe para US$ 0,50 de entrada e US$ 2,50 de saída por milhão de tokens.

### O que é o nível de esforço ajustável do Haiku 5.5?

É um controle com cinco opções — Low, Medium, High, Xhigh e Max — que deixa o desenvolvedor trocar velocidade por profundidade de raciocínio na mesma chamada de API, sem precisar migrar para um modelo maior como Sonnet ou Opus.

### O Claude Haiku 5.5 já está disponível para uso?

Sim. A Anthropic liberou o modelo em 7 de outubro de 2026 na Claude Platform e via API, com disponibilidade também na AWS, no Google Cloud e no Microsoft Azure, sob o identificador `claude-haiku-5-5`.

## Fontes e Referências

- [Introducing Claude Haiku 5.5 (Anthropic)](https://www.anthropic.com/claude-haiku-5-5)
- [Anthropic launches Claude Haiku 5.5 with 90% API price reduction, matching GPT-6 Luna (VentureBeat)](https://venturebeat.com/technology/anthropic-launches-claude-haiku-5-5-with-90-api-price-reduction-matching-gpt-6-luna)
- [Anthropic Releases Claude Haiku 5.5, Cutting Small-Model API Prices (Unite.AI)](https://www.unite.ai/anthropic-releases-claude-haiku-5-5-cutting-small-model-api-prices/)
- [Anthropic releases Sonnet 5.5, which it calls a significantly cheaper, faster work partner (TechCrunch)](https://techcrunch.com/2026/09/28/anthropic-releases-sonnet-5-5-which-it-calls-a-significantly-cheaper-faster-work-partner/)