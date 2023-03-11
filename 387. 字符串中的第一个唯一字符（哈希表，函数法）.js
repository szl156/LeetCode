// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    // 哈希表
    const cache = new Array(26).fill(0)
    let len = s.length
    for (let i = 0; i < len; i++) {
        let code = s.codePointAt(i) - 97
        cache[code]++
    }
    for (let i = 0; i < len; i++) {
        let code = s.codePointAt(i) - 97
        if (cache[code] === 1) return i
    }
    // 函数法
    // for (let i = 0; i < s.length; i++) {
    //     if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) return i
    // }
    return -1
};
const s = "aabbe"
console.log(firstUniqChar(s))
// -1