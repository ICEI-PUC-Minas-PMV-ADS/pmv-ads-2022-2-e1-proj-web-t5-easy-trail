let listaUsuario = [];

function salvarTrilha() {
    alert("Trilha salva!");
    listaUsuario.push("Trilha TAL");
    console.log(listaUsuario);
}

let linkTrilha = "https://www.google.com";

function compartilhaTextoSucesso() {
    alert("Link copiado para área de transferencia!");
}

function compartilhaTextoFalha(error) {
    console.error("Cópia falhou", error);
}

function compartilhaBotao() {
    window.navigator.clipboard
        .writeText(linkTrilha)
        .then(compartilhaTextoSucesso, compartilhaTextoFalha)
}


