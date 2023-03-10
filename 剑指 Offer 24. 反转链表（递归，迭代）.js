// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
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
var reverseList = function (head) {
    //递归
    if (head.next || head) return head
    const prev = reverseList(head.next)
    head.next.next = head
    head.next = null
    return prev

    //  ES6迭代
    /*let [prev, current] = [null, head]
    while (current) [current.next, prev, current] = [prev, current, current.next]
    return prev*/
};