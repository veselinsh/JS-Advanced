function solve() {
  /* table generation */
  const [input,output] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn,buyBtn] = Array.from(document.querySelectorAll('button'));
  generateBtn.addEventListener('click' , generate);
  buyBtn.addEventListener('click',buy);
  function generate(ev){
    const data = JSON.parse(input.value);
    for(let item of data){
       const row = document.createElement('tr');
     
     const imgCell = document.createElement('td');
     const nameCell = document.createElement('td');
     const priceCell = document.createElement('td');
     const decFacCell = document.createElement('td');
     const checkboxCell = document.createElement('td');

     const img = document.createElement('img');
     img.src = item.img;
     imgCell.appendChild(img);

     const name = document.createElement('p');
     name.textContent = item.name;
     nameCell.appendChild(name);
     
     const price = document.createElement('p');
     price.textContent = item.price;
     priceCell.appendChild(price);

     const decFac = document.createElement('p');
     decFac.textContent = item.decFactor;
     decFacCell.appendChild(decFac);

     const check = document.createElement('input');
     check.type = 'checkbox';
     checkboxCell.appendChild(check)

     row.appendChild(imgCell);
     row.appendChild(nameCell);
     row.appendChild(priceCell);
     row.appendChild(decFacCell);
     row.appendChild(checkboxCell);
     document.querySelector('tbody').appendChild(row);
    }
    
  }
  /* buy furniture  */
  function buy(ev){
    const boxes = Array
    .from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(b => b.parentElement.parentElement)
    .map(r => ({
      name : r.children[1].textContent,
      price : Number(r.children[2].textContent),
      decFactor : Number(r.children[3].textContent),
    }));
    let totalPrice  = 0;
    const result = [];
    let averageFactor = 0;
    for(let row of boxes){
      result.push(row.name);
      totalPrice += row.price;
      averageFactor += row.decFactor;
    }
    averageFactor = averageFactor / boxes.length;

    let finalString = `Bought furniture: ${result.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${averageFactor}`;
 output.value = finalString;
  }
 
}