
// Função para construir a URL com a mensagem citada e abrir no navegador
function abrirWhatsApp() {
    var numeroTelefone = '';
    var mensagem = 'Sua mensagem aqui';

    // Construa a URL com a mensagem citada
    var url = 'https://web.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);

    // Abre a URL no navegador
    window.open(url, '_blank');
}

