function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}

const num = [1,2,4,56,8]
const target = [6]
console.log(twoSum(num, target))

/*
Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
Example: Given [2, 7, 11, 15] and target 9, return [0, 1] because 2 + 7 = 9.

function twoSum(arr, target) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]


*/