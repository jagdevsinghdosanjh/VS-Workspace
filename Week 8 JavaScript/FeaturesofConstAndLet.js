//let defined variables are block scoped and cannot be hoisted 
console.log(x)//it will throw an error if we comment line no 3 but will work with it as uncommented
// var x=1;
// let x=1
console.log(x)
x=2 //can be used and execute without any error
// let x=2 //it will throw an error. Try using uncommenting this line of code
//and 
// var x=2 //it will also throw an error. Try using uncommenting this line of code
console.log(x)
//with x having new value error will be caught
//also these cannot be set as a property of window
//const variables when declared should be intialized else error will be thrown
//also the const variables cannot be re-intialized with another value and also these cannot be set as a property of window

//const objects cannot be re-assigned another property value
//however we can change the property of const object
