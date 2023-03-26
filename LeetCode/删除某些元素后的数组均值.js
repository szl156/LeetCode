// 1619.
// 给你一个整数数组 arr ，请你删除最小 5% 的数字和最大 5% 的数字后，剩余数字的平均值。
// 与 标准答案 误差在 10-5 的结果都被视为正确结果。
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    const arr1 = arr.sort((a, b) => a - b)
    const fPercent = arr.length * 0.02
    // console.log(arr1)
    let sum = 0
    const arr2 = arr1.slice(fPercent, arr1.length - fPercent + 1)
    // console.log(arr2)
    arr2.forEach(v => {
        sum += v
    });
    return sum / Math.floor(arr2.length)
};
const arr = [6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]
