window.addEventListener('load', solution);

function solution() {
    const nameField = document.getElementById('fname');
    const emailField = document.getElementById('email');
    const phoneNumberField = document.getElementById('phone');
    const addressField = document.getElementById('address');
    const postCodeField = document.getElementById('code');
    const submitBtn = document.getElementById('submitBTN');
    const ulField = document.getElementById('infoPreview');
    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');
    submitBtn.addEventListener('click' , addPreview);
    editBtn.addEventListener('click', editForm);
    continueBtn.addEventListener('click',moveToBin)
    
    function addPreview(){
      if(nameField.value !== '' && emailField.value !== ''){
        ulField.innerHTML = `<li>Full Name: ${nameField.value}</li>
        <li>Email: ${emailField.value}</li>
        <li>Phone Number: ${phoneNumberField.value}</li>
        <li>Address: ${addressField.value}</li>
        <li>Postal Code: ${postCodeField.value}</li>`
        nameField.value = '';
        emailField.value = '';
        phoneNumberField.value = '';
        addressField.value = '';
        postCodeField.value = '';
        submitBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;
      }
    }
     function editForm(e){
       const liText = Array.from(document.querySelectorAll('#infoPreview li'));
       const preview = document.getElementsByClassName('preview');
       const data = [];
       liText.forEach((el)=>{
         const [_,param] = el.textContent.split(':');
          data.push(param.trim());
          el.remove();
       });
      
       nameField.value = data[0];
       emailField.value = data[1];
       phoneNumberField.value = data[2];
       addressField.value = data[3];
       postCodeField.value = data[4];
       submitBtn.disabled = false;
       editBtn.disabled = true;
       continueBtn.disabled = true;
     }
    
     function moveToBin(){
       const blockElement = document.getElementById('block');
       blockElement.remove();
       document.getElementsByTagName('BODY')[0].innerHTML += `<h3>Thank you for your reservation!</h3>`;
     }

}
