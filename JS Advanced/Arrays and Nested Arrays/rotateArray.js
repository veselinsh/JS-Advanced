function rotateArray(arr,step){
     for(let i = 0;i<step;i++){
         arr.unshift(arr.pop());
     }
     console.log(arr.join(' '));
}
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)