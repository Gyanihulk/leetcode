// 1290. Convert Binary Number in a Linked List to Integer
// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.
// The most significant bit is at the head of the linked list.

var getDecimalValue = function(head) {
    let result =0;
    let current=head;

    while(current!=null){
        console.log(current)
        result =result *2 + current.val;
        current=current.next
    }

    return result
};