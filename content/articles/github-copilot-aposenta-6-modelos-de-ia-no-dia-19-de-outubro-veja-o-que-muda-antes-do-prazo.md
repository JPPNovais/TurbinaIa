---
title: "GitHub Copilot Aposenta 6 Modelos de IA no Dia 19 de Outubro: Veja o Que Muda Antes do Prazo"
description: "GitHub já desligou 4 modelos do Copilot em 2/10 e vai desligar outros 6 em 19/10/2026. Veja a lista completa, os substitutos e como não travar seus agentes."
category: ferramentas
tags:
  - GitHub Copilot
  - Modelos de IA
  - Ferramentas para Desenvolvedores
author: Redação Turbina IA
isFeatured: false
date: "2026-10-15"
coverImage: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=80"
---

Se você abre o GitHub Copilot todo dia para programar, vale marcar o calendário: a partir de 19 de outubro, seis modelos que podem estar configurados no seu seletor agora — incluindo GPT-5.5, GPT-5.4 e Grok 4.5 — simplesmente vão parar de responder. Não é a primeira vez este ano. Duas semanas antes, no dia 2 de outubro, o GitHub já havia desligado outros quatro modelos, entre eles o [Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) Opus 4.7.

> **Resposta Rápida (TL;DR):** O GitHub descontinuou Gemini 3.5 Flash, Gemini 3.6 Flash, Kimi K2.7 Code e Claude Opus 4.7 em todas as experiências do Copilot no dia 2 de outubro de 2026. No dia 19 de outubro é a vez de Gemini 3.7 Flash, GPT-5.5, GPT-5.4, GPT-5.4 mini, GPT-5 mini e Grok 4.5 saírem do ar. Usuários individuais não precisam fazer nada — o Copilot já aponta para os substitutos —, mas quem automatiza chamadas via API ou GitHub Actions citando o nome exato de um modelo precisa trocar a referência antes do prazo.

## O que já saiu do ar em 2 de outubro

Segundo o [changelog oficial do GitHub](https://github.blog/changelog/2026-10-02-selected-models-in-github-copilot-deprecated), a partir daquela data quatro modelos deixaram de existir em "todas as experiências do Copilot" — ou seja, no chat, nas edições inline, nos modos ask e agent e na própria sugestão de código em tempo real do editor. A lista:

| Modelo descontinuado | Substituto sugerido |
|---|---|
| [Gemini](/blog/prompts-para-gemini) 3.5 Flash | Gemini 3.8 Flash |
| Gemini 3.6 Flash | Gemini 3.8 Flash |
| Kimi K2.7 Code | Kimi K3 |
| Claude Opus 4.7 | Claude Opus 5.5 |

O detalhe que chama atenção é a troca do Opus: o próprio GitHub havia avisado, em nota publicada semanas antes, que o substituto seria o "Claude Opus 5" — mas o changelog final, no dia da aposentadoria, especifica Claude Opus 5.5. Pequenas revisões assim não são raras nesse tipo de aviso, e reforçam por que vale checar o changelog no dia, e não confiar só no pré-aviso.


![Imagem ilustrativa sobre GitHub Copilot Aposenta 6 Modelos de IA no Dia 19 de Outubro: Veja o Que Muda Antes do Prazo](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80)

## O que ainda vai cair em 19 de outubro

A segunda leva já tinha sido anunciada desde 18 de setembro, no post ["Upcoming deprecation of selected GitHub Copilot models in mid-October"](https://github.blog/changelog/2026-09-18-upcoming-deprecation-of-selected-github-copilot-models-in-mid-october). Ela é maior — seis modelos de três fornecedores diferentes:

| Modelo que sai | Substituto sugerido |
|---|---|
| Gemini 3.7 Flash | Gemini 3.8 Flash |
| GPT-5.5 | GPT-5.6 Sol |
| GPT-5.4 | GPT-5.6 Sol |
| GPT-5.4 mini | GPT-5.6 Luna |
| GPT-5 mini | GPT-5.6 Luna |
| Grok 4.5 | Grok 4.6 |

Essa leva atinge, de novo, chat, edições inline, modos ask/agent e autocompletar — praticamente todo o produto. Quem hoje fixou manualmente o "GPT-5.5" como modelo padrão de um agente, de uma GitHub Action ou de uma integração via API vai ver aquele modelo simplesmente não existir mais depois do dia 19, a menos que troque a referência antes.

## Onde isso te afeta, na prática

O changelog do GitHub é claro ao listar o alcance de cada leva: "todas as experiências do Copilot", o que inclui o chat dentro do VS Code, o modo agent que executa tarefas de forma autônoma, o modo ask para perguntas pontuais, as edições inline (quando você seleciona um trecho de código e pede uma mudança) e a sugestão de código em tempo real enquanto você digita. Não é uma mudança restrita a uma função específica — é o produto inteiro migrando de modelo por trás dos bastidores, surface por surface.

Isso explica por que times que usam o Copilot de formas diferentes — um desenvolvedor que só aceita sugestões de autocompletar, outro que delega tarefas inteiras a um agente — sentem o impacto de maneiras distintas. Quem usa o modo agent com um modelo fixado manualmente para tarefas longas (refatorações grandes, por exemplo) é quem mais precisa confirmar, antes do dia 19, que o substituto se comporta de forma parecida com o modelo antigo para aquele tipo específico de tarefa.


![Imagem ilustrativa sobre GitHub Copilot Aposenta 6 Modelos de IA no Dia 19 de Outubro: Veja o Que Muda Antes do Prazo](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

## Por que não é preciso fazer nada (na maioria dos casos)

Para quem usa o Copilot só pelo seletor de modelos do VS Code ou do github.com, a troca é automática: o GitHub remove o modelo antigo e mantém o fluxo funcionando com o substituto sugerido, sem exigir nenhuma ação manual. O próprio aviso oficial é explícito sobre isso, pedindo apenas que "workflows e integrações sejam atualizados para usar o modelo suportado antes dessas datas" — uma recomendação dirigida a quem automatiza, não a quem só clica no seletor.

A pegadinha fica em contas Copilot Enterprise ou Business com política de modelos restrita: ali, as alternativas sugeridas só ficam disponíveis automaticamente se o administrador não tiver desativado o padrão global nem bloqueado explicitamente aquele modelo específico. Se a organização usa uma política mais fechada, alguém precisa entrar nas configurações do Copilot e habilitar manualmente o modelo substituto — Gemini 3.8 Flash, GPT-5.6 Sol, GPT-5.6 Luna, Grok 4.6, Kimi K3 ou Claude Opus 5.5, dependendo do caso — antes que o time sinta a falta do modelo antigo.

Vale lembrar que essa descontinuação vale só *dentro* do Copilot: ela não significa que GPT-5.5 ou Claude Opus 4.7 deixam de existir nas APIs originais da OpenAI ou da Anthropic. Se você comparar as opções de modelo disponíveis em diferentes produtos, o [Comparador de IAs](/comparador) do Turbina IA ajuda a visualizar o que cada versão ainda oferece fora do ecossistema Copilot.

## Um padrão: o quarto ciclo de aposentadoria do ano

O mais chamativo não é esta leva isolada, mas a frequência. Olhando o histórico de changelogs do GitHub, 2026 já teve pelo menos quatro ciclos de descontinuação de modelos no Copilot: um em março (Gemini 3 Pro e GPT-5.1), outro em julho (Gemini 2.5 Pro e Gemini 3 Flash), um terceiro efetivado em 1º de setembro — atingindo o Gemini 3.1 Pro e uma série de versões do Claude Opus e Sonnet 4.x, segundo o [aviso de agosto do GitHub](https://github.blog/changelog/2026-08-03-upcoming-august-2026-model-deprecations-in-github-copilot) — e agora este, dividido em duas datas de outubro. Naquela leva de setembro, uma exceção chamou atenção: o Claude Sonnet 4.6 continuou disponível só para assinantes individuais do Copilot em planos anuais, enquanto o restante da base de usuários perdeu acesso ao modelo — prova de que nem toda aposentadoria é igual para todo tipo de conta.

Isso é reflexo direto do ritmo de lançamento dos próprios laboratórios: conforme OpenAI, Google, Anthropic e xAI lançam versões mais novas e mais baratas de seus modelos — prática que o [Monitor de Modelos](/changelog) do Turbina IA acompanha lançamento a lançamento —, o GitHub precisa decidir quando parar de manter a versão anterior ativa em todas as superfícies do Copilot. Para o desenvolvedor, o efeito prático é que "fixar" um modelo específico num pipeline automatizado virou uma decisão com validade curta — algo que vale revisar a cada poucos meses, não configurar uma vez e esquecer. Quem gerencia várias integrações ao mesmo tempo — um bot de revisão de código aqui, uma GitHub Action de geração de testes lá — sente isso de forma mais direta: cada ciclo de aposentadoria é, na prática, uma rodada extra de manutenção que não existia há dois anos, quando a maioria dos times ainda usava um único modelo fixo por meses a fio.

Esse tipo de troca de versão de modelo — um termo que confunde até quem já usa IA no dia a dia — está explicado em detalhe no [Glossário de IA](/glossario) do site, incluindo a diferença entre uma versão ser "descontinuada" dentro de um produto específico e ser desligada na API original do fornecedor.

## O que fazer até o dia 19

Na prática, a lista de verificação para não ser pego de surpresa é curta:

- **Se você só usa o seletor de modelos no editor ou no chat:** não precisa fazer nada. A troca acontece automaticamente para o substituto sugerido.
- **Se você automatiza algo que referencia o nome exato de um modelo** — scripts que chamam a API do Copilot, GitHub Actions customizadas, integrações de CI que fixam "gpt-5.5" ou "grok-4.5" como parâmetro — troque a referência para o substituto correspondente da tabela acima antes do dia 19.
- **Se você administra uma conta Copilot Enterprise ou Business:** confira, nas configurações de política de modelos, se o substituto de cada modelo que seu time usa está habilitado. O próprio GitHub orienta verificar isso diretamente na tela de configurações do Copilot, por modelo.
- **Se seu time depende de um modelo específico por motivo de qualidade** (por exemplo, prefere o comportamento do GPT-5.4 ao do GPT-5.6 Sol): vale testar o substituto com antecedência, porque depois do prazo não há como reverter dentro do Copilot.
- **Se você mantém documentação interna ou prompts de equipe** que citam o nome de um modelo específico (um guia interno de "qual modelo usar para quê", por exemplo) — e muita gente usa exatamente esse tipo de lista, parecida com a que reunimos nos [Prompts prontos](/prompts) do Turbina IA — é o momento de revisar e atualizar as referências, já que o nome antigo deixará de aparecer no seletor.

Nenhuma dessas ações é complicada isoladamente. O problema é a cadência: como mostra o histórico de 2026, não dá para tratar isso como um evento único — é um processo recorrente que qualquer time que depende do Copilot para trabalho sério precisa incorporar à própria rotina de manutenção, do mesmo jeito que já trata atualização de dependências de código.

## Perguntas Frequentes

### Meu código vai parar de funcionar se eu não fizer nada?

Não, na grande maioria dos casos. Se você usa o Copilot pelo seletor padrão do VS Code, do github.com ou do app, o sistema troca automaticamente para o modelo substituto indicado pelo GitHub. O risco real existe só para quem automatiza chamadas citando o nome exato de um modelo descontinuado, ou para contas Enterprise/Business com política de modelos bloqueada manualmente.

### Claude Opus 4.7, GPT-5.5 e os outros modelos deixam de existir de verdade?

Não fora do Copilot. A descontinuação vale apenas para a disponibilidade dentro das experiências do GitHub Copilot — chat, autocompletar, modos ask e agent. As APIs originais da OpenAI, da Anthropic, do Google e da xAI para essas versões seguem com seus próprios cronogramas, que o GitHub não controla nem anuncia.

### Como sei se minha conta vai ser afetada antes do dia 19?

Abra as configurações do Copilot na sua conta (ou, em contas Enterprise/Business, o painel de políticas de modelo do administrador) e veja quais modelos estão habilitados hoje. Se algum dos seis modelos da tabela da leva de 19 de outubro aparecer como padrão em um workflow, GitHub Action ou integração que você mantém, troque a referência antes da data — o changelog oficial do GitHub é atualizado no próprio dia da mudança e vale a pena revisitar.

## Fontes e Referências

- [Selected models in GitHub Copilot deprecated](https://github.blog/changelog/2026-10-02-selected-models-in-github-copilot-deprecated)
- [Upcoming deprecation of selected GitHub Copilot models in mid-October](https://github.blog/changelog/2026-09-18-upcoming-deprecation-of-selected-github-copilot-models-in-mid-october)
- [Upcoming deprecation of selected GitHub Copilot models](https://github.blog/changelog/2026-09-03-upcoming-deprecation-of-selected-github-copilot-models)