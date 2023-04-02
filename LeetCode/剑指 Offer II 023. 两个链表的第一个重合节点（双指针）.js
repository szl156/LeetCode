// 给定两个单链表的头节点 headA 和 headB ，请找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let a = headA, b = headB
    while (a !== b) {
        a = a !== null ? a.next : headB
        b = b !== null ? b.next : headA
    }
    return a
};
let listA = [4, 1, 8, 4, 5], listB = [5, 0, 1, 8, 4, 5]
console.log(getIntersectionNode(headA, headB));