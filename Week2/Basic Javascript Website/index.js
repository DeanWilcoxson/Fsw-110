//-----------------Body Styling------------------
document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80)";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";

//--------------------Header--------------------
//Create the <header></header> and save it inside a variable
var newHeader = document.createElement("header");

//Header Content
newHeader.textContent = "Basic Javascript Website";

//Append the Header to the Body
document.body.append(newHeader);

//Header Styling
newHeader.style.padding = "20px";
newHeader.style.fontSize = "50px";
newHeader.style.color = "#4ad";
newHeader.style.backgroundColor = "transparent";
newHeader.style.textAlign = "center";

//--------------------Navbar--------------------
//Create the <nav></nav> and save it inside a variable
var newNav = document.createElement("navbar");

//Create a <ul></ul> and save it inside a variable
var newNavList = document.createElement("ul");

//List Styling
newNavList.style.listStyleType = "none";
newNavList.style.display = "flex";
newNavList.style.justifyContent = "space-evenly";
newNavList.style.alignItems = "center";
newNavList.style.backgroundColor = "#4ad";
newNavList.style.border = "1px solid black";
newNavList.style.borderRadius = "3px";

// <li> #1 (Live Link)
//Create a <li></li> and save it inside a variable
var newItem = document.createElement("li");
//Create an <a></a> and save it inside a variable
var newLink = document.createElement("a");
//Declare the url for the <a></a> (Live Link!!! Google Images)
newLink.href = "https://www.google.com/imghp?hl=EN";
//Link Styling
newLink.style.fontSize = "15px";
newLink.style.color = "black";
newLink.style.textDecoration = "none";
//Link Content
newLink.textContent = "Google Images";
//Append Link to the Item
newItem.append(newLink);
//Append the <li></li> to The <ul></ul>
newNavList.append(newItem);

// <li> #2
//Create another <li></li> and save it inside a variable
var newItem2 = document.createElement("li");
//Create another <a></a> and save it inside a variable
var newLink2 = document.createElement("a");
//Declare the url for the Link
newLink2.href = "#";
//Link Styling
newLink2.style.fontSize = "15px";
newLink2.style.color = "black";
newLink2.style.textDecoration = "none";
//Link Content
newLink2.textContent = "About";
//Append <a></a> to the <li></li>
newItem2.append(newLink2);
//Append the <li></li> the The <ul></ul>
newNavList.append(newItem2);

// <li> #3
//Create another <li></li> and save it inside a variable
var newItem3 = document.createElement("li");
//Create another <a></a> and save it inside a variable
var newLink3 = document.createElement("a");
//Declare the url for the Link
newLink3.href = "#";
//Link Styling
newLink3.style.fontSize = "15px";
newLink3.style.color = "black";
newLink3.style.textDecoration = "none";
//Link Content
newLink3.textContent = "Contact";
//Append <a></a> to the <li></li>
newItem3.append(newLink3);
//Append the <li></li> the The <ul></ul>
newNavList.append(newItem3);

//Append the <ul></ul> to the <navbar></navbar>
newNav.append(newNavList);

//Append the Entire Nav to the Body
document.body.append(newNav);


//-----------------Unordered List-----------------

//Create the <ul></ul> and save it inside a variable
var myUnorderedList = document.createElement("ul");

//Unordered List Styling
myUnorderedList.style.listStyleType = "disc";
myUnorderedList.style.padding = "20px";
myUnorderedList.style.margin = "30px";
myUnorderedList.style.border = "1px solid black";
myUnorderedList.style.borderRadius = "15px";

//---List Item1
//Create the <li></li> and save it inside a variable
var listItemOne = document.createElement("li");
//List Item1 Content
listItemOne.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
//List Item1 Styling
listItemOne.style.border = "1px solid black";
listItemOne.style.borderRadius = "8px";
listItemOne.style.color = "white";
listItemOne.style.textAlign = "left";
listItemOne.style.padding = "20px";
listItemOne.style.backgroundColor = "#135";
//Append List Item1 to the Unordered List
myUnorderedList.append(listItemOne);

//---List Item2
//Create the <li></li> and save it inside a variable
var listItemTwo = document.createElement("li");
//List Item2 Content
listItemTwo.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
//List Item2 Styling
listItemTwo.style.border = "1px solid black";
listItemTwo.style.borderRadius = "8px";
listItemTwo.style.color = "white";
listItemTwo.style.backgroundColor = "#135";
listItemTwo.style.textAlign = "left";
listItemTwo.style.padding = "20px";
//Append List Item2 to the Unordered List
myUnorderedList.append(listItemTwo);

//---List Item3
//Create the <li></li> and save it inside a variable
var listItemThree = document.createElement("li");
//List Item3 Content
listItemThree.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
//List Item3 Styling
listItemThree.style.border = "1px solid black";
listItemThree.style.borderRadius = "8px";
listItemThree.style.textAlign = "left";
listItemThree.style.padding = "20px";
listItemThree.style.color = "white";
listItemThree.style.backgroundColor = "#135";
//Append List Item3 to the Unordered List
myUnorderedList.append(listItemThree);

//Append the whole Ordered list to the Body
document.body.append(myUnorderedList);

//--------------------Paragraph--------------------

//Create the <p></p> and save it inside a variable
var myParagraph = document.createElement("p");

//Paragraph Content
myParagraph.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

//Append the Paragraph to the Body
document.body.append(myParagraph);

//Paragraph Styling
myParagraph.style.padding = "30px";
myParagraph.style.border = " 1px solid black";
myParagraph.style.borderRadius = "15px";
myParagraph.style.margin = "70px";

//--------------------Footer--------------------

//Create the <footer></footer> and save it inside a variable
var newFooter = document.createElement("footer");

//Footer Content
newFooter.textContent = "\u00A9 2020 Webdev Student (Dean Wilcoxson)";

//Append the Footer to the Body
document.body.append(newFooter);

//Footer Styling
newFooter.style.backgroundColor = "transparent";
newFooter.style.textAlign = "center";
newFooter.style.margin = "100px";