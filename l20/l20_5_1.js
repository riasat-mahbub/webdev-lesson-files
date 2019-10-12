const url_a = [
	"https://jsonplaceholder.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholder.typicode.com/albums"
];

Promise.all( url_a.map( (url) =>{
	return fetch(url)
			.then(results => results.json())
		}
	))
	.then(results =>{
		console.log(results[0]);
		console.log(results[1]);
		console.log(results[2]);	
	})
	.catch( () => {console.log("ERROR")})