// 给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，则返回 数组中连续 1 的最大个数 。
/**
 * @param {number[]} nums
 * @param K
 * @return {number}
 */
var longestOnes = function (nums, K) {
	let left = 0, right = 0, max = 0, zeroCount = 0
	while (right < nums.length) {
		if (nums[right] === 0) zeroCount++
		while (zeroCount > K) {
			if (nums[left] === 0) {
				zeroCount--
			}
			left++
		}
		right++
		max = Math.max(max, right - left)
	}
	return max
};
// let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], K = 2 // 6
let nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], K = 3
console.log(longestOnes(nums, K))
