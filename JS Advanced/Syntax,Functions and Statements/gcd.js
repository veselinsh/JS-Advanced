function gcd(x,y){
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    return x;
}
console.log(gcd(15, 5)); 