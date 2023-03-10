// 给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对,
// 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。
// 返回该 最大总和 。
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let array = new Array(20001).fill(0)
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        array[nums[i] + 10000] += 1
    }
    let even = true
    for (let i = 0; i < array.length; i++) {

        while (array[i] > 0) {
            even ? (sum += i - 10000) : null
            even = !even
            array[i]--
        }
    }

    return sum
// nums.sort((a, b) => a - b)
// let sum=0
// for (let i = 0; i < nums.length; i+=2) {
//     sum+=nums[i]
// }
// return sum
};const nums = [1, 4, 3, 2]
console.log(arrayPairSum(nums))
// 9
