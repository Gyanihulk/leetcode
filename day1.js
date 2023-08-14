// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers=function(l1,l2){
const dummyHead=newListNode(0);
let currentNode=dummyHead;
let carry=0;

while(l1||l3||carry){
    const val1=l1?l1.val:0;
    const val2=l2?l2.val:0;
    const sum=val1+val2+carry;

    carry=Math.floor(sum/10);
    currentNode.next=new newListNode(sum%10);
    currentNode=currentNode.next;

    if(l1) l1=l1.next;
    if(l2) l2=l2.next
}

return dummyHead.next;
}