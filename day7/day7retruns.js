/**
 * Created by aweiss on 3/17/15.
 */
//alert("test")


//retrun a value form ou cunctoin to our main code

//create a function cal the are of retangel

function calcArea(w,h){

    //calc area
    var area = w*h;
    console.log("Inside the function the area is "+area);
    //retrun the are to the main code
    return area;

}

//call the function
//creat a var for "retrun" vaule
var rectArea = calcArea(10,20);


//console log the area
// conslole.log(area); ////////////will not run... var inside funcatoin

console.log(rectArea);


//creat functoin to calc th earea of a circle
function cirArea(r){
    //cal area Pi * R * R
    var area = Math.PI*r*r;
    //retruns the value
    return area;
}


//function calll cirArea
//create var to catch the retruned are
var circarea=cirArea(6);

//console log the results
console.log("the are of the circle is "+circarea);


//What is the twice the circle area of a 6" circle
var resultsTwice=cirArea*2
console.log("twice the area is "+cirArea;
