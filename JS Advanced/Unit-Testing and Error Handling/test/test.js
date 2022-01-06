const expect = require("chai").expect;
const sum = require('./num');
describe('Demo Test',()=>{
    it('Passing Test',()=>{
       expect(sum(1,2)).to.be.equal(3)
    })
});