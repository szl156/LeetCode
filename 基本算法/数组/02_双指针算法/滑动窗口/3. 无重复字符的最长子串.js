// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const map = new Map()
    let max = 0
    for (let right = 0, left = 0; right < s.length; right++) {
        if (map.has(s[right]) && map.get(s[right]) >= left) left = map.get(s[right]) + 1
        map.set(s[right], right)
        max = Math.max(max, right - left + 1)
    }
    return max
};
let s = "abcabcbb" // 3
// let s = " " // 1
console.log(lengthOfLongestSubstring(s))