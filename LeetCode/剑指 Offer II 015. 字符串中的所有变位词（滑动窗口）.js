// 给定两个字符串 s 和 p，找到 s 中所有 p 的 变位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
// 变位词 指字母相同，但排列不同的字符串。
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let result = []
    const sCount = new Array(26).fill(0)
    const pCount = new Array(26).fill(0)
    const aCharCode = 'a'.charCodeAt(0)
    // 更新p字符串哈希表
    for (let i = 0; i < p.length; i++) pCount[p.charCodeAt(i) - aCharCode]++
    for (let i = 0; i < s.length; i++) {
        // 新增字符
        sCount[s.charCodeAt(i) - aCharCode]++
        if (i >= p.length) sCount[s.charCodeAt(i - p.length) - aCharCode]--
        if (i >= p.length - 1) {
            let found = true
            for (let j = 0; j < 26; j++) {
                if (pCount[j] !== sCount[j]) {
                    found = false
                    break
                }
            }
            if (found) result.push(i - p.length + 1)
        }
    }
    return result
};
let s = "abab", p = "ab" // [0,1,2]
console.log(findAnagrams(s, p));