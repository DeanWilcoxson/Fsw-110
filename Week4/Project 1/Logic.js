document.body.style.backgroundColor = "darkgrey";

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

var myHoverSquare = document.getElementById("hover");
myHoverSquare.addEventListener("mouseover", hoverColor);
myHoverSquare.addEventListener("keydown", hoverColor);

function hoverColor() {
    myHoverSquare.style.backgroundColor = "blue";
    myHoverSquare.style.color = "white";
}

var myClickSquare = document.getElementById("click");
myClickSquare.addEventListener("mousedown", downColor);
myClickSquare.addEventListener("mouseup", upColor);

function downColor() {
    myClickSquare.style.backgroundColor = "red";
    myClickSquare.style.color = "white";
}

function upColor() {
    myClickSquare.style.backgroundColor = "yellow";
    myClickSquare.style.color = "black";
}

var myDblClickSquare = document.getElementById("dbl-click");
myDblClickSquare.addEventListener("dblclick", dblClickColor);

function dblClickColor() {
    myDblClickSquare.style.backgroundColor = "green";
    myDblClickSquare.style.color = "white";
}

var myScrollSquare = document.getElementById("scroll");
document.addEventListener("wheel", scrollColor);

function scrollColor() {
    myScrollSquare.style.backgroundColor = "orange";
    myScrollSquare.style.color = "blue";
}