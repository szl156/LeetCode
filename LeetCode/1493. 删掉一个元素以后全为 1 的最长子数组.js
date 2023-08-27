/*
给你一个二进制数组 nums ，你需要从中删掉一个元素。
请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。
如果不存在这样的子数组，请返回 0 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
	let left = 0, right = 0, zeroCount = 0, max = 0
	while (right < nums.length) {
		if (nums[right] === 0) {
			zeroCount++
		}
		while (zeroCount > 1) {
			if (nums[left] === 0) zeroCount--
			left++
		}
		max = Math.max(max, right - left)
		right++
	}
	return max
};
let nums = [0, 1, 1, 1, 0, 1, 1, 0, 1] // 5
console.log(longestSubarray(nums))