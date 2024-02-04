
// const tabs = document.querySelectorAll('.tab-btn');

// tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

// const tabClicked = (tab) => {
//     tabs.forEach(tab => tab.classList.remove('active'));
//     tab.classList.add('active');

//     const contents = document.querySelectorAll('.content');
//     contents.forEach(content => content.classList.remove('show'));

//     const contentId = tab.getAttribute('content-id');
//     const content = document.getElementById(contentId);
//     console.log(contentId)
//     console.log(content)

//     content.classList.add('show');
// }

// const currentActiveTab = document.querySelector('.tab-btn.active');
// tabClicked(currentActiveTab);

// Função para construir a URL com a mensagem citada e abrir no navegador
function abrirWhatsApp() {
    var numeroTelefone = '';
    var mensagem = 'Sua mensagem aqui';

    // Construa a URL com a mensagem citada
    var url = 'https://web.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);

    // Abre a URL no navegador
    window.open(url, '_blank');
}

