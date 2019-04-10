var obj = {
    //objects can have regular values
    name: 'riasat',
    age: 10,
    //and also functions
    yes: function(){
	return 'yes';
    },
};

console.log(obj.yes());


//add new properties to objects
obj.gay = false;
console.log(obj.gay);

//change value of property
obj.gay = true;
console.log(obj.gay);

//can also contain other objects and arrays
obj.ara = [1,2,3,4];
console.log(obj.ara);

obj.o = {
    newname: 'lord of the flies',
    oldname: 'riasat',
};
console.log(obj.o);

//objects can be either empty or null. Null objects cannot accept new properties as they are already null

eobj = {}//empty object
console.log(eobj);
eobj.a = "AAAAA";//empty objects can accept new values as theyre not null
console.log(eobj);

nobj = null;//a null object
console.log(nobj);

/*nobj.a = 1; //null objects stay null. Comment out to see error
console.log(nobj);*/


//EXERCISE

var user = {
    username: "Alga",
    password: 'gay',
};

console.log(user);

var database = [user];
console.log(database);


var newsfeed = [{name: 'a', pass: 123},
		{name: 'b', pass: 456},
		{name: 'c', pass: 678}];
console.log(newsfeed);
