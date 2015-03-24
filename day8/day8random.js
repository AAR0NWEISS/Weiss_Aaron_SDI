/**
 * Created by aweiss on 3/24/15.
 * Aaron Weiss
 * SEC00
 *Random
 */



//creat a function that will give us a random integer between two value


//create a var for min and max values

var min=22;
var max=83;

//functoin call
var randomnumber=getRandom(min,max);


console.log("Your random number between"+min+" and "+max+" is "+randomnumber);



//create functoin
function getRandom(min,max){
    //generate a random intger
    var randomNumber=Math.round(Math.random(max-min)+min);
    retrun randomNumber;
}