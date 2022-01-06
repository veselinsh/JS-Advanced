import {showView} from './dom.js'
import {updateNav} from './app.js'
import { showHome } from './home.js';
const loginSection = document.getElementById('form-login');
const form = loginSection.querySelector('form')
form.addEventListener('submit',onLogin);
loginSection.remove();

export  function showLogin(){
    showView(loginSection)
}
async function onLogin(event){
    event.preventDefault(); 
    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    try{
        const res = await fetch('http://localhost:3030/users/login',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password}),
        });

        if(res.ok !== true){
            const error = await res.json();
            throw new Error(error.message);
        }
        const data = await res.json();
        sessionStorage.setItem('userData',JSON.stringify({
            email: data.email,
            id: data._id,
            token: data.accessToken
        }));
        form.reset();
        updateNav()
        showHome();

    }catch(err){
       alert(err.message)
    }
}