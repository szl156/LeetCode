/*
给定一个含有n个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组[numsl, numsl+1, ..., numsr-1, numsr]
并返回其长度。如果不存在符合条件的子数组，返回 0 。
*/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0, right = 0, sum = 0, min = Infinity
    while (right < nums.length) {
        sum += nums[right]
        while (sum >= target) {
            min = Math.min(min, right - left + 1)
            sum -= nums[left++]
        }
        right++
    }
    return min === Infinity ? 0 : min

};
let target = 7, nums = [2, 3, 1, 2, 4, 3] // 2
console.log(minSubArrayLen(target, nums))