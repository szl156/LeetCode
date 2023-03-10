// 给你一个链表的头节点 head ，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
// 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
// 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
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
 * @return {boolean}
 */
var hasCycle = function (head) {
    // 哈希表
    const map = new Map()
    while (head) {
        if (map.has(head)) return true
        map.set(head, true)
        head = head.next
    }
    return false
    // 快慢指针
    if (!head) return false
    let fast = head.next, slow = head
    while (fast && fast.next) {
        if (slow === fast) return true
        fast = fast.next.next
        slow = slow.next
    } return false
};