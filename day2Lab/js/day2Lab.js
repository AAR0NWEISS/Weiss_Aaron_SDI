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

var slicePerBox=100;
var peopleAtParty=5;// this is the number of people at party
var pizzasOrdered=1;// this is the number of pizza ordered
var epa="Each person ate "; //phrase1 test string
var sopatp=" slices of pizza at the party."; //phrase2 text string
slicesPerPizza=(pizzasOrdered * slicePerBox) /peopleAtParty;// this is were var1 + var2 = var called slicesPerPizza
var total = epa + slicesPerPizza + sopatp // this is were string text and number are combined for output

//console.log ("If the number of people is "(peopleAtParty)"divided by "(pizzasOrdered)"="(slicesPerPizza);
//console.log(slicesPerPizza);// echo command in console
console.log (total); //echo command in console
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






