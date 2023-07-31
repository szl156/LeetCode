/*
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const ans = [];
    let prev = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const curr = intervals[i];
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            ans.push(prev);
            prev = curr;
        }
    }
    ans.push(prev);
    return ans;
};
let intervals = [[1, 3], [2, 6], [8, 10], [15, 18], [0, 0]] //[[1,6],[8,10],[15,18]]
console.log(merge(intervals))