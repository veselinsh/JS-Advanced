import { logout } from './api/data.js';
import {render,page} from './lib.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';



const root = document.querySelector('#main-content');
document.getElementById('logoutBtn').addEventListener('click',onLogout);
updateUserNav();
page(decorateContent);
page('/',homePage)
page('/catalog', catalogPage)
page('/login',loginPage)
page('/register',registerPage)
page('/create',createPage)
page('/details/:id',detailsPage)
page('/edit/:id',editPage)
page.start();



function decorateContent(ctx,next){
    ctx.render = (content) => render(content,root);
    ctx.updateUserNav = updateUserNav;
    next();
}

function updateUserNav(){
    const userData = getUserData();
    if(userData){
        document.querySelector('#user').style.display = 'block';
        document.querySelector('#guest').style.display = 'none';
    }else{
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'block';
    }
}

function onLogout(){
    logout();
    updateUserNav();
}