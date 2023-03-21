// 给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：
// answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
// answer[i] == "Fizz" 如果 i 是 3 的倍数。
// answer[i] == "Buzz" 如果 i 是 5 的倍数。
// answer[i] == i （以字符串形式）如果上述条件全不满足。

/**
 * @param {number} n
 * @return {string[]}
*/
var fizzBuzz = function (n) {
    let ans = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) ans.push("FizzBuzz")
        else if (i % 3 === 0) ans.push("Fizz")
        else if (i % 5 === 0) ans.push("Buzz")
        else ans.push('' + i)
    }
    return ans
};
let n = 15 //["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
console.log(fizzBuzz(n));
