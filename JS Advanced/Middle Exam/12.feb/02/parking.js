class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    addCar(carModel, carNumber) {
        if (this.capacity < this.vehicles.length) {
            throw new Error('Not enough parking space.');
        }
        this.vehicles.push({ carModel, carNumber, payed: false });
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar(carNumber) {
        const match = this.vehicles.find(s => s.carNumber === carNumber);
        if (match === undefined) {
            throw new Error('The car, you\'re looking for, is not found.');
        }
        if (match.payed === false) {
            return `${carNumber} needs to pay before leaving the parking lot.`
        }
        const index = this.vehicles.indexOf(match);
        this.vehicles.splice(index, 1);
        return `${carNumber} left the parking lot.`;
    }
    pay(carNumber) {
        const match = this.vehicles.find(s => s.carNumber === carNumber);
        if (match === undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if(match.payed === true){
            return `${carNumber}'s driver has already payed his ticket.`;
        } 
        match.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;

    }
    getStatistics(carNumber) {
        let result = '';
        if(carNumber === undefined){
            result += `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`;
            this.vehicles.sort((a,b) => a.carModel.localeCompare(b.carModel));
            for(const car of this.vehicles){
                let [carModel,carNumber,isPayed] = Object.values(car);
                if(isPayed === true){
                    isPayed = 'Has payed';
                }else{
                    isPayed = 'Not payed';
                }
                result += `${carModel} == ${carNumber} - ${isPayed}`;
            }
        }else{
        const match = this.vehicles.find(s => s.carNumber === carNumber);
        let [model,number,payed] = Object.values(match);
        if(payed === true){
            payed = 'Has payed';
        }else{
            payed = 'Not payed';
        }
        result += `${model} == ${number} - ${payed}`
    }
    return result;
  }
}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
