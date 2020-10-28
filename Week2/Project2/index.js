//Body Styling
document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80)";

//Header
var newHeader = document.createElement("h1");
newHeader.textContent = "Basic Javascript Website";
document.body.append(newHeader);
//Header Styling
newHeader.style.color = "#4ad";
newHeader.style.backgroundColor = "transparent";
newHeader.style.textAlign = "center";

//Navbar
var newNav = document.createElement("nav");
newNav.textContent = "Nav1";
document.body.append(newNav);
//Navbar Styling
newNav.style.padding = "20px";
newNav.style.color = "#4ad";
newNav.style.backgroundColor = "transparent";


//Paragraph
var myParagraph = document.createElement("p");
myParagraph.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";
document.body.append(myParagraph);
//Paragraph Styling
myParagraph.style.color = "#4ad";