const library = require('./library');
const {expect} = require('chai');

describe('Library', ()=>{
    describe('calcPriceOfBook ',()=>{
        it('Invalid input',()=>{
            expect(()=>library.calcPriceOfBook(5,5)).to.throw('Invalid input');
            expect(()=>library.calcPriceOfBook({},5)).to.throw('Invalid input');
            expect(()=>library.calcPriceOfBook([],5)).to.throw('Invalid input');
            expect(()=>library.calcPriceOfBook(null,5)).to.throw('Invalid input');
            expect(()=>library.calcPriceOfBook('','')).to.throw('Invalid input');
            expect(()=>library.calcPriceOfBook('',{})).to.throw('Invalid input');
            expect(()=>library.calcPriceOfBook('',[])).to.throw('Invalid input');
            expect(()=>library.calcPriceOfBook('',null)).to.throw('Invalid input');
        });
        it('If the year is less or equal to 1980',()=>{
           expect(library.calcPriceOfBook("Titanic",1979)).to.equal('Price of Titanic is 10.00');
           expect(library.calcPriceOfBook("Titanic",1980)).to.equal('Price of Titanic is 10.00');
        });
        it('If the year is bigger than 1980',()=>{
            expect(library.calcPriceOfBook("Titanic",1981)).to.equal('Price of Titanic is 20.00');
            expect(library.calcPriceOfBook("Titanic",2001)).to.equal('Price of Titanic is 20.00');
         });
    });
    describe('findBook',()=>{
        it('If length of array is 0',()=>{
          expect(()=>library.findBook([],'Troy')).to.throw('No books currently available');
        });
        it('If we find book in array',()=>{
          expect(library.findBook(['Troy','Torronto'],'Torronto')).to.equal('We found the book you want.');
        });
        it('If we dont find book in array',()=>{
            expect(library.findBook(['Troy','Torronto'],'Toonto')).to.equal('The book you are looking for is not here!');
        });
    })
    describe('arrangeTheBooks',()=>{
        it('Invalid input',()=>{
            expect(()=>library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(()=>library.arrangeTheBooks([])).to.throw('Invalid input');
            expect(()=>library.arrangeTheBooks({})).to.throw('Invalid input');
            expect(()=>library.arrangeTheBooks('')).to.throw('Invalid input');
        });
        it('If we correctly arrange books',()=>{
           expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
           expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');
           expect(library.arrangeTheBooks(15)).to.equal('Great job, the books are arranged.');
        });
        it('If we dont arrange books correctly',()=>{
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
         });
    })
});
