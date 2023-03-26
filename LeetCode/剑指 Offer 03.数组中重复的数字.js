/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    // 哈希表
    const map = new Map()
    for (const num of nums) {
        if (map.get(num)) return num
        map.set(num, 1)
    }

    // 暴力算法
    /*for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return nums[i]
        }
    }*/
};
const nums = [3, 4, 2, 1, 1, 0]
console.log(findRepeatNumber(nums))
