const promise = new Promise((resolve,reject) => {

	if(true){
		resolve("IT WORKED");
	}else{
		reject("SHIT FAILED, ABORT!!");
	}


});


promise
.then( result => result + "Your'e still gay tho. ^-^")
.then( result => {console.log(result)})
.catch( () => console.log("ERROR"))
.then( result => {
	throw Error;
	console.log("/n" + res)
})