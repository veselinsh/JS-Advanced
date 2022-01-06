import { logout } from './api/data.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';


const root = document.querySelector('div.container');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

updateUserNav();



page(decorateContext)
page('/', catalogPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/register', registerPage);
page('/login', loginPage);
page('/my-furniture', catalogPage);

page.start();



function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

function updateUserNav(){
    const userData = getUserData();

    if(userData){
      document.getElementById('user').style.display = 'block';
      document.getElementById('guest').style.display = '';
    }else{
        document.getElementById('user').style.display = '';
        document.getElementById('guest').style.display = 'block';
    }
}

async function onLogout() {
    await logout();
    updateUserNav();
    page.redirect('/')
}