
    const selectAllItems= (itemName) => {
        if(!itemName) throw new Error('The item name is empty!');
    
        let item = document.querySelectorAll(itemName);
    
        // if(item) {
        //     throw new Error('This item does not exists.')
        // }
    
        return item;
    }
    
    const selectItem= (itemName) => {
        if(!itemName) throw new Error('The item name is empty!');
    
        let item = document.querySelector(itemName);
    
        // if(item) {
        //     throw new Error('This item does not exists.')
        // }
    
        return item;
    }
    
    const spanTeste = selectItem('.saibaMainWrap');
    const trilhaItem = selectAllItems('.trilha-item');
    
    trilhaItem.forEach(element => {
        element.addEventListener("mouseover", () => {
            spanTeste.style.display = 'flex';
        });
         element.addEventListener("mouseout", () => {
            spanTeste.style.display = 'none';
        });
    });
    