const { expect } = require('chai'); 
const { isOddOrEven }  = require('./evenOdd');

describe('Test even or odd number', ()=>{
     it('Test odd or even',()=>{
         expect(isOddOrEven([])).to.be.undefined;
         expect(isOddOrEven(5)).to.be.undefined;
         expect(isOddOrEven({})).to.be.undefined;
     });
     it('Test odd',()=>{
        expect(isOddOrEven('ada')).to.be.equal('odd');
       
    });
    it('Test even',()=>{
        expect(isOddOrEven('adda')).to.be.equal('even');
        expect(isOddOrEven('')).to.be.equal('even');
    });
});

