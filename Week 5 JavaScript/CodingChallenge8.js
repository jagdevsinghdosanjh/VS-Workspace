/**Description
Write a program to do the below operations-

Consider the given values for the below operations 5,78,23,41,67,84,22,10,1.
From the given values find the minimum and maximum number out of them without using sorting or sort method and also without looping over them.
Write a method to find the mean value(in decimal point if any) of the above numbers and print the ceil of that value.
*/
var sum=0;
var mean;
var i=0
var numbers=[5,78,23,41,67,84,22,10,1]
console.log('Min=',Math.min.apply(null,numbers));
console.log('Max=',Math.max.apply(null,numbers));
const average=function (numbers)
{
    //Find the sum
    var sum = 0;
    for(var i in numbers)
    {
        sum += numbers[i];
    }
    //Get the length of the arrayvar 
    numbersCnt = numbers.length;
    //Return the average /  mean.
    return (sum / numbersCnt);
}
console.log("Mean of the values: ",average(numbers))
console.log("Ceil value of mean is : " , Math.ceil(average(numbers)));
