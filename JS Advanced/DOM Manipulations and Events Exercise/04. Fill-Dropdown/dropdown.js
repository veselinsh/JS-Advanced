function addItem() {
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    const button = document.querySelector('input[type="button"]')
    button.addEventListener('click' , dropDown);
    const menu = document.getElementById('menu');
    menu.appendChild(text)

    function dropDown(){

    }
}