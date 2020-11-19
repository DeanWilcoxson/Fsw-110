//Functionality
var username = document.getElementById("name");
var password = document.getElementById("password");
var passwordConfirm = document.getElementById("confirm");
var form = document.getElementById("FormID");

function passwordCheck() {
    if (password.value != passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Please make sure the passwords match");
    } else if (password.value == passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Welcome " + username.value + "! You are now a Free Member!");
    }
}
form.addEventListener("submit", function(event) {

});
password.addEventListener("change", passwordCheck);
passwordConfirm.addEventListener("keyup", passwordCheck);
var accountCreated = document.getElementById("button");

//Styling
form.style.backgroundColor = "rgba(0, 0, 5, 0.6)";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.border = "3px solid grey";
form.style.borderStyle = "outset";
form.style.borderRadius = "5px";
form.style.boxShadow = "5px 5px 5px rgba(0, 0, 5, 0.6)";
form.style.padding = "10px";
form.style.color = "Blue";
form.style.textShadow = "2px 2px 3px rgba(0, 0, 5, 0.6)";
username.style.margin = "10px";
username.style.display = "flex";
username.style.flexDirection = "row";
username.style.boxShadow = "5px 5px 5px rgba(0, 0, 5, 0.6)";
password.style.margin = "10px";
password.style.display = "flex";
password.style.flexDirection = "row";
password.style.boxShadow = "5px 5px 5px rgba(0, 0, 5, 0.6)";
passwordConfirm.style.margin = "10px";
passwordConfirm.style.display = "flex";
passwordConfirm.style.flexDirection = "row";
passwordConfirm.style.boxShadow = "5px 5px 5px rgba(0, 0, 5, 0.6)";
accountCreated.style.margin = "10px";
accountCreated.style.boxShadow = "5px 5px 5px rgba(0, 0, 5, 0.6)";