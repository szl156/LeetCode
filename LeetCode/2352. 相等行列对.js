/*
给你一个下标从 0 开始、大小为 n x n 的整数矩阵 grid ，返回满足 Ri 行和 Cj 列相等的行列对 (Ri, Cj) 的数目。
如果行和列以相同的顺序包含相同的元素（即相等的数组），则认为二者是相等的。
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
	const isArrayEqual = (arr1, arr2) => {
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) return false
		}
		return true
	}
	let count = 0
	for (let i = 0; i < grid.length; i++) {
		const col = []
		grid.forEach(row => col.push(row[i]))
		grid.map(row => {
			if (isArrayEqual(row, col)) count++
		})
	}
	return count
};
// const grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]] // 1
const grid = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]] // 3
console.log(equalPairs(grid))