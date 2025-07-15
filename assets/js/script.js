const imageSection = document.querySelector('.image-section');
const contact = document.querySelector('.contact');

carousel();

// Arrays das imagens 
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

// Carrossel automatico das imagens
function carousel(){
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);
}

//Seleciona botão das categorias
function selectButton(index) {
    currentButton = index;

    scrollToImages();            // Rola até a section das imagens
    loadImages(currentButton);   // Carrega as imagens por Lazyloading
    contactForms(currentButton); // Formulário Personalizado
}

// Rolagem mais suave
function scrollToImages(){
    imageSection.scrollIntoView({behavior: 'smooth'});
    imageSection.style.padding = '100px 20px';
}

// Carrega as imagems pelo indice das categorias
function loadImages(index){
    imageSection.innerHTML = " ";
    const images = imageCards[index] || [];

    // Criação da div de cada imagem
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

// Formulário personalizado de acordo com a categoria
function contactForms(index){
    const categories = ["Agenda", "Caderneta", "Planner", "KitBebê"]; // Arrays das categorias
    const category = categories[index] || "Produto";                  // Para indice invalido
    const includeDDP = index === 0                                    // Incluir o DDP no indice 0

    // Formulario
    contact.innerHTML = `
        <h2>Contato via WhatsApp</h2>
        <div class="form-grid">
            <label for="nomeCliente">Nome:</label>
            <input type="text" id="nomeCliente" placeholder="Ex: Nome do cliente" autocomplete="off"> 

            <label for="codigoPedido">Digite o código do pedido:</label>
            <input type="text" id="codigoPedido" placeholder="Ex: ${category}-001" autocomplete="off"> 

            <label for="personalizacao">Personalização:</label>
            <input type="text" id="personalizacao" placeholder="Ex: Nome da personalização" autocomplete="off"> 

            ${includeDDP ? `<label for="DPP">1DPP, 2DPP, datados e permanentes:</label>
            <input type="text" id="DPP" placeholder="Ex: 1DPP, datados" autocomplete="off">` : " "}

            <label for="pagamento">Pagamento:</label>
            <input type="text" id="pagamento" placeholder="Ex: Dinheiro, cartão, pix" autocomplete="off"> 

            <p class="attention">⚠️ Envie o código do produto escolhido para agilizar o atendimento!</p>

            <button id="btnWhats">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" class="whatsapp-logo-btn">
                Saber mais
            </button>
        </div>`;
     
    whatsAppMSG(); // Envia o formulário
}

// Gera a mensagem e envia diretamente para o whatsapp
function whatsAppMSG() {
    const buttonWhatsapp = document.querySelector('#btnWhats');

    buttonWhatsapp.addEventListener('click', function () {
        // Captura dos campos
        const username = document.getElementById('nomeCliente')?.value.trim();
        const code = document.getElementById('codigoPedido')?.value.trim();
        const customization = document.getElementById('personalizacao')?.value.trim();
        const payment = document.getElementById('pagamento')?.value.trim();
        const inputDPP = document.getElementById('DPP');
        const DPP = inputDPP ? inputDPP.value.trim() : null;

        // Validações dos campos obrigatórias
        if (!username) return alert('Por favor, digite seu nome!');
        if (!code) return alert('Por favor, digite o código do pedido!');
        if (!customization) return alert('Por favor, digite a personalização!');
        if (inputDPP && !DPP) return alert('Por favor, digite o DPP!');
        if (!payment) return alert('Por favor, informe a forma de pagamento!');
        
        // criaçao da mensagem 
        const numberWhats = '5581992302347';
        let mensage = `Olá! ${time()}, tudo bem? Gostaria de saber mais informações sobre meu pedido.`;

        mensage += `\n\nNome: *${username}*`;
        mensage += `\nCódigo do pedido: *${code}*`;
        mensage += `\nPersonalização: *${customization}*`;

        if (DPP) {
            mensage += `\nDPP: *${DPP}*`;
        }

        mensage += `\nForma de pagamento: *${payment}*`;

        // Criação da mensagem
        const url = `https://wa.me/${numberWhats}?text=${encodeURIComponent(mensage)}`;
        window.open(url, '_blank');
    });
}

// Saudação conforme o horário
function time(){
    const now = new Date();
    const time = now.getHours();

    if (time >= 6 && time < 12) return 'Bom dia';
    if (time >= 12 && time < 18) return 'Boa tarde';
    return 'Boa noite';
}