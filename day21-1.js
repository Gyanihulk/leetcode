// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

function maxVowels(s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      count++;
    }
  }
  maxCount = count;
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) {
      count--;
    }
    if (vowels.has(s[i])) {
      count++;
    }

    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}

// Example 1
const s1 = "abciiidef";
const k1 = 3;
console.log(maxVowels(s1, k1)); // Output: 3

// Example 2
const s2 = "aeiou";
const k2 = 2;
console.log(maxVowels(s2, k2)); // Output: 2
