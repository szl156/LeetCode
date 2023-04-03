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
    let fast = head;
    let slow = head;
    let next;
    let pre = null;
    let newIndex;
    if (!head.next) return true;
    while (fast && fast.next) {
        fast = fast.next.next; // 快指针每次移动两个节点
        next = slow.next; // 保存慢指针的下一个节点
        slow.next = pre; // 反转前半部分的节点指针
        pre = slow; // 将 pre 指向已经反转的节点
        slow = next; // 移动慢指针到下一个节点
    }
    newIndex = pre; // 将变量 newIndex 指向前半部分已经反转的末尾节点
    if (fast) {
        // 如果链表长度为奇数，快指针不为 null，慢指针需要向后移动一位
        slow = slow.next;
    }
    /* 使用 newIndex 和 slow 两个指针，分别从前半部分已经反转的末尾节点和后半部分的开头节点开始向中间遍历，
    判断每个节点的值是否相等，如果有不相等的节点，直接返回 false，否则遍历完整个链表后返回 true。 */
    while (newIndex) {
        if (newIndex.val != slow.val) return false;
        newIndex = newIndex.next;
        slow = slow.next;
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