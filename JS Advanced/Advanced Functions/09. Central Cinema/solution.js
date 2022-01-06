function solve() {
  const [name,hall,ticketPrice] = document.querySelectorAll('#container input');
  const movieSection = document.querySelector('#movies ul');
  const archiveSection = document.querySelector('#archive ul');
  const clearButton = archiveSection.parentElement.querySelector('button');
  clearButton.addEventListener('click' ,()=> {
    archiveSection.innerHTML = '';
  })
  const addMovieBtn = document.querySelector('#container button');
  addMovieBtn.addEventListener('click' ,addMovie);
  
  function addMovie(e){
    e.preventDefault();
    if(name.value !== '' && hall.value !== '' && !isNaN(Number(ticketPrice.value)) && ticketPrice.value !== ''){
      const movie = document.createElement('li');
      movie.innerHTML = 
      `<span>${name.value}</span>
      <strong>Hall: ${hall.value}</strong>
      <div>
      <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
      <input placeholder="Tickets Sold">
      <button>Archive</button>
      </div>`
      movieSection.appendChild(movie);
      const button = document.querySelector('#movies div button');
      button.addEventListener('click',addToArchive);
    }
    name.value = '';
    hall.value = '';
    ticketPrice.value = ''; 
   }
   function addToArchive(ev){
     const price = document.querySelector('div strong');
    const soldTickets = document.querySelector('input[placeholder="Tickets Sold"]');
    if(!isNaN(Number(soldTickets.value)) && soldTickets.value != ''){
      const income = Number(soldTickets.value) * Number(price.textContent);
      const liEl = document.createElement('li');
      liEl.innerHTML = 
      `<span>${name.value}</span>
       <strong>Total amount: ${income.toFixed(2)}</strong>
       <button>Delete</button>`
       const button = liEl.querySelector('button');
       button.addEventListener('click' , deleteEntry);
       archiveSection.appendChild(liEl);
       ev.target.parentElement.parentElement.remove();
      }
   }
  function deleteEntry(ev){
      const elToDelete = ev.target.parentElement.remove()

    }
    
}