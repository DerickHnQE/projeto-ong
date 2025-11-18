/*
  REQUISITO (ENTREGA III): Código JavaScript Modular
  O código está organizado em "Módulos" (grupos de funções)
  para facilitar a manutenção.
*/

// --- 1. MÓDULO DE NAVEGAÇÃO SPA (ENTREGA III) ---

/**
 * REQUISITO: Implementar sistema de Single Page Application (SPA) básico
 * Esta função inicializa o roteamento do lado do cliente.
 * Ela intercepta cliques nos links de navegação.
 */
const initSpaRouting = () => {
    // Seleciona todos os links que devem ser tratados pelo SPA
    const navLinks = document.querySelectorAll(
        '.main-nav a[href$=".html"], ' +
        '.logo[href$=".html"], ' +
        '.btn[href$=".html"], ' + // Inclui botões que navegam
        '.main-nav a[href*=".html#"], ' +
        '.main-nav a[href^="#"]:not([href="#"])' // Ex: #contato
    );

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Impede a navegação padrão
            const fullUrl = link.getAttribute('href');
            // Separa a URL base do "hash" (#)
            const url = fullUrl.split('#')[0]; // Ex: "projetos.html" ou ""
            const hash = fullUrl.split('#')[1]; // Ex: "voluntariado" ou "contato"

            // Se for uma URL de página (ex: projetos.html)
            if (url && url !== window.location.pathname.split('/').pop()) {
                loadPage(url, hash); // Passa o hash para a função de carregar
                history.pushState(null, '', fullUrl);
            } else if (hash) {
                // Se for SÓ um hash (ex: #contato), apenas rola
                scrollToAnchor(hash);
                history.pushState(null, '', fullUrl);
            }
        });
    });

    // Lida com os botões "Voltar" e "Avançar" do navegador
    window.addEventListener('popstate', () => {
        loadPage(location.pathname.split('/').pop() || 'index.html');
    });
};

/**
 * REQUISITO: Criar sistema de templates JavaScript
 * Esta função busca o conteúdo da nova página (template)
 * e o injeta no <main> da página atual.
 */
const loadPage = async (url, hash) => {
    try {
        document.body.classList.add('loading'); // Efeito visual

        const response = await fetch(url);
        if (!response.ok) throw new Error('Página não encontrada');

        const text = await response.text();
        
        // Usa o DOMParser para analisar o HTML buscado
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        // Extrai o conteúdo do <main> (nosso "template") e o título
        const newMainContent = doc.getElementById('page-content').innerHTML;
        const newTitle = doc.querySelector('title').innerText;

        // Injeta o novo conteúdo e atualiza o título
        document.getElementById('page-content').innerHTML = newMainContent;
        document.title = newTitle;

        // Atualiza a classe 'active' no menu de navegação
        updateActiveNav(url);
        
        // RE-INICIALIZA os módulos que dependem do conteúdo do <main>
        initMasks();
        initFormValidation();

        // Se houver um hash (#), rola até ele após carregar
        if (hash) {
            scrollToAnchor(hash);
        } else {
            window.scrollTo(0, 0); // Rola para o topo
        }
        
        document.body.classList.remove('loading');

    } catch (error) {
        console.error('Erro ao carregar página:', error);
        document.body.classList.remove('loading');
    }
};

/**
 * Função auxiliar para rolar suavemente para uma âncora (#id)
 */
const scrollToAnchor = (id) => {
    const targetId = id.startsWith('#') ? id.substring(1) : id;
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

/**
 * Função auxiliar para atualizar o link ativo na navegação.
 */
const updateActiveNav = (url) => {
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        // Verifica se o href do link corresponde à URL base
        if (link.getAttribute('href').split('#')[0] === url) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// --- 2. MÓDULO DE COMPONENTES (ENTREGA II) ---

/**
 * Inicializa a lógica do menu hambúrguer.
 * (CORRIGIDO) Esta lógica é simples e deve ser chamada APENAS UMA VEZ.
 * Como o <header> não é recarregado pelo SPA, este listener persiste.
 */
const initMenuHamburger = () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
};


// --- 3. MÓDULO DE MÁSCARAS (ENTREGA I) ---

/**
 * Função genérica de máscara
 */
const aplicarMascara = (input, mascara) => {
    let valor = input.value.replace(/\D/g, '');
    let resultado = '';
    let posValor = 0;

    for (let i = 0; i < mascara.length; i++) {
        if (posValor >= valor.length) break;
        if (mascara[i] === '#') {
            resultado += valor[posValor++];
        } else {
            resultado += mascara[i];
        }
    }
    input.value = resultado;
};

/**
 * Inicializa e aplica as máscaras nos campos de input.
 * Esta função precisa ser chamada toda vez que o conteúdo do SPA é carregado.
 */
const initMasks = () => {
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    if (inputCPF) {
        inputCPF.addEventListener('input', () => {
            aplicarMascara(inputCPF, '###.###.###-##');
        });
    }
    if (inputTelefone) {
        inputTelefone.addEventListener('input', () => {
            let valor = inputTelefone.value.replace(/\D/g, '');
            if (valor.length > 10) {
                aplicarMascara(inputTelefone, '(##) #####-####');
            } else {
                aplicarMascara(inputTelefone, '(##) ####-####');
            }
        });
    }
    if (inputCEP) {
        inputCEP.addEventListener('input', () => {
            aplicarMascara(inputCEP, '#####-###');
        });
    }
};


// --- 4. MÓDULO DE FORMULÁRIO (ENTREGA III) ---

/**
 * REQUISITO: Sistema de verificação de consistência de dados em formulários.
 * Inicializa a validação avançada do formulário de cadastro.
 */
const initFormValidation = () => {
    const form = document.getElementById('cadastroForm');
    if (!form) return; // Sai se não estiver na página de cadastro

    const fieldsToValidate = [
        'nomeCompleto', 'email', 'cpf', 'telefone', 'dataNascimento',
        'endereco', 'cep', 'cidade', 'estado'
    ];

    // Validação em tempo real (enquanto o usuário digita)
    fieldsToValidate.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', () => {
                validateField(input);
            });
        }
    });

    // Validação no envio
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio
        
        let isFormValid = true;
        fieldsToValidate.forEach(id => {
            const input = document.getElementById(id);
            if (input && !validateField(input)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            console.log('Formulário válido! Enviando...');
            showToast('Cadastro enviado com sucesso!', 'success');
            form.reset();
            fieldsToValidate.forEach(id => {
                 const input = document.getElementById(id);
                 if (input) input.classList.remove('is-valid');
            });
        } else {
            console.log('Formulário inválido.');
            showToast('Por favor, corrija os erros no formulário.', 'danger');
        }
    });
};

/**
 * Valida um campo individual e mostra a mensagem de erro.
 * REQUISITO: Aviso ao usuário de preenchimento incorreto.
 * @returns {boolean} - True se o campo for válido, False se for inválido.
 */
const validateField = (input) => {
    const errorElement = document.getElementById(`error-${input.id}`);
    let message = '';
    let isValid = false;

    // 1. Verificação de "obrigatório"
    if (input.required && input.value.trim() === '') {
        message = 'Este campo é obrigatório.';
    } else {
        // 2. Verificações de consistência
        switch (input.id) {
            case 'nomeCompleto':
                if (input.value.trim().length < 3) {
                    message = 'O nome deve ter pelo menos 3 caracteres.';
                }
                break;
            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                    message = 'Por favor, insira um e-mail válido.';
                }
                break;
            case 'cpf':
                if (!validaCPF(input.value)) {
                    message = 'CPF inválido.';
                }
                break;
            case 'dataNascimento':
                if (input.value && !isOldEnough(input.value, 16)) { // Ex: Mínimo 16 anos
                    message = 'Você deve ter pelo menos 16 anos para se cadastrar.';
                }
                break;
            case 'telefone':
                if (input.value.replace(/\D/g, '').length < 10) {
                    message = 'Telefone incompleto.';
                }
                break;
            case 'cep':
                if (input.value.replace(/\D/g, '').length < 8) {
                    message = 'CEP incompleto.';
                }
                break;
        }
    }
    
    // Define o estado de validade
    isValid = (message === '' && input.value.trim() !== '');

    // Mostra ou esconde a mensagem de erro
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = message ? 'block' : 'none';
    }

    // Adiciona/Remove classes CSS para feedback visual (verde/vermelho)
    if (input.value.trim() !== '') {
        input.classList.toggle('is-valid', isValid);
        input.classList.toggle('is-invalid', !isValid);
    } else {
        input.classList.remove('is-valid', 'is-invalid');
    }
    
    return isValid;
};

/**
 * Mostra uma notificação (toast) na tela.
 */
const showToast = (message, type = 'success') => {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.className = 'toast'; // Reseta classes
    toast.classList.add('show');
    if (type === 'danger') {
        toast.classList.add('danger');
    }

    // Esconde o toast após 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
};

/* --- Funções Auxiliares de Validação (Entrega III) --- */

/**
 * Função de consistência que valida o algoritmo do CPF.
 */
const validaCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '') return false;
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    
    let soma = 0;
    let resto;
    
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    
    return true;
};

/**
 * Função de consistência que valida a idade.
 */
const isOldEnough = (dateString, minAge) => {
    if (!dateString) return false;
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= minAge;
};


// --- 5. INICIALIZAÇÃO ---

/**
 * Aguarda o DOM (estrutura da página) estar completamente carregado
 * para inicializar os módulos.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Funções que rodam UMA VEZ (pois o Header não muda)
    initMenuHamburger();
    initSpaRouting();    
    
    // Funções que rodam na carga inicial (para a página atual)
    initMasks();
    initFormValidation();
});
