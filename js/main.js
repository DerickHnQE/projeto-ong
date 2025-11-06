// Aguarda o DOM (estrutura da página) estar completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    /* --- INÍCIO: LÓGICA DO MENU HAMBÚRGUER (Entrega II) --- */
    
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Alterna a classe 'active' no menu para mostrá-lo ou escondê-lo
            navMenu.classList.toggle('active');
            
            // Adiciona/Remove classe no próprio botão para animação (opcional)
            hamburger.classList.toggle('active');
        });
    }

    /* --- FIM: LÓGICA DO MENU HAMBÚRGUER --- */


    /* --- INÍCIO: LÓGICA DAS MÁSCARAS (Entrega I) --- */

    // Função genérica de máscara
    // Recebe o input e o padrão da máscara (ex: '###.###.###-##')
    function aplicarMascara(input, mascara) {
        let valor = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito
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
    }

    // Seleciona os campos
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    // Aplica as máscaras nos eventos de input
    if (inputCPF) {
        inputCPF.addEventListener('input', () => {
            aplicarMascara(inputCPF, '###.###.###-##');
        });
    }

    if (inputTelefone) {
        inputTelefone.addEventListener('input', () => {
            // Máscara dinâmica para 8 ou 9 dígitos
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

    // Simulação de envio do formulário (sem alert)
    const form = document.getElementById('cadastroForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio real
            console.log('Formulário enviado (simulação)!');
            
            // Exemplo de como mostrar um feedback (requer HTML/CSS para o .toast)
            // showToast('Cadastro enviado com sucesso!');

            form.reset(); // Limpa o formulário
        });
    }

    /* --- FIM: LÓGICA DAS MÁSCARAS --- */

});

