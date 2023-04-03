// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
//  L0 → L1 → … → Ln-1 → Ln 
// 请将其重新排列后变为：
// L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let stack = []
    let node = head
    while (node) {
        stack.push(node)
        node = node.next
    }
    let left = 0, right = stack.length - 1
    while (left < right) {
        if (left === right) break
        stack[i].next = stack[j]
        i++
        stack[j].next = stack[i]
        j--
    }
    stack[i].next = null
};