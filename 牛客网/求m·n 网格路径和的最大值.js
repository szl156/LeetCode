// 有一个m*n 的网格，在每个格子上有一个非0 整数。 你每次只能向下或者向右移动一格，求你从左上角移动到最右下角，路径上数字和的最大值。
let matrix = [[2, 3, 1], [2, 5, 3], [4, 2, 1]]
const maxValue = (matrix) => {
    const m = matrix.length, n = matrix[0].length
    const dp = new Array(m).fill(new Array(n).fill(0))
    dp[0][0] = matrix[0][0]
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + matrix[i][0]
    }
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + matrix[0][i]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1] + matrix[i][j])
        }
    }
    return dp[m - 1][n - 1]
}
console.log(maxValue(matrix))