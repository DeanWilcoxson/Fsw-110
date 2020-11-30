/* jshint esversion: 6  */
// make the box disappear when the user clicks it
var redBox = document.querySelector("div");
redBox.addEventListener("click", function() {
    redBox.className = "none";
});