//1

const func_1 = async function(){
	const res = await fetch('https://swapi.co/api/starships/9/')
	const data = await res.json();
	console.log(data);
}

//2

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/pos',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
	try{
  		const [ users, posts, albums ] = await Promise.all(urls.map(
  			async function(url){
  				const res = await fetch(url);
  				const data = await res.json();
  				return data;
  		}));
  		console.log('users', users);
  		console.log('posta', posts);
  		console.log('albums', albums);
  	}catch(error){
  		console.error("error");
  	}
}
