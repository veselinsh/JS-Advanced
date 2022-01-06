class Bank {
    constructor(bankName) {
      this.bankName = bankName;
      this.allCustomers = [];
      this._operations = {};
    }
    newCustomer(customer) {
      const match = this.allCustomers.some(s=>s.firstName === customer.firstName);
      if(match){
          throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
      }
      this.allCustomers.push(customer);
      let personalId = customer.personalId;
     
      this._operations.push(personalId);
      return customer;
    }
    depositMoney(personalId, amount) {
      const match = this.allCustomers.find(s=>s.personalId === personalId);
      if(match === undefined){
        throw new Error(`We have no customer with this ID!`);
      }
      if(match.totalMoney === undefined){
          match.totalMoney = 0;   
      }
      match.totalMoney += Number(`${amount}`);
      this._operations.push('deposit');
      return `${match.totalMoney}$`
    }
    withdrawMoney(personalId, amount) {
        const match = this.allCustomers.find(s=>s.personalId === personalId);
        if(match === undefined){
          throw new Error(`We have no customer with this ID!`);
        }
        if(match.totalMoney < amount){
            throw new Error(`${match.firstName} ${match.lastName} does not have enough money to withdraw that amount!`)
        }
        match.totalMoney -= amount;
        this._operations.push('withdraw');
        return `${match.totalMoney}$`
    }
    customerInfo(personalId) {
        const match = this.allCustomers.find(s=>s.personalId === personalId);
        const findCommands = this._operations.find(s=> s.personalId === match.personalId);
        let result = '';
        if(match === undefined){
            throw new Error('We have no customer with this ID!');
        }else{
      //       result += `Bank name: ${this.bankName}\n
      //  Customer name: ${match.firstName} ${match.lastName}\n
      //  Customer ID: ${match.personalId}\n
      //  Total Money: ${match.totalMoney}$\n`
      //       if(findCommands !== undefined){
      //           let length = findCommands.personalId.length
      //       for(let i = length-1;i >= 0;i--){
      //         if(findCommands.personalId[i] === 'deposit'){
      //            result += `${length}. ${firstName} ${lastName} made deposit of ${amount}$!`
      //         }else{
      //           result += `${length}. ${firstName} ${lastName} withdrew ${amount}$!`
      //         }
      //       } 
      //       }
          
        }
        return result;
    }

}
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

