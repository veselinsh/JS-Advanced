function solve() {
  
      const button = document.getElementById('searchBtn');
      button.addEventListener('click',onClick)
   function onClick() {
      let elements = Array.from(document.querySelectorAll('tbody tr'));
      let searched = document.getElementById('searchField').value.toLowerCase();
      elements.forEach((el) => {
         let text = el.textContent.toLowerCase();
         if (text.includes(searched)) {
            el.classList.add('select');
         } else {
            el.classList.remove('remove');
         }
      })
      document.getElementById('searchField').value = '';

   }
}