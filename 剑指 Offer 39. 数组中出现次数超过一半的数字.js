// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 哈希表
    const map = new Map()
    for (const num of nums) {
        map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1)
        if (map.get(num) > nums.length / 2) return num
    }
    // 排序取中值
    nums.sort((a, b) => a - b)
    return nums[(nums.length - 1) / 2]
};
const nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
console.log(majorityElement(nums))