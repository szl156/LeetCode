// 给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。
// 输入为 非空 字符串且只包含数字 1 和 0。
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // parseInt(string,radix) 将radix进制的string转换成10进制数字返回
    // toString(radix) 将数字转换成radix进制的字符串
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
    // 双指针
    let carry = 0
    let result = ''
    let i = a.length - 1
    let j = b.length - 1
    while (i >= 0 || j >= 0) {
        let sum = carry
        if (i >= 0) {
            sum += parseInt(a[i])
            i--
        }
        if (j >= 0) {
            sum += parseInt(b[j])
            j--
        }
        result = sum % 2 + result
        carry = Math.floor(sum / 2)
    }
    if (carry > 0) result = carry + result
    return result
};
let a = "1010", b = "1011"
console.log(addBinary(a, b));