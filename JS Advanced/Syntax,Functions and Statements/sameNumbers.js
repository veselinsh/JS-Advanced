function sameNumbers(num){
    const numAsString = num.toString();
    let isEqual = true;
    let result = Number(numAsString[0]);
    for(let i = 1;i<numAsString.length;i++){
        if(numAsString[i-1] !== numAsString[i]){
         isEqual = false;
        }
        result += Number(numAsString[i])
    }
    console.log(isEqual);
    console.log(result);
}

sameNumbers(2222222)