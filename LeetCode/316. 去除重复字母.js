/*
给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。
需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
*/
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (stack.includes(s[i])) continue
        while (s[i] < stack[stack.length - 1] && s.indexOf(stack[stack.length - 1], i) > i) {
            stack.pop()
        }
        stack.push(s[i])
    }
    return stack.join('')
};
let s = "cbacdcbc"
console.log(removeDuplicateLetters(s))
