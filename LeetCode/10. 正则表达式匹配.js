/*
给你一个字符串s和一个字符规律p，请你来实现一个支持 '.'和'*'的正则表达式匹配。
'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖整个字符串s的，而不是部分字符串。
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function (s, p) {
    // 正则表达式
    // return new RegExp('^' + p + '$').test(s)


    // 动态规划 aa a*
    // dp[i][j]表示s[0-i]个和p[0-j]个是否匹配
    // 1. 当p[j]=字母时，dp[i][j] = (p[j]==s[i] && dp[i-1][j-1])
    // 2. 当p[j]='.'时，dp[i][j] = dp[i-1][j-1]
    // 3. 当p[j]='*'时，将*和前面的字母算作一个整体来考虑匹配例如a*
    //    当p[j-1]==s[i]时，则可以匹配0-多个s[i]连续相同的字符
    //                     dp[i][j] = dp[i][j-2] （当匹配0个时，丢弃掉a*）
    //                     dp[i][j] = dp[i-1][j-2] （当匹配1个时，丢掉s[i],丢弃掉a*）
    //                     dp[i][j] = dp[i-1][j] （当匹配>=1个时，丢掉s[i],不丢弃掉a*,因为可以匹配多个）
    //                     上面2种可以合并为一种，因为dp[i-1][j]包含了dp[i-1][j-2]的情况
    //    当p[j-1]!=s[i]时，相当于匹配0个a*，此时应该丢弃a*，来转移动态方程
    //                     dp[i][j] = dp[i][j-2]

    let m = s.length
    let n = p.length
    // 初始化dp
    let dp = new Array(m + 1)
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(false)
    }
    dp[0][0] = true
    for (let i = 0; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] !== '*') {
                // 匹配*和.
                if (i > 0 && isMatch(i - 1, j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1]
                } else {
                    dp[i][j] = false
                }
            } else {
                if (i > 0 && isMatch(i - 1, j - 2)) {
                    // a*匹配 1个或者多个
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j]
                } else {
                    // a*匹配0个，等同于a*丢弃掉
                    dp[i][j] = dp[i][j - 2]
                }
            }
        }
    }
    return dp[m][n]
    function isMatch(i, j) {
        return (s[i] === p[j]) || p[j] === '.'
    }
};
let s = "aa", p = "a*" // false
console.log(isMatch(s, p))