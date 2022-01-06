function search() {
   const text  = document.getElementById('searchText').value;
   const towns = Array.from(document.querySelectorAll('ul li'));
   let matches = 0;
 towns.forEach((el) => {
      if(el.innerHTML.includes(text)){
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         matches++;
      }
   })
   document.getElementById('result').textContent = `${matches} matches found`;
}
