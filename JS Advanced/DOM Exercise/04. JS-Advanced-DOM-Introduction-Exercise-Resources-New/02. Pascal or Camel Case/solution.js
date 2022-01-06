function solve() {
     const text = document.getElementById('text').value;
    const type = document.getElementById('naming-convention').value;
    const splitted =  text.split(' ');
    const resultContainer = document.getElementById('result');
    let result = '';
    if(type == 'Camel Case'){
      result += splitted[0][0].toLowerCase() + splitted[0].slice(1,splitted[0].length).toLowerCase();
       for(let i = 1;i<splitted.length;i++){
        result += splitted[i][0].toUpperCase() + splitted[i].slice(1,splitted[i].length).toLowerCase();
       }
    }else if(type == 'Pascal Case'){
        for(let i = 0;i<splitted.length;i++){
          result += splitted[i][0].toUpperCase() + (splitted[i].slice(1,splitted[i].length)).toLowerCase();
        }
    }else {
      resultContainer.textContent = 'Error!';
      return;
    }
    resultContainer.textContent = result;
}