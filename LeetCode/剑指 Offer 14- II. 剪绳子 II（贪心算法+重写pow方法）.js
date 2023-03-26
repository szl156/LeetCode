// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1）
// 每段绳子的长度记为 k[0],k[1]...k[m - 1] 。请问 k[0]*k[1]*...*k[m - 1] 可能的最大乘积是多少
// 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    // 贪心算法
    /*if (n < 4) return n - 1
    // 重写pow方法
    const pow = (x, y) => {
        let result = 1
        for (let i = 0; i < y; i++) {
            result = result * x % 1000000007
        }
        return result
    }
    if (n % 3 === 0) return pow(3, n / 3)
    if (n % 3 === 1) return pow(3, Math.floor(n / 3) - 1) * 4
    if (n % 3 === 2) return pow(3, Math.floor(n / 3)) * 2*/
    // 循环
    if (n < 4) return n - 1;
    let res = 1;
    while (n > 4) {
        res *= 3;
        res %= 1000000007;
        n -= 3
    }
    return res * n % 1000000007
};
let n = 120
console.log(cuttingRope(n))