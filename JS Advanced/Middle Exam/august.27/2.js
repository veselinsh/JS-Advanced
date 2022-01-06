class Restaurant {
    constructor(budget) {
       this.budget = budget;
       this.menu = {};
       this.stockProducts = {};
       this.history = [];
    }
    loadProducts(products){
        for(let product of products){
            let [name,quantity,price] = product.split(' ');
            quantity = Number(quantity);
            price = Number(quantity);
            if(this.budget >= price){
                if(this.stockProducts[name] === undefined){
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] += quantity;
                this.budget -= price;
                this.history.push(`Successfully loaded ${quantity} ${name}\n`);
            }else{
                this.history.push(`There was not enough money to load ${quantity} ${name}\n`);
            }

        }
        return this.history.join('\n');
    }
    addToMenu(meal,neededProducts,price){
        if(this.menu[meal] === undefined){
            this.menu[meal] = {
                products : {},
                price: Number(price),
            }
            for(let neededProduct of neededProducts){
                let [mealName,quantity] = neededProduct.split(' ');
                quantity = Number(quantity);
                this.menu[meal].products[mealName] = quantity;
            }
            if(Object.keys(this.menu).length === 1){
              return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }else{
                 return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }
        }else{
            return `The ${meal} is already in the our menu, try something different.`
        }

    }
    showMenu(){
        if(Object.keys(this.menu).length === 0){
            return `Our menu is not ready yet, please come later...`
        }else{
            let result = [];

            for(let meal in this.menu){
                result.push(`${meal} - $ ${this.menu[meal].price}`);
            }
        }
        return result.join('\n');
    }
    makeTheOrder(meal){
      if(!this.menu[meal]){
          return `There is not ${meal} yet in our menu, do you want to order something else?`;
      }else{
         for(let product in this.menu[meal].products){
             if(!this.stockProducts[product] || this.stockProducts[product] < this.menu[meal].product[product]){
                 return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
             }
            }
            this.stockProducts[product] -= this.menu[meal].product[product];
        }
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
    
}
let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
