//Arithmetic operators
let students = 80;
students = students + 1;//81
students = students - 1;//80
students = students * 2;//160
students = students / 4;//40
students = students ** 2;//exponents 1600
students = students % 2;//1600/2 rem=0
students++; //1
students--; //0
console.log(students); //0

//Operator precedence (),**,%*/,+-
let result=1+2*3+16;
console.log(result); //23
let output=2+(2*3)-16/4;
console.log(output); //4

//Assignment operators
let age = 60
age += 20; // same as age= age + 20 =80
age -= 1; //79
age *= 2; // 158
age **= 2; //24964
age /= 2; //12482
age %= 2; //0

// Comparison Operators
let num1 = 5;
let num2 = 10;
let str = "5";

console.log(num1==str); //equal value
console.log(num1===str); //equal value and equal type
console.log(num1!=num2); //not equal value
console.log(num1!==str) // not equal value or type
console.log(num1<num2); //less than
console.log(num2>num1) //greater than
console.log(num1>=num2) //greater than or equal to
console.log(num1<=num2) //less than or equal to

//Logical Operators (&&, ||, !)
console.log(num1<10&&num2<20)
console.log(num1<10||num2<10)
console.log(!num1===str)


//Bitwise Operators
console.log(5&1) //AND
console.log(5|1) //OR
console.log(~5) // NOT
console.log(5^1) // XOR
console.log(5<<1) //left shift
console.log(5>>1) //right shift
console.log(5>>>1) //unsigned right shift


