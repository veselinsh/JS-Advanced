import { deleteById, getIdeasById } from '../api/data.js';
import {e} from './dom.js';

const section = document.getElementById('detailsPage');
section.remove();
let ctx = null
export async function showDetailsPage(ctxTarget,id){
    ctx = ctxTarget;
    ctx.showSection(section)
    loadIdea(id);
}

async function loadIdea(id){
    const idea  = await getIdeasById(id);

    section.replaceChildren(creataIdeaDiv(idea))
}
function creataIdeaDiv(idea){
    const fragment = document.createDocumentFragment();
    fragment.innerHTML = ` <img class="det-img" src="${idea.img}" />
            <div class="desc">
                <h2 class="display-5">${idea.title}</h2>
                <p class="infoType">Description:</p>
                <p class="idea-description">${idea.description}</p>`;



     const userData = JSON.parse(sessionStorage.getItem('userData'));
     if(userData && userData.id == idea._ownerId){
         fragment.appendChild(e('div',{className:'text-center'},
       e('a',{className: 'btn detb' ,href: '',onClick:onDelete},'Delete')
     )); 
     }
     
     return fragment;  
     async function onDelete(ev){
     ev.preventDefault();
     const confirmed = confirm('Are you sure you want to delete this idea?');

     if(confirmed){
         await deleteById(idea._id)
         ctx.goTo('catalog')
     }
     }    
}

/*
 

*/