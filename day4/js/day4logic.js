/**
 * Created by aweiss on 3/10/15.
 */
//alert("testing to see if conn");


// basic conditional, if we have enough to buy car

// create a few variables
var budget=15000;
var carprice=2300;
var paycheck=1600;

if(budget>=carprice){
    console.log("You can afford your car");
}else {
    console.log ("You are broke! take the bus")
}


//we can buy the car if our buget is greater or equal to the price  Or our pay check is more the 1500

if(budget >= carprice || paycheck >1500){
    console/log ("You can buy car");

}else{
    console.log("You dont make enough and your buget is too low");
}
console.log (budget)


/* true tabel for || or

T || T= T
T || F= T
T || T=F
F || T=F

True

T T && t =t
T&& T=T
F&&T=F
F&&T+F
F&&=F


//You can uy a car if the buget is greater thean or equal the car price and your paycheck is over 1500

    */

if(budget >= carprice && paycheck >1500){
    console.log ('you can buy the car!');
} else{
    console.log ("you dont make enough")
}