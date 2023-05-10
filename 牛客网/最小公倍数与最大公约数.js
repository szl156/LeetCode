/**
 * 求最小公倍数
 * @param {number} a
 * @param {number} b
 * @return {number}
 * */
const lcm = (a, b) => {
    return a * b / gcd(a, b)
};
/**
 * 求最大公约数
 * @param {number} a
 * @param {number} b
 * @return {number}
 * */
const gcd = (a, b) => {
    if (b === 0) return a
    return gcd(b, a % b)
}
let a = 5
const func = (a) => {
    // lcm()-gcd()
    let b = a + 1
    let ans = b, max = lcm(a, b) - gcd(a, b)
    for (let i = 0; i < 15; i++) {
        let tmp = lcm(a, b) - gcd(a, b)
        console.log(b,tmp)
        ans = tmp > max ? b : ans
        b++
    }
    return ans
}
console.log(func(a))