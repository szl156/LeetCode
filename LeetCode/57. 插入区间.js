/*给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	let ans = [], i = 0
	const len = intervals.length
	while (i < len && intervals[i][1] < newInterval[0]) {
		ans.push(intervals[i])
		i++
	}
	while (i < len && intervals[i][0] <= newInterval[1]) {
		newInterval[0] = Math.min(intervals[i][0], newInterval[0])
		newInterval[1] = Math.max(intervals[i][1], newInterval[1])
		i++
	}
	ans.push(newInterval)
	while (i < len) {
		ans.push(intervals[i])
		i++
	}
	return ans
};
let intervals = [[1, 3], [6, 9]], newInterval = [2, 5]  // [[1,5],[6,9]]
console.log(insert(intervals, newInterval))