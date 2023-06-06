/*
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
*/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    // 起始位置
    let startX = 0, startY = 0
    // 旋转圈数
    let loop = n >> 1
    // 中间位置
    let mid = n >> 1
    // 每一层填充元素个数
    let offset = 1
    // 填充数字
    let count = 1
    const ans = new Array(n).fill(0).map(() => new Array(n).fill(0))
    while (loop--) {
        let row = startX, col = startY
        // 从左到右
        for (; col < startY + n - offset; col++) {
            ans[row][col] = count++
        }
        // 从上到下
        for (; row < startX + n - offset; row++) {
            ans[row][col] = count++
        }
        // 从右到左
        for (; col > startY; col--) {
            ans[row][col] = count++
        }
        //从下到上
        for (; row > startX; row--) {
            ans[row][col] = count++
        }
        startX++
        startY++
        offset += 2
    }
    if ((n & 1) === 1) ans[mid][mid] = count
    return ans
};
let n = 3 // [[1,2,3],[8,9,4],[7,6,5]]
console.log(generateMatrix(n))