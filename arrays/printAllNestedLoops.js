function flattenArrayIterative(arr) {
    const stack = [...arr]; // Copy the input array to the stack
    const result = [];
    while (stack.length) {
        const current = stack.pop(); // Take the last element from the stack
        if (Array.isArray(current)) {
            stack.push(...current); // Spread and push nested elements onto the stack
        } else {
            result.push(current); // Add non-array elements to the result
        }
    }
    return result.reverse(); // Reverse to restore the correct order
}

const input = [1, [2, [3, [4, [5, [6, [7, [8]]]]]]]];
const flattened = flattenArrayIterative(input);
console.log(flattened);


