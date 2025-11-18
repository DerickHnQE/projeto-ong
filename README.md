Plataforma Web para ONG - Entregas I, II e III

Este projeto é a entrega das disciplinas de "Experiências Práticas – Fundamentos da Web e Estruturação de Interfaces". O objetivo é construir uma plataforma web dinâmica e interativa para uma Organização Não Governamental (ONG).

Contexto

O projeto visa criar uma presença digital profissional para ONGs, permitindo-lhes divulgar projetos, captar recursos e engajar voluntários.

Requisitos Cumpridos (Entrega I - Fundamentos)

Estrutura HTML5 Semântica: 3 páginas (index.html, projetos.html, cadastro.html) usando tags semânticas.

Formulários Complexos: Formulário de cadastro com validação nativa do HTML5.

Máscaras de Input (JavaScript): O arquivo js/main.js aplica máscaras dinâmicas para CPF, Telefone e CEP.

Requisitos Cumpridos (Entrega II - CSS Avançado)

Leiautes Responsivos com Flexbox e Grid: Implementado um sistema de grid customizado de 12 colunas e 5 breakpoints.

Navegação Sofisticada: Menu responsivo com submenu dropdown e menu hambúrguer funcional.

Componentes de Interface: Cards, botões com estados, formulários estilizados, alertas e badges.

Requisitos Cumpridos (Entrega III - JavaScript Avançado)

Esta entrega focou em transformar a interface estática em uma aplicação dinâmica:

1. Manipulação do DOM

Sistema de Single Page Application (SPA) Básico: O site agora funciona como uma SPA. Clicar nos links de navegação (Início, Projetos, Cadastro) não recarrega a página.

Templates JavaScript: O JavaScript (em js/main.js) utiliza a função fetch() para buscar o conteúdo das outras páginas HTML. Em seguida, usa o DOMParser para analisar o texto HTML, extrair o conteúdo da tag <main id="page-content"> (nosso "template") e injetá-lo dinamicamente na página atual.

A navegação do navegador (botões "Voltar" e "Avançar") é tratada pelo evento popstate.

2. Funcionalidades Específicas Obrigatórias

Sistema de Verificação de Consistência de Dados: O formulário de cadastro agora possui um sistema robusto de validação em tempo real:

Aviso ao Usuário: A validação nativa do navegador foi desabilitada (novalidate) e substituída por mensagens de erro customizadas (.error-message) que aparecem abaixo de cada campo inválido.

Verificação de Consistência: Além de checar se os campos estão preenchidos, o sistema valida:

CPF: Utiliza um algoritmo real (Módulo 11) para verificar se o número do CPF é matematicamente válido (função validaCPF).

Idade: Verifica se o usuário tem a idade mínima (ex: 16 anos) com base na data de nascimento (função isOldEnough).

Feedback (Toast): Ao tentar enviar o formulário, o usuário recebe uma notificação (Toast) de "Sucesso" ou "Erro", em vez de um alert().

3. Código JavaScript Modular

O arquivo js/main.js foi refatorado e organizado por funcionalidade (Módulo SPA, Módulo de Componentes, Módulo de Máscaras, Módulo de Formulário), como solicitado.

Tecnologias Utilizadas

HTML5: Para toda a estrutura e semântica.

CSS3 (Modular): CSS Grid, Flexbox, Variáveis CSS, Media Queries.

JavaScript (ES6+):

Manipulação do DOM (SPA).

fetch() e DOMParser (Templates).

History API (pushState, popstate).

Validação de formulário avançada.

Como Executar o Projeto

Clone ou baixe o repositório.

Certifique-se de que a estrutura de pastas está correta:

/
|-- index.html
|-- projetos.html
|-- cadastro.html
|-- README.md
|-- js/
|   |-- main.js
|-- css/
|   |-- style.css
|-- imagens/
|   |-- (suas imagens aqui)


Importante: Devido ao uso da API fetch() para o SPA, o projeto deve ser executado a partir de um servidor local (como a extensão "Live Server" do VS Code). Abrir o index.html diretamente do arquivo (file:///...) causará erros de CORS e o SPA não funcionará.

Abra o projeto no seu servidor local (ex: http://127.0.0.1:5500/).

Navegue pelo site e teste o formulário de cadastro.
