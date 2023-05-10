// 老板一共需要给某个员工发奖金n元，可以选择一次发1元，也可以选择一次发2元，也可以选择一次发3元。请问老板给这位员工发放完n元奖金共有多少种不同的方法？
const CalulateMethodCount = (n) => {
    const dp = new Array(n + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= n; i++) {
        if (i >= 1) dp[i] += dp[i - 1]
        if (i >= 2) dp[i] += dp[i - 2]
        if (i >= 3) dp[i] += dp[i - 3]
    }
    return dp[n]
}
let n = 3
console.log(CalulateMethodCount(n))