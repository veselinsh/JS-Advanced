const numberOperations = require('./03. Number Operations_Resources');
const {expect,assert} = require('chai');

describe('Number operations',()=>{
    describe('powNumber',()=>{
        it('If the return value is true',()=>{
            assert.equal(numberOperations.powNumber(2), 4);
        });
    });
    describe('numberChecker',()=>{
        it('If the input is invalid',()=>{
            assert.throw(() => numberOperations.numberChecker('a'), 'The input is not a number!');
         });
         it('If the input is bigger than or equal to 100',()=>{
           
            assert.equal(numberOperations.numberChecker('100'), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker('105'), 'The number is greater or equal to 100!');
         });
         it('If the input is valid number',()=>{ 
             assert.equal(numberOperations.numberChecker('99'), 'The number is lower than 100!');
         });
    });
    describe('sumArrays',()=>{
        it('Sum of empty array',()=>{
            expect(numberOperations.sumArrays([],[])).to.eql([]);
            expect(numberOperations.sumArrays([],[1])).to.eql([1]);
            expect(numberOperations.sumArrays([1],[])).to.eql([1]);
        });
        it('Sum of normal arrays',()=>{
            expect(numberOperations.sumArrays([1,2,3],[1,2,3])).to.eql([2,4,6]);
            expect(numberOperations.sumArrays([-1,-2,-3],[1,2,3])).to.eql([0,0,0]);
            expect(numberOperations.sumArrays([0,1,2,3],[1,2,3])).to.eql([1,3,5,3]);
            expect(numberOperations.sumArrays([1,2,3],[0,1,2,3])).to.eql([1,3,5,3]);
            expect(numberOperations.sumArrays(['a','b','c'],['a','b','c'])).to.eql(['aa','bb','cc']);
            
        });

    })
})