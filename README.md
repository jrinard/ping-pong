# _Ping Pong_


#### By _**Joshua Rinard**_

## Description

This site demonstrates arrays and loops. The objective was to allow the user to input a number and that number would be displayed from 1 to that number. Then along the way if the numbers were divisible by 3, 5, or 15 it displays the words ping, pong or ping-pong instead of that value.

## Specs

* If the user input number divides by 3 then replace the number with "ping"
   * Example input: 3
   * Example output: ping

* If the user input number divides by 5 then replace the number with "pong"
    * Example input: 5
    * Example output: pong

* If the user input number divides by 15 then replace the number with "ping-pong"
    * Example input: 15
    * Example output: ping-pong

* If the user input number does not divide by 3, 5 or 15, then just use the same number.
   * Example input: 4
   * Example output: 4

## Execution

_Specifically with Scripts_

1 Brainstorm ideas of what you may need.
        An array to store values, For loop to get all values in between

2 Establish a function to do the work
    * Inside you will need a loop to determine if the number needs to be swapped for a word
        -- I. Divisible by 3 will be changed into ping
        -- II. Divisible by 5 will be changed into pong
        -- III. Divisible by 15 will be changed into ping-pong
        -- IV. If the value is not divisible then just input the same value into the array
    * Results will be pushed into an array

3 Create a second loop to run through your array and push li tags to help with display.

4 Establish user interface logic
      * Call the main function with placing the input into it. Assign it to a variable.
      * Call the final variable and show it on the interface

5 Make sure you split front and back end logic


## Setup/Installation Requirements

* Runs on modern web browsers
* Edited on Atom Code Editor

## Known Bugs

This version contains no known issues.

## Link to site on Git Hub Pages

https://jrinard.github.io/ping-pong

## Support and contact details

* Github for Joshua Rinard: JRinard
* Email: jrinard@hotmail.com

## Technologies Used

HTML, CSS, Javascript and Bootstrap were used in the production of this site.

### License

Open Source

Copyright (c) 2016 Joshua Rinard
