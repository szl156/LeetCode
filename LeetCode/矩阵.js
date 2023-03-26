/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    let sum = 0
    grid = grid.map(v => v.sort((a, b) => b - a))
    console.log(grid)
    for (let i = 0; i < grid[0].length; i++) {
        let column = []
        for (let j = 0; j < grid.length; j++) {
            column.push(grid[j][i])
        }
        sum += Math.max(...column)
    }
    return sum
};
// grid = [[1,2,4],[3,3,1]]
grid = [[10]]

console.log(deleteGreatestValue(grid))
