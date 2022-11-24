// const dadosIniciais = {
//     usuarios: [
//         {
//             login: "admin",
//             senha: "123",
//             nome: "Administrador do Sistema",
//             email: "admin@abc.com",
//             descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
//         },
//         {
//             login: "user",
//             senha: "123",
//             nome: "Usuario Comum",
//             email: "user@abc.com",
//             descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
//         }
//     ]
// };

// let readLog = JSON.parse(localStorage.getItem("usuariosCadastrados"));

// if(localStorage.getItem("usuariosCadastrados") !== null){
//     document.getElementById("user__name").innerHTML = readLog[1].nome;
//     document.getElementById("user__password").innerHTML = readLog[1].senha;
//     document.getElementById("user__email").innerHTML = readLog[1].email;
//     document.getElementById("user__description").innerHTML = readLog[1].descricao;
// } else {
//     localStorage.setItem("usuariosCadastrados", JSON.stringify(dadosIniciais.usuarios));
// }

// function atualizaUsuarios() {
//     localStorage.setItem("usuariosCadastrados", JSON.stringify(dadosIniciais.usuarios));
//     readLog = JSON.parse(localStorage.getItem("usuariosCadastrados"));
// }

// function atualizaHTML() {
//     document.getElementById("user__name").innerHTML = readLog[1].nome;
//     document.getElementById("user__password").innerHTML = readLog[1].senha;
//     document.getElementById("user__email").innerHTML = readLog[1].email;
//     document.getElementById("user__description").innerHTML = readLog[1].descricao;
// }

// function alterarNome() {
//     let inputUsuario = document.getElementById("input-nome").value;
//     if(inputUsuario) {
//         dadosIniciais.usuarios[1].nome = inputUsuario;
//         atualizaUsuarios();
//         atualizaHTML();
//     }
// }

// function alterarSenha() {
//     let inputSenha = document.getElementById("input-senha").value;
//     if(inputSenha) {
//         dadosIniciais.usuarios[1].senha = inputSenha;
//         atualizaUsuarios();
//         atualizaHTML();
//     }
// }

// function alterarEmail() {
//     let inputEmail = document.getElementById("input-email").value;
//     if(inputEmail) {
//         dadosIniciais.usuarios[1].email = inputEmail;
//         atualizaUsuarios();
//         atualizaHTML();
//     }
// }

// function alterarDescricao() {
//     let inputDescricao = document.getElementById("input-description").value;
//     if(inputDescricao) {
//         dadosIniciais.usuarios[1].descricao = inputDescricao;
//         atualizaUsuarios();
//         atualizaHTML();
//     }
// }

// //BTN CONFIG

// const btnShow = document.getElementById("user__configs");
// const div2Show = document.getElementById("favoritas");
// let clicked = false;

// function showDiv(){
//     if(clicked) {
//         div2Show.style.display= "block";
//         btnShow.style.display= "none";
//         clicked = false;
//     } else {
//         div2Show.style.display= "none";
//         btnShow.style.display= "block";
//         clicked = true;
//     }
// }

if(localStorage.getItem("trilhasFavoritas") === "[]" | localStorage.getItem("trilhasFavoritas") === null) {
    document.getElementById("nenhuma__favoritada").style.display = "block";
} else {
    document.getElementById("nenhuma__favoritada").style.display = "none";
}



let meuModal = `
    <div class="sharethis-inline-share-buttons"></div>
`;

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

let trilhasFavoritas  = [];
function removerFavoritos(trilha) {
    trilhasFavoritas = JSON.parse(localStorage.getItem("trilhasFavoritas"));
    trilhasFavoritas.splice(trilha.id, 1);
    console.log(trilhasFavoritas.id);
    localStorage.setItem("trilhasFavoritas", JSON.stringify(trilhasFavoritas));
    alert("Trilha removida!");
    window.location.reload();
}







