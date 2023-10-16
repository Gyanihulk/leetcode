// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


var majorityElement = function(nums) {

    let majority=nums[0]
    let count=1

    for(let i=1;i<nums.length;i++){
        if(count ===0){
            majority=nums[i]
            count=1
        }else if(nums[i]===majority){
            count++
        }else{

            count--
        }
    }

    return majority
}

const nums1 = [3, 2, 3];
console.log(majorityElement(nums1)); // Output: 3

const nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2)); // Output: 2