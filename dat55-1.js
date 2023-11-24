// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]
 

function binaryTreePaths(root) {
    const result = [];
  
    function dfs(node, path) {
      if (!node) {
        return;
      }
  
      // Add the current node value to the path
      path += node.val;
  
      // If the current node is a leaf, add the path to the result array
      if (!node.left && !node.right) {
        result.push(path);
        return;
      }
  
      // If the node has a left child, recursively traverse the left subtree
      if (node.left) {
        dfs(node.left, path + '->');
      }
  
      // If the node has a right child, recursively traverse the right subtree
      if (node.right) {
        dfs(node.right, path + '->');
      }
    }
  
    // Start DFS from the root with an empty path
    dfs(root, '');
  
    return result;
  }
  
  // Example usage:
  const example1 = {
    val: 1,
    left: { val: 2, left: null, right: { val: 5, left: null, right: null } },
    right: { val: 3, left: null, right: null }
  };
  
  const example2 = { val: 1, left: null, right: null };
  
  console.log(binaryTreePaths(example1));  // Output: ["1->2->5", "1->3"]
  console.log(binaryTreePaths(example2));  // Output: ["1"]
  