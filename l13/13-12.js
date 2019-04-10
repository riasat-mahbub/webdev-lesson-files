//Evaluate these:
//#1
console.log([2] === [2]); //false
console.log({} === {} );//false

//#2 what is the value of property a for each object.
const object1 = { a: 5 };//4 
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5}; //5
object1.a = 4;
console.log(object1.a);
console.log(object2.a);
console.log(object3.a);
console.log(object4.a);

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal{
	constructor(name,type,color){
		this.name = name;
		this.type = type;
		this.color = color;
	}
	moo(){
		console.log("MOO I\'m " + this.name);
		console.log("MOO I\'m a " + this.type);
		console.log("MOO I\'m also" + this.color);
	}
}

class Mamal extends Animal{
	constructor(name,color){
		super(name ,"Mamal" , color);
	}

	moo(){
		console.log("MOO I\'m " + this.name);
		console.log("MOO I\'m a " + this.type);
		console.log("MOO I\'m also" + this.color);
	}
}

let cow = new Mamal("Shelly", "Red");
console.log(cow);