function validate() {
    const email = document.getElementById('email');
    const emailPattern = /(^[a-z]+@[a-z]+.[a-z]+$)/;
    email.addEventListener('change' , ()=>{
  if(!emailPattern.test(email.value)){
        email.classList.add('error');
    }else{
        email.classList.remove('error');
    }
    })
  
}