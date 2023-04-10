// 多级双向链表中，除了指向下一个节点和前一个节点指针之外，它还有一个子链表指针，可能指向单独的双向链表。
// 这些子列表也可能会有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。
// 给定位于列表第一级的头节点，请扁平化列表，即将这样的多级双向链表展平成普通的双向链表，使所有结点出现在单级双链表中。
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
function Node(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
};
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    // DFS
    const dfs = (node) => {
        let tmp, lastChild, last
        while (node) {
            // 不存在子链表
            if (!node.child) {
                last = node
                node = node.next
            }
            else {
                tmp = node.next
                lastChild = dfs(node.child)
                node.next = node.child
                node.child.prev = node
                node.child = null
                if (lastChild) lastChild.next = tmp
                if (tmp) tmp.prev = lastChild
                node = lastChild
            }
        }
        return last
    }
    dfs(head)
    return head

    // 栈
    const link = (cur, next) => {
        cur.next = next
        cur.child = null
        next.prev = cur
    }
    let node, stack = [head]
    while (node = stack.pop()) {
        if (node.next) stack.push(node.next)
        if (node.child) stack.push(node.child), link(node, node.child)
        if (!node.next && !node.child && stack.length) link(node, stack[stack.length - 1])
    }
    return head
}