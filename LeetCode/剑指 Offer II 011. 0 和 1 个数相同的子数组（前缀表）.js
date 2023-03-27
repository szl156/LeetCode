// 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    // 前缀表
    const map = new Map()
    let maxLen = 0, pre = 0
    map.set(0, -1)
    for (let i = 0; i < nums.length; i++) {
        pre += nums[i] === 0 ? -1 : 1
        if (map.has(pre)) maxLen = Math.max(maxLen, i - map.get(pre))
        else map.set(pre, i)
    }
    return maxLen
};
let nums = [0, 1]
console.log(findMaxLength(nums)); // 2