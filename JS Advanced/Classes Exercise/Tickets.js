function tickets(offers,criteria){
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const ticketsObj = [];
  
   for(let offer of offers){
       let [destination,price,status] = offer.split('|');
       price = Number(price);
       ticketsObj.push(new Ticket(destination,price,status));
   }
   if(criteria === 'destination'){
     ticketsObj.sort((a,b)=>{
       return a.destination.localeCompare(b.destination);
     })
   }else if(criteria === 'price'){
     return ticketsObj.sort((a,b)=>a.price - b.price);
   }else if(criteria === 'status'){
    return ticketsObj.sort((a,b)=> a.status.localeCompare(b.status));
   }
   return ticketsObj
}
const sorted = tickets(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination');
console.log(sorted);