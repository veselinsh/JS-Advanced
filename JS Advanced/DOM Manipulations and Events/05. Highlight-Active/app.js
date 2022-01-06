function focused() {
    const fields = Array.from   (document.getElementsByTagName('input'));
    for(let field of fields){
        field.addEventListener('focus' , onFocus);
        field.addEventListener('blur' , onBlur);
    }
    function onFocus(ev){
    ev.target.parentNode.className = ''
       console.log(ev.target);
    }
    function onBlur(ev){
      console.log(ev.target);
    }
}