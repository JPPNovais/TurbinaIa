---
title: "Spec-Driven Development: Por Que Programadores Estão Abandonando o Vibe Coding em 2026"
description: "Estudo da METR achou devs 19% mais lentos com IA sem estrutura. O GitHub respondeu com o Spec Kit. Entenda a virada para especificar antes de codar."
category: tutoriais
tags:
  - Spec-Driven Development
  - Vibe Coding
  - GitHub Spec Kit
  - Produtividade com IA
author: Redação Turbina IA
isFeatured: false
date: "2026-09-04"
coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
---

Dezesseis desenvolvedores experientes, 246 tarefas reais em repositórios que eles já conheciam de cor, metade das tarefas liberada para uso de IA e a outra metade proibida. Foi esse o desenho do experimento que a [METR](https://arxiv.org/abs/2507.09089) rodou entre fevereiro e junho de 2025 — e o resultado contrariou a intuição de quase todo mundo que participou. Quando a IA podia ser usada, os desenvolvedores levaram 19% mais tempo para terminar a tarefa. Antes de começar, eles previam ficar 24% mais rápidos. Depois de terminar, ainda convencidos de que tinham ganhado velocidade, estimaram um ganho de 20%. A régua objetiva discordou dos dois lados.

Esse descompasso entre sensação e medição virou o pano de fundo de uma mudança de hábito que está acontecendo agora nas equipes que usam IA para programar: a migração do "vibe coding" — descrever o que se quer e deixar o agente decidir os detalhes — para o "spec-driven development", em que a especificação escrita vem antes de qualquer linha de código gerada.

> **Resposta Rápida (TL;DR):** Um estudo da METR mostrou que desenvolvedores experientes ficam mais lentos, não mais rápidos, quando usam IA de forma improvisada ("vibe coding"). Em resposta a esse tipo de atrito, o GitHub lançou o Spec Kit, ferramenta de código aberto que obriga o agente a seguir uma especificação, um plano técnico e uma lista de tarefas antes de escrever qualquer código — um método hoje chamado de spec-driven development.

## O que a métrica escondia

O estudo da METR — organização independente que avalia capacidades e riscos de modelos de IA — não testou iniciantes brincando com [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026). Os 16 participantes eram mantenedores de projetos open source maduros, com média de mais de um milhão de linhas de código, trabalhando nos próprios repositórios com ferramentas como Cursor Pro rodando Claude 3.5 e 3.7 Sonnet. Cada tarefa foi sorteada aleatoriamente entre "pode usar IA" e "não pode usar IA", o desenho clássico de um experimento controlado.

A gente costuma achar que resistência a adotar IA é questão de hábito ou ego. O dado da METR sugere outra hipótese: parte da lentidão vem do próprio jeito como as pessoas usam a ferramenta. Pedir uma funcionalidade em linguagem solta, revisar o que voltou, perceber que não é bem aquilo, reescrever o pedido, revisar de novo — esse ciclo de tentativa e erro consome tempo que não aparece na sensação de "produtividade" porque cada rodada individual parece rápida. A pesquisa virou referência justamente por quantificar esse ciclo, algo que times de engenharia vinham suspeitando informalmente havia meses.


![Imagem ilustrativa sobre Spec-Driven Development: Por Que Programadores Estão Abandonando o Vibe Coding em 2026](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80)

## De "vibe coding" a especificação escrita

O termo [vibe coding](/glossario) descreve exatamente esse fluxo: você narra a intenção para o agente, ele devolve um bloco de código que parece certo, e o processo segue por sensação — daí o nome. Funciona bem para protótipos descartáveis. Funciona mal quando o projeto precisa continuar de pé daqui a três meses, com outra pessoa mexendo no mesmo código.

Foi para atacar esse ponto que o GitHub anunciou, em setembro de 2025, o [Spec Kit](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/), um kit de ferramentas de código aberto sob licença MIT. Den Delimarsky, gerente principal de produto do GitHub e mantenedor do projeto, resumiu o diagnóstico que motivou a ferramenta: o problema não é a capacidade do agente de escrever código, é a forma como as pessoas conversam com ele — tratando um assistente que deveria seguir instruções ao pé da letra como se fosse um mecanismo de busca, que tolera pedidos vagos porque devolve várias opções para o usuário escolher.

Passado um ano do lançamento, o Spec Kit segue recebendo atualizações regulares e hoje se integra a mais de 30 agentes de codificação diferentes, incluindo GitHub Copilot, Claude Code e Gemini CLI, segundo o próprio [blog do GitHub](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/).

## Como funciona, na prática

O fluxo do Spec Kit é dividido em quatro fases, cada uma documentada em um arquivo próprio dentro do repositório:

| Fase | O que acontece | Arquivo gerado |
|---|---|---|
| Specify | Descreve o que o projeto deve fazer e por quê — objetivos, restrições, necessidades do usuário | `spec.md` |
| Plan | Traduz a intenção em decisões técnicas: arquitetura, fluxo de dados, bibliotecas, dependências | `plan.md` |
| Tasks | Quebra o plano em tarefas pequenas e testáveis, na ordem em que devem ser feitas | `tasks.md` |
| Implement | O agente executa as tarefas em sequência, uma de cada vez | código final |

Na prática, isso significa que o desenvolvedor escreve — ou dita para o próprio agente escrever, em rascunho — a especificação antes de pedir qualquer implementação. O `spec.md` guarda o "o quê" e o "porquê", que raramente muda; o `plan.md` e o `tasks.md` guardam o "como", que pode ser ajustado sem reescrever a especificação inteira. Quando o agente erra, o ponto de correção é o arquivo de especificação, não uma nova rodada de prompt solto — uma diferença sutil, mas que muda o tipo de conversa que se tem com a ferramenta, parecida com a que fica documentada no [Monitor de Modelos](/changelog) do Turbina IA sempre que um agente de código ganha suporte a esse tipo de fluxo estruturado.


![Imagem ilustrativa sobre Spec-Driven Development: Por Que Programadores Estão Abandonando o Vibe Coding em 2026](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

## A Anthropic aposta na mesma direção, por outro caminho

O GitHub não está sozinho nesse raciocínio. A Anthropic publicou um guia de engenharia chamado ["Effective context engineering for AI agents"](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), no qual descreve o problema de um jeito complementar: a pergunta certa ao configurar um agente não é "quais palavras mágicas fazem o modelo funcionar", mas "qual configuração de contexto tem mais chance de gerar o comportamento desejado". A recomendação prática do documento é buscar o menor conjunto possível de informação com alto sinal — nada de despejar contexto genérico esperando que o modelo filtre sozinho o que importa.

O paralelo com o spec-driven development é direto: os dois métodos partem da mesma constatação, que agentes de IA produzem resultado melhor quando recebem estrutura explícita em vez de improviso, mesmo quando o improviso vem embalado num [prompt](/prompts) bem escrito. A diferença é de escopo — a Anthropic fala do contexto que se entrega a um agente durante uma tarefa longa; o Spec Kit fala do processo inteiro de um projeto de software, do primeiro rascunho ao deploy.

## Quando o vibe coding ainda basta

Nem todo projeto pede esse nível de formalidade. Para um script descartável, uma prova de conceito que será jogada fora em uma semana, ou uma automação pessoal sem outros usuários, escrever um `spec.md` é desperdício de tempo — o próprio raciocínio por trás do Spec Kit reconhece que vibe coding continua sendo a ferramenta certa para prototipagem rápida. O ponto de virada costuma aparecer quando o código vai para produção, quando mais de uma pessoa vai mexer nele, ou quando um bug em produção custa caro o suficiente para valer a pena reduzir o risco de o agente "alucinar" uma função que não existe na biblioteca.

Reações ao método também não são unânimes: desenvolvedores relatam ganho real de previsibilidade, mas também reclamam de maior consumo de tokens e de fluxos mais lentos no dia a dia para tarefas simples, exatamente o tipo de trade-off que qualquer metodologia nova carrega nos primeiros meses de adoção. A crítica mais comum é que escrever `spec.md`, `plan.md` e `tasks.md` para uma mudança de duas linhas é burocracia desnecessária — e quem defende o método concorda, desde que a decisão de pular a especificação seja consciente, não a ausência de qualquer processo.

## Como testar o método esta semana

Não é preciso instalar o Spec Kit para experimentar a lógica por trás dele. O primeiro passo é escolher uma tarefa que hoje você resolveria em uma única mensagem para o agente — "adiciona um endpoint que lista os pedidos do usuário" — e quebrá-la em três blocos antes de mandar qualquer prompt de implementação: o que o recurso precisa fazer e por quê (a especificação), quais arquivos e bibliotecas ele vai tocar (o plano) e a lista de passos menores em que a tarefa se divide. Só depois disso peça ao agente para implementar, um passo por vez, revisando cada um antes de avançar para o próximo.

Essa disciplina se aproxima do que já reunimos na [biblioteca de prompts](/prompts) do site para quem quer levar mais estrutura para a conversa com o agente: descrever a tarefa, listar restrições e critérios de aceite antes de pedir o código, em vez de negociar o resultado depois que ele já chegou pronto. Quem usa o GitHub Copilot ou o Claude Code no dia a dia pode instalar o próprio Spec Kit — é um pacote MIT, gratuito, mantido publicamente no GitHub — mas o ganho de previsibilidade já aparece antes disso, só de mudar a ordem em que a conversa com o agente acontece.

## Perguntas Frequentes

### O que é spec-driven development?

É um método de desenvolvimento de software assistido por IA em que a especificação — o que o sistema deve fazer e por quê — é escrita e aprovada antes de qualquer código ser gerado. O agente de IA usa essa especificação, e não um prompt solto, como referência para implementar, testar e revisar o trabalho.

### Spec-driven development substitui o vibe coding completamente?

Não substitui em todos os casos. Para protótipos rápidos e scripts descartáveis, o vibe coding continua sendo mais ágil. A recomendação que aparece tanto no material do GitHub quanto em relatos de desenvolvedores é reservar a especificação formal para código que vai para produção, que outras pessoas vão manter, ou que tem custo alto de erro.

### O Spec Kit do GitHub funciona com qualquer ferramenta de IA?

Segundo o GitHub, o Spec Kit foi desenhado para funcionar com mais de 30 agentes de codificação, incluindo GitHub Copilot, Claude Code e Gemini CLI. O projeto é de código aberto, sob licença MIT, e pode ser adaptado a outros fluxos de trabalho.

## Fontes e Referências

- [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity (METR/arXiv)](https://arxiv.org/abs/2507.09089)
- [Spec-driven development with AI: Get started with a new open source toolkit (The GitHub Blog)](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)
- [Effective context engineering for AI agents (Anthropic)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)