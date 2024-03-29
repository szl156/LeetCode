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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const sortedArrayToBSTHelper = (nums, left, right) => {
        if (left > right) {
            return null
        }
        const mid = Math.floor(left + (right - left) / 2)
        const root = new TreeNode(nums[mid])
        root.left = sortedArrayToBSTHelper(nums, left, mid - 1)
        root.right = sortedArrayToBSTHelper(nums, mid + 1, right)

        return root
    }
    return sortedArrayToBSTHelper(nums, 0, nums.length - 1)
};