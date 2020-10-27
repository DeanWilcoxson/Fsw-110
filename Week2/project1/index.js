// Add an H1 Element to the HTML using only Javascript.
var newElement = document.createElement("h1");
newElement.textContent = "Welcome to my JS site";
document.body.append(newElement);
//Styling
newElement.style.color = "blue";
newElement.style.fontSize = "40px";
newElement.style.textDecoration = "underline";
newElement.style.textAlign = "center";
newElement.style.backgroundColor = "#8ad";


//Add a Paragraph Element to the HTML using only Javascript
var newParagraph = document.createElement("p");
newParagraph.textContent = "All of this was created with Javascript!";
document.body.append(newParagraph);
//Styling
newParagraph.style.color = "red";
newParagraph.style.textAlign = "center";
newParagraph.style.fontSize = "28px";
newParagraph.style.backgroundColor = "#bad";


//Create an Ordered List Element in the HTML using only Javascript
var newOrderedList = document.createElement("ol");
newOrderedList.textContent = "Are you ready for a list?";
document.body.append(newOrderedList);