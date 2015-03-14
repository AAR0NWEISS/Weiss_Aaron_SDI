/*
 * Created by aweiss on 3/14/15.
 *
 * aaron weiss
 * sec00
 */



alert('test');

 //ask the useer for a number

 var num1 = prompt("Please enter a number");

//validate that the user typed in a number or dint leave it blank

//valdidat useing a whhile looop
while(isNaN(num1)|| num1 ===""){
    //repromt the user
    if(num1 === ""){
        num1 = promt("plea do not leave blank!\n Please type in a number.");

    }else if(isNaN(num1)){
        num1 = promtp ("Please only type in number \n enter a number");
    }

    num1 = prompt("Please only typ in a number\n Please enter a number");
}


//ask the user a yes or no questoin
var userinput = prompt ("please enter yes or no");
userinput=userinput.toLocaleLowerCase();
//varable
while(userinput !="yes"&&userinput!="no"&&userinput!="nope"){

    //reporompt
    userinput = prompt("please only enter in yes or no \n Please type in yes or no");

}