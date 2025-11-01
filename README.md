# Plataforma Web para ONG - Entrega I (Fundamentos)

Este projeto é a primeira entrega da disciplina de "Experiências Práticas – Fundamentos da Web e Estruturação de Interfaces". O objetivo é construir a base estrutural de uma plataforma web para uma Organização Não Governamental (ONG), aplicando conceitos fundamentais de HTML5.

## Contexto

O projeto visa criar uma presença digital profissional para ONGs, permitindo-lhes divulgar projetos, captar recursos e engajar voluntários. Esta primeira fase foca exclusivamente na estruturação semântica e na criação de formulários com HTML5.

## Requisitos Cumpridos (Entrega I)

O código-fonte deste repositório cumpre as seguintes especificações técnicas obrigatórias:

### 1. Estrutura HTML5 Semântica

* **3 Páginas HTML:**
  * `index.html`: Página inicial com informações da organização e contato.
  * `projetos.html`: Detalhes sobre projetos, voluntariado e como doar.
  * `cadastro.html`: Formulário de cadastro para novos voluntários.
* **Semântica:** Uso correto de tags como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`.
* **Hierarquia de Títulos:** Títulos (`<h1>`, `<h2>`) aplicados de forma lógica.
* **Multimídia:** Inclusão de imagens em todas as páginas (através da pasta `/imagens`).

### 2. Formulários Complexos e Interativos

* **Página `cadastro.html`:**
  * Contém um formulário completo com todos os campos solicitados (Nome, E-mail, CPF, Telefone, Data de Nascimento, Endereço, CEP, Cidade, Estado).
  * Utiliza tipos de `input` apropriados do HTML5 (`text`, `email`, `tel`, `date`).
  * Implementa **validação nativa** com o atributo `required` e `pattern`.
  * Utiliza **agrupamento lógico** com `<fieldset>` e `<legend>`.
* **Máscaras de Input (JavaScript):**
  * O arquivo `js/main.js` aplica máscaras dinâmicas para os campos de CPF, Telefone e CEP, melhorando a experiência do usuário.

## Tecnologias Utilizadas

* **HTML5:** Para toda a estrutura e semântica do site.
* **CSS3:** Estilização básica interna (inline) para organização visual (sem foco em design avançado nesta entrega).
* **JavaScript (ES6+):** Para a funcionalidade de máscaras de input no formulário de cadastro.

## Como Executar o Projeto

Como este é um projeto de front-end estático, não é necessária nenhuma instalação complexa.

1. Clone ou baixe o repositório para o seu computador.
2. Certifique-se de que a estrutura de pastas está correta:
