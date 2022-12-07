const selectElement = (name) => {
    if (!name) throw new Error('The element name is empty!');

    const element = document.querySelector(name);

    return element;
}

const selectAllElements = (name) => {
    if (!name) throw new Error('The element name is empty!');

    const elements = document.querySelectorAll(name);

    return elements;
}

let trilhaItemHTML = (trilhaNome, trilhaDescricao, trilhaAltimetria, trilhaDuracao) => {
    return `
    <div class="trilha-item">
    <div class="icon-trilha-item">
        <a href="https://www.pucminas.br/main/Paginas/default.aspx"><button
                class="pesquisar-input-explorar">Saiba Mais</button></a>
        <a href="javascript:;" class="open-modal"><img src="images/icons/compartilhar.png" alt=""></a>

        <div class="modal">
            <div class="modal-head">
                <h2 class="modal-title">Compartilhar</h2>
                <a href="javascript:;" class="modal-close">
                    <i class="fa-sharp fa-solid fa-xmark"></i>
                </a>
            </div><!-- modal head -->
            <div class="modal-body">
                <h3 class="modal-name">Compartilhe o link:</h3>
                <div class="modal-socials">
                    <div class="modal-column">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.pucminas.br/main/Paginas/default.aspx" target="_blank" class="modal-social is-facebook">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </div><!-- modal do Facebook -->
                    <div class="modal-column">
                        <a href="https://twitter.com/intent/tweet?text=Veja conhecer a trilha Pata da Vaca. Acesse em: https://www.pucminas.br/main/Paginas/default.aspx"
                            target="_blank" class="modal-social is-twitter">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div><!-- modal do Twitter -->
                    <div class="modal-column">
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.pucminas.br/main/Paginas/default.aspx" target="_blank" class="modal-social is-linkedin">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>                                            
                    </div><!-- modal do linkedIn -->
                </div><!-- modal-socials -->
                <h3 class="modal-name">Ou copie o link:</h3>
                <div class="modal-label">
                    <input type="text" class="modal-input" value="https://www.pucminas.br">
                    <button class="btn-copiar" onclick="copiarBtn()">Copiar</button>
                </div>
            </div><!-- modal-body -->
        </div><!-- modal -->
    </div>
    <div class="trilhas-text">
        <h2 class="titulo-trilha">${trilhaNome}</h2>
        <p class="desc-trilha">
            ${trilhaDescricao}    
        </p>
        <button onclick="vejaMais()" class="button-Btn" id="myBtn"><b>Veja Mais</b></button>
    </div>
    <div class="icon-trilha-item">
        <img src="images/icons/Vector.svg" alt="" class="save-trilha"></button>
    </div>
</div>
   `
};

let trailsLocalStorage = localStorage;

const trailFuncs = {

    cadastroDuvidas: () => {
        this.event.preventDefault();
        //ALL INPUTS TOGHETER
        let clearAllInputs = selectAllElements('.form-input');

        let nameInput = selectElement('.setup-form-nome');
        let emailInput = selectElement('.setup-form-email');
        let textareaInput = selectElement('.txtAreaForm');

        if (!nameInput && !sobrenomeInput && !emailInput && !textareaInput) alert('Por favor, preencha todos os campos');

        //NECESSARIO VERIFICACAO SE O ID JA EXISTE

        const duvidaObj = {
            id_duvida: Math.floor(Math.random() * 999999),
            nome: nameInput.value,
            email: emailInput.value,
            duvidaText: textareaInput.value,
            statusDuvidaResposta: false,
            idUserAdminResposta: null,
            responstaDuvida: null
        };

        window.localStorage.setItem(`CM-${emailInput.value}`, JSON.stringify(duvidaObj));

        clearAllInputs.forEach(item => item.value = '');

        return alert('Dúvida enviada com sucesso!');
    },

    buscarTrilha: () => {
        const localTrilha = selectElement('.trilha_local').value.toLowerCase();
        const nivelTrilha = selectElement('.trilha_nivel').value;
        //CONTAINER ONDE VAO SER RETORNADAS TODAS AS TRILHAS
        const trilhasContainer = selectElement('.trilhas_pesquisa');

        this.event.preventDefault();

        trilhasContainer.innerHTML = ' ';

        const titulo = selectElement('.cards-trilhas h1');
        titulo.innerHTML = 'Resultado pesquisa'

        Object.keys(trailsLocalStorage).forEach(storageKey => {
            if (storageKey.split('-')[0] != 'trilha') {
                return 'Isto nao e um cadastro de uma trilha!';
            };

            const trilhasStorage = trailsLocalStorage.getItem(storageKey);

            //RETORNA TODAS AS TRILHAS
            const trilhas = JSON.parse(trilhasStorage);

            // let teste = trilhas.local.toLowerCase();

            if (trilhas.local == localTrilha && trilhas.nivel == nivelTrilha) {
                let trilhaPesquisa = JSON.parse(localStorage.getItem(storageKey));

                let {
                    nome,
                    descricao,
                    local,
                    nivel
                } = trilhaPesquisa;

                let descLength = descricao.length;

                let trilhaItem = `
                <div class="col mb-4 shadow-lg">
                    <div class="card">
                    <img src="../src/images/464.jpg" class="card-img-top d-block w-100">
                    <div class="card-body">
                        <h6 class="card-title"><b>${nome}</b></h6>
                        <p class="card-text">${descricao.slice(descLength / 2)}<span class="dots">...</span><span class="more hide">${descricao.slice(descLength / 2, -1)}</span></p>
                        <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                    </div>
                    </div>
                </div>
                `;


                trilhasContainer.innerHTML += trilhaItem;
            } else {
                let vericador = selectAllElements('#trilhas_pesquisa');

                console.log(vericador.length);


                if (vericador.length >= 1) {
                    return;
                }


                /* trilhasContainer.innerHTML = '<h1>Pesquisa invalida!</h1>';*/
                localStorage.setItem('erro', 'teste');
                return;
            }
        })

        let erro = JSON.parse(localStorage.getItem('erro'));
        if (erro) {
            alert("Pesqusa invalida");
            localStorage.removeItem('erro');
        }
    },


    cadastroTrilha: () => {
        const allInputsCadastro = selectAllElements('.cadastro-trilha-input');

        const trilhaNome = selectElement('#trilha_nome');
        const trilhaLocal = selectElement('.trilha_local');
        const trilhaDescricao = selectElement('#trilha_descricao');
        const trilhaAltimetria = selectElement('#trilha_altimetria');
        const trilhaDuracao = selectElement('#trilha_duracao');
        const dificuldadeTrilha = selectElement('.trilha_nivel');
        const tipoTrilha = selectElement('.trilha_tipo');
        const recomTrilha = selectElement('.trilha_recom');

        this.event.preventDefault();
        console.log(trilhaNome.value)
        if (!trilhaNome.value && !trilhaLocal.value && !trilhaDescricao.value && !trilhaAltimetria.value && !trilhaDuracao.value) {
            return alert("Preencha todos os campos!");
        }

        const trilhaObj = {
            nome: trilhaNome.value,
            local: trilhaLocal.value,
            descricao: trilhaDescricao.value,
            altimetria: trilhaAltimetria.value,
            trilha_duracao: trilhaDuracao.value,
            nivel: dificuldadeTrilha.value,
            tipo: tipoTrilha.value,
            recomendacao: recomTrilha.value,
        };

        localStorage.setItem(`trilha-${trilhaNome.value}`, JSON.stringify(trilhaObj));

        allInputsCadastro.forEach(item => item.value = '');

        return alert('Trilha cadastrada com sucesso!');
    },

    getAllTrails: () => {
        Object.keys(trailsLocalStorage).forEach(storageKey => {
            if (storageKey.split('-')[0] != "trilha") {
                return;
            };

            let allTrailsObj = localStorage.getItem(storageKey);

            let trailObj = JSON.parse(allTrailsObj);

            const {
                nome,
                descricao,
                altimetria
            } = trailObj;

            let processDesc = descricao.split('');

            let trilhaItem = `     
            <div class="col mb-4 shadow-lg">
                <div class="card">
                <img src="images/460.jpg" class="card-img-top d-block w-100">
                <div class="card-body">
                    <h6 class="card-title"><b>${nome}</b></h6>
                    <p class="card-text">${descricao}<span class="dots">...</span><span class="more hide">nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
                        <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                </div>
                </div>
            </div>`;

            return;
        });
    },
    cadastrarUsuario: () => {
        const nomeCompleto = selectElement('#nome_usuario_cadastro');
        const email = selectElement('#email_usuario_cadastro');
        const dataNasc = selectElement('#date');
        const tmpCiclismo = selectElement('.trilha_nivel');
        const senha = selectElement('#senha_usuario_cadastro');
        const verificacaoSenha = selectElement('#senha_usuario_cadastro_verificacao');
        const nomeDisplay = nomeCompleto.value;

        let validacaoLoginUsuario = Object.keys(localStorage).some(key => key == 'CLIENTE');

        // if (!nomeCompleto.value && !email.value && !dataNasc.value && !tmpCiclismo.value && !senha.value && !verificacaoSenha.value) {
        //     return alert("Preencha todos os campos!");
        // }else if(validacaoLoginUsuario){
        //     alert('Ja existe um usuario logado!');
        // }

        const validacaoCadastroUsuario = new Promise((resolve, reject) => {

            const validacaoCredenciais = Object.keys(localStorage).some((key) => {
                if (key.split('-')[0] == 'user') {
                    let usuarios = localStorage.getItem(key);
                
                    let matchEmail = JSON.parse(usuarios).email == email.value;
    
                    return matchEmail;
                }
            });

            if (senha.value != verificacaoSenha.value) {
                reject("As senhas são diferentes!");
            }else if(validacaoCredenciais){
                reject("Email já cadastrado!");
            }else {
                let usuarioObj = {
                    nomeCompleto: nomeCompleto.value,
                    nomeDisplay: nomeDisplay,
                    email: email.value.toLowerCase(),
                    senha: senha.value.toLowerCase(),
                    experiencia: tmpCiclismo.value,
                    dataNascimento: dataNasc.value,
                    trilhasCadastradas: [],
                    trilhasFavoritadas: []
                };
    
                localStorage.setItem(`user-${nomeCompleto.value}`, JSON.stringify(usuarioObj));
    
                resolve("Usuario cadastrado com sucesso!");
            }
        });

        validacaoCadastroUsuario
            .then((m) => {
                alert(m);
                return selectElement('#id00').style.display = 'none';
            })
            .catch((e) => alert(e))
    },
    //ESTRUTURAR LOGIN DO USUARIO
    login: () => {
        const emailUsuario = selectElement('#email_login_usuario').value.toLowerCase();
        const senhaUsuario = selectElement('#senha_login_usuario').value.toLowerCase();

        let validacaoLoginUsuario = Object.keys(localStorage).some(key => key == 'CLIENTE');

        if(validacaoLoginUsuario) {
            alert("Ja existe um usuario logado!");
            window.location.href = 'UserPage.html';
        }else {
            Object.keys(localStorage).forEach((key) => {

                if(key.split('-')[0] != 'user') {
                    return;
                }

             
    
                //JSON DO PERFIL DO USUARIO
                let usuario = localStorage.getItem(key);
    
                //VERIFICAR SE EMAIL E SENHA ESTAO CORRETOS
                let emailMatch = JSON.parse(usuario).email == emailUsuario;
                let senhaMatch = JSON.parse(usuario).senha == senhaUsuario;
    
                if (emailMatch && senhaMatch) {
                    const sessaoCliente = {
                        nomeCompleto: JSON.parse(usuario).nomeCompleto,
                        nomeDisplay: JSON.parse(usuario).nomeDisplay,
                        email: selectElement('#email_login_usuario').value,
                        senha: senhaUsuario,
                        ativo: true,
                        data: new Date()
                    };
    
                    localStorage.setItem('CLIENTE', JSON.stringify(sessaoCliente));
    
                    senhaUsuario.value = '';
                    if(key == 'user-adm') {
                        window.location.href = 'AdminPage.html';
                    }else { 
                        window.location.href = 'UserPage.html';
                    }
                }
            });
        }
     
        //DESABILITA O RECARREGAMENTO DA PAGINA
        this.event.preventDefault();
    },

    logOut: () => {
        localStorage.removeItem('CLIENTE');

        return window.location.href = "HomePage.html";
    },


    //ESTA FUNCAO DEVE ESTAR SENDO CARREGADA EM TODAS AS PAGINAS QUE NECESSITAM VERIFICACAO
    verificarSessaoLogado: () => {
        //PRECISO VERIFICAR SE JA EXISTE ALGUM USUARIO LOGADO'
        const verificacaoUsuarioLogado = Object.keys(localStorage).some(key => key == 'CLIENTE');

        //SE EXISTIR UM USUARIO LOGADO
            // ESGUIR FLUXO DA APLICACAO
        const path = window.location.href.split('/');

        // console.log(verificacaoUsuarioLogado)

        //CASO NAO EXISTA UM USUARIO LOGADO RETORNA USUARIO PARA A HOME PAGE
        if(!verificacaoUsuarioLogado) {
            switch (path[path.length - 1]) {
                case 'AdminPage.html':
                case 'Userloged.html':
                case 'UserPage.html':
                case 'criacaoTrilha.html':
                    alert('NAO EXISTE USUARIO LOGADO');
                    window.location.href = 'HomePage.html';
                    break;
                default:
                    break;
            }
        }
        return;
    }
}


window.onload = () => {
    trailFuncs.getAllTrails();
    // trailFuncs.verificarSessaoLogado();

    if(!localStorage.getItem('user-adm')) {
        localStorage.setItem('user-adm', JSON.stringify({
            email: 'admin@easytrail.com',
            senha: 'admin',
        }));
    }
};

