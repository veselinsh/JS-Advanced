class ChristmasDinner {
    constructor(budget){
      this._budget = budget;
      this.dishes = [];
      this.products = [];
      this.guests = {};
    }
    set _budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number')
        }
 
        this.budget = value
    }
    shopping(product){
        const [item,price] = product;
        if(this.budget < price){
            throw new Error('Not enough money to buy this product');
        }
        this.budget -= price;
        this.products.push(item);
        return `You have successfully bought ${item}!`;
    }
    recipes(recipe){
       const needProducts = recipe.productsList;
       const recipeName = recipe.recipeName
       for(let product of needProducts){
           if(!this.products.includes(product)){
             throw new Error(`We do not have this product`);
           }
       }
       this.dishes.push({recipeName,needProducts});
       return `${recipeName} has been successfully cooked!`;
    }
    inviteGuests(name, dish){
       const find = this.dishes.find(s => s.recipeName === dish);
       const match = Object.keys(this.guests).find(s=> s === name);
       if(find === undefined){
           throw new Error('We do not have this dish');
       }
       if(match !== undefined){
        throw new Error('We do not have this dish');
       }
       this.guests[name] = dish;
       return `You have successfully invited ${name}!`

    }
    showAttendance(){
     let result = '';
     const length = Object.keys(this.guests).length
     let index = 0;
      for(const [name,dish] of Object.entries(this.guests)){
          const match = this.dishes.find(s=>s.recipeName === dish);
          index++;
          if(index === length){
            result += `${name} will eat ${dish}, which consists of ${(match.needProducts).join(', ')}`;

          }else{
              result += `${name} will eat ${dish}, which consists of ${(match.needProducts).join(', ')}\n`;
          }
      }
      
      return result;
    }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
