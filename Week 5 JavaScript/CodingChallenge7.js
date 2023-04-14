/*Description
Write a program to do the below operations in js-

Create a date object of the date (6 Jun, 2021)
Create a date object of the year 2000 to do the next operation.
Check whether the given date(6 Jun,2021) is after or in the year 2000.
*/

var baseDate = new Date(2000, 0, 1); 
var date1 = new Date(1999, 5, 6); 
if (date1 > baseDate) 
console.log("Given date is after or in the 2000 year")
else
console.log("Given date is not after or in the 2000 year")