const verificaLogado = Object.keys(localStorage).some(key => key == 'CLIENTE');

if(verificaLogado) {
    let commentsShow = ` 
    <div class="container">
    <div>
    <form action="" id="formComments" style="width:70%;">
        <h6>Faça seu comentário</h6>
        <div>
            <textarea class="form-control pl-3 shadow mb-0" placeholder="Escreva seu comentário.. (Máximo de 75 caracteres)"
                id="comentariosTrilha" rows="3" maxlength="75" required></textarea>
            <button class="btn btn-danger" onclick="enviar()">Enviar</button>
        </div>
    </form> 
    </div>
    </div>
    `;

    document.getElementById("commentarios").innerHTML = commentsShow;
} else {
    document.getElementById("commentarios").style.display = "none";
}