const cinema = require('./cinema');
const {expect} = require('chai');

describe('Cinema',()=>{
    describe('showMovies',()=>{
       it('Test length of array',()=>{
         expect(cinema.showMovies(['King Kong'])).to.deep.equal('King Kong');
         expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.deep.equal('King Kong, The Tomorrow War, Joker');
       });
       it('If length of array is 0',()=>{
        expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
      });
    });
    describe('ticketPrice',()=>{
        it('valid input',()=>{
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it('Invalid input',()=>{
            expect(()=> cinema.ticketPrice('a')).to.throw('Invalid projection type.');
       });
     });
     describe('swapSeatsInHall',()=>{
          it('Valid input,succesful change',()=>{
             expect(cinema.swapSeatsInHall(4,5)).to.equal('Successful change of seats in the hall.');
             expect(cinema.swapSeatsInHall(1,20)).to.equal('Successful change of seats in the hall.');
          });
          it('Invalid input if one of numbers not exist',()=>{
            expect(cinema.swapSeatsInHall(4)).to.equal('Unsuccessful change of seats in the hall.');
         });
         it('If one of numbers is not a number',()=>{
            expect(cinema.swapSeatsInHall('4',5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall( 4,'5')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall( {},5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall( 4,{})).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall( [],4)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall( 4,[])).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall( null,[])).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall( 4,null)).to.equal('Unsuccessful change of seats in the hall.');
         });
         it('If one of numbers is bigger than 20 and smaller than 0',()=>{
             expect(cinema.swapSeatsInHall(4,21)).to.equal('Unsuccessful change of seats in the hall.');
             expect(cinema.swapSeatsInHall(21,4)).to.equal('Unsuccessful change of seats in the hall.');
             expect(cinema.swapSeatsInHall(-1,4)).to.equal('Unsuccessful change of seats in the hall.');
             expect(cinema.swapSeatsInHall(4,-1)).to.equal('Unsuccessful change of seats in the hall.');
             expect(cinema.swapSeatsInHall(0,5)).to.equal('Unsuccessful change of seats in the hall.');
             expect(cinema.swapSeatsInHall(4,0)).to.equal('Unsuccessful change of seats in the hall.');
         });
        
     });
});
//