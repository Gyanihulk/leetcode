// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"



function areCloseStrings(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const charCount1 = new Map();
    const charCount2 = new Map();

    for (let char of word1) {
        charCount1.set(char, (charCount1.get(char) || 0) + 1);
    }


    for (let char of word2) {
        charCount2.set(char, (charCount2.get(char) || 0) + 1);
    }

    const counts1 = Array.from(charCount1.values()).sort();
    const counts2 = Array.from(charCount2.values()).sort();

    const chars1 = Array.from(charCount1.keys()).sort();
    const chars2 = Array.from(charCount2.keys()).sort();

    return JSON.stringify(counts1) === JSON.stringify(counts2) && JSON.stringify(chars1) === JSON.stringify(chars2);
}





// Example usage:
const word1 = "abc";
const word2 = "bca";
console.log(areCloseStrings(word1, word2)); // Output: true

const word3 = "a";
const word4 = "aa";
console.log(areCloseStrings(word3, word4)); // Output: false

const word5 = "cabbba";
const word6 = "abbccc";
console.log(areCloseStrings(word5, word6)); // Output: true
