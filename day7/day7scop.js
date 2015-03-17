/**
 * Created by aweiss on 3/17/15.
 */
//aaron Weiss
// sec 00
//day7 scope

//alert("test")

//variable scope
//variables inside & outside of a functoin

//try not use the dame varable names, BUT in big files this is going to be impossible

//create a varablile for width in our MAIN code
//scoped outside of the functoin----"main code
var width = 5;

//creat a functoin that calc the peremter fo a rectagnel
function calcPer(){
    //creat a variable called width inside of the functoin
    // scoped to the functoin calcPer
    var width = 10;

    //creates a variable for the hight oand perimter
    var height = 28;
    var perimeter = width*2 + height*2;

    console.log ('inside of the functoin, ther per is '+perimeter);

//var created indie of a function can not be accessed outside of the functoin
    /// variables created OUTSIDE of the functoin can be accessed but usually will not be

}

console.log("befor the functoin call with = "+width)

//functoin call the calcPer
calcPer();
console.log("after the functoin call width = "+width)



//concole.log the answer
//console.log("Outside fo the functoin,the perimter si "+perimeter)   /// dose nto work



