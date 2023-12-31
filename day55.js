// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

function isPalindrome(s) {
    // Convert to lowercase and remove non-alphanumeric characters
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Check if the cleaned string is equal to its reverse
    return cleanedString === cleanedString.split('').reverse().join('');
  }
  
  // Example usage:
  const example1 = "A man, a plan, a canal: Panama";
  const example2 = "race a car";
  const example3 = " ";
  
  console.log(isPalindrome(example1));  // Output: true
  console.log(isPalindrome(example2));  // Output: false
  console.log(isPalindrome(example3));  // Output: true
  