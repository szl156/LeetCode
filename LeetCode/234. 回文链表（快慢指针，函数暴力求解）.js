// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // 快慢指针
    let fast = head, slow = head, newHead, q
    while (fast && fast.next) {
        q = slow
        slow = slow.next
        fast = fast.next.next
        q.next = newHead
        newHead = q
    }
    if (fast) slow = slow.next
    while (slow && newHead) {
        if (slow.val !== newHead.val) return false
        slow = slow.next
        newHead = newHead.next
    }
    return true

    // 暴力求解
    let arr = []
    let node = head
    while (node.next) {
        arr.push(node.val)
        node = node.next
    }
    arr.push(node.val)
    return arr.join('') == arr.reverse().join('')
};