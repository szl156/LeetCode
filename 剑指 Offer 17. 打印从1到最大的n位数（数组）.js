// 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数
// 比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    return new Array(Math.pow(10, n) - 1).fill(null).map((v, idx) => v = idx + 1)
};
let n = 1
console.log(printNumbers(n))