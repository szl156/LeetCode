/*
给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。
返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。
两个下标i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。
*/
/**
 * @param {string} s
 * @param {string} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    const ans = []
    let p = s.indexOf(c), q = s.indexOf(c, p + 1)
    for (let i = 0; i < s.length; i++) {
        if (q === -1) {
            ans[i] = Math.abs(i - p)
        } else if (i <= p) {
            ans[i] = p - i
        } else if (p < i && i < q) {
            const d1 = i - p, d2 = q - i
            ans[i] = d1 < d2 ? d1 : d2
        } else if (i === q) {
            ans[i] = 0
            p = q
            q = s.indexOf(c, p + 1)
        }
    }
    return ans
}
// let s = "loveleetcode", c = "e" // [3,2,1,0,1,0,0,1,2,2,1,0]
let s = "aaba", c = "b" // [2,1,0,1]
console.log(shortestToChar(s, c))