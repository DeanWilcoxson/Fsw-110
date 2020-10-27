/* Add an H1 Element to the HTML using only Javascript.
 */
var newElement = document.createElement("h1");
newElement.textContent = "Welcome to my JS site";
document.body.append(newElement);

/*Add a Paragraph Element to the HTML using only Javascript
 */
var newParagraph = document.createElement("p");
newParagraph.textContent = "All of this was created with Javascript";
document.body.append(newParagraph);

/*Create an Ordered List Element in the HTML using only Javascript*/
var newOrderedList = document.createElement("ol");
newOrderedList.textContent = "Are you ready for a list?";
document.body.append(newOrderedList);