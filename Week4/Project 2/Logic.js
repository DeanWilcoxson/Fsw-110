//=======================================Addition Block===========================================
function addTwo(num1, num2) {
    var sum = +num1 + +num2;
    return (sum);
}
var addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function() {
    var num1 = document.getElementById("add1").value;
    var num2 = document.getElementById("add2").value;
    var addCalc = document.getElementById("calculation");
    var sum = addTwo(num1, num2);
    addCalc.textContent = sum;
});

//=======================================Subtraction Block========================================
function subTwo(num1, num2) {
    var result = num1 - num2;
    return (result);
}
var subBtn = document.getElementById("subbtn");
subBtn.addEventListener("click", function() {
    var num1 = document.getElementById("sub1").value;
    var num2 = document.getElementById("sub2").value;
    var subCalc = document.getElementById("calculation");
    var result = subTwo(num1, num2);
    subCalc.textContent = result;
});

//======================================Multiplication Block======================================
function mulTwo(num1, num2) {
    var answer = num1 * num2;
    return (answer);
}
var mulBtn = document.getElementById("mulbtn");
mulBtn.addEventListener("click", function() {
    var num1 = document.getElementById("mul1").value;
    var num2 = document.getElementById("mul2").value;
    var mulCalc = document.getElementById("calculation");
    var answer = mulTwo(num1, num2);
    mulCalc.textContent = answer;
});