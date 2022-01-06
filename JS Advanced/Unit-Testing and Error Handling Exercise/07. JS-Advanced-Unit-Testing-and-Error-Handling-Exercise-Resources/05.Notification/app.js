function notify(message) {
     const text = document.getElementById('notification');
     text.style.display = 'block';
     text.textContent = message;
     text.addEventListener('click' , () => {
      
       text.style.display = 'none';
       
     })
    }