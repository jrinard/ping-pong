// Back End Logic

var counter = function(userInput){
  for (index = 0; index < userInput.length; index += 1) {// Loop to increment till input number is reached
    if (userInput % 3 === 0) {
        result = "ping"; console.log('ping')// say ping
      } else if (userInput % 5 === 0) {
        return true;console.log('pong')
      } else if (userInput % 15 === 0){
        return true;console.log('PINGPong') // say ping pong
      }

  };// For End
  return result;
};// Function End





// var countUp = function(countTo, countBy) {// function with 2 params
// 	//(number, number) -> numbers
// 	var total = 0;
//   for(var counter = 0; (total + countBy) <= countTo; counter += 1) { // Initalize Counter, Tell Condition total + 5 is less then equel too 30 then expression + 1 // first condition second the work then third adds 1 then counter becomes 1
//     total += countBy;
//     console.log(total);
//   };
// };
//
// countUp(5, 1); //first is count to  second is count by


// var checker = function(year) {
//
//   if (year % 3 === 0) {
//     return true; console.log('ping')// say ping
//   } else if (year % 5 === 0) {
//     return true;console.log('pong')
//   } else if (year % 15 === 0){
//     return true;console.log('PINGPong') // say ping pong
//   }
//
// };





// Front End

$(document).ready(function() {
  $("form#main").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#num").val());

    var result = counter(userInput); // assinging function and sticking the input into it
    $("#result").text(result);
  });
});
