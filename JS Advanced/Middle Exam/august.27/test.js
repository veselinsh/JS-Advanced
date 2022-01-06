const testNumbers = require('./testNumbers');
const {expect} = require('chai');

describe('Test Numbers' , function (){
   describe('Function sumNumbers' ,() =>{
       it('If input numbers are numbers' , ()=>{
           expect(testNumbers.sumNumbers(8,'d')).to.be.undefined;
           expect(testNumbers.sumNumbers('8',7)).to.be.undefined;
           expect(testNumbers.sumNumbers(8,{})).to.be.undefined;
           expect(testNumbers.sumNumbers([],8)).to.be.undefined;
           expect(testNumbers.sumNumbers(8,{})).to.be.undefined;
       });
       it('if function works properly' ,()=>{
        expect(testNumbers.sumNumbers(8,4)).to.be.equal('12.00');
        expect(testNumbers.sumNumbers(-8,4)).to.be.equal('-4.00');
        expect(testNumbers.sumNumbers(-8,-4)).to.be.equal('-12.00');
        expect(testNumbers.sumNumbers(8.333,4.333)).to.be.equal('12.67');
       });
   });
   describe('Function checker' ,() =>{
       it('parse input to number',()=>{
         expect(()=>testNumbers.numberChecker('a')).to.throw();
       });
       it('check if is odd' , ()=>{
         expect(testNumbers.numberChecker(7)).to.contain('odd');
       });
       it('check if is even' , ()=>{
        expect(testNumbers.numberChecker(8)).to.contain('even');
      });
      it('check if is string number is odd' , ()=>{
        expect(testNumbers.numberChecker('7')).to.contain('odd');
      });
      it('check if is string number is even' , ()=>{
       expect(testNumbers.numberChecker('8')).to.contain('even');
     });
   });
   describe('Function averageSum' ,() =>{
      it('test if the function calculate right array',()=>{
        expect(testNumbers.averageSumArray([1,2,3])).to.be.equal(2);
        expect(testNumbers.averageSumArray([1.5,2.5,3.5])).to.be.equal(2.5);

      });
   });

});