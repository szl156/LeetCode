// 给定一个字符串数组 words，请计算当两个字符串 words[i] 和 words[j] 不包含相同字符时它们长度的乘积的最大值。
// 假设字符串中只包含英语的小写字母。如果没有不包含相同字符的一对字符串，返回 0。
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let n = words.length;
    let masks = new Array(n).fill(0);
    let maxVal = 0;
    for (let i = 0; i < n; i++) {
        let word = words[i];
        for (let j = 0; j < word.length; j++) {
            // 判断是否有重复字符
            masks[i] |= 1 << word.charCodeAt(j) - 'a'.charCodeAt();
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((masks[i] & masks[j]) === 0) {
                maxVal = Math.max(maxVal, words[i].length * words[j].length);
            }
        }
    }
    return maxVal;
};


let words = ["abcw", "baz", "foo", "bar", "fxyz", "abcdef"] // 16
console.log(maxProduct(words));