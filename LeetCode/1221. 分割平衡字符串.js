// 平衡字符串 中，'L' 和 'R' 字符的数量是相同的
// 给你一个平衡字符串 s，请你将它分割成尽可能多的子字符串，并满足：
// 每个子字符串都是平衡字符串
// 返回可以通过分割得到的平衡字符串的 最大数量
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let ans = 0, LNum = 0
    if (s.length === 0) return 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') LNum++; else LNum--
        if (LNum === 0) ans++
    }
    return ans
};
const s = "RLRRLLRLRL"
console.log(balancedStringSplit(s))