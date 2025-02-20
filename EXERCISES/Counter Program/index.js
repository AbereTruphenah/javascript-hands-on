const countValue=document.getElementById('countValue');
const decreaseBtn=document.getElementById('decreaseBtn');
const resetBtn=document.getElementById('resetBtn');
const increaseBtn=document.getElementById('increaseBtn');
const count=0;

//Decrease Button
decreaseBtn.onclick=function(){
    count--;
    countValue.textContent=count;
}
//Reset Button
resetBtn.onclick=function(){
    count=0;
    countValue.textContent=count;
}
//Increase Button
increaseBtn.onclick=function(){
    count++;
    countValue.textContent=count;
}
