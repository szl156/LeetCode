// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。
// 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const map = new Map()
    const window = new Map()
    for (let c of s1) map.set(c, map.get(c) + 1 || 1)
    let left = 0, right = 0, valid = 0
    while (right < s2.length) {
        const c = s2[right++]
        if (map.has(c)) {
            if (window.get(c) === map.get(c)) valid++
            window.set(c, window.get(c) + 1 || 1)
        }
        if (right - left >= s1.length) {
            const d = s2[left++]
            if (map.size === valid) return true
            if (map.has(d)) {
                if (window.get(d) === map.get(d)) valid--
                window.set(d, window.get(d) - 1)
            }
        }
    }
    return false
};
let s1 = "ab", s2 = "eidbaooo"
console.log(checkInclusion(s1, s2));