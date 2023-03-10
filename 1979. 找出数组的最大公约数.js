// 给你一个整数数组 nums ，返回数组中最大数和最小数的 最大公约数
// 两个数的 最大公约数 是能够被两个数整除的最大正整数
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    nums.sort((a, b) => a - b)
    const max = nums[nums.length - 1], min = nums[0]
    for (let i = min; i > 0; i--) {
        if (max % i === 0 && min % i === 0) return i
    }
};
const nums = [2, 5, 6, 9, 10]
console.log(findGCD(nums))