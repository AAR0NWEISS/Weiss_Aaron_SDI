/*
 Aaron Weiss
 5MAR2015
 SEC00
 Day 6 math
 */


//alert("test")


//basic rounding .5+ go up..... .499999 go down

var num1=9.555;
console.log (num1)
console.log(num1)
console.log(Math.round(num1))


//math floor --- rounds down

var num2=6.1
console.log(num2)
console.log(Math.floor(num2))


//math.cell ----alway rounds up if there is a decmerial

var num3 =4.6;
console.log(num3);
console.log(Math.ceil(num3));



///math.random   ---- returns a number between 0 and ALMOST 1... Never the full value of one

var num3 =  Math.random();
console.log(num3)



//make #numbers randomly 1-10

var num5=Math.random()*10
console.log(num5)


// var num interger
var num6=Math.round(Math.random())*100
console.log (num6)

//random number between tow number = that does not start with zerro

//math.randomw()*(max-min) + Min

// random number between 50 --- 89

var num7=Math.round(Math.random()*(80-50)+50);
console.log(num7);

//math object constatnt
//area of circle = radiuse*raduse = P
//math.PI = true value of Pi

var raduis=7;
var areaCircle=raduis*raduis*Math.PI
//this is to fixed(#) = rounds the number to the number of decmial places
console.log (areaCircle)
console.log (areaCircle.toFixed(2))
