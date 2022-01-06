const pizzUni = require('../pizza');
const {expect} = require('chai');
describe("Tests …", function() {
    describe("makeAnOrder", () => {
        let pizza = {}
        it("If in object orderedPizza doesn't exist", () => {
         expect(()=>pizzUni.makeAnOrder({orderedDrink : 'cola' })).to.throw('You must order at least 1 Pizza to finish the order.');
          expect(()=>pizzUni.makeAnOrder({})).to.throw('You must order at least 1 Pizza to finish the order.');
        });
         it("If in object orderedDrink doesn't exist", () => {
         expect(pizzUni.makeAnOrder({orderedPizza : 'cola'})).to.equal(`You just ordered cola`);
         expect(pizzUni.makeAnOrder({orderedPizza : 'cola',orderedDrink : 'fanta' })).to.equal(`You just ordered cola and fanta.`);
      });
     });
      
     describe("getRemainingWork", () => {
        it("status of pizza", () => {
          expect(pizzUni.getRemainingWork([{pizzaName: 'pizza ', status: 'preparing'},{pizzaName: 'fanta ', status: 'preparing'}])).to.equal('The following pizzas are still preparing: pizza , fanta .')
        });
        it("status of pizza", () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'pizza ', status: 'ready'},{pizzaName: 'fanta ', status: 'ready'}])).to.equal('All orders are complete!')
          }); 

     });
     describe("orderType", () => {
                 it("Type of delivery", () => {
            let sum = 100;
            expect(pizzUni.orderType(sum,'Delivery')).to.be.equal(100)
        });
        it('',()=>{
            expect(pizzUni.orderType(100,'Carry Out')).to.be.equal(90)
        })
    });

});
