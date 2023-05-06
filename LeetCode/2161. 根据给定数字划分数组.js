/*
给你一个下标从 0开始的整数数组nums和一个整数pivot。请你将nums重新排列，使得以下条件均成立：
所有小于pivot的元素都出现在所有大于pivot的元素之前。
所有等于pivot的元素都出现在小于和大于 pivot的元素 中间。
小于 pivot的元素之间和大于 pivot的元素之间的 相对顺序不发生改变。
更正式的，考虑每一对pi，pj，pi是初始时位置 i元素的新位置，pj是初始时位置j元素的新位置。对于小于pivot的元素，
如果i < j且nums[i] < pivot 和nums[j] < pivot都成立，那么pi < pj也成立。类似的，对于大于pivot的元素，
如果i < j 且nums[i] > pivot 和nums[j] > pivot都成立，那么pi < pj。
请你返回重新排列 nums数组后的结果数组。
*/
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let left = [], right = [], mid = []
    for (const num of nums) {
        if (num < pivot) left.push(num)
        else if (num > pivot) right.push(num)
        else mid.push(num)
    }
    return left.concat(mid, right)
};
let nums = [9, 12, 5, 10, 14, 3, 10], pivot = 10 // [9,5,3,10,10,12,14]
// let nums = [-3, 4, 3, 2], pivot = 2 // [-3,2,4,3]
console.log(pivotArray(nums, pivot))