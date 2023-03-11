// 给你两个字符串 haystack 和 needle
// 请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）
// 如果 needle 不是 haystack 的一部分，则返回  -1
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // KMP算法
    // 1.求next数组
    const buildNext = (needle) => {
        let next = [], prefixLen = 0
        // next数组初始化
        next[0] = prefixLen
        for (let i = 1; i < needle.length; i++) {
            // 错配时，使prefixLen的值回退
            while (prefixLen > 0 && needle[i] != needle[prefixLen]) {
                prefixLen = next[prefixLen - 1]
            }
            // 匹配时，prefixLen+1
            if (needle[i] === needle[prefixLen]) prefixLen++
            next[i] = prefixLen
        }
        return next
    }
    // 2.字符串匹配
    const kmp = (haystack, needle) => {
        const next = buildNext(needle)
        let i = 0, j = 0
        // 开始匹配
        while (i < haystack.length) {
            // 若匹配，则继续
            if (haystack[i] === needle[j]) {
                i++
                j++
            }
            // 如果错配，则使模式串回退到next[j-1]的位置
            else if (j > 0) j = next[j - 1]
            else i++
            // 若模式串走到最后，则返回匹配串的初始下标
            if (j === needle.length) return i - j
        }
        return -1
    }
    return kmp(haystack, needle)

    // 函数法
    return haystack.indexOf(needle)
    // 暴力匹配
    const n = haystack.length; m = needle.length
    for (let i = 0; i + m <= n; i++) {
        let flag = true
        for (let j = 0; j < m; j++) {
            if (haystack[i + j] != needle[j]) {
                flag = !flag
                break
            }
        }
        if (flag) return i
    }
    return -1
};
const haystack = "aabaaabaaac", needle = "aabaaac"
// const haystack = "mississippi", needle = "issip"
console.log(strStr(haystack, needle))
