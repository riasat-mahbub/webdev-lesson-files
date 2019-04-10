function check(age){
    if(age < 18){
	alert("You must be over 18 to access this site");
    }else{
	alert("Congrat\'s on being an adult.\n Welcome to a world of suffering");
    }
}

var x = prompt("Please Enter your age: ");
var y = check(x);

