// ou are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 
// Example 1:


// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]
// Explanation:
// The above figure represents the given linked list. The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node. 
// Example 2:


// Input: head = [1,2,3,4]
// Output: [1,2,4]
// Explanation:
// The above figure represents the given linked list.
// For n = 4, node 2 with value 3 is the middle node, which is marked in red.
// Example 3:


// Input: head = [2,1]
// Output: [2]
// Explanation:
// The above figure represents the given linked list.
// For n = 2, node 1 with value 1 is the middle node, which is marked in red.
// Node 0 with value 2 is the only node remaining after removing node 1.
 

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function deleteMiddleNode(head) {
    if (!head) {
        return null;
    }

    if (!head.next) {
        return null;
    }

    let dummy = new ListNode(-1);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;

    // Move fast and slow pointers to find the middle node
    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Delete the middle node
    slow.next = slow.next.next;

    return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print the linked list
function printLinkedList(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

// Example usage:
const head1 = createLinkedList([1, 3, 4, 7, 1, 2, 6]);
printLinkedList(deleteMiddleNode(head1)); // Output: [1, 3, 4, 1, 2, 6]

const head2 = createLinkedList([1, 2, 3, 4]);
printLinkedList(deleteMiddleNode(head2)); // Output: [1, 2, 4]

const head3 = createLinkedList([2, 1]);
printLinkedList(deleteMiddleNode(head3)); // Output: [2]
