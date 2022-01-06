const { expect } = require('chai');
const { lookupChar} = require('./charLookup');

describe('Test charLookUp' , ()=>{
    it('Invalid input', ()=>{
        expect(lookupChar([],5)).to.be.undefined;
        expect(lookupChar({},5)).to.be.undefined;
        expect(lookupChar(5,5)).to.be.undefined;
        expect(lookupChar('',{})).to.be.undefined;
        expect(lookupChar('',[])).to.be.undefined;
        expect(lookupChar('','5')).to.be.undefined;
    });
    it('Inalid index' ,()=>{
        expect(lookupChar('str',4)).to.be.equal('Incorrect index');
        expect(lookupChar('str',-2)).to.be.equal('Incorrect index');
        expect(lookupChar('str','str'.length)).to.be.equal('Incorrect index');
    });
    it('If two params are correct' ,()=>{
        expect(lookupChar('str',2)).to.be.equal('r');
    });
})