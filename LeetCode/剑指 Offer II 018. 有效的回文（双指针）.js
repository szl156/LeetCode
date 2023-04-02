// 给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[\W_]/g, '').toLowerCase()
    let left = 0, right = s.length - 1
    while (left <= right) {
        if (s[left] !== s[right]) return false
        left++
        right--
    }
    return true
};
// let s = "A man, a plan, a canal: Panama" // true
let s = "ab_a" // false
console.log(isPalindrome(s));