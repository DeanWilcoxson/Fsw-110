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
newParagraph.style.textTransform = "uppercase";

//Create an Ordered List Element in the HTML using only Javascript
var newOrderedList = document.createElement("ol");
newOrderedList.textContent = "Are you ready for a list?";
newOrderedList.style.textAlign = "center";

//List Item1
var newLi = document.createElement("li");
newLi.textContent = "I'm a List item";
newLi.style.textAlign = "center";
newOrderedList.append(newLi);

//List Item2
var newLi2 = document.createElement("li");
newLi2.textContent = "I'm another List item";
newLi2.style.textAlign = "center";
newOrderedList.append(newLi2);

//List Item3
var newLi3 = document.createElement("li");
newLi3.textContent = "I'm the Last List item";
newLi3.style.textAlign = "center";
newOrderedList.append(newLi3);

//Append the whole Ordered list to the Body
document.body.append(newOrderedList);