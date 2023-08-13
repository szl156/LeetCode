/*
如果数组是单调递增或单调递减的，那么它是 单调 的。
如果对于所有 i <= j，nums[i] <= nums[j]，那么数组 nums 是单调递增的。 如果对于所有 i <= j，nums[i]> = nums[j]，那么数组 nums 是单调递减的。
当给定的数组 nums 是单调数组时返回 true，否则返回 false。*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
	let up, i
	for (i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			up = true
			break
		} else if (nums[i] < nums[i - 1]) {
			up = false
			break
		}
		if (i === nums.length - 1) return true
	}
	debugger
	for (let j = i + 1; j < nums.length; j++) {
		if (nums[j] > nums[j - 1] && !up) return false
		else if (nums[j] < nums[j - 1] && up) return false
	}
	return true
};
let nums = [1, 3, 2] // true
console.log(isMonotonic(nums))