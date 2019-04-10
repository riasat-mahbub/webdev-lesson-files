var a = ['a','b','c','d','e','f','g','h','i','j'];

//for loop
for(let i=0;i<a.length;++i){
    console.log(a[i]);
}

//while loop
var i = 0;
while(i<a.length){
    a[i] = ++i;
    console.log(a[i-1]);
}

//do while

var x = 'a';
do{
    x = x+x;
    a[i] = x;
    console.log(a[i]);
    ++i;
}while(i<a.length);

//foreach

//without index
a.forEach(function(i){
    console.log(i);
});

//with index
a.forEach(function(x,i){
    console.log(x+"::"+i);
});
 
//with external function

function alga(x,i){
    console.log('Vitamin T koi ?');
}

a.forEach(alga);

