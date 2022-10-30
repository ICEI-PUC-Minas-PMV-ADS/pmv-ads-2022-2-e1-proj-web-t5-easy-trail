// Modal de compartilhamento
const openModal = document.querySelector(".open-modal"),
modal = document.querySelector(".modal"),
close = document.querySelector(".modal-close");

openModal.onclick = () => {
    modal.classList.toggle("is-show");
}

close.onclick = () => {
    openModal.click();
}

// Botão de copiar do modal
let linkTrilha = "https://www.pucminas.br";

function copiarBtn() {
    window.navigator.clipboard.writeText(linkTrilha)
}