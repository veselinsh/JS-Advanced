function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach((b) => b.addEventListener('click' , onToggle));
    function onToggle(ev){
        const infoDif = ev.target.parentElement.querySelector('div');
        const isActive  = ev.target.parentElement.querySelector('input[type="radio"][value="unlock"]').checked
            
       if(isActive){
           if(ev.target.textContent == 'Show more'){
          infoDif.style.display = 'block';
        ev.target.textContent = 'Hide it';
      }else{
        infoDif.style.display = '';
        ev.target.textContent = 'Show more';
      }
       }
    //  const infoDif = Array
    //  .from( ev.target.parentElement.querySelectorAll('div'))
    //  .find(d => d.id.includes('HiddenFields'));
      
    }
}