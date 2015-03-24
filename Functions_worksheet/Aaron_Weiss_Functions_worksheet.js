//Aaron Weiss
//sec00
//Functions_worksheet


//alert("test")
/////////////////////////////////////////////////////Circumference///////////////////////////////////////////////////////////////////
var radius = 2;//set var to value of 2,

function calculatorCircumference(r){//function = create factory and call it "calculatorCircumference" (R)=floating variable

    var circumference=r*2*Math.PI;//create var called circumference,
    console.log(circumference);//output to console ECHO
    return circumference;//relocates function var to main code

}

//calculatorCircumference(4);//calls output from function, i.g. runs code for calculatorCirumference
//or
var circumferenceMAINcode = calculatorCircumference(radius);//stores output from function into var circumferenceMAINcode
console.log("The circumference of the circle is "+circumferenceMAINcode+".");//Output from var circumferenceMAINcode in main code


//////////////////////////////////////////////////////////Stung!//////////////////////////////////////////////////////////////////////////
var numOfPounds=5;//set var to value of 5,

function calculatorBee(w){//functoin = create factory and calls it calculatorBee, and (w)=floating variable
    var wightINpounds=8.666666667*w;// creates var called wightINpounds, and cal 8.6 * var called numberOfPounds
    console.log(wightINpounds);// output to console ECHO
    return wightINpounds;//relocates function var to main code
}

var wINpound=calculatorBee(numOfPounds);// creates var wINpound from function calculatorbee
console.log("It takes "+wINpound+" bee stings to kill this animal.");//Output form var wINpound with text string
