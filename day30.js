// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 

function mergeAlternately(word1, word2) {
    const result=[]
    let i=0
    let j=0

    while(i<word1.length && j<word2.length){

        result.push(word1[i]+word2[j])
        i++;
        j++;
    }

    return result.join('') + word1.slice(i) + word2.slice(j)
}

// Test cases
const word1 = "abc";
const word2 = "pqr";
console.log(mergeAlternately(word1, word2)); // Output: "apbqcr"

const word3 = "ab";
const word4 = "pqrs";
console.log(mergeAlternately(word3, word4)); // Output: "apbqrs"

const word5 = "abcd";
const word6 = "pq";
console.log(mergeAlternately(word5, word6)); // Output: "apbqcd"
