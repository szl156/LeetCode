/*
一家商店正在打折销售糖果。每购买 两个糖果，商店会 免费送一个糖果。
免费送的糖果唯一的限制是：它的价格需要小于等于购买的两个糖果价格的 较小值。
比方说，总共有 4个糖果，价格分别为1，2，3和4，一位顾客买了价格为2 和3的糖果，那么他可以免费获得价格为 1的糖果，但不能获得价格为4的糖果。
给你一个下标从 0开始的整数数组cost，其中cost[i]表示第i个糖果的价格，请你返回获得 所有糖果的 最小总开销。
*/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    let ans = 0
    cost.sort((a, b) => b - a)
    for (let i = 0; i < cost.length; i += 3) {
        ans += (cost[i] || 0) + (cost[i + 1] || 0)
    }
    return ans
};
let cost = [6, 5, 7, 9, 2, 2]
// let cost = [5, 5]
console.log(minimumCost(cost)) // 23