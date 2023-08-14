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