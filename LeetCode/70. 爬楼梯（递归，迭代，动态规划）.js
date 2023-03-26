// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // 递归
    // if (n <= 1) return 1
    // return climbStairs(n - 1) + climbStairs(n - 2)
    // 迭代
    let b0 = 1, b1 = 1
    for (let i = 2; i <= n; i++) {
        [b1, b0] = [b1 + b0, b1]
    }
    return b1
    // 动态规划
    const ans = new Array(n)
    ans[0] = 1, ans[1] = 1
    for (let i = 2; i <= n; i++) {
        ans[i] = ans[i - 1] + ans[i - 2]
    }
    return ans[n]
    // 迭代>递归。能用迭代，不用递归
    // 此题动态规划算法明显优于迭代算法
};
console.log(climbStairs(55));