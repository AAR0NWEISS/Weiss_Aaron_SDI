/*
 Aaron Weiss
 5MAR2015
 SEC00
 Day 2 Lab
 */

//alert("text that the user will see");
//great for checking values and debugging
//also shows all errors
//console.log("this is the console.")


/*
 Slice	of	Pie	part	1
 A	bunch	of	students	are	having	a	party	and	somebody	ordered	pizza.	Create	an	expression	that
 calculates	how	much	pizza	each	partygoer	will	get at	the	party.		(Assume	all	pizzas	have	the
 same	number	of	slices	and	that	the	person	dividing	the	pizza	is	really	precise,	so	this	can	be	a
 decimal,	like	3.52	slices,	etc.)
 Given:
  Number	of	slices	per	pizza
  Number	of	people	at	the	party
  Number	of	pizzas	ordered.
 Result	Variables:
  Number	of	slices	per	person.
 Result	Format:
  “Each	person	ate	X	slices	of	pizza	at	the	party.”
 */

var slicePerBox=8;// slice of piza per box
var peopleAtParty=10;// this is the number of people at party
var pizzasOrdered=4;// this is the number of pizza ordered
var epa="Each person ate "; //phrase1 test string
var sopatp=" slices of pizza at the party."; //phrase2 text string
slicesPerPizza=(pizzasOrdered * slicePerBox) /peopleAtParty;// this is were var1 + var2 = var called slicesPerPizza
var total1 = epa + slicesPerPizza + sopatp; // this is were string text and number are combined for output

//console.log ("If the number of people is "(peopleAtParty)"divided by "(pizzasOrdered)"="(slicesPerPizza);
//console.log(slicesPerPizza);// echo command in console
console.log(total1); //echo command in console
//_______________________________________________________________________________________________________________________//

/*
 lice	of	Pie part	II
 At	the	pizza	party	Sparky,	the	host’s	dog	is	excited,	because	he	gets	the	leftover	pizza	after	the
 slices	have	been	divided	up	evenly	among	the	guests.	Assume	guests	get	whole slices,	how
 many whole slices	will	Sparky	feast	on?
 Example	data	set: 10	people,	4	pizzas	and	8	slices	per	pizza	will	mean	each	person	eats	3	slices
 and	Sparky	gets	2	slices.	(Note	that	this	is	an	example,	your	code	should	work	and	give	me	the
 accurate	results	no	matter	what	numbers	I	put	in	for	those	given	variables.)
 Given:
  Don’t	make	new	given	variables/constants	for	this.	Instead	use	the	givens	you	set	up
 for	Slice	of	Pie	I.
 Result	Variables:
  Number	of	slices	Sparky	gets	to	eat.
 Result	Format:
  “Sparky	got	X slices	of	pizza.”
 */

var howMuchDogEats = (pizzasOrdered * slicePerBox) % peopleAtParty;// place to store output of var
var sparkGot="Spark got ";// text string
var slicesOfPizza=" slices of pizza."; //text string 2
var total2 = sparkGot + howMuchDogEats + slicesOfPizza;//echo command for console
console.log(total2);

/*______________________________________________________________________________________________________________________
 Average	shopping	bill
 You	are	budgeting	your	money	for	the	year	and	must	calculate	your	average	weekly	grocery
 shopping	spending	over	the	past	five	weeks.	Calculate the	average	amount	spent	on	groceries.
 Givens:
  5	weekly	grocery	bills.
 Result	Variable:
  Total	amount spent	on	groceries.
  Average	weekly	grocery	spending.
 Result	Format:
  “You	have spent	a	total	of	$X on	groceries	over	5	weeks.	That	is	an	average	of	$X per
 week”
 */

var week1=100;//place to store var week1
var week2=100;// place to store var week2
var week3=100;// place to store var week3
var week4=100;//place to store  var week4
var week5=100;// place to store var week5
var totalWeek= week1+week2+week3+week4+week5;// combine weeks1-5

console.log ("You have spent a total of $"+totalWeek+" on groceries over 5 weeks.");// I can echo with string in console command   echo command console
console.log ("That is an average of $"+(totalWeek/5)+" per week.");  //echo command console
console.log ("That is an average of $"+(totalWeek/5)*48+" per year.");  //echo command console

/*
Discounts
Calculate	the	discounted	price	for	an	item.	Create	an	expression	that	will	calculate	the
discounted	price	with	and without sales	tax.	(It	is	acceptable	for	the	result	to	have	more	than
two	digits	after	the	decimal.	$345.896	for	example.)
    Givens:
         Original	price
 Discount	percentage
 Description	of	item
 Sales	tax	percentage
Result	Variables:
     Price	of	the	item	with	tax
     Price	of	the	item	without	tax
Result	Format:
     “Your	X was	originally	$X,	but	after	a	X%	discount,	it	is	now	$X without	tax,	and	$X
with	tax.”
-----------------------------------------------------------------------------------------------------------------------*/

var originalPrice=345.896;
var descriptionItem="house";
var discountPercentage=.30;
var saleTaxPercentage="1";
var priceTax="tax";
var priceNoTax"No tax";

console.log("Your"+descriptionItem+" was originally $"+originalPrice+", but after a "+discountPercentage+"% disconunt, It is now $"+priceNoTax+" without tax, and $"+priceTax+" with tax.")

