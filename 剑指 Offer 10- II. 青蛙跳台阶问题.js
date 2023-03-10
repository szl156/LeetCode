// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (!n || n === 1) return 1
    let n1 = 0, n2 = 1
    for (let i = 0; i < n; i++) {
        [n1, n2] = [n2, (n1 + n2) % 1000000007]
    }
    return n2 % 1000000007
    // 数组
    // if (!n || n === 1) return 1
    // const arr = [1, 1]
    // for (let i = 0; i < n; i++) {
    //     arr.push((arr[arr.length - 1] + arr[arr.length - 2]) % 1000000007)
    // }
    // return arr[n]
};
const n = 7
console.log(numWays(n))