function addItem() {
    const input = document.getElementById('newItemText');
    //create new <li>element
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    //create delete button
    const button = document.createElement('a');
    button.textContent = '[Delete]';
    button.href = '#';
    button.addEventListener('click' , remove);
    liElement.appendChild(button);
    
    document.getElementById('items').appendChild(liElement);
    input.value = '';
    function remove(ev){
    const parent = ev.target.parentNode
    parent.remove();
    }
}