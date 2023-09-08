let screen = document.getElementById("screen");

function btnClick(value){
    screen.value += value;
}
function clearScreen(){
    screen.value = ""
}
function calcResult(){
    let result = eval(screen.value);
    screen.value = result;
}