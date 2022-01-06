function cards(face,suit){
    const value = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suits = {
        'S': '\u2660', 
        'H': '\u2665', 
        'D': '\u2666', 
        'C': '\u2663', 
    }
        if(!value.includes(face)){
            throw new Error('Invalid face ' + face);

        }
        if(Object.keys(suits).includes(suit) ==  false){
            throw new Error('Invalid suit '+ suit);
        }
     return {
         face,
         suit: suits[suit],
         toString() {
             return this.face + this.suit;
         }
     }
 
        
}
const card1 = cards('A', 'S');
console.log(card1.toString());
const card2 = cards('10', 'H');
console.log(card2.toString());
const card3 = cards('1', 'C');
console.log(card3.toString());
const card4 = cards('1', 'q');
console.log(card4.toString());