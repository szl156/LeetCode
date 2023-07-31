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

/*给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。*/
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
	let perv = new TreeNode(-Infinity);
	let err1, err2 = null;
	const inOrder = (root) => {
		if (root == null) {
			return;
		}
		inOrder(root.left);
		if (perv.val >= root.val && err1 == null) { // 当前是第一对错误
			err1 = perv;                            // 记录第一个错误点
		}
		if (perv.val >= root.val && err1 != null) { // 第一个错误点已确定
			err2 = root;                            // 记录第二个错误点
		}
		perv = root;       // 更新 perv
		inOrder(root.right);
	};
	inOrder(root);
	[err1.val, err2.val] = [err2.val, err1.val]
};