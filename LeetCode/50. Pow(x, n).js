// 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0 || n === 1) return n === 0 ? 1 : x
    else if (n < 0) return myPow(1 / x, -n)
    else return n % 2 === 0 ? myPow(x * x, n / 2) : myPow(x * x, Math.floor(n / 2)) * x
    // 位运算优化
    /*    if (n === 0) return 1
        if (n === 1) return x
        if (n === -1) return 1 / x
        // 右移运算代替除以2
        let result = myPow(x, n >> 1)
        result *= result
        if ((n & 1) === 1) result *= x
        return result*/
}
let x = 2.00000, n = 10
console.log(myPow(x, n))