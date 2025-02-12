/*
Problem Statement
Given an array of integers (which may include negative numbers), find the maximum sum of any contiguous subarray.

Example 1:
Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6.

Example 2:
Input: nums = [1, 2, 3, -2, 5]
Output: 9
Explanation: The subarray [1, 2, 3, -2, 5] has the largest sum = 9.


*/

//Optimized Kadane’s Algorithm (O(n) Time Complexity)


function maxSubArray(nums) {
    let maxSum = nums[0];  // Store maximum subarray sum found so far
    let currentSum = nums[0];  // Store current subarray sum

    for (let i = 1; i < nums.length; i++) {
        // Decide whether to extend the current subarray or start a new one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Test Cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxSubArray([1,2,3,-2,5])); // Output: 9
console.log(maxSubArray([-1, -2, -3, -4])); // Output: -1 (Handles all negative numbers)
console.log(maxSubArray([4, -1, 2, 1])); // Output: 6
