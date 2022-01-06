const element = document.getElementById('errorBox');
const output = element.querySelector('span');

export function notify(errorMsg){
    output.textContent = errorMsg;
   element.style.display = 'block';
   
   setTimeout(() => element.style.display = 'none',3000)
}