/*
给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
在「杨辉三角」中，每个数是它左上方和右上方的数的和。*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	if (numRows === 0) return []
	let ans = [[1]]
	debugger
	for (let i = 1; i < numRows; i++) {
		let arr = ans[ans.length - 1]
		let row = []
		row.push(1)
		for (let j = 1; j < arr.length; j++) {
			row.push(arr[j - 1] + arr[j])
		}
		row.push(1)
		ans.push(row)
	}
	return ans
};
// const numRows = 5 //  [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
const numRows = 4 // [[1]]
console.log(generate(numRows))
