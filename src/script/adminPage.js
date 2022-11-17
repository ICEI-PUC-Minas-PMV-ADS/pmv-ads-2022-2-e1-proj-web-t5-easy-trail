const elementSelect = (name) => {
    if(!name) throw new Error('The element name is empty!');

    const element = document.querySelector(name);

    return element;
}
//BASE OBJECT
    // nome
    // local
    //descricao
    // altimetria
    //trilha_duracao

let adminFuncionalities = {
    getAllTrails: () => {
        Object.keys(localStorage).forEach(storageKey => {
            if(storageKey.split('-')[0] != "trilha") {
                return;
            };
        
            let allTrailsObj = localStorage.getItem(storageKey);
        
            let trailObj = JSON.parse(allTrailsObj);
            
            return trailObj;
        });
    },
    getAllSaq: () => {
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

            // ADICIONAR TODAS AS DUVIDAS DENTRO DO HTML

            let questionElement = `
                <div>   
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
                    <input type="checkbox" id="horns" name="horns" idPergunta="${id_duvida}">
                </div>
            `;

            return;
        });
    },
    getAllUsers: () => {
        
    },
    answerSaq: () => {
        let inputAnswer = elementSelect("#resposta");
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


//BASE MODEL QUESTIONS
/**
 * 
 * -> ID DO COMENTARIO
 * -> 
 * -> NOME DO USUARIO   
 * -> EMAIL DO USUARIO
 * -> COMENTARIO DO USUARIO
 * 
 * ->STATUS DA DUVIDA (SE FOI RESPONDIDA OU NAO)
 * 
 * ->ID DO USUARIO ADMIN QUE RESPONDEU  O COMENTARIO
*/