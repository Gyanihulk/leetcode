// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

 

// Example 1:

// Input: n = 10, pick = 6
// Output: 6
// Example 2:

// Input: n = 1, pick = 1
// Output: 1
// Example 3:

// Input: n = 2, pick = 1
// Output: 1


// This is a mock implementation for the purpose of demonstration.
// In your actual implementation, you would replace this with the provided external API.
var guess = function(num) {
    // You would compare the argument 'num' with the target number and return -1, 1, or 0.
    // For example, if the target number is 6, you might implement the function like this:
    if (num < 6) {
      return 1; // Your guess is lower than the picked number.
    } else if (num > 6) {
      return -1; // Your guess is higher than the picked number.
    } else {
      return 0; // Your guess is equal to the picked number.
    }
  };


  var guessNumber = function(n) {
    let left = 1;
    let right = n;
  
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      const result = guess(mid);
  
      if (result === 0) {
        return mid; // Found the correct number
      } else if (result === -1) {
        right = mid - 1; // The correct number is lower
      } else {
        left = mid + 1; // The correct number is higher
      }
    }
  
    return -1; // This should never be reached in a valid scenario
  };
  