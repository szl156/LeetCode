// 给你两个正整数数组 spells 和 potions ，长度分别为 n 和 m ，其中 spells[i] 表示第 i 个咒语的能量强度，
// potions[j] 表示第 j 瓶药水的能量强度。
// 同时给你一个整数 success 。一个咒语和药水的能量强度 相乘 如果 大于等于 success ，那么它们视为一对 成功 的组合。
// 请你返回一个长度为 n 的整数数组 pairs，其中 pairs[i] 是能跟第 i 个咒语成功组合的 药水 数目。
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 * */
const idxSearch = (arr, target) => {
    let left = 0, right = arr.length
    while (left < right) {
        const mid = (left + right) >> 1
        if (arr[mid] >= target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b)
    const ans = []
    spells.forEach(v => {
        ans.push(potions.length - idxSearch(potions, success / v))
    })
    return ans
};

const spells = [5, 1, 3], potions = [1, 2, 3, 4, 5], success = 7
console.log(successfulPairs(spells, potions, success))
