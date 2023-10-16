// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

function reverse(x) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = (-2) ** 31;
  
    if (x === 0) {
      return 0;
    }
  
    let reversed_x = 0;
    const sign = x > 0 ? 1 : -1;
    x = Math.abs(x);
  
    while (x !== 0) {
      const pop = x % 10;
      x = Math.floor(x / 10);
  
      if (reversed_x > (INT_MAX - pop) / 10 || reversed_x<(INT_MIN-pop)/10) {
        return 0;
      }
  
      reversed_x = reversed_x * 10 + pop;
    }
  
    return reversed_x * sign;
  }

  console.log(reverse(-120));  // Output: 321
  