// 给你一个链表的头节点 head 。删除 链表的 中间节点 ，并返回修改后的链表的头节点 head 。
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
var deleteMiddle = function (head) {
    // 快慢指针（快指针走两步，慢指针走一步）
    let fast = head
    let dummy = new ListNode(0, head)
    let pre = dummy
    while (fast !== null && fast.next != null) {
        pre = pre.next
        fast = fast.next.next
    }
    pre.next = pre.next.next
    return dummy.next
    // 暴力遍历
    while (!head) return head
    let len = 0, node = head
    while (node) {
        len++
        node = node.next
    }
    if (len === 1) return null
    node = head
    for (let i = 0; i < Math.floor(len / 2) - 1; i++) {
        node = node.next
    }
    node.next = node.next.next
    return head
};