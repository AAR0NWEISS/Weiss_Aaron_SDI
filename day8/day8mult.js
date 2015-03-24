/**
 * Created by aweiss on 3/24/15.
 * Aaron Weiss
 * Sec00
 *
 */


//alert("test")

//create multipile function using informatoin form the user

//calc the perimeter and area of a rectangle

function perimeterRec(w,h){
    //perimiter = 2*width+height
    var p =2*w + 2*h;
    return p;

}


//create anon function

var areaRec = function(w,h){
    var area = w*h;
    return area;
}

//prompt the user for with and hieght

var width = prompt("Let figure out the perimenter and area of a rectactagle \n What is the width");

//validatoin
while(width==="" || isNaN(width)){
    //reprompt the user
    width = prompt("Please do not leave blank and only use number \n What is your width?");
}

//parseInt()
width = parseInt(width);

var height = prompt("What is the height of the rectangle?");

//validatoin
while(height==='' || isNaN(height)) {
    //re propmt
    height = prompt("Please do not leave blacnk and only use number \n What is the height?")
}

//parint
high = parseInt(height);

//functoin call
var resultsPeri = perimeterRec(width, height);
var resultArea =  perimeterRec(width, height);

//combinded console
console.log('The perimiter of a rectange is '+resultsPeri+" and  the area is "+resultArea+'.');




//created a combined functoin

function cobminRec(w,h){
    // first calculate the perimeter
    var p = 2*w + 2*h;

    var a = w*h

    //retruned both values
    retrun [p,a];
}

//functoin cal the cbombined array
var cobminrecresults = cobminRec(width, height);

console.log(cobminrecresults);
console.log ("The parimter of your rectangle is "+cobminrecresults+"and the area is ");