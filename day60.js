// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104
// Accepted
// 2.5M
// Submissions
// 5.6M
// Acceptance Rate
// 44.8%
// Seen this question in a real interview before?
// 1/4
// Yes
// No
// Discussion (148)
// Similar Questions



function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

// Example usage:
const nums1 = [1, 3, 5, 6];
const target1 = 5;
console.log(searchInsert(nums1, target1)); // Output: 2

const nums2 = [1, 3, 5, 6];
const target2 = 2;
console.log(searchInsert(nums2, target2)); // Output: 1

const nums3 = [1, 3, 5, 6];
const target3 = 7;
console.log(searchInsert(nums3, target3)); // Output: 4
