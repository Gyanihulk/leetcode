// Given an array nums of distinct integers, 
// return all the possible permutations. You can return the answer in any order.
// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

function permute(arr){
    const result=[]
    function backtrack(current,remaining){
        if(remaining.length===0){
            result.push(current.slice())
        }

        for(let i=0;i<remaining.length;i++){
            current.push(remaining[i])
            const newRemaining=remaining.slice(0,i).concat(remaining.slice(i+1))
            backtrack(current,newRemaining)
            current.pop()
        }
    }
    backtrack([],arr)
    return result
}


// Example 1
const nums1 = [1, 2, 3];
console.log(permute(nums1));

// Example 2
const nums2 = [0, 1];
console.log(permute(nums2));

// Example 3
const nums3 = [1];
console.log(permute(nums3));