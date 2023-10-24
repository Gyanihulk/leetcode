// You are given the root of a binary tree.

// A ZigZag path for a binary tree is defined as follow:

// Choose any node in the binary tree and a direction (right or left).
// If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
// Change the direction from right to left or from left to right.
// Repeat the second and third steps until you can't move in the tree.
// Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

// Return the longest ZigZag path contained in that tree.

// Example 1:

// Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
// Output: 3
// Explanation: Longest ZigZag path in blue nodes (right -> left -> right).
// Example 2:

// Input: root = [1,1,1,null,1,null,null,1,1,null,1]
// Output: 4
// Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).
// Example 3:

// Input: root = [1]
// Output: 0


class TreeNode{
    constructor(val,left=null,right=null){
        this.val=val
        this.left=left
        this.right=right
    }
}
function longestZigZagPath(root){
    let maxZigZag=0

    function  dfs(node,direction,pathLength){
        if(!node){
            return
        }
maxZigZag=Math.max(maxZigZag,pathLength)
        if(direction==="right"){
            dfs(node.left,"left",pathLength+1)
            dfs(node.right,"right",1)
        }else{
            dfs(node.right,"right",pathLength+1)
            dfs(node.left,"left",1)
        }
    }

    dfs(root, 'right', 0); // Start with the right direction
    dfs(root, 'left', 0); // Start with the left direction
  
    return maxZigZag;
}


// Example usage:
const root1 = new TreeNode(1);
root1.right = new TreeNode(1);
root1.right.left = new TreeNode(1);
root1.right.right = new TreeNode(1);
root1.right.left.left = new TreeNode(1);
root1.right.right.right = new TreeNode(1);
root1.right.left.left.left = new TreeNode(1);

console.log(longestZigZagPath(root1)); // Output: 3

const root2 = new TreeNode(1);
root2.left = new TreeNode(1);
root2.right = new TreeNode(1);
root2.right.left = new TreeNode(1);
root2.right.right = new TreeNode(1);
root2.right.left.left = new TreeNode(1);
root2.right.left.right = new TreeNode(1);
root2.right.right.left = new TreeNode(1);

console.log(longestZigZagPath(root2)); // Output: 4

const root3 = new TreeNode(1);

console.log(longestZigZagPath(root3)); // Output: 0