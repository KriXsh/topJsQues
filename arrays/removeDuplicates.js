// 3. Remove Duplicates from a Sorted Array
function removeDuplicates(arr) {
    arr.sort((a, b) => a - b); // Sort the array first if not 
    let index = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[index++] = arr[i];
        }
    }
    return arr.slice(0, index);
}

console.log(removeDuplicates([1, 1, 4, 1, 4, 3, 4, 5, 5, 6])); 



// function removeDuplicates(nums) {
//     let index = 1;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[index++] = nums[i];
//         }
//     }
//     return index;
// }

// const num = [1,1,4,1,4,3,4,5,5,6]
// console.log(removeDuplicates(num))