// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 贪心算法 O(n)
    /* if (!prices) return 0
    let min = prices[0], max = 0
    for (const price of prices) {
        min = Math.min(min, price)
        max = Math.max(max, price - min)
    }
    return max - min */
    // 动态规划
    let dp = new Array(2)
    dp[0] = 0 // 不持有
    dp[1] = -prices[0] // 持有
    for (let i = 1; i < prices.length; i++) {
        dp[0] = Math.max(dp[0], dp[1] + prices[i])
        dp[1] = Math.max(dp[1], -prices[i])
    }
    return dp[0]
    // 压缩空间
};
const prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices));