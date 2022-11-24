if(localStorage.getItem("trilhasFavoritas") === "[]" | localStorage.getItem("trilhasFavoritas") === null) {
    document.getElementById("nenhuma__favoritada").style.display = "block";
} else {
    document.getElementById("nenhuma__favoritada").style.display = "none";
}

let trilhasFavoritadas = JSON.parse(localStorage.getItem("trilhasFavoritas"));
// console.log(trilhasFavoritadas);
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

let trilhasFavoritasS  = [];
function removerFavoritos(trilha) {
    trilhasFavoritasS = JSON.parse(localStorage.getItem("trilhasFavoritas"));
    trilhasFavoritasS.splice(trilha.id, 1);
    console.log(trilhasFavoritasS.id);
    localStorage.setItem("trilhasFavoritas", JSON.stringify(trilhasSFavoritas));
    alert("Trilha removida!");
    window.location.reload();
}

const dadosIniciais = {
    usuarios: [
        {
            login: "admin",
            senha: "123",
            nome: "Administrador do Sistema",
            email: "admin@abc.com",
            descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            login: "user",
            senha: "123",
            nome: "Usuário Comum",
            email: "user@abc.com",
            descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]
};


for(i = 0; i < dadosIniciais.usuarios.length; i++){
    dadosIniciais.usuarios.forEach((user) => {
        localStorage.setItem(`user-${user.nome}`, JSON.stringify(user));
    });
}

// let arraysLocalStg = []; // lista vazia para armazenar usuários
// arraysLocalStg.filter(array => array.includes('user-'));

// for (var i = 0; i < localStorage.length; i++) { // insere cada key do local storage na array
//     arraysLocalStg.push(localStorage.key(i));
// }
// // console.log(arraysLocalStg);

// let novosUsuarios = [];
// var listaoUsuarios = arraysLocalStg.filter(array => array.includes('user-')); // separa todos os itens com texto "trilha-"
// listaoUsuarios.forEach((item) => {
//     var usuariosLogLog = JSON.parse(localStorage.getItem(item));
//     // console.log(usuariosLogLog);
//     novosUsuarios.push(usuariosLogLog);
// });



let cadastrados = JSON.parse(localStorage.getItem("usuariosCadastrados"));
if(localStorage.getItem("usuariosCadastrados") !== null){
    document.getElementById("NameUser").innerHTML = cadastrados[1].nome;
    // document.getElementById("user__password").innerHTML = cadastrados[1].senha;
    // document.getElementById("user__email").innerHTML = cadastrados[1].email;
} else {
    localStorage.setItem("usuariosCadastrados", JSON.stringify(dadosIniciais.usuarios));
    window.reload();
}

function atualizaUsuarios() {
    localStorage.setItem("usuariosCadastrados", JSON.stringify(dadosIniciais.usuarios));
    cadastrados = JSON.parse(localStorage.getItem("usuariosCadastrados"));
}

function atualizaHTML() {
    document.getElementById("NameUser").innerHTML = cadastrados[1].nome;
//     document.getElementById("user__password").innerHTML = cadastrados[1].senha;
//     document.getElementById("user__email").innerHTML = cadastrados[1].email;
//     document.getElementById("user__description").innerHTML = cadastrados[1].descricao;
    window.reload();
}

function alterarNome() {
    let inputUsuario = document.getElementById("input-nome").value;
    if(inputUsuario) {
        dadosIniciais.usuarios[1].nome = inputUsuario;
        atualizaUsuarios();
        alert("Nome alterado com sucesso!")
        atualizaHTML();
    }
}

function alterarSenha() {
    let inputSenha = document.getElementById("input-senha").value;
    if(inputSenha) {
        dadosIniciais.usuarios[1].senha = inputSenha;
        atualizaUsuarios();
        alert("Senha alterada com sucesso!")
        atualizaHTML();
    }
}

function alterarEmail() {
    let inputEmail = document.getElementById("input-email").value;
    if(inputEmail) {
        dadosIniciais.usuarios[1].email = inputEmail;
        atualizaUsuarios();
        alert("E-mail alterado com sucesso!")
        atualizaHTML();
    }
}

// function alterarDescricao() {
//     let inputDescricao = document.getElementById("input-description").value;
//     if(inputDescricao) {
//         dadosIniciais.usuarios[1].descricao = inputDescricao;
//         atualizaUsuarios();
//         atualizaHTML();
//     }
// }

// //BTN CONFIG

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






