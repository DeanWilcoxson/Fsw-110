//step4.Create a for loop that repeats the process ten times 
for (i = 0; i < 10; i++) {

    //step1.create an <h1></h1> Element
    var newH1Element = document.createElement("h1");

    //step2.Give it Content and Style
    newH1Element.textContent = "Hello World";
    newH1Element.style.color = "blue";
    newH1Element.style.backgroundColor = "darkgrey";
    newH1Element.style.textAlign = "center";

    //step3.Append it to the body
    document.body.append(newH1Element);
}

//step5.Create a new array
var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

/*step6.Create a for loop that iterates through the array in Step 5 and then adds them to the Website*/
for (i = 0; i < names.length; i++) {

    //repeat step1.create an Element
    var newListOfNames = document.createElement("p");

    //repeat step2.Give it Content and Style
    newListOfNames.innerHTML = (names[i]);
    newListOfNames.style.color = "red";
    newListOfNames.style.backgroundColor = "darkgrey";
    newListOfNames.style.fontSize = "28px";
    newListOfNames.style.textAlign = "center";

    //repeat step3.Append it to the body
    document.body.append(newListOfNames);
}