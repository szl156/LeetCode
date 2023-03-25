// 给定一个正整数数组 nums 和整数 k ，请找出该数组内乘积小于 k 的连续的子数组的个数。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let left = 0, count = 0, ans = 1
    for (let right = 0; right < nums.length; right++) {
        // 向右滑动窗口
        ans *= nums[right]
        // 缩小窗口，使得窗口内的乘积小于k
        while (left <= right && ans >= k) {
            ans /= nums[left++]
        }
        count += right >= left ? right - left + 1 : 0
    }
    return count
};
let nums = [10, 5, 2, 6], k = 100 // 8
console.log(numSubarrayProductLessThanK(nums, k));