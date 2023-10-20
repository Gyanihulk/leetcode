// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.
// Example 3:

// Input: k = 4, n = 1
// Output: []
// Explanation: There are no valid combinations.
// Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.


var combinationSum3 = function(k, n) {
   let result=[]

   function dfs(start,k,n,combination){
    if(k==0 && n==0){
        result.push([...combination])
        return
    }

    if(k==0 || n<=0){
        return
    }

    for(let i =start;i<=9;i++){
        combination.push(i)
        dfs(i+1,k-1,n-i,combination)
        combination.pop()
    }
   }
   dfs(1,k,n,[])

   return result
};



const k1 = 3, n1 = 7;
const k2 = 3, n2 = 9;
const k3 = 4, n3 = 1;

console.log(combinationSum3(k1, n1)); // Example 1
console.log(combinationSum3(k2, n2)); // Example 2
console.log(combinationSum3(k3, n3)); // Example 3