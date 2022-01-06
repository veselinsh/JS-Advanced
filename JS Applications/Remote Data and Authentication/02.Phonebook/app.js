function attachEvents() {
    document.getElementById('btnCreate').addEventListener('click', createPerson);
    document.getElementById('btnLoad').addEventListener('click', loadData);
}
// async function async(){
    const ul = document.getElementById('phonebook');

// }
async function loadData() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const res = await fetch(url);
    const data = await res.json();
    ul.textContent = '';
    const result = Object.values(data).forEach(el => {
        const liElement = document.createElement('li');
        liElement.innerHTML = `${el.person}: ${el.phone} <button id="${el._id}">Delete</button>`
        ul.appendChild(liElement);
    });
    ul.addEventListener('click', deletePerson);

}
async function deletePerson(event) {
    const id = event.target.id;
    if(id !== undefined){
        await onDelete(id)
        event.target.parentElement.remove();
    }

}
async function createPerson() {
    const [nameInput, phoneInput] = document.querySelectorAll('input');
    const person = nameInput.value;
    const phone = phoneInput.value;
    const data = { person, phone }
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
    const res = await fetch(url, options);
    const result = await res.json();
    nameInput.value = '';
    phoneInput.value = '';
}
async function onDelete(id){
    const url = 'http://localhost:3030/jsonstore/phonebook/' + id;
    const options = {
        method : 'delete'
    }
    const res = await fetch(url,options);
    const data = await res.json();
    return data;
}
attachEvents();