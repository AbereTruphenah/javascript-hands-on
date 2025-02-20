// Get references to the HTML elements by their IDs
const textBox = document.getElementById("textBox");// Input field for temperature value
const toCelcius = document.getElementById("toCelcius");// Radio button for Celcius conversion
const toFahrenhelt = document.getElementById("toFahrenhelt");// Radio button for Fahrenheit conversion
const result = document.getElementById("result");// Element to display the result

let temp;// Variable to store the converted temperature
//Function to convert temperature based on selected unit
function convert() {
    //check if Fahrenheit button is selected
    if (toFahrenhelt.checked) {
        //convert the input valueto a numbner
        temp = Number(textBox.value);
        // Covert input to FaHrenHeit
        temp = temp * 9 / 5 + 32;
        //Display output with no decimal places
        result.textContent = temp.toFixed() + "F";


    }
    //Check if Celcius button is selected
    else if (toCelcius.checked) {
        //Convert input value to number
        temp = Number(textBox.value);
        // Convert Fahrenheit to Celcius
        temp = (temp - 32) * (5 / 9);
        //Display result with no decimal places
        result.textContent = temp.toFixed() + "C";

    }
    // If no unit is selected, return an error message
    else {
        result.textContent = "Select a unit";
    }
}