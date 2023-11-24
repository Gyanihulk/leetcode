// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // Edge case: if the array has 0 or 1 element, no duplicates to remove
    if (nums.length <= 1) {
        return nums.length;
    }

    // Initialize a pointer to keep track of the position to overwrite
    let k = 2; // The first two elements are always included

    // Iterate through the array starting from the third element
    for (let i = 2; i < nums.length; i++) {
        // If the current element is not equal to the two elements before it, overwrite the element at position k and increment k
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    // The first k elements of nums now contain the unique elements with at most two occurrences

    return k;
};

// Example usage:
let nums1 = [1, 1, 1, 2, 2, 3];
let k1 = removeDuplicates(nums1);
console.log(`Output: ${k1}, nums = [${nums1.slice(0, k1)}]`);

let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let k2 = removeDuplicates(nums2);
console.log(`Output: ${k2}, nums = [${nums2.slice(0, k2)}]`);
