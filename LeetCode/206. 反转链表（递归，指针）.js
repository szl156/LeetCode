// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
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
    // 越界判断
    if (!head || !head.next) return head

    // 递归
    const newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead

    // 指针
    const node = head
    let next = node.next
    while (next) {
        node.next = next.next
        next.next = head
        head = next
        next = node.next
    }
    return head
};