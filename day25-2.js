// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.

// Example 1:

// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

// Example 2:

// Input: root = [5,3,6,2,4,null,7], key = 0
// Output: [5,3,6,2,4,null,7]
// Explanation: The tree does not contain a node with value = 0.
// Example 3:

// Input: root = [], key = 0
// Output: []

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var deleteNode = function (root, key) {
  if (root == null) {
    return null;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    root.val = findMinValue(root.right);

    root.right=deleteNode(root.right,root.val)

  }
  return root
};

function findMinValue(node) {
  while (node.left !== null) {
    node = node.left;
  }

  return node.val;
}
function printTree(node, prefix = "", isLeft = true) {
  if (node === null) {
    console.log("Empty Tree");
    return;
  }

  if (node.right) {
    printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
  }
  console.log(prefix + (isLeft ? "└── " : "┌── ") + node.val);
  if (node.left) {
    printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
  }
}

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);

const keyToDelete = 3;

console.log(`BST before deleting node with key ${keyToDelete}:`);
printTree(root);

const updatedRoot = deleteNode(root, keyToDelete);
console.log(`BST after deleting node with key ${keyToDelete}:`);
printTree(updatedRoot);
