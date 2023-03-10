// 给定一个整数数组 nums 和一个整数目标值 target
// 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 哈希表
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        let tar = target - cur
        if (map.has(tar)) return [map.get(tar), i]
        else map.set(cur, i)
    }

    // 双指针
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) return [i, j]
        }
    }
};
let nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target));