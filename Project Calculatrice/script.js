var Elementnumber1 = document.getElementById("number1");
var Elementnumber2 = document.getElementById("number2");
var Elementresult = document.getElementById("result");


function add() {
    var number1 = parseInt(Elementnumber1.value);
    var number2 = parseInt(Elementnumber2.value);
    var result = number1 + number2;
  
    Elementresult.textContent = result;  
  }


function reset(){
    Elementresult.textContent = 0;
}