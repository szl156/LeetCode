/*
给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false 。
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        let ans = [arr[i], arr[i + 1], arr[i + 2]]
        for (let j = 2; j >= 0; j--) {
            if ((ans[j] & 1) === 0) {
                i = i + j
                break
            }
            if (j === 0) return true
        }
    }
    return false
};
let arr = [2, 6, 4, 1, 3, 7] // false
console.log(threeConsecutiveOdds(arr))