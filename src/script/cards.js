const detalheTrilha = {
  Dificuldade: [
    {
      Alta: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#EB5C0C" class="bi bi-reception-4" viewBox="0 0 16 16"><path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/></svg> Alta',
    },
    {
      Media:
        '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#EB5C0C"    class="bi bi-reception-4" viewBox="0 0 16 16"> <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" /></svg> Média',
    },
    {
      Baixa:
        '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#EB5C0C" class="bi bi-reception-4" viewBox="0 0 16 16"><path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" /></svg> Baixa',
    },
  ],
//   recomendacao: [
//     {
//       Individual: '',
//     },
//     {
//       Grupo:
//         '',
//     },
//     {
//       IndividualouGrupo:
//         '',
//     },
//   ],
};


const cardBody = {
  dadosCards: [
    {
      id: 10,
      nome: "Laranjeiras",
      descricao:
        "Trilha bastante verde, com grande e vasta vegetação de mata Atlantica, pequenos cursos de água e panoramas de tirar o folego.",
      imagem: "./images/460.jpg",
      link: "Laranjeiras.html",
      moreHide: " É uma daquelas trilhas que você fica de queixo caído, devido a suas paisagens, belos mirantes e trechos por mata fechada que nos dão aquela sensação de aventura épica",
      altimetria: "700 metros",
      duracaoEstimada: "01h50",
      dificuldade: detalheTrilha.Dificuldade[0],
      tipodeTrilha: "Rural",
      recomendacao: "Individual ou Grupo",
      bookmark: "cardBody.dadosCards[0]",
    },
    {
      id: 11,
      nome: "Mirante das Goiabeiras",
      descricao:
        "Trajeto variado com subidas e descidas com pedregulhos soltos risco de torção por isso muita atenção ao passar pelo corredores",
      imagem: "./images/462.jpg",
      link: "MiranteGoiabeiras.html",
      moreHide:
        " fechados seguir muito atento aonde pisar mas tirando isso uma aventura e tanta e sem deixar de contemplar há bela da natureza.",
      bookmark: "cardBody.dadosCards[1]",
    },
    {
      id: 12,
      nome: "Caiçara",
      descricao:
        "logo após um bom trecho dessa estradinha, a trilha se separa para dois locais dinstintos o da esquerda leva para um açude médio",
      imagem: "./images/461.jpg",
      link: "Caicara.html",
      moreHide:
        " (um pouquinho mais longe) e a trilha da direita para um açude menor mas bem legal também. Os dois açudes são limpos, sem desníveis, com a água batendo no meio da barriga até uns 25m à dentro. A paisagem em volta é bem bonita, agradável e tranquila.",
      bookmark: "cardBody.dadosCards[2]",
    },
    {
      id: 13,
      nome: "3 Lagoas",
      descricao:
        "O caminho por essa trilha oferece desde cachoeiras, parques, até belas cidadezinhas que faz qualquer amante das trilhas encarar",
      imagem: "./images/464.jpg",
      link: "3lagoas.html",
      moreHide:
        " de bom animo o desafio, ao chegar no destino, os ciclistas costumam se refrescar com um bom banho nas cachoeira para renovarem suas energias. O percurso passa por cachoeiras, algumas cidadezinhas bonitas e parques que são ótimos para passear com sua bike.",
      bookmark: "cardBody.dadosCards[3]",
    },
    {
      id: 14,
      nome: "Estradão do Vento",
      descricao:
        "Além de ser uma trilha muito bela, esse local é considerado ainda um patrimônio cultural, pois segundo historiadores",
      imagem: "./images/467.jpg",
      link: "estradao.html",
      moreHide:
        " esse foi o lugar que os portugueses disseram ter avistado terra e gritaram “Terra à vista!”, sendo muito interessante também para quem gosta de locais históricos.",
      bookmark: "cardBody.dadosCards[4]",
    },
    {
      id: 15,
      nome: "Pata da Vaca",
      descricao:
        "Esse terreno é um pouco acidentado, apresentado estradas de terra e de cascalho, raízes expostas, rochas e riachos, o que exige",
      imagem: "./images/465.jpg",
      link: "patadavaca.html",
      moreHide:
        " um pouco mais do desempenho do ciclista. essa trilha não é tão fácil de percorrer, sendo necessário inclusive que a bike que você irá escolher para pedalar, nesse caso, seja uma excelente mountain bike, pois elas se adequam melhor a esse tipo de terreno.",
      bookmark: "cardBody.dadosCards[5]",
    },
  ],
};

// TRILHAS CRIADAS
// let arraysDoLocal = []; // lista vazia para armazenar trilhas cadastradas pelos usuários

// function forEachKey() {
//     for (var i = 0; i < localStorage.length; i++) { // insere cada key do local storage na array
//       arraysDoLocal.push(localStorage.key(i));
//     }
// }

// forEachKey();
// var listaoTrilhas = arraysDoLocal.filter(array => array.includes('trilha-')); // separa todos os itens com texto "trilha-"
// let novasTrilhas = [];
// listaoTrilhas.forEach((item) => {
//     var logLog = JSON.parse(localStorage.getItem(item));
//     novasTrilhas.push(logLog);
// });
// for(let i = 0; i < cardBody.dadosCards.length; i++){
//     var bookmarks = i+1;
//     var bookId = i+15;
// }
// novasTrilhas.forEach((elemento) => {
//     cardBody.dadosCards.push({nome: elemento.nome, descricao: elemento.descricao, imagem: "", moreHide: "", bookmark: `cardBody.dadosCards[${bookmarks}]`});
// });

let meuModal = `
    <div class="sharethis-inline-share-buttons"></div>
`;

cardBody.dadosCards.forEach((card) => {
  let cardHtml = `
        <div class="col mb-4 shadow-lg">
            <div class="card">
                <img onclick="location=href='${card.link}'" src="${card.imagem}" class="card-img-top d-block w-100" style="cursor: pointer;">
                <div class="card-body">
                    <h6 class="card-title"><b>${card.nome}</b></h6>
                    <p class="card-text">${card.descricao}<span class="dots">...</span><span class="more hide">${card.moreHide}</span></p>
                    <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                    <button type="button" onclick="showDiv()" style="background-color: #fff; border-style: none; width: fit-content; float: right;"><img src="./images/icons/compartilhar.png" alt="imagem-compartilhar"></button>
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
});

let btnShow = document.getElementById("mostra__modal");
let clicked = false;

function showDiv() {
  if (clicked) {
    btnShow.style.visibility = "visible";
    btnShow.style.opacity = "1";
    clicked = false;
  } else {
    btnShow.style.visibility = "hidden";
    btnShow.style.opacity = "0";
    clicked = true;
  }
}

let trilhasFavoritas = [];
function addToFavoritas(trilha) {
  if (localStorage.getItem("trilhasFavoritas") !== null) {
    if (localStorage.getItem("trilhasFavoritas").includes(trilha.id)) {
      return alert("Trilha já está favoritada!");
    } else {
      trilhasFavoritas = JSON.parse(localStorage.getItem("trilhasFavoritas"));
      trilhasFavoritas.push(trilha);
      localStorage.setItem(
        "trilhasFavoritas",
        JSON.stringify(trilhasFavoritas)
      );
      return alert("Trilha favoritada!");
    }
  } else {
    trilhasFavoritas.push(trilha);
    localStorage.setItem("trilhasFavoritas", JSON.stringify(trilhasFavoritas));
    return alert("Trilha favoritada!");
  }
}
