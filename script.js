const display =document.getElementById('display');
display.value="";

function appendValue(value){
    display.value+=value;
}
function clearDisplay(){
    display.value="";
}
function showResult(){
try{
    display.value=eval(display.value);
}
catch{
    display.value="Error! ";
}
}