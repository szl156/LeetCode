// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // sort高级用法
    nums.sort((a, b) => b ? 0 : -1)
    // 暴力求解
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            nums.push(0)
            nums.splice(i, 1)
            i--
            len--
        }
    }
};
const nums = [0, 0, 1, 0, 3, 12]

moveZeroes(nums)
console.log(nums)