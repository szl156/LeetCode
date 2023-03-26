// 给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值。
// 请你计算并返回该式的最大值。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    nums.sort((a, b) => a - b)
    return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1)
};
const nums = [3, 4, 5, 2]
console.log(maxProduct(nums))
