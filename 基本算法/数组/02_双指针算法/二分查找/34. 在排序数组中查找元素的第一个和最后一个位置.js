/*
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回[-1, -1]。
你必须设计并实现时间复杂度为O(log n)的算法解决此问题。
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = binarySearch(nums, target, true), end = binarySearch(nums, target, false)
    return [start, end]
};
const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (lower) {
            if (nums[mid] === target && (mid === 0 || nums[mid - 1] < target)) {
                return mid;
            }
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (nums[mid] === target && (mid === nums.length - 1 || nums[mid + 1] > target)) {
                return mid;
            }
            if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
};
// let nums = [5, 7, 7, 8, 8, 10], target = 8 // [3,4]
let nums = [1], target = 0
console.log(searchRange(nums, target))
