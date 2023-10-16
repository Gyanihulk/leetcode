
// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

// BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
// boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
// int next() Moves the pointer to the right, then returns the number at the pointer.
// Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

// You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

 

// Example 1:


// Input
// ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
// Output
// [null, 3, 7, true, 9, true, 15, true, 20, false]


class TreeNode {
  constructor(val,left=null,right=null){
    this.val=val;
    this.left=left;
    this.right=right;
  }


}

class BSTIterator {
  constructor(root){
    this.stack=[]
    pushAllLeftNodes(root)
  }

  hasNext(){
    return this.stack.length>0;
  }

  next(){
    if(!this.hasNext()){
        return null
    }

    const node = this.stack.pop()
    pushAllLeftNodes(node.right)

    return node.val
  }

  pushAllLeftNodes(node){
    while(node){
        this.stack.push(node)
        node=node.left
    }
  }
}

// Test case
const root = new TreeNode(7, new TreeNode(3), new TreeNode(15, new TreeNode(9), new TreeNode(20)));
const bstIterator = new BSTIterator(root);

const result = [];
while (bstIterator.hasNext()) {
    result.push(bstIterator.next());
}

console.log(result);  // Output: [3, 7, 9, 15, 20]
