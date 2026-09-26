---
title: "Claude Opus 5.5: Anthropic corta preço em 40% e lança modelo dez dias após pedir desaceleração da IA"
description: "Anthropic lança o Opus 5.5 com preço 40% menor e recorde em benchmarks, dez dias depois de Dario Amodei pedir para a indústria desacelerar."
category: noticias
tags:
  - Claude Opus 5.5
  - Anthropic
  - Modelos de IA
author: Redação Turbina IA
isFeatured: false
date: "2026-09-26"
coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
---

Dez dias. Foi esse o intervalo entre o momento em que Dario Amodei publicou um ensaio pedindo para a indústria de IA "pisar no freio" e o momento em que sua própria empresa lançou o modelo mais rápido e mais barato que já colocou no mercado. Em 22 de setembro, a Anthropic apresentou o Claude Opus 5.5, com preço até 40% menor que o do antecessor e desempenho equivalente ao do Claude Fable 5.1, seu modelo mais caro, segundo o [anúncio oficial da empresa](https://www.anthropic.com/claude-opus-5-5).

> **Resposta Rápida (TL;DR):** O Claude Opus 5.5, lançado em 22/09/2026, custa 40% menos para rodar que o Opus 5, roda cerca de 30% mais rápido e alcança o desempenho do Fable 5.1 em boa parte das tarefas. Ele chega dez dias depois de Dario Amodei defender publicamente uma desaceleração da corrida por capacidades de IA — e vem com um sistema de segurança que redireciona pedidos sensíveis de cibersegurança e biologia para modelos mais antigos.

## O que muda no preço

A tabela de preços da API caiu em quase todas as categorias. Segundo dados publicados pela própria [Anthropic](https://www.anthropic.com/claude-opus-5-5) e confirmados pela cobertura do [TechCrunch](https://techcrunch.com/2026/09/22/anthropic-releases-opus-5-5-with-lower-prices-and-fable-level-performance/), o corte não é simbólico: afeta tokens de entrada, saída e as duas pontas do sistema de cache.

| Item | Opus 5 | Opus 5.5 | Variação |
|---|---|---|---|
| Tokens de entrada (por 1M) | US$ 5 | US$ 4 | -20% |
| Tokens de saída (por 1M) | US$ 25 | US$ 20 | -20% |
| Leitura de cache (por 1M) | US$ 0,50 | US$ 0,20 | -60% |
| Escrita de cache (por 1M) | US$ 6,25 | US$ 5 | -20% |

Somando a redução de preço à queda no consumo de tokens por tarefa, a Anthropic afirma que o custo efetivo de rodar o Opus 5.5 cai cerca de 40% em relação ao Opus 5. Há também um modo rápido, cobrado a US$ 8 por milhão de tokens de entrada e US$ 40 por milhão de saída, que entrega respostas 2,5 vezes mais rápido para quem prioriza velocidade sobre custo. Para quem acompanha esse tipo de variação de preço por token, vale comparar os números no [Comparador de IAs](/comparador) ou simular o impacto direto na [Calculadora de Custos](/calculadora) do Turbina IA antes de migrar uma aplicação em produção.

A [Bloomberg](https://www.bloomberg.com/news/articles/2026-09-22/anthropic-unveils-more-cost-efficient-opus-5-5-model-before-ipo) enquadrou o lançamento como parte de uma estratégia mais ampla: tornar a Anthropic mais eficiente operacionalmente às vésperas de uma possível oferta pública inicial. Cortar preço logo depois de lançar um modelo mais barato de produzir é, também, uma forma de pressionar concorrentes que ainda não conseguiram equilibrar essa equação.


![Imagem ilustrativa sobre Claude Opus 5.5: Anthropic corta preço em 40% e lança modelo dez dias após pedir desaceleração da IA](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

## Desempenho: onde o ganho é real

Nos números que a própria empresa divulgou, o Opus 5.5 supera o Opus 5 em praticamente todos os testes técnicos usados internamente. No Terminal-Bench 4.0, que mede a capacidade de operar linha de comando de forma autônoma, o modelo atingiu 66,4%, contra 52,3% do Opus 5 e 55,8% do Fable 5.1. No CursorBench 4.0, voltado a tarefas de programação assistida, o resultado foi 57,8%, também acima dos 46,6% do antecessor.

| Benchmark | Opus 5 | Fable 5.1 | Opus 5.5 |
|---|---|---|---|
| Terminal-Bench 4.0 | 52,3% | 55,8% | 66,4% |
| CursorBench 4.0 | 46,6% | 51,8% | 57,8% |
| FrontierCode v1.1 | 48,0% | 50,3% | 54,4% |
| AutomationBench | 26,9% | 31,4% | 40,0% |
| OSWorld 2.0 | 74,0% | 80,7% | 81,8%* |

*Resultado parcial, segundo a própria Anthropic.

Fora dos números de laboratório, a empresa cita um caso concreto: um engenheiro de testes concluiu a migração de uma base de código com 680 mil linhas em menos de um dia — uma tarefa que, com versões anteriores, levava semanas. Em testes de otimização de tempo de carregamento de páginas, o modelo acertou 39 de 40 tentativas sem alterar o comportamento do código, algo que a Anthropic diz ser um problema recorrente em versões passadas.

A consultoria independente [Artificial Analysis](https://artificialanalysis.ai/articles/claude-opus-5-5) colocou o Opus 5.5 no topo do seu Intelligence Index, com pontuação 58 — cinco pontos à frente do GPT-6 Astra e do próprio Fable 5.1, que empatam em 53, e sete pontos acima do Opus 5. O modelo lidera em seis das dez avaliações que compõem o índice, incluindo o exame Humanity's Last Exam, com 61,4% (o recorde anterior, do Fable 5.1, era 59,1%). Para quem quer visualizar como cada modelo evoluiu ao longo do ano, o [Monitor de Modelos](/changelog) do Turbina IA reúne os principais lançamentos em ordem cronológica.

## A engenharia por trás da queda de custo

O ganho de eficiência não veio de um chip novo nem de um data center diferente — veio de mudanças na forma como o modelo "pensa" antes de responder. A Anthropic afirma que o Opus 5.5 usa significativamente menos tokens para chegar ao mesmo resultado em tarefas de codificação, o que explica por que a redução de custo efetivo (40%) é maior que o corte de preço por token (20% em média). É a combinação de "cobrar menos por token" com "gastar menos tokens" que produz o salto.

Também mudou o estilo das respostas. Segundo testadores citados pela própria empresa, o modelo agora "coloca a informação mais importante logo no início" e produz textos mais curtos e diretos, em contraste com a verbosidade que caracterizava versões anteriores da linha Opus — um ajuste de personalidade que a Anthropic já vinha sinalizando como prioridade em atualizações recentes.


![Imagem ilustrativa sobre Claude Opus 5.5: Anthropic corta preço em 40% e lança modelo dez dias após pedir desaceleração da IA](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80)

## O que muda na segurança

Este é o primeiro modelo da linha Opus a herdar o mesmo conjunto de salvaguardas construído originalmente para o Fable 5.1 em três frentes: cibersegurança, biologia e resistência à destilação (a prática de extrair as capacidades de um modelo a partir de suas respostas). Na prática, isso significa que pedidos sinalizados como sensíveis nessas áreas não são simplesmente recusados — são redirecionados de forma transparente para o Opus 4.8, uma versão mais antiga e com capacidades mais limitadas, sem que o usuário perceba a troca no meio da conversa.

A empresa diz que o Opus 5.5 foi o modelo com melhor desempenho em sua auditoria comportamental automatizada, batendo cerca de 2.000 cenários de teste, e que tentativas de burlar os limites de contenção caíram 85% em relação ao Opus 5. Pesquisadores externos das organizações Frontier Design e METR avaliaram o modelo antes do lançamento. Profissionais de segurança cibernética verificados podem solicitar acesso ampliado às capacidades completas através do programa de verificação da empresa, e o mesmo vale para instituições de pesquisa em biologia. As proteções contra destilação valem apenas para contas criadas depois de 31 de agosto de 2026 — o que, na prática, deixa de fora quem já usava a API antes dessa data.

## O contexto que ninguém ignora

O timing chama atenção porque contraria, na superfície, o próprio discurso do CEO da Anthropic. Em 12 de setembro, Dario Amodei publicou o ensaio "We Must Pace the Frontier", argumentando que a indústria precisa desacelerar o avanço de capacidades para dar tempo às práticas de segurança de acompanhar o ritmo. Sam Altman, da OpenAI, e Elon Musk chegaram a apoiar publicamente partes da proposta — mas nenhuma empresa, incluindo a própria Anthropic, mostrou sinal de reduzir o ritmo de lançamentos.

Dez dias depois, o Opus 5.5 chegou como o modelo mais rápido e mais barato da história da linha Opus. Não é necessariamente uma contradição: a Anthropic sustenta que "pisar no freio" se refere ao ritmo de avanço bruto de capacidades perigosas, não ao lançamento de versões mais eficientes de tecnologia já existente, e aponta o próprio pacote de salvaguardas do Opus 5.5 como prova de que segurança e velocidade de lançamento podem andar juntas. Na prática, o que fica claro é que a pressão competitiva — de OpenAI, Google e agora também de fornecedores chineses — não deu trégua para ninguém no setor, discurso público à parte.

## Por que isso importa para quem usa IA no dia a dia

Para desenvolvedores e empresas que já rodam produtos sobre a API da Anthropic, o efeito mais imediato é financeiro: uma aplicação que gastava US$ 25 por milhão de tokens de saída passa a gastar US$ 20, e ainda se beneficia de respostas mais curtas e mais rápidas. Para quem está decidindo qual modelo usar num projeto novo, vale testar prompts equivalentes nas ferramentas do [Gerador de Prompts](/gerador) do Turbina IA e comparar custo, velocidade e qualidade de saída antes de migrar uma integração inteira.

Já para o usuário final do [Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) — no plano pago ou gratuito — a mudança é menos visível no dia a dia, mas afeta indiretamente a velocidade das respostas e a frequência com que a Anthropic consegue lançar atualizações sem estourar o orçamento de infraestrutura. Modelos mais baratos de rodar tendem a se espalhar mais rápido pelos produtos do ecossistema — de assistentes de código a ferramentas de atendimento — porque baixam a barreira de custo para quem decide onde aplicá-los.

## Perguntas Frequentes

### O Claude Opus 5.5 já está disponível para uso?

Sim. Desde 22 de setembro de 2026, o modelo está disponível na Claude Platform e também via AWS, Google Cloud e Microsoft Azure, segundo o [anúncio da Anthropic](https://www.anthropic.com/claude-opus-5-5).

### O Opus 5.5 substitui o Claude Fable 5.1?

Não completamente. O Opus 5.5 alcança desempenho equivalente ao Fable 5.1 em várias tarefas com um custo bem menor, mas a Anthropic mantém o Fable 5.1 como o modelo de capacidades mais avançadas, voltado a casos que exigem o máximo de desempenho independentemente do custo.

### Por que a Anthropic lançou um modelo mais rápido logo após pedir desaceleração da IA?

A empresa argumenta que o pedido de "pisar no freio" de Dario Amodei se refere ao ritmo de avanço em capacidades potencialmente perigosas, não ao lançamento de versões mais eficientes de uma tecnologia já existente. O Opus 5.5 chegou com o mesmo pacote de salvaguardas de segurança do Fable 5.1, o que a empresa cita como evidência de que essas duas frentes — velocidade de lançamento e segurança — não são mutuamente exclusivas para ela.

## Fontes e Referências

- [Introducing Claude Opus 5.5 (Anthropic)](https://www.anthropic.com/claude-opus-5-5)
- [Anthropic releases Opus 5.5 with lower prices and Fable-level performance (TechCrunch)](https://techcrunch.com/2026/09/22/anthropic-releases-opus-5-5-with-lower-prices-and-fable-level-performance/)
- [Anthropic Unveils More Cost-Efficient Opus 5.5 Model Before IPO (Bloomberg)](https://www.bloomberg.com/news/articles/2026-09-22/anthropic-unveils-more-cost-efficient-opus-5-5-model-before-ipo)
- [Claude Opus 5.5 takes the top spot on the Artificial Analysis Intelligence Index (Artificial Analysis)](https://artificialanalysis.ai/articles/claude-opus-5-5)