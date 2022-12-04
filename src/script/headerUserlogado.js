let navHeaderLogado = `


<div class="container-fluid">
    <img onclick="location=href='HomePage.html'" src="images/logoEasy.png" width="120" alt="100">      
    <div class="row align-items-center">
        <div class="header-list col">
            <img src="images/icons/notificacao.png" width="30" alt="icone notifcação">
        </div>
        <div class="header-list col">
            <img src="images/icons/user.png" width="30" style="cursor: pointer;" onclick="location=href='UserPage.html'" alt="icone usuário">
        </div>
        <div class="header-list col">
            <img src="images/icons/logout.png" width="30" style="cursor: pointer;" alt="icone sair" onclick="trailFuncs.logOut()">
        </div>
    </div>
</div> `

document.getElementById("logado").innerHTML = navHeaderLogado;

