// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。
// 整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    // 数学方法
    if (n <= 0) {
        return false;
    }
    const maxPowerOfThree = Math.pow(3, Math.floor(Math.log10(Number.MAX_SAFE_INTEGER) / Math.log10(3)));
    return maxPowerOfThree % n === 0;
    // 循环
    let tmp = 1
    while (tmp < n) {
        tmp *= 3
    }
    return tmp === n
};
let n = 27 // true
console.log(isPowerOfThree(n));