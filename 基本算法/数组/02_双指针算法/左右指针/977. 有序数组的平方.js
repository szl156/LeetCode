/*
给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 01_排序算法。
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    // 双指针
    const ans = new Array(nums.length)
    let left = 0, right = nums.length - 1
    for (let i = ans.length - 1; i >= 0; i--) {
        const L = nums[left] * nums[left]
        const R = nums[right] * nums[right]
        if (L >= R) {
            ans[i] = L
            left++
        } else {
            ans[i] = R
            right--
        }
    }
    return ans
    /*// 暴力破解
    return nums.map(v => v ** 2).sort((a, b) => a - b)*/
};
let nums = [-4, -1, 0, 3, 10]
console.log(sortedSquares(nums))