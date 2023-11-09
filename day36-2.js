// Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
// Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

// Example 1:

// Input: a = 2, b = 6, c = 5
// Output: 3
// Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
// Example 2:

// Input: a = 4, b = 2, c = 7
// Output: 1
// Example 3:

// Input: a = 1, b = 2, c = 3
// Output: 0
// function minFlips(a, b, c) {
//     const limit = Math.max(a, b, c);
//     let check = 1;
//     let result = 0;
//     while(check <= limit){
//         if(check & c){
//             if(!(check & a) && !(check & b)){
//                 result++;
//             }
//             console.log(check & c,"check at if(check & c) ",a,b,c,result)
//         }else{
//             if(check & a){
//                 result++;
//             }
//             if(check & b){
//                 result++;
//             }
//         }
//         console.log(check,"check at",result)
//         check *= 2;
//     }
//     return result;
// };
function minFlips1(a, b, c) {
  const aStr = a.toString(2).split("").reverse();
  const bStr = b.toString(2).split("").reverse();
  const target = c.toString(2).split("").reverse();

  let result = 0;
  const maxLen = Math.max(aStr.length, bStr.length, target.length);
  for (let i = 0; i < maxLen; i++) {
    if (!target[i] || target[i] === "0") {
      if (aStr[i] === "1") {
        result++;
      }
      if (bStr[i] === "1") {
        result++;
      }
    } else {
      if ((!aStr[i] || aStr[i] === "0") && (!bStr[i] || bStr[i] === "0")) {
        result++;
      }
    }
  }
  return result;
}

function minFlips(a, b, c) {
  const aStr = a.toString(2).split("").reverse();
  const bStr = b.toString(2).split("").reverse();
  const target = c.toString(2).split("").reverse();

  let result = 0;
  let length = Math.max(bStr.length, aStr.length, target.length);

  for (let i = 0; i < length; i++) {
    if (!target[i] || target[i] === "0") {
      if (aStr[i] === "1") {
        result++;
      }
      if (bStr[i] === "1") {
        result++;
      }
    } else {
      if ((!aStr[i] || aStr[i] === "0") && (!bStr[i] || bStr[i] === '0')) {
        result++;
      }
    }
  }
  return result;
}
// Example usage:
console.log(minFlips(2, 6, 5)); // Output: 3
console.log(minFlips(4, 2, 7)); // Output: 1
console.log(minFlips(1, 2, 3)); // Output: 0
