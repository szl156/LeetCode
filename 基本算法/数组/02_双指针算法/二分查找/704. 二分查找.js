/*
给定一个n个元素有序的（升序）整型数组nums 和一个目标值target ，写一个函数搜索nums中的 target，如果目标值存在返回下标，否则返回 -1。
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // 左闭右开区间
    let left = 0, right = nums.length
    while (left < right) {
        const mid = (left + right) >> 1
        if (nums[mid] === target) return mid
        else if (nums[mid] > target) right = mid
        else left = mid + 1
    }
    return -1
    /*// 左闭右闭区间
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = (right + left) >> 1
        if (nums[mid] === target) return mid
        if (nums[mid] > target) right = mid - 1
        else left = mid + 1
    }
    return -1*/
};
let nums = [-1, 0, 3, 5, 9, 12], target = 2
console.log(search(nums, target))