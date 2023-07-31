/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 哈希表
    const map = new Map()
    for (const num of nums) {
        map.set(num, map.get(num) + 1 || 1)
        if (map.get(num) >= nums.length / 2) return num
    }
    // 01_排序算法
    nums.sort((a, b) => a - b)
    return nums[Math.floor(nums.length / 2)]
};
const nums = [3, 2, 3]
console.log(majorityElement(nums))
