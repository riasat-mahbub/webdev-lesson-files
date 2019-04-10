//references
console.log([] === []);//false
console.log([1] === [1]);//false

let obj1 = {a: 1234};
let obj2 = obj1;
let obj3 = {a: 1234};
console.log(obj1===obj2);//true, since obj2 IS obj1
console.log(obj1===obj3);//false, since obj1 and obj3
						//despite having the same values
						//are different objects, so they
						//aren't equal
//context
let obj = {
	a: 1,
	b: function() {//the function keyword can uses the references
					//of the ibject  its being used in. So it can 
					//directly alter variables.

		this.a = 4;//here this references the current object
					//the function is in.So, this.a is essentially
					//calling obj.a but its being used inside the object
					//its being called from
	},
	c: () => this.a = 9,//the => keyword just uses the values of the objects
						//when using keywords like this. So while it can use
						//the values of the objects its being used in, it cant
						//alter them in any way
};
console.log(obj.a);
obj.b();
console.log(obj.a);
obj.c();
console.log(obj.a)

//instantiation
class Girl{
	constructor(name,type){
		this.name = name;
		this.type = type;
	}

	introduction(){
		console.log("This girl's name is " + this.name);
		console.log("She seems lile a " + this.type);
	}
}

class Tsundere extends Girl{
	constructor(name){
		super(name, "Tsundere");
	}
}

let Nagisa = new Girl("Nagisa", "Deredere");
let Misaka = new Tsundere("Misaka");

console.log(Nagisa);
console.log(Misaka);