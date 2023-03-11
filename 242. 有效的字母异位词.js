// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    //哈希表
    if (s.length !== t.length) return false
    const arr = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        arr[s.codePointAt(i) - 97]++
    }
    for (let i = 0; i < t.length; i++) {
        arr[t.codePointAt(i) - 97]--
        if (arr[t.codePointAt(i) - 97] < 0) return false
    }
    return true
    // sort
    // return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
};
const s = "anagram", t = "nagaram"
// const s = "rat", t = "cat"
// true
console.log(isAnagram(s, t))
