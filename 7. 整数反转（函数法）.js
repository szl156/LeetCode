// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // 函数法
    if (x === 0) return 0
    const ans = parseInt(('' + x).split('').reverse().join(''))
    return ans > 2 ** 31 - 1 ? 0 : ans * (x / Math.abs(x))
};
const x = -123
console.log(reverse(x))
