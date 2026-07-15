---
title: "Claude Sonnet 5: Anthropic Lança Modelo Padrão Gratuito com Desempenho Quase Igual ao Opus 4.8"
description: "Anthropic lança o Claude Sonnet 5 como padrão gratuito nos planos Free e Pro, com desempenho próximo ao Opus 4.8 e preços de API mais baixos."
category: noticias
tags:
  - Claude Sonnet 5
  - Anthropic
  - IA Agentic
  - Claude API
author: Redação Turbina IA
isFeatured: false
date: "2026-07-01"
coverImage: "https://images.unsplash.com/photo-1781324130689-41c062627926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NTg1Mzd8MHwxfHNlYXJjaHwxfHxDbGF1ZGUlMjBTb25uZXQlMjA1JTNBJTIwQW50aHJvcGljJTIwTGFuJUMzJUE3YSUyME1vZGVsbyUyMFBhZHIlQzMlQTNvJTIwR3JhdHVpdG8lMjBjb20lMjBEZXNlbXBlbmhvJTIwUXVhc2UlMjBJZ3VhbCUyMGFvJTIwT3B1cyUyMDQuOCUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5fGVufDB8MHx8fDE3ODI5Mjk5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
---

A Anthropic anunciou nesta terça-feira (30) o [Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) Sonnet 5, novo modelo de inteligência artificial que passa a ser a opção padrão nos planos gratuito e Pro do Claude, com desempenho descrito pela própria empresa como "próximo" ao do seu modelo mais avançado, o Opus 4.8, mas a um custo bem menor. A novidade chega em meio a uma corrida entre os grandes laboratórios de IA para colocar capacidades agentic — a habilidade de planejar, usar ferramentas e executar tarefas de forma autônoma — ao alcance até dos usuários que não pagam nada pelo serviço.

> **Resposta Rápida (TL;DR):** O Claude Sonnet 5, lançado em 30 de junho de 2026, é o novo modelo padrão gratuito do Claude e reduz significativamente a distância de desempenho para o Opus 4.8 em tarefas de raciocínio, programação e uso de ferramentas, mantendo-se mais barato. Na API, custa US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de saída até 31 de agosto de 2026 (depois sobe para US$ 3 e US$ 15), contra US$ 5 e US$ 25 do Opus 4.8.

## O que é o Claude Sonnet 5

Segundo a [Anthropic](https://www.anthropic.com/news/claude-sonnet-5), o Sonnet 5 foi construído para ser "o modelo Sonnet mais agentic até agora", capaz de montar planos, usar ferramentas como navegadores e terminais e operar de forma autônoma em um nível que, há poucos meses, exigia modelos maiores e mais caros — leia-se, da linha Opus. A empresa reconhece que, embora a era agentic tenha começado justamente com os modelos Sonnet (as versões 3.5, 3.6 e 3.7 foram as primeiras a mostrar habilidades relevantes em programação e uso de ferramentas), os ganhos mais recentes de capacidade agentic vinham se concentrando nos modelos Opus. O Sonnet 5 é apresentado como a resposta a esse desequilíbrio.

A partir do lançamento, o Sonnet 5 é o modelo padrão dos planos Free e Pro do Claude, e também está disponível — sem custo adicional além da assinatura — para usuários dos planos Max, Team e Enterprise, conforme detalha a [Anthropic](https://www.anthropic.com/news/claude-sonnet-5). Para desenvolvedores, o modelo pode ser acessado como `claude-sonnet-5` pela Claude API e também está disponível no Claude Code, a ferramenta de codificação assistida da empresa.

Do ponto de vista técnico, a mudança mais visível em relação ao Sonnet 4.6, lançado em fevereiro de 2026, está nos chamados "níveis de esforço" (effort levels), que permitem ao usuário escolher entre respostas mais rápidas e baratas ou um raciocínio mais profundo e caro antes de cada resposta. É esse mecanismo que, segundo a empresa, permite ao Sonnet 5 cobrir "uma gama muito mais ampla de opções de custo-benefício" do que o Opus 4.8, funcionando quase como um controle deslizante entre economia e desempenho máximo.


![Imagem ilustrativa sobre Claude Sonnet 5: Anthropic Lança Modelo Padrão Gratuito com Desempenho Quase Igual ao Opus 4.8](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80)

## Quanto o Sonnet 5 realmente se aproxima do Opus 4.8

A alegação central da Anthropic — que o novo modelo "reduz o hiato" para o Opus 4.8 — pode ser verificada em números concretos divulgados nos materiais de lançamento. De acordo com o [Canaltech](https://canaltech.com.br/inteligencia-artificial/claude-lanca-sonnet-5-modelo-gratuito-quase-tao-bom-quanto-o-pago/), no teste de codificação SWE-bench Pro o Sonnet 5 atingiu 63,2% de acerto, ante 58,1% do Sonnet 4.6 — um salto expressivo, embora ainda distante dos 69,2% do Opus 4.8, conforme também confirma a [TechCrunch](https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/).

| Avaliação | Sonnet 4.6 | Sonnet 5 | Opus 4.8 |
|---|---|---|---|
| SWE-bench Pro (codificação agentic) | 58,1% | 63,2% | 69,2% |
| Terminal-Bench 2.1 (uso de terminal) | 67,0% | 80,4% | — |
| Humanity's Last Exam c/ ferramentas | 46,8% | 57,4% | — |
| OSWorld-Verified (uso de computador) | 78,5% | 81,2% | — |

*Fonte: dados compilados a partir do [Canaltech](https://canaltech.com.br/inteligencia-artificial/claude-lanca-sonnet-5-modelo-gratuito-quase-tao-bom-quanto-o-pago/) e da [Anthropic](https://www.anthropic.com/news/claude-sonnet-5).*

Vale notar que, em pelo menos uma categoria, o Sonnet 5 chega a superar o próprio Opus 4.8: segundo a [TechCrunch](https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/), em um benchmark de trabalho de conhecimento o novo modelo "levemente supera" o irmão mais caro, que é conhecido por vencer em tarefas de julgamento sutil e pesquisa profunda. Ainda assim, a própria Anthropic é direta ao afirmar que "o Opus 4.8 continua sendo o modelo de escolha para maior precisão nessas tarefas", posicionando o Sonnet 5 como a opção de "qualidade muito superior ao que estava disponível antes" por um preço mais baixo, não como um substituto total do topo de linha. Para quem precisa comparar as duas famílias lado a lado — ou colocá-las ao lado de modelos de outros laboratórios —, o [Comparador de IAs](/comparador) do Turbina IA reúne esses parâmetros em uma única tabela.

## Preços: gratuito no app, mais barato na API

Para o usuário comum, a mudança mais direta é financeira: quem usa o Claude pelo site ou aplicativo não paga nada a mais para acessar o Sonnet 5, já que ele simplesmente substitui o modelo anterior como padrão nos planos Free e Pro, como resume o [Canaltech](https://canaltech.com.br/inteligencia-artificial/claude-lanca-sonnet-5-modelo-gratuito-quase-tao-bom-quanto-o-pago/). A cobrança por token só se aplica a quem acessa o modelo via API ou Claude Code — o público de desenvolvedores e empresas que constroem produtos em cima da tecnologia.

| Modelo | Preço de entrada | Preço de saída | Validade |
|---|---|---|---|
| Sonnet 5 (introdutório) | US$ 2 / milhão tokens | US$ 10 / milhão tokens | até 31/08/2026 |
| Sonnet 5 (padrão) | US$ 3 / milhão tokens | US$ 15 / milhão tokens | a partir de 01/09/2026 |
| Opus 4.8 | US$ 5 / milhão tokens | US$ 25 / milhão tokens | — |

Nessa faixa de preço, o Sonnet 5 fica abaixo não só do Opus 4.8, mas também do GPT-5.5 da OpenAI e do Gemini 3.1 Pro do Google, ainda que continue mais caro que o Gemini 3.5 Flash, aponta a [TechCrunch](https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/). A Anthropic também ampliou os limites de uso no Chat, no Cowork e no Claude Code, medida necessária para acomodar o consumo maior de tokens gerado pelos níveis de esforço mais altos, que fazem o modelo "pensar" mais antes de responder, segundo relata o [Canaltech](https://canaltech.com.br/inteligencia-artificial/claude-lanca-sonnet-5-modelo-gratuito-quase-tao-bom-quanto-o-pago/). Quem quiser estimar o impacto financeiro de rodar o Sonnet 5 em produção pode usar a [Calculadora de Custos](/calculadora) do Turbina IA para simular diferentes volumes de tokens de entrada e saída.


![Imagem ilustrativa sobre Claude Sonnet 5: Anthropic Lança Modelo Padrão Gratuito com Desempenho Quase Igual ao Opus 4.8](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

## Comportamento agentic: o que muda na prática

Além dos números de benchmark, o diferencial que a Anthropic mais destaca é comportamental. De acordo com a [Anthropic](https://www.anthropic.com/news/claude-sonnet-5), parceiros de acesso antecipado relataram de forma consistente que o Sonnet 5 "termina tarefas complexas onde modelos Sonnet anteriores parariam pela metade" e passou a revisar o próprio resultado sem que isso fosse explicitamente solicitado.

Um exemplo citado tanto pela Anthropic quanto pela [TechCrunch](https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/) vem da Zapier: o engenheiro sênior Daniel Shepard afirmou que a equipe entregou ao Sonnet 5 uma tarefa em duas etapas — atualizar níveis de contas no Salesforce e enviar um comunicado de lançamento a contatos corporativos — e o modelo concluiu o processo do início ao fim, algo que "costumava travar pela metade". Já Fabian Hedin, cofundador da Lovable, elogiou o outro lado da moeda: a capacidade do modelo de recusar pedidos de forma limpa e consistente quando a tarefa é insegura, o que ele descreve como tão importante quanto a capacidade de executar. Esse tipo de comportamento — planejar, executar em múltiplas etapas e usar ferramentas externas sem intervenção constante — é o que o mercado de IA já convencionou chamar de "agentic", termo detalhado no [Glossário de IA](/glossario) do Turbina IA para quem ainda não está familiarizado com o conceito.

## Segurança e limites em cibersegurança

Nos testes internos de segurança, a Anthropic afirma que o Sonnet 5 apresentou taxa geral de comportamentos indesejados — incluindo cooperação com uso indevido, alucinações e sicofantia — menor que a do Sonnet 4.6, tornando-o "geralmente mais seguro para uso em contextos agentic", segundo o [texto oficial de lançamento](https://www.anthropic.com/news/claude-sonnet-5). A [TechCrunch](https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/) acrescenta que o modelo também melhorou na recusa de pedidos maliciosos e na resistência a tentativas de sequestro por meio de ataques de prompt injection.

Por outro lado, a própria empresa é explícita sobre um limite deliberado: o Sonnet 5 tem "capacidade muito menor de realizar tarefas de cibersegurança" do que os modelos Opus atuais, já que não foi treinado especificamente para esse tipo de tarefa. Em uma avaliação de desenvolvimento de exploits para o Firefox 147, conduzida em parceria com a Mozilla e detalhada no [System Card do Claude Sonnet 5](https://www-cdn.anthropic.com/480e0bb54327b9622282e9c39a83a4f490ed377e/Claude%20Sonnet%205%20System%20Card.pdf), o modelo não conseguiu criar um exploit funcional em nenhuma tentativa — resultado idêntico ao do Sonnet 4.6, como registra o [Canaltech](https://canaltech.com.br/inteligencia-artificial/claude-lanca-sonnet-5-modelo-gratuito-quase-tao-bom-quanto-o-pago/). Ainda assim, por ser um pouco mais forte que o antecessor nesse tipo de tarefa, o modelo foi lançado com as mesmas salvaguardas de ciberuso já aplicadas aos modelos Opus 4.7 e 4.8, capazes de detectar e bloquear em tempo real usos perigosos.

## A corrida pelos modelos padrão gratuitos

O lançamento do Sonnet 5 não acontece isoladamente. Segundo a [TechCrunch](https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/), a OpenAI lançou na semana anterior, em prévia, o GPT-5.6 Sol, também descrito como seu modelo mais agentic até então, com a capacidade de dividir tarefas entre subagentes para trabalhos autônomos mais longos. Já o Gemini 3.5 Flash, do Google, lançado em maio de 2026, foi apresentado como uma mudança de posicionamento — de chatbot conversacional para ferramenta agentic que planeja, constrói e itera sobre trabalho real com mínima intervenção humana.

O [Canaltech](https://canaltech.com.br/inteligencia-artificial/claude-lanca-sonnet-5-modelo-gratuito-quase-tao-bom-quanto-o-pago/) detalha como essa disputa também se reflete na política de acesso gratuito: desde maio, a OpenAI usa o GPT-5.5 Instant como padrão tanto no ChatGPT gratuito quanto nos planos pagos, deixando a diferenciação por conta dos limites de uso e da profundidade de raciocínio, não mais da versão do modelo. O Google segue lógica parecida, mas com uma camada extra — o aplicativo Gemini gratuito usa o Gemini 3.5 Flash como padrão e libera uma cota diária do Gemini 3.1 Pro, normalmente restrito a assinantes do Google AI Pro e Ultra. Com o Sonnet 5, a Anthropic se aproxima dessa mesma estratégia: oferecer o modelo mais recente da linha intermediária a todos os usuários, gratuitos inclusive, deixando o Opus 4.8 como diferencial pago. A reportagem do [Olhar Digital](https://olhardigital.com.br/2026/06/30/inteligencia-artificial/anthropic-lanca-claude-sonnet-5-nova-aposta-em-ia-mais-autonoma-e-menor-custo/) resume o momento como parte de um movimento mais amplo do setor, em que a chamada IA agentic deixou de ser diferencial e passou a ser o padrão de desenvolvimento esperado entre os grandes laboratórios.

## O que muda para desenvolvedores e usuários finais

Para quem já constrói produtos sobre a API da Anthropic, a recomendação prática que emerge das próprias fontes é usar os níveis de esforço como variável de ajuste fino: tarefas simples e de alto volume podem rodar em esforço baixo, aproveitando o preço reduzido do Sonnet 5, enquanto tarefas que exigem raciocínio mais sofisticado — pesquisa profunda, julgamento de casos-limite, análise de código legado complexo — ainda podem justificar o custo mais alto do Opus 4.8. É esse tipo de decisão de engenharia de prompt e escolha de modelo que ferramentas como o [Gerador de Prompts](/gerador) do Turbina IA ajudam a testar antes de colocar em produção, especialmente em fluxos agentic que encadeiam várias chamadas de ferramenta.

Já para o usuário final do aplicativo Claude, a mudança é mais simples de descrever: a partir de 30 de junho de 2026, qualquer pessoa com conta gratuita passou a ter acesso, sem custo, a um modelo que a própria Anthropic posiciona como o mais capaz de sua linha intermediária até hoje — um patamar que, segundo a empresa, era exclusivo dos modelos Opus há poucos meses. Resta acompanhar, nas próximas semanas, se o desempenho relatado nos benchmarks controlados se confirma no uso cotidiano, à medida que mais desenvolvedores e usuários testam o modelo em cenários reais.

## Perguntas Frequentes

### O Claude Sonnet 5 é realmente gratuito?
Sim, para quem usa o aplicativo ou o site do Claude. O modelo é o padrão nos planos Free e Pro sem custo adicional, conforme confirmam a [Anthropic](https://www.anthropic.com/news/claude-sonnet-5) e o [Canaltech](https://canaltech.com.br/inteligencia-artificial/claude-lanca-sonnet-5-modelo-gratuito-quase-tao-bom-quanto-o-pago/). A cobrança por token existe apenas para quem acessa o modelo pela API ou pelo Claude Code.

### Qual a diferença de preço entre Sonnet 5 e Opus 4.8 na API?
Até 31 de agosto de 2026, o Sonnet 5 custa US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de saída (depois sobe para US$ 3 e US$ 15), contra US$ 5 e US$ 25 do Opus 4.8, segundo dados da [Anthropic](https://www.anthropic.com/news/claude-sonnet-5).

### O Sonnet 5 substitui o Opus 4.8 em tarefas complexas?
Não totalmente. Embora reduza a distância em benchmarks como SWE-bench Pro (63,2% contra 69,2% do Opus 4.8), a própria Anthropic mantém o Opus 4.8 como recomendação para tarefas que exigem maior precisão e julgamento sutil, como aponta a [TechCrunch](https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/).

## Fontes e Referências

- [Introducing Claude Sonnet 5 — Anthropic](https://www.anthropic.com/news/claude-sonnet-5)
- [System Card: Claude Sonnet 5 — Anthropic](https://www-cdn.anthropic.com/480e0bb54327b9622282e9c39a83a4f490ed377e/Claude%20Sonnet%205%20System%20Card.pdf)
- [Anthropic launches Claude Sonnet 5 as a cheaper way to run agents — TechCrunch](https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/)
- [Claude lança Sonnet 5, modelo gratuito quase tão bom quanto o pago — Canaltech](https://canaltech.com.br/inteligencia-artificial/claude-lanca-sonnet-5-modelo-gratuito-quase-tao-bom-quanto-o-pago/)
- [Anthropic lança Claude Sonnet 5, nova aposta em IA mais autônoma e menor custo — Olhar Digital](https://olhardigital.com.br/2026/06/30/inteligencia-artificial/anthropic-lanca-claude-sonnet-5-nova-aposta-em-ia-mais-autonoma-e-menor-custo/)