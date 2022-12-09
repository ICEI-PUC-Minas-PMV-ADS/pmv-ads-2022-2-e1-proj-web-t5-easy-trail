const verificaLogado = Object.keys(localStorage).some(key => key == 'CLIENTE');

if(verificaLogado) {
    let commentsShow = ` 
    <div class="container">
    <div class="justify-content-center">
    <form action="" id="formComments">
        <h6>Faça seu comentário</h6>
        <div>
            <textarea class="form-control pl-3 shadow mb-0 w-50" placeholder="Escreva seu comentário.. (Máximo de 75 caracteres)"
                id="comentariosTrilha" rows="3" maxlength="75" required></textarea>
            <button class="btn btn-danger" onclick="enviar()">Enviar</button>
        </div>
        <!-- <p style="font-size: 0.1rem; color: gray; width:70%;" class="p-3" id="usuariocoment"><b id="nomeusuario"></b></p> -->
    </form> 
    </div>
    </div>
    `;

    document.getElementById("commentarios").innerHTML = commentsShow;
} else {
    document.getElementById("commentarios").style.display = "none";
}