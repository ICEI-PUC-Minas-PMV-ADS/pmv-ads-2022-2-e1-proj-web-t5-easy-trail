window.onload = () => {
    let userData = JSON.parse(localStorage.getItem('CLIENTE'));
    let name = document.querySelector('#NameUser');

    const {
    nomeCompleto,
    } = userData;

    name.innerHTML = nomeCompleto;
    };