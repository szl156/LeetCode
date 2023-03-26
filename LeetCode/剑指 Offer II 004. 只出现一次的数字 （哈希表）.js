// 给你一个整数数组 nums ，除某个元素仅出现一次外，其余每个元素都恰出现三次
// 请你找出并返回那个只出现了一次的元素
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // 哈希表
    const map = new Map()
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    let ans
    map.forEach((val, key) => {
        if (val === 1) ans = key
    })
    return ans
};
let nums = [0, 1, 0, 1, 0, 1, 100]
console.log(singleNumber(nums));