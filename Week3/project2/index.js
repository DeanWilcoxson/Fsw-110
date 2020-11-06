/*Step 2. In the JS file, create a list of 5 H2 elements on the DOM using a 
for loop (Hint: this was covered in the previous assignment). Give them
whatever text you would like.*/
for (i = 0; i < 5; i++) {
    var myNewElement = document.createElement("h2");
    myNewElement.textContent = "Play the Award-Winning Game Sekiro: Shadows Die Twice! Its Fun!";
    /*Step3. Using the .style property, edit the element’s styles in your js*/
    myNewElement.style.color = "cornflowerblue";
    myNewElement.style.fontSize = "20px";
    myNewElement.style.fontWeight = "lighter";
    myNewElement.style.fontFamily = "sans-serif";
    document.body.append(myNewElement);
}
/*Step5. Back in your JS, add that class to the elements being created 
using classList.*/
var myNewClass = document.getElementsByTagName("h2");
for (i = 0; i < myNewClass.length; i++) {
    myNewClass[i].classList.add("border");
}