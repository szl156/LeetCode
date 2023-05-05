/*
给你一个由'1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
此外，你可以假设该网格的四条边均被水包围。
*/
/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let res = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                res++
                dfs(grid, i, j)
            }
        }
    }

    return res

};
const dfs = (grid, i, j) => {
    let m = grid.length, n = grid[0].length
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') return
    grid[i][j] = '0'
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i, j + 1)
}
let grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]
console.log(numIslands(grid)) // 3