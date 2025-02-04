// Write a function that sorts the following and returns the sorted array


// Ordering an array - [the array with the least sum of its numbers comes first]

// function leastSum(X){ 
//     if (Array.isArray(X)) {
//         X.sort((a, b) => a - b);
//         X.forEach(leastSum);
//         console.log(X);
//     }
    
   
// }


function leastSum(X) {
    // Separate numbers and arrays
    const numbers = [];
    const arrays = [];
  
    for (const item of X) {
      if (Array.isArray(item)) {
        // Sort nested arrays
        arrays.push(item.sort((a, b) => a - b));
      } else {
        numbers.push(item);
      }
    }
  
    // Sort the single numbers
    numbers.sort((a, b) => a - b);
  
    // Merge sorted numbers and sorted arrays
    return [...numbers, ...arrays];
  }
  
  const X = [99,[10,30,20], 22, -42, [3, 2, 0], 98, 100, [1001, 20, 23]];
  console.log(leastSum(X));
  
// const X = [99, 22, -42, [3, 2, 0], 98, 100, [1001,20,23]]
// leastSum(X);


// output = [-42, 22, 98, 99, 100, [0, 2, 3], [20, 23, 1001]]