// 给定两个整数 a 和 b ，求它们的除法的商 a/b ，要求不得使用乘号 '*'、除号 '/' 以及求余符号 '%' 。
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function (a, b) {
    let intMin = -Math.pow(2, 31);
    let intMax = Math.pow(2, 31) - 1;
    if (a === intMin && b === -1) return intMax // 溢出控制
    let sign = a > 0 && b > 0 || a < 0 && b < 0 ? 1 : -1 // 获取符号
    a = Math.abs(a)
    b = Math.abs(b)
    let ret = 0
    while (a >= b) {
        let sum = b;
        let temp = 1
        while (sum + sum <= a) {
            sum = sum + sum;
            temp = temp + temp;
        }
        a -= sum;
        ret += temp;
    }
    return ret * sign
};
let a = 15, b = 2
console.log(divide(a, b));