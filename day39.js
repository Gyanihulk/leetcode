// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

// Example 1:

// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2
// Example 2:

// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3

function findCircleNum(isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);
  let provinces = 0;

  function dfs(city) {
    visited[city] = true;
    for (let j = 0; j < n; j++) {
      if (isConnected[city][j] == 1 && !visited[j]) {
        dfs(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      provinces++;
    }
  }
  return provinces;
}

// Example 1
const isConnected1 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
console.log(findCircleNum(isConnected1)); // Output: 2

// Example 2
const isConnected2 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
console.log(findCircleNum(isConnected2)); // Output: 3
