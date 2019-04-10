//Ternary Operator
var nnc = "Open";
var cse221 = "Not Taken";

nnc==="Open" ? cse221 = "Taken" : cse221= "Still Not Taken";

console.log(cse221);

//switch statement
const readline = require("readline-sync");
var gender = readline.question("What is your Gender?")

switch(gender){
	case "male":
		console.log("male");
		break;

	case "female":
		console.log("female");
		break;

	default:
		console.log("There are only two genders you pansy");
		break;
}

//Exercise 4

var winBattle = function(){
	return true;
}

var experienecePoints = winBattle() ? 10 : 1;
console.log(experienecePoints);