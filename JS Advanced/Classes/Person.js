class Person{
    constructor(firstName,secondName,age,email){
       this.firstName = firstName;
       this.secondName = secondName;
       this.age = age;
       this.email = email;
    }
    toString(){
        return `${this.firstName} ${this.secondName} (age: ${this.age}, email: ${this.email})`;
    }
}
const person1 = new Person('Peter','Shopov',23,'peter@shopov');