//2461. Maximum Sum of Distinct Subarrays With Length K
//link - https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/

function maximumSubarraySum(nums, k) {
    let ans = 0; // Maximum sum
    let currentSum = 0; // Current window sum
    let begin = 0; // Start of the sliding window
    let lastSeen = new Map(); // Map to track the last seen index of each element

    for (let end = 0; end < nums.length; end++) {
        const curr = nums[end];
        const j = lastSeen.get(curr) ?? -1; // Last seen index of the current element

        // Shrink the window to maintain distinct elements and size <= k
        while (j >= begin || end - begin + 1 > k) {
            currentSum -= nums[begin];
            begin++;
        }

        // Add the current element to the sum
        currentSum += nums[end];
        lastSeen.set(curr, end);

        // Update the maximum sum when the window size is exactly k
        if (end - begin + 1 === k) {
            ans = Math.max(ans, currentSum);
        }
    }

    return ans;
}

// Example Usage
const nums = [1, 5, 4, 2, 9, 9, 9];
const k = 3;

const result = maximumSubarraySum(nums, k);
console.log("Maximum Subarray Sum:", result); // Expected Output: 15
