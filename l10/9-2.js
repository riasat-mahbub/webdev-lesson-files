//function declaration 1
function a(){
    alert("AAAAAAA");
}

a();

//function declaration 2
var b = alert("BBBBB");
b;
//function declaration 3
var c = function(){
    alert("CCCCCC");
}

c();

//function arguments: 1 element

function d(x){
    alert (x);
}

d("TEST function arg for 1");

//function arguments: >1 element

function f (q,w,e,r,t,y){
    alert(q+w+e+r+t+y);
}

f(1,1,1,1,1,1);

//function return value

function g(a){
    return a;
}

alert(g(111));
