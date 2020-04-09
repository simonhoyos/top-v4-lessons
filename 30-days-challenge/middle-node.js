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
var middleNode = function(head) {
    let length = 0;
    let current = head;
    const map = {};
    while(current) {
        map[length] = current;
        length++;
        current = current.next;
    }
    const count = Math.floor(length / 2);
    return map[count];
};
