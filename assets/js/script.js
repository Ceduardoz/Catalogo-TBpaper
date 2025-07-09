const buttonWhatsapp = document.querySelector('#btnWhats');
const imageSection = document.querySelector('.image-section');


const imageCards = [
    [   // Agendas
        {src: "/assets/img/Agenda001.jpg", code: "Agenda-001"},
        {src: "/assets/img/Agenda002.jpg", code: "Agenda-002"},
        {src: "/assets/img/Agenda003.jpg", code: "Agenda-003"},
        {src: "/assets/img/Agenda004.jpg", code: "Agenda-004"},
        {src: "/assets/img/Agenda005.jpg", code: "Agenda-005"},
        {src: "/assets/img/Agenda006.jpg", code: "Agenda-006"},
        {src: "/assets/img/Agenda007.jpg", code: "Agenda-007"},
        {src: "/assets/img/Agenda008.jpg", code: "Agenda-008"},
        {src: "/assets/img/Agenda009.jpg", code: "Agenda-009"},
        {src: "/assets/img/Agenda010.jpg", code: "Agenda-010"},
    ],
    [   // Caderneta
        {src: "/assets/img/Caderneta001.jpg", code: "Caderneta-001"},
        {src: "/assets/img/Caderneta002.jpg", code: "Caderneta-002"},
        {src: "/assets/img/Caderneta003.jpg", code: "Caderneta-003"},
    ],
    [   // Planner
        {src: "/assets/img/Outros001.jpg", code: "Outros-001"},
        {src: "/assets/img/Outros002.jpg", code: "Outros-002"},
        {src: "/assets/img/Outros003.jpg", code: "Outros-003"},
    ],
    [    // Kit Bebê
        {src: "/assets/img/Outros004.jpg", code: "Outros-004"},
        {src: "/assets/img/Outros005.jpg", code: "Outros-005"},
        {src: "/assets/img/Outros006.jpg", code: "Outros-006"},
    ]
];

function selectButton(index) {
    currentButton = index;
    scrollToImages();
    loadImages(currentButton);
}

function scrollToImages(){
    imageSection.scrollIntoView({behavior: 'smooth'});
}

function loadImages(index){
    imageSection.innerHTML = "";
    const images = imageCards[index] || [];

    images.forEach(({src, code}) => {
        const container = document.createElement('div');
        container.classList.add('image-item');

        const img = document.createElement('img');
        img.loading = 'lazy';
        img.src = src;
        img.alt = code;

        const caption = document.createElement('p');
        caption.innerHTML = `Código: <strong>${code}</strong>`;

        container.appendChild(img);
        container.appendChild(caption);
        imageSection.appendChild(container);
    });
}

buttonWhatsapp.addEventListener('click', function() {
    const codigo = document.getElementById('codigoPedido').value.trim();
    if (!codigo) {
        alert('Por favor, digite o código do pedido!');
        return;
    }
    const numeroWhats = '5581992302347';
    const mensagem = `Olá! Gostaria de saber mais informações sobre o(s) pedido(s) com código(s): *${codigo}*`;
    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});
