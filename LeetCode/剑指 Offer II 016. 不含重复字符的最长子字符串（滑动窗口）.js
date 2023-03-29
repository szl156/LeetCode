// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 滑动窗口
    const map = new Map()
    let left = -1, maxLen = 0, right = 0
    while (right < s.length) {
        const c = s[right]
        // 当哈希表中存在和c相同的字符时，从末尾一直删除到该字符
        while (map.has(c)) {
            map.delete(s[left + 1])
            left++
        }
        map.set(c, right)
        maxLen = Math.max(maxLen, right - left)
        right++
    }
    return maxLen
};
// let s = "abcabcbb" //3
let s = "abba" //3
console.log(lengthOfLongestSubstring(s));