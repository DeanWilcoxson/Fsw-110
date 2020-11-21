document.getElementById("button").addEventListener("click", function() {
    var name1 = document.getElementById("name1");
    var age = document.getElementById("age");
    var birthday = document.getElementById("birthday");
    alert(name1.value + " " + age.value + " " + birthday.value + " ");
});
var form = document.getElementById("FormID");

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
name1.style.margin = "10px";
name1.style.display = "flex";
name1.style.flexDirection = "row";
name1.style.boxShadow = "5px 5px 5px rgba(0, 0, 5, 0.6)";
age.style.margin = "10px";
age.style.display = "flex";
age.style.flexDirection = "row";
age.style.boxShadow = "5px 5px 5px rgba(0, 0, 5, 0.6)";
birthday.style.margin = "10px";
birthday.style.display = "flex";
birthday.style.flexDirection = "row";
birthday.style.boxShadow = "5px 5px 5px rgba(0, 0, 5, 0.6)";
buttonVar.style.margin = "10px";
buttonVar.style.boxShadow = "5px 5px 5px rgba(0, 0, 5, 0.6)";