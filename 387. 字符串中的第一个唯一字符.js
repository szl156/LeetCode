// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) return i
    }
    return -1
};
const s = "aabb"
console.log(firstUniqChar(s))