const imageSection = document.querySelector('.image-section');
const contact = document.querySelector('.contact');
carousel();
const imageCards = [
    [   // Agendas
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "Agenda-001"},
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "Agenda-002"},
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "Agenda-003"},
    ],
    [   // Caderneta
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "Caderneta-001"},
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "Caderneta-002"},
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "Caderneta-003"},
    ],
    [   // Planner
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "Planner-001"},
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "Planner-002"},
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "Planner-003"},
    ],
    [    // Kit Bebê
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "KitBebê-004"},
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "KitBebê-005"},
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "KitBebê-006"},
    ]
];

function carousel(){
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);
}

function selectButton(index) {
    currentButton = index;
    scrollToImages();
    loadImages(currentButton);
    contactForms(currentButton);
}

function scrollToImages(){
    imageSection.scrollIntoView({behavior: 'smooth'});
}

function loadImages(index){
    imageSection.innerHTML = " ";
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

function contactForms(index){
    if (index === 0) {
        contact.innerHTML = `
            <h2>Contato via WhatsApp</h2>
            <div class="form-grid">
                <label for="nomeCliente">Nome:</label>
                <input type="text" id="nomeCliente" placeholder="Ex: Nome do cliente" autocomplete="off"> 

                <label for="codigoPedido">Digite o código do pedido:</label>
                <input type="text" id="codigoPedido" placeholder="Ex: Agenda-001" autocomplete="off"> 

                <label for="personalizacao">Personalização:</label>
                <input type="text" id="personalizacao" placeholder="Ex: Nome da personalização" autocomplete="off"> 

                <label for="DPP">1DPP, 2DPP, datados e permanentes:</label>
                <input type="text" id="DPP" placeholder="Ex: 1DPP, datados" autocomplete="off"> 

                <label for="pagamento">Pagamento:</label>
                <input type="text" id="pagamento" placeholder="Ex: Dinheiro, cartão, pix" autocomplete="off"> 

                <p class="attention">⚠️ Envie o código do produto escolhido para agilizar o atendimento!</p>

                <button id="btnWhats">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" class="whatsapp-logo-btn">
                    Saber mais
                </button>
            </div>`;
    } else if (index === 1) {
        contact.innerHTML = `
            <h2>Contato via WhatsApp</h2>
            <div class="form-grid">
                <label for="nomeCliente">Nome:</label>
                <input type="text" id="nomeCliente" placeholder="Ex: Nome do cliente" autocomplete="off"> 

                <label for="codigoPedido">Digite o código do pedido:</label>
                <input type="text" id="codigoPedido" placeholder="Ex: Caderneta-001" autocomplete="off"> 

                <label for="personalizacao">Personalização:</label>
                <input type="text" id="personalizacao" placeholder="Ex: Nome da personalização" autocomplete="off"> 

                <label for="pagamento">Pagamento:</label>
                <input type="text" id="pagamento" placeholder="Ex: Dinheiro, cartão, pix" autocomplete="off">

                <p class="attention">⚠️ Envie o código do produto escolhido para agilizar o atendimento!</p>

                <button id="btnWhats">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" class="whatsapp-logo-btn">
                    Saber mais
                </button>
            </div>`;
    } else if (index === 2) {
        contact.innerHTML = `
            <h2>Contato via WhatsApp</h2>
            <div class="form-grid">
                <label for="nomeCliente">Nome:</label>
                <input type="text" id="nomeCliente" placeholder="Ex: Nome do cliente" autocomplete="off"> 

                <label for="codigoPedido">Digite o código do pedido:</label>
                <input type="text" id="codigoPedido" placeholder="Ex: Planner-001" autocomplete="off">
                
                <label for="personalizacao">Personalização:</label>
                <input type="text" id="personalizacao" placeholder="Ex: Nome da personalização" autocomplete="off"> 

                <label for="pagamento">Pagamento:</label>
                <input type="text" id="pagamento" placeholder="Ex: Dinheiro, cartão, pix" autocomplete="off"> 

                <p class="attention">⚠️ Envie o código do produto escolhido para agilizar o atendimento!</p>

                <button id="btnWhats">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" class="whatsapp-logo-btn">
                    Saber mais
                </button>
            </div>`;
    } else if (index === 3) {
        contact.innerHTML = `
            <h2>Contato via WhatsApp</h2>
            <div class="form-grid">

                <label for="NomeCliente">Nome:</label>
                <input type="text" id="nomeCliente" placeholder="Ex: Nome do cliente" autocomplete="off"> 

                <label for="codigoPedido">Digite o código do pedido:</label>
                <input type="text" id="codigoPedido" placeholder="Ex: kitBebê-001" autocomplete="off"> 

                <label for="Personalizacao">Personalização:</label>
                <input type="text" id="personalizacao" placeholder="Ex: Nome da personalização" autocomplete="off"> 

                <label for="Pagamento">Pagamento:</label>
                <input type="text" id="pagamento" placeholder="Ex: Dinheiro, cartão, pix" autocomplete="off"> 
                
                <p class="attention">⚠️ Envie o código do produto escolhido para agilizar o atendimento!</p>
                
                <button id="btnWhats">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" class="whatsapp-logo-btn">
                    Saber mais
                </button>
            </div>`;
        }

    whatsAppMSG();
}

function whatsAppMSG() {
    const buttonWhatsapp = document.querySelector('#btnWhats');

    buttonWhatsapp.addEventListener('click', function () {
        const nomeCliente = document.getElementById('nomeCliente')?.value.trim();
        const codigo = document.getElementById('codigoPedido')?.value.trim();
        const personalizacao = document.getElementById('personalizacao')?.value.trim();
        const pagamento = document.getElementById('pagamento')?.value.trim();
        const inputDPP = document.getElementById('DPP');
        const DPP = inputDPP ? inputDPP.value.trim() : null;

        // Validações obrigatórias
        if (!nomeCliente) return alert('Por favor, digite seu nome!');
        if (!codigo) return alert('Por favor, digite o código do pedido!');
        if (!personalizacao) return alert('Por favor, digite a personalização!');
        if (inputDPP && !DPP) return alert('Por favor, digite o DPP!');
        if (!pagamento) return alert('Por favor, informe a forma de pagamento!');
        
        // criaçao da mensagem 
        const numberWhats = '5581992302347';
        let mensage = `Olá! ${time()}, tudo bem? Gostaria de saber mais informações sobre meu pedido.`;

        mensage += `\n\nNome: *${nomeCliente}*`;
        mensage += `\nCódigo do pedido: *${codigo}*`;
        mensage += `\nPersonalização: *${personalizacao}*`;

        if (DPP) {
            mensage += `\nDPP: *${DPP}*`;
        }

        mensage += `\nForma de pagamento: *${pagamento}*`;

        const url = `https://wa.me/${numberWhats}?text=${encodeURIComponent(mensage)}`;
        window.open(url, '_blank');
    });
}

function time(){
    const now = new Date();
    const time = now.getHours();

    if (time >= 6 && time < 12) return 'Bom dia';
    if (time >= 12 && time < 18) return 'Boa tarde';
    return 'Boa noite';
}