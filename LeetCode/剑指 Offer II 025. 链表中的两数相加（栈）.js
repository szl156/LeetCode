// 给定两个 非空链表 l1和 l2 来代表两个非负整数。数字最高位位于链表开始位置。
// 它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let s1 = []
    let s2 = []
    while (l1) {
        s1.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        s2.push(l2.val)
        l2 = l2.next
    }
    let carry = 0, cur = null, ans = null
    while (s1.length || s2.length || carry) {
        let n1 = s1.pop() || 0
        let n2 = s2.pop() || 0
        let s = n1 + n2 + carry
        carry = Math.floor(s / 10)
        s %= 10
        cur = new ListNode(s)
        cur.next = ans
        ans = cur
    }
    return ans
};