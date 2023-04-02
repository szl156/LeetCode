// 给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串。
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    const arr = s.split('')
    const isPalindrome = (left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) return false
            left++
            right--
        }
        return true
    }
    let left = 0, right = s.length - 1
    while (left < right) {
        if (arr[left] !== arr[right]) return isPalindrome(left + 1, right) || isPalindrome(left, right - 1)
        else {
            left++
            right--
        }
    }
    return true
};
let s = "abc" // true
console.log(validPalindrome(s));