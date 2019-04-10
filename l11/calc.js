var readline = require('readline-sync');

var a = Number(readline.question('Enter the 1st number: '));
var b = Number(readline.question('Enter the 2nd number: '));
var c = readline.question('Enter operation: add, sub, div, mul: ');

switch(c){

case 'add':
    console.log(a+b);
    break;

case 'sub':
    console.log(a-b);
    break;

case 'mul':
    console.log(a*b);
    break;

case 'div':
    console.log(a/b);
    break;

default:
    console.log('Invalid operation name.\nTry again');
    break;
}
