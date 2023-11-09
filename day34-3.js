// 19. Remove Nth Node From End of List
// Medium
// 17.4K
// 724
// Companies
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function removeNthFromEnd(head, n) {
     let dummy=new ListNode(0)
     dummy.next=head

     let first =dummy
        let second=dummy

        for(let i=0;i<=n;i++){
            first=first.next
        }

        while(first!=null){
            first=first.next
            second=second.next
        }

        second.next=second.next.next

        return dummy.next
    }

// Helper function to create a linked list from an array
function createLinkedListFromArray(arr) {
    if (arr.length === 0) {
        return null;
    }
    const dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array for easy printing
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Example 1
const example1 = createLinkedListFromArray([1, 2, 3, 4, 5]);
const result1 = removeNthFromEnd(example1, 2);
console.log(linkedListToArray(result1)); // [1, 2, 3, 5]

// Example 2
const example2 = createLinkedListFromArray([1]);
const result2 = removeNthFromEnd(example2, 1);
console.log(linkedListToArray(result2)); // []

// Example 3
const example3 = createLinkedListFromArray([1, 2]);
const result3 = removeNthFromEnd(example3, 1);
console.log(linkedListToArray(result3)); // [1]


// const list4 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))));
// const result4 = removeNthFromEnd(list4, 2);

// // Convert the resulting linked list to an array for easy output verification
// const arrayResult1 = [];
// let current = result1;
// while (current !== null) {
//     arrayResult1.push(current.val);
//     current = current.next;
// }

// console.log(arrayResult1); 