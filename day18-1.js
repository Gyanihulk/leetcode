// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.


var productExceptSelf = function(nums) {
 let n=nums.length
 let leftProduct=new Array(n)
 let rightProduct= new Array(n)
 let answer=new Array(n)

leftProduct[0]=1
 for(let i=1;i<n;i++){
    leftProduct[i]=leftProduct[i-1]*nums[i-1]
 }

 rightProduct[n-1]=1
 for(let i =n-2 ;i>=0;i--){
    rightProduct[i]=rightProduct[i+1]*nums[i+1]
 }

 for(let i =0;i<n;i++){
    answer[i]=leftProduct[i]*rightProduct[i]

 }

 return answer
};

const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result); // Output: [24, 12, 8, 6]