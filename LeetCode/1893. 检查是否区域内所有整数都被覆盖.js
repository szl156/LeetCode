/*
给你一个二维整数数组 ranges 和两个整数 left 和 right 。每个 ranges[i] = [starti, endi] 表示一个从 starti 到 endi 的 闭区间 。
如果闭区间 [left, right] 内每个整数都被 ranges 中 至少一个 区间覆盖，那么请你返回 true ，否则返回 false 。
已知区间 ranges[i] = [starti, endi] ，如果整数 x 满足 starti <= x <= endi ，那么我们称整数x 被覆盖了。*/
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
	for (let n = left; n <= right; n++) {
		let flag = false
		for (let i = 0; i < ranges.length; i++) {
			let range = ranges[i]
			if (n < range[0] && n > range[1]) flag = true
		}
		if (flag) return false
	}
	return true
};
const ranges = [[1, 2], [3, 4], [5, 6]], left = 2, right = 5 // true
console.log(isCovered(ranges, left, right))