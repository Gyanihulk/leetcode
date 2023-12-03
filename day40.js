// You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

// Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

// Note:

// You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
// The transaction fee is only charged once for each stock purchase and sale.

// Example 1:

// Input: prices = [1,3,2,8,4,9], fee = 2
// Output: 8
// Explanation: The maximum profit can be achieved by:
// - Buying at prices[0] = 1
// - Selling at prices[3] = 8
// - Buying at prices[4] = 4
// - Selling at prices[5] = 9
// The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
// Example 2:

// Input: prices = [1,3,7,5,10,3], fee = 3
// Output: 6

// i = 1:

// buy[1] = max(buy[0], sell[0] - prices[1] - fee) = max(-3, 0 - 3 - 2) = -3
// sell[1] = max(sell[0], buy[0] + prices[1]) = max(0, -1 + 3) = 2
// i = 2:

// buy[2] = max(buy[1], sell[1] - prices[2] - fee) = max(-3, 2 - 2 - 2) = -3
// sell[2] = max(sell[1], buy[1] + prices[2]) = max(2, -1 + 2) = 2
// i = 3:

// buy[3] = max(buy[2], sell[2] - prices[3] - fee) = max(-3, 2 - 8 - 2) = -3
// sell[3] = max(sell[2], buy[2] + prices[3]) = max(2, -1 + 8) = 8
// i = 4:

// buy[4] = max(buy[3], sell[3] - prices[4] - fee) = max(-3, 8 - 4 - 2) = 1
// sell[4] = max(sell[3], buy[3] + prices[4]) = max(8, -1 + 4) = 8
// i = 5:

// buy[5] = max(buy[4], sell[4] - prices[5] - fee) = max(1, 8 - 9 - 2) = 1
// sell[5] = max(sell[4], buy[4] + prices[5]) = max(8, 1 + 9) = 10

function maxProfit(prices, fee) {
  const n = prices.length;

  if (n <= 1) {
    return 0;
  }

  const buy = new Array(n).fill(0);
  const sell = new Array(n).fill(0);

  buy[0] = -prices[0] - fee;
  sell[0] = 0;

  for (let i = 1; i < n; i++) {
    buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i] - fee);
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
  }

  return sell[n - 1];
}

// Example usage:
const prices1 = [1, 3, 2, 8, 4, 9];
const fee1 = 2;
console.log(maxProfit(prices1, fee1)); // Output: 8

const prices2 = [1, 3, 7, 5, 10, 3];
const fee2 = 3;
console.log(maxProfit(prices2, fee2)); // Output: 6
