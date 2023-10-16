// 18. 4Sum
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


function fourSum(nums, target) {
nums.sort((a,b)=>a-b)
const result=[]

for(let a=0;a<nums.length-3;a++){
    if(a>0 && nums[a]===nums[a-1]) continue;
    for(let b=a+1;b<nums.length-2;b++)
    {
        if(b>a+1 && nums[b]===nums[b-1]) continue;
        let left=b+1
        let right=nums.length-1
        while(left<right){
            const sum=nums[a]+nums[b]+nums[left]+nums[right]
            if(sum===target){
                result.push([nums[a],nums[b],nums[left],nums[right]])
                while(left<right && nums[left]===nums[left+1]) left++;
                while(left<right && nums[right ]===nums[right-1]) right--;
                left++;
                right--;
            }else if (sum<target){
                left++
            }else{
                right--
            }
        }
    }
}
return result
}


const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
const result = fourSum(nums, target);
console.log(result);


