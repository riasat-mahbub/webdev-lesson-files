//basic array
var a = ['12',1];

console.log(a[0]);
console.log(a[1]);

//function array

var q = function(){
   console.log("AAAAAA");
}

var w = function(){
   console.log("BBBBb");
}

var x = [q(),w()];

x[0];

//multi-dimensiomal array

var mul = [
    [1,'2',3,'4'],
    [1,2+2+2]
];

console.log(mul);

//arry basic functions

mul.shift();//removes leftmost element
mul.pop();//removes rigthmost element
mul.push([1,2,3,4,5,6]);//pushes new elements to array
mul.push([1,2,3,4]);//pushes new elements to array
mul= mul.concat([[8,7,6,5]]);//concat returns the merge of two arrays but doesnt actually merge it
mul.sort();//sorts the array
console.log(mul);

//EXERCISE
var xx = ["Banana", "Apple", "Oranges", "Blueberries"];
console.log(xx);
xx.shift();
console.log(xx);
xx.push("Kiwi");
console.log(xx);
xx.shift();
console.log(xx);
xx.reverse();
console.log(xx);

var y = ['a',['b',['c'], 'd']];
console.log(y[1][1][0]);
