/* Find the Intersection of Two Arrays
Problem: Return the intersection of two arrays as a new array. Each element in the result must be unique.
Example: Given [1, 2, 2, 1] and [2, 2], return [2].
*/

function intersection(arr1, arr2) {
    let set1 = new Set(arr1);
    return [...new Set(arr2.filter(num => set1.has(num)))];
}

console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
