// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    // toString方法
    if (!s.trim()) return false
    return Number(s).toString() !== 'NaN'
    // 正则表达式
    // return /^[+-]?(\d+(\.\d*)?|(\.\d+))(e[+-]?\d+)?$/i.test(s.trim());
};
let s = ". 1"
console.log(isNumber(s))