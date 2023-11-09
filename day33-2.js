// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

function canPlaceFlowers(flowerbed, n) {
   let count=0;
   for(let i=0;i<flowerbed.length;i++){
    if(flowerbed[i]===0){

        const prev=i===0?0:flowerbed[i-1]
        const next=i===flowerbed.length-1?0:flowerbed[i+1]

        if(prev===0 && next===0){
            flowerbed[i]=1
            count++
        }
    }
   }
   return count>=n
}

// Example 1
const flowerbed1 = [1, 0, 0, 0, 1];
const n1 = 1;
console.log(canPlaceFlowers(flowerbed1, n1)); // Output: true

// Example 2
const flowerbed2 = [1, 0, 0, 0, 1];
const n2 = 2;
console.log(canPlaceFlowers(flowerbed2, n2)); // Output: false
