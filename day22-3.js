// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let minutes = 0;

  const isInsideGrid = (i, j) => i >= 0 && i < rows && j >= 0 && j < cols;

  let queue = [];
  let freshOranges = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      } else if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }

  if (freshOranges === 0) {
    return 0;
  }
  while (queue.length>0) {
    const [currentI, currentJ, currentMinute] = queue.shift();

    for (const [di, dj] of directions) {
      const newI = currentI + di;
      const newJ = currentJ + dj;

      if (isInsideGrid(newI, newJ) && grid[newI][newJ] == 1) {
        grid[newI][newJ] = 2;
        freshOranges--;
        minutes = Math.max(minutes, currentMinute + 1);
        queue.push([newI, newJ, currentMinute + 1]);
      }
    }
  }

  return freshOranges === 0 ? minutes : -1;
}

// Example 1
const grid1 = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
console.log(orangesRotting(grid1)); // Output: 4

// Example 2
const grid2 = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
console.log(orangesRotting(grid2)); // Output: -1

// Example 3
const grid3 = [[0, 2]];
console.log(orangesRotting(grid3)); // Output: 0
