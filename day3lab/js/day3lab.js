/*
 Aaron Weiss
 7MAR2015
 SEC00
 Day 3 Lab
 */

//alert("text that the user will see");
//great for checking values and debugging
//also shows all errors
//console.log("this is the console.1")

// prompt the user for width and height
//explains to them whats going on
//var height = prompt("let calculate the are of a rectangle \nPlease enter the height enter the height");
//var width = prompt("Please enter the with of the  rectangle:");
//var total= height*width
//console.log(total)
//

alert("Hello Click \"OK\" to continue Road Rage Calculator");


var textString=["On a scale from 1-10 \n How Much RAGE do you have? ","On a scale from 1-10 \n How  Happy are you have? ","How many miles driven? "];
var textOutput=["Your rage level is ","Your happiness is ","Your miles Driven is ","Are You driving a Car?\n 1=YES/0=NO"];

var rage = prompt(textString[0]);
var happy = prompt(textString[1]);
var milesDrive = prompt(textString[2]);
var car = prompt(textString[3]);

total=car*(happy*milesDrive)-(rage*milesDrive);

console.log(textOutput[0]+rage);
console.log(textOutput[1]+happy);
console.log(textOutput[2]+milesDrive);
console.log("Your Road Rage level is"+total);