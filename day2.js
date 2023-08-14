// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// The answer is guaranteed to fit into a signed 32-bit integer.

 

// Example 1:

// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10]
// Output: 1

var change= function(amount,coins){
const dp =new Array(amount +1).fill(0);
dp[0]=1;

for(const coin of coins){
    for(let i=coin;i<=amount;i++){
        dp[i]+=dp[i-coin];
    }
}

return dp[amount];

}


const amount1 = 5;
const coins1 = [1, 2, 5];
console.log(change(amount1, coins1));  // Output: 4

const amount2 = 3;
const coins2 = [2];
console.log(change(amount2, coins2));  // Output: 0

const amount3 = 10;
const coins3 = [10];
console.log(change(amount3, coins3));