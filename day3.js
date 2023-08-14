// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

var uniquePathsWithObstacles = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    console.log(m,n)
    // If the starting cell or ending cell is an obstacle, there's no path.
    if (grid[0][0] === 1 || grid[m - 1][n - 1] === 1) {
        return 0;
    }
    
    // Create a 2D array to store the number of unique paths to each cell.
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    
    // Initialize the starting cell.
    dp[0][0] = 1;
    
    // Initialize the first column. If there's an obstacle, paths after it are unreachable.
    for (let i = 1; i < m; i++) {
        
        dp[i][0] = (grid[i][0] === 1) ? 0 : dp[i - 1][0];
        console.log("after1",dp[i - 1][0],i)
    }
    
    // Initialize the first row. If there's an obstacle, paths after it are unreachable.
    for (let j = 1; j < n; j++) {
        
        dp[0][j] = (grid[0][j] === 1) ? 0 : dp[0][j - 1];
        console.log("after2",dp,j)
    }
    
    // Fill in the dp array by considering paths from above and from the left.
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (grid[i][j] === 0) {
               
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; 
                console.log("after3",dp,i,j)

            }
        }
    }
    
    return dp[m - 1][n - 1];
};

// Example usage
const grid = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
];

console.log(uniquePathsWithObstacles(grid)); // Output: 2
