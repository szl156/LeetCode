// 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 
// 返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (!nums.length) return 0
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
};
const nums = [1, 1, 2]
console.log(removeDuplicates(nums))
//5, nums = [0,1,2,3,4]