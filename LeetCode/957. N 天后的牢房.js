/*
监狱中 8 间牢房排成一排，每间牢房可能被占用或空置。
每天，无论牢房是被占用或空置，都会根据以下规则进行变更：
如果一间牢房的两个相邻的房间都被占用或都是空的，那么该牢房就会被占用。
否则，它就会被空置。
注意：由于监狱中的牢房排成一行，所以行中的第一个和最后一个牢房不存在两个相邻的房间。
给你一个整数数组 cells ，用于表示牢房的初始状态：如果第 i 间牢房被占用，则 cell[i]==1，否则 cell[i]==0 。另给你一个整数 n 。
请你返回 n 天后监狱的状况（即，按上文描述进行 n 次变更）。
*/
/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, n) {
	n = n % 14 + 14
	for (let i = 1; i <= n; i++) {
		let newCells = [...cells]
		for (let j = 1; j < cells.length - 1; j++) {
			if (cells[j - 1] === cells[j + 1]) newCells[j] = 1; else newCells[j] = 0
		}
		cells = newCells
		cells[0] = 0
		cells[cells.length - 1] = 0
	}
	return cells
};
let cells = [1, 0, 0, 1, 0, 0, 1, 0], n = 1000000000 // [0,0,1,1,1,1,1,0]
console.log(prisonAfterNDays(cells, n))