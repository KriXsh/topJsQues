//this is the nested array i wnat output like [1,3,4,5,8,7]  
/**
 * without using array.flat method
 */

const arr = [1, [2, [3, [5, [6, [8, [3]]]]]]];

function flatteArray(arr) {
    let result = [];
    for (const Item of arr) {
        if (Array.isArray(Item)) {
            result = result.concat(flatteArray(Item)); // recursion 
        }
        else {
            result.push(Item);
        }
    }
    return result;
}

console.log(flatteArray(arr))




/**
 * using array.flat method
 */

const arr1 = [1, [2, [3, [5, [6, [8, [3]]]]]]];

console.log(arr1.flat(Infinity));

