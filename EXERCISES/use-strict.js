/*The "use strict" statement is placed at the beginning of the script, 
which applies strict mode to the entire script.
If it were placed inside a function, it would only apply to that function.
Many of the modern javascript features automatically apply strict mode*/
"use strict";

function myFunction() {
    // Trying to use a variable without declaring it will cause an error
    myVariable = 3.14; // This will throw a ReferenceError
    console.log(myVariable);
}

myFunction();