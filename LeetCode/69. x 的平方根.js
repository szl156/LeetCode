/*
给你一个非负整数 x ，计算并返回x的 算术平方根 。
由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
*/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x
    let left = 1, right = Math.floor(x / 2)
    while (left <= right) {
        const mid = Math.floor((right + left) / 2)
        const square = mid * mid
        if (square === x) return mid
        if (square > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return right
};
let x = 2147483647 // 46340
console.log(mySqrt(x))