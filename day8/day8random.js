/**
 * Created by aweiss on 3/24/15.
 * Aaron Weiss
 * SEC00
 *Random
 */



//creat a function that will give us a random integer between two value


//create a var for min and max values

var min = prompt ("lets find a random number between two values \n Please enter your min value");
while(isNaN(min) || min===""){
    min = prompt ("Please do not leave blank value");
}


var max = prompt("lets find a random number between two values \n Please enter your max value")
while(isNaN(min) || min==="" || max<=min){
    min = prompt("Please do not leave blank value");

    if(isNaN(max)){
        max = prompt("Please only use number. \n Is the max value");

        else if(===""){
            //reprompt
        }
    }
}


//functoin call
var randomNumber = getRandom(min,max);


console.log("Your random number between"+min+" and "+max+" is "+randomNumber);



//create functoin
function getRandom(min,max){
    //generate a random intger
    var randomNumber=Math.round(Math.random(max-min)+min);
    retrun randomNumber;
}


//15 random numbers  console.log them out
for(var i=0; 1<15; i++){
    //this will give the same number 15 times
    console.log(getRandom(min,max));
    //console.log(randomNumber)

}