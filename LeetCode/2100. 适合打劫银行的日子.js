/*
你和一群强盗准备打劫银行。给你一个下标从 0开始的整数数组security，其中security[i]是第 i天执勤警卫的数量。日子从 0开始编号。同时给你一个整数time。
如果第 i天满足以下所有条件，我们称它为一个适合打劫银行的日子：
第 i天前和后都分别至少有 time天。
第 i天前连续 time天警卫数目都是非递增的。
第 i天后连续 time天警卫数目都是非递减的。
更正式的，第 i 天是一个合适打劫银行的日子当且仅当：
security[i - time] >= security[i - time + 1] >= ... >= security[i] <= ... <= security[i + time - 1] <= security[i + time].
请你返回一个数组，包含 所有 适合打劫银行的日子（下标从 0开始）。返回的日子可以 任意顺序排列。
*/
/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
    const n = security.length, ans = []
    const left = new Array(n).fill(0), right = new Array(n).fill(0)
    for (let i = 1; i < n; i++) {
        if (security[i - 1] >= security[i]) left[i] = left[i - 1] + 1
        if (security[n - i] >= security[n - 1 - i]) right[n - 1 - i] = right[n - i] + 1
    }
    for (let i = 0; i < n; i++) if (left[i] >= time && right[i] >= time) ans.push(i)
    return ans
};
let security = [5, 3, 3, 3, 5, 6, 2], time = 2
console.log(goodDaysToRobBank(security, time))