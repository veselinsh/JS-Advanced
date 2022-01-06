function sumNumber(arr,start,end){
    let sum = 0;
   if(!Array.isArray(arr)){
       return NaN;
   }
   if(start < 0){
       start = 0;
   }
   if(end > arr.length - 1){
       end = arr.length - 1;
   }
   for(let i = start;i<=end;i++){
      sum += Number(arr[i]);
      if(isNaN(Number(arr[i]))){
          return NaN
      }
   }
   return sum;
}
console.log(sumNumber([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sumNumber([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sumNumber([10, 'twenty', 30, 40], 0, 2));
console.log(sumNumber([], 1, 2));
console.log(sumNumber('text', 0, 2));