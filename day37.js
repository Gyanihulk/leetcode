// Dynamic programming 
// You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.


// Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.

// In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.

 

// Example 1:


// Input: n = 3
// Output: 5
// Explanation: The five different ways are show above.
// Example 2:

// Input: n = 1
// Output: 1


function numTilings(n) {
    const MOD = 1000000007;
  
    // Base cases for n = 0, 1, and 2
    if (n <= 2) {
      return n;
    }
  
    // Initialize an array to store the number of ways to tile the board for each n
    const dp = new Array(n + 1).fill(0);
  
    // Base cases: For n = 0, 1, and 2, there are 0, 1, and 2 ways to tile the board.
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
  
    for (let i = 3; i <= n; i++) {
      // Recurrence relation:
      // To calculate the number of ways to tile a 2 x i board, we can consider two cases:
      // 1. Using a vertical domino to cover the last column of the board, and the remaining (i - 1) columns can be filled in dp[i - 1] ways.
      // 2. Using two horizontal dominos to cover the last two columns of the board, and the remaining (i - 2) columns can be filled in dp[i - 2] ways.
      // So, dp[i] = dp[i - 1] + dp[i - 2] * 2.
  
      dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;
    }
  
    // Return the number of ways to tile a 2 x n board modulo 10^9 + 7
    return dp[n];
  }

  
  const n1 = 3;
console.log(numTilings(n1)); // Output: 7

const n2 = 1;
console.log(numTilings(n2)); // Output: 1