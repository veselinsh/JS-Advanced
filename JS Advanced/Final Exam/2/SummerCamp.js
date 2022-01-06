class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
       const values = Object.keys(this.priceForTheCamp).find(s=>s === condition);
       const match = this.listOfParticipants.some(s=> s.name === name);
       if(values === undefined){
           throw new Error('Unsuccessful registration at the camp.');
       }
       if(match){
           return `The ${name} is already registered at the camp.`;
       }
       if(this.priceForTheCamp[condition] > money){
           return 'The money is not enough to pay the stay at the camp.'
       }
       this.listOfParticipants.push({name, condition, power: 100, wins: 0});
       return `The ${name} was successfully registered.`
    }
    unregisterParticipant(name) {
        const match = this.listOfParticipants.find(s=> s.name === name);
        if(match === undefined){
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        const index = this.listOfParticipants.indexOf(match);
        this.listOfParticipants.splice(index,1);
        return `The ${name} removed successfully.`;
    }
    timeToPlay(typeOfGame, participant1, participant2) {
      const match = this.listOfParticipants.find(s=>s.name === participant1);
      if(typeOfGame === 'WaterBalloonFights'){
      const found = this.listOfParticipants.find(s=>s.name === participant2);
      //maybe error
      if(match === undefined || found === undefined){
          throw new Error('Invalid entered name/s.');
      }
      if(match.condition !== found.condition){
          throw new Error('Choose players with equal condition.');
      }
      if(match.power > found.power){
          match.wins += 1;
          return `The ${match.name} is winner in the game ${typeOfGame}.`
      }else if(match.power < found.power){
          found.wins += 1;
          return `The ${found.name} is winner in the game ${typeOfGame}.`
      }else{
          return 'There is no winner.';
      }
      }else if(typeOfGame === 'Battleship'){
        if(match === undefined){
          throw new Error('Invalid entered name/s.');
        }
        match.power += 20;
        return `The ${participant1} successfully completed the game ${typeOfGame}.`;
    }
    }
    toString() {
      let length = this.listOfParticipants.length;
       let result = `${this.organizer} will take ${length} participants on camping to ${this.location}\n`;
       let index = 0
       let participantString = '';
       this.listOfParticipants.sort((a,b)=> b.wins - a.wins);
      for(const participant of this.listOfParticipants){
         index += 1;
         if(length === index){
             participantString += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`;
         }else{
            participantString += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`;

         }
      }
      result += participantString;
      return result;
    }
}
let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
console.log(camp.registerParticipant('Petar Petarson', 'child', 300), "The Petar Petarson was successfully registered.");
console.log(camp.registerParticipant('Sara Dickinson', 'child', 200), "The Sara Dickinson was successfully registered.");
console.log(camp.timeToPlay('Battleship', 'Sara Dickinson'), "The Sara Dickinson successfully completed the game Battleship.");
console.log(camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson','Petar Petarson'), "The Sara Dickinson is winner in the game WaterBalloonFights.");
console.log(camp.toString());


