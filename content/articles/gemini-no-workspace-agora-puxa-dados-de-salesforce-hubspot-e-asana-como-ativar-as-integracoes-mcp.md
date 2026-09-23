---
title: "Gemini no Workspace Agora Puxa Dados de Salesforce, HubSpot e Asana: Como Ativar as Integrações MCP"
description: "Gemini no Google Workspace conecta Salesforce, HubSpot, Asana e mais 4 ferramentas via MCP, protocolo criado pela Anthropic. Veja como ativar e usar."
category: ferramentas
tags:
  - Google Workspace
  - Gemini
  - MCP
author: Redação Turbina IA
isFeatured: false
date: "2026-09-23"
coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
---

Desde 15 de setembro, o painel lateral do Gemini dentro do Gmail, do Docs, do Sheets e do Google Chat ganhou uma lista nova de botões: Salesforce, HubSpot, Asana, monday.com, Atlassian Rovo, Intuit Mailchimp e Intuit QuickBooks. Basta clicar em "Conectar", autenticar e o assistente passa a puxar dados desses sistemas sem que o usuário precise abrir outra aba. A mudança foi anunciada pelo [blog oficial do Google Workspace](https://workspaceupdates.googleblog.com/2026/09/connect-to-more-tools-with-gemini-in-Google-Workspace.html) e já está disponível para quem usa domínios de lançamento rápido (Rapid Release).

> **Resposta Rápida (TL;DR):** O Gemini dentro do Google Workspace agora se conecta diretamente a sete ferramentas de trabalho — Salesforce, HubSpot, Asana, monday.com, Atlassian Rovo, Mailchimp e QuickBooks — sem sair do Gmail, Docs, Sheets ou Chat. A conexão usa o Model Context Protocol (MCP), padrão aberto criado pela Anthropic em 2024 e hoje mantido pela Linux Foundation. É preciso autenticação por ferramenta e, em times corporativos, liberação prévia do administrador.

Na prática, o recurso resolve um problema chato: alternar entre cinco abas para responder um e-mail que depende de um dado que está preso num CRM. Com a integração ativa, dá para pedir ao Gemini, dentro do próprio Gmail, para criar um lead no Salesforce a partir da conversa que acabou de ler, ou para puxar o status de uma tarefa do Asana antes de escrever um resumo no Docs. O [suporte oficial do Google Docs](https://support.google.com/docs/answer/16796422?hl=en) descreve o fluxo: escolher a ferramenta na lista de conectores, autenticar com a própria conta daquele serviço e abrir o painel do Gemini sempre que precisar consultar ou atualizar algo.

## O que já funciona em cada ferramenta

Nem toda integração faz a mesma coisa. Algumas permitem só consulta; outras aceitam comandos que alteram dados do outro sistema — e isso depende de como cada fornecedor implementou o conector do lado dele, não de uma regra única do Google.

| Ferramenta | O que dá para pedir ao [Gemini](/blog/prompts-para-gemini) |
|---|---|
| Salesforce | Criar leads, contatos e casos a partir de um e-mail ou documento |
| HubSpot | Consultar contatos e negócios sem abrir o CRM, direto do Gmail |
| Asana | Ver status de tarefas e projetos enquanto escreve no Docs ou no Chat |
| monday.com | Puxar dados de quadros de projeto para dentro de uma planilha |
| Atlassian Rovo | Buscar informações de Jira e Confluence sem trocar de aba |
| Intuit QuickBooks | Consultar dados financeiros básicos durante a redação de relatórios |
| Intuit Mailchimp | Checar métricas de campanha ao redigir um e-mail de acompanhamento |

O alcance de cada write (criar, editar, apagar) depende das permissões que o próprio usuário já tem no sistema de origem — o Gemini não ganha acesso maior do que a conta logada teria manualmente. Isso limpa uma dúvida comum: a integração não é uma porta de entrada nova para dados sensíveis, é um atalho para o que a pessoa já podia fazer.


![Imagem ilustrativa sobre Gemini no Workspace Agora Puxa Dados de Salesforce, HubSpot e Asana: Como Ativar as Integrações MCP](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80)

## Por que isso roda em cima de um protocolo criado por um concorrente

O detalhe que passou despercebido na cobertura do lançamento é técnico, mas conta uma história maior sobre como o mercado de IA amadureceu em 2026: essas sete conexões usam o Model Context Protocol, o MCP, um padrão aberto que a própria Anthropic criou em novembro de 2024 para resolver o mesmo problema — dar a um modelo de linguagem uma forma padronizada de conversar com ferramentas externas, em vez de cada empresa construir sua própria integração do zero.

Em dezembro de 2025, a Anthropic doou o MCP para a recém-formada Agentic AI Foundation, um braço da Linux Foundation dedicado a manter protocolos de IA agêntica sob governança neutra. O [anúncio oficial da Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) lista Google, Microsoft, Amazon Web Services, Cloudflare, Bloomberg e a própria OpenAI como membros platina da nova fundação — ou seja, concorrentes diretos da Anthropic hoje ajudam a manter o padrão que ela inventou. O [TechCrunch cobriu a doação](https://techcrunch.com/2025/12/09/openai-anthropic-and-block-join-new-linux-foundation-effort-to-standardize-the-ai-agent-era/) descrevendo o movimento como uma tentativa de padronizar "a era do agente de IA" antes que cada fornecedor construísse seu próprio ecossistema fechado.

O [blog oficial do Model Context Protocol](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/) reforça que a ideia da doação era garantir que o MCP continuasse aberto e neutro justamente porque ele virou infraestrutura crítica: hoje alimenta produtos como ChatGPT, Copilot e o próprio Gemini, além de mais de 10 mil servidores MCP públicos em produção. Para quem já usa IA no dia a dia, entender esse pano de fundo ajuda a explicar por que integrações como essa passaram a aparecer tão rápido em tantos produtos diferentes ao mesmo tempo — a peça técnica que faltava já existia e era gratuita para qualquer empresa adotar.

Quem quiser entender melhor termos como esse pode consultar o [Glossário de IA do Turbina IA](/glossario), que reúne definições de conceitos técnicos como agente, protocolo e contexto sem o jargão de documentação de desenvolvedor.

## Quem pode ativar e como

A liberação começou pelos domínios de Rapid Release e está chegando aos de Scheduled Release em etapas. Cobre várias edições do Workspace — Business, Enterprise, Education e também contas pessoais do Gemini em alguns casos — mas a disponibilidade exata varia conforme a edição contratada e, em ambientes corporativos, conforme a liberação do administrador de TI.

Para ativar como usuário final, o caminho é direto:

1. Abrir o Gmail, Docs, Sheets ou Google Chat e clicar no ícone do Gemini no painel lateral.
2. Procurar a seção de conectores ou integrações dentro do painel.
3. Escolher a ferramenta desejada (Salesforce, HubSpot, Asana etc.), clicar em "Conectar" e autenticar com a conta daquele serviço.
4. Voltar ao painel do Gemini e começar a fazer perguntas ou pedir ações relacionadas àquela ferramenta.

Em organizações que usam o Gemini Enterprise, existe ainda uma camada adicional: administradores podem cadastrar servidores MCP personalizados, não só os sete já prontos, através do menu Configurações e Ajuda > Gerenciar equipe > Apps conectados. Isso abre espaço para empresas conectarem sistemas internos próprios ao Gemini, desde que exponham um servidor MCP compatível — um recurso que interessa mais a times de TI do que ao usuário comum, mas que mostra a direção do produto: o Google está tratando o Gemini menos como um chatbot e mais como uma camada de coordenação entre aplicativos.


![Imagem ilustrativa sobre Gemini no Workspace Agora Puxa Dados de Salesforce, HubSpot e Asana: Como Ativar as Integrações MCP](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80)

## O que ainda não dá para fazer

Vale um pé no chão. A integração depende de cada fornecedor ter implementado bem o próprio lado do conector — o que o Gemini consegue "ver" ou alterar no Salesforce, por exemplo, é definido pela Salesforce, não pelo Google. Isso significa que a profundidade da integração varia de ferramenta para ferramenta, e ações mais complexas (como automações de múltiplas etapas) ainda não são o forte desse tipo de conector — para isso, soluções de automação dedicadas continuam sendo mais confiáveis.

Outro ponto: nem toda conta terá a opção disponível hoje. Contas pessoais do Workspace em edições mais básicas podem não ver a lista de conectores até que o rollout complete, e organizações que usam políticas restritivas de dados podem ter a função bloqueada pelo administrador por padrão — o que, dependendo do setor (saúde, jurídico, financeiro), é a escolha certa até que a equipe de segurança avalie o fluxo de dados entre sistemas.

Para quem acompanha o ritmo de lançamentos de IA no geral, vale a pena revisitar o [Monitor de Modelos e Lançamentos do Turbina IA](/changelog), que reúne esse tipo de atualização junto com o histórico de versões dos principais modelos do mercado — incluindo o próprio Gemini.

## O que isso muda na prática para quem usa Workspace no trabalho

Para times de vendas, o ganho mais direto é não perder o fio da conversa: ler um e-mail no Gmail e, sem trocar de aba, já criar o registro correspondente no CRM. Para quem trabalha com gestão de projetos, dá para escrever um relatório no Docs puxando o status real das tarefas do Asana ou do monday.com, em vez de perguntar no chat da equipe e esperar resposta. E para times de marketing, checar uma métrica de campanha do Mailchimp enquanto se redige o próximo e-mail de acompanhamento corta uma etapa que hoje consome minutos — pouca coisa isoladamente, mas que se acumula ao longo de uma semana de trabalho.

Nenhuma dessas tarefas é impossível sem a integração — todo mundo já fazia isso abrindo abas. A diferença é que o Gemini agora faz a ponte, e isso é o tipo de detalhe que raramente vira manchete, mas que muda a rotina de quem usa essas ferramentas todo dia. Para comparar como o Gemini se posiciona frente a outros assistentes de IA em tarefas do dia a dia, o [Comparador de IAs do Turbina IA](/comparador) traz um panorama lado a lado dos principais modelos disponíveis hoje.

## Perguntas Frequentes

### O que é o Model Context Protocol (MCP) usado pelo Gemini?

É um padrão aberto criado pela Anthropic em novembro de 2024 para dar a modelos de IA uma forma padronizada de acessar ferramentas e dados externos. Em dezembro de 2025 foi doado à Agentic AI Foundation, ligada à Linux Foundation, e hoje é mantido de forma neutra, com Google, Microsoft, AWS e OpenAI como membros que ajudam a governar o padrão.

### Preciso pagar algo a mais para usar as integrações do Gemini com Salesforce, HubSpot ou Asana?

Não há uma cobrança adicional divulgada especificamente pelo Google para essas sete integrações — elas fazem parte do Gemini em Workspace já incluído nos planos elegíveis. Dito isso, o acesso pode depender da edição do Workspace contratada e de liberação do administrador da conta, então vale conferir no painel se a opção já apareceu.

### O Gemini consegue alterar dados nessas ferramentas ou só consultar?

Depende da ferramenta. Em sistemas como o Salesforce, já é possível pedir para o Gemini criar leads, contatos e casos diretamente. Em outras integrações, o alcance pode ser mais limitado a consulta, porque cada fornecedor decide o que o próprio conector expõe — e o Gemini nunca ganha permissões maiores do que a conta do usuário já tinha naquele sistema.

## Fontes e Referências

- [Connect to more tools with Gemini in Google Workspace](https://workspaceupdates.googleblog.com/2026/09/connect-to-more-tools-with-gemini-in-Google-Workspace.html)
- [Use integrations with Gemini in Workspace — Google Docs Editors Help](https://support.google.com/docs/answer/16796422?hl=en)
- [Linux Foundation Announces the Formation of the Agentic AI Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation)
- [OpenAI, Anthropic, and Block join new Linux Foundation effort to standardize the AI agent era — TechCrunch](https://techcrunch.com/2025/12/09/openai-anthropic-and-block-join-new-linux-foundation-effort-to-standardize-the-ai-agent-era/)
- [MCP joins the Agentic AI Foundation — Model Context Protocol Blog](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/)