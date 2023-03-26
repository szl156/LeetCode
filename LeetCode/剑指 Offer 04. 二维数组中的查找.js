/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    const arr = []
    matrix.forEach(v => arr.push(...v))
    arr.sort((a, b) => a - b)

    // 坐标法
    /*let x = matrix.length - 1
    let y = 0
    while (x >= 0 && y < matrix[0].length) {
        if (matrix[x][y] === target) {
            return true
        } else if (matrix[x][y] > target) {
            x--
        } else {
            y++
        }
    }
    return false*/

    // 暴力解法
    /*for (let arr of matrix) {
        if (arr.includes(target)) return true
    }
    return false*/
}
const matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]],
    target = 5
console.log(findNumberIn2DArray(matrix, target))
