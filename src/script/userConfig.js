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

// CRIAR VALIDAÇÃO DE DADOS
// https://stackoverflow.com/questions/154059/how-do-i-check-for-an-empty-undefined-null-string-in-javascript
// !EMPTY !NULL !UNDEFINED
function atualizaHTML() {
    // INSERIR VALIDAÇÃO
    document.getElementById("user__name").innerHTML = readLog[1].nome;
    document.getElementById("user__password").innerHTML = readLog[1].senha;
    document.getElementById("user__email").innerHTML = readLog[1].email;
}

function alterarNome() {
    dadosIniciais.usuarios[1].nome = document.getElementById("input-nome").value;
    atualizaUsuarios();
    atualizaHTML();
    console.log(readLog[1].nome);
}



// AJAX?

// var req = new XMLHttpRequest ();
// var url = "";

// function processaDados() {
     
// }

// function getData() {
//     req.open('GET', url, true);
//     req.send();
// }









