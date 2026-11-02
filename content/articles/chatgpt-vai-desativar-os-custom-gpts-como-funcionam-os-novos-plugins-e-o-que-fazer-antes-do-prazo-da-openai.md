---
title: "ChatGPT Vai Desativar os Custom GPTs em 11 de Dezembro: o Que Você Perde e o Que Fazer Antes"
seoTitle: "Migre seus GPTs para Plugins até 11 de dezembro"
description: "Custom GPTs param em 11/12/2026. Passo a passo oficial para migrar para Plugins: o que passa, o que não passa e o que acontece com as conversas."
category: ferramentas
tags:
  - ChatGPT
  - OpenAI
  - Plugins
  - Automação
author: Redação Turbina IA
isFeatured: false
date: "2026-09-24"
updatedAt: "2026-11-02"
coverImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80"
---

Os Custom GPTs do ChatGPT têm data de aposentadoria marcada: **11 de dezembro de 2026**. A [FAQ oficial da OpenAI](https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq), atualizada no fim de outubro de 2026, mantém esse dia como a data padrão. Workspaces FedRAMP e workspaces Enterprise afetados com adiamento aprovado ficam para **11 de fevereiro de 2027**. Essa data extra não vale para todo mundo: vale o aviso da sua conta.

Se você criou o GPT, o caminho oficial é migrar para um Plugin antes dessa data. Se você só usa um GPT de outra pessoa, não dá para migrar no lugar dela.

> **Resposta Rápida (TL;DR):** A aposentadoria padrão é 11 de dezembro de 2026. Quando a migração aparecer na sua conta, vá em Meus GPTs, abra o que você criou e escolha **Migrar para plugin**. A migração usa a última versão publicada: rascunho não passa. Instruções viram uma skill, arquivos de conhecimento viram arquivos de referência e apps conectados entram no plugin. Actions personalizadas e o modelo escolhido no GPT não passam. O plugin nasce privado. As conversas antigas continuam acessíveis depois da aposentadoria, segundo a própria FAQ — não é preciso exportá-las para preservá-las.

## O que fazer agora, em ordem

O passo a passo abaixo junta a [FAQ de aposentadoria](https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq) e o [guia de migração para criadores](https://learn.chatgpt.com/docs/migrate-custom-gpts). A opção de migrar pode ainda não estar na sua conta: a OpenAI diz que o acesso chega em momentos diferentes e que uma data-alvo não garante que toda conta consiga migrar naquele dia.

1. **Separe o que é seu do que é de outra pessoa.** Só o criador (ou, num workspace Enterprise, um admin) migra o GPT. Permissão para usar o de outra pessoa não autoriza a migração.
2. **Termine a edição e publique.** A migração usa a última versão publicada. Rascunho e edição não publicada não passam. Publicar não exige deixar o GPT público.
3. **Anote o público e alguns prompts que você já usa.** O plugin nasce privado, e quem usava o GPT não ganha acesso sozinho. Os conversation starters também não passam um a um.
4. **Migre quando o botão existir.** Em Meus GPTs, no que você criou, selecione **Migrar para plugin**. Revise as instruções e os arquivos e siga o que a tela pedir.
5. **Teste antes de trocar a rotina.** Rode um pedido que você já conhece e um caso mais difícil. Confira se a skill certa entra, se o arquivo de referência é usado e se o formato da resposta continua o que você precisa.
6. **Compartilhe de novo, se outras pessoas dependem dele.** No workspace, Share Plugin pode preencher o público original, mas é preciso revisar e salvar. Plugin pessoal público passa por um envio separado.
7. **Se o GPT chama uma API sua (Action), reserve tempo extra.** Custom actions não entram na migração. Dá para reconstruir com um app suportado ou um servidor MCP, e a OpenAI avisa que isso pode exigir configuração técnica. Não assuma que a substituição faz tudo o que a Action fazia.

Depois da migração o GPT original fica somente leitura e continua utilizável até a aposentadoria. Na data que vale para a sua conta, o GPT e a página dele deixam de abrir. O guia de criadores diz que ainda será possível migrar depois da aposentadoria, mas o GPT em si já não roda.

## As datas que a OpenAI lista

| Data | O que a FAQ diz | Para quem |
|---|---|---|
| 11/09/2026 | Aviso aos administradores | Workspaces Enterprise afetados |
| 22/09/2026 | Alvo da experiência de migração e do banner. É alvo, não garantia de que a opção aparece em todo workspace | Enterprise afetado |
| 01/10/2026 | Alvo do banner em workspaces que optaram por banner atrasado | Esses workspaces |
| 26/10/2026 | Fim da criação de GPTs novos. FedRAMP fica de fora. GPTs já existentes e ainda não migrados continuam editáveis | Enterprise afetado |
| 11/12/2026 | Aposentadoria padrão: GPTs e páginas deixam de abrir | Data geral |
| 11/02/2027 | Aposentadoria adiada | FedRAMP e Enterprise com adiamento qualificado e aprovado |

A FAQ diz que e-mails padrão de admin usam as datas gerais e não são personalizados para quem teve adiamento. Se a sua empresa recebeu outro prazo, vale o aviso do workspace, não a tabela genérica.

A transição atinge todos os planos do ChatGPT, mas a FAQ não publica, nessa página, um corte de criação separado para Free, Go, Plus e Pro. O corte de 26 de outubro está descrito para workspaces Enterprise afetados. Restrição de criar GPT e aposentadoria dos que já existem são coisas diferentes: um adiamento da aposentadoria, sozinho, não devolve o direito de criar GPT novo.

## O que passa para o Plugin — e o que não passa

Um Plugin, na definição do [guia da OpenAI](https://learn.chatgpt.com/docs/migrate-custom-gpts), é um pacote reutilizável que pode ter skills, apps ou os dois. Skill é a instrução de como fazer a tarefa. App é a conexão com outro serviço.

| No Custom GPT | Na migração |
|---|---|
| Instruções | Viram uma skill dentro do plugin |
| Arquivos de conhecimento | São copiados como arquivos de referência |
| Apps conectados | Entram como apps do plugin |
| Actions personalizadas | Não passam. Precisam ser refeitas |
| Modelo escolhido no GPT | Não passa. No Enterprise, valem os padrões do workspace |
| Conversation starters e chats anteriores | Não são copiados um a um para o plugin. Guarde os prompts que quiser reutilizar |
| Compartilhamento | O plugin individual começa privado. Quem usava o GPT não recebe acesso automático |

O plugin pode responder diferente. O guia pede para comparar os prompts conhecidos e pelo menos um caso mais difícil antes de depender da substituição.

Quem só conversa no chat, sem GPT próprio, não migra nada. O modelo da conversa comum é outro assunto — o [guia de como usar o ChatGPT](/blog/como-usar-chatgpt-guia-completo-para-iniciantes) continua valendo para o chat, não para essa migração.

## Conversas antigas

Aqui a FAQ atual corrige uma leitura que circulou no começo do anúncio. O texto oficial diz que as conversas existentes com Custom GPTs **continuam acessíveis depois da aposentadoria** e que não é preciso fazer nada para preservá-las.

Isso não significa que o histórico seja colado dentro do plugin. O guia de criadores trata conversas anteriores como algo que pode não ser copiado, e recomenda guardar prompts úteis para testar a substituição. São duas coisas: o histórico permanece acessível; ele não vira, sozinho, o conteúdo do plugin novo.

## Se você usa um GPT feito por outra pessoa

Não migre por ela. A FAQ é direta: permissão de uso não é permissão de migração. Olhe o aviso no próprio GPT e o que o criador disser sobre um substituto.

Um GPT público criado num workspace Enterprise afetado entra na transição desse workspace, mesmo que você o abra de uma conta pessoal. O que importa é onde ele foi criado. Acesso ao GPT público não garante acesso ao plugin que o substitui.

Quando o criador compartilhar o plugin, instalar e usar são passos separados, a menos que um admin já tenha instalado para você. No ChatGPT, o guia diz para escolher o plugin ou a skill com uma menção `@` ou em **+** e depois **More**, onde isso existir. O ChatGPT também pode acionar uma skill instalada se a descrição bater com o pedido — e pode não acionar. Por isso o teste inclui os dois caminhos.

## Para quem o GPT era só um prompt bem guardado

Se o seu GPT não tinha Action nem arquivo de conhecimento, a parte que mais importa são as instruções. Enquanto o botão de migrar não aparece, dá para guardar esse texto como prompt reutilizável. A [lista de prompts para ChatGPT](/blog/prompts-prontos-para-chatgpt) é um atalho para tarefas genéricas; ela não substitui um GPT com arquivo próprio ou integração. Para montar a instrução do zero, o [guia de prompt engineering](/blog/guia-prompts-chatgpt-como-criar-prompts-perfeitos-para-qualquer-tarefa) separa papel, contexto e formato — que é o que a skill do plugin precisa carregar.

Se a dúvida é qual modelo usar no chat comum, já que o modelo escolhido no GPT não atravessa a migração, o [comparativo ChatGPT, Gemini e Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) compara os assistentes, não os plugins.

## Perguntas Frequentes

### Até quando os Custom GPTs funcionam?

A data padrão é 11 de dezembro de 2026. FedRAMP e workspaces Enterprise afetados com adiamento qualificado e aprovado ficam até 11 de fevereiro de 2027. A FAQ manda seguir o aviso da sua conta se ele trouxer outro prazo.

### Como migrar um GPT para Plugin?

Quando a opção existir na conta em que o GPT foi criado, abra Meus GPTs, ache o GPT em "criados por mim" e selecione Migrar para plugin. Antes disso, publique a versão que deve passar: rascunho não migra. Teste o plugin e compartilhe de novo se outras pessoas precisarem dele.

### As conversas do meu GPT somem em 11 de dezembro?

Não, segundo a FAQ atual da OpenAI: as conversas existentes continuam acessíveis depois da aposentadoria, e não é preciso exportá-las para preservá-las. Elas não são copiadas automaticamente para dentro do plugin.

### O que eu perco na migração?

Actions personalizadas não passam e precisam ser refeitas. O modelo escolhido no GPT também não passa. O plugin começa privado, então quem usava o GPT não ganha acesso sozinho. O resultado pode ser diferente: a OpenAI pede para testar antes de trocar a rotina.

### Dá para migrar depois de 11 de dezembro?

O guia para criadores diz que sim, a migração continua disponível depois da aposentadoria, mas o GPT em si deixa de rodar nessa data. O substituto precisa ter sido testado antes se a equipe ainda depende dele no dia a dia.

## Fontes e Referências

- [Custom GPT retirement and migration FAQ — OpenAI Help Center](https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq)
- [Moving your custom GPT workflows to plugins — ChatGPT Learn](https://learn.chatgpt.com/docs/migrate-custom-gpts)
- [GPTs in ChatGPT — OpenAI Help Center](https://help.openai.com/en/articles/8554407-gpts-in-chatgpt)
