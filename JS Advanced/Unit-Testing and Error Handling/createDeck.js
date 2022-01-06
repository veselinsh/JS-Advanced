function createDeck(arr){
     console.log(arr.map(card => {
         const face = card.slice(0,-1);
         const suit = card.slice(-1);
         return createCard(face,suit);
        }).join(' '));
    function createCard(face,suit){
        const value = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const suits = {
            'S': '\u2660', 
            'H': '\u2665', 
            'D': '\u2666', 
            'C': '\u2663', 
        }
            if(!value.includes(face)|| Object.keys(suits).includes(suit) ==  false){
                throw new Error('Invalid card: ' + face + suit);
    
            }
         return {
             face,
             suit: suits[suit],
             toString() {
                 return this.face + this.suit;
             }
         }
     
            
    }
}
console.log(createDeck(['AS', '10D', 'KH', '2C']));
console.log(createDeck(['5S', '3D', 'QD', '1C']));