/*
给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串 s ，判断字符串是否有效。
有效字符串需满足:
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if ((s.length & 1) === 1) return false
    let map = {
        '}': '{', ']': '[', ')': '('
    }
    let stack = []
    for (const el of s) {
        // 入栈
        if (map[el] === undefined) {
            stack.push(el)
        }
        // 出栈
        else if (map[el] !== stack.pop()) return false
    }
    return stack.length === 0
};
let s = "(]" // true
console.log(isValid(s))