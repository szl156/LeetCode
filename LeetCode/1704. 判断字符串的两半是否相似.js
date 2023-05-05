/*
给你一个偶数长度的字符串 s 。将其拆分成长度相同的两半，前一半为 a ，后一半为 b 。
两个字符串 相似 的前提是它们都含有相同数目的元音（'a'，'e'，'i'，'o'，'u'，'A'，'E'，'I'，'O'，'U'）。
注意，s 可能同时含有大写和小写字母。
如果 a 和 b 相似，返回 true ；否则，返回 false 。
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let reg = /[aeiouAEIOU]/g
    let right = s.slice(s.length / 2), left = s.slice(0, s.length / 2)
    return left.match(reg).length === right.match(reg).length
    /*    let right = s.slice(s.length / 2), left = s.slice(0, s.length / 2)
        let leftCount = 0, rightCount = 0, halves = ['a', 'i', 'e', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        for (let i = 0; i < left.length; i++) {
            if (halves.includes(left[i])) leftCount++
            if (halves.includes(right[i])) rightCount++
        }
        return leftCount === rightCount*/
};
let s = "textbook"
console.log(halvesAreAlike(s))