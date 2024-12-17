// A closure allows a function to access variables from its lexical scope even after the outer function has returned.

// Function that demonstrates closure
function createPrinter(value) {
    return function() {
        console.log(value);
    };
}

// Example usage
const printHello = createPrinter("Hello, World!");
const printNumber = createPrinter(42);

// Calling the inner functions
printHello();   // Output: Hello, World!
printNumber();  // Output: 42
