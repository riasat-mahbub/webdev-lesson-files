//1 and 2
const promise_1 =  new Promise( (resolved, rejected) => {
	return setTimeout(resolved,4000, "4 seconds have passed", " And also your'e gay")
})

let str;

promise_1
.then( (result) => {str = result})
.then( (res) => {console.log(str)})

//3

Promise.resolve(setTimeout((val) => {console.log(val)} , 5000, "5 seconds have passed"))

//4

const resolve_1 = (res) => {
	console.log(res)
}

const reject_1 = (res) => {
	console.log(res)
}

Promise.reject( new Error("Shit I failed!"))
.then(resolve_1,reject_1)

//5
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all( urls.map ((url) => {
	return fetch(url)
			.then( (res) => res.json());
}))
.then( (res) => {
	console.log(res[1]);
})
.catch( (error) => {console.log("ERROR")})