// 根据 逆波兰表示法，求该后缀表达式的计算结果。
// 有效的算符包括+、-、*、/。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
// 说明：
// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
            let b = stack.pop()
            let a = stack.pop()
            if (tokens[i] === '+') {
                stack.push(a + b)
            } else if (tokens[i] === '-') {
                stack.push(a - b)
            } else if (tokens[i] === '*') {
                stack.push(a * b)
            } else if (tokens[i] === '/') {
                stack.push(a / b > 0 ? Math.trunc(a / b) : Math.ceil(a / b))
            }
        } else {
            stack.push(parseInt(tokens[i], 10))
        }
    }
    return stack[0]
};
let tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
console.log(evalRPN(tokens))