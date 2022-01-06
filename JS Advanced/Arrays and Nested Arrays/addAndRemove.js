function addAndRemove(commands){
    let result = [];
    let initialNumber = 1;
    for(let command of commands){
        if(command === 'add'){
             result.push(initialNumber);
        }else{
            result.pop()
        }
        initialNumber++;
    }
    if(result.length === 0){
        console.log('Empty');
    }else{
        console.log(result.join('\n'));
    }

}
addAndRemove(['add', 
'add', 
'add', 
'add']
)