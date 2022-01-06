function subsequence(arr){
    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;
    for(let num of arr){
        if(num >= biggest){
            result.push(num);
            biggest = num;
        }
    }
    return result;
}
subsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])