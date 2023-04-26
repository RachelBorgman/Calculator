var displayDiv = document.querySelector("#display");
var num1='';
var num2='';
var operation = '';

function press(btn){
    if (displayDiv.innerText == 0){
        displayDiv.innerText = btn;
    }
    else if(displayDiv.innerText == '+'|| displayDiv.innerText == '-'|| displayDiv.innerText == '/'|| displayDiv.innerText == '*'){
        displayDiv.innerText = btn;
    }
    else(displayDiv.innerText = displayDiv.innerText + btn);
}

function setOP(opBtn){
    num1 = Number(displayDiv.innerText);
    operation = opBtn;
    displayDiv.innerText = opBtn;
}

function clr(){
    displayDiv.innerText = 0;
}

function calculate(){
    num2 = Number(displayDiv.innerText);
    var total = num1+operation+num2;
    displayDiv.innerText = eval(total);
}