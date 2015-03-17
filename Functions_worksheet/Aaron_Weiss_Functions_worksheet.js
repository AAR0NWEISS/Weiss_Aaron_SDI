//Aaron Weiss
//sec00
//Functions_worksheet


//alert("test")

function calculatorCircumference(r){//function = create factory and call it "calculatorCircumference" (R)=floating variable

    var circumference=r*2*Math.PI;//create var called circumference,
    console.log(circumference);//output to console ECHO
    return circumference;//relocates function var to main code

}

calculatorCircumference(4);
//or
var circumferenceMAINcode = calculatorCircumference(4);
console.log("The Circumference of the Circle is "+circumferenceMAINcode+".");
