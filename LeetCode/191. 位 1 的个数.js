// 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    // 位运算
    let ret = 0
    while (n) {
        n &= n - 1
        ret++
    }
    return ret
    // toString()
    return n.toString(2).split('0').join('').length
};
let n = 11
console.log(hammingWeight(n));
