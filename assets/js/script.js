const imageSection = document.querySelector('.image-section');
const contact = document.querySelector('.contact');

carousel();

// Arrays das imagens 
const imageCards = [
    [   // Capas || Agendas, Planner, Cadernos 
        {src: "/assets/img/Agenda/1.jpg", code: "Capas-001"},
        {src: "/assets/img/Agenda/2.jpg", code: "Capas-002"},
        {src: "/assets/img/Agenda/3.jpg", code: "Capas-003"},
        {src: "/assets/img/Agenda/4.jpg", code: "Capas-004"},
        {src: "/assets/img/Agenda/5.jpg", code: "Capas-005"},
        {src: "/assets/img/Agenda/6.jpg", code: "Capas-006"},
        {src: "/assets/img/Agenda/7.jpg", code: "Capas-007"},
        {src: "/assets/img/Agenda/8.jpg", code: "Capas-008"},
        {src: "/assets/img/Agenda/9.jpg", code: "Capas-009"},
        {src: "/assets/img/Agenda/10.jpg", code: "Capas-010"},
        {src: "/assets/img/Agenda/11.jpg", code: "Capas-011"},
        {src: "/assets/img/Agenda/12.jpg", code: "Capas-012"},
        {src: "/assets/img/Agenda/13.jpg", code: "Capas-013"},
        {src: "/assets/img/Agenda/14.jpg", code: "Capas-014"},
        {src: "/assets/img/Agenda/15.jpg", code: "Capas-015"},
        {src: "/assets/img/Agenda/16.jpg", code: "Capas-016"},
        {src: "/assets/img/Agenda/17.jpg", code: "Capas-017"},
        {src: "/assets/img/Agenda/18.jpg", code: "Capas-018"},
        {src: "/assets/img/Agenda/19.jpg", code: "Capas-019"},
        {src: "/assets/img/Agenda/20.jpg", code: "Capas-020"},
        {src: "/assets/img/Agenda/21.jpg", code: "Capas-021"},
        {src: "/assets/img/Agenda/22.jpg", code: "Capas-022"},
        {src: "/assets/img/Agenda/23.jpg", code: "Capas-023"},
        {src: "/assets/img/Agenda/24.jpg", code: "Capas-024"},
        {src: "/assets/img/Agenda/25.jpg", code: "Capas-025"},
        {src: "/assets/img/Agenda/26.jpg", code: "Capas-026"},
        {src: "/assets/img/Agenda/27.jpg", code: "Capas-027"},
        {src: "/assets/img/Agenda/28.jpg", code: "Capas-028"},
        {src: "/assets/img/Agenda/29.jpg", code: "Capas-029"},
        {src: "/assets/img/Agenda/30.jpg", code: "Capas-030"},
        {src: "/assets/img/Agenda/31.jpg", code: "Capas-031"},
        {src: "/assets/img/Agenda/32.jpg", code: "Capas-032"},
        {src: "/assets/img/Agenda/33.jpg", code: "Capas-033"},
        {src: "/assets/img/Agenda/34.jpg", code: "Capas-034"},
        {src: "/assets/img/Agenda/35.jpg", code: "Capas-035"},
        {src: "/assets/img/Agenda/36.jpg", code: "Capas-036"},
        {src: "/assets/img/Agenda/37.jpg", code: "Capas-037"},
        {src: "/assets/img/Agenda/38.jpg", code: "Capas-038"},
        {src: "/assets/img/Agenda/39.jpg", code: "Capas-039"},
        {src: "/assets/img/Agenda/40.jpg", code: "Capas-040"},
        {src: "/assets/img/Agenda/41.jpg", code: "Capas-041"},
        {src: "/assets/img/Agenda/42.jpg", code: "Capas-042"},
        {src: "/assets/img/Agenda/43.jpg", code: "Capas-043"},
        {src: "/assets/img/Agenda/44.jpg", code: "Capas-044"},
        {src: "/assets/img/Agenda/45.jpg", code: "Capas-045"},
        {src: "/assets/img/Agenda/46.jpg", code: "Capas-046"},
        {src: "/assets/img/Agenda/47.jpg", code: "Capas-047"},
        {src: "/assets/img/Agenda/48.jpg", code: "Capas-048"},
        {src: "/assets/img/Agenda/49.jpg", code: "Capas-049"},
        {src: "/assets/img/Agenda/50.jpg", code: "Capas-050"},
        {src: "/assets/img/Agenda/51.jpg", code: "Capas-051"},
        {src: "/assets/img/Agenda/52.jpg", code: "Capas-052"},
        {src: "/assets/img/Agenda/53.jpg", code: "Capas-053"},
        {src: "/assets/img/Agenda/54.jpg", code: "Capas-054"},
        {src: "/assets/img/Agenda/55.jpg", code: "Capas-055"},
        {src: "/assets/img/Agenda/56.jpg", code: "Capas-056"},
        {src: "/assets/img/Agenda/57.jpg", code: "Capas-057"},
        {src: "/assets/img/Agenda/58.jpg", code: "Capas-058"},
        {src: "/assets/img/Agenda/59.jpg", code: "Capas-059"},
        {src: "/assets/img/Agenda/60.jpg", code: "Capas-060"},
        {src: "/assets/img/Agenda/61.jpg", code: "Capas-061"},
        {src: "/assets/img/Agenda/62.jpg", code: "Capas-062"},
        {src: "/assets/img/Agenda/63.jpg", code: "Capas-063"},
        {src: "/assets/img/Agenda/64.jpg", code: "Capas-064"},
        {src: "/assets/img/Agenda/65.jpg", code: "Capas-065"},
        {src: "/assets/img/Agenda/66.jpg", code: "Capas-066"},
        {src: "/assets/img/Agenda/67.jpg", code: "Capas-067"},
        {src: "/assets/img/Agenda/68.jpg", code: "Capas-068"},
        {src: "/assets/img/Agenda/69.jpg", code: "Capas-069"},
        {src: "/assets/img/Agenda/70.jpg", code: "Capas-070"},

    ],
    [   // Caderneta de Saúde
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "CadernetaSaude-001"},
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "CadernetaSaude-002"},
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "CadernetaSaude-003"},
    ],
    [   // Agenda Escolar
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "AgendaEscolar-001"},
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "AgendaEscolar-002"},
        {src: "/assets/img/TesteOtimizaçao.jpg", code: "AgendaEscolar-003"},
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
    const categories = ["Capas", "CadernetaSaude", "AgendaEscolar", "KitBebê"]; // Arrays das categorias
    const category = categories[index] || "Produto";                            // Para indice invalido
    const includeDDP = index === 0                                              // Incluir o DDP no indice 0

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

            ${includeDDP ? `
                    <label for="agenda">Agenda</label>
                    <input type="radio" name="option" id="agenda" value="Agenda">
                    <label for="planner">Planner</label>
                    <input type="radio" name="option" id="planner" value="Planer">
                    <label for="caderneta">Cadernos</label>
                    <input type="radio" name="option" id="caderneta" value="Cadernos">

                <label for="DPP">1DPP, 2DPP, datados e permanentes:</label>
                <input type="text" id="DPP" placeholder="Escolha a opção" autocomplete="off">` : " "}

            <label for="pagamento">Pagamento:</label>
            <input type="text" id="pagamento" placeholder="Ex: Dinheiro, cartão, pix" autocomplete="off"> 

            <p class="attention">⚠️ Envie o código do produto escolhido para agilizar o atendimento!</p>

            <button id="btnWhats">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" class="whatsapp-logo-btn">
                Saber mais
            </button>
        </div>`;
    if (includeDDP) placeholderMSG(); // muda o placeholder
    whatsAppMSG();                    // Envia o formulário
}

// cria o placeholder dependendo do valor do input radio
function placeholderMSG(){
    const radios = document.querySelectorAll('input[name="option"]');
    const dppInput = document.getElementById('DPP');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'Agenda') {
                dppInput.placeholder = 'Ex: 1DPP ou 2DDP, datado ou permanentes ';
            } else if (radio.value === 'Planer') {
                dppInput.placeholder = 'Ex: Planner Vertical ou Planner Horizontal';
            } else if (radio.value === 'Cadernos') {
                dppInput.placeholder = 'Ex: Cadernos';
            }
        });
    });
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
        const option = document.querySelector('input[name="option"]:checked')?.value.trim();
        const inputDPP = document.getElementById('DPP');
        const DPP = inputDPP ? inputDPP.value.trim() : null;

        // Validações dos campos obrigatórias
        if (!username) return alert('Por favor, digite seu nome!');
        if (!code) return alert('Por favor, digite o código do pedido!');
        if (!customization) return alert('Por favor, digite a personalização!');
        if (inputDPP && !DPP) return alert('Por favor, digite o DPP!');
        if (!option) return alert('Por favor, marque a opção!'); 
        if (!payment) return alert('Por favor, informe a forma de pagamento!');
        
        console.log(option);
        // criaçao da mensagem 
        const numberWhats = '5581991983395';
        let mensage = `Olá! ${time()}, tudo bem? Gostaria de saber mais informações sobre meu pedido.`;

        mensage += `\n\nNome: *${username}*`;
        mensage += `\nCódigo do pedido: *${code}*`;
        mensage += `\nPersonalização: *${customization}*`;

        if (DPP) {
            mensage += `\nTipo: *${option}*`;
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