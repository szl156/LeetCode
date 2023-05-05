/*
给你一个m x n的整数矩阵points（下标从 0开始）。一开始你的得分为 0，你想最大化从矩阵中得到的分数。
你的得分方式为：每一行中选取一个格子，选中坐标为(r, c)的格子会给你的总得分 增加points[r][c]。
然而，相邻行之间被选中的格子如果隔得太远，你会失去一些得分。对于相邻行r 和r + 1（其中0 <= r < m - 1），
选中坐标为(r, c1) 和(r + 1, c2)的格子，你的总得分减少abs(c1 - c2)
请你返回你能得到的 最大得分。
*/
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    const m = points.length;  //获取二维数组的行数
    const n = points[0].length;  //获取二维数组的列数
    const dp = new Array(n).fill(0);  //声明一个长度为n的一维数组dp，用于存储当前行中每个位置的最大值
    const max = new Array(n).fill(0);  //声明一个长度为n的一维数组max，用于在每次遍历时存储每一列上的最大值
    for (let i = 0; i < m; i++) {  //遍历每一行，确定当前行的最大值
        let maxL = 0;  //记录从左到右计算的当前位置前的最大值
        for (let j = 0; j < n; j++) {  //从左往右遍历当前行的每一个位置，确定每个位置左侧的最大值
            maxL = Math.max(maxL - 1, dp[j]);  //计算出该位置左侧的最大值maxL
            max[j] = maxL;  //将maxL存储到max数组中
        }
        let maxR = 0;  //记录从右到左计算的当前位置前的最大值
        for (let j = n - 1; j >= 0; j--) {  //从右往左遍历当前行的每一个位置，确定每个位置右侧的最大值，并且计算出当前行每个位置的最大值
            maxR = Math.max(maxR - 1, dp[j]);  //计算出该位置右侧的最大值maxR
            max[j] = Math.max(max[j], maxR);  //将maxR与max数组中对应位置的值取最大值
        }
        for (let j = 0; j < n; j++) {  //遍历当前行的每一个位置
            dp[j] = max[j] + points[i][j];  //通过dp[j] = max[j] + points[i][j]计算出当前行中每个位置的最大值
        }
    }
    let ans = 0;  //记录最大值
    for (let i = 0; i < n; i++) {  //遍历dp数组
        ans = Math.max(ans, dp[i]);  //找到其中的最大值
    }
    return ans;  //返回最大值
};

let points = [[1, 2, 3], [1, 5, 1], [3, 1, 1]]
console.log(maxPoints(points))  // 9