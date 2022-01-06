function create(words) {
   const content  =  document.getElementById('content');
   for(let word of words){
      const divElement = document.createElement('div');
      const p = document.createElement('p');
      divElement.appendChild(p);
      content.appendChild(divElement); 
      p.textContent = word
      p.style.display = 'none';
      divElement.addEventListener('click' , onClick);
   }
   function onClick(e){
      e.currentTarget.children[0].style.display = '';

   }

   
  
   
}