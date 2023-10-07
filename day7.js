// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

var removeDuplicates = function(nums) {
    let answer=[]
    for(let i=0;i<nums.length;i++){
        if(!answer.includes(nums[i])){
            answer.push(nums[i])
        }
    }
    return answer.length
};

// var removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] !== nums[j]) {
//         i++;
//         nums[i] = nums[j];
//       }
//     }
//     return i + 1;
//   }
console.log(removeDuplicates([0,0,0,0,0,1,1,1,1,2,2,3,3,4]))