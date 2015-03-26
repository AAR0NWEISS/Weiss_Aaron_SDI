/**
 * Created by aweiss on 3/24/15.
 * Aaron Weiss
 * SEC 00
 */


//alert("test");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function howManyBabies(boy,girl){
    var boy = prompt("Please enter the number of baby boys.\nHow many baby boys do you have?");
    while(boy==="" || isNaN(boy)){
        boy = prompt("Please do NOT leave blank and only use numbers. \n How many baby boys do you have?");
    }
    var girl = prompt("Please enter the number of baby girls.\nHow many baby girls do you have?");
    while(girl==="" || isNaN(girl)){
        girl = prompt("Please do NOT leave blank and only use numbers. \n How many baby girls do you have?");
    }
    var tbabies =  parseInt(boy)+parseInt(girl);
    return tbabies;

}

var numDiapers = function(day,numberBabies,cost){
var day = prompt("Please enter the number of days,\n You would like to calculate?");
    while(day==="" || isNaN(day)){
        day = prompt("Please do NOT leave blank and only use numbers. \n Please enter the number of days.");
    }
var numberBabies = prompt("Please enter the numbers of babies, \n You would like to calculate?");
    while(numberBabies==="" || isNaN(numberBabies)){
        numberBabies = prompt("Please do NOT leave blank and only use numbers. \n Please enter the numbers of babies.");
    }
var cost = prompt("Please enter the cost of Diapers, \n You would like to calculate?");
    while(cost==="" || isNaN(cost)) {
        cost = prompt("Please do NOT leave blank and only use numbers. \n Please enter the cost of Diapers.");
    }
    var totalCost = day+numberBabies+cost;
    return totalCost;


var total = howManyBabies();
//var total2 = numDiapers();

console.log(total);