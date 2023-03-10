// 给你一个下标从 0 开始的整数数组 nums 以及一个目标元素 target 。
// 目标下标 是一个满足 nums[i] == target 的下标 i 。
// 将 nums 按 非递减 顺序排序后，返回由 nums 中目标下标组成的列表。如果不存在目标下标，返回一个 空 列表。返回的列表必须按 递增 顺序排列。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    const bucket = new Array(Math.max(...nums))
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) bucket[nums[i]] = bucket[nums[i]] ? bucket[nums[i]]++ : 1
    

};
const nums = [1, 2, 5, 2, 3], target = 2
console.log(targetIndices(nums, target))
