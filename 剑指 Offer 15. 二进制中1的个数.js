// 编写一个函数，输入是一个无符号整数（以二进制串的形式）
// 返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量)
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0
    while (n !== 0) {
        n = n & (n - 1)
        count++
    }
    return count
    /*// toString函数用法
    let radix2 = n.toString(2)
    let count = 0
    for (const radix2Element of radix2) {
        if (radix2Element === '1') count++
    }
    return count*/
};
let n = 11
console.log(hammingWeight(n))