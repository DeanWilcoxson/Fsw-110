//Body Background Color
document.body.style.backgroundColor = "darkgrey";

//Background color of elements
//What to do when the "mouseout" event happens
function regularBackground() {
    myHoverSquare.style.backgroundColor = "transparent";
    myHoverSquare.style.color = "black";
    myClickSquare.style.backgroundColor = "transparent";
    myClickSquare.style.color = "black";
    myDblClickSquare.style.backgroundColor = "transparent";
    myDblClickSquare.style.color = "black";
    myScrollSquare.style.backgroundColor = "transparent";
    myScrollSquare.style.color = "black";
}

//Create the event listeners for "hover"
var myHoverSquare = document.getElementById("hover");
myHoverSquare.addEventListener("mouseover", hoverColor);
myHoverSquare.addEventListener("keydown", hoverColor);

//What to do when the "mouseover" happens
function hoverColor() {
    myHoverSquare.style.backgroundColor = "blue";
    myHoverSquare.style.color = "white";
}

//Create the event listeners for "click"
var myClickSquare = document.getElementById("click");
myClickSquare.addEventListener("mousedown", downColor);
myClickSquare.addEventListener("mouseup", upColor);

//What to do when the "mousedown" happens
function downColor() {
    myClickSquare.style.backgroundColor = "red";
    myClickSquare.style.color = "white";
}

//What to do when the "mouseup" happens
function upColor() {
    myClickSquare.style.backgroundColor = "yellow";
    myClickSquare.style.color = "black";
}

//Create the event listeners for "dbl-click"
var myDblClickSquare = document.getElementById("dbl-click");
myDblClickSquare.addEventListener("dblclick", dblClickColor);

//What to do when the "dblclick" happens
function dblClickColor() {
    myDblClickSquare.style.backgroundColor = "green";
    myDblClickSquare.style.color = "white";
}

//Create the event listeners for "scroll"
var myScrollSquare = document.getElementById("scroll");
document.addEventListener("wheel", scrollColor);

//What to do when the "wheel" happens
function scrollColor() {
    myScrollSquare.style.backgroundColor = "orange";
    myScrollSquare.style.color = "blue";
}