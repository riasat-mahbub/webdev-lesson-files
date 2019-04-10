//map

const a = [1,1,1,1,1];
let temp = [];
a.forEach((i) =>{//
	temp.push(i*2);// Block 1
});//

console.log("temp = " +temp);

const mapA = a.map((i) => {return i*2}); //mutiply each value of a by 2 and saves it in new array.
				// same as Block 1

console.log("mapA = " + mapA);

//filter

let filterArray = a.filter( i => i%2);
console.log(filterArray);

//reduce

let reduceArray = a.reduce( ( (acc,i) => acc), 0);
console.log(reduceArray);