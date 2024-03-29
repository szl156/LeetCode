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
var isSymmetric = function (root) {
    // 非递归
    if (!root) return
    let q = [[root.left, root.right]]
    while (q.length) {
        let [left, right] = q.shift()
        if (!left && !right) continue
        if (!left || !right || left.val !== right.val) return false
        q.push([left.left, right.right])
        q.push([left.right, right.left])
    }
    return true
    //dfs
    if (!root) return true
    const dfs = (left, right) => {
        if (!left && !right) return true
        if (!left || !right || left.val !== right.val) return false
        return dfs(left.left, right.right) && dfs(left.right, right.left)
    }
    return dfs(root.left, root.right)
};