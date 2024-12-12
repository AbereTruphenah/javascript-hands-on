const textBox = document.getElementById("textBox");
const toCelcius = document.getElementById("toCelcius");
const toFahrenhelt = document.getElementById("toFahrenhelt");
const result = document.getElementById("result");

let temp;
function convert() {
    if (toFahrenhelt.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed() + "F";


    }
    else if (toCelcius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed() + "C";

    }
    else {
        result.textContent = "Select a unit";
    }
}