//padStart() and padEnd()
let  alga = "Alga";
console.log(alga.padStart(10));
console.log(alga.padEnd(10));

//new way to write functions
function a(a,
			b,
			c,
			d,){
	console.log(a,
				b,
				c,
				d,);
}

a(1,
	2,
	3,
	4,);

//keys and values
let obj = {
	name : "Riasat",
	password : "Bolbo na",
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));