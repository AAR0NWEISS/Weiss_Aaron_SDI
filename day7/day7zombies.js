/**
 * Created by aweiss on 3/17/15.
 */
/**
 * Created by aweiss on 3/17/15.
 */
//Created by aweiss on 3/14/15.
//aaron weiss
//sec00



//alert ('test')

//zombie acttacks!!!!
// we have accidently created a zombie at full sale
// a zombie can bit 4 people a day and trun them insto zombies the next dya
// the cdc want to know how may zombies there will be in 8 day.

// gives that we know

//how many zombiens do we have
var numZombies=1;
//how many bites per zombie perday
var numBites=4;
// number of day the cdc want
var days=8;

//create for loop to calc zobie number

for(var i=1; i<=days; i++){
    //how many NEW zombies get made everyday
    var newZombies = numBites * numBites;

    //add teh new zombies to the our exhaustin horde
    numZombies += newZombies ;

    //console.log the results
    console.log("there are "+numZombies+" mmember of zombies on day"+i+".")

}


//how long will it take to get a million zombies

