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
 * @return {number[]}
 */
var reversePrint = function (head) {
    if (!head) return []
    const ans = []
    while (head) {
        ans.unshift(head.val)
        head = head.next
    }
    return ans
};