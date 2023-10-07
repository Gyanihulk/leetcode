
function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
      return s;
    }
  
    const cols = numRows; // Number of columns is equal to the number of rows
    const dp = [];
  
    // To add a new row with all elements initialized to an empty string:
    function addRow() {
      const newRow = new Array(cols).fill("");
      dp.push(newRow);
    }
  
    for (let i = 0; i < numRows; i++) {
      addRow();
    }
    console.log(dp)
    let direction = 1; // 1 for downward, -1 for upward
    let rowIndex = 0;
  
    for (const char of s) {
      dp[rowIndex].push(char);
  
      if (rowIndex === 0) {
        direction = 1; // Change direction to downward when reaching the top row.
      } else if (rowIndex === numRows - 1) {
        direction = -1; // Change direction to upward when reaching the bottom row.
      }
  console.log(dp)
      rowIndex += direction;
      console.log(rowIndex)
    }
  
    let result = "";
    for (const row of dp) {
      result += row.join("");
    }
  
    return result;
  }



// Example 1
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"

// Example 2
// console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"

// // Example 3
// console.log(convert("A", 1)); // Output: "A"