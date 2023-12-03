// You are given a string s and an array of strings words. All the strings of words are of the same length.

// A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
// Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

// Example 1:

// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
// The output order does not matter. Returning [9,0] is fine too.
// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []
// Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
// There is no substring of length 16 in s that is equal to the concatenation of any permutation of words.
// We return an empty array.
// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]
// Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
// The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
// The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
// The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let wordLen = words[0].length
    let totalWords = words.length
    let subStrLen = wordLen * totalWords

    let cache = {}
    function checkString(str) {
        if (str in cache) {
            return cache[str]
        }
        let tempWords = [...words]
        for (let i = 0; i < totalWords; i++) {
            let w = str.slice(i * wordLen, (i + 1) * wordLen)
            let index = tempWords.indexOf(w)
            if (index >= 0) {
                tempWords[index] = null
            } else {
                cache[str] = false
                return cache[str]
            }
        }
        console.log(cache)
        cache[str] = true
        return cache[str]
    }

    let result = []
    let maxIndex = (s.length - subStrLen)
    for (let i = 0; i <= maxIndex; i++) {
        let subStr = s.slice(i, subStrLen + i)
        console.log(subStr,i)
        if (checkString(subStr)) {
            result.push(i)
        }
    }
    return result
};
// Example usage:
const example1 = findSubstring("barfoothefoobarman", ["foo", "bar"]);
console.log(example1); // Output: [0, 9]

const example2 = findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]);
console.log(example2); // Output: []

const example3 = findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]);
console.log(example3); // Output: [6, 9, 12]
