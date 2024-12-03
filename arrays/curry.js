// Write a function curry to convert a function with multiple 	arguments into a curried function.
// 	console.log(addition(1)(2)(3)); 
//  	Output: 6
 	
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args); 
        } else {
            return function (...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

// Example function to be curried
function addition(a, b, c) {
    return a + b + c;
}

const curriedAddition = curry(addition);

console.log(curriedAddition(1)(2)(3)); // Output: 6
console.log(curriedAddition(1, 2)(3)); // Output: 6
console.log(curriedAddition(1)(2, 3)); // Output: 6
