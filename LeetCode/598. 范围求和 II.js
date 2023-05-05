// 给你一个 m * n 的矩阵M，初始化时所有的 0 和一个操作数组 op ，
// 其中 ops[i] = [ai, bi] 意味着当所有的 0 <= x < ai 和 0 <= y < bi 时， M[x][y] 应该加 1
// 在执行完所有操作后，计算并返回矩阵中最大整数的个数。
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    if (ops.length === 0) return Math.pow(m, 2)
    let arr1 = [], arr2 = []
    for (let op of ops) {
        arr1.push(op[0])
        arr2.push(op[1])
    }
    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)
    return arr1[0] * arr2[0]
}
let m = 3, n = 3, ops = [[2, 2], [3, 3]]
maxCount(m, n, ops)