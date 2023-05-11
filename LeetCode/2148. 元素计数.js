// 给你一个整数数组 nums ，统计并返回在 nums 中同时至少具有一个严格较小元素和一个严格较大元素的元素数目。
/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
    nums.sort((a, b) => a - b)
    return Math.max(0, nums.indexOf(nums[nums.length - 1]) - nums.lastIndexOf(nums[0]) - 1)
};
let nums = [11, 7, 2, 15] // 2
console.log(countElements(nums))