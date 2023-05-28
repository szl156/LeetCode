/*
给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。
如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。
返回 合并后的字符串 。
*/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let arr1 = word1.split('')
    let arr2 = word2.split('')
    let ans = []
    while (arr1.length || arr2.length) {
        ans.push(arr1.shift())
        ans.push(arr2.shift())
    }
    return arr1.length ? ans.concat(arr1).join('') : ans.concat(arr2).join('')
}
let word1 = "ab", word2 = "pqrs"  //   a p b q   r   s
console.log(mergeAlternately(word1, word2))