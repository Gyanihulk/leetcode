// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]

var getRow = function (rowIndex) {
    let arr = [];
    arr[0] = [1];
    arr[1] = [1, 1];
    for (let i = 2; i <=rowIndex; i++) {
      let row = [1];
  
      for (let j = 0; j < i; j++) {
        const newValue = arr[i - 1][j] + arr[i - 1][j + 1];
        row.push(newValue);
      }
      row[i] = 1;
      arr[i] = row;
    }
    return arr[rowIndex];
  };

console.log(getRow(6));
