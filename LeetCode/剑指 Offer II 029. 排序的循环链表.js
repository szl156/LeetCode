// 给定循环单调非递减列表中的一个点，写一个函数向这个列表中插入一个新元素 insertVal ，使这个列表仍然是循环升序的。
// 给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针。
// 如果有多个满足条件的插入位置，可以选择任意一个位置插入新的值，插入后整个列表仍然保持有序。
// 如果列表为空（给定的节点是 null），需要创建一个循环有序列表并返回这个节点。否则。请返回原先给定的节点。
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
    let cur = head;
    let newNode = new Node(insertVal)
    if (!head) {
        newNode.next = newNode
        return newNode
    }
    if (cur.next == cur) {
        cur.next = newNode
        newNode.next = cur;
        return head;
    }
    while (cur.next != head) {
        if (cur.val <= insertVal && cur.next.val >= insertVal) {
            break
        }
        if (cur.val > cur.next.val) {
            if (insertVal >= cur.val || insertVal <= cur.next.val) {
                break
            }
        }
        cur = cur.next
    }
    newNode.next = cur.next;
    cur.next = newNode
    return head;
};
let head = [3, 4, 1], insertVal = 2