class Person{
    constructor(name,age){
       this.name = name;
       this.age = age;
    }
    sayHello(){
        console.log(`${this.name} says hi,I am ${this.age}`);
    }
    static cheer(){
        console.log('Woo hoo');
        console.log(this.someStaticMethod());
    }
    static someStaticMethod(){
        return 10
    }
    static compareTo(a,b){
        return a.age - b.age;
    }
}
const person1 = new Person('George',23);
const person2 = new Person('John',18);
const person3 = new Person('Mary',24);
console.log(person1);
console.log(person2);
Person.cheer();
const people = [person1,person2,person3];
people.sort(Person.compareTo);
console.log(people);