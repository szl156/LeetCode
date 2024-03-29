/*
给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
*/
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    // 迭代
    const stack = []
    const ans = []
    while (root || stack.length) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            let node = stack.pop()
            ans.push(node.val)
            root = node.right
        }
    }
    return ans

    /*
    递归
    const ans = []
    const inorder = (root) => {
        if (!root) return
        inorder(root.left)
        ans.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return ans
    */
};