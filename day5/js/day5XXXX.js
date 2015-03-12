/**
 * Created by aweiss on 3/12/15.
 */



//test a  steak tem and tell the user the don


//alert("hello");



/*
Extra-rare 115–120 °F
Rare 125–130 °F
Medium 130–140 °F
Medium 140–150 °F	145 °F and rest for at least 3 minutes
Medium well 150–155 °F
Well done 	160 °F+	160 °F for ground beef

*/


var steakTemp = prompt("what is the temp of steak?");

steakTemp = parseInt(steakTemp);


//create a var for our steak temp
//var steakTemp = 169

//test each case of the case above to see where our temp falls into

if(steakTemp < 115){
    console.log("Your steak is uncooked");
} else if(steakTemp < 125){
    console.log ("your steak is extra rare");
} else if(steakTemp < 130){
    console.log ("YOur steak is rare")
} else if(steakTemp < 140){
    console.log ("your steak is med rare");
} else if(steakTemp < 150){
    console.log ("your steak is med ");
} else if(steakTemp < 158){
    console.log ("your steak is extra rare");
} else if(steakTemp < 160){
    console.log ("Your steak is well done");
} else (steakTemp <170){
    console.log ("You food is brunt");
}



