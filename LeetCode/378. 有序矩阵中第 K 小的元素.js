/*给你一个 n x n 矩阵 matrix ，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
请注意，它是 排序后 的第 k 小元素，而不是第 k 个 不同 的元素。
你必须找到一个内存复杂度优于 O(n2) 的解决方案。
*/
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
	let newArr = matrix.flat(1).sort((a, b) => b - a)
	return newArr[newArr.length - k]
};
let matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k = 8 // 13
console.log(kthSmallest(matrix, k))