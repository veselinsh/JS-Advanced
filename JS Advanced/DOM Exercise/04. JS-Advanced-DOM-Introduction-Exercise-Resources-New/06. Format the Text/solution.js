function solve() {
   let text = document.getElementById('input').value;
   const splitted = text.split('.').filter(el => el != '');
   const output = document.getElementById('output');
//    let finalString = '';
//    let result  = '';
//    let counter = 0;
//    for(let i = 0;i<splitted.length;i){
//       if(i % 3 === 0){
//          result = result + '</p>';
//          finalString += result;
//          result = '<p>'
//       }
//       result += splitted[i] + '.';
//    }
//    finalString += result
//     output.innerHTML = finalString;      

   for(let i = 0;i < splitted.length;i+=3){
     let arr = [];
     for(let y = 0;y<3;y++){
        if(splitted[i+y]){
           arr.push(splitted[i+y]);
        }
     }
     let paragraph = arr.join('.    ') + '.';
     output.innerHTML += `<p>${paragraph}</p>`;
   } 
  
}