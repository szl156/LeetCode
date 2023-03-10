// 学校打算为全体学生拍一张年度纪念照。根据要求，学生需要按照 非递减 的高度顺序排成一行。
// 排序后的高度情况用整数数组 expected 表示，其中 expected[i] 是预计排在这一行中第 i 位的学生的高度（下标从 0 开始）。
// 给你一个整数数组 heights ，表示 当前学生站位 的高度情况。heights[i] 是这一行中第 i 位学生的高度（下标从 0 开始）。
// 返回满足 heights[i] != expected[i] 的 下标数量 。
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    // 桶排序
    let count = 0
    const bucket = new Array(101).fill(0)
    for (const height of heights) {
        bucket[height]++
    }
    for (let i = 1, j = 0; i < bucket.length; i++) {
        while (bucket[i]-- > 0) {
            if(heights[j++]!==i)count++
        }
    }
    return count
    // 暴力求解
    /*const height = [...heights]
    let expected = heights.sort((a, b) => a - b)
    let count = 0
    for (const heightsKey in heights) {
        if (height[heightsKey] !== expected[heightsKey]) count++
    }
    return count*/
};
const heights = [1, 1, 4, 2, 1, 3]
console.log(heightChecker(heights))
