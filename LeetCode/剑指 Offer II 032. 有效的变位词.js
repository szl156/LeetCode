// 给定两个字符串 s 和 t ，编写一个函数来判断它们是不是一组变位词（字母异位词）。
// 注意：若 s 和 t 中每个字符出现的次数都相同且字符顺序不完全相同，则称 s 和 t 互为变位词（字母异位词）。
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length || s === t) return false
    let count = new Array(26).fill(0)
    for (let a of s) {
        let idx = a.charCodeAt() - 'a'.charCodeAt()
        count[idx]++
    }
    for (let b of t) {
        let idx = b.charCodeAt() - 'a'.charCodeAt()
        if (count[idx] == 0) return false
        count[idx]--
    }
    return true
};
let s = "anagram", t = "nagaram"
console.log(isAnagram(s, t)); //true