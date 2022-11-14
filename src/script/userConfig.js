const dadosIniciais = {
    usuarios: [
        {
            login: "admin",
            senha: "123",
            nome: "Administrador do Sistema",
            email: "admin@abc.com"
        },
        {
            login: "user",
            senha: "123",
            nome: "Usuario Comum",
            email: "user@abc.com"
        }
    ]
};

let readLog = JSON.parse(localStorage.getItem("usuariosCadastrados"));

if(localStorage.getItem("usuariosCadastrados") !== null){
    document.getElementById("user__name").innerHTML = readLog[1].nome;
    document.getElementById("user__password").innerHTML = readLog[1].senha;
    document.getElementById("user__email").innerHTML = readLog[1].email;
} else {
    localStorage.setItem("usuariosCadastrados", JSON.stringify(dadosIniciais.usuarios));
}

function atualizaUsuarios() {
    localStorage.setItem("usuariosCadastrados", JSON.stringify(dadosIniciais.usuarios));
    readLog = JSON.parse(localStorage.getItem("usuariosCadastrados"));
}

function atualizaHTML() {
    document.getElementById("user__name").innerHTML = readLog[1].nome;
    document.getElementById("user__password").innerHTML = readLog[1].senha;
    document.getElementById("user__email").innerHTML = readLog[1].email;
}

function alterarNome() {
    let inputUsuario = document.getElementById("input-nome").value;
    if(inputUsuario) {
        dadosIniciais.usuarios[1].nome = inputUsuario;
        atualizaUsuarios();
        atualizaHTML();
    } else {
        window.alert("Usuário inválido");
    }
}

function alterarSenha() {
    let inputSenha = document.getElementById("input-senha").value;
    if(inputSenha) {
        dadosIniciais.usuarios[1].senha = inputSenha;
        atualizaUsuarios();
        atualizaHTML();
    } else {
        window.alert("Senha inválida");
    }
}

function alterarEmail() {
    let inputEmail = document.getElementById("input-email").value;
    if(inputEmail) {
        dadosIniciais.usuarios[1].email = inputEmail;
        atualizaUsuarios();
        atualizaHTML();
    } else {
        window.alert("Email inválido");
    }
}








