// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

// Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.

 

// Example 1:

// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation: 
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? 
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
// note: x is undefined => -1.0
// Example 2:

// Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// Output: [3.75000,0.40000,5.00000,0.20000]
// Example 3:

// Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// Output: [0.50000,2.00000,-1.00000,-1.00000]


var calcEquation = function(equations, values, queries) {
    const graph = {};
  
    // Build the graph
    for (let i = 0; i < equations.length; i++) {
      const [a, b] = equations[i];
      const value = values[i];
  
      if (!graph[a]) graph[a] = [];
      if (!graph[b]) graph[b] = [];
  
      graph[a].push({ node: b, value });
      graph[b].push({ node: a, value: 1 / value });
    }
  
    const dfs = (start, end, visited) => {
      // If start or end is not in the graph, or start and end are the same variable
      if (!graph[start] || !graph[end] || visited.has(start)) return -1.0;
  
      // If we reach the end node, return the accumulated product of values
      if (start === end) return 1.0;
  
      visited.add(start);
  
      // DFS for neighbors
      for (const neighbor of graph[start]) {
        const result = dfs(neighbor.node, end, visited);
  
        // If a valid path is found, return the accumulated product of values
        if (result !== -1.0) {
          return result * neighbor.value;
        }
      }
  
      return -1.0;
    };
  
    const results = [];
  
    // Process queries
    for (const query of queries) {
      const [c, d] = query;
      const result = dfs(c, d, new Set());
  
      results.push(result === -1.0 ? -1.0 : result.toFixed(5));
    }
  
    return results;
  };
  

  
var calcEquation = function(equations, values, queries) {
    const graph = {};
  
    // Build the graph
    for (let i = 0; i < equations.length; i++) {
      const [a,b]=equations[i]
      const value=values[i]

      if(!graph[a]) graph[a]=[]
      if(!graph[b]) graph[b]=[]

      graph[a].push({node: b,value})

    }
  
    const dfs = (start, end, visited) => {
     
    };
  
    const results = [];
  
    // Process queries
    for (const query of queries) {
 
    }
  
    return results;
  };

  // Example usage:
  const equations1 = [["a","b"],["b","c"]];
  const values1 = [2.0, 3.0];
  const queries1 = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];
  console.log(calcEquation(equations1, values1, queries1)); // Output: [6.00000, 0.50000, -1.00000, 1.00000, -1.00000]
  
  const equations2 = [["a","b"],["b","c"],["bc","cd"]];
  const values2 = [1.5, 2.5, 5.0];
  const queries2 = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]];
  console.log(calcEquation(equations2, values2, queries2)); // Output: [3.75000, 0.40000, 5.00000, 0.20000]
  
  const equations3 = [["a","b"]];
  const values3 = [0.5];
  const queries3 = [["a","b"],["b","a"],["a","c"],["x","y"]];
  console.log(calcEquation(equations3, values3, queries3)); // Output: [0.50000, 2.00000, -1.00000, -1.00000]
  