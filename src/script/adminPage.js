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
            
            return questionsObj;
        });
    },
    answerSaq: () => {
        let inputAnswer;
        let saqId;
    }
}


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