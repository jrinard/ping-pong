// Back End Logic

var counter = function(userInput) {
var mainArray = [];
var newArray = [];
  for (var index = 1; index <= userInput; index += 1) {// Loop to test value
    debugger;
    if (index % 15 === 0) {
        mainArray.push("PINGPong")
      } else if (index % 5 === 0) {
        mainArray.push("pong")
      } else if (index % 3 === 0){
        mainArray.push("ping") // say ping pong
      } else {
        mainArray.push(index.toString());
      }
  }// For End
  // loop to push main array values into the html form
  for (index = 0; index < mainArray.length; index ++){
    newArray.push("<li>" + mainArray[index] + "</li>")
  }// second for end
  return newArray;
};// Function End



// Front End

$(document).ready(function() {
  $("form#main").submit(function(event) {

    var userInput = parseInt($("input#num").val());

    var result = counter(userInput); // assinging function and sticking the input into it
    $("#result ul").html(result);
    event.preventDefault();
  });
});
