let trilhasFavoritasS  = [];
if(localStorage.getItem("trilhasFavoritas") === "[]" || localStorage.getItem("trilhasFavoritas") === null) {
    localStorage.setItem("trilhasFavoritas", JSON.stringify(trilhasFavoritasS));
    document.getElementById("nenhuma__favoritada").style.display = "block";
} else {
    document.getElementById("nenhuma__favoritada").style.display = "none";
}

let trilhasFavoritadas = JSON.parse(localStorage.getItem("trilhasFavoritas"));
trilhasFavoritadas.forEach((card) => {
    let cardFav = `
        <div class="col mb-4 shadow-lg">
            <div class="card">
                <img src="${card.imagem}" class="card-img-top d-block w-100">
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

function removerFavoritos(trilha) {
    trilhasFavoritasS = JSON.parse(localStorage.getItem("trilhasFavoritas"));
    trilhasFavoritasS.splice(trilha.id, 1);
    console.log(trilhasFavoritasS.id);
    localStorage.setItem("trilhasFavoritas", JSON.stringify(trilhasFavoritasS));
    alert("Trilha removida!");
    window.location.reload();
}
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

var userObj = [
    {
        nomeCompleto: "userino",
        senha: "12345",
        email: "user@mail.com"
    },
    {
        nomeCompleto: "what",
        senha: "54321",
        email: "what@mail.com"
    },
];


let userList = []; // lista vazia para armazenar usuários
for (var i = 0; i < localStorage.length; i++) { // insere cada key do local storage na array
    userList.push(localStorage.key(i));
}

let novaUserList = userList.filter(array => array.includes('user-'));


let allUsersObjList = [];
novaUserList.forEach((usuario) => {
    let ruser = JSON.parse(localStorage.getItem(usuario));
    allUsersObjList.push(ruser);
});

userObj.push(allUsersObjList);

let loggedUser = {nomeCompleto: "userino", senha: "12345"};
for(i = 0; i < userObj.length; i++) {
    if(loggedUser.nomeCompleto == userObj[i].nomeCompleto && loggedUser.senha == userObj[i].senha) {
        console.log(`Bem vindo ${userObj[i].nomeCompleto}`);

        let esseUsuario = userObj[i];

        document.getElementById("NameUser").innerHTML = userObj[i].nomeCompleto;

        function atualizaUsuarios() {
            localStorage.setItem(`user-${esseUsuario.nomeCompleto}`, JSON.stringify(esseUsuario));
        }
        
        function atualizaHTML() {
            document.getElementById("NameUser").innerHTML = esseUsuario.nomeCompleto;
            window.location.reload();
        }

        function alterarNome() {
            this.event.preventDefault();
            let inputUsuario = document.getElementById("input-nome").value;
            if(inputUsuario) {
                esseUsuario.nomeCompleto = inputUsuario;
                alert("Nome alterado com sucesso!");
                localStorage.removeItem(`user-${esseUsuario.nomeCompleto}`)
                atualizaUsuarios();
                // atualizaHTML();
            }
        }

        function alterarSenha() {
            this.event.preventDefault();
            let inputSenha = document.getElementById("input-senha").value;
            if(inputSenha) {
                esseUsuario.senha = inputSenha;
                atualizaUsuarios();
                alert("Senha alterada com sucesso!");
            }
        }

        function alterarEmail() {
            this.event.preventDefault();
            let inputEmail = document.getElementById("input-email").value;
            if(inputEmail) {
                esseUsuario.email = inputEmail;
                atualizaUsuarios();
                alert("E-mail alterado com sucesso!");
            }
        }

    }
}
