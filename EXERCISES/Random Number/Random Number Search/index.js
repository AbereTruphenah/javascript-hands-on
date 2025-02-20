const myButton=document.getElementById('Btn');
const myLabel=document.getElementById('myLabel');
let max=30;
let min=21;
let randomNum;
myButton.onclick=function(){
    randomNum=Math.floor(Math.random()*(max-min))+min;//a random number in the range of 21-30
    myLabel.textContent=randomNum;
}