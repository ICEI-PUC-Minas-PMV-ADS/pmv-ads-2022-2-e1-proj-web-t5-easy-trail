const elementSelect = (name) => {
    if(!name) throw new Error('The element name is empty!');

    const element = document.querySelector(name);

    return element;
}

let adminFuncionalities = {
    getAllTrails: () => {

        const trilhaContainer = selectElement("#trilhas_cadastradas");

        Object.keys(localStorage).forEach(storageKey => {
            if(storageKey.split('-')[0] != "trilha") {
                return;
            };
        
            let allTrailsObj = localStorage.getItem(storageKey);
        
            let trailObj = JSON.parse(allTrailsObj);

            trilhaContainer.innerHTML += `
            <div class="trilha_cadastrada_item">
                <p><strong>Nome:</strong>${trailObj.nome}</p>
                <p><strong>Descricao:</strong>${trailObj.descricao}</p>
                <p><strong>Local:</strong>${trailObj.local}</p>
                <p><strong>Altimetria:</strong>${trailObj.altimetria}</p>
            </div>`;

            return trailObj;
        });
    },
    getAllSaq: () => {
        const perguntasContainer = selectElement('#perguntas_cadastradas');

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
        const usersContainer = selectElement('#usuarios_cadastrados');

        Object.keys(localStorage).forEach(key => {
            let mainKey = key.split('-');

            if(mainKey[0] != 'user') {
                return false;
            }

            let userResponse = JSON.parse(localStorage.getItem(key));

            let {
                email, 
                nomeCompleto,
                trilhasCadastradas
            } = userResponse;
    
            
            let userHtmlItem = `
            <div class="userHtmlItem">
                <span>Nome: </span> <span>${nomeCompleto}</span><br>
                <span>Email: </span> <span>${email}</span><br>
                <span>Trilhas: </span> <span>${trilhasCadastradas}</span>
            </div>
            `;

            usersContainer.innerHTML += userHtmlItem;
            return;
        })
    },

    //FUNCAO PARA RESPONDER UMA QUESTAO ESPECIFICA
    answerSaq: () => {
        let inputAnswer = elementSelect("#resposta");
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
    }
};

//FAZ TODA A RENDERIZACAO APOS O CARREGAMENTO DO BODY
selectElement('body').onload =  () => {
    //CARREGA TODAS AS TRILHAS
    adminFuncionalities.getAllTrails();
    //CARREGA TODAS AS QUESTOES
    // adminFuncionalities.getAllSaq();
    //CARREGA TODOS OS USERS
    adminFuncionalities.getAllUsers();
};

