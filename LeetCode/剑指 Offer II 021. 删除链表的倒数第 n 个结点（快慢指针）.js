// 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummyNode = new ListNode(-1, head)
    let fast = dummyNode, slow = dummyNode
    while (n-- && fast) {
        fast = fast.next
    }
    while (fast.next && fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummyNode.next
};
let head = [1, 2, 3, 4, 5], n = 2
console.log(removeNthFromEnd(head, n));