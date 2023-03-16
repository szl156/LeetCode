/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    // 递归
    const isValid = (root, min, max) => {
        if (!root) return true
        if (root.val <= min || root.val >= max) return false
        return isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
    }
    return isValid(root, -Infinity, Infinity)
    // 非递归
    let stack = []
    let preVal = -Infinity
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if (root.val <= preVal) return false
        preVal = root.val
        root = root.right
    }
    return true
    // 中序遍历
    /* let preVal = -Infinity, flag = true
    const inOrder = (root) => {
        if (!flag) return
        if (root === null) return
        inOrder(root.left)
        if (root.val <= preVal) {
            flag = false
            return
        }
        preVal = root.val
        inOrder(root.right)
    }
    inOrder(root)
    return flag */
};