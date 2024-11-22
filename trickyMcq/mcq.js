
// 1. Variable Hoisting input
console.log(a);
var a = 10;
/**
 * output - undefined
 * Explanation: Due to hoisting, the declaration of a is moved to the top, but its assignment remains in
 * place. Therefore, a is undefined at the time of the console.log call.
 */

//2. Function Scope:

function test() {
    console.log(x);
    var x = 5;
  }
test();

/**
 * Output: undefined
 * Explanation: Within the function test, the variable x is hoisted, so its declaration is moved to the 
 * top of the function scope, but its assignment happens later. Thus, x is undefined when logged.
 */

// 3. Block Scope with let:
{
    console.log(y);
    let y = 20;
}
/**
 * Output: ReferenceError: Cannot access 'y' before initialization
 * Explanation: Variables declared with let are not hoisted in the same way as var. 
 * They are in a "temporal dead zone" from the start of the block until their declaration is encountered.
 */

// 4. Immediate Invocation:

(function() {
    var z = 30;
})();
console.log(z);
/**
 * Output: ReferenceError: z is not defined
 * Explanation: The variable z is scoped within the immediately invoked function expression (IIFE) 
 * and is not accessible outside of it.
 */

//5. Arrow Functions and this:
const obj = {
    value: 100,
    getValue: () => this.value
  };
console.log(obj.getValue());
/**
 * Output: undefined
 * Explanation: Arrow functions do not have their own this context; they inherit this from the
 *  surrounding scope. In this case, this does not refer to obj, so this.value is undefined.
 */

//6. Array Methods:
const arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);

/**
 * Output: 11
 * Explanation: Assigning a value to arr[10] sets the length of the array to 11,
 * with indices 3 through 9 being empty slots.
 */

// 7.Type Coercion:
console.log('5' - 3);
console.log('5' + 3);

/**
 * Output: 2 '53'
 * Explanation: The - operator converts the string '5' to a number, resulting in 2. 
 * The + operator, when used with a string, concatenates, resulting in '53'.
 */

//8. Object Property Access:
const obj1 = { a: 1 };
console.log(obj1.b?.c);

/**
 * Output: undefined
 * Explanation: The optional chaining operator ?. returns undefined if the property
 *  b does not exist, preventing a runtime error.
 */

// 9.Destructuring with Default Values:
const { x = 10, b = 5 } = { x: 3 };
console.log(a);
console.log(b);

/**
 * Output: 3 5
 * Explanation: Explanation: The variable a takes the value 3 from the object,
 *  while b uses the default value 5 since it is not present in the object.
 */
