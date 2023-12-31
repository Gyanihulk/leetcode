// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

// Example 1:


// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:


// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
// Example 3:

// Input: root = [1,2], p = 1, q = 2
// Output: 1
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
    
    let ans;
    
    const recurseTree = (currentNode, p, q) => {

        if (currentNode === null) return false;

        const left = recurseTree(currentNode.left, p, q) ? 1 : 0;
        const right = recurseTree(currentNode.right, p, q) ? 1 : 0;
        const mid = (currentNode === p || currentNode === q) ? 1 : 0;

        if (mid + left + right >= 2) {
            ans = currentNode;
        }
        return (mid + left + right > 0);
    }
    
    recurseTree(root, p, q);
    
    return ans;
};

