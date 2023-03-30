// 给定两个字符串 s 和 t 。返回 s 中包含 t 的所有字符的最短子字符串。
// 如果 s 中不存在符合条件的子字符串，则返回空字符串 "" 。
// 如果 s 中存在多个符合条件的子字符串，返回任意一个。
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    // 滑动窗口
    // 记录t字符串所需字符
    const tCount = new Array(128).fill(0)
    // 记录s字符串所需字符
    const sCount = new Array(128).fill(0)
    // 填充tCount
    for (const char of t) tCount[char.charCodeAt()]++
    // 定义左右指针,定义还需要的字符数量count
    let left = 0, right = 0, count = t.length
    // 定义最小长度和其起始下标
    let minLen = Infinity, minStart = 0
    // 遍历字符串s
    while (right < s.length) {
        // 右边界字符
        const charRight = s.charCodeAt(right)
        // 如果在t字符串中存在
        if (tCount[charRight] > 0) {
            // sCount更新
            sCount[charRight]++
            // 所需字符数量-1
            if (sCount[charRight] <= tCount[charRight]) count--
        }
        right++
        // 当满足所需字符条件时,从可行解中查找最优解
        while (count === 0) {
            // 左边界字符
            const charLeft = s.charCodeAt(left)
            // 更新minLen,minStart
            if (right - left < minLen) {
                minLen = right - left
                minStart = left
            }
            // 如果左边界字符是t中的字符串
            if (tCount[charLeft] > 0) {
                // sCount更新
                sCount[charLeft]--
                // 所需字符数量+1
                if (sCount[charLeft] < tCount[charLeft]) count++
            }
            left++
        }
    }
    // 返回最短子字符串
    return minLen === Infinity ? "" : s.substr(minStart, minLen);
};
let s = "ADOBECODEBANC", t = "ABC" //"BANC" 
console.log(minWindow(s, t));