// 给定一个整数数组和一个整数 k ，请找到该数组中和为 k 的连续子数组的个数。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    // 此题无法使用滑动窗口，因为nums[i]有正有负，无法缩小窗口
    // 哈希前缀表
    const map = new Map()
    map.set(0, 1)
    let count = 0, sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (map.has(sum - k)) count += map.get(sum - k)
        if (map.has(sum)) map.set(sum, map.get(sum) + 1)
        else map.set(sum, 1)
    }
    return count
};
let nums = [1, 1, 1], k = 2
console.log(subarraySum(nums, k)); // 2