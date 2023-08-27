/*
索引从0开始长度为N的数组A，包含0到N - 1的所有整数。找到最大的集合S并返回其大小，其中 S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }且遵守以下的规则。
假设选择索引为i的元素A[i]为S的第一个元素，S的下一个元素应该是A[A[i]]，之后是A[A[A[i]]]... 以此类推，不断添加直到S出现重复的元素。
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
    let set = new Set(), max = 0
    for (let i = 0; i < nums.length; i++) {
        let tmp = nums[i]
        while (!set.has(tmp)) {
            set.add(tmp)
            tmp = nums[tmp]
        }
        max = Math.max(max, set.size)
        set.clear()
    }
    return max
};
let nums = [5, 4, 0, 3, 1, 6, 2]
console.log(arrayNesting(nums))  // 4