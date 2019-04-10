// change everything below to the newer Javascript!

// let + const
const a = 'test';
let b = true;
let c = 789;
console.log(a+" "+b+" "+c);

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let {firstName, lastName, age, eyeColor} = person;
console.log(firstName + " " + lastName + " " + age + " " + eyeColor);

// Object properties
b = true;
c = 789;

var okObj = {
  a,
  b,
  c,
};


// Template strings
let city = "Dhaka"
var message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;
console.log(message);

// default arguments
// default age to 10;
function isValidAge(age = 10) {
    return age
}

console.log(isValidAge());

// Symbol
// Create a symbol: "This is my first Symbol"
let sym1 = Symbol("This is my first symbol");
let sym2 = Symbol("This is my first symbol");
console.log("sym1 === sym2:" + (sym1===sym2));

// Arrow functions

let whereAmI  =(username, location) => username && location ? "I am not lost" : "I am totally lost";
console.log(whereAmI("riasat", "a"));