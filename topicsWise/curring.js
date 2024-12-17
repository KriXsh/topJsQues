/*
Currying enables flexibility and reusability:
It allows partial application of functions.
You can reuse the same function with different values. For instance, add5 can now repeatedly add 5 to any number.

*/
// Function that takes two arguments, implemented using currying
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

// Or call directly in two steps
console.log(add(2)(4)(4))