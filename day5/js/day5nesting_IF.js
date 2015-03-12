/*
 Aaron Weiss
 5MAR2015
 SEC00
 Day 2 Into


//validate water temp var
if()








 */

//validate water temp var
if(waterTemp ==="" || isNaN(waterTemp)){

}



//alert("test")

// some decisions affect other decisions

//if it is warm then lets go to the beach, if it is not ten go to the movies


//get temparature
var temp= prompt ("We are going to findure out what you going to dowhat is the current temature outside");
var waterTemp= prompt("what is what temp");
if(waterTemp ==="" || isNaN(waterTemp)){
    //this code will run if the car is blank or not a number
    waterTemp = prompt ("Please do not leave balnks and ounly use number\n What is the water temp")
}
//valadare that the use typed in a number
//isNAN() - is it not a Number;
//say it out loud
console.log(isNaN(7));//gives us false
console.log (isNaN("monkey"))//gives us true

If(isNaN(temp)){}
//this will run when temp is not a number
//reprompt the user for the informatoin
    temp=prompt("Please only type in numbers\n Enter the tempure out side");

if(temp === ""){
//this code will run if the use types in nothing
//reporompt the user
    temp= prompt("Please do not leave this blank, it is required ")


}

if(temp <=80){
    console.log("go to the beach");

}else(temp >=80){
    console.log("go to the movies");
}
if(waterTemp >75){
    console.log("lets go swiming");
}else{
    console.log("go simming")
}


//do you have kids in group
var kids = prompt "Are you bringing kids?";
//validae
//convert to lower case
kids= kids.toLowerCase();

if(kids != "yes" && kids != "no")
//reprompt
    kids= prompt("please enter yes or no \n Aare you bring kids");
    //permen convert to lower case
    kids= kids.toLowerCase();

//test if weh have kids
if(kids==="no");
    console.log ("let's see 50 shaeds of gray")



var knowSwiim == "do you know how to swim"

//valdaate the knowswim var
if(knowSwiim != "yes" && knowSwiim !="Yes" && knowSwiim !="no" && knowswim != "No"){
    knowSwiim =prompt("only type in yes or no \n you swim")
}


//convert teh text string to lower case
//toLowercase - dot syntax - use a period
knowSwiim = knowSwiim.toLowerCase();



