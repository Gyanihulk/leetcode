// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

// Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10

function minimumTotal(triangle) {
 for(let row=triangle.length -2;row>=0;row--){
  for(let col=0;col<triangle[row].length;col++){
    triangle[row][col]+=Math.min(triangle[row+1][col],triangle[row+1][col+1])

  }
 }

 return triangle[0][0]
}
// Example usage:
const triangle1 = [[2],[3,4],[6,5,7],[4,1,8,3]];
console.log(minimumTotal(triangle1)); // Output: 11

const triangle2 = [[-10]];
console.log(minimumTotal(triangle2)); // Output: -10
