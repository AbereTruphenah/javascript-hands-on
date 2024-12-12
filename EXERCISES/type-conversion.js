//Type Conversion-changing data type of a value to another

let num=window.prompt("How many are you?"); // input=120
num+=1;
console.log(num,typeof num); // output=1201 since num is a string

//convert to number
let amount=window.prompt("How much do you have?")
amount=Number(amount);
amount+=1;
console.log(amount,typeof amount);


let a="pizza";
let b="pizza";
let c="pizza";

a=Number(a); // converts to number
b=String(b); // converts to string
c=Boolean(c); // converts to boolean

console.log(a,typeof a); // Returns NaN(Not a Nuber)
console.log(b,typeof b);
console.log(c,typeof c);