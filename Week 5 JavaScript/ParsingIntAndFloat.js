console.log(Number.parseInt("3.56",10))
console.log(Number.parseInt("abcdef",16))
console.log(Number.parseFloat("3.56",10))

//Use of 'toFixed' for Wrapping  a Number especially for currency
console.log("Wrapping a Number=3.5678 (to 2 decimal)")
var wrappedNumber=new Number(3.5678)
console.log(wrappedNumber.toFixed(2))
console.log(3.5678.toFixed(3))

var x=1/'hello';
console.log(x);
console.log(Number.NaN)
console.log(NaN);
console.log('Number x=',x,'is a Not a Number (true/false):',Number.isNaN(x))