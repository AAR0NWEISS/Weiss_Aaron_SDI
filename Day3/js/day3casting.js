/**
 * Created by aweiss on 3/7/15.
 */




//casting varables means treating one data type like another iff possable
var stringvar = "6";
var results = 7 = stringvar;
console.log(results);

//number -- treats whatever is inside like a number if possable

var castingResults = 7 + Number(stringvar);
console.log(castingResults);

//cast number to be a text string
// [string] ---treat what ever is inside as a text string

var areaCode = 407
var prefix=555
var lineNumber=1234

var phonenumber = String(areaCode+prefix+lineNumber);
console.log(phonenumber);

console.log("("+areaCode+")"+prefix+"-"+lineNumber);

//parsing integers
//parseInt()--- looks through a text string and returns an inteager
//only the first number in the string is returned
// if the first character in the text string cannot  be converted into a number, then it returns the number

var a= parseInt("40 years old");
console.log (a)

var b = Number ('40 years old');
conslole.log (b);

var c = parseInt("he was 40");
console.log (c);

//prompts ONLY retruns test strings

var tShirtOwned = prompt, ("how may t-shirt did lyyou currentely own?")

var tShirtBought = promt, ("how may t-shirt did you buy?")


//ask the user how many the bought
var totalshirts = parseInt(tShirtBought)+ Number tShirtOwned;

console.log("the results of the area are"+area);



