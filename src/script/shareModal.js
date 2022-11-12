// Modal de compartilhamento
const openModal = document.querySelector(".open-modal"),
modal = document.querySelector(".modal"),
close = document.querySelector(".modal-close");

openModal.onclick = () => {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

close.onclick = () => {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
}

// Botão de copiar do modal
let linkTrilha = "https://www.pucminas.br";

function copiarBtn() {
    window.navigator.clipboard.writeText(linkTrilha)
}

// Modal de compartilhamento2
const openModal2 = document.querySelector("#open-modal2"),
modal2 = document.querySelector(".modal2"),
close2 = document.querySelector(".modal-close2");

openModal2.onclick = () => {
    modal2.style.visibility = "visible";
    modal2.style.opacity = "1";
}

close2.onclick = () => {
    modal2.style.visibility = "hidden";
    modal2.style.opacity = "0";
}

// Botão de copiar do modal
let linkTrilha2 = "https://www.pucminas.br";

function copiarBtn() {
    window.navigator.clipboard.writeText(linkTrilha)
}

// Modal de compartilhamento3
const openModal3 = document.querySelector("#open-modal3"),
modal3 = document.querySelector(".modal3"),
close3 = document.querySelector(".modal-close3");

openModal3.onclick = () => {
    modal3.style.visibility = "visible";
    modal3.style.opacity = "1";
}

close3.onclick = () => {
    modal3.style.visibility = "hidden";
    modal3.style.opacity = "0";
}

// Botão de copiar do modal
let linkTrilha3 = "https://www.pucminas.br";

function copiarBtn() {
    window.navigator.clipboard.writeText(linkTrilha)
}