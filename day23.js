// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.

// Example 1:

// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.
// Example 2:

// Input: root = [3,3,null,4,2]
// Output: 3
// Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.
// Example 3:

// Input: root = [1]
// Output: 1
// Explanation: Root is considered as good.
 
class TreeNode{
    constructor(val,left=null,right=null){
        this.val=val
        this.left=left
        this.right=right
    }
}

 function countGoodNodes(root){
    let count=0

    function dfs(node,maxVal){
        if(!node){
            return
        }
        if(node.val>=maxVal){
            count++
            maxVal=node.val
        }

        dfs(node.left,maxVal)
        dfs(node.right,maxVal)

    }
    dfs(root,Number.NEGATIVE_INFINITY)

    return count
 }

const tree=new TreeNode(3)
tree.left=new TreeNode(1)
tree.right= new TreeNode(4)
tree.left.left=new TreeNode(3)
tree.right.left=new TreeNode(1)
tree.right.right=new TreeNode(5)

const goodNodes=countGoodNodes(tree)
console.log(goodNodes)