// 给定一个非负整数 n ，请计算 0 到 n 之间的每个数字的二进制表示中 1 的个数，并输出一个数组。
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    // 位运算
    const res = [0]
    for (let i = 1; i <= n; i++) {
        const smaller = i & (i - 1) // i&(i-1):二进制中1的个数+1
        res.push(res[smaller] + 1)
    }
    return res

    // 动态规划
    const dp = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i & 1)
    }
    return dp;

    // toString
    let ans = [0]
    for (let i = 1; i <= n; i++) {
        ans.push(i.toString(2).split('').filter(v => v === '1').length)
    }
    return ans
};