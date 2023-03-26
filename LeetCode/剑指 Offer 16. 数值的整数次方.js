// 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，x^n）。不得使用库函数，同时不需要考虑大数问题。
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1
    if (n === 1) return x
    if (n === -1) return 1 / x
    let result = myPow(x, n >> 1)
    result *= result
    if ((n & 1) === 1) result *= x
    return result
};
