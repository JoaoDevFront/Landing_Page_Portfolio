// Função para animar o logotipo na rolagem da página
window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    const windowTop = window.pageYOffset;
    const logoTop = logo.getBoundingClientRect().top;

    if (windowTop > logoTop) {
        logo.style.animation = 'logo-float 2s ease-in-out infinite';
    } else {
        logo.style.animation = 'none';
    }
});

// Função para abrir um modal de contato quando o botão "Fale Conosco" for clicado
document.querySelector('.btn-contato').addEventListener('click', function() {
    // Crie o modal aqui (pode usar bibliotecas como Bootstrap ou jQuery)
    // Exemplo com Bootstrap:
    $('#contatoModal').modal('show');
});

// Função para validar o formulário de inscrição antes de enviar
document.querySelector('#formulario-assinatura').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Valide os campos do formulário (nome, email, etc.)
    // Exemplo de validação básica com JavaScript:
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;

    if (nome === '' || email === '') {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    // Se a validação for bem-sucedida, envie o formulário para o servidor
    // Exemplo de envio com AJAX:
    const dados = {
        nome: nome,
        email: email
    };

    fetch('/assinar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Obrigado por se cadastrar! Em breve você receberá um email com as instruções para concluir sua assinatura.');
            // Limpe o formulário
            document.querySelector('#formulario-assinatura').reset();
        } else {
            alert('Erro ao enviar o formulário. Tente novamente mais tarde.');
        }
    })
    .catch(error => {
        console.error(error);
        alert('Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.');
    });
});
