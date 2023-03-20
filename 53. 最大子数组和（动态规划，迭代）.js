// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // 迭代
    let max = nums[0] // 最大子数组和
    let cur = nums[0] // 当前子数组和
    for (let i = 1; i < nums.length; i++) {
        cur = Math.max(nums[i], cur + nums[i])
        max = Math.max(max, cur)
    }
    return max
    // 动态规划
    /* let dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    let max = dp[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
        max = Math.max(max, dp[i])
    }
    return max */
};
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4] // [4,-1,2,1]=>6
console.log(maxSubArray(nums));