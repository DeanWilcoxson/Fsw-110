var title = document.getElementById("title");
var description = document.getElementById("desc");
var buttonVar = document.getElementById("buttonSub");
var toDoList = document.getElementById("toDo");
buttonVar.addEventListener("click", function(e) {
    var listItem = document.createElement("li");
    toDoList.append(listItem);
    listItem.textContent = "Task: " + title.value + " = " + description.value;
    form.reset();
});