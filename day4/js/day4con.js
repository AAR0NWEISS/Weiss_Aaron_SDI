/**
 * Created by aweiss on 3/7/15.
 Aaron Weiss
 5MAR2015
 SEC00
 Day 2 Lab
 */

//alert("text that the user will see");
//great for checking values and debugging
//also shows all errors
console.log("this is the console.")


// basic condition

// create a boolean
var oldEnough = false;

//if the kid is old enough he can ride the ride
if(oldEnough){
    //code to run if the kid is old enough
    console.log("the kid is old enough to ride the coaster");
} else{
    //code to run if the kid is not old enough
    console.log("sorry you are to young");
}

//relatoinal operators

//if the kid over 48 inches tail, the kid can ride coaster

var kidHeight = 48;
//create vare for kids hight
var minheight = 48;

//var sneakerlift
var sneakerLifts = 2;


//test the kid height

if(kidHeight > minheight){
    console.log ("kid is tall enough to ride coaster");
} else if(kidHeight+sneakerLifts > minheight) {
    console.log ("you get lifts you can ride");
} else {
    console.log("you are to short");
}