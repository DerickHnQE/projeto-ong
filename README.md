Plataforma Web para ONG - Entregas I e II

Este projeto é a entrega das disciplinas de "Experiências Práticas – Fundamentos da Web e Estruturação de Interfaces". O objetivo é construir a base estrutural e visual de uma plataforma web para uma Organização Não Governamental (ONG).

Contexto

O projeto visa criar uma presença digital profissional para ONGs, permitindo-lhes divulgar projetos, captar recursos e engajar voluntários.

Requisitos Cumpridos (Entrega I - Fundamentos)

Estrutura HTML5 Semântica: 3 páginas (index.html, projetos.html, cadastro.html) usando tags semânticas (<header>, <nav>, <main>, <footer>, etc.).

Formulários Complexos: Formulário de cadastro com validação nativa do HTML5.

Máscaras de Input (JavaScript): O arquivo js/main.js aplica máscaras dinâmicas para CPF, Telefone e CEP.

Requisitos Cumpridos (Entrega II - CSS Avançado)

Esta entrega adicionou a camada visual e responsiva ao projeto, implementando os seguintes requisitos:

1. Leiautes Responsivos com Flexbox e Grid

CSS Grid (Layout Principal): O layout geral da página (body) usa display: grid para estruturar header, main e footer, garantindo um rodapé fixo.

Flexbox (Componentes): Flexbox é usado extensivamente para alinhamentos internos, como no cabeçalho, nos cards e no sistema de grid.

5 Breakpoints Responsivos: O css/style.css define 5 pontos de quebra (sm, md, lg, xl, xxl) para adaptar o layout.

Sistema de Grid Customizado (12 Colunas): Foi criado um sistema de 12 colunas (ex: .col-6, .col-lg-4) que é totalmente responsivo (mobile-first).

2. Navegação Sofisticada e Interativa

Menu Principal Responsivo: O menu se adapta a telas de desktop.

Submenu Dropdown: O link "Projetos" possui um submenu dropdown funcional.

Menu Hambúrguer (Mobile): Em telas menores, o menu se transforma em um ícone "hambúrguer" que, ao ser clicado (via JavaScript), revela a navegação.

3. Componentes de Interface

Cards Responsivos: A página de projetos utiliza um sistema de cards que se ajustam (de 1 para 2 ou 3 colunas) dependendo do tamanho da tela.

Botões com Estados: Os botões (.btn) possuem estilos visuais para os estados :hover, :focus, :active e :disabled.

Formulários Estilizados: O formulário de cadastro foi totalmente estilizado e inclui validação visual (campos ficam verdes/vermelhos) usando CSS.

Componentes de Feedback: Inclui estilos para .alert (usado na página de projetos).

Badges e Tags: Utiliza componentes .badge para categorização de projetos.

Tecnologias Utilizadas

HTML5: Para toda a estrutura e semântica.

CSS3 (Modular):

O arquivo css/style.css está organizado com comentários que simulam uma estrutura modular (Base, Layout, Componentes, etc.).

CSS Grid, Flexbox, Variáveis CSS (Custom Properties) e Media Queries.

JavaScript (ES6+): Para a funcionalidade de máscaras de input e o toggle do menu hambúrguer.

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


Abra o arquivo index.html em qualquer navegador web.

Redimensione a janela do navegador para testar a responsividade e o menu mobile.
