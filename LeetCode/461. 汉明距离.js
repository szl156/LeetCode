// 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let count = 0, flag = 1
    while (flag) {
        const xBit = x & flag, yBit = y & flag
        if ((xBit || yBit) && xBit !== yBit) count++
        flag = flag << 1
    }
    return count
};
let x = 3, y = 1
console.log(hammingDistance(x, y)); // 2