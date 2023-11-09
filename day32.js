// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []

class TreeNode {
constructor(val,left,right){
    this.val=(val===undefined?0:val)
    this.left=(left===undefined?null:left)
    this.right=(right===undefined?null:right)
}
}

var rightSideView = function (root) {
if(!root){
    return []
}

const result=[]
const queue=[root]
while(queue.length>0){
    const lengthSize=queue.length

    for(let i =0;i< lengthSize;i++){
        const node=queue.shift()

        if(i===lengthSize-1){
            result.push(node.val)
        }
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }
}

  return result;
};

// Test case 1
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.right = new TreeNode(5);
root1.right.right = new TreeNode(4);

console.log(rightSideView(root1)); // Output: [1, 3, 4]

// Test case 2
const root2 = new TreeNode(1);
root2.right = new TreeNode(3);

console.log(rightSideView(root2)); // Output: [1, 3]

// Test case 3
const root3 = null;

console.log(rightSideView(root3)); // Output: []
