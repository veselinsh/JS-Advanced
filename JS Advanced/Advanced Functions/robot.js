function robot() {
    const recipes = {
        apple: {protein: 0, carbohydrate: 1,fat: 0, flavour: 2 },
        lemonade: { protein: 0,carbohydrate: 10, fat: 0, flavour: 20 },
        burger: {protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5,carbohydrate: 0, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }
    const store = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0,
    }
   
    function restock(element,quantity){
       store[element] += quantity;
       return 'Success'; 
    }

    function prepare(recipe,quantity){
        const remainingStorage = {};
        for(const element in recipes[recipe]){
            const remaining = store[element] - recipes[recipe][element] * quantity;
            if(remaining < 0){
                return `Error: not enough ${element} in stock`
            }else{
                remainingStorage[element] = remaining;
            }
        }
        Object.assign(store,remainingStorage);
        return 'Success';
    }


    function report(){
        return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour} `;
    }

    function control(str){
        const [command,item,quantity] = str.split(' ');
        switch(command){
            case 'restock':
                return restock(item,Number(quantity));
            case 'prepare':
                return prepare(item,Number(quantity));    
             case 'report':
                return report();
            }
    }
    return control;
}
let manager = robot (); 
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
