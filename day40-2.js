// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

 

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23
 

// Constraints:

// 1 <= piles.length <= 104
// piles.length <= h <= 109
// 1 <= piles[i] <= 109

function minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        if (canFinish(piles, mid, h)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

function canFinish(piles, k, h) {
    let hoursRequired = 0;
    console.log(piles, k, h)
    for (const bananas of piles) {
        hoursRequired += Math.ceil(bananas / k);
        // console.log(Math.ceil(bananas / k),bananas / k)
    }
    return hoursRequired <= h;
}

// Example usage:
const piles1 = [3, 6, 7, 11];
const h1 = 8;
const piles2 = [30, 11, 23, 4, 20];
const h2 = 5;
const piles3 = [30, 11, 23, 4, 20];
const h3 = 6;

const output1 = minEatingSpeed(piles1, h1);
const output2 = minEatingSpeed(piles2, h2);
const output3 = minEatingSpeed(piles3, h3);

console.log(output1);  // Output: 4
console.log(output2);  // Output: 30
console.log(output3);  // Output: 23
