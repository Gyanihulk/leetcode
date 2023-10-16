// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

// javacript


function isPalindrome(str) {
 return str==str.split("").reverse().join("")
}
function partition(s) {
 const result=[]

 function dfs(start,currentPartition){
    if(start===s.length){
        result.push([...currentPartition])
        return ;
    }

    for(let end=start+1;end<=s.length;end++){
        const subString=s.slice(start,end)
        if(isPalindrome(subString)){
            currentPartition.push(subString)
            dfs(end,currentPartition)
            currentPartition.pop()
        }
    }
 }

 dfs(0,[])

 return result
}

const s1 = "aab";
console.log(partitionPalindrome(s1)); // Output: [["a", "a", "b"], ["aa", "b"]]

const s2 = "a";
console.log(partitionPalindrome(s2));