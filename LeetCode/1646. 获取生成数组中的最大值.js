/*
给你一个整数 n 。按下述规则生成一个长度为 n + 1 的数组 nums ：
nums[0] = 0
nums[1] = 1
当 2 <= 2 * i <= n 时，nums[2 * i] = nums[i]
当 2 <= 2 * i + 1 <= n 时，nums[2 * i + 1] = nums[i] + nums[i + 1]
返回生成数组 nums 中的 最大 值。
*/
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
    let max = 0
    let nums = new Array(n + 1).fill(0)
    if (n > 1) {
        nums[0] = 0
        nums[1] = 1
        for (let i = 2; i < nums.length; i++) {
            if ((i & 1) === 0) {
                nums[i] = nums[i >> 1]
                max = Math.max(max, nums[i])
            } else {
                nums[i] = nums[(i - 1) >> 1] + nums[((i - 1) >> 1) + 1]
                max = Math.max(max, nums[i])
            }
        }
    } else {
        nums = nums.map((value, index) => value = index)
    }
    return max === 0 ? nums[n] : max
};
let n = 2 // 3
console.log(getMaximumGenerated(n))