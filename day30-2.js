// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcd=(a,b)=>b===0?a:gcd(b,a%b)
  const gcdNo=gcd(str1.length,str2.length)

  return str2.slice(0,gcdNo)
}

// Test cases
const str1 = "ABCABC";
const str2 = "ABC";
console.log(gcdOfStrings(str1, str2)); // Output: "ABC"

const str3 = "ABABAB";
const str4 = "ABAB";
console.log(gcdOfStrings(str3, str4)); // Output: "AB"

const str5 = "LEET";
const str6 = "CODE";
console.log(gcdOfStrings(str5, str6)); // Output: ""
