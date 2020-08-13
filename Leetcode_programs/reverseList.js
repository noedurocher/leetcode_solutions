/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
		let prev = null;
    	let next_node=head.next;
    while(head !== null){
    	head.next = prev;
    	prev = head;
    	head=next_node;
    }

    return prev;
};

console.log(reverseList([1,2,3,4,5]));