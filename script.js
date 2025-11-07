const display =document.getElementById('display');
display.value="0";

function appendValue(value){
    display.value+=value;
}
function clearDisplay(){
    display.value="0";
}
function backspace(){
    display.value= display.value.slice(0,-1);
}
function showResult(){
try{
    display.value=eval(display.value);
}
catch{
    display.value="Error! ";
}
}
