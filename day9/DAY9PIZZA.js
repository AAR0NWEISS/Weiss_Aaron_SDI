/**
 * Created by aweiss on 3/26/15.
 * AARON WEISS
 * sec00
 *
 *
 */

//alert("test");


//figure out how much pizza cost per slice and cost per sq in

//propt the user for the radius of line pizzas

var pizzaRadius = prompt("welocme, Lets calulate the cost of your pizza What is the radius of you pizza.");

//validate
while(pizzaRadius=== "" || isNaN(pizzaRadius){
    //reprompt
    pizzaRadius = prompt("Please do not leave blank and only use numbers. \n what is the radius of your pizza? ");
var results = lordfunction(pizzaRadius,pizzacost,pizzaslice);
    console.log("Your pizza cost $"+results[0]+"per sq inch or $"+results[1]+" per slices")
    function lordFun(radius, cost, slices){
        var area = pizzaArea(radius);

        //call functoin sqin cost
        var areaCost = costPerSqIn(area,cost)

        //call the slice per price
        var slicePrice = pricePerSlice(slices, cost);

        //retrun the anser to main code
        return [areaCost, slicePrice];
    }


}

//prompt the user for cost of what pizza
do {
    var pizzacost = prompt("how much does you pizza cost in total? \n please don not leave blank.");
} while(pizzacost==="" || isNaN(pizzacost));

//prompt the user for how many slices are in their pizza

do{
    var pizzaslice = prompt("how many slice are in your pizza? \n reminder only use numbers and do not leave blank.");
}while(pizzaslice==="" || isNaN(pizzaslice));


// functoin that calculates the area of pizza
function pizzaArea(r){
    //area = r*Pi
    var area = r*r*Math.PI;
    retrun area;
}

//function that calculates the price per sq in of piuzza
function pizzaSliceCost(area,price){
    //price / area
    var costPerSqIn = price/area;

    //we should round this number to 2 decmials places
    costPerSqIn = costPerSqIn.toFixed(2);
    return costPerSqIn;
}

//function that calculates the price per slice
function pricePerSlice(slices, price){
    var costPerSlice = = price/slices;
    //roundd to 2 decmianls
    costPerSlice = costPerSlice.toFixed(2);
    retrun costPerSlice;

}

