// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
    if (astr.length > 26) return false
    const map = new Array(26).fill(0)
    const aCharCode = 'a'.charCodeAt(0)
    for (const astrElement of astr) {
        let item = astrElement.charCodeAt(0) - aCharCode
        if (map[item] > 0) return false
        map[item]++
    }
    return true
};
let s = "letcod"
console.log(isUnique(s))