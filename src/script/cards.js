const cardBody = {
    dadosCards: [
        {
            id: 10,
            nome: "Laranjeiras",
            descricao: "Trilha bastante verde, com grande e vasta vegetação de mata Atlantica, pequenos cursos de água e panoramas de tirar o folego.",
            imagem: "./images/460.jpg",
            moreHide: " É uma daquelas trilhas que você fica de queixo caído, devido a suas paisagens, belos mirantes e trechos por mata fechada que nos dão aquela sensação de aventura épica",
            bookmark: "cardBody.dadosCards[0]"
        },
        {
            id: 11,
            nome: "Mirante das Goiabeiras",
            descricao: "Trajeto variado com subidas e descidas com pedregulhos soltos risco de torção por isso muita atenção ao passar pelo corredores",
            imagem: "./images/462.jpg",
            moreHide: " fechados seguir muito atento aonde pisar mas tirando isso uma aventura e tanta e sem deixar de contemplar há bela da natureza.",
            bookmark: "cardBody.dadosCards[1]"
        },
        {
            id: 12,
            nome: "Caiçara",
            descricao: "logo após um bom trecho dessa estradinha, a trilha se separa para dois locais dinstintos o da esquerda leva para um açude médio",
            imagem: "./images/461.jpg",
            moreHide: " (um pouquinho mais longe) e a trilha da direita para um açude menor mas bem legal também. Os dois açudes são limpos, sem desníveis, com a água batendo no meio da barriga até uns 25m à dentro. A paisagem em volta é bem bonita, agradável e tranquila.",
            bookmark: "cardBody.dadosCards[2]"
        },
        {
            id: 13,
            nome: "3 Lagoas",
            descricao: "O caminho por essa trilha oferece desde cachoeiras, parques, até belas cidadezinhas que faz qualquer amante das trilhas encarar",
            imagem: "./images/464.jpg",
            moreHide: " de bom animo o desafio, ao chegar no destino, os ciclistas costumam se refrescar com um bom banho nas cachoeira para renovarem suas energias. O percurso passa por cachoeiras, algumas cidadezinhas bonitas e parques que são ótimos para passear com sua bike.",
            bookmark: "cardBody.dadosCards[3]"
        },
        {
            id: 14,
            nome: "Estradão do Vento",
            descricao: "Além de ser uma trilha muito bela, esse local é considerado ainda um patrimônio cultural, pois segundo historiadores",
            imagem: "./images/467.jpg",
            moreHide: " esse foi o lugar que os portugueses disseram ter avistado terra e gritaram “Terra à vista!”, sendo muito interessante também para quem gosta de locais históricos.",
            bookmark: "cardBody.dadosCards[4]"
        },
        {
            id: 15,
            nome: "Pata da Vaca",
            descricao: "Esse terreno é um pouco acidentado, apresentado estradas de terra e de cascalho, raízes expostas, rochas e riachos, o que exige",
            imagem: "./images/465.jpg",
            moreHide: " um pouco mais do desempenho do ciclista. essa trilha não é tão fácil de percorrer, sendo necessário inclusive que a bike que você irá escolher para pedalar, nesse caso, seja uma excelente mountain bike, pois elas se adequam melhor a esse tipo de terreno.",
            bookmark: "cardBody.dadosCards[5]"
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
    var bookId = i+15;
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
                    <button type="button" onclick="showDiv()" style="background-color: #fff; border-style: none; width: fit-content; float: right;"><img src="./images/icons/compartilhar.png" alt="imagem-compartilhar"></button>
                    <button onclick="addToFavoritas(${card.bookmark})" style="background-color: #fff; border-style: none; width: fit-content; float: right;"><img src="images/icons/bookmark.svg" alt="imagem-bookmark" width="26px" height="26px"></button>
                    <div id="mostra__modal">
                        <h3>Compartilhar</h3>
                        <span onclick="showDiv()" style="cursor: pointer; font-size: 30px;">&times;</span>
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
    if(localStorage.getItem("trilhasFavoritas") !== null) {
        if(localStorage.getItem("trilhasFavoritas").includes(trilha.id)){
            return alert("Trilha já está favoritada!");
        } else {
            trilhasFavoritas = JSON.parse(localStorage.getItem("trilhasFavoritas"));
            trilhasFavoritas.push(trilha);
            localStorage.setItem("trilhasFavoritas", JSON.stringify(trilhasFavoritas));
            return alert("Trilha favoritada!");
        }
    } else {
        trilhasFavoritas.push(trilha);
        localStorage.setItem("trilhasFavoritas", JSON.stringify(trilhasFavoritas));
        return alert("Trilha favoritada!");
    }
}


