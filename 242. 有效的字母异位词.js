// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return s.length !== t.length && [...s].sort().join('') === [...t].sort().join()
};
const s = "a", t = "ab"
// true
console.log(isAnagram(s, t))
