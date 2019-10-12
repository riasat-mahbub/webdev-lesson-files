const urls = ['https://jsonplaceholder.typicode.com/posts',
'https://jonplaceholder.typicode.com/users']

const getdata = async function(){
	try{
		const a = await Promise.all( urls.map( (url) => {
			fetch(url)
			.then( (res) => {res.json()}) 
		}))
		console.log(a[0])
	}catch(error){
		console.log("error")
	}
}

getdata()