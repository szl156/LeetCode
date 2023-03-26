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
var mergeTwoLists = function (l1, l2) {
    // 指针
    let newList = new ListNode()
    let newHead = newList
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            newHead.next = list1
            list1 = list1.next
        } else {
            newHead.next = list2
            list2 = list2.next
        }
        newHead = newHead.next
    }
    newHead.next = list1 === null ? list2 : list1
    return newList.next

    // 递归
    if (!list1) return list2
    if (!list2) return list1
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }
    else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};
