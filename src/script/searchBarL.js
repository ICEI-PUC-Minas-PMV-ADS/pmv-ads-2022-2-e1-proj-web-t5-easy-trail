const parametro1 = document.querySelector('.searchParam1');
const parametro2 = document.querySelector('.searchParam2');
const parametro3 = document.querySelector('.searchParam3');
const parametro4 = document.querySelector('.searchParam4');

const divSearch = document.querySelector('#search_results');

let encontrouResultado = false;

function codigoRodando() {

    encontrouResultado = true;

    document.querySelector('#all__cards').style.display = "none";

    let meuModal = `
        <div class="sharethis-inline-share-buttons"></div>
    `;

    const userLogads = Object.keys(localStorage).some(key => key == 'CLIENTE');

    if(userLogads) {
        divSearch.innerHTML += `
        <div class="col mb-4 shadow-lg">
            <div class="card">
                <img onclick="location=href='${todos.cards[i].link}'" src="${todos.cards[i].imagem}" class="card-img-top d-block w-100" style="cursor: pointer;">
                <div class="card-body">
                    <h6 class="card-title"><b>${todos.cards[i].nome}</b></h6>
                    <p class="card-text">${todos.cards[i].descricao}<span class="dots">...</span><span class="more hide">${todos.cards[i].moreHide}</span></p>
                    <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                    <button type="button" onclick="showDiv()" style="background-color: #fff; border-style: none; width: fit-content; float: right;"><img src="./images/icons/compartilhar.png" alt="imagem-compartilhar"></button>
                    <button onclick="addToFavoritas(${todos.cards[i].bookmark})" style="background-color: #fff; border-style: none; width: fit-content; float: right;"><img src="images/icons/bookmark.svg" alt="imagem-bookmark" width="26px" height="26px"></button>
                    <div id="mostra__modal">
                        <h3>Compartilhar<span onclick="blaaaa()" style="cursor: pointer; font-size: 30px;">&times;</span></h3>
                        ${meuModal}
                    </div>
                </div>
            </div>
        </div>
        `;
    } else {
        divSearch.innerHTML += `
        <div class="col mb-4 shadow-lg">
            <div class="card">
                <img onclick="location=href='${todos.cards[i].link}'" src="${todos.cards[i].imagem}" class="card-img-top d-block w-100" style="cursor: pointer;">
                <div class="card-body">
                    <h6 class="card-title"><b>${todos.cards[i].nome}</b></h6>
                    <p class="card-text">${todos.cards[i].descricao}<span class="dots">...</span><span class="more hide">${todos.cards[i].moreHide}</span></p>
                    <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                    <button type="button" onclick="showDiv()" style="background-color: #fff; border-style: none; width: fit-content; float: right;"><img src="./images/icons/compartilhar.png" alt="imagem-compartilhar"></button>
                    <div id="mostra__modal">
                        <h3>Compartilhar<span onclick="blaaaa()" style="cursor: pointer; font-size: 30px;">&times;</span></h3>
                        ${meuModal}
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

function codigoNaoRodando() {
    divSearch.innerHTML = "Infelizmente não encontramos trilhas com essas especificações";
}

function pesquisarLoucamente() {

    divSearch.innerHTML = "";
    document.querySelector('#recomended_title').innerHTML = "Resultado da busca";

    for(i = 0; i < (todos.cards).length; i++) {

        if(parametro1.value == "" && parametro2.value == "" && parametro3.value == "" && parametro4.value == "") {
            codigoRodando();
        }

        if(parametro1.value != "" && parametro2.value == "" && parametro3.value == "" && parametro4.value == "") {
            if(parametro1.value === todos.cards[i].estado) {
                codigoRodando();
            }
        }

        if(parametro1.value == "" && parametro2.value != "" && parametro3.value == "" && parametro4.value == "") {
            if(parametro2.value === todos.cards[i].dificuldade) {
                codigoRodando();
            }
        }

        if(parametro1.value == "" && parametro2.value == "" && parametro3.value != "" && parametro4.value == "") {
            if(parametro3.value === todos.cards[i].tipo) {
                codigoRodando();
            }
        }

        if(parametro1.value == "" && parametro2.value == "" && parametro3.value == "" && parametro4.value != "") {
            if(parametro4.value === todos.cards[i].recomendacao) {
                codigoRodando();
            }
        }

        if(parametro1.value != "" && parametro2.value != "" && parametro3.value == "" && parametro4.value == "") {
            if(parametro1.value === todos.cards[i].estado && parametro2.value === todos.cards[i].dificuldade) {
                codigoRodando();
            }
        }

        if(parametro1.value != "" && parametro2.value == "" && parametro3.value != "" && parametro4.value == "") {
            if(parametro1.value === todos.cards[i].estado && parametro3.value === todos.cards[i].tipo) {
                codigoRodando();
            }
        }

        if(parametro1.value != "" && parametro2.value == "" && parametro3.value == "" && parametro4.value != "") {
            if(parametro1.value === todos.cards[i].estado && parametro4.value === todos.cards[i].recomendacao) {
                codigoRodando();
            }
        }

        if(parametro1.value == "" && parametro2.value != "" && parametro3.value != "" && parametro4.value == "") {
            if(parametro2.value === todos.cards[i].dificuldade && parametro3.value === todos.cards[i].tipo) {
                codigoRodando();
            }
        }
        
        if(parametro1.value == "" && parametro2.value != "" && parametro3.value == "" && parametro4.value != "") {
            if(parametro2.value === todos.cards[i].dificuldade && parametro4.value === todos.cards[i].recomendacao) {
                codigoRodando();
            }
        }

        if(parametro1.value == "" && parametro2.value == "" && parametro3.value != "" && parametro4.value != "") {
            if(parametro3.value === todos.cards[i].tipo && parametro4.value === todos.cards[i].recomendacao) {
                codigoRodando();
            }
        }

        if(parametro1.value != "" && parametro2.value != "" && parametro3.value != "" && parametro4.value == "") {
            if(parametro1.value === todos.cards[i].estado && parametro2.value === todos.cards[i].dificuldade && parametro3.value === todos.cards[i].tipo) {
                codigoRodando();
            }
        }

        if(parametro1.value == "" && parametro2.value != "" && parametro3.value != "" && parametro4.value != "") {
            if(parametro2.value === todos.cards[i].dificuldade && parametro3.value === todos.cards[i].tipo && parametro4.value === todos.cards[i].recomendacao) {
                codigoRodando();
            }
        }

        if(parametro1.value != "" && parametro2.value == "" && parametro3.value != "" && parametro4.value == "") {
            if(parametro1.value === todos.cards[i].estado && parametro3.value === todos.cards[i].tipo && parametro4.value === todos.cards[i].recomendacao) {
                codigoRodando();
            }
        }

        if(parametro1.value != "" && parametro2.value != "" && parametro3.value == "" && parametro4.value != "") {
            if(parametro1.value === todos.cards[i].estado && parametro2.value === todos.cards[i].dificuldade && parametro4.value === todos.cards[i].recomendacao) {
                codigoRodando();
            }
        }

        if(parametro1.value != "" && parametro2.value != "" && parametro3.value != "" && parametro4.value != "") {
            if(parametro1.value === todos.cards[i].estado && parametro2.value === todos.cards[i].dificuldade && parametro3.value === todos.cards[i].tipo && parametro4.value === todos.cards[i].recomendacao) {
                codigoRodando();
            }
        }
    }

    if(!encontrouResultado) {
        document.querySelector('#all__cards').style.display = "none";
        divSearch.innerHTML = `<p id="searchBar"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>Infelizmente não encontramos trilhas com essas especificações, por favor, refaça sua busca.</P>`;
    }

    encontrouResultado = false;

}

