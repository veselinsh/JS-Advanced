function juice(input){
    let totalJuice = new Map;
    let totalBottles = new Map;
    
    for(let token of input){
        let [fruit,quantity] = token.split(' => ');
        quantity = Number(quantity);
        if(!totalJuice.has(fruit)){
            totalJuice.set(fruit,0);
        }
        let currentQuantity = totalJuice.get(fruit);
        currentQuantity += quantity;
         let total = 0;
        while(currentQuantity >= 1000){
         total++;
         currentQuantity -= 1000;
        }
        if(total !== 0){
            if(!totalBottles.has(fruit)){
                totalBottles.set(fruit,total);
            }else{
                totalBottles.set(fruit,totalBottles.get(fruit) + total);
            }
        }
        totalJuice.set(fruit, totalJuice.get(fruit) + quantity - total * 1000);
    }
    for (let [juicee,bottles]of totalBottles) {
        console.log(juicee + " => " + bottles);
    }

    
}
juice(['Orange => 2000',
'Peach => 1432',
// 'Banana => 450',
'Peach => 600',
//'Strawberry => 549'
])