/*
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
请必须使用时间复杂度为 O(log n) 的算法。
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1, mid
    while (left <= right) {
        mid = (right + left) >> 1
        if (nums[mid] === target) return mid
        if (nums[mid] > target) right = mid - 1
        else if (nums[mid] < target) left = mid + 1
        else return mid
    }
    return left
};
let nums = [1, 3, 5, 6], target = 5 // 2
console.log(searchInsert(nums, target))