

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



const inputName = document.getElementById('inputName');
const comentariosTrilha = document.getElementById('comentariosTrilha');
const form = document.getElementById('formComments');
const commentPost = document.getElementById('commentPost');

let userLogaduu = JSON.parse(localStorage.getItem('CLIENTE'));

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let nCom = Math.floor(Math.random() * 999);
    localStorage.setItem(`comentario${nCom}`,JSON.stringify({nome: userLogaduu.nomeCompleto,comentario: comentariosTrilha.value}));

    let p = document.createElement('p');
    p.classList = 'p-2 text-wrap';
    p.innerHTML = `<strong>${inputName.value}: </strong> &nbsp ${comentariosTrilha.value}`;
    commentPost.appendChild(p);
    inputName.value = '';
    comentariosTrilha.value = '';
    inputName.focus();
});

