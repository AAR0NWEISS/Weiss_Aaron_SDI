/**
 * Created by aweiss on 3/24/15.
 * aaron weiss
 * sec 00
 *
 *
 *
 */
//alert("test");

//basic functoin call
var basicArea2=triArea(2,9);
console.log('The are from the basic funcotin before the definiton is '+basicArea2)

//anon functoin call befor the  functoin


//basic functoin
//function functionName(){}

//anonymous Functoin
//var functoinName = Function(){}


//anon Funtoin are extermly popular in and jquery
//highly used in object used orinted programing
//quick and easy
//you can use either a basic or anon - for now


//build a  functoin for area of triangle

function triArea(b,h){
    //cal area
    var area = 0.5*b*h;
    return area;
}

//anon Functoin
var triAareaFun = function(b,h){
    var area = 0.5*b*h;
    return area;
}


//function call to basic function
var basicArea = triAarea(5,6);
console.log("the area from the basic function is "+basicArea);

//function call