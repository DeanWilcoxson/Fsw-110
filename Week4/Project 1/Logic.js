var mySquare = document.getElementById("square");
mySquare.style.border = "3px dotted grey";
mySquare.addEventListener("mouseover", function() {
    mySquare.style.backgroundColor = 'blue';
});
mySquare.addEventListener("mousedown", function() {
    mySquare.style.backgroundColor = 'red';
});
mySquare.addEventListener("mouseup", function() {
    mySquare.style.backgroundColor = 'yellow';
});
mySquare.addEventListener("dblclick", function() {
    mySquare.style.backgroundColor = 'green';
});
window.addEventListener("wheel", function() {
    mySquare.style.backgroundColor = 'orange';
});
document.addEventListener("keydown", function(event) {
    if (event.code == 'KeyB') {
        mySquare.style.backgroundColor = 'blue';
    } else if (event.code == 'KeyR') {
        mySquare.style.backgroundColor = 'red';
    } else if (event.code == 'KeyY') {
        mySquare.style.backgroundColor = 'yellow';
    } else if (event.code == 'KeyG') {
        mySquare.style.backgroundColor = 'green';
    } else if (event.code == 'KeyO') {
        mySquare.style.backgroundColor = 'orange';
    } else { console.log("Acceptable keys include: b, r, y, g, o"); }
});