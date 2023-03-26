// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let step = 1
    let map = new Map()
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            map.set(step++, matrix[j][i])
        }
    }
    step = 1
    for (let m = 0; m < matrix.length; m++) {
        for (let n = 0; n < matrix.length; n++) {
            matrix[m][n] = map.get(step++)
        }
        matrix[m].reverse()
    }
    return matrix

    // 暴力解法
    // for(let i=0;i<Math.floor(n/2);i++){
    //     for(let j = 0;j<Math.floor((n+1)/2);j++){
    //         const temp = matrix[i][j]
    //         matrix[i][j] = matrix[n-1-j][i]
    //         matrix[n-1-j][i] = matrix[n-1-i][n-1-j]
    //         matrix[n-1-i][n-1-j] = matrix[j][n-1-i]
    //         matrix[j][n-1-i] = temp
    //     }
    // }
};
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotate(matrix)
console.log(matrix)