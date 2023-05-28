/*
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]]
满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。
请你返回所有和为 0 且不重复的三元组。
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return ans
        if (nums[i] === nums[i - 1]) continue
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            let tmp = nums[i] + nums[left] + nums[right]
            if (tmp > 0) right--
            else if (tmp < 0) left++
            else {
                ans.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--
                left++
                right--
            }
        }
    }
    return ans
};
let nums = [-1, 0, 1, 2, -1, -4] // [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums))