---
title: "ChatGPT Vai Desativar os Custom GPTs: Como Funcionam os Novos Plugins e o Que Fazer Antes do Prazo da OpenAI"
description: "OpenAI aposenta os Custom GPTs e migra tudo para Plugins baseados em MCP. Veja o cronograma (já adiado), o que se perde na troca e como migrar."
category: ferramentas
tags:
  - ChatGPT
  - OpenAI
  - Plugins
  - Automação
author: Redação Turbina IA
isFeatured: false
date: "2026-09-24"
coverImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80"
---

Quem abre hoje o menu de criação de assistentes personalizados no [ChatGPT](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) encontra uma tela que só permite editar um GPT já existente — a opção de criar um novo desapareceu das contas Free, Go, Plus e Pro. Não é bug. É o primeiro sinal visível de uma mudança que a OpenAI vem construindo há meses: o fim dos Custom GPTs, a funcionalidade lançada em novembro de 2023 que permitiu a qualquer usuário montar um "assistente sob medida" sem escrever uma linha de código.

> **Resposta Rápida (TL;DR):** A OpenAI está aposentando os Custom GPTs e migrando os usuários para um novo sistema de Plugins baseado no protocolo aberto MCP. Contas pessoais (Free, Go, Plus, Pro) já não podem criar novos GPTs, só editar os existentes; workspaces Enterprise, Business e Edu têm um cronograma formal que a própria OpenAI já adiou uma vez. Quem depende de um GPT alheio corre risco real de perder acesso à substituição.

## O que está acontecendo, exatamente

Segundo a [FAQ oficial de aposentadoria e migração dos Custom GPTs](https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq), publicada e atualizada pela própria OpenAI, o plano é substituir os GPTs por Plugins — pacotes que combinam instruções reutilizáveis (chamadas de "Skills") com aplicativos conectados, tudo construído sobre o Model Context Protocol ([MCP](/glossario)), o padrão aberto que a Anthropic lançou no fim de 2024 e que hoje é adotado também por Google e Microsoft. Na prática, isso significa que uma integração feita para funcionar no ChatGPT tem mais chance de funcionar em outros produtos de IA sem reescrever tudo do zero — o oposto do modelo fechado que os GPTs representavam.

Para contas pessoais, a mudança já está em vigor: a própria página de ajuda da OpenAI sobre GPTs afirma que a criação e publicação de novos assistentes personalizados "não está disponível" para planos Free, Go, Plus e Pro, embora os GPTs já criados continuem funcionando normalmente. Quem usa GPTs próprios no dia a dia — para revisar contratos, gerar relatórios num formato específico, responder no tom de uma marca — não perde nada por enquanto. Mas não vai conseguir criar um novo a partir de hoje.

Para workspaces Enterprise, Business e Edu, existe um cronograma mais formal, e é aqui que a história fica interessante: ele já mudou. O aviso a administradores saiu em 11 de setembro. A experiência de migração dentro do produto, que a OpenAI tinha planejado ativar em 17 de setembro, foi adiada para 22 de setembro. O prazo para deixar de permitir a criação de novos GPTs, inicialmente marcado para 25 de setembro, também foi empurrado — agora está previsto para 26 de outubro. A aposentadoria definitiva, quando os GPTs simplesmente param de rodar, segue marcada para 11 de dezembro. A própria OpenAI rotula cada uma dessas datas como "sujeita a mudança", e o adiamento em cascata sugere que a transição está sendo mais complicada de executar do que a empresa previu.


![Imagem ilustrativa sobre ChatGPT Vai Desativar os Custom GPTs: Como Funcionam os Novos Plugins e o Que Fazer Antes do Prazo da OpenAI](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80)

## Um recurso que já morreu uma vez — e voltou diferente

Tem uma ironia no nome escolhido para o substituto. "Plugins" não é termo novo no ChatGPT: a OpenAI lançou uma primeira versão em 2023, permitindo que o chatbot chamasse serviços externos via APIs, e a descontinuou em março de 2024 justamente porque os Custom GPTs — mais fáceis de criar e de descobrir dentro do produto — tomaram o lugar dela. Agora o pêndulo volta na direção oposta, mas com uma diferença técnica que muda o jogo: os novos Plugins não dependem de esquemas proprietários da OpenAI, e sim do MCP, o mesmo protocolo que já roda no Claude, no Cursor e em dezenas de outras ferramentas.

Foi essa aposta em um padrão comum entre concorrentes que a OpenAI reforçou nesta semana. Em [23 de setembro, a empresa adicionou suporte a Plugins ao modo de Voz ao Vivo do ChatGPT](https://techcrunch.com/2026/09/23/chatgpt-mobile-app-gets-voice-based-agentic-features/) na web, no iOS e no Android, e também levou o recurso de Voz para dentro do ChatGPT Work. Na prática, isso permite que alguém dispare, por comando de voz, uma tarefa que puxa dados do Gmail, do calendário ou do Slack — usando exatamente a mesma infraestrutura de Plugins que está substituindo os GPTs. É um sinal de que a empresa não está tratando os Plugins como um recurso secundário: é para onde o produto inteiro está indo.

## O que sobrevive na migração — e o que não sobrevive

A documentação oficial de desenvolvedores da OpenAI descreve o [novo ecossistema de Plugins](https://developers.openai.com/plugins) como uma combinação de Skills (instruções e orientação de fluxo de trabalho) e aplicativos conectados (contas externas que o ChatGPT pode acessar, como Google Drive ou Slack). Quando um Custom GPT é migrado automaticamente, alguns elementos passam direto, outros não:

| Elemento do Custom GPT | O que acontece na migração |
|---|---|
| Instruções ([prompt](/prompts) do sistema) | Viram uma Skill dentro do novo Plugin |
| Arquivos de conhecimento (Knowledge) | Convertidos em arquivos de referência |
| Aplicativos conectados | Incluídos como apps do Plugin |
| Actions personalizadas (chamadas de API) | **Não migram** — precisam ser reconstruídas via conector suportado ou servidor MCP próprio |
| Escolha de modelo específico | **Não migra** — o Plugin usa o modelo padrão do usuário |

O ponto mais delicado, porém, não é técnico — é de propriedade. A própria FAQ da OpenAI afirma, em uma frase que vale a pena citar literalmente: acesso a um GPT público não garante acesso ao plugin que o substitui. Ou seja, quem usa um GPT criado por outra pessoa (um assistente de terceiros que virou parte da rotina, por exemplo) não tem nenhuma garantia de que vai poder continuar usando a versão migrada, porque a decisão de migrar — e de manter o plugin público — é do criador original, não de quem apenas usa.

Essa cláusula já gerou reação. No fórum oficial de desenvolvedores da OpenAI, criadores pequenos que monetizavam GPTs personalizados relataram ter investido centenas de horas construindo, testando e refinando esses assistentes, e agora veem um caminho de migração que não preserva automaticamente as Actions que tornavam seus produtos únicos. Parte da comunidade também pediu que a empresa reconsiderasse a aposentadoria completa, ou ao menos preservasse os fluxos de trabalho que dependem de usuários com necessidades específicas de acessibilidade, que tinham GPTs configurados exatamente para seu jeito de trabalhar.


![Imagem ilustrativa sobre ChatGPT Vai Desativar os Custom GPTs: Como Funcionam os Novos Plugins e o Que Fazer Antes do Prazo da OpenAI](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80)

## Por que isso importa para quem só usa o ChatGPT no dia a dia

Vale separar duas categorias de leitor aqui. Se você nunca criou um GPT personalizado e só usa o ChatGPT no chat comum, a mudança não altera sua experiência diretamente — o modelo de conversa continua o mesmo. Mas se sua empresa, sua equipe de marketing ou você mesmo construiu um assistente para uma tarefa recorrente (responder e-mails num tom específico, montar relatórios num formato fixo, revisar peças de acordo com um guia de estilo), há uma lista de ações que faz sentido resolver agora, antes que o prazo mude de novo:

Primeiro, publique qualquer GPT que ainda esteja como rascunho — contas pessoais já não conseguem criar novos, então um rascunho não publicado corre risco de ficar irrecuperável. Segundo, se o seu GPT usa Actions (chamadas para uma API externa, como um CRM ou uma planilha do Google), comece a mapear qual conector nativo da OpenAI pode substituir essa integração, ou se será necessário montar um servidor MCP próprio — um processo que a documentação da própria empresa reconhece que pode levar semanas. Terceiro, se você depende de um GPT feito por outra pessoa ou empresa, entre em contato com quem criou para confirmar se ele pretende migrar e manter o acesso público; não dá para presumir que sim.

Um paralelo prático ajuda a entender a escala da mudança: um Custom GPT funcionava como um app fechado, que você abria como se fosse um aplicativo separado dentro do ChatGPT. Um Plugin, na nova arquitetura, funciona mais como uma habilidade que fica disponível dentro da conversa que você já está tendo — inclusive, como mostrou a atualização de voz desta semana, dentro de uma conversa falada. É a mesma lógica de composição que já orienta ferramentas como as reunidas no [Guia de Ferramentas de IA](/ferramentas) do Turbina IA, em que cada peça (um conector, uma automação, um modelo) se encaixa em um fluxo maior em vez de existir como um app isolado.

## O contexto mais amplo: todo mundo está migrando para Skills

A OpenAI não está sozinha nessa aposta. A ideia de trocar "assistentes fechados" por "habilidades combináveis" espelha um movimento que já vinha acontecendo em outros laboratórios — a própria Anthropic populariza o conceito de Skills como pacotes de instruções que o Claude carrega sob demanda, em vez de depender de um app inteiro dedicado a uma única tarefa. Quem acompanha o [Monitor de Modelos e Lançamentos](/changelog) do Turbina IA já deve ter notado como esse vocabulário — Skills, MCP, conectores — se repete entre concorrentes que, até dois anos atrás, construíam soluções fechadas e incompatíveis entre si. A convergência em torno do MCP como padrão comum é o que torna a mudança da OpenAI diferente da simples troca de nome de um recurso: é uma aposta de que o valor de uma integração está em funcionar em qualquer produto de IA, não em prender o usuário a um único chatbot.

Isso também devolve poder de escolha para quem usa mais de uma ferramenta no trabalho. Hoje é comum alternar entre ChatGPT, Claude e Gemini dependendo da tarefa — algo que o [Comparador de IAs](/comparador) do site ajuda a decidir caso a caso — e um conector MCP construído uma vez, em teoria, deixa de ser um investimento perdido quando a pessoa migra de plataforma. Na prática ainda é cedo para confirmar que essa promessa de portabilidade total vai se sustentar: cada fornecedor mantém seu próprio catálogo de conectores certificados, e nem todo servidor MCP funciona de forma idêntica em cada cliente.

## O que fazer se seu fluxo de trabalho depende de um GPT hoje

Antes de qualquer decisão, vale um inventário simples. Liste os GPTs que sua equipe usa com frequência de verdade — não os que foram criados uma vez e esquecidos — e separe os que têm Actions configuradas dos que são só instruções e arquivos de conhecimento. Os segundos tendem a migrar de forma mais limpa, porque instruções viram Skills quase diretamente. Os primeiros exigem mais atenção: cada Action é, na prática, uma integração de API que alguém configurou manualmente, e a OpenAI é explícita ao dizer que esse tipo de conexão não atravessa a migração sozinho.

Para equipes que usam GPTs para gerar conteúdo com um tom ou formato específico, uma alternativa mais simples do que esperar a migração automática é recriar a instrução como um prompt reutilizável enquanto o sistema de Plugins amadurece — algo que se aproxima do que já existe na [biblioteca de Prompts](/prompts) do Turbina IA para quem quer testar formatos prontos antes de investir tempo automatizando de novo. Isso não substitui um GPT com conhecimento próprio e Actions, mas evita que uma tarefa recorrente fique travada esperando um cronograma que, como já ficou claro nas últimas duas semanas, pode mudar de novo.

## Perguntas Frequentes

### Meu Custom GPT vai parar de funcionar hoje?

Não, se você usa uma conta pessoal (Free, Go, Plus ou Pro). GPTs já criados continuam rodando normalmente; o que mudou é que não é mais possível criar ou publicar um GPT novo nessas contas. Para workspaces Enterprise, Business e Edu, os GPTs devem continuar funcionando pelo menos até 11 de dezembro de 2026, data planejada para a aposentadoria definitiva — mas a própria OpenAI já adiou esse cronograma uma vez e o classifica como sujeito a mudança.

### O que é um Plugin e por que ele é diferente de um Custom GPT?

Um Plugin é um pacote que combina Skills (instruções reutilizáveis) com aplicativos conectados, construído sobre o protocolo aberto [MCP](/glossario). Ao contrário do Custom GPT, que funcionava como um assistente fechado e separado dentro do ChatGPT, o Plugin fica disponível dentro da conversa normal — inclusive por voz — e usa um padrão que também roda em outras ferramentas de IA, não só no ChatGPT.

### Existe algo que eu perco ao migrar um GPT para Plugin?

Sim, dois pontos importantes. As Actions personalizadas — chamadas de API que o GPT fazia para serviços externos — não são transferidas automaticamente e precisam ser reconstruídas com um conector suportado ou um servidor MCP próprio. E a escolha de um modelo específico configurada no GPT também não migra; o Plugin passa a usar o modelo padrão da conta. Vale revisar esses dois pontos antes de considerar a migração concluída.

## Fontes e Referências

- [Custom GPT retirement and migration FAQ (OpenAI Help Center)](https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq)
- [Plugins | OpenAI Developers](https://developers.openai.com/plugins)
- [ChatGPT mobile app gets voice-based agentic features (TechCrunch)](https://techcrunch.com/2026/09/23/chatgpt-mobile-app-gets-voice-based-agentic-features/)