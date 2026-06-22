---
title: "Agentjacking: Como um Relatório de Bug Falso Sequestra o Claude Code e o Cursor com 85% de Taxa de Sucesso"
description: "Pesquisadores revelam o 'Agentjacking': ataque usa o Sentry para sequestrar agentes de IA em 2.388 empresas, burlando EDR, WAF e VPN sem nenhuma credencial"
category: noticias
tags:
  - Segurança de IA
  - Agentes de IA
  - Claude Code
  - MCP
  - Cibersegurança
author: Redação Turbina IA
isFeatured: false
date: "2026-06-22"
coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NTg1Mzd8MHwxfHNlYXJjaHwxfHxBZ2VudGphY2tpbmclM0ElMjBDb21vJTIwdW0lMjBSZWxhdCVDMyVCM3JpbyUyMGRlJTIwQnVnJTIwRmFsc28lMjBTZXF1ZXN0cmElMjBvJTIwQ2xhdWRlJTIwQ29kZSUyMGUlMjBvJTIwQ3Vyc29yJTIwY29tJTIwODUlMjUlMjBkZSUyMFRheGElMjBkZSUyMFN1Y2Vzc28lMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwwfDB8fHwxNzgyMDg3NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
---

Imagine que um desenvolvedor pede ao seu agente de IA favorito para investigar os erros abertos no painel do Sentry. O agente faz a consulta, lê os resultados e executa as etapas recomendadas — exatamente como foi treinado para fazer. O problema é que uma dessas "recomendações" não veio da aplicação. Foi plantada ali por um atacante que não violou nenhum servidor, não roubou nenhuma senha e não precisou de nenhuma autenticação especial. Bastou uma chave pública disponível no código-fonte de qualquer site.

Esse é o "Agentjacking", nova classe de ataque documentada pela [Tenet Security](https://tenetsecurity.ai/blog/agentjacking-coding-agents-with-fake-sentry-errors/) em junho de 2026. A pesquisa revelou que Claude Code, Cursor e Codex — os agentes de codificação mais usados do mercado — podem ser sequestrados por um único evento de erro forjado, transformando a própria ferramenta de produtividade do desenvolvedor em vetor de ataque. Os números confirmados pelo laboratório são alarmantes: 85% de taxa de sucesso em testes controlados, 2.388 organizações expostas e execução de código malicioso confirmada em pelo menos uma empresa avaliada em US$ 250 bilhões.

> **Resposta Rápida (TL;DR):** O Agentjacking explora a confiança implícita que agentes de IA depositam em respostas do protocolo MCP. Um atacante injeta comandos maliciosos em eventos de erro do Sentry usando apenas a chave DSN pública do projeto — sem autenticação. Quando o agente consulta o Sentry, ele executa os comandos como se fossem instruções legítimas, com os privilégios totais do desenvolvedor. A taxa de sucesso foi de 85% em mais de 100 organizações testadas, e o Sentry recusou corrigir a falha na raiz.

## O Que É Agentjacking e Por Que Surge Agora

O termo captura com precisão o que acontece: um agente autônomo de codificação é "sequestrado" — seus recursos são voltados contra o próprio usuário que o criou. Não se trata de jailbreak nem de exploração de um bug no modelo de linguagem. É uma exploração arquitetural que existe na fronteira entre dois sistemas legítimos: o Sentry, plataforma amplamente adotada para monitoramento de erros, e o Model Context Protocol (MCP), padrão de integração criado pela Anthropic que permite que agentes de IA se conectem a ferramentas externas. Caso queira entender melhor o conceito de MCP antes de continuar, confira nossa entrada no [Glossário de IA](/glossario).

O MCP foi adotado com entusiasmo pelo ecossistema porque resolve um problema real: permitir que agentes consultem contexto externo sem que o desenvolvedor precise copiar e colar dados manualmente. Mas, como aponta o [Cloud Security Alliance](https://labs.cloudsecurityalliance.org/research/csa-research-note-agentjacking-mcp-sentry-injection-20260612/) em análise publicada em 12 de junho de 2026, essa mesma propriedade cria um risco sistêmico: qualquer serviço conectado via MCP passa a ser um vetor potencial de instruções — não apenas de dados.

A superfície de ataque dos agentes de IA se expandiu silenciosamente. O que antes era uma ferramenta de autocomplete tornou-se um assistente que lê arquivos, executa comandos no terminal, envia requisições HTTP e interage com dezenas de serviços externos. Cada uma dessas conexões é, em potencial, uma janela por onde um atacante pode empurrar instruções.


![Imagem ilustrativa sobre Agentjacking: Como um Relatório de Bug Falso Sequestra o Claude Code e o Cursor com 85% de Taxa de Sucesso](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80)

## O Fio Condutor: O DSN Público do Sentry

O ponto de entrada do Agentjacking é o Sentry DSN (Data Source Name), uma credencial de escrita pública que o próprio Sentry instrui seus clientes a embutir no JavaScript do frontend e nos binários de aplicativos móveis. A lógica é funcional: para que dispositivos de usuários finais enviem relatórios de erro para o Sentry, o endpoint de ingestão precisa ser acessível sem autenticação.

O problema, conforme documentado pelo [The Hacker News](https://thehackernews.com/2026/06/agentjacking-attack-tricks-ai-coding.html), é que essa abertura por design significa que qualquer pessoa com o DSN — encontrável via busca no GitHub ou inspecionando o código-fonte de qualquer site — pode fazer um POST para o endpoint do Sentry e injetar um evento de erro arbitrário. Esse evento aparecerá na fila de issues do projeto exatamente como um erro legítimo gerado pela aplicação, indistinguível a olho nu.

A partir daí, o caminho até a execução de código é direto: quando o agente de codificação consultar o Sentry via MCP, receberá o evento malicioso como parte da resposta confiável do sistema.

## A Cadeia de Ataque em Seis Etapas

A Tenet Security descreveu o ataque com precisão cirúrgica. A cadeia completa, conforme relatada tanto pela [Infosecurity Magazine](https://www.infosecurity-magazine.com/news/agentjacking-attacks-hijack-ai/) quanto pelo The Hacker News, ocorre da seguinte forma:

| Etapa | Ação | Requisito do Atacante |
|---|---|---|
| 1 | Localizar o DSN do Sentry do alvo | Inspecionar o JS do site ou buscar no GitHub |
| 2 | Enviar evento de erro malicioso via POST | Apenas o DSN (sem autenticação) |
| 3 | O evento contém markdown formatado com uma "Resolução" maliciosa | Conhecimento do formato de saída do Sentry MCP |
| 4 | O desenvolvedor pede ao agente para corrigir issues do Sentry | Ação normal do workflow do desenvolvedor |
| 5 | O agente consulta o Sentry via MCP e recebe o evento injetado | — |
| 6 | O agente executa o comando malicioso com os privilégios do desenvolvedor | — |

O detalhe mais perturbador está na etapa 3: a injeção usa markdown "cuidadosamente formatado" que, quando renderizado pelo servidor MCP do Sentry, produz conteúdo visualmente idêntico às orientações de remediação que o Sentry normalmente gera. O agente não vê diferença alguma. Como sintetizou o [The Next Web](https://thenextweb.com/news/agentjacking-ai-coding-agents-sentry), "o agente trata a resposta como confiável — ele não consegue distinguir um crash real de um plantado."

O payload típico instrui o agente a executar um pacote npm controlado pelo atacante. Quando roda, esse pacote exfiltra silenciosamente para o servidor do atacante variáveis de ambiente (chaves AWS, tokens GitHub, credenciais do próprio Sentry), credenciais Git, URLs de repositórios privados e a identidade do desenvolvedor.


![Imagem ilustrativa sobre Agentjacking: Como um Relatório de Bug Falso Sequestra o Claude Code e o Cursor com 85% de Taxa de Sucesso](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

## 85% de Taxa de Sucesso: Os Números que Definem a Escala

A Tenet Security não apenas descreveu o ataque em teoria. O laboratório realizou testes controlados contra mais de 100 organizações reais — com consentimento implícito nas condições de uso da pesquisa — e documentou os resultados com rigor. Segundo o [relatório original da Tenet Security](https://tenetsecurity.ai/blog/agentjacking-coding-agents-with-fake-sentry-errors/), a taxa de exploração bem-sucedida foi de **85%** contra os agentes de codificação mais populares do mercado, incluindo Claude Code, Cursor e Codex.

Os testes cobriram uma amplitude impressionante de cenários: agentes em macOS, Windows e ambientes de nuvem; agentes em sandboxes supostamente isolados; agentes em redes internas sem acesso direto à internet; e até agentes que detinham chaves AWS ativas no ambiente. Quase todos caíram.

A escala do problema é confirmada pela pesquisa passiva que a Tenet fez antes dos testes: **2.388 organizações** foram identificadas com DSNs injetáveis válidos, expostos publicamente. O espectro vai de empresas Fortune 100 — incluindo uma avaliada em US$ 250 bilhões, cujos agentes executaram o código de teste da Tenet — até desenvolvedores independentes e, ironicamente, pelo menos um fornecedor de segurança em nuvem.

Os pesquisadores responsáveis pela descoberta são Ron Bobrov, Barak Sternberg e Nevo Poran, membros do Threat Labs da Tenet Security. O resultado do trabalho deles foi publicado inicialmente em 12 de junho de 2026 e ganhou repercussão adicional com a publicação do The New Stack em 21 de junho.

## A "Cadeia de Intenção Autorizada" e Por Que Defesas Tradicionais Falham

O aspecto mais desconcertante do Agentjacking é que ele não viola nenhuma política de segurança existente. Não há exploit, não há payload suspeito trafegando pela rede, não há comportamento anômalo detectável.

O conceito que a Tenet usa para descrever isso é "Authorized Intent Chain" (Cadeia de Intenção Autorizada): cada ação individual na cadeia de ataque é completamente legítima. O agente consultou um serviço ao qual tem permissão de acesso. Recebeu uma resposta através de um canal confiável (MCP). Executou um pacote npm — operação absolutamente rotineira para um agente de codificação. Fez uma requisição de saída para um servidor externo — também comum.

Nenhuma dessas ações isoladas ativa alertas em EDR, WAF, IAM, VPN, Cloudflare ou firewalls. Conforme documentado pelo [Cloud Security Alliance](https://labs.cloudsecurityalliance.org/research/csa-research-note-agentjacking-mcp-sentry-injection-20260612/), "o agente realizou apenas operações autorizadas usando as próprias credenciais do desenvolvedor — nenhuma política foi violada, nenhum limiar de anomalia foi ultrapassado."

Ainda mais preocupante: a Tenet testou cenários em que os agentes foram explicitamente instruídos a ignorar dados não confiáveis. Os agentes executaram o payload mesmo assim. A instrução de segurança no [prompt](/prompts) não foi suficiente para romper a cadeia de confiança estabelecida pelo MCP.

Se você usa agentes de IA integrados ao seu fluxo de desenvolvimento e quer entender melhor os custos e riscos envolvidos em diferentes ferramentas, vale explorar o [Comparador de IAs](/comparador) para ter uma visão consolidada das opções disponíveis.

## Sentry Reconhece, Mas Recusa o Conserto na Raiz

A Tenet Security notificou o Sentry em 3 de junho de 2026. A resposta, confirmada tanto pela [Infosecurity Magazine](https://www.infosecurity-magazine.com/news/agentjacking-attacks-hijack-ai/) quanto pelo The Hacker News, foi que o Sentry reconheceu o problema mas optou por não corrigir a causa raiz. O argumento da empresa: a vulnerabilidade é "tecnicamente indefensável" no nível da plataforma.

A medida tomada pelo Sentry foi ativar um filtro de conteúdo global que bloqueia "uma string de payload específica" — essencialmente, trata o sintoma imediato sem tocar na arquitetura que o gera. Qualquer atacante com motivação suficiente pode iterar o payload para contornar esse filtro específico.

O The Next Web resumiu o dilema com precisão: "O impasse é a história real. A falha não está apenas no Sentry. Está em como agentes lidam com qualquer dado externo — então o mesmo risco existe em tickets de suporte, issues do GitHub e documentação." A mesma lógica que torna o Agentjacking possível via Sentry poderia ser replicada em qualquer serviço que forneça dados textuais a um agente via MCP.

## Como Se Proteger: O "Agent-Jackstop" e Outras Medidas

A própria Tenet Security lançou, em conjunto com a pesquisa, uma ferramenta open source chamada **agent-jackstop** — configurações prontas para uso ("drop-in configs") que endurecem o [Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) Code e o Cursor contra essa classe de ataques. O repositório está disponível publicamente e visa reduzir o risco de telemetria não confiável e ingestão de logs serem usadas como vetor.

Além da ferramenta, o [Cloud Security Alliance recomenda](https://labs.cloudsecurityalliance.org/research/csa-research-note-agentjacking-mcp-sentry-injection-20260612/) que líderes de segurança comecem a auditar:

- **Quais serviços externos seus agentes de IA consultam via MCP** e se esses serviços aceitam dados de fontes não autenticadas;
- **Se os dados retornados por esses serviços são tratados como instruções** ou apenas como contexto passivo;
- **Quais controles existem** para impedir que dados injetados disparem execução de código.

A recomendação estrutural mais importante é tratar integrações MCP com o mesmo rigor que se trata dependências de software: avaliar a superfície de ataque de cada serviço conectado, não apenas suas funcionalidades.

## O Agente Como Nova Superfície de Ataque

O Agentjacking não é um incidente isolado — é um sinal de maturidade de uma nova frente ofensiva. Em abril de 2026, pesquisadores já haviam [documentado 10 payloads de prompt injection no mundo real](https://www.infosecurity-magazine.com/news/10-wild-prompt-injection-payloads/) visando agentes de IA. Em novembro de 2025, o ataque HashJack havia usado websites para entregar prompt injection indireta. O padrão é consistente: à medida que agentes autônomos ganham poder — lendo arquivos, executando terminais, gerenciando infraestrutura — cada dado que eles consomem se torna um vetor potencial de instrução maliciosa.

Como a Tenet resumiu com clareza na conclusão do seu relatório: "O único lugar restante para interceptar isso é no momento em que o agente decide agir." Enquanto os modelos de linguagem não conseguirem distinguir dados de instruções de forma confiável, a camada de runtime do agente — não o firewall, não o EDR — é onde a defesa precisa acontecer.

---

## Perguntas Frequentes

**O que é exatamente um Sentry DSN e por que ele é público?**
DSN (Data Source Name) é a chave que o Sentry exige que seja embutida no JavaScript do frontend ou em apps móveis para que erros dos usuários finais sejam enviados à plataforma. Por design, é uma credencial de escrita pública — sem ela, a telemetria do lado do cliente não funcionaria. O problema é que isso significa que qualquer pessoa pode usá-la para injetar eventos falsos.

**O ataque já está sendo usado ativamente fora dos testes controlados?**
A Tenet Security realizou testes controlados em mais de 100 organizações e confirmou a execução do código em um ambiente Fortune 100. A empresa não afirmou que há exploração ativa e em larga escala além dos seus testes, mas a técnica é simples o suficiente para ser replicada por qualquer ator malicioso com acesso a um DSN público.

**Como eu sei se meu agente de IA está vulnerável ao Agentjacking?**
Se você usa Claude Code, Cursor ou Codex com a integração do servidor MCP do Sentry ativada e seu projeto tem um DSN exposto publicamente (o que é quase certo se você usa Sentry em frontend), você está no perfil de risco. O repositório agent-jackstop da Tenet Security oferece configurações endurecidas para mitigar o risco imediatamente.

---

## Fontes e Referências

- [Tenet Security — "One Fake Bug Report Hijacked a $250B Company's AI Agent"](https://tenetsecurity.ai/blog/agentjacking-coding-agents-with-fake-sentry-errors/)
- [Cloud Security Alliance — "Agentjacking: MCP Injection Hijacks AI Coding Agents"](https://labs.cloudsecurityalliance.org/research/csa-research-note-agentjacking-mcp-sentry-injection-20260612/)
- [The Hacker News — "Agentjacking Attack Tricks AI Coding Agents Into Running Malicious Code"](https://thehackernews.com/2026/06/agentjacking-attack-tricks-ai-coding.html)
- [The Next Web — "Agentjacking: a fake bug report hijacks AI coding agents"](https://thenextweb.com/news/agentjacking-ai-coding-agents-sentry)
- [The New Stack — "A public Sentry key is all it takes to hijack Claude Code, Cursor, and Codex"](https://thenewstack.io/agentjacking-sentry-mcp-attack/)
- [Infosecurity Magazine — "New 'Agentjacking' Attacks Could Hijack AI Coding Agents"](https://www.infosecurity-magazine.com/news/agentjacking-attacks-hijack-ai/)