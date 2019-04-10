var readline = require('readline-sync');

var age = Number(readline.question('What\'s your age'));

if(age>=18){
    console.log('YAY!!! Your\'e an adult now');
}else{
    console.log('Hi fellow kids. Whassup');
}
