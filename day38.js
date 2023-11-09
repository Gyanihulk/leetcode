// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]





function moveZeroes(nums) {
    let nonZeroIndex=0

    for(let currentIndex=0;currentIndex<nums.length;currentIndex++){
        if(nums[currentIndex]!=0){
            nums[nonZeroIndex]=nums[currentIndex]

            if(currentIndex!=nonZeroIndex){
                nums[currentIndex]=0
            }

            nonZeroIndex++
        }
    }
}

// Example usage:
const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Expected output: [1, 3, 12, 0, 0]

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // Expected output: [0]

const nums3 = [1, 2, 3, 4, 5];
moveZeroes(nums3);
console.log(nums3); // Expected output: [1, 2, 3, 4, 5]

const nums4 = [0, 0, 0, 0, 0];
moveZeroes(nums4);
console.log(nums4); // Expected output: [0, 0, 0, 0, 0]

const nums5 = [0, 2, 0, 0, 3, 0, 4, 0];
moveZeroes(nums5);
console.log(nums5); // Expected output: [2, 3, 4, 0, 0, 0, 0, 0]
