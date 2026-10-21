---
title: "Claude Haiku 4.5 Sai do Seletor de Modelos em 29 de Outubro: O Que Muda e Como se Preparar"
seoTitle: "Claude Haiku 4.5 Sai do Seletor em 29/10: O Que Muda"
description: "Anthropic remove o Haiku 4.5 do chat, Cowork e Design em 29/10. Veja quem é afetado, por que a troca é pelo Haiku 5.5 e o que fazer antes do prazo."
category: ferramentas
tags:
  - Claude
  - Anthropic
  - Inteligência Artificial
author: Redação Turbina IA
isFeatured: false
date: "2026-10-21"
coverImage: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=1200&q=80"
---

Quem abre o Claude hoje ainda encontra o Haiku 4.5 na lista "Mais modelos". A partir de 29 de outubro, essa opção some — pelo menos para quem usa os planos Free, Pro e Max no chat, no Claude Cowork e no Claude Design, [confirma o artigo do centro de ajuda da Anthropic](https://support.claude.com/pt/articles/17444146-claude-haiku-4-5-esta-saindo-do-seletor-de-modelos). No lugar dele entra, por padrão, o Claude Haiku 5.5, lançado duas semanas antes.

> **Resposta Rápida (TL;DR):** Em 29 de outubro de 2026, a Anthropic remove o Claude Haiku 4.5 do seletor de modelos no chat, no Cowork e no Design dos planos Free, Pro e Max — quem tinha esse modelo selecionado passa a usar automaticamente o Claude Haiku 5.5. A mudança não afeta o Claude Code, os planos Team e Enterprise nem a API, e nenhuma conversa antiga é apagada.

## O que muda exatamente em 29 de outubro

A mudança é cirúrgica, não um apagão. O artigo oficial lista três superfícies afetadas: o chat comum do [Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026), o Claude Cowork (o modo que organiza arquivos e tarefas de forma mais autônoma) e o Claude Design, nas versões de desktop e de celular. Em todas elas, a opção "Haiku 4.5" deixa de aparecer na lista de modelos a partir daquela data — hoje ela ainda está disponível em "Mais modelos", bastando clicar no nome do modelo ao lado do campo de envio para trocar.

Quem está usando Haiku 4.5 no momento do corte simplesmente passa a receber respostas do Haiku 5.5 na próxima mensagem, sem precisar fazer nada. Isso vale tanto para quem usa o modelo de forma deliberada, buscando respostas mais rápidas e baratas, quanto para quem nem sabia que tinha escolhido um modelo específico.


![Imagem ilustrativa sobre Claude Haiku 4.5 Sai do Seletor de Modelos em 29 de Outubro: O Que Muda e Como se Preparar](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80)

## O gatilho da troca: o Haiku 5.5 chegou com corte de preço de até 90%

A data de 29 de outubro não é arbitrária — ela só existe porque a Anthropic lançou o substituto duas semanas antes. O [Claude Haiku 5.5 chegou em 7 de outubro](https://www.anthropic.com/news/claude-haiku-5-5), descrito pela própria empresa como "o modelo pequeno mais barato, mais rápido e mais capaz que já lançamos". Para requisições de até 100 mil tokens, o preço cai de US$ 1 para US$ 0,10 por milhão de tokens de entrada e de US$ 5 para US$ 0,50 na saída — um corte de 90% nas duas pontas. Acima de 100 mil tokens, o desconto é menor, de 50%. Na média geral de uso, a Anthropic estima uma economia de cerca de 75%.

O outro diferencial é o controle de esforço: o Haiku 5.5 é o primeiro modelo da linha Haiku com cinco níveis ajustáveis, de "Low" a "Max", que deixam quem programa decidir se quer priorizar custo ou qualidade de resposta tarefa a tarefa. Esse tipo de ajuste fino já existia nos modelos Opus e Sonnet da casa — chegar ao Haiku é o que torna a troca atrativa também para quem roda tarefas simples em grande volume, como resumos, classificação de texto ou atendimento ao cliente.

## Os números que sustentam a decisão

A Anthropic publicou comparações diretas entre as duas versões em benchmarks de uso de computador, terminal e raciocínio. Os ganhos mais chamativos aparecem em tarefas que simulam o uso prático de agentes:

| Benchmark | Haiku 4.5 | Haiku 5.5 |
|---|---|---|
| OSWorld 2.1 (subconjunto offline) | 15,7% | 72,4% |
| Terminal-Bench 4.0 | 0,0% | 39,2% |
| Humanity's Last Exam (sem ferramentas) | 10,2% | 45,9% |
| Humanity's Last Exam (com ferramentas) | 18,7% | 57,4% |

Os números são autodeclarados pela empresa — nenhum laboratório independente publicou réplica desses testes até a data desta reportagem — mas servem de justificativa pública para a troca forçada no seletor. Clientes citados no próprio anúncio reforçam o padrão: a Asana relata redução de mais de 30% na latência de conclusão de tarefas, e a HubSpot diz ter alcançado sua melhor pontuação já registrada em uma suíte interna de CRM com o novo modelo. Quem quiser comparar esses números lado a lado com outros modelos do mercado pode usar o [Comparador de IAs](/comparador) do Turbina IA, e simular o impacto do corte de preço na própria fatura com a [Calculadora de Custos de IA](/calculadora).

Vale um contraponto: mesmo com o salto, o Haiku 5.5 continua abaixo do topo da própria linha da Anthropic. No mesmo anúncio, o Claude Sonnet 5.5 aparece com 83,9% no OSWorld 2.1 e 70,6% no Terminal-Bench 4.0 — acima dos 72,4% e 39,2% do novo Haiku. A lógica de produto não é substituir o Sonnet ou o Opus em tarefas complexas, mas tornar viável usar um modelo rápido e barato em volume alto, como triagem de mensagens, busca em banco de dados ou subagentes que trabalham junto com modelos maiores.


![Imagem ilustrativa sobre Claude Haiku 4.5 Sai do Seletor de Modelos em 29 de Outubro: O Que Muda e Como se Preparar](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80)

## O que não muda: Code, Team, Enterprise e a API seguem com Haiku 4.5

A remoção é limitada aos planos de consumidor. O centro de ajuda da Anthropic é explícito: o Claude Code, os planos Team e Enterprise e a Claude Platform (a API usada por quem desenvolve produtos sobre o modelo) continuam com acesso normal ao Haiku 4.5, sem data de corte anunciada para essas superfícies. Na documentação técnica da própria API, aliás, o Haiku 4.5 nem está classificado como "deprecated" — seu status é ["Active (legacy)"](https://platform.claude.com/docs/en/models/haiku-4-5/overview), com retirada prevista para "não antes de 15 de outubro de 2026" no cronograma de aposentadoria de modelos.

Essa diferença de tratamento mostra que o que acontece em 29 de outubro é uma decisão de produto, não uma aposentadoria técnica do modelo. A Anthropic mantém o Haiku 4.5 rodando normalmente para quem paga para construir sobre ele — só não quer mais oferecê-lo como opção padrão para quem conversa com o Claude pelo aplicativo.

## Suas conversas antigas não desaparecem

Um ponto que costuma gerar confusão em trocas como essa é o destino do histórico. O artigo oficial garante que nenhuma conversa é apagada: "as conversas com Haiku 4.5 permanecem na sua conta, e nada é excluído". Reabrir um chat antigo depois de 29 de outubro simplesmente faz a continuação ser respondida pelo Haiku 5.5 — o texto já escrito continua lá, intacto. Quem quiser manter uma cópia externa antes da virada pode exportar os próprios dados do Claude a qualquer momento, usando a ferramenta de exportação indicada no mesmo artigo de ajuda.

## Como se preparar antes do prazo

Para a maioria das pessoas, não há nada para "preparar" de fato — a troca é automática e silenciosa. Mas três situações pedem atenção:

1. **Quem fixou o Haiku 4.5 de propósito** (por exemplo, para manter respostas mais previsíveis em um fluxo de trabalho) deve testar o Haiku 5.5 antes do dia 29, já que o comportamento muda com o novo tokenizador e os níveis de esforço ajustáveis.
2. **Quem integrou [prompts](/prompts) ou automações pensando em um comportamento específico do 4.5** ganha duas semanas de sobreposição para comparar respostas lado a lado — ambos os modelos continuam disponíveis até a data do corte.
3. **Quem usa Claude Code, API ou planos Team/Enterprise** não precisa fazer nada agora, mas vale acompanhar o [Monitor de Modelos](/changelog) do Turbina IA para saber quando (e se) a aposentadoria chegar também a essas camadas.

## Por dentro do calendário de aposentadoria de modelos da Anthropic

A troca de 29 de outubro se encaixa em uma lógica que a Anthropic documenta publicamente. A empresa define quatro estágios de vida para cada modelo — Active, Legacy, Deprecated e Retired — e se compromete a dar pelo menos 60 dias de aviso antes de retirar de fato um modelo já lançado ao público, conforme a [página oficial de aposentadoria de modelos](https://platform.claude.com/docs/en/about-claude/model-deprecations). Um modelo "Legacy" como o Haiku 4.5 ainda funciona normalmente; só deixa de receber atualizações e passa a ser candidato a uma futura depreciação formal.

O histórico documentado nessa mesma página mostra que o ritmo não é incomum: o Claude Sonnet 4.5 foi notificado de aposentadoria na API em 30 de setembro de 2026, com retirada marcada para 30 de novembro; o Opus 4.1 seguiu o mesmo roteiro em junho, saindo de circulação em agosto. A diferença, no caso do Haiku 4.5, é que a mudança visível ao público em geral acontece primeiro nos aplicativos de consumidor — chat, Cowork e Design — enquanto a camada de desenvolvedores segue em um cronograma próprio e, por ora, mais lento.

Há um detalhe que raramente aparece nessas notícias de troca de modelo: a mesma documentação cita um compromisso da Anthropic de preservar os pesos dos modelos retirados a longo prazo, [segundo a página sobre compromissos de depreciação de modelos](https://www.anthropic.com/research/deprecation-commitments), em vez de simplesmente descartá-los quando saem de uso. A empresa lista entre os riscos de aposentar um modelo a perda de acesso para pesquisadores que fazem estudos comparativos e possíveis questões de bem-estar do próprio modelo — um raciocínio pouco comum fora dos laboratórios de ponta, mas que mostra que a decisão de 29 de outubro faz parte de um processo bem mais formalizado do que um simples botão desligado.

## Perguntas Frequentes

### O Claude Haiku 4.5 deixa de existir em 29 de outubro?

Não. Ele deixa de aparecer como opção no seletor de modelos do chat, do Cowork e do Design nos planos Free, Pro e Max. Ele continua funcionando normalmente no Claude Code, nos planos Team e Enterprise e na API, sem data de desligamento anunciada para essas camadas.

### Minhas conversas feitas com o Haiku 4.5 vão ser apagadas?

Não. A Anthropic garante que nenhuma conversa é excluída. Reabrir um chat antigo depois do corte apenas faz as próximas respostas virem do Haiku 5.5 — o conteúdo já escrito permanece disponível e pode ser exportado a qualquer momento.

### Por que a Anthropic está fazendo essa troca agora?

Porque lançou o Haiku 5.5 em 7 de outubro de 2026 com corte de preço de até 90% em relação ao Haiku 4.5 e ganhos relevantes em benchmarks de uso de agentes, como OSWorld e Terminal-Bench. Tornar o novo modelo o padrão nos aplicativos de consumidor é a forma de migrar a base de usuários sem exigir uma ação manual da maioria das pessoas.

## Fontes e Referências

- [Claude Haiku 4.5 está saindo do seletor de modelos](https://support.claude.com/pt/articles/17444146-claude-haiku-4-5-esta-saindo-do-seletor-de-modelos)
- [Introducing Claude Haiku 5.5](https://www.anthropic.com/news/claude-haiku-5-5)
- [Claude Haiku 4.5 — model overview](https://platform.claude.com/docs/en/models/haiku-4-5/overview)
- [Model deprecations — Claude Platform docs](https://platform.claude.com/docs/en/about-claude/model-deprecations)
- [Commitments on Model Deprecation and Preservation](https://www.anthropic.com/research/deprecation-commitments)