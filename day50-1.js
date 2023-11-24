// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.

// Given the head of a linked list with even length, return the maximum twin sum of the linked list.

// Example 1:

// Input: head = [5,4,2,1]
// Output: 6
// Explanation:
// Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
// There are no other nodes with twins in the linked list.
// Thus, the maximum twin sum of the linked list is 6. 
// Example 2:


// Input: head = [4,2,2,3]
// Output: 7
// Explanation:
// The nodes with twins present in this linked list are:
// - Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
// - Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
// Thus, the maximum twin sum of the linked list is max(7, 4) = 7. 
// Example 3:


// Input: head = [1,100000]
// Output: 100001
// Explanation:
// There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.


class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  /**
   * @param {ListNode} head
   * @return {number}
   */
  var maxTwinSum = function(head) {
        let slow = head;
        let fast = head;

        // Get middle of the linked list.
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // Reverse second half of the linked list.
        let nextNode, prev = null;
        while (slow != null) {
            nextNode = slow.next;
            slow.next = prev;
            prev = slow;
            slow = nextNode;
        }

        let start = head;
        let maximumSum = 0;
        while (prev != null) {
            maximumSum = Math.max(maximumSum, start.val + prev.val);
            prev = prev.next;
            start = start.next;
        }

        return maximumSum;
  };
  
  // Example usage:
  // Create linked list: 5 -> 4 -> 2 -> 1
  const head1 = new ListNode(5, new ListNode(4, new ListNode(2, new ListNode(1))));
  console.log(maxTwinSum(head1)); // Output: 6
  
  // Create linked list: 4 -> 2 -> 2 -> 3
  const head2 = new ListNode(4, new ListNode(2, new ListNode(2, new ListNode(3))));
  console.log(maxTwinSum(head2)); // Output: 7
  
  // Create linked list: 1 -> 100000
  const head3 = new ListNode(1, new ListNode(100000));
  console.log(maxTwinSum(head3)); // Output: 100001
  