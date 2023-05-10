/*
有一个大型仓库使用拣货机器人从不同的货架间取货。
已知：
1、货架呈二维网格排列，网格中的每个货架只会放置一种商品。
2、受这代设备的技术水平所限，机器人只能沿上下左右四个方向移动，还不能沿斜线移动，请理解。
仓库当前使用的拣货算法是这样：
1、一张订单会包含X种商品，分布在X个货架上
2、结合将这X种商品的所在位置，将地图上的商品分解为Y个“商品堆”，然后同时派出Y个机器人，并发取货，每个机器人只负责一个“商品堆”。
3、“商品堆”的定义是上下左右彼此相邻的一组商品。
在订单被分析后，给你一个由 '1'（该货架有待取货物）和 '0'（该货架没有待取货物）组成的的二维网格表示货架地图，请计算需要派出的机器人的数量。
*/
function numIslands(grid) {
    let m = grid.length, n = grid
        [0].length
    let res = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                res++
                dfs(grid, i, j)
            }
        }
    }
    return res
}

function dfs(grid, i, j) {
    let m = grid.length, n = grid[0].length
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) return
    grid[i][j] = 0
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i, j + 1)
}

let grid = [[1, 1, 1, 1, 0], [1, 1, 0, 1, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 1]]
console.log(numIslands(grid)) // 3