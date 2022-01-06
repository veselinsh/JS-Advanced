window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#register-view #register');
    form.addEventListener('submit', onRegister);
})
async function onRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email')
    const password = formData.get('password');
    const repassword = formData.get('rePass');
    try {
        if(repassword !== password){
            throw new Error('Invalid password');
        }
        const res = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (res.ok !== true) {
            const error = await res.json();
            throw new Error(error.message)
        }
        const data = await res.json();
        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken,
        }
        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = './index.html';
      
    } catch (error) {
        alert(error.message);
    }

}