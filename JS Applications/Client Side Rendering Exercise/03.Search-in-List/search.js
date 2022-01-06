import { html,render} from './node_modules/lit-html/lit-html.js'
import { towns as townsData } from './towns.js';

const townsTemplate = (towns)=> html`
<ul>
   ${towns.map(t=>html`<li class="${t.match ? 'active': ''}">${t.name}</li>`)}
</ul>`
const towns = townsData.map(t=> ({name: t,match:false}))
const root = document.getElementById('towns');
const input = document.getElementById('searchText');
const output = document.getElementById('result');
document.querySelector('button').addEventListener('click',onSearch);
update();

function update(){
   render(townsTemplate(towns),root);
}

function onSearch(){
   const match =  input.value.toLocaleLowerCase();
   let matches = 0;
   for(let town of towns){
      if(town.match = match && town.name.toLocaleLowerCase().includes(match)){
        matches+=1;
        town.match = true;
      }else{
         town.match = false;
      }
     


   }
   output.textContent = `${matches} matches found`;
   update();
}