import { html,render } from "./node_modules/lit-html/lit-html.js";


document.querySelector('form').addEventListener('submit',(event)=>{
    event.preventDefault();
    const root = document.getElementById('root');
    const towns = document.getElementById('towns').value.split(',').map(t=>t.trim());
    const result = townsTemplate(towns)
    render(result,root);
})

const townsTemplate = (towns) => html`
<ul>
    ${towns.map(t=>html`<li>${t}</li>`)}
</ul>`