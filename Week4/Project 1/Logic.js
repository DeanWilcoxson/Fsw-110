//Body Background Color
document.body.style.backgroundColor = "darkgrey";
/*Background color of squares/ What to do when the "mouseout" event happens*/
function regularBackground() {
    myHoverSquare.style.backgroundColor = "transparent";
    myHoverSquare.style.color = "black";
    myClickSquare.style.backgroundColor = "transparent";
    myClickSquare.style.color = "black";
    myClickSquare.style.border = "5px solid red";
    myDblClickSquare.style.backgroundColor = "transparent";
    myDblClickSquare.style.color = "black";
    myScrollSquare.style.backgroundColor = "transparent";
    myScrollSquare.style.color = "black";
}
//Create the event listeners for "hover"
var myHoverSquare = document.getElementById("hover");
myHoverSquare.addEventListener("mouseover", hoverColor);
document.addEventListener("keydown", function(event) {
    if (event.code == "KeyB") {
        myHoverSquare.style.backgroundColor = "blue";
        myHoverSquare.style.color = "white";
    }
});
//What to do when the "mouseover" happens
function hoverColor() {
    myHoverSquare.style.backgroundColor = "blue";
    myHoverSquare.style.color = "white";
}
//Create the event listeners for "click"
var myClickSquare = document.getElementById("click");
myClickSquare.addEventListener("mousedown", downColor);
myClickSquare.addEventListener("mouseup", upColor);
document.addEventListener("keydown", function(event) {
    if (event.code == "KeyR") {
        myClickSquare.style.backgroundColor = "red";
        myClickSquare.style.color = "white";
    } else if (event.code == "KeyY") {
        myClickSquare.style.backgroundColor = "yellow";
        myClickSquare.style.color = "black";
    }
});
//What to do when the "mousedown" happens
function downColor() {
    myClickSquare.style.backgroundColor = "red";
    myClickSquare.style.color = "white";
}
//What to do when the "mouseup" happens
function upColor() {
    myClickSquare.style.backgroundColor = "yellow";
    myClickSquare.style.color = "black";
    myClickSquare.style.border = "5px solid yellow";
}
//Create the event listeners for "dbl-click"
var myDblClickSquare = document.getElementById("dbl-click");
myDblClickSquare.addEventListener("dblclick", dblClickColor);
document.addEventListener("keydown", function(event) {
    if (event.code == "KeyG") {
        myDblClickSquare.style.backgroundColor = "green";
        myDblClickSquare.style.color = "white";
    }
});
//What to do when the "dblclick" happens
function dblClickColor() {
    myDblClickSquare.style.backgroundColor = "green";
    myDblClickSquare.style.color = "white";
}
//Create the event listeners for "scroll"
var myScrollSquare = document.getElementById("scroll");
document.addEventListener("wheel", scrollColor);
document.addEventListener("keydown", function(event) {
    if (event.code == "KeyO") {
        myScrollSquare.style.backgroundColor = "orange";
        myScrollSquare.style.color = "blue";
    }
});
//What to do when the "wheel" happens
function scrollColor() {
    myScrollSquare.style.backgroundColor = "orange";
    myScrollSquare.style.color = "blue";
}