// 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // 异或运算
    let ans = 0
    if (nums.length === 1) return nums[0]
    for (const num of nums) {
        ans ^= num // 异或运算XOR（相同取0，不同取1）
    }
    return ans
    // indexOf & lastIndexOf
    for (let num of nums) {
        if (nums.indexOf(num) === nums.lastIndexOf(num)) return num
    }
};
const nums = [4, 1, 2, 1, 2]
console.log(singleNumber(nums))
