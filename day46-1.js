// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

// Example 1:

// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Example 2:


// Input: root = [4,2,7,1,3], val = 5
// Output: []


  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (!root) {
        return null;
    }

    if (root.val === val) {
        return root;
    } else if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};

// Example usage:
// Assuming you have a TreeNode class and the root of the tree
// You can construct the tree using the TreeNode class and then use the searchBST function

// Example 1:
const root1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
const val1 = 2;
console.log(searchBST(root1, val1)); // Output: TreeNode { val: 2, left: TreeNode { val: 1, left: null, right: null }, right: TreeNode { val: 3, left: null, right: null } }

// Example 2:
const root2 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
const val2 = 5;
console.log(searchBST(root2, val2)); // Output: null
