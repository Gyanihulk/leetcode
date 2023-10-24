// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

// Example 1:

// Input: root = [1,3,2,5,3,null,9]
// Output: [1,3,9]
// Example 2:

// Input: root = [1,2,3]
// Output: [1,3]

function largestValuesInEachRow(root) {
  if (!root) return;

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let rowSize = queue.length;
    let maxRowValue = -Infinity;

    for (let i = 0; i < rowSize; i++) {
      let node = queue.shift();
      maxRowValue = Math.max(maxRowValue, node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(maxRowValue);
  }
  return result;
}

// Example 1
const root1 = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: null,
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
};

console.log(largestValuesInEachRow(root1)); // Output: [1, 3, 9]

// Example 2
const root2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

console.log(largestValuesInEachRow(root2)); // Output: [1, 3]
