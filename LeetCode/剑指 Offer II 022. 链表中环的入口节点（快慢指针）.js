// 给定一个链表，返回链表开始入环的第一个节点。 
// 从链表的头节点开始沿着 next 指针进入环的第一个节点为环的入口节点。如果链表无环，则返回 null。
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = head, slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            fast = head
            while (fast !== slow) {
                fast = fast.next
                slow = slow.next
            }
            return fast
        }
    }
    return null
};
let head = [3, 2, 0, -4], pos = 1
