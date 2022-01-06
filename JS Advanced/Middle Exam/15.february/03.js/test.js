const dealership = require('./dealership');
const {expect} = require('chai');

describe("Dealership", ()=> {
    describe("newCarCost", ()=> {
        it("return original price if model is unsupported", ()=> {
           expect(dealership.newCarCost('a',1)).to.be.equal(1);
        });
        it("return discounted price ", ()=> {
            expect(dealership.newCarCost('Audi A4 B8',30000)).to.be.equal(15000);
         });
     });
     describe("carEquipment", function() {
        it("Check extras with the given indexes", ()=> {
           expect(dealership.carEquipment(['heated seats', 'sliding roof','sport rims'],[0,2])).to.deep.equal(['heated seats','sport rims'])
           expect(dealership.carEquipment(['a'],[0])).to.deep.equal(['a']);
        });
     });
     describe("euroCategory", function() {
        it("If category is under 4", ()=> {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it("If category is above or equal to 4", ()=> {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });
     });

     
});
