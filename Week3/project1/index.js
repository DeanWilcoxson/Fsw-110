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
var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}