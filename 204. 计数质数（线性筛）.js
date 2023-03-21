// 给定整数 n ，返回 所有小于非负整数 n 的质数的数量 。
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    // 线性筛
    const isPrime = new Array(n).fill(1) // 初始化默认全是素数
    const primes = [] // 初始化素数数组
    for (let i = 2; i < n; i++) { // 从2开始
        if (isPrime(i)) primes.push(i) // 如果是素数，push进入素数数组
        for (let j = 0; j < primes.length && i * primes[j] < n; j++) {
            isPrime[i * primes[j]] = 0 // 将合数改为0
            if (i % primes[j] === 0) break
        }
    }
    return primes.length
    /* // 八进制巧解素数
    let count = n <= 2 ? 0 : 1
    const isCom = new Int8Array(n)
    for (let i = 3; i < n; i += 2) {
        if (!isCom[i]) {
            count++
            if (i * i < n) {
                for (let j = i; i * j < n; j += 2) {
                    isCom[i * j] = 1
                }
            }
        }
    }
    return count */
};
let n = 3 // 4
console.log(countPrimes(n));
