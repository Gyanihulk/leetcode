// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


function rotate(nums, k) {
    const n = nums.length;
    k = k % n; // in case k is greater than the array length

    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements
    reverse(nums, k, n - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        // Swap elements at start and end indices
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Example usage:
const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
rotate(nums1, k1);
console.log(nums1); // Output: [5, 6, 7, 1, 2, 3, 4]

const nums2 = [-1, -100, 3, 99];
const k2 = 2;
rotate(nums2, k2);
console.log(nums2); // Output: [3, 99, -1, -100]
