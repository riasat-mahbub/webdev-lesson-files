//FileSystem
const fs = require('fs');

let r = 0


const data = fs.readFileSync('./l12.txt')
const p = data.toString();

for(let i = 0; i < p.length; ++i){
    if (p.charAt(i) === '(') {
        ++r;
    }else if (p.charAt(i) === ')') {
        --r;
    }
}

console.log(r);