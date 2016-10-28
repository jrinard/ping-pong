// Back End Logic
var counter = function(newUserInput) {
  var mainArray = [];
  for (var index = 1; index <= newUserInput; index += 1) {// Loop to test value and push text to index
    if (index % 15 === 0) {
      mainArray.push("Ping-Pong")
    } else if (index % 5 === 0) {
      mainArray.push("Pong")
    } else if (index % 3 === 0){
      mainArray.push("Ping")
    } else {
      mainArray.push(index);
    }
  } return mainArray;
};// Function End

var inputChecker = function(userInput) { // function to check input type
  if (userInput <= 0 ){
    return false;
  } else {
    return userInput;
  }
};// Function End


// Front End
$(document).ready(function() {
  $("form#main").submit(function(event) {
    var userInput = parseInt($("input#num").val());
    var checkResult = inputChecker(userInput);// puts user input through input checker function then spits out NewUserInput
    if (checkResult === false){ // if check result is false it shows a message
      $("#checker").text("Please insert positive number").fadeToggle(1000);
    }
    var finalResult = counter(userInput); //assinging function and placing the input into it variable
    $("#result ul").empty(); // removes previous content from ul
    finalResult.forEach(function(result){// loop to append results in list
    $("#result ul").append("<li>" + result + "</li>");
    });
    event.preventDefault();
  });
});
