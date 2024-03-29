// 桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。
/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
    let ans = 0
    for (const coin of coins) {
        ans += coin & 1 ? Math.ceil(coin / 2) : Math.floor(coin / 2)
    }
    return ans
};
let coins = [2, 3, 10]
console.log(minCount(coins))