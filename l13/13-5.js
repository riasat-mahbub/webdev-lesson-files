//let - is block scoped
//var - is function scoped

var a = 100;
let b = 200;

if(10>1){
	var a = 10;
	let b = 20;
	console.log("F" + a);
	console.log("F" + b);
}

console.log("O" + a);
console.log("O" + b);

//const - numerical constant

const pi = 3.141567;
console.log(2*pi*5*5);


//const functions

const e = function(){
	return 2.567;
}

console.log(e());


//OBJECTS

//constant objects - subelements are not constant but the object itself is
const obj = {
	gay : "NO",
	trap : "YES",
}

obj.gay = "YES";

console.log(obj);

//destructuring

let gayness = obj.gay; //
let trapness = obj.trap;//				Block 1
console.log(gayness,trapness);//

let {gay, trap} = obj; // Same action as Block 1
console.log(gay + " " +trap);

//new ways to name object properties. Use the [] operator to use variables and constats in naming object proprties

let name = "Riyad Foysal"

let person = {
	[name]: "Is an idiot",
	[1+1]: "East or West No.2 Noodles are the best",
}

console.log(person);

//If we want the object properties from variables, use this

let q =1;
let gg = "GIT GUD";
let ez = false;

let LOL = {
	q,
	gg,
	ez,
}

console.log(LOL);

//MISC
//template strings ``

let tempString = `I'm the no ${q} Dark Souls Player in za warudo.
U Noobs should either ${gg} or else it'll be like
a stupid ${ez} dream`;

console.log(tempString);

//default functiom arguments

function golden(name = "Riasat", country = "Espaniol", lostCity = "Xupitec"){
	let msg  = `I'm the Conquistador ${name} from ${country} and I've come 
to the new world to search for the golden lost city of ${lostCity}`;
	console.log(msg);
}

golden();
golden("Mufrat","England","California");

//symbols

let aa = Symbol();
let bb = Symbol();
console.log(aa===bb);// not same despite same declaration

//arrow functions

function sub(x,y){
	return x-y;
}

console.log(sub(3,2));

let sub2 = (x,y) => x-y;// same as function sub
console.log(sub2(3,2));