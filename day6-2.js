
// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

 

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0

var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) {
        return 0; // No subarray can have a product less than or equal to 0.
    }

    let count = 0;
    let product = 1;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];
        console.log("product",product)
        while (product >= k) {
            // If the product is greater than or equal to k, move the left pointer to the right.
            product /= nums[left];
            left++;
        }
        count += right - left + 1;
        console.log(count,"count")
    }

    return count;
};

// Example 1
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // Output: 8

// // Example 2
// console.log(numSubarrayProductLessThanK([1, 2, 3], 0)); // Output: 0


// numSubarrayProductLessThanK([10,5,2,6],100)