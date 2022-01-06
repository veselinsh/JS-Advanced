function magicMatrices(array) {
    let isMagic = true;
    let sum = eval(array[0].join("+"));
    for(let row of array){
        let temp = 0;
        for(let col of row){
           temp += col;
        }
        if(temp !== sum){
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);
}
magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])
   