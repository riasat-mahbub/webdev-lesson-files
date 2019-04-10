const array = [1,2,3,4,5,6,7,8,9,0];

//for loop
console.log("Regular for loop");
for(i=0;i<array.length;++i){
	console.log(array[i]);
}

//forEach
console.log("forEach loop");
array.forEach(i => console.log(i));

//for of
console.log("for of loop");
for( i of array){
	console.log(i);
}

//for in -loop over and see object property names
const obj = {
	name : "Riasat",
	password: "Bolbo na",
}

console.log("for in loop");
for(i in obj){
	console.log(i);
}