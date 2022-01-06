import { createIdea } from '../api/data.js';
import {e} from './dom.js';

const section = document.getElementById('createPage');
section.remove();
const form = section.querySelector('form');

form.addEventListener('submit',onSubmit)
let ctx = null;
export async function showCreatePage(ctxTarget){
    ctx = ctxTarget
    ctx.showSection(section)
}
async function onSubmit(event){ 
    event.prebentDefault();
    const formData = new FormData(form);
 
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('imageURL').trim();
 
    if(title.length < 6){
        return alert('Title must be at least 6 charachter long')
    }
    if(description.length < 10){
        return alert('Description must be at least 10 charachter long')
    }
    if(img.length < 5){
        return alert('Image URL must be at least 5 charachter long')
    }
    createIdea({title,description,img});
    form.reset();  
    ctx.goTo('catalog');
 
 }