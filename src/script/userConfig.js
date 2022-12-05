let userLogaduu = JSON.parse(localStorage.getItem('CLIENTE'));

const {
    fullname,
    } = userLogaduu;

let trilhasFavoritasS  = JSON.parse(localStorage.getItem(`user-${userLogaduu.nomeCompleto}`));
if(trilhasFavoritasS.trilhasFavoritadas.length === 0) {
    document.getElementById("nenhuma__favoritada").style.display = "block";
} else {
    document.getElementById("nenhuma__favoritada").style.display = "none";
}

let trilhasFavoritadas = trilhasFavoritasS.trilhasFavoritadas;
trilhasFavoritadas.forEach((card) => {
    let cardFav = `
        <div class="col mb-4 shadow-lg">
            <div class="card">
                <img onclick="location=href='${card.link}'" src="${card.imagem}" class="card-img-top d-block w-100" style="cursor: pointer">
                <div class="card-body">
                    <h6 class="card-title"><b>${card.nome}</b></h6>
                    <p class="card-text">${card.descricao}<span class="dots">...</span><span class="more hide">${card.moreHide}</span></p>
                    <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                    <button class="btn btn-danger" onclick="removerFavoritos(${card.id})" style="float: right; width: fit-content;">Remover dos favoritos</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById("cards__favoritas").innerHTML += cardFav;
})

//BTN CONFIG

const userConfig = document.getElementById("user__configs");
const trilhasFav = document.getElementById("trilhas__favoritas");
let clickado = false;
userConfig.style.display = "none";

function showDivs(){
    if(clickado) {
        trilhasFav.style.display= "block";
        userConfig.style.display= "none";
        clickado = false;
    } else {
        trilhasFav.style.display= "none";
        userConfig.style.display= "block";
        clickado = true;
    }
}
