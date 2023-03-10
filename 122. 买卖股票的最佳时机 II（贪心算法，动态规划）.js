// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。
// 你也可以先购买，然后在 同一天 出售。
// 返回 你能获得的 最大 利润 。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 贪心算法
    let ans = 0
    for (let i = 1; i < prices.length; i++) {
        ans += Math.max(0, prices[i] - prices[i - 1])
    }
    return ans
    // 动态规划
    /* const n = prices.length
    let dp0 = 0 // 当天手中不持有股票的利润
    let dp1 = -prices[0] // 当天手中持有股票的利润
    for (let i = 1; i < n; i++) {
        let newDp0 = Math.max(dp0, dp1 + prices[i]);
        let newDp1 = Math.max(dp1, dp0 - prices[i]);
        dp0 = newDp0;
        dp1 = newDp1;
    }
    return dp0 */
    // 遍历
    /* let ans = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] < prices[i]) ans += prices[i] - prices[i - 1]
    }
    return ans */
};
prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))
// 7