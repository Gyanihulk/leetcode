// ye Heap kuch alag cheeze hai bhai 
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
 

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104


// function findKthLargest(nums, k) {
//     nums.sort((a, b) => b - a); 
//     console.log(nums)// Sort the array in descending order
//     return nums[k - 1]; // Return the kth largest element (0-based index)
//   }
  

  function findKthLargest(nums, k) {
    const partition = (arr, low, high) => {
      const pivot = arr[high];
      let i = low;
  
      for (let j = low; j < high; j++) {
        if (arr[j] >= pivot) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
        }
      }
  
      [arr[i], arr[high]] = [arr[high], arr[i]];
      return i;
    };
  
    const quickSelect = (arr, low, high, k) => {
      if (low === high) return arr[low];
  
      const pivotIndex = partition(arr, low, high);
  
      if (k === pivotIndex) return arr[k];
      else if (k < pivotIndex) return quickSelect(arr, low, pivotIndex - 1, k);
      else return quickSelect(arr, pivotIndex + 1, high, k);
    };
  
    const kthIndex = nums.length - k;
    return quickSelect(nums, 0, nums.length - 1, kthIndex);
  }
  
  
  // Example usage:
  const nums1 = [3, 2, 1, 5, 6, 4];
  const k1 = 2;
  console.log(findKthLargest(nums1, k1)); // Output: 5
  
  const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
  const k2 = 4;
  console.log(findKthLargest(nums2, k2)); // Output: 4
  