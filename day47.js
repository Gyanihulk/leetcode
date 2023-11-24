// 1161. Maximum Level Sum of a Binary Tree
// Medium
// 3.3K
// 97
// Companies
// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

 

// Example 1:


// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation: 
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.
// Example 2:

// Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105


//   Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val === undefined ? 0 : val);
      this.left = (left === undefined ? null : left);
      this.right = (right === undefined ? null : right);
  }


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    if (!root) {
        return 0;
    }

    let maxSum = -Infinity;
    let resultLevel = 0;
    let level = 0;

    const queue = [root];

    while (queue.length > 0) {
        level += 1;
        let currentSum = 0;
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            currentSum += node.val;

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            resultLevel = level;
        }
    }

    return resultLevel;
};

// Example usage:
// Assuming you have a root tree node, e.g., root1 and root2, as defined in the previous example.

var root1 = new TreeNode(1, new TreeNode(7), new TreeNode(0, new TreeNode(7), new TreeNode(-8)));
console.log(maxLevelSum(root1));  // Output: 2

var root2 = new TreeNode(989, null, new TreeNode(10250, new TreeNode(98693), new TreeNode(-89388, null, null, new TreeNode(-32127))));
console.log(maxLevelSum(root2));  // Output: 2
