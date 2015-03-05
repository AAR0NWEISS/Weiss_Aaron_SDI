/*
Aaron Weiss
5MAR2015
SEC00
Day 2 Into
 */

//alert("testing to see if conn");

/*
example of a multilined comment
Anything inside of here will not be seen by computer
 */

// single line comment. only this line will be ignored.

//alert box- pop up box that will alert the user with information.

alert("text that the user will see");
//great for checking values and debugging
//also shows all errors
console.log("this is the console.")

//declare a variable
//use the keyword of VAR
var whatever1;

//define the variable
//set tthe value of the existing variable
whatever1 = 42;


//concole.log the variable
console.log ("the variable whatever1 is")
console. log (whatever1)

//declare and define a variable at the dame time
var a = 2;

console.log (a)

a+3;
a=a+3;
console. log(a);

//define now variable
var b;

//define this variable using an existing variable
b=a+3;
console.log (a);
console.log (b);


//simple math
//find our ages

//declare and define the year born

var yearBorn = 1981;

//2012 - the year we are born
var ourAge = 2015-yearBorn-1;
console.log (ourAge);

//talk about math
// +, *, -,


//find the area of a triangle
// base height/2
var base = 4;
var high = 5;

var areaOfTriangle = base+high/2;
console.log(areaOfTriangle)

//modulo - %
//solove the remainder

var dec = 32/10;
console.log(dec);

var remainder = 32%10;
console.log(remainder);

//find out if even or odd
//%2 1=odd 0=even
var evenOrOdd = 57%2;
console.log(evenOrOdd);

/*
=assigns the value to the variable

++adds 1 to the current value of the variable
subtracts 1 from the current value of the variable
# adds the # to the current value of the variable
# subtracts the # from the curent value
# devides the curren value
* is muta

*/


var assign=0;
//++it the same as assign assign+1
assign++;
console.log(assign)

// - -  is the same at assign -- assign -1

assign --;
console.log(assign);

//=- is the sa assign +2
assign +=5; //assign = +5;
console.log(assign);

// -=# is the same as assign -
assign -=2;
console.log (assign);

// /= is the same as assign - assign /#;
assign /=3;
console.log (assign);

//*= is the same  as assign = assign * #
assign *=7;
console.log(assign);


//String are any text that we use
//qoutes are needed to distguinsh between varables and  planin tex

var kermit = "light green";
var frogName = "kermit";
console.log(frogName);

// to double qoute or not to double quote "  or '
//can use the ecape key character \ backslash in front of the phrase
var phrase = 'i don\'t know';
console.log(phrase);



//escape character can also do multiple line \n new line charchers

var phrase2 = "I don't know. \n you never do! ";
console.log(phrase2);

// boolean - is kind of like a light switch
// either true or false
//not a text string must be lower case

var yes = true;
var nope = false;



//order of operatoins
//PEMDAS - please excuse my dear aunt sally
//Parenthesis, exponents, mulliplicatoin, division, addition,

//find the average quiz grade

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 90;

//average the total
var average = (quiz1+quiz2+quiz3)/3;
console.log (average);


