// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

// Example 1:

// Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
// Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
// Initially, you are at the entrance cell [1,2].
// - You can reach [1,0] by moving 2 steps left.
// - You can reach [0,2] by moving 1 step up.
// It is impossible to reach [2,3] from the entrance.
// Thus, the nearest exit is [0,2], which is 1 step away.
// Example 2:

// Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
// Output: 2
// Explanation: There is 1 exit in this maze at [1,2].
// [1,0] does not count as an exit since it is the entrance cell.
// Initially, you are at the entrance cell [1,0].
// - You can reach [1,2] by moving 2 steps right.
// Thus, the nearest exit is [1,2], which is 2 steps away.
// Example 3:

// Input: maze = [[".","+"]], entrance = [0,0]
// Output: -1
// Explanation: There are no exits in this maze.

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  const rows = maze.length;
  const cols = maze[0].length;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // right, down, left, up

  const queue = [];
  queue.push({ row: entrance[0], col: entrance[1], steps: 0 });
  maze[entrance[0]][entrance[1]] = "+"; // Mark the entrance as visited

  while (queue.length > 0) {
    const current = queue.shift();

    for (const [dr, dc] of directions) {
      const newRow = current.row + dr;
      const newCol = current.col + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        maze[newRow][newCol] === "."
      ) {
        if (
          newRow === 0 ||
          newRow === rows - 1 ||
          newCol === 0 ||
          newCol === cols - 1
        ) {
          // Reached the border, return the number of steps
          return current.steps + 1;
        }

        queue.push({ row: newRow, col: newCol, steps: current.steps + 1 });
        maze[newRow][newCol] = "+"; // Mark the cell as visited
      }
    }
  }

  // No exit found
  return -1;
};

var nearestExit = function (maze, entrance) {
  const rows = maze.length;
  const cols = maze[0].length;

  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue = [];
  queue.push({ row: entrance[0], col: entrance[1], steps: 0 });
  maze[(entrance[0], entrance[1])] = "+";

  while (queue.length > 0) {
    const current = queue.shift();
    for (let [dr, dc] of direction) {
      const nextRow = current.row + dr;
      const nextCol = current.col + dc;
      if (
        nextRow >= 0 &&
        nextRow < rows &&
        nextCol >= 0 &&
        nextCol < cols &&
        maze[nextRow][nextCol] === "."
      ) {
        if (
          nextRow == 0 ||
          nextRow === rows - 1 ||
          nextCol === 0 ||
          nextCol === cols - 1
        ) {
          return current.steps + 1;
        }
        queue.push({ row: nextRow, col: nextCol, steps: current.steps + 1 });
        maze[nextRow][nextCol] = "+"; // Mark the cell as visited
      }
    }
  }

  return -1
};

// Example usage:
const maze1 = [
  ["+", "+", ".", "+"],
  [".", ".", ".", "+"],
  ["+", "+", "+", "."],
];
const entrance1 = [1, 2];
console.log(nearestExit(maze1, entrance1)); // Output: 1

const maze2 = [
  ["+", "+", "+"],
  [".", ".", "."],
  ["+", "+", "+"],
];
const entrance2 = [1, 0];
console.log(nearestExit(maze2, entrance2)); // Output: 2

const maze3 = [[".", "+"]];
const entrance3 = [0, 0];
console.log(nearestExit(maze3, entrance3)); // Output: -1
