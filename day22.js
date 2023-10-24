var StockSpanner = function() {
  this.stack=[]
};

StockSpanner.prototype.next=function(price){
let span=1

while(this.stack.length>0 && this.stack[this.stack.length-1][0]<=price){
    span+=this.stack.pop()[1]
}
this.stack.push([price,span])
return span
}


// Usage:
var obj = new StockSpanner();
console.log(obj.next(100)); // return 1
console.log(obj.next(80));  // return 1
console.log(obj.next(60));  // return 1
console.log(obj.next(70));  // return 2
console.log(obj.next(60));  // return 1
console.log(obj.next(75));  // return 4
console.log(obj.next(85));  // return 6
