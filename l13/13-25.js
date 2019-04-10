const x = [1,2,4,591,392,391,2,5,10,2,1,1,1,"20","20"];

//Exercise 1
function organize(ara){
	let a = ara.sort((q,w) => q-w);
	let res = [];
	for(i=0;i<a.length;++i){
		let  temp = [];
		let c = a[i];
		while(a[i]===c){
			temp.push(a[i]);
			++i;
		}
		--i;
		if(temp.length===1){
			temp = temp[0];
		}
		res.push(temp);
	}
	return res;
}

console.log(organize(x));

//Exercise 2
function target(ara, x){
	for(i=0;i<ara.length;++i){
		let n = Math.abs(x-ara[i]);
		for(j = i+1;j<ara.length;++j){
			if(ara[j]===n){
				return [ara[i], ara[j]];
			}
		}
	}

	return "Not Found";
}

console.log(target(x, 592));

//Exercise 3
let hex = "#FF00FF"

function autoColorConvert(color){
	if(color[0]==='#'){
		let red = hex[1]+hex[2];
		red = parseInt(red,16);
		let blue = hex[5]+hex[6];
		blue = parseInt(blue,16);
		let green = hex[3]+hex[4];
		green = parseInt(green,16);
		return [red,green,blue]
	}else{
		let h = "#";
		h = h.concat(color[0].toString(16));
		h = h.concat(color[1].toString(16));
		h = h.concat(color[2].toString(16));
		return h;
	}
}

console.log(autoColorConvert([255,0,255]));