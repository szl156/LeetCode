// 给定一个字符串 s ，请计算这个字符串中有多少个回文子字符串。
// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    // 中心扩展O(n^2)
    let count = 0
    for (let i = 0; i < s.length; i++) {
        for (let l = i, r = i; l >= 0 && s[l] === s[r]; l--, r++)count++
        for (let l = i, r = i + 1; l >= 0 && s[l] === s[r]; l--, r++)count++
    }
    return count

    // 双指针O(n^2)
    /* let count = 0
    for (let i = 0; i < s.length; i++) {
        let s1 = '', s2 = ''
        for (let j = i; j < s.length; j++) {
            s1 += s[j], s2 = s[j] + s2
            if (s1 === s2) count++
        }
    }
    return count */

    // 暴力破解O(n^3)
    /* function isPal(s, l, r) {
        for (let i = l; i < (l + r) / 2; i++) {
            if (s[i] !== s[l + r - i - 1]) return false;
        }
        return true
    }
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            if (isPal(s, i, j)) count++;
        }
    }
    return count; */
};
let s = "abc"
console.log(countSubstrings(s));