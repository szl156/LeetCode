// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1）
// 每段绳子的长度记为 k[0],k[1]...k[m-1]
// 请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
// 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    // 动态规划  O(n²)
    let dp = new Array(n + 1).fill(0), nowBigger
    dp[2] = 1
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            nowBigger = Math.max(j * (i - j), j * dp[i - j])
            dp[i] = Math.max(dp[i], nowBigger)
        }
    }
    return dp[n]
    /*// 贪心算法：尽可能多的3 O(1)
    if (n < 4) return n - 1
    if (n % 3 === 0) return Math.pow(3, n / 3)
    if (n % 3 === 1) return Math.pow(3, Math.floor(n / 3) - 1) * 4
    if (n % 3 === 2) return Math.pow(3, Math.floor(n / 3)) * 2*/
};
let n = 10 // 36
console.log(cuttingRope(n))
