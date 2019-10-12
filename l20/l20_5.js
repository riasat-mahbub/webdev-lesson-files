const promise = new Promise((resolve,reject) => {

	if(true){
		resolve("IT WORKED");
	}else{
		reject("SHIT FAILED, ABORT!!");
	}


});

const promise1 = new Promise((resolve) => {
	setTimeout(resolve, 100, ".1 Seconds have passed")
})


const promise2 = new Promise((resolve) => {
	setTimeout(resolve, 1000, "1 Seconds have passed")
})


const promise3 = new Promise((resolve) => {
	setTimeout(resolve, 5000, "5 Seconds have passed")
})

Promise
.all([promise1,promise2,promise3])
.then((result) => {
	result.forEach( (item) => {
		console.log(item);
	})
})


promise
.then( result => result + "Your'e still gay tho. ^-^")
.then( result => {console.log(result)})
.catch( () => console.log("ERROR"))
.then( result => {
	throw Error;
	console.log("/n" + res)
})