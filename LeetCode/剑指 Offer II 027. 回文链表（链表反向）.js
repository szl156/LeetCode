// 给定一个链表的 头节点 head ，请判断其是否为回文链表。
// 如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let fast = head, slow = head, pre = null, next
    while (fast && fast.next) {
        fast = fast.next.next
        next = slow.next
        slow.next = pre
        pre = slow
        slow = next
    }
    let node = pre
    if (fast) slow = slow.next
    while (node) {
        if (node.val !== slow.val) return false
        slow = slow.next
        node = node.next
    }
    return true

    /* if (!head) return
    let node = head, arr = []
    while (node) {
        arr.push(node.val)
        node = node.next
    }
    let left = 0, right = arr.length - 1
    while (left < right) {
        if (arr[left] !== arr[right]) return false
        left++
        right--
    }
    return true */
};