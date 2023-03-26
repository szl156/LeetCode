// 给你一个整数数组 nums 和一个整数 k
// 请你返回数对 (i, j) 的数目，满足 i < j 且 |nums[i] - nums[j]| == k 。
// |x| 的值定义为：
// 如果 x >= 0 ，那么值为 x 。
// 如果 x < 0 ，那么值为 -x 。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) ans++
        }
    }
    return ans
};
const nums = [1, 2, 2, 1], k = 1
console.log(countKDifference(nums, k))