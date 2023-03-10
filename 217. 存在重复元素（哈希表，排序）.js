// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // 哈希表
    const map = new Map()
    for (let num of nums) {
        if (map.has(num)) return true
        map.set(num, 1)
    }
    return false
    // 排序算法
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) return true
    }
    return false
};
let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
console.log(containsDuplicate(nums));