// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢t';
let rabbit = 'h🐇';

// it should look like this:
console.log(startLine);
console.log(turtle.padStart(5,'l'));
console.log(rabbit.padEnd(5,'j'));

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
for(i in obj){
	console.log(i +  " " + obj[i]);
}
