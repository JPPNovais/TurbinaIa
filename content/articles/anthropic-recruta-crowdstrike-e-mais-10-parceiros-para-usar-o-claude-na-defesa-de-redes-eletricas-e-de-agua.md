---
title: "Anthropic Recruta CrowdStrike e Mais 10 Parceiros Para Usar o Claude na Defesa de Redes Elétricas e de Água"
description: "Anthropic lança o Cyber Mission: Claude e engenheiros em campo para 11 parceiros de segurança e um scanner gratuito de vulnerabilidades em código aberto."
category: noticias
tags:
  - Anthropic
  - Claude
  - Cibersegurança
  - Infraestrutura Crítica
author: Redação Turbina IA
isFeatured: false
date: "2026-10-12"
coverImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80"
---

Uma falha num sistema de controle industrial pode ficar sem correção por anos — às vezes décadas — porque a usina, a estação de tratamento de água ou a subestação elétrica que ela controla não pode simplesmente ser desligada para aplicar um patch. Foi esse problema específico que a Anthropic decidiu atacar em 8 de outubro, ao anunciar o [Cyber Mission](https://www.anthropic.com/news/anthropic-cyber-mission), um programa que coloca o Claude e engenheiros da própria empresa a serviço de onze companhias de segurança que já protegem redes elétricas, sistemas de água e transporte nos Estados Unidos e em outros países.

> **Resposta Rápida (TL;DR):** A Anthropic lançou o Cyber Mission, iniciativa com duas frentes: o Critical Infrastructure Defense Program (CIDP), que dá acesso a modelos Claude de ponta, engenheiros em campo e pesquisa de ameaças a 11 parceiros como CrowdStrike, Dragos e Palo Alto Networks; e o OSS Scanner, serviço gratuito que varre projetos de código aberto com IA e manda relatórios de vulnerabilidade direto aos mantenedores, sem revisão humana prévia.

## O problema que motivou o programa

Sistemas de tecnologia operacional — as redes que comandam turbinas, válvulas e semáforos, não os computadores de escritório — raramente recebem a mesma atenção dos times de segurança que os sistemas de TI convencional. A própria Anthropic explica, no anúncio, que uma vulnerabilidade conhecida numa rede elétrica pode continuar exposta por anos simplesmente porque interromper a operação para corrigir o problema é caro, arriscado ou logisticamente inviável. Em casos extremos, a correção segura de uma falha em equipamento industrial pode levar décadas.

O [Cyber Mission](https://www.anthropic.com/news/anthropic-cyber-mission) nasce como resposta a esse descompasso, com foco inicial em dois alvos: a tecnologia operacional que sustenta redes elétricas, sistemas de água, transporte, fábricas, comunicações e sistemas de governo; e o código aberto que serve de base para praticamente todo o software usado hoje, inclusive por essas mesmas operadoras de infraestrutura.


![Imagem ilustrativa sobre Anthropic Recruta CrowdStrike e Mais 10 Parceiros Para Usar o Claude na Defesa de Redes Elétricas e de Água](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

## Como funciona o Critical Infrastructure Defense Program

O CIDP não vende acesso à API do [Claude](/blog/chatgpt-vs-gemini-vs-claude-qual-a-melhor-ia-em-2026) e espera que cada empresa resolva o problema por conta própria. O desenho é outro: a Anthropic entra como fornecedora de modelos de ponta, soma engenheiros que trabalham lado a lado com os times dos parceiros e compartilha pesquisa de ameaças já produzida internamente. Vários parceiros, segundo a empresa, já usam o Claude para corrigir vulnerabilidades e ajudam seus próprios clientes a fazer o mesmo — o programa formaliza e amplia algo que já estava em andamento de forma mais pontual.

Por ora, o grupo é pequeno de propósito. A ideia declarada é aprender com um primeiro lote de parceiros antes de abrir a porta para mais empresas de segurança que atendem operadoras de infraestrutura crítica — que podem se candidatar por um formulário vinculado ao próprio anúncio.

Os onze parceiros fundadores cobrem praticamente toda a cadeia que protege uma usina ou uma estação de tratamento — da consultoria estratégica ao fabricante de equipamento industrial:

| Parceiro | Perfil |
|---|---|
| Accenture | Consultoria e integração |
| Booz Allen Hamilton | Consultoria e defesa |
| CrowdStrike | Detecção e resposta |
| Deloitte | Consultoria e auditoria |
| Dragos | Segurança de OT dedicada |
| Hitachi | Fabricante de equipamento industrial |
| Insane Cyber | Segurança de infraestrutura crítica |
| Nozomi Networks | Monitoramento de redes industriais |
| Palo Alto Networks (Unit 42) | Inteligência de ameaças |
| PwC | Consultoria e auditoria |
| Rockwell Automation | Fabricante de automação industrial |

Os executivos citados no anúncio dão o tom do argumento comercial por trás da parceria. Daniel Bernard, da CrowdStrike, resume a lógica central: infraestrutura crítica enfrentando ataques em velocidade de máquina precisa de defesa na mesma velocidade. Jon Lavender, da Dragos, defende que o conhecimento sobre IA aplicada a ameaças industriais circule entre fornecedores em vez de ficar isolado em silos — um ponto sensível num setor que historicamente compartilha pouca informação sobre incidentes. Já Andrew Turner, da Booz Allen, descreve a tecnologia operacional como a próxima fronteira de ataques autônomos habilitados por IA, o que ajuda a explicar a urgência do anúncio.

## O outro lado da moeda: o Claude varrendo código aberto de graça

A segunda perna do Cyber Mission ataca um problema correlato, mas diferente: a saúde do software de código aberto que roda silenciosamente por trás de bancos, hospitais e, sim, da própria infraestrutura crítica que o CIDP tenta proteger. O OSS Scanner é um serviço opcional e gratuito, inspirado no OSS-Fuzz do Google, em que projetos inscritos recebem varreduras periódicas feitas pelos modelos mais capazes da Anthropic. Cada relatório inclui uma prova de conceito mostrando como a falha poderia ser explorada, uma explicação em linguagem simples e, quando possível, uma sugestão de correção.

Aqui está o detalhe que separa o OSS Scanner de uma simples ferramenta de triagem: os relatórios saem direto para os mantenedores sem qualquer revisão humana da Anthropic antes do envio. A empresa é direta sobre a consequência disso — alguns relatórios vão conter erros, como uma classificação de gravidade equivocada — e diz esperar uma taxa de acerto acima de 90%, com a meta declarada de melhorar esse número com o tempo. Na prática, é uma aposta deliberada: entregar mais relatórios, mais rápido, aceitando que cerca de um em cada dez pode estar errado.

O OSS Scanner não nasceu do zero. Ele absorve o Project Glasswing, iniciativa mais discreta sob a qual a Anthropic já havia varrido "centenas" de projetos de código aberto amplamente usados e reportado falhas em privado aos mantenedores — processo em que, segundo a própria empresa, meses costumavam se passar entre a descoberta de uma vulnerabilidade e sua correção. Project Glasswing foi incorporado ao Cyber Verification Program expandido na mesma semana do anúncio do Cyber Mission.

Sustentar esse esforço tem custo, e a Anthropic já havia criado em agosto o Defender Advantage Fund (0xDAF), fundo que financia projetos-piloto e mantém o OSS Scanner gratuito para quem se inscreve. Parte desse dinheiro já foi parar na Python Software Foundation, na Alpha-Omega, na OpenSSF — via Linux Foundation — e na Apache Software Foundation, além de apoio a iniciativas de coordenação de relatórios de vulnerabilidade como Akrites e Gold Eagle. Mantenedores de projetos open source também têm acesso ao programa Claude for Open Source, que oferece assinaturas gratuitas do Claude Max para quem cuida desse tipo de código no tempo livre.


![Imagem ilustrativa sobre Anthropic Recruta CrowdStrike e Mais 10 Parceiros Para Usar o Claude na Defesa de Redes Elétricas e de Água](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80)

## Não é a primeira aposta da Anthropic em infraestrutura pública

O Cyber Mission dá continuidade a um movimento que a Anthropic já vinha fazendo discretamente desde junho, quando lançou um programa de defesa cibernética voltado a governos estaduais, locais, tribais e territoriais dos Estados Unidos. Desde então, a empresa diz ter oferecido modelos Claude e suporte técnico a mais da metade dos estados americanos e a algumas grandes operadoras públicas de infraestrutura crítica — um alcance que, até este anúncio, tinha pouca visibilidade fora de círculos de governo.

Chama atenção, no texto oficial, a ausência de qualquer declaração atribuída a um executivo da própria Anthropic: todas as citações no anúncio vêm de parceiros, não da empresa. A projeção mais ousada do texto é indireta — a aposta de que, em cerca de dois anos, o equilíbrio entre ataque e defesa habilitados por IA deve pender para o lado defensivo, embora a própria empresa reconheça que o cenário de curto prazo pode ser diferente. Harshul Joshi, da PwC, reforça esse ponto de outro ângulo, argumentando que só um esforço coordenado em todo o setor — e não iniciativas isoladas de cada empresa — consegue acompanhar a velocidade com que agentes de IA já são usados tanto para atacar quanto para defender esse tipo de sistema.

Cobertura independente do lançamento, publicada no mesmo dia pela [Axios](https://axios.com/2026/10/08/anthropic-critical-infrastructure-cybersecurity) e detalhada também pelo [The Next Web](https://thenextweb.com/news/anthropic-cyber-mission-critical-infrastructure-oss-scanner), confirma a lista de parceiros e a estrutura em duas frentes descrita pela própria Anthropic, reforçando que o programa já está em operação e não é apenas uma declaração de intenções.

## O que isso muda na prática — e o que ainda não responde

Para quem opera uma usina ou uma estação de tratamento, o Cyber Mission não substitui o trabalho de segurança já feito pelos parceiros — ele tenta acelerar a parte mais lenta desse trabalho, que é identificar e priorizar falhas num volume de código e equipamento que nenhum time humano consegue revisar inteiro a tempo. Para mantenedores de projetos open source, o OSS Scanner significa relatórios de vulnerabilidade gratuitos, mas também a responsabilidade extra de filtrar o que vier com classificação errada, já que não há revisão humana antes do envio. Quem quiser acompanhar como a Anthropic e outros laboratórios vêm ajustando o uso de [agentes de IA](/glossario) em tarefas sensíveis como essa pode seguir as próximas atualizações de modelo no [Monitor de Modelos do Turbina IA](/changelog), e quem avalia qual IA usar para automatizar parte da própria rotina de segurança encontra um panorama comparativo das opções disponíveis no [Guia de Ferramentas de IA](/ferramentas).

O que o anúncio não traz é tão relevante quanto o que traz: não há números de quantas vulnerabilidades o OSS Scanner já encontrou, não há cronograma de quando o CIDP vai aceitar novos parceiros além dos onze iniciais, e não há detalhe público sobre como a Anthropic mede, na prática, se um relatório gerado por IA realmente acelerou uma correção que antes levava meses. São lacunas que só a operação continuada do programa — e a cobertura que vier depois dela — deve preencher.

## Perguntas Frequentes

### O que é o Cyber Mission da Anthropic?

É uma iniciativa anunciada em 8 de outubro de 2026 com duas frentes: o Critical Infrastructure Defense Program, que dá a parceiros de segurança acesso a modelos Claude de ponta, engenheiros em campo e pesquisa de ameaças para proteger redes elétricas, água e transporte; e o OSS Scanner, serviço gratuito de varredura de vulnerabilidades em projetos de código aberto.

### Quais empresas são parceiras do Critical Infrastructure Defense Program?

Os onze parceiros fundadores são Accenture, Booz Allen Hamilton, CrowdStrike, Deloitte, Dragos, Hitachi, Insane Cyber, Nozomi Networks, Palo Alto Networks (Unit 42), PwC e Rockwell Automation. A Anthropic afirma que pretende aceitar mais empresas de segurança depois de aprender com esse primeiro grupo.

### O OSS Scanner tem revisão humana antes de enviar um relatório de vulnerabilidade?

Não. Os relatórios são gerados pelos modelos da Anthropic e enviados direto aos mantenedores de cada projeto sem revisão humana prévia, o que acelera a entrega, mas também significa que uma parcela dos relatórios — a empresa espera menos de 10% — pode conter erros, como uma classificação de gravidade incorreta.

## Fontes e Referências

- [Introducing the Anthropic Cyber Mission](https://www.anthropic.com/news/anthropic-cyber-mission)
- [Exclusive: Anthropic's new plan to protect critical infrastructure](https://axios.com/2026/10/08/anthropic-critical-infrastructure-cybersecurity)
- [Anthropic signs CrowdStrike, Hitachi and 9 more to defend power and water](https://thenextweb.com/news/anthropic-cyber-mission-critical-infrastructure-oss-scanner)