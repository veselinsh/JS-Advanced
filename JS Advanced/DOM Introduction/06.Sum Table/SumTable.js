function sumTable() {
   const rows = document.querySelectorAll('table tr');
   let sum = 0;
   for(let i = 1;i<rows.length - 1;i++){
      let price = Number(rows[i].lastChild.textContent);
       sum += price;
   }
   document.getElementById('sum').textContent = sum;
}