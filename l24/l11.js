//fileSystem
const fs = require('fs');


console.log("------------------------------\n\n\n");
console.log('ReadFile\n');

/*
fs.readFile('./l11_test.txt', (err, data) =>{
    if(err){
        console.log('Error\n',err);
    }
    console.log('data\n',data.toString());
})


console.log("------------------------------\n\n\n");
console.log('ReadFile Sync\n');

const fileText = fs.readFileSync('./l11_test.txt');
console.log(fileText.toString());
*/  

console.log("------------------------------\n\n\n");
console.log('Append File\n');

/*fs.appendFile('./l11_test.txt', "\nThis Meme was brought to u by the fs gang",
(err) =>{
    if(err){
        console.log("ERROR");
    }
})
*/

console.log("------------------------------\n\n\n");
console.log('Write File\n');

fs.writeFile("./l11_test.txt", "Sorry, but I have to erase your memories", (err)=>{
    if(err){
        console.log("ERROR");
    }
})

console.log("------------------------------\n\n\n");
console.log('Unlink/DeleteFile\n');

/*fs.unlink('./l11_test.txt', (err)=>{
    if(err){
        console.log("ERROR");
    }
})
*/