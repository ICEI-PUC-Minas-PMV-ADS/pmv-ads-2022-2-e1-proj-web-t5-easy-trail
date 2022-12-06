let adminFuncionalities = {
    getAllTrails: () => {

        const trilhaContainer = document.querySelector("#trilhas_cadastradas");

        Object.keys(localStorage).forEach(storageKey => {
            if(storageKey.split('-')[0] != "trilha") {
                return;
            };
        
            let allTrailsObj = localStorage.getItem(storageKey);
        
            let trailObj = JSON.parse(allTrailsObj);

            trilhaContainer.innerHTML += `
            <hr>
            <div class="trilha_cadastrada_item">
                <p><strong>Nome da Trilha:</strong> ${trailObj.nome}</p>
                <p><strong>Estado:</strong> ${trailObj.local}</p>
                <p><strong>Descrição:</strong> ${trailObj.descricao}</p>
                <p><strong>Altimetria:</strong> ${trailObj.altimetria}</p>
                <p><strong>Duração Estimada:</strong> ${trailObj.trilha_duracao}</p>
                <p><strong>Dificuldade:</strong> ${trailObj.nivel}</p>
                <p><strong>Tipo de Trilha:</strong> ${trailObj.tipo}</p>
                <p><strong>Recomendação:</strong> ${trailObj.recomendacao}</p>

                <button data-nome="${trailObj.nome}" onClick="adminFuncionalities.excluirUser(this)">Excluir</button>
            </div>`;

            return trailObj;
        });
    },
    getAllSaq: () => {
        const perguntasContainer = document.querySelector('#perguntas_cadastradas');

        console.log(perguntasContainer);
        Object.keys(localStorage).forEach(storageKey => {
            if(storageKey.split('-')[0] != "CM") {
                return;
            };
        
            let allQuestions = localStorage.getItem(storageKey);
        
            let questionsObj = JSON.parse(allQuestions);

            const {
                email,
                duvidaText,
                idUserAdminResposta,
                id_duvida,
                nome,
                statusDuvidaResposta
            } = questionsObj;

            let questionElement = `
            <div class="duvida_element">   
                <span>Id Duvida: ${id_duvida}</span>

                <span>Nome: ${nome}</span>

                <span>Email: ${email}</span>

                <span>Duvida: ${duvidaText}</span>

                <span>Status duvida: ${statusDuvidaResposta}</span>

                <span>Id do admin que respondeu a duvida: ${idUserAdminResposta}</span>

                <span>Selecionar: <input type="checkbox" id="horns" name="horns" value="${id_duvida}"></span>
            </div>`;

            perguntasContainer.innerHTML += questionElement;

            return;
        });
    },
    getAllUsers: () => {
        const usersContainer = document.querySelector('#usuarios_cadastrados');

        Object.keys(localStorage).forEach(key => {
            let mainKey = key.split('-');

            if(mainKey[0] != 'user') {
                return false;
            }

            let userResponse = JSON.parse(localStorage.getItem(key));

            let {
                email, 
                nomeCompleto,
                dataNascimento,
                experiencia,
                trilhasCadastradas,
            } = userResponse;
    
            
            let userHtmlItem = `
            <hr>
            <div class="userHtmlItem">
                <span><b>Nome:</b> </span> <span> ${nomeCompleto}</span><br>
                <span><b>Email:</b> </span> <span> ${email}</span><br>
                <span><b>Data Nascimento</b> </span> <span> ${dataNascimento}</span><br>
                <span><b>Tempo de Ciclismo:</b> </span> <span> ${experiencia} ano(s)</span><br>
                <button data-email="${email}" onClick="adminFuncionalities.excluirUser(this)">Excluir</button>
            </div>
            `;

            usersContainer.innerHTML += userHtmlItem;
            return;
        })
    },

    //FUNCAO PARA RESPONDER UMA QUESTAO ESPECIFICA
    answerSaq: () => {
        let inputAnswer = document.querySelector("#resposta");
        //saqId => SERA O VALOR SELECIONADO DENTRO DO CHECKBOX
        let saqId;

        Object.keys(localStorage).forEach(storageKey => {
            if(storageKey.split('-')[0] != "CM") {
                return;
            };
        
            let allQuestions = localStorage.getItem(storageKey);
        
            let questionsObj = JSON.parse(allQuestions);

            const {
                email,
                duvidaText,
                idUserAdminResposta,
                id_duvida,
                nome,
                statusDuvidaResposta
            } = questionsObj;
            
            // if(id_duvida != saqId) {
            //     return "Duvida inexistente!";
            // }

            // ADICIONAR TODAS AS DUVIDAS DENTRO DO HTML

            let questionElement = `
                <div class="questionElement">   
                    <span>Id Duvida:</span>
                    <p>${id_duvida}</p>
                    <span>Nome:</span>
                    <p>${nome}</p>
                    <span>Email:</span>
                    <p>${email}</p>
                    <span>Duvida:</span>
                    <p>${duvidaText}</p>
                    <span>Status duvida:</span>
                    <p>${statusDuvidaResposta}</p>
                    <span>Id do admin que respondeu a duvida:</span>
                    <p>${idUserAdminResposta}</p>
                </div>
            `;

            // NECESSARIO ATUALIZAR OBJ DA DUVIDA DENTRO DO LOCAL STORAGE
            localStorage.setItem(storageKey, JSON.stringify({
                email,
                duvidaText,
                idUserAdminResposta,
                id_duvida,
                nome,
                statusDuvidaResposta: true,
                respostaDuvida: inputAnswer.value
            }));
        });
    },
    excluirUser: (e) => {
        let {email, nome} = e.dataset;

            Object.keys(localStorage).forEach((key) => {
                if(email) {
                    if(key.split("-")[0] != 'user'){
                        return;
                    }
    
                   let usuarios = JSON.parse(localStorage.getItem(key));
    
                   let match = usuarios.email == email;
    
                   if(match) {
                    localStorage.removeItem(key);
                    selectElement('#usuarios_cadastrados').innerHTML = '';
    
                    adminFuncionalities.getAllUsers();
                   }
                }else if(nome) {
                    if(key.split("-")[0] != 'trilha'){
                        return;
                    }
    
                   let trilhas = JSON.parse(localStorage.getItem(key));
    
                   let match = trilhas.nome == nome;
    
                   if(match) {
                    localStorage.removeItem(key);
                    document.querySelector('#trilhas_cadastradas').innerHTML = '';
    
                    adminFuncionalities.getAllTrails();
                   }
                }
               
            })
    }
};


//FAZ TODA A RENDERIZACAO APOS O CARREGAMENTO DO BODY
window.onload =  () => {
    adminFuncionalities.getAllTrails();
    adminFuncionalities.getAllUsers();

    if(localStorage.getItem('CLIENTE')) {

        let userLogado = JSON.parse(localStorage.getItem('CLIENTE'));

        if(userLogado.email != 'admin@easytrail.com') {
            window.location.href = 'HomePage.html';
            alert('Acesso negado!');
        };

    }else {
        window.location.href = 'HomePage.html';
        alert('Acesso negado!');
    }
};



// Admin Config

const listaUsuarios = document.getElementById("listaUsuarios");
const listaTrilhas = document.getElementById("listaTrilhas");
let clicado = false;
listaUsuarios.style.display = "none";

function showAdmin(){
    if(clicado) {
        listaTrilhas.style.display= "block";
        listaUsuarios.style.display= "none";
        clicado = false;
    } else {
        listaTrilhas.style.display= "none";
        listaUsuarios.style.display= "block";
        clicado = true;
    }
}
