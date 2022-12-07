const verificaLogado = Object.keys(localStorage).some(key => key == 'CLIENTE');

if(verificaLogado) {
    let commentsShow = ` 
    <form action="" id="formComments">
        <h6>Faça seu comentário</h6>
        <div>
            <textarea class="form-control pl-3 shadow mb-0" placeholder="Escreva seu comentário.."
                id="comentariosTrilha" rows="3" required></textarea>
            <button class="btn btn-danger" onclick="enviar()">Enviar</button>
        </div>
        <!-- <p style="font-size: 0.1rem; color: gray; width:70%;" class="p-3" id="usuariocoment"><b id="nomeusuario"></b></p> -->
    </form> 
    `;

    document.getElementById("commentarios").innerHTML = commentsShow;
} else {
    document.getElementById("commentarios").style.display = "none";
}