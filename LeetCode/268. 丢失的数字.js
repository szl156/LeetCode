// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    // 数学算法
    let sum = 0;
    nums.forEach(item => {
        sum += item
    })
    return (nums.length) / 2 * (nums.length + 1) - sum
    // 哈希表
    // const arr = new Array(nums.length + 1)
    // for (let i = 0; i < nums.length; i++) arr[nums[i]] = true
    // for (let i = 0; i < nums.length; i++) {
    //     if (!arr[i]) return i
    // }
    // return nums.length
    // 暴力枚举
    // nums.sort((a, b) => a - b)
    // console.log(nums)
    // for (let i = 0; i <= nums.length; i++) {
    //     if (nums[i] !== i) return i
    // }
};
const nums = [0, 1]
console.log(missingNumber(nums))
