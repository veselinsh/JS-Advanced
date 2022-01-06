import { updateNav } from './app.js';
import {showView} from './dom.js'
const registerSection = document.getElementById('form-sign-up')
registerSection.remove();
const form = registerSection.querySelector('form');
form.addEventListener('submit',onRegister)

export  function showRegister(){
    showView(registerSection)
}
async function onRegister(event){
    event.preventDefault(); 
    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePassword = formData.get('repeatPassword').trim();
    try{
        if(email !== '' || password.length < 6){
            throw new Error('Fill email input or password length must be bigger than 6');
        }
        if(password !== rePassword){
            throw new Error('Passwords don\'t match');
        }
        
        const res = await fetch('http://localhost:3030/users/register',{
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
        updateNav();
        showHome();

    }catch(err){
       alert(err.message)
    }
}