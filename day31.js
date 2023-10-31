// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:


// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]
 
class ListNode {
  constructor(val,next){
    this.val=(val===undefined?0:val)
    this.next=(next===undefined?null:next)
  }
}

// var oddEvenList = function(head) {
//     if(!head || !head.next){
//         return head
//     }

//     let oddHead=head
//     let evenHead=head.next
//     let odd=oddHead
//     let even=evenHead

//     while(even && even.next){
//         odd.next=even.next
//         odd=odd.next
//         even.next=odd.next
//         even=even.next
//     }

//     odd.next=evenHead

//     return oddHead
// };

var oddEvenList = function(head) {
    if(!head || !head.next){
        return head
    }
    let flag = true
    let odd = head
    let even = head.next
    let headofEven= head.next
    let temp = head.next.next
    while(temp){
        if(flag){
            odd.next=temp
            odd=odd.next
        }
        else{
            even.next=temp
            even=even.next
        }
        temp=temp.next
        flag=!flag
    }
    odd.next = headofEven
    even.next=null
    return head
};

// Test case 1
const list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(oddEvenList(list1)); // Output: [1, 3, 5, 2, 4]

// Test case 2
const list2 = new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7)))))));
console.log(oddEvenList(list2)); // Output: [2, 3, 6, 7, 1, 5, 4]

// Test case 3
const list3 = new ListNode(1, new ListNode(2));
console.log(oddEvenList(list3)); // Output: [1, 2]

// Test case 4
const list4 = new ListNode(1);
console.log(oddEvenList(list4)); // Output: [1]

// Test case 5
console.log(oddEvenList(null)); // Output: null
