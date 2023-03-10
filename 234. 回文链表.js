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
    let q, newHead; // 记录翻转后的前半段链表
    let slow = head, fast = head; // 快慢指针对原链表进行遍历
    while (fast && fast.next) {
        q = slow; // 准备开始下一次翻转，先记录准备要翻转的结点
        slow = slow.next; // 往后指
        fast = fast.next.next;
        q.next = newHead; // 要翻转的新结点记录过来
        newHead = q; // 赋值
    }
    // 如果上个循环 fast.next.next 还在链表内，说明是奇数，不清楚的可以画图，一下子豁然开朗
    if (fast) {
        slow = slow.next; // 奇数的话，前半部分 比 后半部分少一个，所以后半部分的 slow 指针要先往后指一位，才能开始下面的遍历
    }
    while (slow && newHead) {
        // 不同直接返回
        if (slow.val !== newHead.val) {
            return false;
        }
        slow = slow.next;
        newHead = newHead.next;
    }
    return true;
};