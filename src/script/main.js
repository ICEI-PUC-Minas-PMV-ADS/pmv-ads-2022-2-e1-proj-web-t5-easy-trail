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
        const localTrilhaInput = selectElement('.trilha_local').value;
        const dificuldadeTrilhaInput = selectElement('.trilha_nivel_pesquisa').value;
        const tipoTrilhaInput = selectElement('.trilha_tipo').value;
        const trilhaRecomendacaoInput = selectElement('.trilha_recomendacao').value;

        //CONTAINER ONDE VAO SER RETORNADAS TODAS AS TRILHAS
        let trilhasContainer = selectElement('.trilhas_pesquisa');
        //DESATIVA O RELOAD DA PAGINA
        this.event.preventDefault();

        trilhasContainer.innerHTML = '';

        let firstHalf = (txt) => {
            let txtLength = txt.length;

            let resultado = txt.slice(0, txtLength / 2);

            return resultado;
        }


        let secondHalf = (txt) => {
            let txtLength = txt.length;

            let resultado = txt.slice(txtLength / 2, -1);

            return resultado;
        };

        switch(localTrilhaInput) {
            case "Goiás":
                trilhasContainer.innerHTML += `<div class="col mb-4 shadow-lg">
                <div class="card">
                <img onclick="location=href='ChapadaVeadeiros.html'" src="../src/images/chapadaVeaderosGO.jpg" class="card-img-top d-block w-100">
                <div class="card-body">
                    <h6 class="card-title"><b>Chapada dos Veadeiros
                    </b></h6>
                    <p class="card-text">${firstHalf('Visitantes do Brasil e de outras partes do mundo vão até Goiás (GO) para ver de perto a fauna, a flora, as cavernas, cânions, cachoeiras e outras riquezas da Chapada dos Veadeiros. Durante o ano inteiro, as belezas naturais do local atraem pessoas interessadas nas suas várias trilhas, como as que levam ao Vale da Lua, ao Cânion 2 e às cachoeiras do Rio Preto, dos Cristais e a dos Cariocas. Requer condicionamento físico, pois tende a ser longa, acidentada e cansativa.')}
                    <span class="dots">...</span><span class="more hide">${secondHalf('Visitantes do Brasil e de outras partes do mundo vão até Goiás (GO) para ver de perto a fauna, a flora, as cavernas, cânions, cachoeiras e outras riquezas da Chapada dos Veadeiros. Durante o ano inteiro, as belezas naturais do local atraem pessoas interessadas nas suas várias trilhas, como as que levam ao Vale da Lua, ao Cânion 2 e às cachoeiras do Rio Preto, dos Cristais e a dos Cariocas. Requer condicionamento físico, pois tende a ser longa, acidentada e cansativa.')}</span></p>
                    <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                   
                </div>
                </div>
                </div>`;
                break;
            case 'São Paulo':
                trilhasContainer.innerHTML += `  <div class="col mb-4 shadow-lg">
                <div class="card">
                <img onclick="location=href='MeiaVoltaIlhaBela.html'" src="../src/images/ilhaBelaSP.jpg" class="card-img-top d-block w-100">
                <div class="card-body">
                    <h6 class="card-title"><b>Meia Volta de Ilha Bela
                    </b></h6>
                    <p class="card-text">${firstHalf('A Ilhabela, no litoral norte de São Paulo, é um destino excelente para os amantes de ciclismo. Logo, se você é daqueles que não renuncia a uma boa aventura, o circuito conhecido como meia volta na Ilhabela é uma ótima opção. A Ilhabela possui uma extensa costa, com lindas praias, cachoeiras e mata preservada. São aproximadamente 40 km de distância, com grau de dificuldade moderado.')}
                    <span class="dots">...</span><span class="more hide">${secondHalf('A Ilhabela, no litoral norte de São Paulo, é um destino excelente para os amantes de ciclismo. Logo, se você é daqueles que não renuncia a uma boa aventura, o circuito conhecido como meia volta na Ilhabela é uma ótima opção. A Ilhabela possui uma extensa costa, com lindas praias, cachoeiras e mata preservada. São aproximadamente 40 km de distância, com grau de dificuldade moderado.')}</span></p>
                    <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                </div>
                </div>
                </div>`;
                break;
            case 'Roraima':
                trilhasContainer.innerHTML += `  <div class="col mb-4 shadow-lg">
                <div class="card">
                <img onclick="location=href='MonteRoraima.html'" src="../src/images/monteRoraimaRO.jpg" class="card-img-top d-block w-100">
                <div class="card-body">
                    <h6 class="card-title"><b>Monte Roraima
                    </b></h6>
                    <p class="card-text">${firstHalf('Todo o planejamento que a trilha requer, torna a aventura não tão fácil, logo menos inacessível e ótima para aqueles que apreciam lugares menos explorados. A pessoa deve ser capaz de desenvolver intensa atividade. É necessária experiência comprovada em trilhas, devendo estar preparado para executar movimentos técnicos, e grande esforço físico.')}
                    <span class="dots">...</span><span class="more hide">${secondHalf('Todo o planejamento que a trilha requer, torna a aventura não tão fácil, logo menos inacessível e ótima para aqueles que apreciam lugares menos explorados. A pessoa deve ser capaz de desenvolver intensa atividade. É necessária experiência comprovada em trilhas, devendo estar preparado para executar movimentos técnicos, e grande esforço físico.')}</span></p>
                    <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                </div>
                </div>
                </div>`;
                break
            case 'Rio de Janeiro':
                    trilhasContainer.innerHTML += `  <div class="col mb-4 shadow-lg">
                    <div class="card">
                    <img onclick="location=href='MorroDoisIrmaos.html'" src="../src/images/morroDoisIrmaosRJ.jpg" class="card-img-top d-block w-100">
                    <div class="card-body">
                        <h6 class="card-title"><b>Morro dois Irmãos
                        </b></h6>
                        <p class="card-text">${firstHalf('Não é preciso ir muito longe da capital para se aventurar pelas trilhas maravilhosas do estado do Rio de Janeiro. E uma das opções mais conhecidas por lá é o Morro Dois Irmãos. Pois, o local proporciona uma vista incrível da cidade maravilhosa, logo, também se destaca entre as melhores trilhas do Brasil. Com duração de duas horas e um grau de dificuldade relativamente fácil. Uma dica importante, é que você vá entre os meses de maio e setembro, quando o calor dá uma amenizada.')}
                        <span class="dots">...</span><span class="more hide">${secondHalf('Não é preciso ir muito longe da capital para se aventurar pelas trilhas maravilhosas do estado do Rio de Janeiro. E uma das opções mais conhecidas por lá é o Morro Dois Irmãos. Pois, o local proporciona uma vista incrível da cidade maravilhosa, logo, também se destaca entre as melhores trilhas do Brasil. Com duração de duas horas e um grau de dificuldade relativamente fácil. Uma dica importante, é que você vá entre os meses de maio e setembro, quando o calor dá uma amenizada.')}</span></p>
                        <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                    </div>
                    </div>
                    </div>`;
                break;
            case 'Maranhão':
                    trilhasContainer.innerHTML += `  <div class="col mb-4 shadow-lg">
                    <div class="card">
                    <img onclick="location=href='TravessiaLencois.html'" src="../src/images/lencoisMA.jpg" class="card-img-top d-block w-100">
                    <div class="card-body">
                        <h6 class="card-title"><b>Travessia Lençois
                        </b></h6>
                        <p class="card-text">${firstHalf('Os Lençóis Maranhenses, no estado do Maranhão, é uma região já muito bem conhecida como um dos destinos brasileiros mais exuberantes e ricas em paisagens naturais, portanto, a travessia que percorre esse parque nacional é uma das melhores e mais incríveis maneiras de conhecer tudo que esse lugar tem para oferecer. É de nível moderado, as belezas ainda intocadas e os cenários paradisíacos dos Lençóis fazem valer todo e qualquer esforço físico, e você terá a oportunidade de conhecer algumas de suas principais atrações, como as lagoas Bonita e da Gaivota, as extensas e altas dunas, o Rio Preguiça, o povoado de Atins, e conhecer de perto a cultura local.')}
                        <span class="dots">...</span><span class="more hide">${secondHalf('Os Lençóis Maranhenses, no estado do Maranhão, é uma região já muito bem conhecida como um dos destinos brasileiros mais exuberantes e ricas em paisagens naturais, portanto, a travessia que percorre esse parque nacional é uma das melhores e mais incríveis maneiras de conhecer tudo que esse lugar tem para oferecer. É de nível moderado, as belezas ainda intocadas e os cenários paradisíacos dos Lençóis fazem valer todo e qualquer esforço físico, e você terá a oportunidade de conhecer algumas de suas principais atrações, como as lagoas Bonita e da Gaivota, as extensas e altas dunas, o Rio Preguiça, o povoado de Atins, e conhecer de perto a cultura local.')}</span></p>
                        <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                    </div>
                    </div>
                    </div>`;
                break;
            case 'Santa Catarina':
                    trilhasContainer.innerHTML += `  <div class="col mb-4 shadow-lg">
                    <div class="card">
                    <img onclick="location=href='TrilhadoBoi.html'" src="../src/images/trilhadoBoiSC.jpg" class="card-img-top d-block w-100">
                    <div class="card-body">
                        <h6 class="card-title"><b>Trilha do Boi
                        </b></h6>
                        <p class="card-text">${firstHalf('Aparados da Serra, ou Parque Nacional de Aparados da Serra, tem uma localização geográfica interessante – está localizado na fronteira natural entre Rio Grande do Sul e Santa Catarina e é o limite vertical da Serra Geral (formação rochosa que abrange o Brasil, Uruguai e Argentina) – e, por isso, abriga paisagens naturais impressionantes, compostas por imponentes desfiladeiros e pela maior quantidade de vertentes de águas cristalinas do país. A trilha do Rio do Boi passa por todos esses encantos, onde é preciso atenção, por que é feita entre pedras no interior de um famoso cânion dessa região (o Cânion Itaimbezinho) e ao final, você poderá observar de perto duas belíssimas cachoeiras, a das Andorinhas e a Véu da Noiva.')}
                        <span class="dots">...</span><span class="more hide">${secondHalf('Aparados da Serra, ou Parque Nacional de Aparados da Serra, tem uma localização geográfica interessante – está localizado na fronteira natural entre Rio Grande do Sul e Santa Catarina e é o limite vertical da Serra Geral (formação rochosa que abrange o Brasil, Uruguai e Argentina) – e, por isso, abriga paisagens naturais impressionantes, compostas por imponentes desfiladeiros e pela maior quantidade de vertentes de águas cristalinas do país. A trilha do Rio do Boi passa por todos esses encantos, onde é preciso atenção, por que é feita entre pedras no interior de um famoso cânion dessa região (o Cânion Itaimbezinho) e ao final, você poderá observar de perto duas belíssimas cachoeiras, a das Andorinhas e a Véu da Noiva.')}</span></p>
                        <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                    </div>
                    </div>
                    </div>`;
                break;
            case 'Minas Gerais':
                    trilhasContainer.innerHTML += `  <div class="col mb-4 shadow-lg">
                    <div class="card">
                    <img onclick="location=href='TrilhadoOuro.html'" src="../src/images/trilhadoOuroMG.jpg" class="card-img-top d-block w-100">
                    <div class="card-body">
                        <h6 class="card-title"><b>Trilha do Ouro
                        </b></h6>
                        <p class="card-text">${firstHalf('A Trilha do Ouro é um antigo caminho colonial do século XVII construído por índios para escoar ouro que vinha de Minas Gerais; atualmente, é uma travessia cênica e famoso atrativo cheio de história e paisagens naturais. A trilha, que percorre a Serra da Bocaina de ponta a ponta em um percurso de cinquenta quilômetros, tem um grau de dificuldade de moderado. Mas fique tranquilo, todo seu esforço físico é muito recompensado com belos lugares históricos, como as fazendas centenárias e ruínas de um antigo engenho de cana-de-açúcar, e as mais lindas cachoeiras da região, como a Santo Izidro, a dos Veados e a das Posses.')}
                        <span class="dots">...</span><span class="more hide">${secondHalf('A Trilha do Ouro é um antigo caminho colonial do século XVII construído por índios para escoar ouro que vinha de Minas Gerais; atualmente, é uma travessia cênica e famoso atrativo cheio de história e paisagens naturais. A trilha, que percorre a Serra da Bocaina de ponta a ponta em um percurso de cinquenta quilômetros, tem um grau de dificuldade de moderado. Mas fique tranquilo, todo seu esforço físico é muito recompensado com belos lugares históricos, como as fazendas centenárias e ruínas de um antigo engenho de cana-de-açúcar, e as mais lindas cachoeiras da região, como a Santo Izidro, a dos Veados e a das Posses.')}</span></p>
                        <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                    </div>
                    </div>
                    </div>`;
                break;
            case 'Mato Grosso do Sul':
                    trilhasContainer.innerHTML += `  <div class="col mb-4 shadow-lg">
                    <div class="card">
                    <img onclick="location=href='TrilhadoPantanal.html'" src="../src/images/trilhaPantanalMS.jpg" class="card-img-top d-block w-100">
                    <div class="card-body">
                        <h6 class="card-title"><b>Trilha do Pantanal
                        </b></h6>
                        <p class="card-text">${firstHalf('Uma novidade da Nascente Azul, a trilha foi desenvolvida em uma área de vegetação parcialmente inundada. Daí seu nome, Trilha do Pantanal. Nela, você vai poder observar uma variedade impressionante de aves e demais animais que permeiam o local. Pode ser apreciado sem obrigatoriedade de um elevado condicionamento física, não requer experiência anterior.')}
                        <span class="dots">...</span><span class="more hide">${secondHalf('Uma novidade da Nascente Azul, a trilha foi desenvolvida em uma área de vegetação parcialmente inundada. Daí seu nome, Trilha do Pantanal. Nela, você vai poder observar uma variedade impressionante de aves e demais animais que permeiam o local. Pode ser apreciado sem obrigatoriedade de um elevado condicionamento física, não requer experiência anterior.')}</span></p>
                        <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                    </div>
                    </div>
                    </div>`;
                break;
            case 'Bahia':
                    trilhasContainer.innerHTML += `  <div class="col mb-4 shadow-lg">
                    <div class="card">
                    <img onclick="location=href='ValedoPati.html'" src="../src/images/valedopatiBA.jpg" class="card-img-top d-block w-100">
                    <div class="card-body">
                        <h6 class="card-title"><b>Vale do Pati
                        </b></h6>
                        <p class="card-text">${firstHalf('A trilha mais linda do Brasil e da América do Sul, percorre uma área do exuberante Parque Nacional da Chapada Diamantina, no estado da Bahia, passando por muitas de suas mais incríveis paisagens, que incluem vales, montanhas, cachoeiras e piscinas naturais, vegetação de mata atlântica, entre tantas outras belezas que existem nessa região. Apesar de ser um percurso um tanto difícil e cansativo devido à sua extensão, que é de setenta quilômetros. É uma aventura extremamente recompensadora e você ainda terá a oportunidade de ver cenários de tirar o fôlego como o Mirante do Pati e as Águas Claras, o Cachoeirão e a Cachoeira do Funil, e a Cachoeira do Lajeado e o Poço Azul.')}
                        <span class="dots">...</span><span class="more hide">${secondHalf('A trilha mais linda do Brasil e da América do Sul, percorre uma área do exuberante Parque Nacional da Chapada Diamantina, no estado da Bahia, passando por muitas de suas mais incríveis paisagens, que incluem vales, montanhas, cachoeiras e piscinas naturais, vegetação de mata atlântica, entre tantas outras belezas que existem nessa região. Apesar de ser um percurso um tanto difícil e cansativo devido à sua extensão, que é de setenta quilômetros. É uma aventura extremamente recompensadora e você ainda terá a oportunidade de ver cenários de tirar o fôlego como o Mirante do Pati e as Águas Claras, o Cachoeirão e a Cachoeira do Funil, e a Cachoeira do Lajeado e o Poço Azul.')}</span></p>
                        <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                    </div>
                    </div>
                    </div>`;
                break;
        }

        let resultadoTrilhas =  new Promise((resolve, reject) => {
            Object.keys(localStorage).forEach((key) => {
                if(key.split('-')[0] != 'trilha') {
                    return;
                }

                //TODAS AS TRILHAS VINDAS DO LOCALSTORAGE
                let trilhas = JSON.parse(localStorage.getItem(key));

                let recomendacaoMatch;

                if(trilhaRecomendacaoInput != 'Individual ou Grupo') {
                    recomendacaoMatch = trilhas.recomendacao == trilhaRecomendacaoInput;
                }else {
                    recomendacaoMatch = trilhas.recomendacao == 'Individual' || trilhas.recomendacao == 'Grupo' || trilhas.recomendacao == 'Individual ou Grupo' ? true:false;
                }
                
                let localMatch = trilhas.local == localTrilhaInput;
                let dificuldadeMatch = trilhas.nivel == dificuldadeTrilhaInput;
                let tipoMatch = trilhas.tipo == tipoTrilhaInput;

                if(localMatch && dificuldadeMatch && tipoMatch && recomendacaoMatch){
                        //ALTERA O TITULO DO CONTEINER APOS A PESQUISA SER REALIZADA
                        const titulo = selectElement('.cards-trilhas h1');
                        titulo.innerHTML = 'Resultado pesquisa';
    
                        
    
                        let trilhaItem = `
                        <div class="col mb-4 shadow-lg">
                            <div class="card">
                            <img src="../src/images/464.jpg" class="card-img-top d-block w-100">
                            <div class="card-body">
                                <h6 class="card-title"><b>${trilhas.nome}</b></h6>
                                <p class="card-text">${trilhas.descricao.slice(0, trilhas.descricao.length / 2)}<span class="dots">...</span><span class="more hide">${trilhas.descricao.slice(trilhas.descricao.length / 2, -1)}</span></p>
                                <button class="vejamais" onclick="readMore(this)"><b>Veja Mais</b></button>
                            </div>
                            </div>
                        </div>
                        `;
      
                        trilhasContainer.innerHTML += trilhaItem;
                }
            });

            
            let cn = document.querySelector('.card');
            if(trilhasContainer.contains(cn)) {
                return;
            }else{
                reject('Nenhuma trilha foi encontrada!');
            }
        })
        .then()
        .catch(e => alert(e));
    },


    cadastroTrilha: () => {
        const allInputsCadastro = selectAllElements('.cadastro-trilha-input');

        const trilhaNome = selectElement('#trilha_nome');
        const trilhaLocal = selectElement('.trilha_local');
        const trilhaDescricao = selectElement('#trilha_descricao');
        const trilhaAltimetria = selectElement('#trilha_altimetria');
        const trilhaDuracao = selectElement('#trilha_duracao');
        const dificuldadeTrilha = selectElement('.trilha_dificuldade');
        const tipoTrilha = selectElement('.trilha_tipo');
        const recomTrilha = selectElement('.trilha_recom');

        this.event.preventDefault();

        if (!trilhaNome.value && !trilhaLocal.value && !trilhaDescricao.value && !trilhaAltimetria.value && !trilhaDuracao.value && !dificuldadeTrilha.value && !tipoTrilha.value && !recomTrilha.value) {
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


let tc = JSON.parse(localStorage.getItem('trilhasCadastradas'));

console.log(tc);