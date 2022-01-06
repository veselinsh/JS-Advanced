class List{
    constructor(){
      this.size  = 0;
      this.numbers = [];
    }
    add(element){
      this.numbers.push(element)
      this.size += 1;
      this.numbers.sort((a,b)=> a - b);
      return this.numbers
    }
    remove(index){
      this.outOfBoundere();
      this.numbers.splice(index,1);
      this.size -= 1;
    }
    get(index){
        this.outOfBoundere(index);
        return this.numbers[index];
    }
    outOfBoundere(index){
        if(index < 0 || index >= this.numbers.length){
            throw new Error('Invalid index');
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
