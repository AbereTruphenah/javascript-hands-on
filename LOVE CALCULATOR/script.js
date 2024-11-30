function calculateLove() {

    const name1 = document.getElementById("name1").value.trim();//.trim() removes white spaces at the beginning and end.
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names");
    } else {
        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2}'s Love Percentage is: ${lovePercentage}`;//use backticks(`)
        if (lovePercentage < 30) {
            result.innerHTML += "<br> Not a Great match. keep looking!"
        }

        else if (lovePercentage >= 30 && lovePercentage < 70) {
            result.innerHTML += "<br> There is potential. Give it a try!"
        }

        else {
            result.innerHTML += "<br> Great Match! Love is in the Air!"
        }

    }
}