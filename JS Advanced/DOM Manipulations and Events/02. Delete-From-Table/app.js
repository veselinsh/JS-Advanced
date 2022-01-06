function deleteByEmail() {
    const elements = Array.from(document.querySelectorAll('tbody tr'));
    const input = document.querySelector('input[name="email"]').value;
    let isFound = false;
    elements.forEach((el) => {
       if(el.textContent.includes(input)){
           isFound = true;
           el.remove();
       }
    })
    if(isFound){
        document.getElementById('result').textContent = 'Deleted'
    }else{
        document.getElementById('result').textContent = 'Not found.'

    }
}