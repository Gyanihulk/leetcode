// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

function decodeString(s) {
  const stack = [];

  for (let char of s) {
    if (char !== "]") {
      stack.push(char);
    } else {
        let substr=''
        while(stack[stack.length-1]!=="["){
            substr=stack.pop()+ substr
        }
        stack.pop()
        let num=''
        while(stack.length > 0 && !isNaN(stack[stack.length-1])){
            num=stack.pop()+num
        }
        num=parseInt(num,10)
        stack.push(substr.repeat(num))
    }
  }
  return stack.join('')
}

// Example usage:
const s1 = "3[a]2[bc]";
console.log(decodeString(s1)); // Output: "aaabcbc"

const s2 = "3[a2[c]]";
console.log(decodeString(s2)); // Output: "accaccacc"

const s3 = "2[abc]3[cd]ef";
console.log(decodeString(s3)); // Output: "abcabccdcdcdef"

const s4 = "100[leetcode]";
console.log(decodeString(s4)); 