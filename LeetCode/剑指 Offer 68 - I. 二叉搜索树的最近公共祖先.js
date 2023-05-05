// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x
// 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // 递归
    if (!root) return null
    if (Math.max(p.val, q.val) > root.val && Math.min(p.val, q.val) < root.val) return root
    if (Math.max(p.val, q.val) < root.val) return lowestCommonAncestor(root.left, p, q)
    if (Math.max(p.val, q.val) > root.val) return lowestCommonAncestor(root.right, p, q)

    // 迭代
    if (!root) return null
    if (p === q) return p
    while (root) {
        if (p.val < root.val && q.val < root.val) root = root.left
        else if (p.val > root.val && q.val > root.val) root = root.right
        else return root
    }
};
let root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8
console.log(lowestCommonAncestor(root, p, q))