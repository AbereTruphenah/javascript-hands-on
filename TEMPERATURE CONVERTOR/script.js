// Get references to the HTML elements by their IDs
const textBox = document.getElementById("textBox"); // Input field for temperature value
const toCelsius = document.getElementById("toCelsius"); // Radio button for Celsius conversion
const toFahrenheit = document.getElementById("toFahrenheit"); // Radio button for Fahrenheit conversion
const result = document.getElementById("result"); // Element to display the result

// Variable to store the converted temperature
let temp;
//Function to convert temperature based on selected unit
function convert() {
    //check if Fahrenheit button is selected
    if (toFahrenheit.checked) {
        //convert the input valueto a numbner
        temp = Number(textBox.value);
        // Covert input to Fahrenheit
        temp = temp * 9 / 5 + 32;
        //Display output with no decimal places
        result.textContent = temp.toFixed() + "F";


    }
    //Check if Celsius button is selected
    else if (toCelsius.checked) {
        //Convert input value to number
        temp = Number(textBox.value);
        // Convert Fahrenheit to Celsius
        temp = (temp - 32) * (5 / 9);
        //Display result with no decimal places
        result.textContent = temp.toFixed() + "C";

    }
    // If no unit is selected, return an error message
    else {
        result.textContent = "Select a unit";
    }
}