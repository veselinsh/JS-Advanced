class Stringer{
    constructor(innerString,innerLength){
       this.innerString = innerString;
       this.innerLength = innerLength;
       this.temporaryString = innerString;
    }
    increase(length){
        if(this.innerLength < length){
            length = this.innerLength;
        }
      this.temporaryString  += this.innerString.slice(0,length);
        
    }
    decrease(length){
        let result;
      if(this.innerLength < length){
        this.temporaryString = '';
      }else{
          result = this.innerLength - length;
          this.temporaryString = this.temporaryString.slice(0,result);
      }
    }
    toString(){
        if(this.temporaryString.length === 0){
            return this.temporaryString + '...';
        }else if(this.temporaryString === this.innerString){
            return this.temporaryString;
        }else{
            return this.temporaryString + '...';
        }
    }
}
let test = new Stringer("Viktor", 6);
console.log(test.toString()); // Test

test.decrease(0);
console.log(test.toString()); // Te...

test.decrease(0);
console.log(test.toString()); // ...

test.increase(0); 
console.log(test.toString()); // Test
