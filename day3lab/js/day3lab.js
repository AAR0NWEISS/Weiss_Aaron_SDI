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

alert("Hello Click \"OK\" to continue Road Rage Calculator");// alert command tells user about type of test they are takeing

//array holds all text string in prompts, and alos hold all console.log outputs
var textString=["On a scale from 1-10,\n How much RAGE do you have?","On a scale from 1-10,\nHow  HAPPY are you have?","How many MILES driven?","Are You driving a Car?\n 1=YES/0=NO"];
var textOutput=["Your rage level is ","Your happiness is ","Your miles Driven is ","You are driving a Car,\n 1=YES /0=NO    "];

var rage = prompt(textString[0]);//stores var set rage and prompts use, loads text string from array
var happy = prompt(textString[1]); //stores var ad [prompts user
var milesDrive = prompt(textString[2]);// stores var and prompts
var car = prompt(textString[3]); //stores var and prompt

total=car*(rage*milesDrive)-happy;// store all var in total by cal 4 var set by user

console.log(textOutput[0]+rage);// console log of output
console.log(textOutput[1]+happy);// console log of output
console.log(textOutput[2]+milesDrive);// console log of output
console.log(textOutput[3]+car)// console log of output
console.log("Your Road Rage level is "+total);// out put of total var


/* tested value
Your rage level is 1
Your happiness is 10
Your miles Driven is 2000
You are driving a Car,
    1=YES /0=NO    0
Your Road Rage level is -10

 Your rage level is 10
 Your happiness is 0
 Your miles Driven is 100
 You are driving a Car,
 1=YES /0=NO    1
Your Road Rage level is 1000
     */
