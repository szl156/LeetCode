// 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点.
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preOrder, inOrder) {
    return build(
        preOrder,
        0,
        preOrder.length - 1,
        inOrder,
        0,
        inOrder.length - 1
    );
};
function build(preOrder, preStart, preEnd, inOrder, inStart, inEnd) {
    if (preStart > preEnd) {
        return null;
    }
    // root 节点对应的值就是前序遍历数组的第一个元素
    let rootVal = preOrder[preStart];
    // rootVal 在中序遍历数组中的索引
    let index = inOrder.indexOf(rootVal);
    // 左子树个数
    let leftSize = index - inStart;
    // 先构造出当前根节点
    let root = new TreeNode(rootVal);
    // 递归构造左右子树
    root.left = build(
        preOrder,
        preStart + 1,
        preStart + leftSize,
        inOrder,
        inStart,
        index - 1
    );
    root.right = build(
        preOrder,
        preStart + leftSize + 1,
        preEnd,
        inOrder,
        index + 1,
        inEnd
    );
    return root;
}
