

function comment (){
    
    let comments = document.getElementById("comentariosTrilha").value;
    // localStorage.getItem("Comentario")

    if(localStorage.getItem("Comentario") === null){
    document.getElementById("usuariocoment").innerHTML += localStorage.getItem("Comentario")
    console.log("a")
    }
    else{
    localStorage.setItem("Comentario", JSON.stringify(comments));
    console.log("b")
    }
    
    
}

window.onload = () => {
    let userData = JSON.parse(localStorage.getItem('CLIENTE'));
    let name = document.querySelector('#nomeusuario');

    const {
    nomeCompleto,
    } = userData;

    name.innerHTML = nomeCompleto;
    };
