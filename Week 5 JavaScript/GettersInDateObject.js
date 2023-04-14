var today=new Date();
console.log(today);
var milleniumStart=new Date(2000,0,1);
console.log(milleniumStart);

today.setDate(today.getDate()+1);
console.log(today);

var July31=new Date(2000, 6,31,5);
console.log(July31);

// July31.setDate(July31.getDate()+1);
console.log(July31)

console.log(July31.getMonth(July31));

console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay());
