function solve(){
    const [creator,title,category] = document.querySelectorAll('form p input');
    const content = document.querySelector('form p textarea');
    const createBtn = document.querySelector('form button');
    createBtn.addEventListener('click',createElement);
    const sectionElement = document.querySelector('main section');
    function createElement(e){
       e.preventDefault();
    sectionElement.innerHTML += `<article>
                                <h1>${title.value}</h1>
                                <p>Category:
                                 <strong>${category.value}</strong></p>
                                <p>Creator:
                                  <strong>${creator.value}</strong>
                                </p>
                                <p>${content.value}</p>
                                <div class = "buttons">
                                <button class="btn delete">Delete</delete>
                                <button class="btn archive">Archive</button>
                                </div>`;
      const deleteBtn = document.querySelector('.buttons .delete');
      const archiveBtn = document.querySelector('.buttons .archive');
      deleteBtn.addEventListener('click',deleteElement);
      archiveBtn.addEventListener('click',archiveElement);
      title.value = '';
      category.value = '';
      creator.value = '';
      content.value = '';
   }
   function deleteElement(){
      const articleEl = document.querySelector('article');
       articleEl.remove();
      
   }
   function archiveElement(){
       const articleEl = document.querySelector('article');
       const heading = document.getElementsByTagName('h1')[1];
       const archiveSection = document.querySelector('.archive-section ol');
       const liElement = document.createElement('li');
       liElement.textContent = heading.textContent;
       archiveSection.appendChild(liElement);
       sectionElement.removeChild(articleEl);
       const collectionArchive = document.querySelectorAll('ol li');
       console.log(collectionArchive);
       Array.from(collectionArchive).sort((a,b)=>a.textContent.localeCompare(b.textContent));
    }
  }
