const selectElement = (name) => {
    if(!name) throw new Error('The element name is empty!');

    const element = document.querySelector(name);

    return element;
}

const selectAllElements = (name) => {
    if(!name) throw new Error('The element name is empty!');

    const elements = document.querySelectorAll(name);

    return elements;
}

const trailFuncs = {
    cadastroDuvidas: () => {
        //ALL INPUTS TOGHETER
        let clearAllInputs = selectAllElements('.form-input');

        let nameInput = selectElement('.setup-form-nome');
        let sobrenomeInput = selectElement('.setup-form-sobrenome');
        let emailInput = selectElement('.setup-form-email');
        let textareaInput = selectElement('.txtAreaForm');

        if(!nameInput && !sobrenomeInput && !emailInput && !textareaInput) alert('Por favor, preencha todos os campos');

        const duvidaObj = {
            nome: nameInput.value,
            sobrenome: sobrenomeInput.value,
            email:  emailInput.value,
            duvidaText: textareaInput.value
        };

        this.event.preventDefault();

        window.localStorage.setItem(`CM-${emailInput.value}`, JSON.stringify(duvidaObj));

        clearAllInputs.forEach(item => item.value = '');

        return alert('Duvida enviada com sucesso!');
    },
    buscarTrilha: () => {

    },
    maisTrilhas: () => {
        let trilhasBox = selectAllElements('.trilhas-box-geral');

        let trilhasBoxItems = selectAllElements('.trilhas-box-items');

        if(trilhasBoxItems.length >= 2) {
            return;
        };

        let content = `<div class="trilhas-box-items">
        <div class="trilha-item">
            <div class="icon-trilha-item">
                <a href="https://www.pucminas.br/main/Paginas/default.aspx"><button class="pesquisar-input-explorar">Saiba Mais</button></a>
                <button onclick="compartilhaBotao()" class="botoes-outline"><img src="images/icons/compartilhar.png" alt="" class="comp-trilha"></button>
            </div>
            <div class="trilhas-text">
                <h2 class="titulo-trilha">Pata da Vaca</h2>
                <p class="desc-trilha">
                    Saída da antiga estação ferroviária, bairro São Luiz, Fazenda São José, Sapucaí novo e Sapucaí velho, Eleutério, Barão Ataliba Nogueira, Fazenda Malheiros, Fazenda da Mata, Fazenda Bom Café e Chácara Primavera, antigo Sítio Floresta. Os quase 65 km de estradas ajudam a contar a história recente de nosso país quando tropas federalistas e paulistas travaram o maior combate armado da história nacional.
                </p>
            </div>
            <div class="icon-trilha-item">
                <button onclick="salvarTrilha()" class="botoes-outline"><img src="images/icons/Vector.svg" alt="" class="save-trilha"></button>
            </div>
        </div>
        <div class="trilha-item">
            <div class="icon-trilha-item">
                <a href="https://www.pucminas.br/main/Paginas/default.aspx"><button class="pesquisar-input-explorar">Saiba Mais</button></a>
                <img src="images/icons/compartilhar.png" alt="" class="comp-trilha">
            </div>
            <div class="trilhas-text">
                <h2 class="titulo-trilha">Laranjeiras</h2>
                <p class="desc-trilha">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae pariatur beatae minima, adipisci laudantium obcaecati fugit culpa impedit ut est voluptatibus dolorum modi sint soluta aliquid quaerat accusantium nostrum!
                </p>
            </div>
            <div class="icon-trilha-item">
                <img src="images/icons/Vector.svg" alt="" class="save-trilha">
            </div>
        </div>
        <div class="trilha-item">
            <div class="icon-trilha-item">
                <a href="https://www.pucminas.br/main/Paginas/default.aspx"><button class="pesquisar-input-explorar">Saiba Mais</button></a>
                <img src="images/icons/compartilhar.png" alt="" class="comp-trilha">
            </div>
        
            
            <div class="trilhas-text">
                <h2 class="titulo-trilha">Mirante das Goiabeiras</h2>
                <p class="desc-trilha">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae pariatur beatae minima, adipisci laudantium obcaecati fugit culpa impedit ut est voluptatibus dolorum modi sint soluta aliquid quaerat accusantium nostrum!
                </p>
            </div>
            <div class="icon-trilha-item">
                <img src="images/icons/Vector.svg" alt="" class="save-trilha">
            </div>
        </div>`;
        
        trilhasBox[0].innerHTML += content;
        
        return;
    }
}