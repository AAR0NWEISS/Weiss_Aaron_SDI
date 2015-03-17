/**
 * Created by aweiss on 3/17/15.
 */


//alert('test')


/// tell each member of the Scooby gang that they solved a mystery

//creat an array of gang member

var name = ["scooby Doo","Shaggy","Valma","Daphne","Fred"];


//add scrap
name.push('scrappy');
//creat for loop to cycle through the array
for(var i=0; i<name.length; i++);{

//console log each person
    console.log("You solved the case " + name[i] + "!");
}



//keep track of our bills and get the total and average

var bills=[50,10,5,20,10];

//creat varabies for total and averages
var total = 0;
var averageNum = 0;

var numITems = 0;

for(var j=0; j<bills.length; j++){

    //only add each bull if they are equal over 15
    if (bills[j] < 15) {
    } else {

        //add each bill to the total
        total += bills[j];
        numITems++;
    }

    // add each bill to the total
    total+= bills[j];

}

console.log("The total is "+total);

//calculate the average
average = total/bills.length;
console.log("the average is "+averageNum)