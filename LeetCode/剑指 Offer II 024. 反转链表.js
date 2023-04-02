// 给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null, cur = head
    while (cur) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
};
let head = [1, 2, 3, 4, 5]