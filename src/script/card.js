const cardBody = {
    dadosCards: [
        {
            nome: "Laranjeiras",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis Dolor. Maecenas nisl est, ultrices",
            imagem: "images/460.jpg",
            moreHide: "nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.",
            bookmark: "cardBody.dadosCards[0]"
        },
        {
            nome: "Mirante das Goiabeiras",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis Dolor. Maecenas nisl est, ultrices",
            imagem: "images/462.jpg",
            moreHide: "nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.",
            bookmark: "cardBody.dadosCards[1]"
        },
        {
            nome: "Caiçara",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis Dolor. Maecenas nisl est, ultrices",
            imagem: "images/465.jpg",
            moreHide: "nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.",
            bookmark: "cardBody.dadosCards[2]"
        },
        {
            nome: "3 Lagoas",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis Dolor. Maecenas nisl est, ultrices",
            imagem: "images/461.jpg",
            moreHide: "nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.",
            bookmark: "cardBody.dadosCards[3]"
        },
        
        {
            nome: "Estradão do Vento",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis Dolor. Maecenas nisl est, ultrices",
            imagem: "images/463.jpeg",
            moreHide: "nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.",
            bookmark: "cardBody.dadosCards[4]"
        }
    ]
};

let arraysDoLocal = []; // lista vazia para armazenar trilhas cadastradas pelos usuários

function forEachKey() { 
    for (var i = 0; i < localStorage.length; i++) { // insere cada key do local storage na array
      arraysDoLocal.push(localStorage.key(i));
    }
}

forEachKey();
// console.log(arraysDoLocal);

var listaoTrilhas = arraysDoLocal.filter(array => array.includes('trilha-')); // separa todos os itens com texto "trilha-"
// console.log(listaoTrilhas);
let novasTrilhas = [];
listaoTrilhas.forEach((item) => {
    var logLog = JSON.parse(localStorage.getItem(item));
    // console.log(logLog);
    novasTrilhas.push(logLog);
});
// console.log(novasTrilhas);
for(let i = 0; i < cardBody.dadosCards.length; i++){
    var bookmarks = i+1;
}
novasTrilhas.forEach((elemento) => {
    cardBody.dadosCards.push({nome: elemento.nome, descricao: elemento.descricao, imagem: "", moreHide: "", bookmark: `cardBody.dadosCards[${bookmarks}]`});
});
// console.log(cardBody.dadosCards);

let meuModal = `
    <div class="sharethis-inline-share-buttons"></div>
`;

cardBody.dadosCards.forEach((card) => {
    let cardHtml = `
        <div class="col mb-4 shadow-lg">
            <div class="card">
                <img src="${card.imagem}" class="card-img-top d-block w-100">
                <div class="card-body">
                    <h6 class="card-title"><b>${card.nome}</b></h6>
                    <p class="card-text">${card.descricao}<span class="dots">...</span><span class="more hide">${card.moreHide}</span></p>
                    <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                    <button type="button" onclick="showDiv()" style="background-color: #fff; border-style: none; width: fit-content; float: right;"><img src="images/icons/compartilhar.png" alt="imagem-compartilhar"></button>
                    <button onclick="addToFavoritas(${card.bookmark})" style="background-color: #fff; border-style: none; width: fit-content; float: right;"><img src="images/icons/bookmark.svg" alt="imagem-bookmark" width="26px" height="26px"></button>
                    <div id="mostra__modal">
                        <h3>Compartilhar<span onclick="showDiv()" style="cursor: pointer; font-size: 30px;">&times;</span></h3>
                        ${meuModal}
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById("all__cards").innerHTML += cardHtml;
})

let btnShow = document.getElementById("mostra__modal");
let clicked = false;

function showDiv(){
    if(clicked) {
        btnShow.style.visibility= "visible";
        btnShow.style.opacity= "1";
        clicked = false;
    } else {
        btnShow.style.visibility= "hidden";
        btnShow.style.opacity= "0";
        clicked = true;
    }
}



let trilhasFavoritas  = [];
function addToFavoritas(trilha) {
    // if(localStorage.getItem("trilhasFavoritas") !== null) {
    //     var novasTrilhasFavoritas = JSON.parse(localStorage.getItem("trilhasFavoritas"));
    //     console.log(novasTrilhasFavoritas)

    // } else {
    trilhasFavoritas.push(trilha);
    localStorage.setItem("trilhasFavoritas", JSON.stringify(trilhasFavoritas));
    // }
}


