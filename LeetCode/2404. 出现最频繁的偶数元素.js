/*
给你一个整数数组 nums ，返回出现最频繁的偶数元素。
如果存在多个满足条件的元素，只需要返回 最小 的一个。如果不存在这样的元素，返回 -1 。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    nums.sort((a, b) => a - b)
    const arr = new Array(nums[nums.length - 1] + 1).fill(0).map(v => [null, 0])
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & 1) === 0) arr[nums[i]]++
    }
    arr.sort((a, b) => b - a)
    return arr[0] === 0 ? -1 : arr[0]
};
let nums = [29, 47, 21, 41, 13, 37, 25, 7] //2
console.log(mostFrequentEven(nums))