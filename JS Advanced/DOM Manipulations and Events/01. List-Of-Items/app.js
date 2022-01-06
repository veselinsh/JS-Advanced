function addItem() {
    const element = document.getElementById('items');
    const para = document.createElement('li');
    para.textContent = document.getElementById('newItemText').value;
    element.appendChild(para);
}