/*
给定两个字符串形式的非负整数num1 和num2，计算它们的和并同样以字符串形式返回。
你不能使用任何內建的用于处理大整数的库（比如 BigInteger），也不能直接将输入的字符串转换为整数形式。
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    // 栈
    let stack1 = [], stack2 = []
    for (const s of num1) {
        stack1.push(s)
    }
    for (const s of num2) {
        stack2.push(s)
    }
    let ans = '', tmp, add = 0
    while (stack1.length || stack2.length) {
        let m = parseInt(stack1.length ? stack1.pop() : 0)
        let n = parseInt(stack2.length ? stack2.pop() : 0)
        tmp = m + n + add
        add = Math.floor(tmp/10)
        ans=(tmp%10).toString()+ans
    }
    if (tmp>=10)ans='1'+ans
    return ans
    // 补位运算
    /*    let len1 = num1.length, len2 = num2.length
        let dis = len1 - len2
        if (dis > 0) {
            while (dis) {
                num2 = '0' + num2
                dis--
            }
        } else if (dis < 0) {
            dis = -dis
            while (dis) {
                num1 = '0' + num1
                dis--
            }
        }
        let add = 0, ans = '', tmp
        for (let i = num1.length - 1; i >= 0; i--) {
            tmp = parseInt(num1[i]) + parseInt(num2[i])
            if (add) {
                tmp++
                add = 0
            }
            if (tmp >= 10) {
                ans = (tmp % 10).toString() + ans
                add++
            } else {
                ans = tmp + ans
            }
        }
        if (tmp >= 10) ans = '1' + ans
        return ans*/
};
let num1 = "456", num2 = "77"
console.log(addStrings(num1, num2)) // 533