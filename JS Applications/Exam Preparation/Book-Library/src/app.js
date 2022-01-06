import { logout } from './api/data.js';
import {render,page} from './lib.js';
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/myBooks.js';


const root = document.querySelector('#site-content');
document.getElementById('logoutBtn').addEventListener('click',onLogout);
page(decorateContent);
page('/',homePage);
page('/create',createPage);
page('/login',loginPage);
page('/register',registerPage);
page('/details/:id',detailsPage);
page('/edit/:id',editPage);
page('/profile',profilePage);
page.start();





function decorateContent(ctx,next){
    ctx.render = (content) => render(content,root);
    ctx.updateUserNav = updateUserNav;
    next();
}

function updateUserNav(){
    const userData = getUserData();
    if(userData){
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;

    }else{
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

function onLogout(){
    logout();
    updateUserNav();
}