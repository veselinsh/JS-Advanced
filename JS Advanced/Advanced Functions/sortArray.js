function sortArr(arr,command){
    if(command == 'asc'){
       arr.sort((a,b) => a - b);
    }else if(command == 'desc'){
      arr.sort((a,b) =>  b - a )
    }
    return arr;
}
console.log(sortArr([14, 7, 17, 6, 8], 'desc'));