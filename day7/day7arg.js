/**
 * Created by aweiss on 3/17/15.
 */


//alert("test")


//arguments -- goes into the functoin part of the functoin call
//[arametars -- catch the argument and in the functoin defintion


//creat a functoin that calculateds the are of a rectangle.... again!!!!

//add in parameter
function calcArea(w,h){

    //var  width=10;
    //var hieght=20;
    var area=w+h;
    console.log("the area is "+area);

}


//call our functoin
//add arguments to the funcotin call

calcArea(10,20);
calcArea(40,60);


//prompt user for wdith and height

var width=prompt("enter a width");

//enter validatoin
var height=prompt("enter a height");

calcArea(width,height);

//dog years
function dogYear(humanAge){
    //dog years = human years +7
    var dogAge=humanAge*7;
    console.log("Your age in dog years is "+dogAge)
}

//call dog functoin
dogYear(4);

var userInput = prompt ("Please enter your human age");

//call the dog functoin
dogYear(userInput);