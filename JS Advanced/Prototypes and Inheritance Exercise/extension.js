(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function (n) {
        const result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    }
    Array.prototype.take = function(n){
        const result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    }
    Array.prototype.sum = function(){
        let sum  = 0;
        this.forEach((el)=>{
            sum += el
        });
        return sum;
    }
    Array.prototype.average = function(){
        let sum  = 0;
        this.forEach((el)=>{
            sum += el
        });
        return sum / this.length
    }
})();




let arr = [1, 2, 3, 5, 6];
console.log(arr.average())