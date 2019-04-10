//clousers
const first = () =>{
	const greet = "hiya";
	const second = () =>{
		console.log(greet);
	}
	return second;
}

const nfunc = first(); /*Here the first function returns the func second.
						But all second does is print greet. But greet isnt
						part of second. Its a part of first. So in order to 
						execute correctly the value of greet is saved for
						future reference when first was called.This saving
						of required variables from parents is clousure*/
nfunc();

//Currying

const mul = (a,b) => a*b;

const curriedMul = (a) => (b) => a*b; /*Here the curriedMul function does the 
										same job as the mul func. But instead
										taking both arguments at once, it takes 
										them one at a time. This taking off 
										arguments one at a time is known as 
										currying. */
console.log(mul(2,3));
console.log( curriedMul (2) (3) ); /*Here simply calling curriedMul(2,3) would 
									return (b) => a*b which is a function. So in
									order to get a value we must give another value 
									into the returned function as given above */

const mulBy10 = curriedMul(10); /*Here we see one of the uses of currying. Since this
								returns the func (b) => 10*b, we can use this to create
								a new function that multiplies numbers by 10. So, instead 
								of creating a whole new function we used curruying to 
								extend the uses of our function */
console.log(mulBy10(10));

//compose

const add1 = (a) => a+1;
const add2 = (a) => a+2;

const add3 = (x,y) =>(a) =>x(y(a));/* Here the func add3 takes two functions as input
									and returns a functions that uses those two 
									previous functions and returns a value from it.
									It uses currying to take another variable and uses
									clousers to save the functions of its parent to use 
									later. This is known as compose*/

console.log(add3(add1,add2)(5)); /*Here the func is given the funcs add1 and add2 as argument
								This returns another functions which takes the input 5. Now by
								using clousers we retrive the value of the two required functions
								from its parents and execute these functions, which returns a value
								of 8 */