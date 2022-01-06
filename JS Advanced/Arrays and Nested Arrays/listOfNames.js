function listOfNames(list){
   let sorted = list.sort(compare);
   function compare(a,b){
       return a.localeCompare(b);
   }
   for(let i = 0; i<list.length;i++){
console.log(`${i+1}.${list[i]}`);
   }
   
}
listOfNames(["John", "Bob", "Christina", "Ema"])