---
title: "GitHub Copilot Grátis: Como Usar o Plano Free em 2026 (e Quando Vale Pagar)"
seoTitle: "GitHub Copilot Grátis: Como Usar o Plano Free em 2026"
description: "Guia completo do GitHub Copilot Free: limites de uso, como ativar no VS Code, Agent Mode, Copilot CLI e quando migrar para o plano Pro."
category: ferramentas
tags:
  - GitHub Copilot
  - Programação
  - Inteligência Artificial
  - VS Code
author: Redação Turbina IA
isFeatured: false
date: "2026-11-11"
coverImage: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=80"
---

São 2.000 sugestões de código e 50 requisições de chat por mês. Esse é o limite escrito, hoje, na [documentação oficial do GitHub](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/copilot-billing/understanding-and-managing-requests-in-copilot) para quem usa o Copilot Free — o plano sem custo que qualquer pessoa com conta no GitHub pode ativar, sem cartão e sem período de teste. O número não é novo: é praticamente o mesmo desde o lançamento do plano, em [18 de dezembro de 2024](https://techcrunch.com/2024/12/18/github-launches-a-free-version-of-its-copilot), quando o GitHub bateu a marca de 150 milhões de desenvolvedores cadastrados e decidiu abrir uma versão gratuita do assistente para todo mundo, não só para quem pagava.

> **Resposta Rápida (TL;DR):** O GitHub Copilot Free dá direito a até 2.000 sugestões de código e 50 requisições de chat/agente por mês, sem cartão de crédito, funcionando no VS Code, Visual Studio e IDEs JetBrains. Desde junho de 2026 ele só usa seleção automática de modelo (sem escolher manualmente GPT ou Claude), e o Agent Mode e o Copilot CLI também estão liberados, só que com cota mais curta do que nos planos pagos.

O que mudou de 2024 para 2026 não foi o tamanho da cota — foi o que passou a rodar por trás dela. Em abril de 2026, o GitHub anunciou que ia trocar o sistema de cobrança dos planos pagos, e isso criou confusão sobre se o plano grátis também tinha sido afetado. Não foi, pelo menos não nos números. Mas entender a diferença evita decisões erradas, como assinar um Pro achando que vai resolver um problema que, na real, é só de modelo disponível.

## O que o GitHub Copilot Free inclui de verdade

A cota é simples de descrever e difícil de perceber na prática, porque o GitHub não mostra um contador visível na interface: 2.000 sugestões de autocomplete por mês, mais 50 "requisições premium", que é como o GitHub chama qualquer interação de chat, Agent Mode ou revisão de código feita com IA. Isso está documentado tanto na [página de planos do GitHub](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students) quanto no anúncio original feito pela própria [Microsoft no blog do VS Code](https://code.visualstudio.com/blogs/2024/12/18/free-github-copilot), que descreveu o plano como "sem teste, sem assinatura, sem cartão de crédito — só uma conta no GitHub".

Na prática, 2.000 sugestões de código dão fôlego real para quem programa todos os dias: é bastante difícil estourar esse número só de autocomplete. O gargalo tende a aparecer nas 50 requisições de chat, porque cada pergunta no painel de chat, cada rodada do Agent Mode e cada revisão automática de código consome uma unidade dessa cota — isso inclui até interações com os modelos mais simples disponíveis no plano Free, segundo a mesma documentação.

O plano funciona no VS Code, no Visual Studio, nas IDEs da JetBrains e direto na interface do GitHub.com. Uma ressalva importante: ele é só para contas de desenvolvedor individuais. Quem usa uma licença de Copilot Business ou Enterprise através da empresa não tem acesso ao Free — nesses casos, o acesso já vem de outro lugar.


![Imagem ilustrativa sobre GitHub Copilot Grátis: Como Usar o Plano Free em 2026 (e Quando Vale Pagar)](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80)

## Como ativar o plano grátis em 3 passos

Não existe cadastro separado para o Copilot Free. Quem abre o VS Code sem nenhuma assinatura paga e faz login com uma conta do GitHub já cai automaticamente nesse plano:

1. Abra o VS Code e clique no ícone do Copilot na barra de status (ou use o menu de comando).
2. Faça login com sua conta GitHub pessoal — não precisa ser uma conta nova, nem informar pagamento.
3. Aceite os termos de uso do Copilot quando o VS Code pedir. A partir daí, o autocomplete já aparece inline e o chat fica disponível no painel lateral.

Quem usa Visual Studio ou uma IDE da JetBrains segue o mesmo princípio: o editor detecta a extensão do Copilot instalada, pede login na conta do GitHub e libera o plano Free automaticamente, sem passo extra de ativação.

## Os Créditos de IA mudaram o Pro — não o Free

Em 27 de abril de 2026, o [GitHub anunciou oficialmente](https://github.blog/2026-04-27-github-copilot-is-moving-to-usage-based-billing/) que, a partir de 1º de junho, todos os planos pagos do Copilot passariam a ser cobrados por "Créditos de IA" — uma unidade calculada a partir do consumo real de tokens, e não mais por um número fixo de "requisições premium" mensais. A mudança pegou mal entre desenvolvedores: o [Tecnoblog registrou a reação](https://tecnoblog.net/noticias/devs-estao-furiosos-com-nova-forma-de-cobranca-do-github-copilot/) de quem viu o custo de uso intensivo do Agent Mode subir bastante depois da virada, já que sessões agênticas mais longas consomem muito mais tokens do que uma pergunta simples no chat — e antes as duas custavam a mesma "requisição".

Essa reformulação mexeu com Pro, Pro+, Business e Enterprise. O plano Free, pelo que a própria documentação do GitHub ainda descreve, manteve a lógica antiga: 2.000 completions mais 50 requisições premium fixas por mês, sem conversão para tokens. Ou seja, quem usa o plano grátis não precisa se preocupar com o novo sistema de créditos — ele simplesmente não se aplica a essa camada.

O que de fato mudou para quem está no Free foi outra coisa, anunciada dois meses depois: em [24 de junho de 2026, o GitHub eliminou a escolha manual de modelo](https://github.blog/changelog/2026-06-24-changes-to-model-selection-for-free-and-student-plans) para os planos Free e Student. Antes, dava para escolher entre Claude 3.5 Sonnet e GPT-4o no seletor; agora, tanto o Free quanto o Student usam exclusivamente a seleção automática ("Copilot Auto"), que decide por conta própria qual modelo da pool — hoje incluindo variações do GPT-5 e do Claude Haiku — responde cada pedido. Para a maioria das tarefas do dia a dia isso não faz diferença perceptível, mas quem queria travar num modelo específico para um projeto perdeu essa opção no plano grátis.


![Imagem ilustrativa sobre GitHub Copilot Grátis: Como Usar o Plano Free em 2026 (e Quando Vale Pagar)](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80)

## Agent Mode e Copilot CLI: o que o plano grátis libera

O Agent Mode — o modo em que o Copilot não só sugere código, mas edita vários arquivos e executa comandos sozinho a partir de uma instrução — está disponível no Free, só que com um teto mais curto por sessão. Segundo a [documentação do VS Code](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode), o limite padrão de requisições por sessão de agente (`chat.agent.maxRequests`) é 5 para quem está no Copilot Free, contra 15 para quem tem um plano pago — e cada uma dessas requisições também consome da cota de 50 requisições premium mensais.

O Copilot CLI, por sua vez, está incluído como recurso padrão em todos os planos, incluindo o Free, segundo a mesma documentação da Microsoft. É possível chamá-lo direto do terminal integrado do VS Code ou pelo painel de chat, sem instalação manual — o editor configura tudo automaticamente na primeira vez que a ferramenta é usada. Isso coloca revisão de commits, explicação de comandos e automações simples de terminal dentro do mesmo orçamento de 50 requisições do plano gratuito, então vale usar com critério: deixar o CLI para tarefas repetitivas de terminal e reservar o chat tradicional para perguntas sobre o código em si costuma estirar mais a cota.

## Quem está na faculdade tem um plano melhor: o Copilot Student

Estudantes verificados pelo GitHub Education não ficam no Free. Desde [12 de março de 2026, segundo um anúncio oficial do GitHub](https://github.com/orgs/community/discussions/189268), eles passaram a usar um plano próprio, o Copilot Student — intermediário entre o Free e o Pro completo, sem o teto de 2.000 completions do plano gratuito. A verificação é feita pelo [GitHub Education](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students) e precisa ser renovada periodicamente — o próprio GitHub reavalia a elegibilidade do aluno a cada ciclo.

Professores e mantenedores de projetos open source verificados continuam com acesso ao Copilot Pro completo por meio do programa educacional, segundo a mesma fonte.

| Plano | Quem usa | Completions/mês | Chat e Agent Mode | Escolha de modelo |
|---|---|---|---|---|
| Copilot Free | Qualquer conta individual | Até 2.000 | Até 50 requisições/mês | Só automática |
| Copilot Student | Alunos verificados (GitHub Education) | Sem o teto do Free | Cota ampliada | Só automática |
| Copilot Pro | US$ 10/mês | Ilimitadas | Créditos de IA por token | Manual + automática |

## Vale a pena migrar para o Copilot Pro?

O sinal mais claro de que o Free não é mais suficiente é bem prático: a cota de 50 requisições some antes do meio do mês, não o limite de completions. Isso costuma acontecer com quem usa o Agent Mode para tarefas maiores — refatorar vários arquivos, escrever testes a partir de uma especificação — porque cada rodada de agente consome várias requisições de uma vez, e o teto de 5 por sessão no Free faz a cota girar rápido.

Antes de assinar, dá para estimar o impacto real: quem já paga por tokens de API de outros modelos pode comparar ordens de grandeza no [comparador de IAs do Turbina IA](/comparador) e usar a [calculadora de custo por token](/calculadora) para entender como o consumo de tokens do Agent Mode se traduz em Créditos de IA no Pro. Vale lembrar que a virada para cobrança por uso foi exatamente o que [elevou a conta de quem usa o Copilot de forma intensiva](/blog/github-copilot-adota-cobranca-por-tokens-e-gera-aumentos-de-ate-60x-para-desenvolvedores) — então migrar para o Pro resolve o teto de requisições, mas troca por uma conta que varia com o quanto (e como) você usa o Agent Mode.

Também importa saber que a lista de modelos muda com frequência: o GitHub [aposentou seis modelos do seletor em outubro de 2026](/blog/github-copilot-aposenta-6-modelos-de-ia-no-dia-19-de-outubro-veja-o-que-muda-antes-do-prazo), e isso afeta mais quem está no Pro escolhendo modelo manualmente do que quem está no Free, já restrito ao automático. Para quem só quer organizar comandos de chat mais eficientes dentro da cota do plano grátis, a [lista de prompts para programação do site](/blog/prompts-para-programacao) ajuda a gastar menos requisições por resposta útil — pedidos mais específicos tendem a acertar na primeira tentativa, em vez de precisar de três ou quatro idas e voltas.

## Perguntas Frequentes

### O GitHub Copilot Free pede cartão de crédito?

Não. Segundo o próprio anúncio de lançamento do plano, feito pela Microsoft em dezembro de 2024, basta ter uma conta no GitHub — não há cobrança automática, teste gratuito com vencimento ou necessidade de cadastrar forma de pagamento.

### Dá para escolher entre GPT e Claude no plano grátis?

Não mais. Até junho de 2026 era possível escolher manualmente entre Claude 3.5 Sonnet e GPT-4o no seletor de modelos. Desde a mudança anunciada pelo GitHub em 24 de junho de 2026, os planos Free e Student usam exclusivamente a seleção automática de modelo, sem opção de travar num modelo específico.

### Agent Mode do Copilot funciona no plano gratuito?

Sim, mas com cota menor: o padrão é de 5 requisições por sessão de agente no Free, contra 15 nos planos pagos, e cada uma dessas requisições consome da cota mensal de 50 requisições premium do plano gratuito.

## Fontes e Referências

- [GitHub Launches Free Version of AI Powered Copilot - TechCrunch](https://techcrunch.com/2024/12/18/github-launches-a-free-version-of-its-copilot)
- [Announcing a free GitHub Copilot for VS Code - Visual Studio Code Blog](https://code.visualstudio.com/blogs/2024/12/18/free-github-copilot)
- [Understanding and managing requests in Copilot - GitHub Docs](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/copilot-billing/understanding-and-managing-requests-in-copilot)
- [GitHub Copilot is moving to usage-based billing - The GitHub Blog](https://github.blog/2026-04-27-github-copilot-is-moving-to-usage-based-billing/)
- [Devs estão furiosos com nova forma de cobrança do GitHub Copilot - Tecnoblog](https://tecnoblog.net/noticias/devs-estao-furiosos-com-nova-forma-de-cobranca-do-github-copilot/)
- [Changes to model selection for Free and Student plans - GitHub Changelog](https://github.blog/changelog/2026-06-24-changes-to-model-selection-for-free-and-student-plans)
- [Chat agent mode - Visual Studio Code Docs](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [Access GitHub Copilot for free as a student - GitHub Docs](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-students)
- [Important Updates to GitHub Copilot for Students - GitHub Community](https://github.com/orgs/community/discussions/189268)