const selectElement = (name) => {
    if(!name) throw new Error('The element name is empty!');

    const element = document.querySelector(name);

    return element;
}

const selectAllElements = (name) => {
    if(!name) throw new Error('The element name is empty!');

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
 
        if(!nameInput && !sobrenomeInput && !emailInput && !textareaInput) alert('Por favor, preencha todos os campos');
        
        //NECESSARIO VERIFICACAO SE O ID JA EXISTE

        const duvidaObj = {
            id_duvida: Math.floor(Math.random() * 999999),
            nome: nameInput.value,
            email:  emailInput.value,
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
        //FAZER PARTE DE VERIFICAO
        //TODOS INPUTS
        const localTrilha = selectElement('.trilha_local');
        const nivelTrilha = selectElement('.trilha_nivel');

        this.event.preventDefault();

        Object.keys(trailsLocalStorage).forEach(storageKey => {
            if(storageKey.split('-')[0] != 'trilha'){
                return 'Isto nao e um cadastro de uma trilha!';
            };

            const trilhasStorage = trailsLocalStorage.getItem(storageKey);

            const trilhas = JSON.parse(trilhasStorage);

            const {
                local,
                nivel
            } = trilhas;

            //CASO A TRILHA NAO EXISTA DEVE SER RETORNADO UM ERRO NO HTML

            //REVISAR SE REALMENTE E NECESSARIO FAZER A PESQUISA COM A DATA
            if(local == localTrilha.value && nivel == nivelTrilha.value){
                //NECESSARIO FAZER COM QUE SEJA RENDERIZADO NA PAGINA DE RESPOSTA DA PESQUISA.
                console.log(trilhas);
            };

            return;
        })
    },

    maisTrilhas: () => {
        let trilhasBox = selectAllElements('.trilhas-box-geral');

        let trilhasBoxItems = selectAllElements('.trilhas-box-items');

        if(trilhasBoxItems.length >= 2) {
            return;
        };

        let content = `<div class="trilhas-box-items">
        <div class="trilha-item">
            <div class="icon-trilha-item">
                <a href="https://www.pucminas.br/main/Paginas/default.aspx"><button class="pesquisar-input-explorar">Saiba Mais</button></a>
                <button onclick="compartilhaBotao()" class="botoes-outline"><img src="images/icons/compartilhar.png" alt="" class="comp-trilha"></button>
            </div>
            <div class="trilhas-text">
                <h2 class="titulo-trilha">Pata da Vaca</h2>
                <p class="desc-trilha">
                    Saída da antiga estação ferroviária, bairro São Luiz, Fazenda São José, Sapucaí novo e Sapucaí velho, Eleutério, Barão Ataliba Nogueira, Fazenda Malheiros, Fazenda da Mata, Fazenda Bom Café e Chácara Primavera, antigo Sítio Floresta. Os quase 65 km de estradas ajudam a contar a história recente de nosso país quando tropas federalistas e paulistas travaram o maior combate armado da história nacional.
                </p>
            </div>
            <div class="icon-trilha-item">
                <button onclick="salvarTrilha()" class="botoes-outline"><img src="images/icons/Vector.svg" alt="" class="save-trilha"></button>
            </div>
        </div>
        <div class="trilha-item">
            <div class="icon-trilha-item">
                <a href="https://www.pucminas.br/main/Paginas/default.aspx"><button class="pesquisar-input-explorar">Saiba Mais</button></a>
                <img src="images/icons/compartilhar.png" alt="" class="comp-trilha">
            </div>
            <div class="trilhas-text">
                <h2 class="titulo-trilha">Laranjeiras</h2>
                <p class="desc-trilha">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae pariatur beatae minima, adipisci laudantium obcaecati fugit culpa impedit ut est voluptatibus dolorum modi sint soluta aliquid quaerat accusantium nostrum!
                </p>
            </div>
            <div class="icon-trilha-item">
                <img src="images/icons/Vector.svg" alt="" class="save-trilha">
            </div>
        </div>
        <div class="trilha-item">
            <div class="icon-trilha-item">
                <a href="https://www.pucminas.br/main/Paginas/default.aspx"><button class="pesquisar-input-explorar">Saiba Mais</button></a>
                <img src="images/icons/compartilhar.png" alt="" class="comp-trilha">
            </div>
        
            
            <div class="trilhas-text">
                <h2 class="titulo-trilha">Mirante das Goiabeiras</h2>
                <p class="desc-trilha">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae pariatur beatae minima, adipisci laudantium obcaecati fugit culpa impedit ut est voluptatibus dolorum modi sint soluta aliquid quaerat accusantium nostrum!
                </p>
            </div>
            <div class="icon-trilha-item">
                <img src="images/icons/Vector.svg" alt="" class="save-trilha">
            </div>
        </div>`;
        
        trilhasBox[0].innerHTML += content;
        
        return;
    },

    cadastroTrilha: () => {
        const allInputsCadastro = selectAllElements('.cadastro-trilha-input');

        const trilhaNome = selectElement('#trilha_nome');
        const trilhaLocal = selectElement('#trilha_local');
        const trilhaDescricao = selectElement('#trilha_descricao');
        const trilhaAltimetria = selectElement('#trilha_altimetria');
        const trilhaDuracao = selectElement('#trilha_duracao');
        const trilhaNivel = selectElement('.trilha_nivel');

        this.event.preventDefault();

        if(!trilhaNome.value && !trilhaLocal.value && !trilhaDescricao.value && !trilhaAltimetria.value && !trilhaDuracao.value ) {
            return alert("Preencha todos os campos!");
        }

        const trilhaObj = {
            nome: trilhaNome.value,
            local: trilhaLocal.value,
            descricao: trilhaDescricao.value,
            altimetria: trilhaAltimetria.value,
            trilha_duracao: trilhaDuracao.value,
            nivel: trilhaNivel.value,
        };

        localStorage.setItem(`trilha-${trilhaNome.value}`, JSON.stringify(trilhaObj));

        allInputsCadastro.forEach(item => item.value = '');

        return alert('Trilha cadastrada com sucesso!');
    },

    getAllTrails: () => {
        Object.keys(trailsLocalStorage).forEach(storageKey => {
            if(storageKey.split('-')[0] != "trilha") {
                return;
            };
        
            let allTrailsObj = localStorage.getItem(storageKey);
            
            let trailObj = JSON.parse(allTrailsObj);

            const {

            } = trailObj;
        
            let trilhaItem = `     
            <div class="col mb-4 shadow-lg">
                <div class="card">
                <img src="images/460.jpg" class="card-img-top d-block w-100">
                <div class="card-body">
                    <h6 class="card-title"><b>Laranjeiras</b></h6>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
                    dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis Dolor. Maecenas nisl est, ultrices<span class="dots">...</span><span class="more hide">nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
                        <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                </div>
                </div>
            </div>`;
            
            return;
        });
    },
    cadastrarUsuario: () => {
        let nomeCompleto = selectElement('#nome_usuario_cadastro');
        let email = selectElement('#email_usuario_cadastro');
        // NECESSARIO ENCRIPTAR A SENHA DO USUARIO ANTES DE SALVAR
        let senha = selectElement('#senha_usuario_cadastro');
        let verificacaoSenha = selectElement('#senha_usuario_cadastro_verificacao');
        
        // NECESSARIO CRIAR UM TOKEN/ID PARA IDENTIFICAR CADA USUARIO COOMO ADMIN OU USER NORMAL 
        let token;

        Object.keys(localStorage).forEach(key => {
            if(key.split('-')[0] != 'user') {
                // NECESSARIO VERIFICAR SE EXISTE ALGUMA SESSAO EXISTENTE
                if(key == 'CLIENTE') {
                    alert("Ja existe um usuario logado");
                }
                return;
            }

            let usuarios = localStorage.getItem(key);


            let matchEmail = JSON.parse(usuarios).email == email.value;

            if(matchEmail) {
                alert("Credenciais envalidas.");
            }
            
        });

        //VERIFICACAO SE AS DUAS SENHAS SAO IGUAIS
        if(senha.value != verificacaoSenha.value) {
            return "As senha nao sao iguais.";
        }

        let usuarioObj = {
            nomeCompleto: nomeCompleto.value,
            email: email.value,
            senha: senha.value,
            trilhasCadastradas: []
        };

        localStorage.setItem(`user-${nomeCompleto.value}`, JSON.stringify(usuarioObj));

        alert("Usuario cadastrado com sucesso!");
    },

    //ESTRUTURAR LOGIN DO USUARIO
    login: () => {
        const emailUsuario = selectElement('#email_login_usuario');
        const senhaUsuario = selectElement('#senha_login_usuario');

        Object.keys(localStorage).forEach(key => {
            if(key.split('-')[0] != 'user') {
                // NECESSARIO VERIFICAR SE EXISTE ALGUMA SESSAO EXISTENTE
                if(key == 'CLIENTE') {
                    alert("Ja existe um usuario logado");
                }
                return;
            }

            //JSON DO PERFIL DO USUARIO
            let usuario = localStorage.getItem(key);

            //VERIFICAR SE EMAIL E SENHA ESTAO CORRETOS
            let emailMatch = JSON.parse(usuario).email === emailUsuario.value;
            let senhaMatch = JSON.parse(usuario).senha === senhaUsuario.value;

            if(emailMatch && senhaMatch) {
                const sessaoCliente = {
                    email: emailUsuario,
                    ativo: true,
                    data: new Date()
                };
        
                //SALVAR SESSAO DO USUARIO
                localStorage.setItem('CLIENTE', JSON.stringify(sessaoCliente));

                window.location.href = "file:///home/oliveira/Documents/code/newLayout/pmv-ads-2022-2-e1-proj-web-t5-easy-trail/src/UsuarioLogado.html"
            }else {
                return false;
            }
        })

        //DESABILITA O RECARREGAMENTO DA PAGINA
        this.event.preventDefault();
    },


    // FUNCOES DE GERAIS
    verificarSessaoLogado: () => {
        const sessaoTeste = Object.keys(localStorage).forEach(key => {
            const teste = key.split('-')[0];

            // if(teste == 'user' || teste == 'CM' || teste == 'trilha'){
            //     return;
            // }else if(key == 'CLIENTE') {
            //     console.log(key);

            //     return window.location.href = "file:///home/oliveira/Documents/code/newLayout/pmv-ads-2022-2-e1-proj-web-t5-easy-trail/src/UsuarioLogado.html";
            // }else {
            //     console.log('TERCEIRO => ', key);

            //     return window.location.href = "file:///home/oliveira/Documents/code/newLayout/pmv-ads-2022-2-e1-proj-web-t5-easy-trail/src/HomePage.html";
            // }
        });
    }
}

//CARREGA TODAS AS TRILHAS ASSIM QUE A PAGINA ACABA DE CARREGAR
let body = selectElement('body');
body.onload =  () => {
    trailFuncs.getAllTrails();
};

window.onload = () => {
    trailFuncs.verificarSessaoLogado();
};
  