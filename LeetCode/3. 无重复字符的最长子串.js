// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const map = new Map()
    let max = 0, left = 0
    let arr = s.split('')
    arr.forEach((item, index) => {
        if (map.has(arr[index]) && map.get(arr[index]) >= left) left = map.get(arr[index]) + 1
        map.set(arr[index], index)
        max = Math.max(max, index - left + 1)
    })
    return max
};
let s = " " // 3
console.log(lengthOfLongestSubstring(s))