import { html,render } from "./node_modules/lit-html/lit-html.js";

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const root = document.querySelector('div');
const optionTemplate = (items) => html`
<select id="menu">
   ${items.map(i=>html`<option value=${i._id}>${i.text}</option>`)}
</select>`

function update(items){
    const result = optionTemplate(items);

    render(result,root);
}
getAllData();

document.querySelector('form').addEventListener('submit',addItem)
async function getAllData(){
    const res = await fetch(url);
    if(res.ok !== true){
        const error = await res.json();
        throw new Error(error.message);
    }

    const data = Object.values(await res.json());
    update(data);
}
async function addItem(ev){
    ev.preventDefault();
    const text = document.getElementById('itemText').value;
    const res = await fetch(url,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({text})
    });
    if(res.ok){
        getAllData()
    }
}