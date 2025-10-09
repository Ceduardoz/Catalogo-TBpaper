const imageSection = document.querySelector('.image-section');
const contact = document.querySelector('.contact');
let dadosJSON = {};

// chamando arquivos do json
fetch("image.json")
    .then(response => response.json())
    .then(json => {
        dadosJSON = json;
        carousel(); // chamado após o JSON carregar
    })
    .catch(e => console.error("ERRO ao carregar o JSON!", e));

// Carrossel automático das imagens
function carousel() {
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
    const images = dadosJSON[currentButton] || [];
    
    scrollToImages();
    loadImages(images);
    contactForms(currentButton);
}

// Rolagem mais suave
function scrollToImages() {
    imageSection.scrollIntoView({ behavior: 'smooth' });
    imageSection.style.padding = '100px 20px';
}

// Carrega as imagens pelo índice das categorias
function loadImages(images) {
    imageSection.innerHTML = "";

    for (const image of images) {
        const container = document.createElement('div');
        container.classList.add('image-item');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.code;

        const caption = document.createElement('p');
        caption.innerHTML = `Código: <strong>${image.code}</strong>`;

        container.appendChild(img);
        container.appendChild(caption);
        imageSection.appendChild(container);
    }

    console.log("Todas as imagens carregadas");
}

// Formulário personalizado de acordo com a categoria
function contactForms(index) {
    const categories = ["Capas", "CadernetaSaude", "AgendaEscolar", "KitBebê"];
    const category = categories[index] || "Produto";
    const includeDDP = index === 0;

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
                <label>Agenda</label>
                <input type="radio" name="option" value="Agenda">
                <label>Planner</label>
                <input type="radio" name="option" value="Planner">
                <label>Cadernos</label>
                <input type="radio" name="option" value="Cadernos">

                <label for="DPP">1DPP, 2DPP, datados e permanentes:</label>
                <input type="text" id="DPP" placeholder="Escolha a opção" autocomplete="off">
            ` : ""}

            <label for="pagamento">Pagamento:</label>
            <input type="text" id="pagamento" placeholder="Ex: Dinheiro, cartão, pix" autocomplete="off"> 

            <p class="attention">⚠️ Envie o código do produto escolhido para agilizar o atendimento!</p>

            <button id="btnWhats">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" class="whatsapp-logo-btn">
                Saber mais
            </button>
        </div>
    `;

    if (includeDDP) placeholderMSG();
    whatsAppMSG(); // evita listeners duplicados
}

// cria o placeholder dependendo do valor do input radio
function placeholderMSG() {
    const radios = document.querySelectorAll('input[name="option"]');
    const dppInput = document.getElementById('DPP');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'Agenda') dppInput.placeholder = 'Ex: 1DPP ou 2DDP, datado ou permanente';
            if (radio.value === 'Planner') dppInput.placeholder = 'Ex: Planner Vertical ou Planner Horizontal';
            if (radio.value === 'Cadernos') dppInput.placeholder = 'Ex: Cadernos';
        });
    });
}

// Gera a mensagem e envia diretamente para o whatsapp
function whatsAppMSG() {
    const buttonWhatsapp = document.querySelector('#btnWhats');

    // Remove listeners antigos, clonando o botão
    const newButton = buttonWhatsapp.cloneNode(true);
    buttonWhatsapp.parentNode.replaceChild(newButton, buttonWhatsapp);

    newButton.addEventListener('click', function () {
        const username = document.getElementById('nomeCliente')?.value.trim();
        const code = document.getElementById('codigoPedido')?.value.trim();
        const customization = document.getElementById('personalizacao')?.value.trim();
        const payment = document.getElementById('pagamento')?.value.trim();
        const option = document.querySelector('input[name="option"]:checked');
        const inputOption = option ? option.value.trim() : null;
        const inputDPP = document.getElementById('DPP');
        const DPP = inputDPP ? inputDPP.value.trim() : null;

        // Validações
        if (!username) return alert('Por favor, digite seu nome!');
        if (!code) return alert('Por favor, digite o código do pedido!');
        if (!customization) return alert('Por favor, digite a personalização!');
        if (inputDPP && !option) return alert('Por favor, selecione o tipo (Agenda, Planner ou Cadernos)!');
        if (inputDPP && !DPP) return alert('Por favor, digite o DPP!');
        if (!payment) return alert('Por favor, informe a forma de pagamento!');

        const numberWhats = '5581992302347';
        let mensage = `Olá! ${time()}, tudo bem? Gostaria de saber mais informações sobre meu pedido.`;

        mensage += `\n\nNome: *${username}*`;
        mensage += `\nCódigo do pedido: *${code}*`;
        mensage += `\nPersonalização: *${customization}*`;

        if (inputOption) {
            mensage += `\nTipo: *${inputOption}*`;
        }
        if (DPP) {
            mensage += `\nDPP: *${DPP}*`;
        }

        mensage += `\nForma de pagamento: *${payment}*`;

        const url = `https://wa.me/${numberWhats}?text=${encodeURIComponent(mensage)}`;
        window.open(url, '_blank');
    });
}

// Saudação conforme o horário
function time() {
    const now = new Date();
    const time = now.getHours();

    if (time >= 6 && time < 12) return 'Bom dia';
    if (time >= 12 && time < 18) return 'Boa tarde';
    return 'Boa noite';
}
