function validate() {
  const usernameInput = document.getElementById('username');
  const usernamePattern = /(^[a-zA-Z0-9]{3,20}$)/;

  const passwordInput = document.getElementById('password');
  const passwordPattern = /(^[\w]{5,15}$)/;

  const confirmPasswordInput = document.getElementById('confirm-password');
  const confirmPasswordPattern = /(^[\w]{5,15}$)/;

  const emailInput = document.getElementById('email');
  const emailPattern = /(^[\w]+@[\w]+.[dot]+$)/;
  let isCorrect = true;
  let isChecked = false;
  let passwordRed = false;
  const submit = document.getElementById('submit');
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (!usernamePattern.test(usernameInput.value)) {
      usernameInput.style.borderColor = 'red';
      isCorrect = false;
    } else {
      usernameInput.style.border = 'none';
    }
    if (!passwordPattern.test(passwordInput.value)) {
      passwordRed = true;
      passwordInput.style.borderColor = 'red';
      confirmPasswordInput.style.borderColor = 'red';
      isCorrect = false;
    } else {
      passwordInput.style.border = 'none';
      confirmPasswordInput.style.border = 'none';
    }
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordInput.style.borderColor = 'red';
      isCorrect = false;
    } else {
      if(!passwordRed){
        confirmPasswordInput.style.border = 'none';
      }
    }

    if (!emailPattern.test(emailInput.value)) {
      emailInput.style.borderColor = 'red';
      isCorrect = false;
    } else {
      emailInput.style.border = 'none';
    }

    const validDiv = document.getElementById('valid');
    if(isCorrect){
      validDiv.style.display = 'block';
    }else{
      validDiv.style.display = 'none';
    }
    if(isChecked){
      const companyNumber = document.getElementById('companyNumber');
 if(Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999){
         companyNumber.style.borderColor = 'red';
       }else{
         companyNumber.style.border = 'none';
       }
    }
  });
   document.getElementById('company').addEventListener('change',(e)=>{
     const companyField = document.getElementById('companyInfo');
     if(e.target.checked){
       isChecked = true;
      companyField.style.display = 'block';
      
     }else{
       isChecked = false;
      companyField.style.display = 'none';
     }
   });

} 
