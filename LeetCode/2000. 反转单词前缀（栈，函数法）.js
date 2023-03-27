// 给你一个下标从 0 开始的字符串 word 和一个字符 ch 。
// 找出 ch 第一次出现的下标 i ，反转 word 中从下标 0 开始、直到下标 i 结束（含下标 i ）的那段字符。
// 如果 word 中不存在字符 ch ，则无需进行任何操作。例如，如果 word = "abcdefd" 且 ch = "d"
// 那么你应该 反转 从下标 0 开始、直到下标 3 结束（含下标 3 ）。结果字符串将会是 "dcbaefd" 返回 结果字符串 。
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    // 栈
    let ans = ''
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== ch) ans = word[i] + ans
        else {
            ans = word[i] + ans
            ans += word.slice(i + 1, word.length)
            break
        }
        if (i === word.length - 1 && word[i] !== ch) return word
    }
    return ans

    // 函数法
    let index = word.indexOf(ch)
    let pre = word.slice(0, index + 1).split('').reverse().join('')
    let suf = word.slice(index + 1, word.length)
    return pre + suf
};
let word = "abcdefd", ch = "d" //"dcbaefd"
console.log(reversePrefix(word, ch));