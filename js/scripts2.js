// Back End Logic
var counter = function(userInput) {
var mainArray = [];
var newArray = [];
  for (var index = 1; index <= userInput; index += 1) {// Loop to test value and push text to index
    if (index % 15 === 0) {
        mainArray.push("Ping-Pong")
      } else if (index % 5 === 0) {
        mainArray.push("Pong")
      } else if (index % 3 === 0){
        mainArray.push("Ping")
      } else {
        mainArray.push(index);
      }
  }
  return mainArray;
};// Function End

// Front End
$(document).ready(function() {
  $("form#main").submit(function(event) {
    var userInput = parseInt($("input#num").val());
    var finalResult = counter(userInput); //assinging function and placing the input into it
    // $("#result ul").html(finalResult); // calling function


    $("#result ul").empty(); // removes previous content from ul

    finalResult.forEach(function(result){
      $("#result ul").append("<li>" + result + "</li>");


    });

    event.preventDefault();
  });
});
