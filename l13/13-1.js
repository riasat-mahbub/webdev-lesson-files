var a = 12;

var af = function(){
	a = 1;
	console.log(a);
}

var aff = function(){
	a = 3;
	console.log(a);
}

var afff = function(){
	a = 5;
	console.log(a);
}

af();
aff();
afff();
console.log(a);