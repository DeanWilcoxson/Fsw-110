//-----------------Body Styling------------------
document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80)";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";

//--------------------Header--------------------

//Create the <h1></h1> and save it inside a variable
var newHeader = document.createElement("h1");

//Header Content
newHeader.textContent = "Basic Javascript Website";

//Append the H1 to the Body
document.body.append(newHeader);

//Header Styling
newHeader.style.color = "#4ad";
newHeader.style.backgroundColor = "transparent";
newHeader.style.textAlign = "center";

//--------------------Navbar--------------------

//Create the <nav></nav> and save it inside a variable
var newNav = document.createElement("nav");

//Navbar Content
newNav.textContent = "Nav1";

//Append the Nav to the Body
document.body.append(newNav);

//Navbar Styling
newNav.style.padding = "10px";
newNav.style.color = "#4ad";
newNav.style.backgroundColor = "whitesmoke";
newNav.style.borderRadius = "5px";

//--------------------Paragraph--------------------

//Create the <p></p> and save it inside a variable
var myParagraph = document.createElement("p");

//Paragraph Content
myParagraph.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";

//Append the Paragraph to the Body
document.body.append(myParagraph);

//Paragraph Styling
myParagraph.style.padding = "50px";

//-----------------Unordered List-----------------

//Create the <ul></ul> and save it inside a variable
var myUnorderedList = document.createElement("ul");

//Unordered List Styling
myUnorderedList.style.listStyleType = "none";
myUnorderedList.style.padding = "50px";

//---List Item1
//Create the <li></li> and save it inside a variable
var listItemOne = document.createElement("li");

//List Item1 Content
listItemOne.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

//List Item1 Styling
listItemOne.style.textAlign = "left";
listItemOne.style.padding = "20px";

//Append List Item1 to the Unordered List
myUnorderedList.append(listItemOne);

//---List Item2
//Create the <li></li> and save it inside a variable
var listItemTwo = document.createElement("li");

//List Item2 Content
listItemTwo.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

//List Item2 Styling
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
listItemThree.style.textAlign = "left";
listItemThree.style.padding = "20px";

//Append List Item3 to the Unordered List
myUnorderedList.append(listItemThree);

//Append the whole Ordered list to the Body
document.body.append(myUnorderedList);

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