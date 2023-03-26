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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // DFS 
    const iterator = (node, level = 0, res) => {
        // 越界判断
        if (!node) return
        if (!res[level]) res[level] = []
        res[level].push(node.val)
        iterator(node.left, level + 1, res)
        iterator(node.right, level + 1, res)
    }
    const res = [];
    iterator(root, 0, res);
    return res;

    // BFS
    // const res = []
    // const q = []
    // if (!root) return res
    // q.push(root)
    // while (q.length) {
    //     const layer = q.length
    //     res.push([])
    //     for (let i = 1; i <= layer; i++) {
    //         const node = q.shift()
    //         res[res.length - 1].push((node.val))
    //         if (node.left) q.push(node.left)
    //         if (node.right) q.push(node.right)
    //     }
    // }
    // return res
};