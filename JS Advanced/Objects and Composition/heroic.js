function heroic(arr){
    const result = [];
    
    for(let token of arr){
        let [name,level,items] = token.split(' / ');
        level = Number(level);
        result.push({
            name,
            level,
            items : items ? items.split(', ') : [],
        });
    }
    const test = JSON.stringify(result)
    return test;
} 
heroic(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])