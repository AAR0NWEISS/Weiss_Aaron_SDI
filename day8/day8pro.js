/**
 * Created by aweiss on 3/24/15.
 */

//alert('test');

//console.log("hello");



function calArea(w,h){
    var area = w*h;
    return area;

}

//functoin call
var area = calArea(6,8);
console.log("The area of the rect is "+area);

// this is a procdure
//a list of steps to do
function calAreaP(w,h){
    var area = w+h;

    //we do Not return this value
    console.log("Inside the procedure the area is "+area)
}

//functoin cal for the procedure\
//just the functoin name no variable to catch it
calAreaP(12,15);
