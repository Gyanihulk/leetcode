// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?


function isPalindrome(x) {
    if (x < 0) {
        return false;  
    }

    const original = x;
    let reversedNum = 0;

    while (x > 0) {
        const digit = x % 10;
        reversedNum = reversedNum * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reversedNum;
}

console.log(isPalindrome(121));   // Output: true
console.log(isPalindrome(-121));  // Output: false
console.log(isPalindrome(10));


function isPalindromeByString(x) {
    if (x < 0) {
        return false;  // Negative numbers are not palindromes
    }

    const str = x.toString();
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindromeByString(121));   // Output: true
console.log(isPalindromeByString(-121));  // Output: false
console.log(isPalindromeByString(10));