function removeDuplicates(nums) {
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index++] = nums[i];
        }
    }
    return index;
}

const num = [1,1,4,1,4,3,4,5,5,6]
console.log(removeDuplicates(num))